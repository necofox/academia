# Ruta de aprendizaje: Python, desarrollo de software desde cero

Cada clase dura **2 horas**. Practicas en tu PC con Python y VS Code; la página trae un simulador
del modo interactivo solo para los ejemplos. El curso se organiza por **módulos**, aprobados en
`PROPUESTA-ORGANIZACION-CURRICULAR.md`.

- **Clases existentes:** conservan su número de archivo y su `id` (`clase-04` es `py-04`).
- **Clases nuevas:** usan el siguiente número de archivo libre (`clase-05`, `clase-06`…) y
  ocupan el lugar que les toca dentro de su módulo.
- **Versiones:** cada clase debe comprobar en python.org la versión vigente de Python antes de
  mencionarla.

<!-- INICIO: generado desde recursos/catalogo.js con "node herramientas/generar-rutas.js". No editar a mano. -->

## Meta del curso

Desarrollar programas y aplicaciones con buenas prácticas profesionales. La secuencia sigue el orden del tutorial oficial de Python: estructuras de datos, luego errores y excepciones, luego clases y, al final, entornos virtuales.

- **Duración:** 9 módulos · 38 clases · 76 h de clase (2 h por clase). La práctica autónoma de cada clase se suma aparte.
- **Electiva opcional:** Python aplicado a la ciberseguridad (3 clases · 6 h).
- **Clases listas:** 4 de 38.
- **Siguiente clase por crear:** Módulo 1 · Clase 5: Bucles for y while.
- **Proyecto final del curso:** Aplicación con API, base de datos y automatización. Por ejemplo, un sistema de inventario con reportes automáticos.

## Resumen de módulos

| Módulo | Clases | Horas | Listas | Necesitas antes |
|---|---|---|---|---|
| Módulo 1 · Fundamentos | 7 | 14 | 4 | — |
| Módulo 2 · Estructuras de datos | 4 | 8 | 0 | Módulo 1 |
| Módulo 3 · Archivos, módulos y entorno | 4 | 8 | 0 | Módulo 2 |
| Módulo 4 · Programación orientada a objetos | 4 | 8 | 0 | Módulo 3 |
| Módulo 5 · Calidad de software | 4 | 8 | 0 | Módulo 4 |
| Módulo 6 · Datos y bases de datos | 3 | 6 | 0 | Módulo 3 |
| Módulo 7 · Internet y automatización | 4 | 8 | 0 | Módulos 3 y 6 |
| Módulo 8 · Desarrollo de aplicaciones | 5 | 10 | 0 | Módulos 5, 6 y 7 |
| Módulo 9 · Proyecto final | 3 | 6 | 0 | Ninguno obligatorio |
| Electiva (opcional) · Python aplicado a la ciberseguridad | 3 | 6 | 0 | Módulo 7 |
| **Total (sin la electiva)** | **38** | **76** | **4** | |

## Módulo 1 · Fundamentos (7 clases · 14 h)

- **Objetivo:** Escribir y ejecutar programas con lógica básica.
- **Competencias:** Entorno de trabajo (terminal y VS Code), variables y tipos, entrada de datos, operadores, f-strings, condicionales, bucles, funciones y excepciones.
- **Al terminar serás capaz de:** Escribir programas con lógica, funciones y manejo de errores.
- **Necesitas antes:** Ninguno.
- **Proyecto:** Menú de consola (última clase del módulo).
- **Fuentes previstas** (se verifican al crear cada clase): Tutorial oficial de Python (en español), PEP 8.

| Clase | Tema | Estado |
|---|---|---|
| M1·1 | ¿Qué es Python? Instalación y tu primer programa | ✔ Lista: `clases/clase-01.html` (id `py-01`) |
| M1·2 | Variables, tipos de datos e input() | ✔ Lista: `clases/clase-02.html` (id `py-02`) |
| M1·3 | Operadores, textos y f-strings | ✔ Lista: `clases/clase-03.html` (id `py-03`) |
| M1·4 | Condicionales: if, elif y else | ✔ Lista: `clases/clase-04.html` (id `py-04`) |
| M1·5 | Bucles for y while | Próximamente · **siguiente por crear** |
| M1·6 | Funciones | Próximamente |
| M1·7 | Errores y excepciones (try/except) y proyecto: menú de consola | Próximamente |

## Módulo 2 · Estructuras de datos (4 clases · 8 h)

- **Objetivo:** Elegir la estructura adecuada para cada problema.
- **Al terminar serás capaz de:** Elegir y usar las estructuras de datos adecuadas.
- **Necesitas antes:** Módulo 1.
- **Proyecto:** Agenda de contactos (última clase del módulo).

| Clase | Tema | Estado |
|---|---|---|
| M2·1 | Listas y tuplas | Próximamente |
| M2·2 | Diccionarios y conjuntos | Próximamente |
| M2·3 | Cadenas a fondo y comprensiones de listas | Próximamente |
| M2·4 | Proyecto: agenda de contactos | Próximamente |

## Módulo 3 · Archivos, módulos y entorno (4 clases · 8 h)

- **Objetivo:** Guardar datos y organizar proyectos.
- **Al terminar serás capaz de:** Trabajar con archivos y entornos virtuales.
- **Necesitas antes:** Módulo 2.
- **Proyecto:** Gestor de gastos (última clase del módulo).
- **Fuentes previstas** (se verifican al crear cada clase): Documentación oficial de venv y guía de empaquetado de Python.

| Clase | Tema | Estado |
|---|---|---|
| M3·1 | Archivos de texto, CSV y JSON | Próximamente |
| M3·2 | Módulos y biblioteca estándar (pathlib, datetime) | Próximamente |
| M3·3 | pip, entornos virtuales y paquetes | Próximamente |
| M3·4 | Proyecto: gestor de gastos | Próximamente |

## Módulo 4 · Programación orientada a objetos (4 clases · 8 h)

- **Objetivo:** Modelar problemas reales con objetos.
- **Al terminar serás capaz de:** Diseñar programas orientados a objetos.
- **Necesitas antes:** Módulo 3.
- **Proyecto:** Sistema de inventario (última clase del módulo).

| Clase | Tema | Estado |
|---|---|---|
| M4·1 | Clases y objetos | Próximamente |
| M4·2 | Herencia y composición | Próximamente |
| M4·3 | Dataclasses y anotaciones de tipo | Próximamente |
| M4·4 | Proyecto: sistema de inventario | Próximamente |

## Módulo 5 · Calidad de software (4 clases · 8 h)

- **Objetivo:** Código mantenible y probado.
- **Al terminar serás capaz de:** Versionar, probar y mantener tu código.
- **Necesitas antes:** Módulo 4.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de pytest, PEP 8, libro Pro Git.

| Clase | Tema | Estado |
|---|---|---|
| M5·1 | Git y GitHub | Próximamente |
| M5·2 | Pruebas con pytest | Próximamente |
| M5·3 | Estilo, calidad y registros (PEP 8, linters y logging) | Próximamente |
| M5·4 | Depuración profesional | Próximamente |

## Módulo 6 · Datos y bases de datos (3 clases · 6 h)

- **Objetivo:** Guardar y consultar datos.
- **Al terminar serás capaz de:** Guardar y consultar datos con SQL.
- **Necesitas antes:** Módulo 3.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación oficial de sqlite3.

| Clase | Tema | Estado |
|---|---|---|
| M6·1 | SQL básico con SQLite | Próximamente |
| M6·2 | El módulo sqlite3 en Python | Próximamente |
| M6·3 | Expresiones regulares | Próximamente |

## Módulo 7 · Internet y automatización (4 clases · 8 h)

- **Objetivo:** Automatizar tareas reales.
- **Al terminar serás capaz de:** Automatizar tareas y usar APIs.
- **Necesitas antes:** Módulos 3 y 6.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Requests.

| Clase | Tema | Estado |
|---|---|---|
| M7·1 | HTTP y APIs con requests | Próximamente |
| M7·2 | Automatizar archivos y carpetas | Próximamente |
| M7·3 | Scripts de línea de comandos (argparse) y tareas programadas | Próximamente |
| M7·4 | Reportes en Excel | Próximamente |

## Módulo 8 · Desarrollo de aplicaciones (5 clases · 10 h)

- **Objetivo:** Construir y publicar una aplicación.
- **Al terminar serás capaz de:** Construir y publicar una aplicación.
- **Necesitas antes:** Módulos 5, 6 y 7.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de FastAPI, guías de OWASP.

| Clase | Tema | Estado |
|---|---|---|
| M8·1 | APIs con FastAPI | Próximamente |
| M8·2 | API con base de datos | Próximamente |
| M8·3 | Seguridad de aplicaciones: contraseñas con hash, validación y secretos | Próximamente |
| M8·4 | Interfaz web sencilla | Próximamente |
| M8·5 | Despliegue | Próximamente |

## Módulo 9 · Proyecto final (3 clases · 6 h)

- **Objetivo:** Diseñar, construir y presentar una aplicación completa.
- **Al terminar serás capaz de:** Entregar un proyecto completo.
- **Necesitas antes:** La propuesta no fija previos; conviene haber terminado los módulos anteriores.
- **Proyecto:** Proyecto final del curso (ver más arriba).

| Clase | Tema | Estado |
|---|---|---|
| M9·1 | Diseño del proyecto | Próximamente |
| M9·2 | Construcción guiada | Próximamente |
| M9·3 | Presentación y revisión | Próximamente |

## Electiva (opcional) · Python aplicado a la ciberseguridad (3 clases · 6 h)

- **Objetivo:** Usar Python en tareas de un analista de seguridad (opcional).
- **Necesitas antes:** Módulo 7. Se recomienda, sin ser obligatorio, el Módulo 6 de Ciberseguridad.

| Clase | Tema | Estado |
|---|---|---|
| E·1 | Analizar registros de autenticación | Próximamente |
| E·2 | Hashes e integridad de archivos | Próximamente |
| E·3 | Automatizar consultas de indicadores de compromiso | Próximamente |

<!-- FIN: generado desde recursos/catalogo.js -->

## Contenidos que se comparten con JavaScript (sin duplicarlos)

- **Git y GitHub** (Módulo 5 · Clase 1 aquí y JavaScript Módulo 5 · Clase 2): una sola
  explicación conceptual con práctica en los dos lenguajes.
- **SQL básico** (Módulo 6 · Clase 1 aquí y JavaScript Módulo 6 · Clase 5): los mismos
  conceptos; cambia la práctica según el lenguaje.
- **HTTP** (Módulo 7 · Clase 1 aquí, JavaScript Módulo 4 · Clase 2 y Ciberseguridad Módulo 3 ·
  Clase 2): cada curso lo ve desde su perspectiva y enlaza a los otros.
- **Proyecto opcional entre cursos:** un script de la electiva analiza registros y genera un
  JSON, y un panel en JavaScript lo muestra con gráficos.

## Ideas para después del curso (no forman parte del plan aprobado)

- Análisis de datos (pandas) · Automatización avanzada · Portafolio y entrevistas de
  desarrollador.
