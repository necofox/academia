// REVISIÓN DE COHERENCIA: catálogo frente a la propuesta curricular aprobada (Node.js, solo lectura)
// Uso, desde la carpeta de la academia:   node herramientas/revisar-coherencia.js
// Lee PROPUESTA-ORGANIZACION-CURRICULAR.md y recursos/catalogo.js y comprueba, módulo por módulo:
// título, cantidad de clases, horas, objetivo, competencias, logro, previos (y que la secuencia
// sea coherente: cada módulo solo depende de módulos anteriores), lugar de las clases existentes,
// parecido de los títulos de las clases y totales del curso. Escribe el resultado en Markdown.
'use strict';
const fs = require('fs');
const path = require('path');
const raiz = path.join(__dirname, '..');
const win = {};
// Opcional: --catalogo <archivo> revisa otro catálogo (sirve para probar que el revisor detecta errores)
const iCat = process.argv.indexOf('--catalogo');
const archivoCatalogo = iCat > 0 ? path.resolve(process.argv[iCat + 1]) : path.join(raiz, 'recursos/catalogo.js');
new Function('window', fs.readFileSync(archivoCatalogo, 'utf8'))(win);
// Redes e IA (cursos 5 y 6) vienen de PROPUESTA-AMPLIACION-6-CURSOS.md, no de esta propuesta: aquí se omiten
const CAT = win.CATALOGO.filter((c) => !["redes", "ia"].includes(c.id));
const P = fs.readFileSync(path.join(raiz, 'PROPUESTA-ORGANIZACION-CURRICULAR.md'), 'utf8').replace(/\r\n/g, '\n');

const norm = (s) => String(s || '').replace(/[*`"«»“”]/g, '').replace(/\s+/g, ' ').trim().replace(/\.$/, '').toLowerCase();
const sinTildes = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '');
const palabras = (s) => sinTildes(norm(s)).replace(/[^a-z0-9ñ ]/g, ' ').split(/\s+/).filter((w) => w.length > 3);
// Qué parte de las palabras del catálogo aparece en el texto de la propuesta (1 = todas)
const parecido = (cat, prop) => { const a = palabras(cat); const b = new Set(palabras(prop)); return a.length ? a.filter((w) => b.has(w)).length / a.length : 1; };
function numerosPrevios(texto) {
  const t = norm(texto).split(/\.\s/)[0];
  if (/^ninguno/.test(t)) return [];
  const m = t.match(/m[oó]dulos?\s+([\d\s,ya]+)/); if (!m) return [];
  const r = m[1].trim();
  const rango = r.match(/^(\d+)\s+a\s+(\d+)$/);
  if (rango) { const o = []; for (let i = +rango[1]; i <= +rango[2]; i++) o.push(i); return o; }
  return (r.match(/\d+/g) || []).map(Number);
}

// ---------- Lectura de la propuesta ----------
const SECCIONES = { ciberseguridad: '## 2. Curso de Ciberseguridad', ingles: '## 3. Curso de Inglés', javascript: '## 4. Curso de JavaScript', python: '## 5. Curso de Python' };
const LOGROS = {}; // "Ciber M1" → texto (sección 9)
(P.split('## 9.')[1] || '').split('\n').forEach((l) => { const m = l.match(/^\| (Ciber|Inglés|JS|Py) M(\d+) \| (.+?) \|$/); if (m) LOGROS[m[1] + ' M' + m[2]] = m[3]; });
const PREFIJO = { ciberseguridad: 'Ciber', ingles: 'Inglés', javascript: 'JS', python: 'Py' };
function leerCurso(id) {
  const ini = P.indexOf(SECCIONES[id]);
  const fin = P.indexOf('\n## ', ini + 5);
  const txt = P.slice(ini, fin);
  const total = (txt.match(/\*\*Total del curso: (\d+) clases/) || [])[1];
  // Une las líneas de continuación de una viñeta ("  texto…") sin tocar las listas numeradas ("  1. …")
  const bloques = txt.replace(/\n {2}(?!\d+\.\s)(?=\S)/g, ' ').split('\n### ').slice(1);
  const modulos = bloques.map((b) => {
    const cab = b.split('\n')[0];
    const m = cab.match(/^(?:Módulo (\d+)|Electiva) · (.+?) \((\d+) clases · (\d+) h/);
    const campo = (nombre) => { const r = b.match(new RegExp('\\*\\*' + nombre + ':\\*\\*\\s*(.+?)(?=\\s\\*\\*[A-ZÁÉÍÓÚ][^*]*:\\*\\*|\\n|$)')); return r ? r[1].trim() : null; };
    let clases = [];
    const lineas = b.split('\n');
    const iLista = lineas.findIndex((l) => /^- \*\*Clases:\*\*\s*$/.test(l.trim()) || l.trim() === '- **Clases:**');
    if (iLista >= 0) {
      for (let i = iLista + 1; i < lineas.length && /^\s+\d+\.\s/.test(lineas[i]); i++) clases.push(lineas[i].replace(/^\s+\d+\.\s/, '').trim());
    } else {
      const enLinea = b.match(/\*\*Clases:\*\*\s*(.+)/) || b.match(/^- (\d+ .+ · \d+ .+)$/m);
      if (enLinea) clases = enLinea[1].replace(/\.$/, '').split(' · ').map((s) => s.replace(/^(E?\d+)\s+/, '').trim());
    }
    const existentes = clases.map((c) => (c.match(/★ `clase-(\d+)`/) || [])[1] || null);
    clases = clases.map((c) => c.replace(/^★ `clase-\d+`\s*/, '').replace(/^nueva · /, '').trim());
    return { n: m ? (m[1] ? Number(m[1]) : 'E') : null, titulo: m && m[2], nClases: m && Number(m[3]), horas: m && Number(m[4]),
      objetivo: campo('Objetivo'), competencias: campo('Competencias'), previos: campo('Previos'),
      evaluacion: campo('Evaluación'), proyecto: campo('Proyecto') || campo('Proyecto \\(opcional\\)'), fuentes: campo('Fuentes'),
      clases, existentes, logro: m && m[1] ? LOGROS[PREFIJO[id] + ' M' + m[1]] : null };
  });
  return { total: Number(total), modulos };
}

// ---------- Comparación ----------
const out = []; let fallos = 0; const notas = [];
const ok = (cond) => { if (!cond) fallos++; return cond ? '✔' : '✘'; };
out.push('# Revisión de coherencia: catálogo frente a la propuesta curricular', '');
out.push('Generado con `node herramientas/revisar-coherencia.js` el ' + new Date().toISOString().slice(0, 10) + '.', '');
CAT.forEach((curso) => {
  const prop = leerCurso(curso.id);
  out.push('## ' + curso.nombre, '');
  out.push('| Módulo | Título | Clases | Horas | Objetivo | Competencias | Logro | Previos y secuencia | Clases existentes | Títulos de clases |', '|---|---|---|---|---|---|---|---|---|---|');
  const obl = curso.modulos.filter((m) => !m.opcional);
  const totalCat = obl.reduce((a, m) => a + m.clases.length, 0);
  if (prop.modulos.length !== curso.modulos.length) { fallos++; notas.push(curso.nombre + ': la propuesta tiene ' + prop.modulos.length + ' módulos y el catálogo ' + curso.modulos.length + '.'); }
  curso.modulos.forEach((m, i) => {
    const p = prop.modulos[i] || {};
    const etiqueta = m.n === 'E' ? 'Electiva' : 'M' + m.n;
    const tit = ok(p.n === m.n && norm(p.titulo) === norm(m.titulo));
    const ncl = ok(p.nClases === m.clases.length && p.clases.length === m.clases.length);
    const hrs = ok(p.horas === m.clases.length * curso.horasClase);
    let obj;
    if (p.objetivo) obj = ok(norm(p.objetivo) === norm(m.objetivo));
    else if (p.competencias && norm(p.competencias) === norm(m.objetivo)) { obj = '✔ (de las competencias)'; notas.push(curso.nombre + ' ' + etiqueta + ': la propuesta no trae «Objetivo»; el catálogo usa sus competencias como objetivo.'); }
    else { obj = '— derivado'; notas.push(curso.nombre + ' ' + etiqueta + ': la propuesta no define objetivo ni competencias; el catálogo usa «' + m.objetivo + '» (redactado a partir del título del módulo).'); }
    let comp;
    if (p.competencias && p.objetivo) comp = ok(norm(p.competencias) === norm(m.competencias));
    else comp = p.competencias ? '✔ (en el objetivo)' : '—';
    const log = p.logro ? ok(norm(p.logro) === norm(m.logro)) : (m.logro ? '—' : '—');
    const pp = p.previos ? numerosPrevios(p.previos) : [];
    const mismos = JSON.stringify(pp) === JSON.stringify(m.previos);
    const anteriores = m.previos.every((x) => m.n === 'E' || x < m.n);
    const prev = ok(mismos && anteriores) + (p.previos ? '' : ' (sin previos en la propuesta)');
    if (!mismos) notas.push(curso.nombre + ' ' + etiqueta + ': previos de la propuesta ' + JSON.stringify(pp) + ' y del catálogo ' + JSON.stringify(m.previos) + '.');
    const ex = m.clases.map((c) => (c.archivo ? c.archivo.match(/clase-(\d+)\.html$/)[1] : null));
    const exi = ok(JSON.stringify(ex) === JSON.stringify(p.existentes || []));
    const bajos = [];
    m.clases.forEach((c, k) => { if (!c.archivo) { const s = parecido(c.titulo, (p.clases || [])[k] || ''); if (s < 0.6) bajos.push(etiqueta + '·' + (k + 1) + ' (' + Math.round(s * 100) + '%)'); } });
    const tits = bajos.length ? '✘ ' + bajos.join(', ') : '✔';
    if (bajos.length) fallos++;
    out.push('| ' + etiqueta + ' | ' + tit + ' | ' + ncl + ' ' + m.clases.length + ' | ' + hrs + ' ' + m.clases.length * curso.horasClase + ' | ' + obj + ' | ' + comp + ' | ' + log + ' | ' + prev + ' | ' + exi + (ex.some(Boolean) ? ' ' + ex.filter(Boolean).map((x) => 'clase-' + x).join(', ') : '') + ' | ' + tits + ' |');
  });
  const totOk = ok(totalCat === prop.total);
  const archivos = curso.clases.filter((c) => c.archivo).map((c) => Number(c.n));
  const ordenOk = ok(archivos.every((x, i) => i === 0 || x > archivos[i - 1]));
  out.push('', '- Total del curso: ' + totOk + ' ' + totalCat + ' clases · ' + totalCat * curso.horasClase + ' h (propuesta: ' + prop.total + ' clases).');
  out.push('- Las clases existentes aparecen en el orden de sus archivos (' + archivos.map((x) => String(x).padStart(2, '0')).join(', ') + '): ' + ordenOk + '.', '');
});
out.push('## Notas', '');
if (notas.length) notas.forEach((n) => out.push('- ' + n)); else out.push('- Sin notas.');
out.push('', fallos ? '**Resultado: ' + fallos + ' diferencia(s) por revisar (✘).**' : '**Resultado: el catálogo es coherente con la propuesta en todos los puntos revisados.**');
console.log(out.join('\n'));
process.exitCode = fallos ? 1 : 0;
