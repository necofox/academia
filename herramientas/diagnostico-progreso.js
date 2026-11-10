// DIAGNÓSTICO DE AVANCE DE LA ACADEMIA — SOLO LECTURA
// · No borra, no cambia y no sube nada.
// · No muestra ni copia el token de GitHub (solo dice si este navegador está conectado: SÍ o NO).
// · Copia al portapapeles un respaldo de tu avance (sin el token) para que lo guardes en un archivo.
// Instrucciones: herramientas/COMO-REVISAR-EL-AVANCE.md
(() => {
  const esAvance = (k) => k.startsWith('academia:') && !k.startsWith('academia:voz') && k !== 'academia:menu:curso';
  const avance = Object.keys(localStorage).filter(esAvance).sort();
  let tiempos = {}; let estado = null;
  try { tiempos = JSON.parse(localStorage.getItem('academia-sync:tiempos') || '{}'); } catch (e) { /* sin datos */ }
  try { estado = JSON.parse(localStorage.getItem('academia-sync:estado') || 'null'); } catch (e) { /* sin datos */ }
  const conectado = !!localStorage.getItem('academia-sync:token');
  const porClase = {};
  avance.forEach((k) => { const c = k.split(':')[1]; porClase[c] = (porClase[c] || 0) + 1; });
  const sinHora = avance.filter((k) => !tiempos[k]).length;
  const ultimoOk = estado && estado.tipo === 'ok' ? estado.cuando : 0;
  const sinSubir = conectado ? avance.filter((k) => !tiempos[k] || tiempos[k] > ultimoOk).length : avance.length;
  const fecha = (ms) => (ms ? new Date(ms).toLocaleString() : '—');
  const ua = navigator.userAgent;
  const navegador = /Edg\//.test(ua) ? 'Microsoft Edge' : /Chrome\//.test(ua) ? 'Google Chrome' : ua;
  const lugar = location.protocol === 'file:' ? 'Archivos abiertos con doble clic (file://)' : location.origin;

  const resumen = {
    'Lugar revisado': lugar,
    'Navegador': navegador,
    'Conectado a GitHub en este lugar': conectado ? 'SÍ' : 'NO',
    'Registros de avance': avance.length,
    'Clases con avance': Object.keys(porClase).length,
    'Registros sin hora (riesgo al conectar)': sinHora,
    [conectado ? 'Posibles registros sin subir' : 'Registros nunca subidos (no conectado)']: sinSubir,
    'Último estado de sincronización': estado ? estado.texto + ' (' + fecha(estado.cuando) + ')' : 'Nunca sincronizó'
  };
  console.log('%c Diagnóstico de avance · solo lectura ', 'background:#2ee6a6;color:#03140d;font-weight:bold;padding:2px 6px');
  console.table(resumen);
  if (avance.length) { console.log('Registros por clase:'); console.table(porClase); }
  else console.log('Este navegador no tiene avance guardado en este lugar.');

  const respaldo = {
    tipo: 'respaldo-avance-academia', version: 1, creado: new Date().toISOString(),
    lugar, navegador, conectado, registros: {}
  };
  avance.forEach((k) => { respaldo.registros[k] = { valor: localStorage.getItem(k), hora: tiempos[k] || 0 }; });
  const texto = JSON.stringify(respaldo, null, 1);
  let copiado = false;
  try { copy(texto); copiado = true; } catch (e) { /* copy() solo existe en la consola de DevTools */ }
  if (copiado) console.log('✔ Respaldo copiado al portapapeles (' + avance.length + ' registros, sin el token). Pégalo en el Bloc de notas y guárdalo.');
  else { console.log('No se pudo copiar automáticamente. Selecciona y copia este respaldo:'); console.log(texto); }
  return 'Listo. No se cambió nada.';
})();
