# Ruta de aprendizaje: JavaScript, desarrollo web desde cero

Cada clase dura **2 horas**, con un editor que ejecuta JavaScript de verdad y retos
autocorregidos. El curso se organiza por **módulos**, aprobados en
`PROPUESTA-ORGANIZACION-CURRICULAR.md`: primero la lógica, después HTML y CSS (antes del DOM,
porque el DOM los necesita), luego la asincronía (antes del backend, porque Node.js la usa siempre).

- **Clases existentes:** conservan su número de archivo y su `id` (`clase-04` es `js-04`).
- **Clases nuevas:** usan el siguiente número de archivo libre (`clase-05`, `clase-06`…) y
  ocupan el lugar que les toca dentro de su módulo.

<!-- INICIO: generado desde recursos/catalogo.js con "node herramientas/generar-rutas.js". No editar a mano. -->

## Meta del curso

Desarrollar aplicaciones web completas (frontend y backend con Node.js).

- **Duración:** 7 módulos · 37 clases · 74 h de clase (2 h por clase). La práctica autónoma de cada clase se suma aparte.
- **Clases listas:** 4 de 37.
- **Siguiente clase por crear:** Módulo 1 · Clase 5: Bucles: for, while y for...of.
- **Proyecto final del curso:** Aplicación web completa, con frontend, API en Node.js y base de datos. Por ejemplo, un gestor de tareas o un panel de alertas.

## Resumen de módulos

| Módulo | Clases | Horas | Listas | Necesitas antes |
|---|---|---|---|---|
| Módulo 1 · Fundamentos de programación | 9 | 18 | 4 | — |
| Módulo 2 · HTML y CSS para programadores | 4 | 8 | 0 | Ninguno obligatorio |
| Módulo 3 · JavaScript en el navegador | 6 | 12 | 0 | Módulos 1 y 2 |
| Módulo 4 · Asincronía y APIs | 4 | 8 | 0 | Módulo 3 |
| Módulo 5 · Herramientas del desarrollador | 4 | 8 | 0 | Módulo 1 |
| Módulo 6 · Node.js y backend | 7 | 14 | 0 | Módulos 4 y 5 |
| Módulo 7 · Proyecto final | 3 | 6 | 0 | Ninguno obligatorio |
| **Total** | **37** | **74** | **4** | |

## Módulo 1 · Fundamentos de programación (9 clases · 18 h)

- **Objetivo:** Pensar como programador y dominar la lógica básica.
- **Competencias:** Variables y tipos, operadores, condicionales, bucles, funciones, arrays, objetos, JSON y depuración.
- **Al terminar serás capaz de:** Resolver problemas con lógica y estructuras de datos.
- **Necesitas antes:** Ninguno.
- **Evaluación del módulo:** El proyecto del módulo, con retos autocorregidos.
- **Proyecto:** Juego de adivinar el número (última clase del módulo).
- **Fuentes previstas** (se verifican al crear cada clase): Guía de JavaScript de MDN (en español), especificación ECMA-262.

| Clase | Tema | Videos | Estado |
|---|---|---|---|
| M1·1 | ¿Qué es programar? Tu primer código en JavaScript | [▶ 1](https://www.youtube.com/watch?v=1glVfFxj8a4&t=174s) [▶ 2](https://www.youtube.com/watch?v=1glVfFxj8a4&t=2390s) | ✔ Lista: `clases/clase-01.html` (id `js-01`) |
| M1·2 | Variables y tipos de datos | [▶ 1](https://www.youtube.com/watch?v=1glVfFxj8a4&t=3049s) [▶ 2](https://www.youtube.com/watch?v=1glVfFxj8a4&t=3599s) | ✔ Lista: `clases/clase-02.html` (id `js-02`) |
| M1·3 | Operadores y textos | [▶ 1](https://www.youtube.com/watch?v=1glVfFxj8a4&t=4937s) [▶ 2](https://www.youtube.com/watch?v=1glVfFxj8a4&t=6565s) | ✔ Lista: `clases/clase-03.html` (id `js-03`) |
| M1·4 | Condicionales: tu programa toma decisiones | [▶ 1](https://www.youtube.com/watch?v=1glVfFxj8a4&t=7277s) | ✔ Lista: `clases/clase-04.html` (id `js-04`) |
| M1·5 | Bucles: for, while y for...of | [▶ 1](https://www.youtube.com/watch?v=1glVfFxj8a4&t=11575s) | Próximamente · **siguiente por crear** |
| M1·6 | Funciones, parámetros y valores de retorno | [▶ 1](https://www.youtube.com/watch?v=1glVfFxj8a4&t=12829s) | Próximamente |
| M1·7 | Arrays y sus métodos (map, filter, find) | [▶ 1](https://www.youtube.com/watch?v=1glVfFxj8a4&t=8741s) | Próximamente |
| M1·8 | Objetos y JSON | [▶ 1](https://www.youtube.com/watch?v=1glVfFxj8a4&t=14229s) [▶ 2](https://www.youtube.com/watch?v=d1XijkyZRvM) | Próximamente |
| M1·9 | Depuración, manejo de errores (try/catch) y proyecto: adivina el número | [▶ 1](https://www.youtube.com/watch?v=1glVfFxj8a4&t=18751s) [▶ 2](https://www.youtube.com/watch?v=1glVfFxj8a4&t=20444s) | Próximamente |

#### Recursos audiovisuales del módulo

**Recurso principal:** [Curso COMPLETO de JavaScript DESDE CERO para Principiantes](https://www.youtube.com/watch?v=1glVfFxj8a4) · MoureDev by Brais Moure · 6:20:30. Recurso audiovisual principal del Módulo 1, elegido por el alumno: cada clase del módulo enlaza el capítulo que le corresponde.

| Clase | Video | Canal · duración · idioma | Desde | Ayuda a comprender | Contraste documental |
|---|---|---|---|---|---|
| M1·1 | [Curso COMPLETO de JavaScript DESDE CERO para Principiantes](https://www.youtube.com/watch?v=1glVfFxj8a4&t=174s) | MoureDev by Brais Moure · 6:20:30 · español | 2:54 | qué es JavaScript, su historia y para qué se usa (capítulos 1 a 4) | [MDN: ¿Qué es JavaScript?](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Scripting/What_is_JavaScript) |
| M1·1 | [Curso COMPLETO de JavaScript DESDE CERO para Principiantes](https://www.youtube.com/watch?v=1glVfFxj8a4&t=2390s) | MoureDev by Brais Moure · 6:20:30 · español | 39:50 | el primer programa con console.log (capítulo 15, «Hola mundo») | [MDN: ¿Qué es JavaScript?](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Scripting/What_is_JavaScript) |
| M1·2 | [Curso COMPLETO de JavaScript DESDE CERO para Principiantes](https://www.youtube.com/watch?v=1glVfFxj8a4&t=3049s) | MoureDev by Brais Moure · 6:20:30 · español | 50:49 | variables (capítulo 16, «Variables») | [MDN: Gramática y tipos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types) |
| M1·2 | [Curso COMPLETO de JavaScript DESDE CERO para Principiantes](https://www.youtube.com/watch?v=1glVfFxj8a4&t=3599s) | MoureDev by Brais Moure · 6:20:30 · español | 59:59 | tipos de datos (capítulo 17, «Tipos de datos») | [MDN: Gramática y tipos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types) |
| M1·3 | [Curso COMPLETO de JavaScript DESDE CERO para Principiantes](https://www.youtube.com/watch?v=1glVfFxj8a4&t=4937s) | MoureDev by Brais Moure · 6:20:30 · español | 1:22:17 | operadores (capítulo 19, «Operadores») | [MDN: Expresiones y operadores](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators) |
| M1·3 | [Curso COMPLETO de JavaScript DESDE CERO para Principiantes](https://www.youtube.com/watch?v=1glVfFxj8a4&t=6565s) | MoureDev by Brais Moure · 6:20:30 · español | 1:49:25 | textos (capítulo 21, «Strings») | [MDN: Expresiones y operadores](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators) |
| M1·4 | [Curso COMPLETO de JavaScript DESDE CERO para Principiantes](https://www.youtube.com/watch?v=1glVfFxj8a4&t=7277s) | MoureDev by Brais Moure · 6:20:30 · español | 2:01:17 | condicionales (capítulo 23, «Condicionales») | [MDN: if...else](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else) |
| M1·5 | [Curso COMPLETO de JavaScript DESDE CERO para Principiantes](https://www.youtube.com/watch?v=1glVfFxj8a4&t=11575s) | MoureDev by Brais Moure · 6:20:30 · español | 3:12:55 | bucles (capítulo 29, «Bucles») | [MDN: Bucles e iteración](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration) |
| M1·6 | [Curso COMPLETO de JavaScript DESDE CERO para Principiantes](https://www.youtube.com/watch?v=1glVfFxj8a4&t=12829s) | MoureDev by Brais Moure · 6:20:30 · español | 3:33:49 | funciones (capítulo 31, «Funciones») | [MDN: Funciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions) |
| M1·7 | [Curso COMPLETO de JavaScript DESDE CERO para Principiantes](https://www.youtube.com/watch?v=1glVfFxj8a4&t=8741s) | MoureDev by Brais Moure · 6:20:30 · español | 2:25:41 | arrays (capítulo 25, «Arrays») | [MDN: Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array) |
| M1·8 | [Curso COMPLETO de JavaScript DESDE CERO para Principiantes](https://www.youtube.com/watch?v=1glVfFxj8a4&t=14229s) | MoureDev by Brais Moure · 6:20:30 · español | 3:57:09 | objetos (capítulo 33, «Objetos») | [MDN: Trabajando con objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects) |
| M1·8 | [Curso JavaScript: 59. JSON - #jonmircha](https://www.youtube.com/watch?v=d1XijkyZRvM) | jonmircha · 29:43 · español | inicio | JSON: convertir objetos a texto y de vuelta (JSON.stringify y JSON.parse). Complementa a MoureDev, cuyo índice no tiene un capítulo de JSON | [MDN: JSON](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON) |
| M1·9 | [Curso COMPLETO de JavaScript DESDE CERO para Principiantes](https://www.youtube.com/watch?v=1glVfFxj8a4&t=18751s) | MoureDev by Brais Moure · 6:20:30 · español | 5:12:31 | manejo de errores con try/catch (capítulo 40) | [MDN: try...catch](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch) |
| M1·9 | [Curso COMPLETO de JavaScript DESDE CERO para Principiantes](https://www.youtube.com/watch?v=1glVfFxj8a4&t=20444s) | MoureDev by Brais Moure · 6:20:30 · español | 5:40:44 | la consola como herramienta de depuración (capítulo 42) | [MDN: try...catch](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch) |

## Módulo 2 · HTML y CSS para programadores (4 clases · 8 h)

- **Objetivo:** Construir la estructura y el diseño que JavaScript va a manejar.
- **Competencias:** HTML semántico y formularios; selectores, cascada y modelo de caja; Flexbox, Grid y diseño adaptable; accesibilidad básica.
- **Al terminar serás capaz de:** Maquetar páginas semánticas, adaptables y accesibles.
- **Necesitas antes:** Ninguno obligatorio; conviene haber hecho el Módulo 1.
- **Proyecto:** Una página personal adaptable al celular.
- **Fuentes previstas** (se verifican al crear cada clase): Ruta de aprendizaje web de MDN, WCAG 2 (W3C).

| Clase | Tema | Videos | Estado |
|---|---|---|---|
| M2·1 | HTML semántico y formularios | [▶ 1](https://www.youtube.com/watch?v=-oK6zL01fNM&t=6215s) [▶ 2](https://www.youtube.com/watch?v=-oK6zL01fNM&t=18434s) | Próximamente |
| M2·2 | CSS: selectores, cascada y modelo de caja | [▶ 1](https://www.youtube.com/watch?v=K3xmRF8ab1o&t=2853s) [▶ 2](https://www.youtube.com/watch?v=K3xmRF8ab1o&t=11605s) [▶ 3](https://www.youtube.com/watch?v=K3xmRF8ab1o&t=17294s) | Próximamente |
| M2·3 | Flexbox, Grid y diseño adaptable | [▶ 1](https://www.youtube.com/watch?v=AAtvnv6LNMk) [▶ 2](https://www.youtube.com/watch?v=Wz8cP6Kykuw) [▶ 3](https://www.youtube.com/watch?v=udGrXWeJp1Y&t=719s) | Próximamente |
| M2·4 | Accesibilidad web (WCAG) básica | [▶ 1](https://www.youtube.com/watch?v=-oK6zL01fNM&t=26349s) | Próximamente |

#### Recursos audiovisuales del módulo

| Clase | Video | Canal · duración · idioma | Desde | Ayuda a comprender | Contraste documental |
|---|---|---|---|---|---|
| M2·1 | [Curso HTML & CSS ( 1 / 5 ): Fundamentos HTML - jonmircha](https://www.youtube.com/watch?v=-oK6zL01fNM&t=6215s) | jonmircha · 7:42:22 · español | 1:43:35 | etiquetas semánticas de texto y de estructura (capítulos 17 a 21) | [MDN: Estructurando la web con HTML (HTML semántico)](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content) |
| M2·1 | [Curso HTML & CSS ( 1 / 5 ): Fundamentos HTML - jonmircha](https://www.youtube.com/watch?v=-oK6zL01fNM&t=18434s) | jonmircha · 7:42:22 · español | 5:07:14 | elementos y atributos de formularios (capítulos 38 a 41) | [MDN: Formularios web](https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Forms) |
| M2·2 | [Curso HTML & CSS ( 2 / 5 ): Fundamentos CSS - jonmircha](https://www.youtube.com/watch?v=K3xmRF8ab1o&t=2853s) | jonmircha · 9:58:22 · español | 47:33 | selectores de etiqueta, clase e identificador (capítulo 7) | [MDN: Cascada, especificidad y herencia](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) |
| M2·2 | [Curso HTML & CSS ( 2 / 5 ): Fundamentos CSS - jonmircha](https://www.youtube.com/watch?v=K3xmRF8ab1o&t=11605s) | jonmircha · 9:58:22 · español | 3:13:25 | la cascada y la especificidad (capítulos 18 a 20) | [MDN: Cascada, especificidad y herencia](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) |
| M2·2 | [Curso HTML & CSS ( 2 / 5 ): Fundamentos CSS - jonmircha](https://www.youtube.com/watch?v=K3xmRF8ab1o&t=17294s) | jonmircha · 9:58:22 · español | 4:48:14 | el modelo de caja (capítulos 24 a 27) | [MDN: El modelo de caja](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics/Box_model) |
| M2·3 | [Qué es Flexbox y para qué sirve \| Curso Flexbox CSS (1/13)](https://www.youtube.com/watch?v=AAtvnv6LNMk) | jonmircha · 9:49 · español | inicio | qué es Flexbox y para qué sirve (lección 1 de su curso de Flexbox) | [MDN: Flexbox](https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Flexbox) |
| M2·3 | [Grid explícita: grid-template-columns, fr y repeat() \| Curso Grid CSS (2/17)](https://www.youtube.com/watch?v=Wz8cP6Kykuw) | jonmircha · 30:59 · español | inicio | Grid: grid-template-columns, la unidad fr y repeat() (lección 2 de su curso de Grid) | [MDN: Grids](https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Grids) |
| M2·3 | [Curso HTML & CSS ( 5 / 5 ): Responsive Design y Arquitectura CSS - jonmircha](https://www.youtube.com/watch?v=udGrXWeJp1Y&t=719s) | jonmircha · 9:53:46 · español | 11:59 | introducción al diseño adaptable y media queries (capítulos 3 a 13) | [MDN: Diseño adaptable](https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) |
| M2·4 | [Curso HTML & CSS ( 1 / 5 ): Fundamentos HTML - jonmircha](https://www.youtube.com/watch?v=-oK6zL01fNM&t=26349s) | jonmircha · 7:42:22 · español | 7:19:09 | accesibilidad web (capítulo 45) | [MDN: Accesibilidad](https://developer.mozilla.org/es/docs/Web/Accessibility) |

## Módulo 3 · JavaScript en el navegador (6 clases · 12 h)

- **Objetivo:** Crear páginas interactivas.
- **Competencias:** Manejar el DOM y los eventos, validar formularios, guardar datos en el navegador y organizar el código en módulos.
- **Al terminar serás capaz de:** Crear aplicaciones interactivas en el navegador.
- **Necesitas antes:** Módulos 1 y 2.
- **Proyecto:** App de tareas (última clase del módulo).
- **Fuentes previstas** (se verifican al crear cada clase): MDN.

| Clase | Tema | Videos | Estado |
|---|---|---|---|
| M3·1 | El DOM | [▶ 1](https://www.youtube.com/watch?v=koiPxFFiqJ4&t=268s) | Próximamente |
| M3·2 | Eventos | [▶ 1](https://www.youtube.com/watch?v=koiPxFFiqJ4&t=8246s) | Próximamente |
| M3·3 | Formularios y validación | [▶ 1](https://www.youtube.com/watch?v=dyaH-gdiD34) [▶ 2](https://www.youtube.com/watch?v=AGPalf1C8Ms) | Próximamente |
| M3·4 | localStorage y JSON | [▶ 1](https://www.youtube.com/watch?v=16geDhp5Xmg) | Próximamente |
| M3·5 | Módulos de JavaScript (ES) | [▶ 1](https://www.youtube.com/watch?v=0GEUyQXe3NI) | Próximamente |
| M3·6 | Proyecto: app de tareas | [▶ 1](https://www.youtube.com/watch?v=koiPxFFiqJ4&t=17007s) | Próximamente |

#### Recursos audiovisuales del módulo

| Clase | Video | Canal · duración · idioma | Desde | Ayuda a comprender | Contraste documental |
|---|---|---|---|---|---|
| M3·1 | [JavaScript para Manipulación del DOM - Curso con Proyectos](https://www.youtube.com/watch?v=koiPxFFiqJ4&t=268s) | freeCodeCamp Español · 5:30:16 · español | 4:28 | qué es el DOM y cómo seleccionar elementos (getElementById, querySelector…) | [MDN: Document Object Model (DOM)](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model) |
| M3·2 | [JavaScript para Manipulación del DOM - Curso con Proyectos](https://www.youtube.com/watch?v=koiPxFFiqJ4&t=8246s) | freeCodeCamp Español · 5:30:16 · español | 2:17:26 | eventos del DOM y addEventListener() | [MDN: addEventListener()](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener) |
| M3·3 | [Curso JavaScript: 101. DOM: Ejercicios Prácticos \| Validación de Formularios con HTML5 - #jonmircha](https://www.youtube.com/watch?v=dyaH-gdiD34) | jonmircha · 39:12 · español | inicio | validación de formularios con los atributos de HTML5 | [MDN: Validación de formularios](https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Forms/Form_validation) |
| M3·3 | [Curso JavaScript: 102. DOM: Ejercicios Prácticos \| Validación de Formularios - #jonmircha](https://www.youtube.com/watch?v=AGPalf1C8Ms) | jonmircha · 29:39 · español | inicio | validación de formularios con JavaScript | [MDN: Validación de formularios](https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Forms/Form_validation) |
| M3·4 | [Curso JavaScript: 89. DOM: Ejercicios Prácticos \| API localStorage - #jonmircha](https://www.youtube.com/watch?v=16geDhp5Xmg) | jonmircha · 25:55 · español | inicio | guardar datos en el navegador con la API localStorage | [MDN: localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage) |
| M3·5 | [Curso JavaScript: 33. Módulos ( import / export ) - #jonmircha](https://www.youtube.com/watch?v=0GEUyQXe3NI) | jonmircha · 40:34 · español | inicio | módulos de JavaScript: import y export | [MDN: Módulos de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules) |
| M3·6 | [JavaScript para Manipulación del DOM - Curso con Proyectos](https://www.youtube.com/watch?v=koiPxFFiqJ4&t=17007s) | freeCodeCamp Español · 5:30:16 · español | 4:43:27 | proyecto guiado: lista de tareas pendientes con el DOM | [MDN: Document Object Model (DOM)](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model) |

## Módulo 4 · Asincronía y APIs (4 clases · 8 h)

- **Objetivo:** Comunicarse con servidores y servicios externos.
- **Competencias:** Promesas y async/await; HTTP, REST y fetch; manejar errores y estados de carga.
- **Al terminar serás capaz de:** Consumir APIs de forma asíncrona.
- **Necesitas antes:** Módulo 3.
- **Proyecto:** App con una API pública (última clase del módulo).
- **Fuentes previstas** (se verifican al crear cada clase): MDN, RFC 9110 (HTTP).

| Clase | Tema | Videos | Estado |
|---|---|---|---|
| M4·1 | Asincronía: callbacks, promesas y async/await | [▶ 1](https://www.youtube.com/watch?v=TYG2_iUr8XY) [▶ 2](https://www.youtube.com/watch?v=ppzrpTjwEC8) [▶ 3](https://www.youtube.com/watch?v=PbI5EEpodPM) | Próximamente |
| M4·2 | HTTP, REST y fetch | [▶ 1](https://www.youtube.com/watch?v=GP8OCiJLeN4) | Próximamente |
| M4·3 | Errores de red y estados de carga | [▶ 1](https://www.youtube.com/watch?v=FJ-w0tf3d_w) | Próximamente |
| M4·4 | Proyecto: app con una API pública | [▶ 1](https://www.youtube.com/watch?v=UorxESPSZNA) | Próximamente |

#### Recursos audiovisuales del módulo

| Clase | Video | Canal · duración · idioma | Desde | Ayuda a comprender | Contraste documental |
|---|---|---|---|---|---|
| M4·1 | [Curso JavaScript: 46. Callbacks - #jonmircha](https://www.youtube.com/watch?v=TYG2_iUr8XY) | jonmircha · 17:53 · español | inicio | callbacks | [JavaScript.info: Promesas y async/await](https://es.javascript.info/async) |
| M4·1 | [Curso JavaScript: 47. Promesas - #jonmircha](https://www.youtube.com/watch?v=ppzrpTjwEC8) | jonmircha · 19:08 · español | inicio | promesas | [MDN: Promise](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise); [JavaScript.info: Promesas y async/await](https://es.javascript.info/async) |
| M4·1 | [Curso JavaScript: 48. Async - Await - #jonmircha](https://www.youtube.com/watch?v=PbI5EEpodPM) | jonmircha · 18:41 · español | inicio | async y await | [JavaScript.info: Promesas y async/await](https://es.javascript.info/async) |
| M4·2 | [Curso JavaScript: 108. AJAX: API Fetch + Async-Await - #jonmircha](https://www.youtube.com/watch?v=GP8OCiJLeN4) | jonmircha · 17:01 · español | inicio | peticiones HTTP con fetch y async/await | [MDN: Uso de Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch); [MDN: Generalidades del protocolo HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Guides/Overview) |
| M4·3 | [Cómo CONSUMIR una API REST con JAVASCRIPT y Fetch + Promises con gestión de Errores](https://www.youtube.com/watch?v=FJ-w0tf3d_w) | midulive · 7:48 · español | inicio | consumir una API REST con fetch y gestionar los errores de la respuesta | [MDN: Uso de Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch) |
| M4·4 | [Curso JavaScript: 134. Ejercicios AJAX - APIs: Paginación de Pokémons con Fetch (1/2) - #jonmircha](https://www.youtube.com/watch?v=UorxESPSZNA) | jonmircha · 31:56 · español | inicio | proyecto guiado con una API pública: paginación con fetch | [MDN: Uso de Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch) |

## Módulo 5 · Herramientas del desarrollador (4 clases · 8 h)

- **Objetivo:** Trabajar con las herramientas de un equipo profesional.
- **Competencias:** Terminal y estructura de proyectos; Git y GitHub; npm y herramientas de calidad de código; pruebas automáticas.
- **Al terminar serás capaz de:** Trabajar con Git, npm y pruebas automáticas.
- **Necesitas antes:** Módulo 1. Se recomienda haber hecho el Módulo 3.
- **Fuentes previstas** (se verifican al crear cada clase): Libro Pro Git (en español), documentación de Node.js.

| Clase | Tema | Videos | Estado |
|---|---|---|---|
| M5·1 | Terminal y estructura de un proyecto | [▶ 1](https://www.youtube.com/watch?v=3GymExBkKjE&t=1440s) | Próximamente |
| M5·2 | Git y GitHub | [▶ 1](https://www.youtube.com/watch?v=3GymExBkKjE&t=195s) [▶ 2](https://www.youtube.com/watch?v=3GymExBkKjE&t=8547s) | Próximamente |
| M5·3 | npm y calidad de código (ESLint, Prettier) | [▶ 1](https://www.youtube.com/watch?v=0f26_Enlv38&t=10721s) [▶ 2](https://www.youtube.com/watch?v=QpDpRmlFfqI) | Próximamente |
| M5·4 | Pruebas automáticas (la herramienta se decide al investigar la clase) | [▶ 1](https://www.youtube.com/watch?v=_t9l2TwGioc&t=844s) | Próximamente |

#### Recursos audiovisuales del módulo

| Clase | Video | Canal · duración · idioma | Desde | Ayuda a comprender | Contraste documental |
|---|---|---|---|---|---|
| M5·1 | [Curso COMPLETO de GIT y GITHUB desde CERO para PRINCIPIANTES](https://www.youtube.com/watch?v=3GymExBkKjE&t=1440s) | MoureDev by Brais Moure · 5:05:22 · español | 24:00 | comandos básicos de la terminal (capítulo 4 del curso de Git) | [MDN: Command line crash course (en inglés)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) |
| M5·2 | [Curso COMPLETO de GIT y GITHUB desde CERO para PRINCIPIANTES](https://www.youtube.com/watch?v=3GymExBkKjE&t=195s) | MoureDev by Brais Moure · 5:05:22 · español | 3:15 | Git desde cero: commits, ramas y fusiones (capítulos 1 a 22) | [Pro Git (libro oficial de Git), en español](https://git-scm.com/book/es/v2) |
| M5·2 | [Curso COMPLETO de GIT y GITHUB desde CERO para PRINCIPIANTES](https://www.youtube.com/watch?v=3GymExBkKjE&t=8547s) | MoureDev by Brais Moure · 5:05:22 · español | 2:22:27 | GitHub: repositorios remotos, push, pull y pull requests (capítulos 23 a 36) | [Pro Git (libro oficial de Git), en español](https://git-scm.com/book/es/v2) |
| M5·3 | [Curso Fundamentos de Node.js - jonmircha](https://www.youtube.com/watch?v=0f26_Enlv38&t=10721s) | jonmircha · 7:59:01 · español | 2:58:41 | npm, package.json y scripts (capítulos 17 a 25) | [Documentación de npm: package.json](https://docs.npmjs.com/cli/configuring-npm/package-json/) |
| M5·3 | [¡Tu CÓDIGO JAVASCRIPT sin ERRORES! 🛑🐛 - Configurando el LINTER con ESLint y STANDARD JS](https://www.youtube.com/watch?v=QpDpRmlFfqI) | midulive · 8:03 · español | inicio | configurar ESLint para encontrar errores en el código | [ESLint: Getting Started](https://eslint.org/docs/latest/use/getting-started) |
| M5·4 | [Curso de Test Driven Development desde Cero con JavaScript, React y Vitest](https://www.youtube.com/watch?v=_t9l2TwGioc&t=844s) | midulive · 1:58:45 · español | 14:04 | escribir y ejecutar pruebas con Vitest (desde el capítulo «Implementación y primer test») | [Vitest: Getting Started](https://vitest.dev/guide/) |

## Módulo 6 · Node.js y backend (7 clases · 14 h)

- **Objetivo:** Construir el servidor de una aplicación.
- **Competencias:** Entorno de ejecución Node.js; servidor HTTP; Express; API REST; base de datos SQLite; autenticación y seguridad web; pruebas y despliegue.
- **Al terminar serás capaz de:** Construir una API segura con Node.js, Express y SQLite.
- **Necesitas antes:** Módulos 4 y 5.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Node.js (versiones LTS), Express, guías de OWASP (Cheat Sheet Series).

| Clase | Tema | Videos | Estado |
|---|---|---|---|
| M6·1 | Node.js: el entorno de ejecución y sus módulos | [▶ 1](https://www.youtube.com/watch?v=0f26_Enlv38&t=379s) | Próximamente |
| M6·2 | Servidor HTTP y conceptos de backend | [▶ 1](https://www.youtube.com/watch?v=tDF644vI-gs&t=258s) | Próximamente |
| M6·3 | Express: rutas y middleware | [▶ 1](https://www.youtube.com/watch?v=tDF644vI-gs&t=6502s) | Próximamente |
| M6·4 | API REST completa (crear, leer, actualizar y borrar) | [▶ 1](https://www.youtube.com/watch?v=tDF644vI-gs&t=1272s) [▶ 2](https://www.youtube.com/watch?v=tDF644vI-gs&t=19381s) | Próximamente |
| M6·5 | Bases de datos con SQLite | [▶ 1](https://www.youtube.com/watch?v=6ZkFco3sTUk&t=60s) | Próximamente |
| M6·6 | Autenticación y seguridad web (OWASP) | [▶ 1](https://www.youtube.com/watch?v=UqnnhAZxRac) [▶ 2](https://www.youtube.com/watch?v=jVLcvLB4IJs) | Próximamente |
| M6·7 | Pruebas de la API y despliegue | [▶ 1](https://www.youtube.com/watch?v=tDF644vI-gs&t=22979s) | Próximamente |

#### Recursos audiovisuales del módulo

| Clase | Video | Canal · duración · idioma | Desde | Ayuda a comprender | Contraste documental |
|---|---|---|---|---|---|
| M6·1 | [Curso Fundamentos de Node.js - jonmircha](https://www.youtube.com/watch?v=0f26_Enlv38&t=379s) | jonmircha · 7:59:01 · español | 6:19 | qué es Node.js, su bucle de eventos y sus módulos (capítulos 2 a 16) | [Node.js: Introduction to Node.js](https://nodejs.org/learn/getting-started/introduction-to-nodejs) |
| M6·2 | [Curso Desarrollo Web con Node.js y Express.js - jonmircha](https://www.youtube.com/watch?v=tDF644vI-gs&t=258s) | jonmircha · 8:01:45 · español | 4:18 | modelo cliente-servidor y crear un servidor HTTP con Node.js (capítulos 2 y 8) | [Node.js: módulo http](https://nodejs.org/api/http.html); [MDN: Generalidades del protocolo HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Guides/Overview) |
| M6·3 | [Curso Desarrollo Web con Node.js y Express.js - jonmircha](https://www.youtube.com/watch?v=tDF644vI-gs&t=6502s) | jonmircha · 8:01:45 · español | 1:48:22 | Express: rutas, objeto request y response (capítulos 12 a 17) | [Express: Direccionamiento (routing)](https://expressjs.com/es/guide/routing/) |
| M6·4 | [Curso Desarrollo Web con Node.js y Express.js - jonmircha](https://www.youtube.com/watch?v=tDF644vI-gs&t=1272s) | jonmircha · 8:01:45 · español | 21:12 | qué es una API REST y los códigos de estado HTTP (capítulos 4 y 5) | [MDN: Métodos de petición HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Reference/Methods) |
| M6·4 | [Curso Desarrollo Web con Node.js y Express.js - jonmircha](https://www.youtube.com/watch?v=tDF644vI-gs&t=19381s) | jonmircha · 8:01:45 · español | 5:23:01 | construir una API REST completa con Express (capítulos 35 a 41) | [MDN: Métodos de petición HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Reference/Methods); [Express: Direccionamiento (routing)](https://expressjs.com/es/guide/routing/) |
| M6·5 | [Aprende a crear un CRUD completo con Node.js, Express y SQLite](https://www.youtube.com/watch?v=6ZkFco3sTUk&t=60s) | JePaFe Dev · 51:32 · español | 1:00 | CRUD completo con Node.js, Express y SQLite | [Node.js: módulo sqlite](https://nodejs.org/api/sqlite.html) |
| M6·6 | [Aprende Autenticación de Usuario, Sesión, Cookies y JWT con Node.js](https://www.youtube.com/watch?v=UqnnhAZxRac) | midulive · 1:40:59 · español | inicio | autenticación con sesiones, cookies y JWT, y guardar contraseñas con hash | [OWASP Cheat Sheet: Password Storage](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) |
| M6·6 | [Curso de SEGURIDAD en Programación - OWASP Top 10 - Aprende A PROTEGER Tus Aplicaciones](https://www.youtube.com/watch?v=jVLcvLB4IJs) | The Coder Cave \| Programación y Tecnología · 20:40 · español | inicio | qué es el OWASP Top 10 y cómo proteger una aplicación de los riesgos más comunes | [OWASP Top 10](https://top10.owasp.org/) |
| M6·7 | [Curso Desarrollo Web con Node.js y Express.js - jonmircha](https://www.youtube.com/watch?v=tDF644vI-gs&t=22979s) | jonmircha · 8:01:45 · español | 6:22:59 | probar los endpoints de la API con un cliente REST (capítulo 41) | [MDN: Métodos de petición HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Reference/Methods) |
| M6·7 | Pendiente | — | — | La parte de despliegue queda sin video: el que se encontró usa una plataforma (FL0) que puede ya no existir. | — |

## Módulo 7 · Proyecto final (3 clases · 6 h)

- **Objetivo:** Diseñar, construir y presentar una aplicación completa.
- **Al terminar serás capaz de:** Entregar una aplicación web completa.
- **Necesitas antes:** La propuesta no fija previos; conviene haber terminado los módulos anteriores.
- **Proyecto:** Proyecto final del curso (ver más arriba).

| Clase | Tema | Videos | Estado |
|---|---|---|---|
| M7·1 | Diseño del proyecto | — | Próximamente |
| M7·2 | Construcción guiada | — | Próximamente |
| M7·3 | Presentación y revisión | — | Próximamente |

#### Recursos audiovisuales del módulo

| Clase | Video | Canal · duración · idioma | Desde | Ayuda a comprender | Contraste documental |
|---|---|---|---|---|---|
| M7·1 | Pendiente | — | — | Proyecto final: es trabajo aplicado; no se encontró un video que aporte más que los de los módulos anteriores. | — |
| M7·2 | Pendiente | — | — | Proyecto final: se apoya en los videos de los módulos 1 a 6. | — |
| M7·3 | Pendiente | — | — | Proyecto final: presentación y revisión; no requiere un video. | — |

<!-- FIN: generado desde recursos/catalogo.js -->

## Contenidos que se comparten con Python (sin duplicarlos)

- **Git y GitHub** (Módulo 5 · Clase 2 aquí y Python Módulo 5 · Clase 1): una sola explicación
  conceptual con práctica en los dos lenguajes. Si ya la hiciste en un curso, en el otro es un
  repaso.
- **SQL básico** (Módulo 6 · Clase 5 aquí y Python Módulo 6 · Clase 1): los mismos conceptos;
  cambia la práctica según el lenguaje.
- **HTTP** (Módulo 4 · Clase 2 aquí, Ciberseguridad Módulo 3 · Clase 2 y Python Módulo 7 ·
  Clase 1): cada curso lo ve desde su perspectiva y enlaza a los otros.
- **Seguridad web** (Módulo 6 · Clase 6 aquí) se enlaza con Ciberseguridad, Módulo 5.

## Ideas para después del curso (no forman parte del plan aprobado)

- TypeScript · React · Trabajo en equipo con Git · Portafolio y entrevistas de desarrollador.
