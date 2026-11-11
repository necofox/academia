// REVISIÓN DEL CATÁLOGO (Node.js) — solo lectura.
// Uso, desde la carpeta de la academia:   node herramientas/revisar-catalogo.js
// Comprueba que recursos/catalogo.js:
//  - conserve todas las clases de la línea base (herramientas/linea-base-identificadores.json),
//  - que cada clase lista tenga n, archivo e id, que el archivo exista y que su window.CLASE
//    tenga el mismo id,
//  - que no haya ids ni archivos repetidos,
// y muestra los módulos, las clases y las horas de cada curso.
'use strict';
const fs = require('fs');
const path = require('path');
const raiz = path.join(__dirname, '..');
const win = {};
new Function('window', fs.readFileSync(path.join(raiz, 'recursos/catalogo.js'), 'utf8'))(win);
// Opcional: --agregar <archivo> carga un borrador después del catálogo (por ejemplo, cursos propuestos)
process.argv.forEach((a, i) => { if (a === '--agregar') new Function('window', fs.readFileSync(path.resolve(process.argv[i + 1]), 'utf8'))(win); });
const CAT = win.CATALOGO;
const base = JSON.parse(fs.readFileSync(path.join(__dirname, 'linea-base-identificadores.json'), 'utf8'));
const errores = [];
const listas = CAT.flatMap((c) => c.clases.filter((x) => x.archivo));
base.clases.forEach((b) => { if (!listas.some((x) => x.id === b.clase)) errores.push('Falta en el catálogo la clase ' + b.clase + ' (línea base).'); });
const repetidos = (lista) => lista.filter((x, i) => lista.indexOf(x) !== i);
repetidos(listas.map((x) => x.id)).forEach((id) => errores.push('id repetido: ' + id));
repetidos(listas.map((x) => x.archivo)).forEach((a) => errores.push('archivo repetido: ' + a));
CAT.forEach((curso) => curso.clases.forEach((x) => {
  if (!x.titulo || x.modulo === undefined || !x.orden) errores.push(curso.id + ': clase sin título, módulo u orden.');
  if (!!x.archivo !== !!x.id || (x.archivo && !x.n)) errores.push(curso.id + ': la clase «' + x.titulo + '» necesita n, archivo e id juntos.');
  if (x.archivo) {
    const f = path.join(raiz, x.archivo);
    if (!fs.existsSync(f)) { errores.push('No existe el archivo ' + x.archivo); return; }
    const m = fs.readFileSync(f, 'utf8').match(/window\.CLASE\s*=\s*\{[\s\S]*?\bid:\s*'([^']+)'/);
    if (!m || m[1] !== x.id) errores.push(x.archivo + ': su window.CLASE.id (' + (m && m[1]) + ') no coincide con el catálogo (' + x.id + ').');
  }
}));
CAT.forEach((c) => {
  const obl = c.modulos.filter((m) => !m.opcional); const opc = c.modulos.filter((m) => m.opcional);
  const n = obl.reduce((a, m) => a + m.clases.length, 0);
  console.log(c.nombre + ': ' + obl.length + ' módulos, ' + n + ' clases (' + n * c.horasClase + ' h)' +
    (opc.length ? ' + electiva de ' + opc.reduce((a, m) => a + m.clases.length, 0) + ' clases' : '') +
    ' · listas: ' + c.clases.filter((x) => x.archivo).map((x) => x.id + ' (M' + x.modulo + '·' + x.orden + ')').join(', '));
});
console.log(errores.length ? '\n✘ Revisar:\n- ' + errores.join('\n- ') : '\n✔ Catálogo correcto: ' + listas.length + ' clases listas, ninguna clase de la línea base falta y cada id coincide con su página.');
process.exitCode = errores.length ? 1 : 0;
