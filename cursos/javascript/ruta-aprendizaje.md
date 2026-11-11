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

| Clase | Tema | Estado |
|---|---|---|
| M1·1 | ¿Qué es programar? Tu primer código en JavaScript | ✔ Lista: `clases/clase-01.html` (id `js-01`) |
| M1·2 | Variables y tipos de datos | ✔ Lista: `clases/clase-02.html` (id `js-02`) |
| M1·3 | Operadores y textos | ✔ Lista: `clases/clase-03.html` (id `js-03`) |
| M1·4 | Condicionales: tu programa toma decisiones | ✔ Lista: `clases/clase-04.html` (id `js-04`) |
| M1·5 | Bucles: for, while y for...of | Próximamente · **siguiente por crear** |
| M1·6 | Funciones, parámetros y valores de retorno | Próximamente |
| M1·7 | Arrays y sus métodos (map, filter, find) | Próximamente |
| M1·8 | Objetos y JSON | Próximamente |
| M1·9 | Depuración, manejo de errores (try/catch) y proyecto: adivina el número | Próximamente |

## Módulo 2 · HTML y CSS para programadores (4 clases · 8 h)

- **Objetivo:** Construir la estructura y el diseño que JavaScript va a manejar.
- **Competencias:** HTML semántico y formularios; selectores, cascada y modelo de caja; Flexbox, Grid y diseño adaptable; accesibilidad básica.
- **Al terminar serás capaz de:** Maquetar páginas semánticas, adaptables y accesibles.
- **Necesitas antes:** Ninguno obligatorio; conviene haber hecho el Módulo 1.
- **Proyecto:** Una página personal adaptable al celular.
- **Fuentes previstas** (se verifican al crear cada clase): Ruta de aprendizaje web de MDN, WCAG 2 (W3C).

| Clase | Tema | Estado |
|---|---|---|
| M2·1 | HTML semántico y formularios | Próximamente |
| M2·2 | CSS: selectores, cascada y modelo de caja | Próximamente |
| M2·3 | Flexbox, Grid y diseño adaptable | Próximamente |
| M2·4 | Accesibilidad web (WCAG) básica | Próximamente |

## Módulo 3 · JavaScript en el navegador (6 clases · 12 h)

- **Objetivo:** Crear páginas interactivas.
- **Competencias:** Manejar el DOM y los eventos, validar formularios, guardar datos en el navegador y organizar el código en módulos.
- **Al terminar serás capaz de:** Crear aplicaciones interactivas en el navegador.
- **Necesitas antes:** Módulos 1 y 2.
- **Proyecto:** App de tareas (última clase del módulo).
- **Fuentes previstas** (se verifican al crear cada clase): MDN.

| Clase | Tema | Estado |
|---|---|---|
| M3·1 | El DOM | Próximamente |
| M3·2 | Eventos | Próximamente |
| M3·3 | Formularios y validación | Próximamente |
| M3·4 | localStorage y JSON | Próximamente |
| M3·5 | Módulos de JavaScript (ES) | Próximamente |
| M3·6 | Proyecto: app de tareas | Próximamente |

## Módulo 4 · Asincronía y APIs (4 clases · 8 h)

- **Objetivo:** Comunicarse con servidores y servicios externos.
- **Competencias:** Promesas y async/await; HTTP, REST y fetch; manejar errores y estados de carga.
- **Al terminar serás capaz de:** Consumir APIs de forma asíncrona.
- **Necesitas antes:** Módulo 3.
- **Proyecto:** App con una API pública (última clase del módulo).
- **Fuentes previstas** (se verifican al crear cada clase): MDN, RFC 9110 (HTTP).

| Clase | Tema | Estado |
|---|---|---|
| M4·1 | Asincronía: callbacks, promesas y async/await | Próximamente |
| M4·2 | HTTP, REST y fetch | Próximamente |
| M4·3 | Errores de red y estados de carga | Próximamente |
| M4·4 | Proyecto: app con una API pública | Próximamente |

## Módulo 5 · Herramientas del desarrollador (4 clases · 8 h)

- **Objetivo:** Trabajar con las herramientas de un equipo profesional.
- **Competencias:** Terminal y estructura de proyectos; Git y GitHub; npm y herramientas de calidad de código; pruebas automáticas.
- **Al terminar serás capaz de:** Trabajar con Git, npm y pruebas automáticas.
- **Necesitas antes:** Módulo 1. Se recomienda haber hecho el Módulo 3.
- **Fuentes previstas** (se verifican al crear cada clase): Libro Pro Git (en español), documentación de Node.js.

| Clase | Tema | Estado |
|---|---|---|
| M5·1 | Terminal y estructura de un proyecto | Próximamente |
| M5·2 | Git y GitHub | Próximamente |
| M5·3 | npm y calidad de código (ESLint, Prettier) | Próximamente |
| M5·4 | Pruebas automáticas (la herramienta se decide al investigar la clase) | Próximamente |

## Módulo 6 · Node.js y backend (7 clases · 14 h)

- **Objetivo:** Construir el servidor de una aplicación.
- **Competencias:** Entorno de ejecución Node.js; servidor HTTP; Express; API REST; base de datos SQLite; autenticación y seguridad web; pruebas y despliegue.
- **Al terminar serás capaz de:** Construir una API segura con Node.js, Express y SQLite.
- **Necesitas antes:** Módulos 4 y 5.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Node.js (versiones LTS), Express, guías de OWASP (Cheat Sheet Series).

| Clase | Tema | Estado |
|---|---|---|
| M6·1 | Node.js: el entorno de ejecución y sus módulos | Próximamente |
| M6·2 | Servidor HTTP y conceptos de backend | Próximamente |
| M6·3 | Express: rutas y middleware | Próximamente |
| M6·4 | API REST completa (crear, leer, actualizar y borrar) | Próximamente |
| M6·5 | Bases de datos con SQLite | Próximamente |
| M6·6 | Autenticación y seguridad web (OWASP) | Próximamente |
| M6·7 | Pruebas de la API y despliegue | Próximamente |

## Módulo 7 · Proyecto final (3 clases · 6 h)

- **Objetivo:** Diseñar, construir y presentar una aplicación completa.
- **Al terminar serás capaz de:** Entregar una aplicación web completa.
- **Necesitas antes:** La propuesta no fija previos; conviene haber terminado los módulos anteriores.
- **Proyecto:** Proyecto final del curso (ver más arriba).

| Clase | Tema | Estado |
|---|---|---|
| M7·1 | Diseño del proyecto | Próximamente |
| M7·2 | Construcción guiada | Próximamente |
| M7·3 | Presentación y revisión | Próximamente |

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
