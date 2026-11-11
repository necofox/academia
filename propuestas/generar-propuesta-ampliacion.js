// GENERA PROPUESTA-AMPLIACION-6-CURSOS.md (Node.js)
// Uso, desde la carpeta de la academia:  node propuestas/generar-propuesta-ampliacion.js
// Une la plantilla escrita a mano (propuestas/plantilla-propuesta-ampliacion.md) con las partes
// que salen de los datos: el borrador del catálogo (módulos, clases, totales) y los videos
// verificados (propuestas/videos-verificados.json + propuestas/videos-anotaciones.json), para que
// el documento y los datos nunca se contradigan.
'use strict';
const fs = require('fs');
const path = require('path');
const raiz = path.join(__dirname, '..');
const win = {};
new Function('window', fs.readFileSync(path.join(raiz, 'recursos/catalogo.js'), 'utf8'))(win);
new Function('window', fs.readFileSync(path.join(__dirname, 'cursos-nuevos.borrador.js'), 'utf8'))(win);
const CAT = win.CATALOGO;
const VER = {}; JSON.parse(fs.readFileSync(path.join(__dirname, 'videos-verificados.json'), 'utf8')).forEach((v) => { VER[v.id] = v; });
const ANO = JSON.parse(fs.readFileSync(path.join(__dirname, 'videos-anotaciones.json'), 'utf8'));

const lista = (nums) => (nums.length === 1 ? 'Módulo ' + nums[0] : 'Módulos ' + nums.slice(0, -1).join(', ') + ' y ' + nums[nums.length - 1]);
const previos = (m) => (m.previos.length ? lista(m.previos) + '.' + (m.previosNota ? ' ' + m.previosNota : '') : m.previosNota || 'Ninguno.');
const celda = (s) => String(s).replace(/\|/g, '\\|');
const obligatorios = (c) => c.modulos.filter((m) => !m.opcional);
const nClases = (c) => obligatorios(c).reduce((a, m) => a + m.clases.length, 0);
const mmss = (s) => (s >= 3600 ? Math.floor(s / 3600) + ':' + String(Math.floor(s % 3600 / 60)).padStart(2, '0') : Math.floor(s / 60)) + ':' + String(s % 60).padStart(2, '0');

// Códigos de video por curso (R01, C01…) en orden de primera aparición
const CODIGOS = {};
function codigos(curso, letra) {
  const orden = [];
  curso.clases.forEach((c) => (c.videos || []).forEach((v) => { const id = v.split('@')[0]; if (!orden.includes(id)) orden.push(id); }));
  orden.forEach((id, i) => { CODIGOS[curso.id + ':' + id] = letra + String(i + 1).padStart(2, '0'); });
  return orden;
}
function videosDeClase(curso, c) {
  return (c.videos || []).map((v) => { const [id, t] = v.split('@'); return CODIGOS[curso.id + ':' + id] + (t ? ' (desde ' + mmss(Number(t)) + ')' : ''); }).join(', ') || '—';
}
const idioma = (v) => {
  const a = (v.idiomaAudio || '').toLowerCase();
  if (a.startsWith('es') || a.startsWith('espa')) return 'Español';
  if (a.startsWith('en') || a.startsWith('ingl')) return 'Inglés';
  return /NASeros|DevTalles|MoureDev|Derivando|UPV|UPM/.test(v.canal) ? 'Español' : 'Inglés';
};
function accesoEs(v) {
  const p = [];
  if (idioma(v) !== 'Español') {
    p.push('Subtítulos en español: ' + (v.subtitulosEs === 'Solo traducción automática de YouTube' ? 'solo traducción automática' : (v.subtitulosEs || 'no')).replace('Sí, en español ', '').toLowerCase());
    if (v.dobladoEs) p.push('tiene doblaje al español');
  } else {
    p.push('Subtítulos: ' + ({ 'Sí, en español (escritos)': 'en español, escritos', 'Sí, en español (automáticos)': 'en español, automáticos', No: 'no tiene' }[v.subtitulosEs] || v.subtitulosEs));
  }
  return p.join('; ');
}

function curso(id) {
  const c = CAT.find((x) => x.id === id);
  const L = [];
  c.modulos.forEach((m) => {
    L.push('### Módulo ' + m.n + ' · ' + m.titulo + ' (' + m.clases.length + ' clases · ' + m.clases.length * c.horasClase + ' h)', '');
    L.push('- **Objetivo:** ' + m.objetivo);
    if (m.competencias) L.push('- **Competencias:** ' + m.competencias);
    if (m.logro) L.push('- **Al terminar serás capaz de:** ' + m.logro);
    L.push('- **Conocimientos previos:** ' + previos(m));
    if (m.practica) L.push('- **Ejercicios y prácticas:** ' + m.practica);
    if (m.evaluacion) L.push('- **Evaluación del módulo:** ' + m.evaluacion);
    if (m.proyecto) L.push('- **Proyecto:** ' + m.proyecto);
    if (m.fuentes) L.push('- **Fuentes previstas** (se verifican al crear cada clase): ' + m.fuentes);
    L.push('');
    if (id === 'ia') {
      L.push('| Clase | Tema | Dónde se practica | Plan de Claude | Material oficial de apoyo | Videos |', '|---|---|---|---|---|---|');
      m.clases.forEach((x, i) => L.push('| M' + m.n + '·' + (i + 1) + ' | ' + celda(x.titulo) + ' | ' + celda(x.donde || '—') + ' | ' + celda(x.plan || '—') + ' | ' + celda(x.ref || '—') + ' | ' + videosDeClase(c, x) + ' |'));
    } else {
      L.push('| Clase | Tema | Temario oficial que cubre | Videos |', '|---|---|---|---|');
      m.clases.forEach((x, i) => L.push('| M' + m.n + '·' + (i + 1) + ' | ' + celda(x.titulo) + ' | ' + celda(x.ref || '—') + ' | ' + videosDeClase(c, x) + ' |'));
    }
    L.push('');
  });
  return L.join('\n').trim();
}
function tablaVideos(id) {
  const c = CAT.find((x) => x.id === id);
  const ids = [...new Set(c.clases.flatMap((x) => (x.videos || []).map((v) => v.split('@')[0])))];
  const usos = {};
  c.modulos.forEach((m) => m.clases.forEach((x, i) => (x.videos || []).forEach((v) => { const k = v.split('@')[0]; (usos[k] = usos[k] || []).push('M' + m.n + '·' + (i + 1)); })));
  const L = ['| Código | Video (título exacto y enlace) | Canal · tipo | Idioma y acceso en español | Duración · publicado | Qué enseña | Clases | Alternativa escrita |', '|---|---|---|---|---|---|---|---|'];
  ids.sort((a, b) => CODIGOS[id + ':' + a].localeCompare(CODIGOS[id + ':' + b])).forEach((k) => {
    const v = VER[k]; const a = ANO.videos[k] || {};
    if (!v || v.estado !== 'OK') throw new Error('Video sin verificar: ' + k);
    L.push('| ' + CODIGOS[id + ':' + k] + ' | [' + celda(v.titulo) + '](' + v.url + ') | ' + celda(v.canal) + ' · ' + celda(ANO.tipos[v.canal] || 'Terceros') + ' | ' + idioma(v) + '. ' + celda(accesoEs(v)) + ' | ' + v.duracion + ' · ' + v.publicado + ' | ' + celda(a.contenido || '—') + ' | ' + [...new Set(usos[k])].join(', ') + ' | ' + celda(a.alternativa || '—') + ' |');
  });
  return L.join('\n');
}
function resumenVideos() {
  const todos = ['redes', 'ia'].flatMap((id) => [...new Set(CAT.find((x) => x.id === id).clases.flatMap((x) => (x.videos || []).map((v) => v.split('@')[0])))]);
  const unicos = [...new Set(todos)].map((k) => VER[k]);
  const cuenta = (f) => unicos.filter(f).length;
  return '- **Videos verificados:** ' + unicos.length + ', todos disponibles el ' + unicos[0].verificado.split('-').reverse().join('/') + '.\n' +
    '- **En español:** ' + cuenta((v) => idioma(v) === 'Español') + ' videos (' + cuenta((v) => idioma(v) === 'Español' && v.subtitulosEs !== 'No') + ' con subtítulos en español). **En inglés:** ' +
    cuenta((v) => idioma(v) === 'Inglés') + '; de ellos, ' + cuenta((v) => idioma(v) === 'Inglés' && v.dobladoEs) + ' tienen doblaje al español y ' +
    cuenta((v) => idioma(v) === 'Inglés' && v.subtitulosEs && v.subtitulosEs !== 'No') + ' tienen subtítulos en español (automáticos o por traducción automática de YouTube).\n' +
    '- **Por tipo:** ' + cuenta((v) => /^Oficial/.test(ANO.tipos[v.canal] || '')) + ' oficiales de Anthropic, ' + cuenta((v) => /^Conferencia/.test(ANO.tipos[v.canal] || '')) + ' charlas de ingenieros de Anthropic en canales de terceros, ' +
    cuenta((v) => /^Universidad/.test(ANO.tipos[v.canal] || '')) + ' de universidades y ' + cuenta((v) => /^Terceros/.test(ANO.tipos[v.canal] || '')) + ' de educadores con trayectoria.';
}
function resumenIa() {
  const c = CAT.find((x) => x.id === 'ia');
  const n = c.clases.length;
  const gratis = c.clases.filter((x) => /^Gratis/.test(x.plan)).length;
  const code = c.clases.filter((x) => /Claude Code/.test(x.donde) && !/^Chat/.test(x.donde)).length;
  return '| Dónde y con qué plan | Clases |\n|---|---|\n' +
    '| En el chat de Claude, con el plan gratuito | ' + gratis + ' |\n' +
    '| Necesitan un plan de pago (Pro o superior) | ' + (n - gratis) + ' (Claude Code: ' + code + '; otras funciones de pago, como Research, Claude in Chrome y Cowork: ' + (n - gratis - code) + ') |\n' +
    '| Necesitan la API de pago | **0** |\n| **Total** | **' + n + '** |';
}
function mapaTutorial() {
  const c = CAT.find((x) => x.id === 'ia');
  const L = ['| Material oficial | Clases de la academia que lo usan |', '|---|---|'];
  const refs = {};
  c.modulos.forEach((m) => m.clases.forEach((x, i) => { if (x.ref) (refs[x.ref.replace(/ \(.*\)$/, '')] = refs[x.ref.replace(/ \(.*\)$/, '')] || []).push('M' + m.n + '·' + (i + 1)); }));
  Object.keys(refs).sort().forEach((k) => L.push('| ' + celda(k) + ' | ' + refs[k].join(', ') + ' |'));
  return L.join('\n');
}
function totales() {
  const L = ['| Curso | Estado | Módulos | Clases | Horas | Clases listas |', '|---|---|---|---|---|---|'];
  let T = 0; let H = 0; let LI = 0;
  CAT.forEach((c) => {
    const n = nClases(c); const h = n * c.horasClase; const li = c.clases.filter((x) => x.archivo).length;
    T += n; H += h; LI += li;
    const opc = c.modulos.filter((m) => m.opcional);
    L.push('| ' + c.icono + ' ' + c.nombre + ' | ' + (['redes', 'ia'].includes(c.id) ? '**Nuevo (propuesto)**' : 'Aprobado') + ' | ' + obligatorios(c).length + ' | ' + n + ' | ' + h +
      (opc.length ? ' (+' + opc.reduce((a, m) => a + m.clases.length * c.horasClase, 0) + ' h de electiva)' : '') + ' | ' + li + ' |');
  });
  L.push('| **Academia (6 cursos)** | | **' + CAT.reduce((a, c) => a + obligatorios(c).length, 0) + '** | **' + T + '** | **' + H + '** | **' + LI + '** |');
  return L.join('\n');
}
function catalogo() {
  return CAT.map((c) => '- ' + c.icono + ' **' + c.nombre + '**' + (['redes', 'ia'].includes(c.id) ? ' *(nuevo)*' : '') + ' · ' + c.duracion + ' · ' + nClases(c) + ' clases · ' + nClases(c) * c.horasClase + ' h\n  ' +
    c.modulos.map((m) => (m.n === 'E' ? 'Electiva' : 'M' + m.n) + ' ' + m.titulo + ' (' + m.clases.length + ')').join(' · ')).join('\n');
}

codigos(CAT.find((x) => x.id === 'redes'), 'R');
codigos(CAT.find((x) => x.id === 'ia'), 'C');
let texto = fs.readFileSync(path.join(__dirname, 'plantilla-propuesta-ampliacion.md'), 'utf8').replace(/\r\n/g, '\n');
const cIa = CAT.find((x) => x.id === 'ia'); const cRedes = CAT.find((x) => x.id === 'redes');
const totalClases = CAT.reduce((a, c) => a + nClases(c), 0); const totalHoras = CAT.reduce((a, c) => a + nClases(c) * c.horasClase, 0);
const partes = { 'CURSO:redes': () => curso('redes'), 'CURSO:ia': () => curso('ia'), TOTALES: totales, CATALOGO: catalogo, 'VIDEOS:redes': () => tablaVideos('redes'),
  'VIDEOS:ia': () => tablaVideos('ia'), VIDEOS_RESUMEN: resumenVideos, IA_RESUMEN: resumenIa, IA_TUTORIAL: mapaTutorial,
  IA_MODULOS: () => String(cIa.modulos.length), IA_CLASES: () => String(nClases(cIa)), IA_HORAS: () => String(nClases(cIa) * cIa.horasClase),
  IA_GRATIS: () => String(cIa.clases.filter((x) => /^Gratis/.test(x.plan)).length),
  REDES_CLASES: () => String(nClases(cRedes)), REDES_HORAS: () => String(nClases(cRedes) * cRedes.horasClase),
  TOTAL_CLASES: () => String(totalClases), TOTAL_HORAS: () => String(totalHoras),
  VIDEOS_TOTAL: () => String(new Set(['redes', 'ia'].flatMap((id) => CAT.find((x) => x.id === id).clases.flatMap((x) => (x.videos || []).map((v) => v.split('@')[0])))).size) };
Object.entries(partes).forEach(([k, f]) => { texto = texto.split('{{' + k + '}}').join(f()); });
if (/\{\{/.test(texto)) throw new Error('Quedó una marca sin reemplazar: ' + texto.match(/\{\{[^}]+\}\}/)[0]);
fs.writeFileSync(path.join(raiz, 'PROPUESTA-AMPLIACION-6-CURSOS.md'), texto, 'utf8');
console.log('✎ PROPUESTA-AMPLIACION-6-CURSOS.md generado (' + texto.split('\n').length + ' líneas)');
