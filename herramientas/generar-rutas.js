// GENERAR LAS RUTAS DE APRENDIZAJE DESDE EL CATÁLOGO (Node.js)
// Uso, desde la carpeta de la academia:
//   node herramientas/generar-rutas.js              → actualiza las 4 rutas
//   node herramientas/generar-rutas.js --comprobar  → solo revisa que coincidan (no escribe nada)
// Solo reemplaza lo que está entre las marcas INICIO/FIN de cada cursos/<curso>/ruta-aprendizaje.md.
// Lo que está fuera de las marcas (introducción, recursos, notas) se escribe a mano y se conserva.
'use strict';
const fs = require('fs');
const path = require('path');
const raiz = path.join(__dirname, '..');
const INICIO = '<!-- INICIO: generado desde recursos/catalogo.js con "node herramientas/generar-rutas.js". No editar a mano. -->';
const FIN = '<!-- FIN: generado desde recursos/catalogo.js -->';

const win = {};
new Function('window', fs.readFileSync(path.join(raiz, 'recursos/catalogo.js'), 'utf8'))(win);
const CAT = win.CATALOGO;

const lista = (nums) => (nums.length === 1 ? 'Módulo ' + nums[0] : 'Módulos ' + nums.slice(0, -1).join(', ') + ' y ' + nums[nums.length - 1]);
// Sin previos: "Ninguno." o, si hay una nota (por ejemplo, una recomendación), solo la nota
const previos = (m) => (m.previos.length ? lista(m.previos) + '.' + (m.previosNota ? ' ' + m.previosNota : '') : m.previosNota || 'Ninguno.');
const previosCorto = (m) => (m.previos.length ? lista(m.previos) : m.previosNota ? 'Ninguno obligatorio' : '—');
const etiquetaModulo = (m) => (m.n === 'E' ? 'Electiva (opcional)' : 'Módulo ' + m.n);
const etiquetaClase = (m, i) => (m.n === 'E' ? 'E' : 'M' + m.n) + '·' + (i + 1);
const celda = (s) => String(s).replace(/\|/g, '\\|');
// Videos complementarios verificados ('código' o 'código@segundo'): enlaces cortos a YouTube
const videos = (c) => (c.videos || []).map((v, i) => { const [id, t] = v.split('@'); return '[▶ ' + (i + 1) + '](https://www.youtube.com/watch?v=' + id + (t ? '&t=' + t + 's' : '') + ')'; }).join(' ') || '—';

function generar(curso) {
  const obligatorios = curso.modulos.filter((m) => !m.opcional);
  const clasesObl = obligatorios.flatMap((m) => m.clases);
  const listas = clasesObl.filter((c) => c.archivo).length;
  const horas = clasesObl.length * curso.horasClase;
  let siguiente = null;
  obligatorios.some((m) => m.clases.some((c, i) => { if (!c.archivo) { siguiente = { m, c, i }; return true; } return false; }));
  const L = [];
  L.push('## Meta del curso', '', curso.meta, '');
  L.push('- **Duración:** ' + obligatorios.length + ' módulos · ' + clasesObl.length + ' clases · ' + horas + ' h de clase (' + curso.duracion + '). La práctica autónoma de cada clase se suma aparte.');
  const opc = curso.modulos.filter((m) => m.opcional);
  if (opc.length) L.push('- **Electiva opcional:** ' + opc.map((m) => m.titulo + ' (' + m.clases.length + ' clases · ' + m.clases.length * curso.horasClase + ' h)').join('; ') + '.');
  L.push('- **Clases listas:** ' + listas + ' de ' + clasesObl.length + '.');
  if (siguiente) L.push('- **Siguiente clase por crear:** ' + etiquetaModulo(siguiente.m) + ' · Clase ' + (siguiente.i + 1) + ': ' + siguiente.c.titulo + '.');
  L.push('- **Proyecto final del curso:** ' + curso.proyectoFinal, '');
  L.push('## Resumen de módulos', '', '| Módulo | Clases | Horas | Listas | Necesitas antes |', '|---|---|---|---|---|');
  curso.modulos.forEach((m) => {
    L.push('| ' + celda(etiquetaModulo(m) + ' · ' + m.titulo) + ' | ' + m.clases.length + ' | ' + m.clases.length * curso.horasClase + ' | ' + m.clases.filter((c) => c.archivo).length + ' | ' + previosCorto(m) + ' |');
  });
  L.push('| **Total' + (opc.length ? ' (sin la electiva)' : '') + '** | **' + clasesObl.length + '** | **' + horas + '** | **' + listas + '** | |', '');
  curso.modulos.forEach((m) => {
    L.push('## ' + etiquetaModulo(m) + ' · ' + m.titulo + ' (' + m.clases.length + ' clases · ' + m.clases.length * curso.horasClase + ' h)', '');
    L.push('- **Objetivo:** ' + m.objetivo);
    if (m.competencias) L.push('- **Competencias:** ' + m.competencias);
    if (m.logro) L.push('- **Al terminar serás capaz de:** ' + m.logro);
    L.push('- **Necesitas antes:** ' + previos(m));
    if (m.practica) L.push('- **Práctica:** ' + m.practica);
    if (m.evaluacion) L.push('- **Evaluación del módulo:** ' + m.evaluacion);
    if (m.proyecto) L.push('- **Proyecto:** ' + m.proyecto);
    if (m.fuentes) L.push('- **Fuentes previstas** (se verifican al crear cada clase): ' + m.fuentes);
    // Columnas extra solo en los cursos que tienen esos datos (Redes e IA); los demás quedan igual
    const extras = [['plan', 'Plan de Claude', (c) => (c.plan || '—') + (c.donde ? ' · ' + c.donde : '')],
      ['ref', 'Temario oficial que cubre', (c) => c.ref || '—'], ['videos', 'Videos', videos]].filter(([k]) => curso.clases.some((c) => c[k]));
    L.push('', '| Clase | Tema |' + extras.map((e) => ' ' + e[1] + ' |').join('') + ' Estado |', '|---|---|' + extras.map(() => '---|').join('') + '---|');
    m.clases.forEach((c, i) => {
      const estado = c.archivo
        ? '✔ Lista: `' + c.archivo.replace('cursos/' + curso.id + '/', '') + '` (id `' + c.id + '`)'
        : 'Próximamente' + (siguiente && siguiente.c === c ? ' · **siguiente por crear**' : '');
      L.push('| ' + etiquetaClase(m, i) + ' | ' + celda(c.titulo) + ' | ' + extras.map((e) => celda(e[2](c)) + ' | ').join('') + estado + ' |');
    });
    L.push('');
  });
  return L.join('\n').trim();
}

const comprobar = process.argv.includes('--comprobar');
let problemas = 0;
CAT.forEach((curso) => {
  const archivo = path.join(raiz, 'cursos', curso.id, 'ruta-aprendizaje.md');
  const texto = fs.readFileSync(archivo, 'utf8').replace(/\r\n/g, '\n');
  const a = texto.indexOf(INICIO); const b = texto.indexOf(FIN);
  if (a < 0 || b < a) { console.log('✘ ' + curso.id + ': faltan las marcas INICIO/FIN en ruta-aprendizaje.md'); problemas++; return; }
  const nuevo = texto.slice(0, a + INICIO.length) + '\n\n' + generar(curso) + '\n\n' + texto.slice(b);
  if (nuevo === texto) { console.log('✔ ' + curso.id + ': la ruta coincide con el catálogo'); return; }
  if (comprobar) { console.log('✘ ' + curso.id + ': la ruta NO coincide con el catálogo (ejecuta generar-rutas.js)'); problemas++; return; }
  // OneDrive a veces bloquea un archivo unos instantes mientras lo sincroniza: se reintenta
  for (let intento = 1; ; intento++) {
    try { fs.writeFileSync(archivo, nuevo, 'utf8'); break; } catch (e) {
      if (intento >= 5) throw e;
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 500 * intento);
    }
  }
  console.log('✎ ' + curso.id + ': ruta actualizada desde el catálogo');
});
process.exitCode = problemas ? 1 : 0;
