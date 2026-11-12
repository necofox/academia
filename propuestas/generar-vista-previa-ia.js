// VISTA PREVIA DEL MENÚ CON LOS SEIS CURSOS DE IA (Node.js)
// Uso, desde la carpeta de la academia:  node propuestas/generar-vista-previa-ia.js
// Genera propuestas/vista-previa-ia-menu.html: tu inicio.html real + el borrador ia-6-cursos.borrador.js.
// Es un archivo generado para que funcione también con doble clic (file://). Aislado: almacenamiento en
// memoria (nunca el real), sin sync.js, sin diferencias.js y con los enlaces desactivados.
// No modifica inicio.html, el catálogo, el motor ni la sincronización.
'use strict';
const fs = require('fs');
const path = require('path');
const raiz = path.join(__dirname, '..');

const AISLAR = '<script>/* AISLAMIENTO DE LA VISTA PREVIA: va antes que todo */\n(function () {\n' +
  '  var d = {};\n' +
  '  var pedido = new URLSearchParams(location.search).get("curso"); // ?curso=prompt abre ese curso\n' +
  '  if (pedido && /^[a-z-]{2,20}$/.test(pedido)) d["academia:menu:curso"] = JSON.stringify(pedido);\n' +
  '  var f = { getItem: function (k) { return Object.prototype.hasOwnProperty.call(d, k) ? d[k] : null; }, setItem: function (k, v) { d[k] = String(v); },\n' +
  '    removeItem: function (k) { delete d[k]; }, clear: function () { d = {}; }, key: function (i) { return Object.keys(d)[i] || null; } };\n' +
  '  Object.defineProperty(f, "length", { get: function () { return Object.keys(d).length; } });\n' +
  '  try { Object.defineProperty(window, "localStorage", { value: f, configurable: true }); } catch (e) {}\n' +
  '  if (window.localStorage !== f) { location.replace("about:blank"); return; } // si no se puede aislar, no se muestra\n' +
  '  document.addEventListener("click", function (e) {\n' +
  '    var a = e.target.closest && e.target.closest("a[href]");\n' +
  '    if (!a || a.getAttribute("href").charAt(0) === "#") return;\n' +
  '    e.preventDefault();\n' +
  '    var t = document.querySelector(".aviso-previa");\n' +
  '    if (!t) { t = document.createElement("p"); t.className = "aviso-previa"; t.setAttribute("role", "status"); document.body.append(t); }\n' +
  '    t.textContent = "En la vista previa los enlaces están desactivados: aquí solo se muestra cómo se verían los cursos y módulos.";\n' +
  '  }, true);\n})();\n</script>';
const CSS = '<style>/* Ajustes de la vista previa */\n#sync{display:none}\n' +
  '.aviso-previa{position:fixed;left:16px;right:16px;bottom:16px;z-index:60;background:var(--panel2);border:1px solid var(--warn);border-radius:10px;padding:12px 16px}\n</style>';

let h = fs.readFileSync(path.join(raiz, 'inicio.html'), 'utf8').replace(/\r\n/g, '\n');
const pasos = [
  [/<head>/i, '<head>\n<!-- ARCHIVO GENERADO por propuestas/generar-vista-previa-ia.js a partir de inicio.html. No editar a mano. -->\n<base href="../">\n' + AISLAR],
  [/<\/head>/i, CSS + '\n</head>'],
  [/<script src="recursos\/sync\.js[^"]*"><\/script>\s*/i, ''],
  [/<script src="recursos\/diferencias\.js[^"]*"><\/script>\s*/i, ''],
  [/(<script src="recursos\/catalogo\.js[^"]*"><\/script>)/i, '$1\n<script src="propuestas/ia-6-cursos.borrador.js"></script>']
];
pasos.forEach(([re, rep]) => { if (!re.test(h)) throw new Error('inicio.html cambió: no se encontró ' + re); h = h.replace(re, rep); });
if (/recursos\/sync\.js/.test(h)) throw new Error('La vista previa no debe cargar sync.js');
fs.writeFileSync(path.join(__dirname, 'vista-previa-ia-menu.html'), h, 'utf8');
console.log('✎ propuestas/vista-previa-ia-menu.html generado desde inicio.html');
