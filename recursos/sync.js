/* Academia — sincronización del avance con GitHub (versión 2 · Etapa 0B, 10/11/2026).
   Guarda el avance (claves "academia:*" del navegador) en el archivo progreso.json de un
   repositorio PRIVADO, usando una clave de acceso (token) que el alumno pega una vez por equipo.
   Debe cargarse ANTES de academia.js. Si no hay token o no hay internet, todo sigue funcionando
   con el avance guardado en el navegador.

   Reglas de la versión 2 (nunca se pierde información):
   - Fusión de tres vías: compara lo de este equipo, lo de GitHub y el último valor que los dos
     compartían ("base"). Así se sabe qué lado cambió de verdad, sin depender de los relojes.
   - Resultados de una clase: se fusionan actividad por actividad.
   - Misiones de terminal y retos superados: se suman; nunca se quitan.
   - Notas y código: si cambiaron en los dos lados, se guardan las dos versiones como una
     "diferencia" y el menú pide al alumno que decida (nada se descarta solo).
   - Nada se borra: si un lado no tiene un dato, se toma el del otro lado.
   - Antes de reemplazar un valor propio de este equipo, se guarda una copia (respaldo local).
   - Si falla la subida, queda "pendiente" y se reintenta sola (y al volver a abrir la página).
   - Conectar un equipo con avance antiguo ya no lo marca como nuevo: se fusiona.
   - Si una clase abierta recibe avance de otro equipo o pestaña, lo que guarde después la
     página se fusiona con ese avance en vez de pisarlo.
   El formato de progreso.json se mantiene: { actualizado, claves: { clave: { v, t } } }, con
   campos opcionales nuevos (formato: 2 y eq: equipo que guardó el valor). */
(() => {
  'use strict';
  const CFG = { owner: 'necofox', repo: 'academia-progreso', ruta: 'progreso.json' };
  const OPC = window.AcademiaSyncOpciones || {}; // solo lo usan las pruebas internas (esperas cortas)
  const PFX = 'academia:';
  const NO_SYNC = new Set(['academia:voz', 'academia:menu:curso']); // preferencias de cada equipo
  const K_TOKEN = 'academia-sync:token';
  const K_TIEMPOS = 'academia-sync:tiempos';
  const K_ESTADO = 'academia-sync:estado';
  const K_BASE = 'academia-sync:base'; // último valor común con GitHub, por clave
  const K_PENDIENTE = 'academia-sync:pendiente'; // hora del último cambio aún no subido (0 = nada)
  const K_RESPALDO = 'academia-sync:respaldo'; // copias de valores propios antes de reemplazarlos
  const K_CONFL = 'academia:sync:conflictos'; // diferencias: se sincronizan para verlas en todos los equipos
  const MAX_RESPALDOS = 100;
  const ESPERAS = OPC.reintentos || [5000, 15000, 30000, 60000, 120000];

  /* ---------- Utilidades ---------- */
  const ls = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* sin almacenamiento */ } },
    claves() { try { return Object.keys(localStorage); } catch (e) { return []; } }
  };
  const esMapa = (x) => !!x && typeof x === 'object' && !Array.isArray(x);
  const mapa = (x) => (esMapa(x) ? x : {});
  const tiene = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
  const igual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  const vacio = (s) => s === '' || s === '""' || s === 'null';
  const jsonSeguro = (s) => { if (typeof s !== 'string') return undefined; try { return JSON.parse(s); } catch (e) { return undefined; } };
  const leer = (k, d) => { const v = jsonSeguro(ls.get(k)); return v === undefined ? d : v; };
  const escribir = (k, v) => ls.set(k, JSON.stringify(v));
  const token = () => ls.get(K_TOKEN);
  const tiempos = () => mapa(leer(K_TIEMPOS, {}));
  // Las voces y el curso elegido en el menú dependen de cada equipo: no se sincronizan
  const sincronizable = (k) => k.startsWith(PFX) && !NO_SYNC.has(k) && !k.startsWith('academia:voz');

  function describirEquipo() {
    const ua = (typeof navigator !== 'undefined' && navigator.userAgent) || '';
    const nav = /Edg\//.test(ua) ? 'Edge' : /OPR\//.test(ua) ? 'Opera' : /Firefox\//.test(ua) ? 'Firefox' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : 'Navegador';
    const so = /Android/.test(ua) ? 'Android' : /iPhone|iPad/.test(ua) ? 'iPhone/iPad' : /Windows/.test(ua) ? 'Windows' : /Mac OS X/.test(ua) ? 'Mac' : /Linux/.test(ua) ? 'Linux' : '';
    const lugar = typeof location !== 'undefined' && location.protocol === 'file:' ? 'doble clic' : 'web';
    return nav + (so ? ' · ' + so : '') + ' · ' + lugar;
  }
  const EQUIPO = OPC.equipo || describirEquipo();

  function estado(texto, tipo, soloEstaPagina) {
    if (!soloEstaPagina) ls.set(K_ESTADO, JSON.stringify({ texto, tipo, cuando: Date.now() }));
    try { document.dispatchEvent(new CustomEvent('academia-sync', { detail: { texto, tipo } })); } catch (e) { /* sin eventos */ }
  }
  const ultimoEstado = () => leer(K_ESTADO, null);
  const pendiente = () => Number(ls.get(K_PENDIENTE) || 0) > 0;
  const marcarPendiente = () => ls.set(K_PENDIENTE, String(Date.now()));
  function limpiarPendiente(desde) { const p = Number(ls.get(K_PENDIENTE) || 0); if (p && p <= desde) ls.set(K_PENDIENTE, '0'); }

  function guardarRespaldo(k, v, motivo) {
    if (v === null || v === undefined || vacio(v)) return;
    let lista = leer(K_RESPALDO, []); if (!Array.isArray(lista)) lista = [];
    if (lista.some((x) => x.clave === k && x.v === v)) return;
    lista.push({ clave: k, v, motivo, cuando: Date.now(), equipo: EQUIPO });
    if (lista.length > MAX_RESPALDOS) lista = lista.slice(-MAX_RESPALDOS);
    escribir(K_RESPALDO, lista);
  }

  const b64dec = (s) => new TextDecoder().decode(Uint8Array.from(atob(s.replace(/\s/g, '')), (c) => c.charCodeAt(0)));
  const b64enc = (s) => { let bin = ''; new TextEncoder().encode(s).forEach((b) => { bin += String.fromCharCode(b); }); return btoa(bin); };

  /* ---------- GitHub ---------- */
  function fallo(status) {
    const e = new Error(status === 401 ? 'la clave no es válida o venció' : status === 403 ? 'GitHub rechazó el acceso o hay demasiadas solicitudes' : 'error ' + status);
    e.status = status; return e;
  }
  const motivo = (e) => (e instanceof TypeError ? 'sin conexión a internet' : (e && e.message) || 'error desconocido');
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
    if (!r.ok) throw fallo(r.status);
    const j = await r.json();
    return { datos: JSON.parse(b64dec(j.content)), sha: j.sha };
  }

  /* ---------- Diferencias (conflictos que decide el alumno) ---------- */
  function huella(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36); }
  // Orden fijo (por fecha) para que todos los equipos escriban exactamente el mismo texto
  function serializarConflictos(m) {
    const ids = Object.keys(m).sort((x, y) => ((m[x].creado || 0) - (m[y].creado || 0)) || (x < y ? -1 : x > y ? 1 : 0));
    const o = {}; ids.forEach((id) => { o[id] = m[id]; }); return JSON.stringify(o);
  }
  function unirConflictos(a, b) {
    const o = Object.assign({}, mapa(a));
    Object.entries(mapa(b)).forEach(([id, c]) => {
      const x = o[id];
      if (!esMapa(c)) return;
      if (!esMapa(x)) { o[id] = c; return; }
      if (!x.resuelto && c.resuelto) o[id] = c;
      else if (x.resuelto && c.resuelto && (c.resueltoEn || 0) > (x.resueltoEn || 0)) o[id] = Object.assign({}, c, { otraDecision: x });
    });
    return o;
  }
  function crearConflicto(k, parte, vL, vR, ctx, ganaLocal) {
    return {
      id: 'c' + huella(k + '|' + (parte || '') + '|' + [vL, vR].sort().join('|')),
      clave: k, parte: parte || null, creado: Date.now(), principal: ganaLocal ? 0 : 1, resuelto: false,
      versiones: [{ v: vL, t: ctx.tL || 0, equipo: EQUIPO }, { v: vR, t: ctx.tR || 0, equipo: ctx.eqR || 'otro equipo' }]
    };
  }
  // Ante un choque real: si el alumno ya decidió ese mismo choque, se respeta su decisión;
  // si no, se elige un valor provisional (el más reciente) y se guarda la diferencia completa.
  function decidir(k, parte, vL, vR, ctx, conflictos) {
    const ganaLocal = !!ctx.preferirLocal || (ctx.tL || 0) >= (ctx.tR || 0);
    const c = crearConflicto(k, parte, vL, vR, ctx, ganaLocal);
    const previo = mapa(ctx.previos)[c.id];
    if (esMapa(previo) && previo.resuelto && typeof previo.final === 'string') return { valor: previo.final, local: previo.final === vL };
    if (esMapa(previo) && Array.isArray(previo.versiones) && previo.versiones[previo.principal]) {
      const p = previo.versiones[previo.principal].v;
      if (p === vL || p === vR) return { valor: p, local: p === vL };
    }
    conflictos.push(c);
    return { valor: ganaLocal ? vL : vR, local: ganaLocal };
  }

  /* ---------- Fusión de una clave ---------- */
  function tipoDe(k) {
    if (k === K_CONFL) return 'conflictos';
    if (/:res$/.test(k)) return 'resultados';
    if (/:term:[^:]+$/.test(k)) return 'lista';
    if (/:editores$/.test(k)) return 'marcas';
    if (/:crono$/.test(k)) return 'reloj';
    return 'texto'; // notas, código de los retos y cualquier clave nueva
  }
  /* L = valor de este equipo · R = valor de GitHub (o de otra pestaña) · B = último valor común.
     Devuelve { v: valor fusionado, t, conflictos: [...], respaldar: si se reemplaza algo propio }. */
  function combinar(k, L, R, B, ctx) {
    const conflictos = [];
    const tL = ctx.tL || 0; const tR = ctx.tR || 0;
    const salida = (v, extra) => Object.assign({ v, t: v === L ? tL : v === R ? tR : Math.max(tL, tR, 1), conflictos, respaldar: false }, extra);
    if (R === undefined || R === null) return salida(L);
    if (L === undefined || L === null) return salida(R);
    if (L === R) return salida(L);
    const tipo = tipoDe(k);
    const a = jsonSeguro(L); const b = jsonSeguro(R);
    const hayBase = B !== undefined && B !== null;
    if (tipo === 'conflictos' && esMapa(a) && esMapa(b)) return salida(serializarConflictos(unirConflictos(a, b)));
    if (tipo === 'lista' && Array.isArray(a) && Array.isArray(b)) {
      const u = a.slice(); b.forEach((x) => { if (!u.some((y) => igual(x, y))) u.push(x); });
      return salida(JSON.stringify(u));
    }
    if (tipo === 'marcas' && esMapa(a) && esMapa(b)) {
      const u = Object.assign({}, a); Object.keys(b).forEach((x) => { u[x] = tiene(u, x) ? (u[x] || b[x]) : b[x]; });
      return salida(JSON.stringify(u));
    }
    if (tipo === 'resultados' && esMapa(a) && esMapa(b)) {
      const base = hayBase ? mapa(jsonSeguro(B)) : {};
      const o = {}; let respaldar = false;
      Object.keys(a).concat(Object.keys(b).filter((x) => !tiene(a, x))).forEach((x) => {
        if (!tiene(a, x)) { o[x] = b[x]; return; }
        if (!tiene(b, x) || igual(a[x], b[x])) { o[x] = a[x]; return; }
        if (tiene(base, x) && igual(a[x], base[x])) { o[x] = b[x]; return; } // solo cambió el otro lado
        if (tiene(base, x) && igual(b[x], base[x])) { o[x] = a[x]; return; } // solo cambió este lado
        const d = decidir(k, x, JSON.stringify(a[x]), JSON.stringify(b[x]), ctx, conflictos);
        o[x] = jsonSeguro(d.valor); if (!d.local) respaldar = true;
      });
      return salida(JSON.stringify(o), { respaldar });
    }
    // Reloj, notas, código y cualquier otra clave: fusión de tres vías del valor completo
    if (hayBase && L === B) return salida(R); // solo cambió el otro lado
    if (hayBase && R === B) return salida(L); // solo cambió este lado
    if (tipo === 'reloj') { // la posición del reloj no es un resultado: gana la más reciente
      const ganaLocal = !!ctx.preferirLocal || tL >= tR;
      return ganaLocal ? salida(L) : salida(R, { respaldar: true });
    }
    if (!hayBase && vacio(L)) return salida(R); // sin base común, un texto vacío no aporta nada
    if (!hayBase && vacio(R)) return salida(L);
    const d = decidir(k, null, L, R, ctx, conflictos);
    return salida(d.valor, { respaldar: !d.local });
  }

  /* ---------- Protección de la página abierta ---------- */
  // La clase abierta tiene su avance en memoria. Si llega avance nuevo (de GitHub o de otra
  // pestaña), lo que la página guarde después se fusiona con él en lugar de pisarlo.
  let iniciado = false; let avisado = false;
  const externos = {}; // clave → último valor que llegó de fuera después de abrir la página
  const conocidos = {}; // clave → último valor que la propia página leyó o escribió
  const claseAbierta = () => (window.CLASE && window.CLASE.id ? PFX + window.CLASE.id + ':' : null);
  const deEstaClase = (k) => { const p = claseAbierta(); return !!p && k.startsWith(p); };
  function marcarExterno(k, v) {
    externos[k] = v;
    if (!avisado) { avisado = true; estado('⚠ Llegó avance más reciente de esta clase (de otro equipo o pestaña). Recarga la página (F5) para verlo; no se perderá nada.', 'aviso', true); }
  }
  function aplicarLocal(k, L, M, respaldar, porque) {
    if (respaldar) guardarRespaldo(k, L, porque);
    ls.set(k, M);
    if (iniciado && deEstaClase(k)) marcarExterno(k, M);
  }
  function agregarConflictos(lista) {
    if (!lista.length) return;
    const m = mapa(leer(K_CONFL, {})); let n = 0;
    lista.forEach((c) => { if (!m[c.id]) { m[c.id] = c; n++; } });
    if (!n) return;
    ls.set(K_CONFL, serializarConflictos(m));
    guardado(K_CONFL);
  }
  function protegerPagina(k, P, tP) {
    const E = externos[k];
    if (P === E) { delete externos[k]; return; }
    const r = combinar(k, P, E, conocidos[k], { tL: tP, tR: tP - 1, eqR: 'otra pestaña u otro equipo', preferirLocal: true, previos: leer(K_CONFL, {}) });
    if (r.v !== P) ls.set(k, r.v);
    if (r.v === P) delete externos[k]; else externos[k] = r.v;
    if (r.conflictos.length) {
      agregarConflictos(r.conflictos);
      estado('⚠ Esta clase también cambió en otra pestaña u otro equipo: guardé las dos versiones. Decide en el menú cuál conservar.', 'aviso', true);
    }
  }

  /* ---------- Ciclo de sincronización ---------- */
  // Trae lo de GitHub, fusiona clave por clave y, si hace falta y se pide, sube el resultado.
  async function ciclo(conSubida) {
    const { datos, sha } = await leerRemoto();
    const rem = mapa(datos && datos.claves);
    const base = mapa(leer(K_BASE, {})); const t = tiempos();
    const previos = unirConflictos(leer(K_CONFL, {}), jsonSeguro(esMapa(rem[K_CONFL]) ? rem[K_CONFL].v : undefined));
    const claves = {}; const nuevos = []; let difiere = false;
    const todas = new Set(ls.claves().filter(sincronizable).concat(Object.keys(rem).filter(sincronizable)));
    todas.delete(K_CONFL);
    todas.forEach((k) => {
      const L = ls.get(k);
      const e = esMapa(rem[k]) ? rem[k] : null;
      const R = e && typeof e.v === 'string' ? e.v : undefined;
      const r = combinar(k, L, R, base[k], { tL: t[k] || 0, tR: e ? Number(e.t) || 0 : 0, eqR: e && e.eq, preferirLocal: iniciado && deEstaClase(k), previos });
      if (r.v !== L) { aplicarLocal(k, L, r.v, r.respaldar, 'llegó otra versión desde GitHub'); t[k] = r.t; }
      claves[k] = { v: r.v, t: r.t, eq: r.v === R ? e.eq : EQUIPO };
      if (r.v !== R) difiere = true;
      if (R === undefined) delete base[k]; else base[k] = R;
      r.conflictos.forEach((c) => nuevos.push(c));
    });
    nuevos.forEach((c) => { if (!previos[c.id]) previos[c.id] = c; });
    if (Object.keys(previos).length) {
      const Mc = serializarConflictos(previos);
      if (Mc !== ls.get(K_CONFL)) ls.set(K_CONFL, Mc);
      claves[K_CONFL] = { v: Mc, t: Date.now(), eq: EQUIPO };
      if (!esMapa(rem[K_CONFL]) || rem[K_CONFL].v !== Mc) difiere = true;
    }
    escribir(K_TIEMPOS, t); escribir(K_BASE, base);
    if (!conSubida || !difiere) return { difiere, subido: false };
    const cuerpo = {
      message: 'Avance ' + new Date().toISOString(),
      content: b64enc(JSON.stringify({ formato: 2, actualizado: new Date().toISOString(), claves }, null, 1))
    };
    if (sha) cuerpo.sha = sha;
    const r = await api('/contents/' + CFG.ruta, 'PUT', cuerpo);
    if (r.ok) {
      const b2 = mapa(leer(K_BASE, {}));
      Object.entries(claves).forEach(([k, e]) => { if (k !== K_CONFL) b2[k] = e.v; });
      escribir(K_BASE, b2);
      return { difiere: false, subido: true };
    }
    if (r.status === 409 || r.status === 422) return { choque: true }; // otro equipo guardó a la vez
    throw fallo(r.status);
  }

  function listaConflictos() {
    return Object.values(mapa(leer(K_CONFL, {}))).filter((c) => esMapa(c) && !c.resuelto && Array.isArray(c.versiones)).sort((a, b) => (a.creado || 0) - (b.creado || 0));
  }
  function estadoFinal(textoOk) {
    const n = listaConflictos().length;
    if (n) estado('⚠ ' + textoOk.replace(/^✔ /, '') + ', pero hay ' + n + (n === 1 ? ' diferencia' : ' diferencias') + ' entre tus equipos: decide en el menú qué conservar.', 'aviso');
    else estado(textoOk, 'ok');
  }

  /* ---------- Subidas, reintentos y pendientes ---------- */
  let temporizador = null; let tReintento = null; let nReintento = 0;
  let cadena = Promise.resolve(); let enCola = null;
  async function subirUnaVez() {
    if (!token()) return;
    estado('Guardando en GitHub…', 'trabajando');
    const desde = Date.now();
    try {
      let hecho = false;
      for (let intento = 0; intento < 3 && !hecho; intento++) hecho = !(await ciclo(true)).choque;
      if (!hecho) throw new Error('otro equipo guardó al mismo tiempo');
      nReintento = 0; limpiarPendiente(desde);
      estadoFinal('✔ Avance guardado en GitHub');
    } catch (e) {
      marcarPendiente();
      const sinArreglo = e && e.status === 401;
      if (!sinArreglo) programarReintento();
      estado('⚠ No se pudo guardar en GitHub (' + motivo(e) + '). Tu avance sigue en este equipo' + (sinArreglo ? '. Revisa la clave en el menú.' : ' y se reintentará solo.'), 'error');
    }
  }
  // Una sola subida a la vez; si llegan más pedidos mientras sube, se hace una más al final
  // (con todo lo nuevo) y todos esperan a esa.
  function subir() {
    clearTimeout(temporizador); temporizador = null;
    clearTimeout(tReintento); tReintento = null;
    if (!token()) return Promise.resolve();
    if (enCola) return enCola;
    const p = cadena.then(() => { enCola = null; return subirUnaVez(); });
    enCola = p; cadena = p.catch(() => {});
    return p;
  }
  function programar(ms) { clearTimeout(temporizador); temporizador = setTimeout(subir, ms || 2500); }
  function programarReintento() {
    clearTimeout(tReintento);
    const ms = ESPERAS[Math.min(nReintento, ESPERAS.length - 1)]; nReintento++;
    tReintento = setTimeout(() => { tReintento = null; subir(); }, ms);
  }

  // Lo llama el motor de las clases (y el menú) cada vez que guarda algo
  function guardado(k) {
    if (!sincronizable(k)) return;
    const t = tiempos(); t[k] = Date.now(); escribir(K_TIEMPOS, t);
    const P = ls.get(k);
    if (tiene(externos, k)) protegerPagina(k, P, t[k]);
    if (iniciado && deEstaClase(k)) conocidos[k] = P;
    if (token()) { marcarPendiente(); programar(); }
  }

  // Al salir o cambiar de pestaña, guarda lo pendiente
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && token() && (temporizador || pendiente())) subir(); });
  if (typeof window.addEventListener === 'function') {
    // Otra pestaña cambió el avance de la clase abierta aquí
    window.addEventListener('storage', (e) => {
      if (!e || !e.key || e.newValue === null || !iniciado || !sincronizable(e.key) || !deEstaClase(e.key)) return;
      marcarExterno(e.key, e.newValue);
    });
    // Volvió internet: sube lo pendiente sin esperar
    window.addEventListener('online', () => { if (token() && pendiente()) subir(); });
  }

  async function conectar(tk) {
    tk = (tk || '').trim();
    if (!tk) return { ok: false, mensaje: 'Pega tu clave primero.' };
    let r;
    try { r = await api('', 'GET', null, tk); } catch (e) { return { ok: false, mensaje: 'Sin conexión a internet.' }; }
    if (r.status === 401) return { ok: false, mensaje: 'La clave no es válida. Revisa que la copiaste completa.' };
    if (r.status === 404) return { ok: false, mensaje: 'La clave no tiene acceso al repositorio ' + CFG.owner + '/' + CFG.repo + '.' };
    if (!r.ok) return { ok: false, mensaje: 'GitHub respondió con error ' + r.status + '.' };
    ls.set(K_TOKEN, tk);
    // El avance que ya había en este equipo se FUSIONA con el de GitHub (no se marca como nuevo)
    marcarPendiente();
    await subir();
    const d = ultimoEstado();
    if (d && d.tipo === 'error') return { ok: true, mensaje: 'Conectado. Todavía no se pudo subir tu avance; se reintentará solo.' };
    const n = listaConflictos().length;
    return { ok: true, mensaje: '¡Conectado! El avance de este equipo se unió con el de GitHub.' + (n ? ' Hay ' + n + ' diferencia(s) para que decidas en el menú.' : '') };
  }
  function desconectar() { try { localStorage.removeItem(K_TOKEN); } catch (e) { /* sin almacenamiento */ } estado('Este equipo ya no sincroniza con GitHub.', 'apagado'); }

  /* ---------- Decisiones del alumno sobre las diferencias ---------- */
  function valorActual(c) {
    const raw = ls.get(c.clave);
    if (!c.parte) return raw;
    const m = jsonSeguro(raw);
    return esMapa(m) && tiene(m, c.parte) ? JSON.stringify(m[c.parte]) : null;
  }
  function listaDiferencias() {
    return listaConflictos().map((c) => {
      const otra = c.versiones[1 - c.principal] || c.versiones[1];
      return { id: c.id, clave: c.clave, parte: c.parte, tipo: c.parte ? 'resultado' : tipoDe(c.clave), creado: c.creado, actual: valorActual(c), otra: { v: otra.v, equipo: otra.equipo, t: otra.t }, versiones: c.versiones };
    });
  }
  // eleccion: 'actual' (quedarse con lo que hay), 'otra' (usar la otra versión) o 'unir' (textos)
  function resolverConflicto(id, eleccion) {
    const m = mapa(leer(K_CONFL, {})); const c = m[id];
    if (!esMapa(c) || c.resuelto) return false;
    const actual = valorActual(c);
    const otra = (c.versiones[1 - c.principal] || c.versiones[1]).v;
    let final = actual === null ? otra : actual;
    if (eleccion === 'otra') final = otra;
    else if (eleccion === 'unir') {
      const a = jsonSeguro(actual); const b = jsonSeguro(otra);
      if (typeof a !== 'string' || typeof b !== 'string') return false;
      const v = c.versiones[1 - c.principal] || {};
      final = JSON.stringify(a + '\n\n— Otra versión (' + (v.equipo || 'otro equipo') + (v.t ? ', ' + new Date(v.t).toLocaleString('es') : '') + ') —\n' + b);
    } else if (eleccion !== 'actual') return false;
    if (final !== actual) {
      guardarRespaldo(c.clave, ls.get(c.clave), 'decisión sobre una diferencia');
      if (c.parte) { const res = mapa(leer(c.clave, {})); res[c.parte] = jsonSeguro(final); ls.set(c.clave, JSON.stringify(res)); }
      else ls.set(c.clave, final);
      guardado(c.clave);
    }
    Object.assign(c, { resuelto: true, eleccion, final, anterior: actual, resueltoEn: Date.now(), resueltoPor: EQUIPO });
    ls.set(K_CONFL, serializarConflictos(m));
    guardado(K_CONFL);
    return true;
  }

  /* ---------- Arranque ---------- */
  function arrancar() {
    const p = claseAbierta();
    if (p) ls.claves().filter((k) => k.startsWith(p)).forEach((k) => { conocidos[k] = ls.get(k); });
    iniciado = true;
  }
  const listo = (async () => {
    if (!token()) { estado('Sin sincronizar: conecta GitHub desde el menú.', 'apagado'); arrancar(); return; }
    estado('Sincronizando…', 'trabajando');
    try {
      const espera = new Promise((_, no) => setTimeout(() => no(new Error('GitHub tardó demasiado')), OPC.esperaCarga || 6000));
      const r = await Promise.race([ciclo(false), espera]);
      if (r.difiere || pendiente()) { estado('Sincronizado. Subiendo los cambios de este equipo…', 'trabajando'); programar(OPC.esperaSubida || 1500); }
      else estadoFinal('✔ Sincronizado con GitHub');
    } catch (e) {
      estado('⚠ Sin conexión con GitHub (' + motivo(e) + '). Se usa el avance de este equipo' + (pendiente() ? '; lo pendiente se subirá solo.' : '.'), 'error');
      if (!(e && e.status === 401)) programarReintento();
    }
    arrancar();
  })();

  window.AcademiaSync = {
    listo, guardado, conectar, desconectar,
    subirAhora: subir,
    conectado: () => !!token(),
    ultimoEstado,
    pendiente,
    diferencias: listaDiferencias,
    resolver: resolverConflicto,
    respaldos: () => leer(K_RESPALDO, []),
    repo: CFG.owner + '/' + CFG.repo,
    version: 2
  };
})();
