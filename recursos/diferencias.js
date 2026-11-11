/* Academia — aviso «Tus equipos guardaron cosas distintas» (lo usan el menú y la demostración).
   Muestra las dos versiones de cada diferencia y aplica la decisión del alumno.
   No lee ni escribe el almacenamiento del navegador por su cuenta: todo pasa por el objeto
   "sync" que recibe (window.AcademiaSync en el menú; un equipo ficticio en la demostración).
   Todo el texto se inserta con textContent. */
(() => {
  'use strict';
  const el = (tag, attrs, ...kids) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) { if (v === null || v === undefined || v === false) continue; if (k === 'class') e.className = v; else if (k === 'text') e.textContent = v; else e.setAttribute(k, v); }
    kids.flat().forEach((x) => { if (x !== null && x !== undefined) e.append(x instanceof Node ? x : document.createTextNode(String(x))); });
    return e;
  };
  const fecha = (t) => (t ? new Date(t).toLocaleString('es', { dateStyle: 'short', timeStyle: 'short' }) : 'fecha desconocida');
  const valorDe = (raw) => { try { return JSON.parse(raw); } catch (e) { return raw; } };
  const nombreClase = (c) => (c.modulo === 'E' ? 'Electiva' : 'Módulo ' + c.modulo) + ' · Clase ' + c.orden;

  /* op: { sync, catalogo, seccion, lista, mensaje, titulo, alDecidir(d, eleccion), confirmar(texto) } */
  function crear(op) {
    const S = op.sync;
    const porId = {};
    (op.catalogo || []).forEach((curso) => (curso.clases || []).forEach((c) => { if (c.id) porId[c.id] = { curso, c }; }));
    function queEs(d) {
      const m = d.clave.match(/^academia:([^:]+):(.*)$/) || [];
      const info = porId[m[1]];
      const donde = info ? info.curso.nombre + ' · ' + nombreClase(info.c) + ': ' + info.c.titulo : (m[1] || d.clave);
      const resto = m[2] || '';
      let que = 'Dato guardado de la clase';
      if (d.parte) que = d.parte === 'examen' ? 'Resultado del examen final' : d.parte === 'repaso' ? 'Resultado del repaso' : 'Resultado de la actividad «' + d.parte + '»';
      else if (/^notas:/.test(resto)) que = 'Tus notas y dudas';
      else if (/^codigo:/.test(resto)) que = 'Tu código del reto «' + resto.slice(7) + '»';
      return { donde, que };
    }
    function mostrarValor(d, raw) {
      if (raw === null || raw === undefined) return el('p', { class: 'meta', text: '(sin dato)' });
      const v = valorDe(raw);
      if (d.parte && v && typeof v === 'object') return el('p', { class: 'valor-res', text: v.ok + ' de ' + v.total + ' correctas' });
      return el('pre', { class: 'log valor-texto', tabindex: '0', text: typeof v === 'string' ? (v || '(vacío)') : JSON.stringify(v, null, 1) });
    }
    function pintar() {
      const lista = S && S.diferencias ? S.diferencias() : [];
      op.seccion.hidden = !lista.length && !op.mensaje.textContent;
      op.lista.replaceChildren();
      op.lista.dataset.ids = lista.map((d) => d.id).join(',');
      lista.forEach((d) => {
        const { donde, que } = queEs(d);
        const iguales = d.actual === d.otra.v;
        const li = el('li', { class: 'dif' }, el('h3', { text: que }), el('p', { class: 'meta', text: donde }));
        li.append(el('div', { class: 'dif-versiones' },
          el('div', { class: 'dif-version' }, el('p', { class: 'dif-tit', text: 'Versión que se usa ahora' }), mostrarValor(d, d.actual)),
          el('div', { class: 'dif-version' }, el('p', { class: 'dif-tit', text: 'La otra versión · ' + d.otra.equipo + ' · ' + fecha(d.otra.t) }), mostrarValor(d, d.otra.v))));
        if (iguales) li.append(el('p', { class: 'meta', text: 'Las dos versiones ya son iguales: solo confirma que lo revisaste.' }));
        const acc = el('div', { class: 'acciones' });
        const boton = (texto, eleccion, cls) => {
          const b = el('button', { type: 'button', class: cls }, texto);
          b.addEventListener('click', () => decidir(d, eleccion, que));
          return b;
        };
        acc.append(boton(iguales ? 'Marcar como revisada' : 'Quedarme con la que se usa ahora', 'actual', 'btn'));
        if (!iguales) {
          acc.append(boton('Usar la otra versión', 'otra', 'btn btn-sec'));
          if (!d.parte && typeof valorDe(d.actual) === 'string' && typeof valorDe(d.otra.v) === 'string') acc.append(boton('Unir las dos (no se pierde nada)', 'unir', 'btn btn-sec'));
        }
        li.append(acc);
        op.lista.append(li);
      });
    }
    function decidir(d, eleccion, que) {
      const confirmar = op.confirmar || ((t) => window.confirm(t));
      if (eleccion === 'otra' && !confirmar('Se usará la otra versión. La que se usa ahora quedará guardada como respaldo. ¿Continuar?')) return;
      if (!S.resolver(d.id, eleccion)) { op.mensaje.textContent = 'No se pudo aplicar la decisión. Recarga la página e inténtalo otra vez.'; return; }
      op.mensaje.textContent = '✔ ' + que + ': ' + (eleccion === 'otra' ? 'se usa la otra versión.' : eleccion === 'unir' ? 'se unieron las dos versiones.' : 'se conserva la que se usaba.') + (S.conectado() ? ' Guardando en GitHub…' : '');
      if (S.conectado()) S.subirAhora();
      pintar();
      if (op.alDecidir) op.alDecidir(d, eleccion);
      const siguiente = op.lista.querySelector('button');
      (siguiente || op.titulo).focus();
    }
    op.titulo.tabIndex = -1;
    pintar();
    return { pintar, ids: () => op.lista.dataset.ids || '' };
  }
  window.AcademiaDiferencias = { crear };
})();
