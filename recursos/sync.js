/* Academia — sincronización del avance con GitHub.
   Guarda el avance (claves "academia:*" del navegador) en el archivo progreso.json de un
   repositorio PRIVADO, usando una clave de acceso (token) que el alumno pega una vez por equipo.
   Debe cargarse ANTES de academia.js. Si no hay token o no hay internet, todo sigue funcionando
   con el avance guardado en el navegador. */
(() => {
  'use strict';
  const CFG = { owner: 'necofox', repo: 'academia-progreso', ruta: 'progreso.json' };
  const PFX = 'academia:';
  const NO_SYNC = new Set(['academia:voz', 'academia:menu:curso']); // preferencias de cada equipo
  const K_TOKEN = 'academia-sync:token';
  const K_TIEMPOS = 'academia-sync:tiempos';
  const K_ESTADO = 'academia-sync:estado';

  const ls = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* sin almacenamiento */ } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* sin almacenamiento */ } },
    claves() { try { return Object.keys(localStorage); } catch (e) { return []; } }
  };
  const token = () => ls.get(K_TOKEN);
  const tiempos = () => { try { return JSON.parse(ls.get(K_TIEMPOS) || '{}'); } catch (e) { return {}; } };
  // Las voces dependen de cada equipo y navegador: no se sincronizan
  const sincronizable = (k) => k.startsWith(PFX) && !NO_SYNC.has(k) && !k.startsWith('academia:voz');

  function estado(texto, tipo) {
    ls.set(K_ESTADO, JSON.stringify({ texto, tipo, cuando: Date.now() }));
    document.dispatchEvent(new CustomEvent('academia-sync', { detail: { texto, tipo } }));
  }

  const b64dec = (s) => new TextDecoder().decode(Uint8Array.from(atob(s.replace(/\s/g, '')), (c) => c.charCodeAt(0)));
  const b64enc = (s) => { let bin = ''; new TextEncoder().encode(s).forEach((b) => { bin += String.fromCharCode(b); }); return btoa(bin); };

  function api(url, metodo, cuerpo, tk) {
    return fetch('https://api.github.com/repos/' + CFG.owner + '/' + CFG.repo + url, {
      method: metodo || 'GET',
      cache: 'no-store',
      headers: { Authorization: 'Bearer ' + (tk || token()), Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' },
      body: cuerpo ? JSON.stringify(cuerpo) : undefined
    });
  }
  async function leerRemoto() {
    const r = await api('/contents/' + CFG.ruta);
    if (r.status === 404) return { datos: { claves: {} }, sha: null };
    if (!r.ok) throw new Error(r.status === 401 ? 'la clave no es válida o venció' : 'error ' + r.status);
    const j = await r.json();
    return { datos: JSON.parse(b64dec(j.content)), sha: j.sha };
  }

  // Trae al navegador las claves del archivo remoto que sean más nuevas que las de este equipo
  function fusionar(remoto) {
    const t = tiempos(); let cambios = 0;
    Object.entries((remoto && remoto.claves) || {}).forEach(([k, e]) => {
      if (!sincronizable(k) || !e) return;
      if ((e.t || 0) > (t[k] || 0)) { ls.set(k, e.v); t[k] = e.t; cambios++; }
    });
    ls.set(K_TIEMPOS, JSON.stringify(t));
    return cambios;
  }
  function locales() {
    const t = tiempos(); const out = {};
    ls.claves().filter(sincronizable).forEach((k) => { out[k] = { v: ls.get(k), t: t[k] || 0 }; });
    return out;
  }

  let temporizador = null; let subiendo = false; let otraVez = false;
  async function subir() {
    clearTimeout(temporizador); temporizador = null;
    if (!token()) return;
    if (subiendo) { otraVez = true; return; }
    subiendo = true; estado('Guardando en GitHub…', 'trabajando');
    try {
      for (let intento = 0; intento < 3; intento++) {
        const { datos, sha } = await leerRemoto();
        fusionar(datos);
        const claves = Object.assign({}, datos.claves || {});
        Object.entries(locales()).forEach(([k, e]) => { if (!claves[k] || e.t > (claves[k].t || 0) || (!e.t && !claves[k])) claves[k] = e; });
        const cuerpo = {
          message: 'Avance ' + new Date().toISOString(),
          content: b64enc(JSON.stringify({ actualizado: new Date().toISOString(), claves }, null, 1))
        };
        if (sha) cuerpo.sha = sha;
        const r = await api('/contents/' + CFG.ruta, 'PUT', cuerpo);
        if (r.ok) { estado('✔ Avance guardado en GitHub', 'ok'); break; }
        if (r.status !== 409 && r.status !== 422) throw new Error(r.status === 401 ? 'la clave no es válida o venció' : 'error ' + r.status);
        if (intento === 2) throw new Error('otro equipo guardó al mismo tiempo');
      }
    } catch (e) {
      estado('⚠ No se pudo guardar en GitHub (' + e.message + '). Tu avance sigue en este equipo.', 'error');
    }
    subiendo = false;
    if (otraVez) { otraVez = false; programar(); }
  }
  function programar() { clearTimeout(temporizador); temporizador = setTimeout(subir, 2500); }

  // Lo llama el motor de las clases cada vez que guarda algo
  function guardado(k) {
    if (!sincronizable(k)) return;
    const t = tiempos(); t[k] = Date.now(); ls.set(K_TIEMPOS, JSON.stringify(t));
    if (token()) programar();
  }

  // Al salir o cambiar de pestaña, guarda lo pendiente
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && temporizador) subir(); });

  async function conectar(tk) {
    tk = (tk || '').trim();
    if (!tk) return { ok: false, mensaje: 'Pega tu clave primero.' };
    let r;
    try { r = await api('', 'GET', null, tk); } catch (e) { return { ok: false, mensaje: 'Sin conexión a internet.' }; }
    if (r.status === 401) return { ok: false, mensaje: 'La clave no es válida. Revisa que la copiaste completa.' };
    if (r.status === 404) return { ok: false, mensaje: 'La clave no tiene acceso al repositorio ' + CFG.owner + '/' + CFG.repo + '.' };
    if (!r.ok) return { ok: false, mensaje: 'GitHub respondió con error ' + r.status + '.' };
    ls.set(K_TOKEN, tk);
    // El avance que ya había en este equipo se marca como nuevo para subirlo
    const t = tiempos(); ls.claves().filter(sincronizable).forEach((k) => { if (!t[k]) t[k] = Date.now(); });
    ls.set(K_TIEMPOS, JSON.stringify(t));
    try { const { datos } = await leerRemoto(); fusionar(datos); } catch (e) { /* se reintenta al subir */ }
    await subir();
    return { ok: true, mensaje: '¡Conectado! Tu avance ahora se guarda en GitHub.' };
  }
  function desconectar() { ls.del(K_TOKEN); estado('Este equipo ya no sincroniza con GitHub.', 'apagado'); }

  const listo = (async () => {
    if (!token()) { estado('Sin sincronizar: conecta GitHub desde el menú.', 'apagado'); return; }
    estado('Sincronizando…', 'trabajando');
    try {
      const espera = new Promise((_, no) => setTimeout(() => no(new Error('GitHub tardó demasiado')), 6000));
      const { datos } = await Promise.race([leerRemoto(), espera]);
      fusionar(datos);
      estado('✔ Sincronizado con GitHub', 'ok');
    } catch (e) {
      estado('⚠ Sin conexión con GitHub (' + e.message + '). Se usa el avance de este equipo.', 'error');
    }
  })();

  window.AcademiaSync = {
    listo, guardado, conectar, desconectar,
    subirAhora: subir,
    conectado: () => !!token(),
    ultimoEstado: () => { try { return JSON.parse(ls.get(K_ESTADO) || 'null'); } catch (e) { return null; } },
    repo: CFG.owner + '/' + CFG.repo
  };
})();
