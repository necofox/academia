/* Academia — motor de las clases interactivas:
   reloj de clase, lectura en voz alta, actividades, exámenes, terminal simulada y resumen.
   Todo el texto se inserta con textContent (nunca innerHTML).
   Si recursos/sync.js está cargado, espera a traer el avance de GitHub antes de arrancar. */
((window.AcademiaSync && window.AcademiaSync.listo) || Promise.resolve()).then(() => {
  'use strict';

  const C = window.CLASE || {};
  const PFX = 'academia:';
  const SYNC = window.AcademiaSync || null;
  const sget = (k, d) => { try { const v = localStorage.getItem(PFX + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } };
  const sset = (k, v) => {
    try { localStorage.setItem(PFX + k, JSON.stringify(v)); } catch (e) { return; /* sin almacenamiento */ }
    if (SYNC) SYNC.guardado(PFX + k);
  };
  const ck = (k) => (C.id || 'clase') + ':' + k;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  function el(tag, attrs, ...kids) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === null || v === undefined || v === false) continue;
      if (k === 'class') e.className = v;
      else if (k === 'text') e.textContent = v;
      else e.setAttribute(k, v === true ? '' : v);
    }
    for (const kid of kids.flat()) if (kid !== null && kid !== undefined) e.append(kid instanceof Node ? kid : document.createTextNode(String(kid)));
    return e;
  }

  /* ---------- Avisos ---------- */
  const toasts = el('div', { class: 'toasts', role: 'status', 'aria-live': 'polite' });
  document.body.append(toasts);
  function aviso(msg) { const t = el('div', { class: 'toast', text: msg }); toasts.append(t); setTimeout(() => t.remove(), 7000); }
  function beep() {
    try {
      const a = new (window.AudioContext || window.webkitAudioContext)();
      const o = a.createOscillator(); const g = a.createGain();
      o.frequency.value = 880; g.gain.value = 0.07; o.connect(g); g.connect(a.destination);
      o.start(); setTimeout(() => { o.stop(); a.close(); }, 260);
    } catch (e) { /* sin audio */ }
  }

  /* ---------- Reloj y cronómetro de la clase ---------- */
  const bloques = C.bloques || [];
  const total = bloques.reduce((a, b) => a + b.min, 0) * 60000;
  let crono = sget(ck('crono'), { acumulado: 0, inicio: null });
  const corriendo = () => crono.inicio !== null;
  const transcurrido = () => Math.min(total, crono.acumulado + (corriendo() ? Date.now() - crono.inicio : 0));
  const guardarCrono = () => sset(ck('crono'), crono);
  function fmt(ms) {
    const s = Math.max(0, Math.floor(ms / 1000));
    return Math.floor(s / 3600) + ':' + String(Math.floor(s % 3600 / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
  }
  const inicioDe = (i) => bloques.slice(0, i).reduce((a, b) => a + b.min, 0) * 60000;
  function bloqueEn(ms) {
    for (let i = 0; i < bloques.length; i++) {
      const fin = inicioDe(i + 1);
      if (ms < fin) return { i, restante: fin - ms };
    }
    return { i: bloques.length - 1, restante: 0 };
  }

  let ui = {};
  let ultimoBloque = null;
  function montarReloj() {
    const z = $('#reloj'); if (!z || !bloques.length) return;
    ui.hora = el('span', { class: 'r-val' }, '--:--');
    ui.trans = el('span', {}, '0:00:00');
    ui.barra = el('div');
    const barra = el('div', { class: 'barra', role: 'progressbar', 'aria-label': 'Avance de la clase', 'aria-valuemin': '0', 'aria-valuemax': '100', 'aria-valuenow': '0' }, ui.barra);
    ui.barraBox = barra;
    ui.bloque = el('a', { href: '#' });
    ui.brest = el('span', { class: 'r-sub' });
    ui.play = el('button', { type: 'button', class: 'btn' }, '▶ Iniciar clase');
    const reset = el('button', { type: 'button', class: 'btn-mini' }, '↺ Reiniciar');
    z.append(el('div', { class: 'reloj' },
      el('div', { class: 'r-item' }, el('span', { class: 'r-lab' }, 'Hora'), ui.hora),
      el('div', { class: 'r-item' }, el('span', { class: 'r-lab' }, 'Tiempo de clase'),
        el('span', { class: 'r-val' }, ui.trans, ' / ' + fmt(total)), barra),
      el('div', { class: 'r-item r-bloque' }, el('span', { class: 'r-lab' }, 'Bloque actual'), ui.bloque, ui.brest),
      el('div', { class: 'r-botones' }, ui.play, reset)));
    ui.play.addEventListener('click', () => {
      if (corriendo()) { crono.acumulado = transcurrido(); crono.inicio = null; }
      else { if (transcurrido() >= total) crono.acumulado = 0; crono.inicio = Date.now(); beep(); }
      guardarCrono(); tick();
    });
    reset.addEventListener('click', () => {
      if (!window.confirm('¿Reiniciar el reloj de la clase a 0:00:00?')) return;
      crono = { acumulado: 0, inicio: null }; guardarCrono(); ultimoBloque = null; tick();
    });

    // Agenda lateral
    const nav = $('#agenda');
    if (nav) {
      const ol = el('ol');
      ui.agenda = bloques.map((b) => {
        const li = el('li', {}, el('a', { href: '#' + b.id }, el('span', { class: 'min' }, b.min + ' min'), el('span', {}, b.titulo)));
        ol.append(li); return li;
      });
      nav.append(el('details', { open: true }, el('summary', {}, 'Agenda · ' + fmt(total).replace(/:00$/, '') + ' h'), ol));
    }

    // Cabecera de cada bloque: número, minutos y botón para mover el reloj
    bloques.forEach((b, i) => {
      const sec = document.getElementById(b.id); if (!sec) return;
      const kick = $('.bloque-cab .kicker', sec);
      if (kick) kick.textContent = 'Bloque ' + (i + 1) + ' de ' + bloques.length + ' · ' + b.min + ' min';
      const cab = $('.bloque-cab', sec);
      if (cab) {
        const btn = el('button', { type: 'button', class: 'btn-mini' }, '⏱ Empezar este bloque');
        btn.addEventListener('click', () => { crono.acumulado = inicioDe(i); crono.inicio = Date.now(); ultimoBloque = i; guardarCrono(); tick(); aviso('⏱ Reloj en: ' + b.titulo); });
        cab.append(btn);
      }
    });
    tick(); setInterval(tick, 1000);
  }

  function tick() {
    if (!ui.hora) return;
    ui.hora.textContent = new Date().toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const t = transcurrido();
    if (corriendo() && t >= total) {
      crono.acumulado = total; crono.inicio = null; guardarCrono(); beep();
      aviso('🏁 ¡Terminaron las ' + fmt(total).replace(/:00$/, '') + ' h de clase! Genera tu resumen al final de la página.');
    }
    ui.trans.textContent = fmt(t);
    const pct = total ? Math.round(t / total * 100) : 0;
    ui.barra.style.width = pct + '%';
    ui.barraBox.setAttribute('aria-valuenow', String(pct));
    const { i, restante } = bloqueEn(t);
    const b = bloques[i];
    ui.bloque.textContent = b.titulo;
    ui.bloque.setAttribute('href', '#' + b.id);
    ui.brest.textContent = t >= total ? 'Clase completada' : 'quedan ' + fmt(restante).replace(/^0:/, '') + ' en este bloque';
    ui.play.textContent = corriendo() ? '⏸ Pausar' : (t > 0 && t < total ? '▶ Continuar' : '▶ Iniciar clase');
    if (ui.agenda) ui.agenda.forEach((li, k) => {
      const actual = k === i && t < total;
      li.classList.toggle('actual', actual);
      li.classList.toggle('hecho', k < i || t >= total);
      const a = li.firstChild; if (actual) a.setAttribute('aria-current', 'step'); else a.removeAttribute('aria-current');
    });
    if (corriendo() && ultimoBloque !== null && i !== ultimoBloque) {
      beep(); aviso('⏭ Siguiente bloque: ' + b.titulo + ' (' + b.min + ' min)');
    }
    ultimoBloque = i;
  }

  /* ---------- Voz ---------- */
  const synth = 'speechSynthesis' in window ? window.speechSynthesis : null;
  let voces = [];
  const ajustes = Object.assign({ voz: '', vel: 1 }, sget('voz', {}));
  function cargarVoces() { if (synth) voces = synth.getVoices(); }
  function puntuar(v, lang) {
    const l = (v.lang || '').toLowerCase().replace('_', '-');
    let p = 0;
    if (/natural|online|neural/i.test(v.name)) p += 10;
    if (lang === 'es' && /es-(mx|us|419|pe|co|ar|cl)/.test(l)) p += 3;
    if (lang === 'en' && /en-us/.test(l)) p += 3;
    if (/google/i.test(v.name)) p += 2;
    return p;
  }
  function mejor(lang, nombre) {
    const lista = voces.filter((v) => (v.lang || '').toLowerCase().startsWith(lang));
    const elegida = nombre && lista.find((v) => v.name === nombre);
    if (elegida) return elegida;
    return lista.sort((a, b) => puntuar(b, lang) - puntuar(a, lang))[0] || null;
  }
  let ultimaFrase = null; // referencia para que el navegador no la descarte a mitad
  function decir(texto, lang, alTerminar, velocidad) {
    if (!synth) return;
    const u = new SpeechSynthesisUtterance(texto);
    const v = mejor(lang, lang === 'es' ? ajustes.voz : '');
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = lang === 'es' ? 'es-ES' : 'en-US';
    u.rate = velocidad || (lang === 'en' ? Math.min(ajustes.vel, 1) * 0.85 : ajustes.vel);
    if (alTerminar) { u.onend = alTerminar; u.onerror = alTerminar; }
    ultimaFrase = u;
    synth.speak(u);
  }

  let token = 0;
  let actual = null;
  const limpiar = (t) => t.replace(/\p{Extended_Pictographic}|️|‍/gu, '').replace(/\s+/g, ' ').trim();
  // Divide un elemento en tramos de español e inglés (los tramos con lang="en" se leen con voz inglesa)
  function segmentosDe(n) {
    if (n.dataset.decir) return [{ t: n.dataset.decir, lang: 'es' }];
    const segs = []; let buf = '';
    const vaciar = () => { if (buf.trim()) segs.push({ t: buf, lang: 'es' }); buf = ''; };
    const recorrer = (nodo) => {
      for (const c of nodo.childNodes) {
        if (c.nodeType === 3) { buf += c.textContent; continue; }
        if (c.nodeType !== 1 || c.tagName === 'BUTTON' || c.classList.contains('no-leer')) continue;
        const l = (c.getAttribute('lang') || '').toLowerCase();
        if (l.startsWith('en')) { vaciar(); segs.push({ t: c.textContent, lang: 'en' }); continue; }
        recorrer(c);
        if (c.tagName === 'TD' || c.tagName === 'TH') buf += '. ';
        else if (c.tagName === 'BR') buf += ' ';
      }
    };
    recorrer(n); vaciar();
    return segs;
  }
  function trozos(t) {
    const partes = t.split(/(?<=[.!?;:])\s+/); const out = []; let buf = '';
    for (const p of partes) {
      if (buf && (buf + ' ' + p).length > 220) { out.push(buf); buf = p; } else buf = buf ? buf + ' ' + p : p;
    }
    if (buf) out.push(buf);
    return out;
  }
  function colaDe(cont) {
    const nodos = $$('h3,h4,p,li,tr,pre[data-decir]', cont).filter((n) =>
      !n.closest('.no-leer') &&
      !(n.tagName === 'P' && n.closest('li')) &&
      !(n.tagName === 'TR' && n.closest('thead')) &&
      !(n.tagName !== 'TR' && n.closest('tr')));
    const cola = [];
    nodos.forEach((n) => segmentosDe(n).forEach((s) => {
      const t = limpiar(s.t);
      if (/[\p{L}\p{N}]/u.test(t)) trozos(t).forEach((x) => cola.push({ nodo: n, texto: x, lang: s.lang }));
    }));
    return cola;
  }
  function marcar(n) {
    $$('.leyendo').forEach((x) => x.classList.remove('leyendo'));
    if (!n) return;
    n.classList.add('leyendo');
    const r = n.getBoundingClientRect();
    if (r.top < 90 || r.bottom > window.innerHeight - 40) n.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
  function reproducir(ctrl) {
    if (actual && actual !== ctrl) detener(actual);
    actual = ctrl; const t = ++token; ctrl.ui('leyendo'); synth.cancel();
    const paso = () => {
      if (t !== token) return;
      const item = ctrl.cola[ctrl.i];
      if (!item) { detener(ctrl); return; }
      marcar(item.nodo);
      decir(item.texto, item.lang || 'es', () => { if (t !== token) return; ctrl.i++; paso(); });
    };
    setTimeout(paso, 80);
  }
  function pausar(ctrl) { token++; synth.cancel(); ctrl.ui('pausado'); }
  function detener(ctrl) { token++; if (synth) synth.cancel(); ctrl.i = 0; ctrl.ui('quieto'); marcar(null); if (actual === ctrl) actual = null; }
  function pararTodo() { if (actual) detener(actual); else if (synth) { token++; synth.cancel(); } }

  function montarLectores() {
    $$('.lectura').forEach((cont) => {
      const b = el('button', { type: 'button', class: 'btn' }, '🔊 Escuchar esta parte');
      const s = el('button', { type: 'button', class: 'btn btn-sec', hidden: true }, '⏹ Detener');
      cont.prepend(el('div', { class: 'lector no-leer' }, b, s));
      const ctrl = { cont, cola: [], i: 0, estado: 'quieto' };
      ctrl.ui = (estado) => {
        ctrl.estado = estado;
        b.textContent = estado === 'leyendo' ? '⏸ Pausar' : estado === 'pausado' ? '▶ Continuar' : '🔊 Escuchar esta parte';
        s.hidden = estado === 'quieto';
        cont.classList.toggle('activa', estado !== 'quieto');
      };
      if (!synth) { b.disabled = true; b.textContent = 'Voz no disponible en este navegador'; return; }
      b.addEventListener('click', () => {
        if (ctrl.estado === 'leyendo') pausar(ctrl);
        else if (ctrl.estado === 'pausado') reproducir(ctrl);
        else { ctrl.cola = colaDe(cont); ctrl.i = 0; reproducir(ctrl); }
      });
      s.addEventListener('click', () => detener(ctrl));
    });

    // Botones 🔊 (y 🐢 lento si lleva data-lento) para palabras y frases en inglés
    $$('[data-en]').forEach((n) => {
      const w = n.dataset.en;
      const grupo = el('span', { class: 'audio-en no-leer' }, botonesIngles(w, n.hasAttribute('data-lento')));
      n.append(grupo);
    });
  }
  function botonesIngles(w, conLento) {
    const b = el('button', { type: 'button', class: 'btn-mini', 'aria-label': 'Escuchar cómo se pronuncia: ' + w }, '🔊');
    b.addEventListener('click', () => { pararTodo(); setTimeout(() => decir(w, 'en'), 60); });
    const out = [b];
    if (conLento) {
      const l = el('button', { type: 'button', class: 'btn-mini', 'aria-label': 'Escuchar lento: ' + w }, '🐢');
      l.addEventListener('click', () => { pararTodo(); setTimeout(() => decir(w, 'en', null, 0.55), 60); });
      out.push(l);
    }
    if (!synth) out.forEach((x) => { x.disabled = true; });
    return out;
  }

  function montarVoz() {
    const z = $('#voz'); if (!z) return;
    const det = el('details', { class: 'ajustes' }, el('summary', { class: 'btn-mini' }, '🔊 Ajustes de voz'));
    const panel = el('div', { class: 'ajustes-panel' });
    det.append(panel); z.append(det);
    if (!synth) { panel.append(el('p', { text: 'Este navegador no puede leer en voz alta. Prueba con Microsoft Edge o Google Chrome.' })); return; }
    const sv = el('select', { id: 'voz-es' });
    const lvel = el('label', { for: 'voz-vel' });
    const rv = el('input', { id: 'voz-vel', type: 'range', min: '0.6', max: '1.6', step: '0.1', value: String(ajustes.vel) });
    const probar = el('button', { type: 'button', class: 'btn btn-sec' }, '▶ Probar voz');
    panel.append(el('label', { for: 'voz-es' }, 'Voz en español'), sv, lvel, rv, probar,
      el('p', { text: 'Consejo: abre las clases en Microsoft Edge y elige una voz que diga "Natural" u "Online": suenan mucho más humanas.' }));
    const pintarVel = () => { lvel.textContent = 'Velocidad: ' + Number(ajustes.vel).toFixed(1) + 'x'; };
    pintarVel();
    function poblar() {
      cargarVoces();
      const es = voces.filter((v) => (v.lang || '').toLowerCase().startsWith('es'))
        .sort((a, b) => puntuar(b, 'es') - puntuar(a, 'es'));
      sv.replaceChildren();
      if (!es.length) { sv.append(el('option', { value: '', text: 'Voz predeterminada del sistema' })); return; }
      es.forEach((v) => sv.append(el('option', { value: v.name, text: v.name + ' (' + v.lang + ')' })));
      const m = mejor('es', ajustes.voz); if (m) sv.value = m.name;
    }
    poblar();
    synth.onvoiceschanged = poblar;
    sv.addEventListener('change', () => { ajustes.voz = sv.value; sset('voz', ajustes); });
    rv.addEventListener('input', () => { ajustes.vel = Number(rv.value); pintarVel(); sset('voz', ajustes); });
    probar.addEventListener('click', () => { pararTodo(); setTimeout(() => decir('Hola. Esta es la voz que te va a explicar las clases.', 'es'), 60); });
  }

  /* ---------- Copiar ---------- */
  async function copiar(texto, btn) {
    try { await navigator.clipboard.writeText(texto); }
    catch (e) {
      const ta = el('textarea'); ta.value = texto; document.body.append(ta); ta.select();
      try { document.execCommand('copy'); } catch (_) { /* nada */ }
      ta.remove();
    }
    const o = btn.textContent; btn.textContent = '✔ Copiado'; setTimeout(() => { btn.textContent = o; }, 1500);
  }
  function montarCopiar() {
    $$('pre[data-copiar]').forEach((pre) => {
      const wrap = el('div', { class: 'codigo' });
      const b = el('button', { type: 'button', class: 'btn-mini copiar', 'aria-label': 'Copiar comando' }, 'Copiar');
      pre.replaceWith(wrap); wrap.append(pre, b);
      b.addEventListener('click', () => copiar(pre.textContent, b));
    });
  }

  /* ---------- Actividades (tarjetas con preguntas) ---------- */
  const resultados = sget(ck('res'), {});
  function guardarRes(id, ok, tot) { resultados[id] = { ok, total: tot }; sset(ck('res'), resultados); }

  function montarActividad(box) {
    const id = box.dataset.actividad; const A = (C.actividades || {})[id]; if (!A) return;
    const primer = {};
    const marcador = el('p', { class: 'marcador', role: 'status' });
    const lista = el('div', { class: 'tarjetas' + (A.variante ? ' ' + A.variante : '') });
    A.items.forEach((it, i) => {
      const card = el('article', { class: 'tarjeta' });
      const h = el('h3', { class: 'tarjeta-titulo' });
      if (it.etiqueta) h.append(el('span', { class: 'etiqueta ' + (it.nivel || ''), text: it.etiqueta }));
      h.append(document.createTextNode(it.titulo));
      card.append(h);
      if (it.meta) card.append(el('p', { class: 'meta', text: it.meta }));
      if (it.texto) card.append(el('p', { text: it.texto }));
      if (it.audio) card.append(el('div', { class: 'acciones' }, el('span', { class: 'meta' }, 'Escucha:'), botonesIngles(it.audio, true)));
      if (it.log) card.append(el('pre', { class: 'log', text: it.log }));
      const sel = {};
      A.preguntas.forEach((P, pi) => {
        const gid = id + '-' + i + '-' + pi;
        const ops = (it.opciones && it.opciones[pi]) || P.opciones;
        sel[pi] = new Set();
        const opts = el('div', { class: 'opciones' + (P.columna ? ' col' : ''), role: 'group', 'aria-labelledby': gid });
        ops.forEach((op) => {
          const b = el('button', { type: 'button', class: 'opcion', 'aria-pressed': 'false' }, op);
          b.addEventListener('click', () => {
            if (P.multiple) { if (sel[pi].has(op)) sel[pi].delete(op); else sel[pi].add(op); }
            else sel[pi] = new Set([op]);
            $$('.opcion', opts).forEach((x) => x.setAttribute('aria-pressed', sel[pi].has(x.textContent) ? 'true' : 'false'));
          });
          opts.append(b);
        });
        card.append(el('div', { class: 'grupo' },
          el('p', { class: 'grupo-titulo', id: gid, text: P.label + (P.multiple ? ' (puedes marcar varias)' : '') }), opts));
      });
      let intentos = 0;
      const fb = el('div', { class: 'feedback', role: 'status' });
      const check = el('button', { type: 'button', class: 'btn btn-sec' }, 'Comprobar');
      check.addEventListener('click', () => {
        let ok = true; let vacio = false;
        A.preguntas.forEach((P, pi) => {
          const corr = new Set(it.respuestas[pi]);
          if (!sel[pi].size) vacio = true;
          if (sel[pi].size !== corr.size || [...sel[pi]].some((x) => !corr.has(x))) ok = false;
        });
        fb.replaceChildren();
        if (vacio) { fb.className = 'feedback aviso'; fb.textContent = 'Responde todas las preguntas de esta tarjeta antes de comprobar.'; return; }
        intentos++;
        if (!(i in primer)) primer[i] = ok;
        card.classList.toggle('ok', ok); card.classList.toggle('no', !ok);
        if (ok) {
          fb.className = 'feedback bien';
          fb.append(el('strong', { text: '✔ ¡Correcto! ' }), it.explica || '');
        } else if (intentos === 1) {
          fb.className = 'feedback mal';
          fb.append(el('strong', { text: '✘ Todavía no. ' }), 'Pista: ' + (it.pista || 'vuelve a leer la teoría de este bloque y piensa otra vez.'));
        } else {
          fb.className = 'feedback mal';
          const sol = A.preguntas.map((P, pi) => (P.corto || 'Respuesta') + ': ' + it.respuestas[pi].join(' + ')).join(' · ');
          fb.append(el('strong', { text: '✘ La respuesta era → ' + sol + '. ' }), it.explica || '');
        }
        actualizar();
      });
      card.append(check, fb);
      lista.append(card);
    });
    function actualizar() {
      const n = Object.keys(primer).length; const ok = Object.values(primer).filter(Boolean).length;
      marcador.textContent = 'Respondidas: ' + n + ' de ' + A.items.length + ' · Correctas al primer intento: ' + ok;
      if (n === A.items.length) guardarRes(id, ok, A.items.length);
    }
    box.append(marcador, lista); actualizar();
  }

  /* ---------- Exámenes ---------- */
  function montarQuiz(box) {
    const id = box.dataset.quiz; const Q = (C.quizzes || {})[id]; if (!Q) return;
    const marc = el('p', { class: 'marcador', role: 'status' });
    const ol = el('ol', { class: 'quiz-lista' });
    let resp = {};
    function act() {
      const n = Object.keys(resp).length; const ok = Object.values(resp).filter(Boolean).length; const N = Q.preguntas.length;
      if (n < N) marc.textContent = 'Respondidas ' + n + ' de ' + N;
      else {
        marc.textContent = 'Resultado: ' + ok + ' de ' + N + ' — ' + (ok === N ? '🏆 ¡Perfecto!' : ok >= N * 0.7 ? '👏 ¡Aprobado!' : '📚 Repasa la teoría y vuelve a intentarlo.');
        guardarRes(id, ok, N);
      }
    }
    function pintar() {
      ol.replaceChildren(); resp = {};
      Q.preguntas.forEach((q, i) => {
        const qid = id + '-q' + i;
        const opts = el('div', { class: 'opciones col', role: 'group', 'aria-labelledby': qid });
        const fb = el('p', { class: 'feedback', role: 'status' });
        q.opciones.forEach((op, oi) => {
          const b = el('button', { type: 'button', class: 'opcion' }, 'abcd'[oi] + ') ' + op);
          b.addEventListener('click', () => {
            if (i in resp) return;
            resp[i] = oi === q.correcta;
            $$('.opcion', opts).forEach((x, xi) => { x.disabled = true; if (xi === q.correcta) x.classList.add('correcta'); });
            if (oi !== q.correcta) b.classList.add('incorrecta');
            fb.className = 'feedback ' + (resp[i] ? 'bien' : 'mal');
            fb.replaceChildren(el('strong', { text: resp[i] ? '✔ Correcto. ' : '✘ Incorrecto. ' }), q.explica || '');
            act();
          });
          opts.append(b);
        });
        ol.append(el('li', { class: 'pregunta' }, el('p', { class: 'enunciado', id: qid, text: q.q }), opts, fb));
      });
      act();
    }
    const rep = el('button', { type: 'button', class: 'btn btn-sec' }, '↺ Repetir examen');
    rep.addEventListener('click', pintar);
    box.append(marc, ol, rep); pintar();
  }

  /* ---------- Terminal simulada ---------- */
  function montarTerminal(box) {
    const tid = box.dataset.terminal; const T = (C.terminales || {})[tid]; if (!T) return;
    // mayusculas: distingue mayúsculas (Python). sinEspacios: ignora espacios fuera de comillas (2+3 = 2 + 3).
    const norm = (s) => {
      const x = T.mayusculas ? s : s.toLowerCase();
      if (T.sinEspacios) return x.replace(/("[^"]*"|'[^']*')|\s+/g, (m, q) => q || '');
      return x.replace(/\s*\|\s*/g, ' | ').replace(/\s+/g, ' ').trim();
    };
    const mapa = {};
    Object.entries(T.comandos).forEach(([k, v]) => { mapa[norm(k)] = k; (v.alias || []).forEach((a) => { mapa[norm(a)] = k; }); });
    const hechas = new Set(sget(ck('term:' + tid), []));
    const ul = el('ul', { class: 'misiones', 'aria-label': 'Misiones de la terminal' });
    const lis = T.misiones.map((m) => {
      const li = el('li', {}, el('span', { class: 'check', 'aria-hidden': 'true' }, '○'), el('span', {}, m.texto), el('span', { class: 'sr-only' }));
      ul.append(li); return li;
    });
    const marc = el('p', { class: 'marcador', role: 'status' });
    function pintarMis() {
      let n = 0;
      T.misiones.forEach((m, i) => {
        const ok = hechas.has(m.cmd); if (ok) n++;
        lis[i].classList.toggle('hecha', ok);
        lis[i].children[0].textContent = ok ? '✔' : '○';
        lis[i].children[2].textContent = ok ? ' (completada)' : ' (pendiente)';
      });
      marc.textContent = 'Misiones completadas: ' + n + ' de ' + T.misiones.length + (n === T.misiones.length ? ' 🏆' : '');
    }
    const pant = el('div', { class: 'pantalla', role: 'log', 'aria-live': 'polite', 'aria-label': 'Salida de la terminal', tabindex: '0' });
    const inpId = 'term-' + tid;
    const inp = el('input', { id: inpId, type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-label': 'Escribe un comando y pulsa Enter' });
    const form = el('form', { class: 'linea' }, el('label', { class: 'prompt', for: inpId }, T.prompt), inp);
    const linea = (texto, cls) => { pant.append(el('pre', { class: cls || '', text: texto })); pant.scrollTop = pant.scrollHeight; };
    if (T.bienvenida) linea(T.bienvenida, 'tip');
    const hist = []; let hi = 0;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const raw = inp.value; if (!raw.trim()) return;
      hist.push(raw); hi = hist.length; inp.value = '';
      linea(T.prompt + ' ' + raw, 'eco');
      const n = norm(raw);
      if (n === 'cls' || n === 'clear') { pant.replaceChildren(); return; }
      if (n === 'help' || n === 'ayuda') { linea(T.ayuda, 'tip'); return; }
      const k = mapa[n];
      if (k) {
        const c = T.comandos[k];
        linea(c.salida);
        if (c.explica) linea('💡 ' + c.explica, 'tip');
        hechas.add(k); sset(ck('term:' + tid), [...hechas]); pintarMis();
      } else {
        const cmd = raw.trim().split(/\s+/)[0];
        linea((T.error || '{cmd}: comando no reconocido.').split('{cmd}').join(cmd).split('{linea}').join(raw.trim()), 'error');
      }
    });
    inp.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp' && hi > 0) { hi--; inp.value = hist[hi]; e.preventDefault(); }
      else if (e.key === 'ArrowDown') { hi = Math.min(hist.length, hi + 1); inp.value = hist[hi] || ''; e.preventDefault(); }
    });
    box.append(ul, marc, el('div', { class: 'term' },
      el('div', { class: 'term-barra', 'aria-hidden': 'true' }, el('i'), el('i'), el('i'), T.titulo || 'Windows PowerShell'),
      pant, form));
    pintarMis();
  }

  /* ---------- Editor de JavaScript ----------
     El código se ejecuta en un Worker aparte: si hay un bucle infinito se detiene a los 3 s
     sin congelar la página. Si el navegador no permite Workers, se ejecuta en la página. */
  function fmtv(v) {
    if (typeof v === 'string') return v;
    if (v === undefined) return 'undefined';
    if (v === null || typeof v === 'number' || typeof v === 'boolean' || typeof v === 'bigint') return String(v);
    if (typeof v === 'function') return '[función ' + (v.name || 'anónima') + ']';
    try { return JSON.stringify(v); } catch (e) { return String(v); }
  }
  const WORKER_SRC = fmtv.toString() + `
const enviar = (tipo, a) => postMessage({ tipo: tipo, texto: a.map(fmtv).join(' ') });
console.log = (...a) => enviar('log', a); console.info = console.log;
console.warn = (...a) => enviar('warn', a); console.error = (...a) => enviar('error', a);
self.alert = (m) => enviar('log', ['[alert] ' + m]);
onmessage = (e) => {
  try { (new Function(e.data))(); postMessage({ tipo: 'fin' }); }
  catch (err) { postMessage({ tipo: 'excepcion', nombre: (err && err.name) || 'Error', texto: String((err && err.message) || err) }); }
};`;
  const AYUDA_ERR = {
    ReferenceError: 'Usaste un nombre que JavaScript no conoce. Revisa que esté bien escrito, con mayúsculas y minúsculas exactas (console, no Console).',
    SyntaxError: 'Hay algo mal escrito: revisa que cada comilla, paréntesis ( ) y llave { } se abra y se cierre.',
    TypeError: 'Estás usando un valor de una forma que no se puede, por ejemplo llamar como función algo que no lo es.'
  };
  let workerURL = null;
  function ejecutarLocal(codigo, salir, terminar) {
    const orig = { log: console.log, info: console.info, warn: console.warn, error: console.error };
    console.log = (...a) => salir('log', a.map(fmtv).join(' ')); console.info = console.log;
    console.warn = (...a) => salir('warn', a.map(fmtv).join(' '));
    console.error = (...a) => salir('error', a.map(fmtv).join(' '));
    try { (new Function(codigo))(); } catch (err) { salir('excepcion', { nombre: err.name || 'Error', texto: String(err.message || err) }); }
    finally { Object.assign(console, orig); }
    terminar();
  }
  function ejecutarJS(codigo, salir, terminar) {
    let w;
    try {
      if (!workerURL) workerURL = URL.createObjectURL(new Blob([WORKER_SRC], { type: 'text/javascript' }));
      w = new Worker(workerURL);
    } catch (e) { ejecutarLocal(codigo, salir, terminar); return; }
    let fin = false;
    const acabar = () => { if (fin) return; fin = true; clearTimeout(limite); terminar(); setTimeout(() => w.terminate(), 1000); };
    const limite = setTimeout(() => {
      if (fin) return; fin = true; w.terminate();
      salir('timeout', '⏱ Tu código tardó más de 3 segundos y lo detuve. ¿Tienes un bucle que nunca termina?');
      terminar();
    }, 3000);
    w.onmessage = (e) => {
      const m = e.data;
      if (m.tipo === 'fin') acabar();
      else if (m.tipo === 'excepcion') { salir('excepcion', m); acabar(); }
      else salir(m.tipo, m.texto);
    };
    // Si el Worker no puede arrancar (algunos navegadores con archivos locales), se ejecuta en la página.
    w.onerror = (e) => {
      e.preventDefault();
      if (fin) return;
      fin = true; clearTimeout(limite); w.terminate();
      ejecutarLocal(codigo, salir, terminar);
    };
    w.postMessage(codigo);
  }

  function montarEditor(box) {
    const id = box.dataset.editor; const E = (C.editores || {})[id]; if (!E) return;
    const key = ck('codigo:' + id);
    const taId = 'ed-' + id;
    const ta = el('textarea', { id: taId, class: 'codigo-js', spellcheck: 'false', autocapitalize: 'off', autocomplete: 'off', rows: String(E.filas || Math.max(4, E.codigo.split('\n').length + 1)) });
    ta.value = sget(key, E.codigo);
    ta.addEventListener('input', () => sset(key, ta.value));
    const run = el('button', { type: 'button', class: 'btn' }, '▶ Ejecutar');
    const reset = el('button', { type: 'button', class: 'btn-mini' }, '↺ Restaurar código');
    const salida = el('div', { class: 'salida', role: 'log', 'aria-live': 'polite', 'aria-label': 'Salida de la consola', tabindex: '0' });
    const fb = el('div', { class: 'feedback', role: 'status' });
    let intentos = 0;
    function validar(lineas, error) {
      const V = E.validar; let ok = !error;
      if (ok && V.esperado) ok = V.esperado.length === lineas.length && V.esperado.every((x, i) => x.trim() === String(lineas[i]).trim());
      if (ok && V.minLineas) ok = lineas.length >= V.minLineas;
      if (ok && V.contiene) ok = V.contiene.every((s) => lineas.some((l) => l.includes(s)));
      if (ok && V.codigoIncluye) ok = V.codigoIncluye.every((s) => ta.value.includes(s));
      intentos++;
      fb.className = 'feedback ' + (ok ? 'bien' : 'mal');
      if (ok) {
        fb.append(el('strong', { text: '✔ ¡Reto superado! ' }), E.exito || '');
        const h = sget(ck('editores'), {}); h[id] = true; sset(ck('editores'), h);
      } else if (error) {
        fb.append(el('strong', { text: '✘ Todavía no. ' }), 'Primero corrige el error que aparece en la consola.');
      } else {
        fb.append(el('strong', { text: '✘ Todavía no. ' }),
          intentos >= 3 && E.solucion ? 'Una solución posible: ' + E.solucion : 'Pista: ' + (E.pista || 'compara tu salida con lo que pide el reto.'));
      }
    }
    function ejecutar() {
      salida.replaceChildren(); fb.replaceChildren(); fb.className = 'feedback';
      const lineas = []; let error = null;
      run.disabled = true;
      ejecutarJS(ta.value, (tipo, dato) => {
        if (tipo === 'excepcion') {
          error = dato;
          salida.append(el('pre', { class: 'error', text: '❌ ' + dato.nombre + ': ' + dato.texto }));
          if (AYUDA_ERR[dato.nombre]) salida.append(el('pre', { class: 'tip', text: '💡 ' + AYUDA_ERR[dato.nombre] }));
        } else if (tipo === 'timeout') {
          error = { nombre: 'Tiempo' }; salida.append(el('pre', { class: 'error', text: dato }));
        } else {
          lineas.push(dato); salida.append(el('pre', { class: tipo === 'log' ? '' : tipo, text: dato }));
        }
        salida.scrollTop = salida.scrollHeight;
      }, () => {
        run.disabled = false;
        if (!lineas.length && !error) salida.append(el('pre', { class: 'tip', text: '(Tu código se ejecutó, pero no mostró nada. Usa console.log(...) para ver resultados.)' }));
        if (E.validar) validar(lineas, error);
      });
    }
    run.addEventListener('click', ejecutar);
    ta.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') { e.preventDefault(); ejecutar(); } });
    reset.addEventListener('click', () => { ta.value = E.codigo; sset(key, ta.value); salida.replaceChildren(); fb.replaceChildren(); fb.className = 'feedback'; });
    box.append(el('div', { class: 'editor' },
      el('div', { class: 'term-barra', 'aria-hidden': 'true' }, el('i'), el('i'), el('i'), E.titulo || 'practica.js'),
      el('label', { for: taId, class: 'sr-only' }, 'Código JavaScript' + (E.titulo ? ' de ' + E.titulo : '')),
      ta,
      el('div', { class: 'acciones editor-acciones' }, run, reset, el('span', { class: 'meta' }, 'Atajo: Ctrl + Enter')),
      el('p', { class: 'salida-tit' }, 'Consola (salida)'),
      salida), fb);
  }

  /* ---------- Notas y resumen ---------- */
  function montarNotas() {
    $$('textarea[data-notas]').forEach((ta) => {
      const k = ck('notas:' + ta.dataset.notas);
      ta.value = sget(k, '');
      ta.addEventListener('input', () => sset(k, ta.value));
    });
  }
  function montarResumen() {
    const z = $('#resumen'); if (!z) return;
    const b = el('button', { type: 'button', class: 'btn' }, '📋 Generar mi resumen');
    const cp = el('button', { type: 'button', class: 'btn btn-sec', hidden: true }, 'Copiar resumen');
    const pre = el('pre', { class: 'log', hidden: true, tabindex: '0' });
    b.addEventListener('click', () => {
      const res = sget(ck('res'), {});
      const L = [C.titulo || 'Clase', 'Fecha: ' + new Date().toLocaleDateString('es'), 'Tiempo de clase: ' + fmt(transcurrido()) + ' de ' + fmt(total)];
      Object.entries(C.actividades || {}).forEach(([id, A]) => { const r = res[id]; L.push('- ' + A.titulo + ': ' + (r ? r.ok + '/' + r.total + ' al primer intento' : 'sin terminar')); });
      Object.entries(C.quizzes || {}).forEach(([id, Q]) => { const r = res[id]; L.push('- ' + Q.titulo + ': ' + (r ? r.ok + '/' + r.total : 'sin terminar')); });
      Object.entries(C.terminales || {}).forEach(([id, T]) => {
        const h = sget(ck('term:' + id), []);
        L.push('- Terminal: ' + T.misiones.filter((m) => h.includes(m.cmd)).length + '/' + T.misiones.length + ' misiones');
      });
      const retos = Object.entries(C.editores || {}).filter(([, E]) => E.validar);
      if (retos.length) {
        const h = sget(ck('editores'), {});
        L.push('- Retos de código: ' + retos.filter(([id]) => h[id]).length + '/' + retos.length + ' superados');
      }
      $$('textarea[data-notas]').forEach((ta) => { if (ta.value.trim()) L.push('', 'Mis notas y dudas:', ta.value.trim()); });
      pre.textContent = L.join('\n'); pre.hidden = false; cp.hidden = false;
    });
    cp.addEventListener('click', () => copiar(pre.textContent, cp));
    z.append(el('div', { class: 'acciones' }, b, cp), pre);
  }

  /* ---------- Inicio ---------- */
  cargarVoces();
  montarVoz();
  montarReloj();
  montarLectores();
  montarCopiar();
  $$('[data-actividad]').forEach(montarActividad);
  $$('[data-quiz]').forEach(montarQuiz);
  $$('[data-terminal]').forEach(montarTerminal);
  $$('[data-editor]').forEach(montarEditor);
  montarNotas();
  montarResumen();
  window.addEventListener('beforeunload', () => { if (synth) synth.cancel(); });

  // Indicador de sincronización con GitHub en la barra superior
  const top = $('.top');
  if (top && SYNC) {
    const chip = el('span', { class: 'sync-chip', role: 'status' });
    const pintar = (d) => { if (!d) return; chip.textContent = '☁ ' + d.texto; chip.dataset.tipo = d.tipo; };
    pintar(SYNC.ultimoEstado());
    document.addEventListener('academia-sync', (e) => pintar(e.detail));
    top.append(chip);
  }
});
