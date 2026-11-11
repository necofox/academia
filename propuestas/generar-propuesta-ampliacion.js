// GENERA PROPUESTA-AMPLIACION-6-CURSOS.md (Node.js)
// Uso, desde la carpeta de la academia:  node propuestas/generar-propuesta-ampliacion.js
// Une la plantilla escrita a mano (propuestas/plantilla-propuesta-ampliacion.md) con las partes
// que salen del borrador del catálogo (módulos, clases, totales), para que el documento y el
// borrador nunca se contradigan.
'use strict';
const fs = require('fs');
const path = require('path');
const raiz = path.join(__dirname, '..');
const win = {};
new Function('window', fs.readFileSync(path.join(raiz, 'recursos/catalogo.js'), 'utf8'))(win);
new Function('window', fs.readFileSync(path.join(__dirname, 'cursos-nuevos.borrador.js'), 'utf8'))(win);
const CAT = win.CATALOGO;

const lista = (nums) => (nums.length === 1 ? 'Módulo ' + nums[0] : 'Módulos ' + nums.slice(0, -1).join(', ') + ' y ' + nums[nums.length - 1]);
const previos = (m) => (m.previos.length ? lista(m.previos) + '.' + (m.previosNota ? ' ' + m.previosNota : '') : m.previosNota || 'Ninguno.');
const celda = (s) => String(s).replace(/\|/g, '\\|');
const obligatorios = (c) => c.modulos.filter((m) => !m.opcional);
const nClases = (c) => obligatorios(c).reduce((a, m) => a + m.clases.length, 0);

function curso(id) {
  const c = CAT.find((x) => x.id === id);
  const col = id === 'ia' ? 'Plan de Claude necesario' : 'Temario oficial que cubre';
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
    L.push('', '| Clase | Tema | ' + col + ' |', '|---|---|---|');
    m.clases.forEach((x, i) => L.push('| M' + m.n + '·' + (i + 1) + ' | ' + celda(x.titulo) + ' | ' + celda((id === 'ia' ? x.plan : x.ref) || '—') + ' |'));
    L.push('');
  });
  return L.join('\n').trim();
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

let texto = fs.readFileSync(path.join(__dirname, 'plantilla-propuesta-ampliacion.md'), 'utf8').replace(/\r\n/g, '\n');
texto = texto.replace('{{CURSO:redes}}', curso('redes')).replace('{{CURSO:ia}}', curso('ia')).replace('{{TOTALES}}', totales()).replace('{{CATALOGO}}', catalogo());
if (/\{\{/.test(texto)) throw new Error('Quedó una marca sin reemplazar');
fs.writeFileSync(path.join(raiz, 'PROPUESTA-AMPLIACION-6-CURSOS.md'), texto, 'utf8');
console.log('✎ PROPUESTA-AMPLIACION-6-CURSOS.md generado (' + texto.split('\n').length + ' líneas)');
