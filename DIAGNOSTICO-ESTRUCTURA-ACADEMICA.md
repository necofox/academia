# Estructura académica definitiva y diagnóstico (antes del Lote 2)

> **Versión 2 · 12/11/2026.** Consolida la revisión anterior (la versión 1 está en el historial: commit `d111a0d`).
> **No se modificó la plataforma real:** menú, catálogo, motor, rutas, sincronización, IA 01, IA 02 y los demás
> cursos siguen idénticos. No se migró, borró ni publicó nada.
> **Borrador definitivo:** `propuestas/ia-3-cursos.borrador.js` (archivo nuevo). El borrador de 6 cursos se
> conserva sin cambios como historial.
> **Vista previa aislada:** `propuestas/vista-previa-3-cursos.html` (con el servidor de pruebas:
> `http://127.0.0.1:8765/propuestas/vista-previa-3-cursos.html`).

---

## Resumen

| | Redes y Telecomunicaciones | Inteligencia Artificial: Claude | Prompt Engineering | **Total** |
|---|---|---|---|---|
| Módulos | 11 | 21 (en 5 bloques) | 6 | **38** |
| Clases planificadas | 51 | 71 | 32 | **154** |
| Clases creadas | 3 | 2 (IA 01 e IA 02) | 0 | **5** |
| Clases pendientes | 48 | 69 | 32 | **149** |
| Horas de clase por crear | 96 h | 138 h | 64 h | **298 h** |
| Clases con video verificado | 39 | 29 | 10 | **78** |
| Clases con búsqueda de video pendiente | 12 | 42 | 22 | **76** |

- **Avance real del objetivo:** 5 de 154 clases (**3 %**). En toda la academia: 22 de 310 (7 %).
- **Ninguna clase original desapareció.** Las 55 clases del curso de IA actual están todas: 32 en Prompt
  Engineering, idénticas, y 23 en IA: Claude. También están las 71 clases de IA del borrador anterior.
  Comprobado con un script (sección 7).
- **Recuperadas las 32 clases de Prompt Engineering**, con sus títulos, referencias y videos: diseño de
  páginas web, automatización de tareas, oportunidades laborales, negocios y productividad, verificación con
  fuentes, biblioteca de prompts y las 4 clases del proyecto.

---

## 1. Los tres cursos

### Curso 1 · Redes y Telecomunicaciones (sin cambios)

11 módulos y 51 clases, tal como están en el menú real. Creadas: Redes 01, 02 y 03. El borrador no lo toca.

### Curso 2 · Inteligencia Artificial: Claude (id `ia`, el mismo de hoy)

Un solo curso que reúne todo el ecosistema de Claude. Sus **21 módulos** se agrupan en **5 bloques** con una
progresión lineal: primero se **usa** Claude; después se **trabaja** con Claude Code; luego se **amplían** sus
capacidades; con esas piezas se **construyen** agentes, y al final se **automatiza** y se integra todo en el
proyecto.

| Bloque | Módulos | Clases | Para qué sirve en la progresión | Pieza del proyecto de cinco agentes |
|---|---|---|---|---|
| 1 · Fundamentos | M1–M4 | 13 | Usar Claude bien: qué es, planes, primeros pasos, proyectos, archivos, estudiar e investigar, uso responsable | — |
| 2 · Claude Code | M5–M9 | 17 | Trabajar en proyectos reales con supervisión: instalación, modo plan, Git, contexto, CLAUDE.md, **permisos y hooks** | La aplicación base |
| 3 · Herramientas, Skills y MCP | M10–M13 | 14 | Ampliar lo que Claude puede hacer: **herramientas, skills, MCP** y plugins | El kit: dos skills y una conexión MCP |
| 4 · Agentes | M14–M17 | 13 | Construir y coordinar **agentes y subagentes** con supervisión humana | Investigador, analista y revisor |
| 5 · Automatización | M18–M21 | 14 | **Automatizar** con controles (permisos y hooks) e integrar el equipo | Equipo completo: suma coordinador y programador |

- **Hooks y permisos:** se aprenden en el Módulo 8 (Claude Code) y se aplican como controles de seguridad en el
  Módulo 19 (Automatización).
- **IA 01 e IA 02** siguen siendo Módulo 1 · Clase 1 y Clase 2, con su mismo `id` y archivo. Sus páginas dicen
  «Módulo 1 · Fundamentos de la IA generativa y de Claude (clase N de 4)», y eso sigue siendo correcto.
- **Cada bloque tiene su evaluación:** M4·2, M9·2, M13·2, M17·2 y la evaluación final en M21·4.

### Curso 3 · Prompt Engineering (id `prompt`, curso independiente)

Las **32 clases de prompting** del catálogo real, en **6 módulos** (seis niveles), con sus títulos, objetivos,
competencias, prácticas, evaluaciones, referencias al tutorial oficial de Anthropic y videos. Solo se
renumeraron los requisitos previos y se reescribieron dos notas que citaban números de módulo del curso
anterior.

| Módulo | Clases | Viene del curso real |
|---|---|---|
| M1 Prompting · Nivel 1: Fundamentos | 4 | Módulo 2 |
| M2 Prompting · Nivel 2: Técnicas fundamentales | 5 | Módulo 3 |
| M3 Prompting · Nivel 3: Prompting estructurado | 6 | Módulo 5 |
| M4 Prompting · Nivel 4: Avanzado | 6 | Módulo 6 |
| M5 Prompting · Nivel 5: Aplicaciones profesionales | 7 | Módulo 8 |
| M6 Proyecto integrador: biblioteca profesional de prompts | 4 | Módulo 11 |

**El menú resultante tendrá 7 cursos:** Ciberseguridad, Inglés, JavaScript, Python, Redes y Telecomunicaciones,
Inteligencia Artificial: Claude y Prompt Engineering.

---

## 2. Distribución completa de las clases

Columna «Cuenta de Claude»: versión corta de la etiqueta. El texto completo de cada etiqueta está en la
sección 4.

### Inteligencia Artificial: Claude (21 módulos · 71 clases)

#### Bloque: Fundamentos

**M1 · Fundamentos de la IA generativa y de Claude** (4 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M1·1 (IA 01, creada) | ¿Qué es la IA generativa? Modelos de lenguaje, capacidades y límites | Gratis | ✔ 1 |
| M1·2 (IA 02, creada) | Claude y Claude Code: planes, apps, modelos y límites de uso | Gratis | ✔ 2 |
| M1·3 | Primeros pasos: conversaciones, archivos, búsqueda web y estilos | Gratis | pendiente |
| M1·4 | Claude frente a otras herramientas de IA: criterios para elegir | Gratis | pendiente |

**M2 · Fundamentos · Trabajar con Claude día a día** (3 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M2·1 | Proyectos: instrucciones y conocimiento permanentes | Gratis (hasta 5 proyectos) | pendiente |
| M2·2 | Archivos y documentos: PDF, hojas de cálculo e imágenes | Gratis (con límites de uso) | pendiente |
| M2·3 | Artefactos y ejecución de código | Gratis (hay que activar la ejecución de código) | pendiente |

**M3 · Fundamentos · Claude para estudiar, investigar y producir** (4 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M3·1 | Estudiar con Claude: explicaciones, resúmenes y autoevaluación | Gratis | pendiente |
| M3·2 | Investigar y verificar fuentes | Gratis con búsqueda web; Research requiere Claude Pro (opcional) | pendiente |
| M3·3 | Redactar y revisar textos manteniendo tu voz | Gratis | pendiente |
| M3·4 | Resolver problemas y comprobar el razonamiento | Gratis | pendiente |

**M4 · Fundamentos · Uso responsable y funciones avanzadas** (2 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M4·1 | Fluidez en IA y uso responsable: el marco 4D, privacidad, verificación y política de uso | Gratis | ✔ 2 |
| M4·2 | Memoria, conectores, Claude in Chrome y Cowork: cuándo valen la pena (evaluación del bloque) | Gratis con límites; Claude in Chrome y Cowork requieren Claude Pro | pendiente |


#### Bloque: Claude Code

**M5 · Claude Code · Primeros pasos** (4 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M5·1 | Qué es Claude Code; Chat, Code y Cowork | Gratis | ✔ 2 |
| M5·2 | Terminal y comandos básicos (nivelación) | No necesita Claude | ✔ 1 |
| M5·3 | Instalación, autenticación e interfaz | Pro recomendado · alternativa: demostración | ✔ 2 |
| M5·4 | Acciones, modos, comandos básicos y modelos | Pro recomendado · alternativa: demostración | ✔ 2 |

**M6 · Claude Code · Trabajar con proyectos** (4 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M6·1 | Crear un proyecto; leer y modificar archivos | Pro recomendado · alternativa: demostración | ✔ 1 |
| M6·2 | Modo plan: planificar, revisar y aprobar | Pro recomendado · alternativa: demostración | ✔ 2 |
| M6·3 | Checkpoints, Git y control de cambios | Pro recomendado · alternativa: demostración | ✔ 1 |
| M6·4 | Desarrollo, depuración y pruebas | Pro recomendado · alternativa: demostración | pendiente |

**M7 · Claude Code · Contexto y memoria** (3 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M7·1 | Contexto, memoria de trabajo y context engineering | Gratis (concepto) · Pro recomendado (práctica) | ✔ 1 |
| M7·2 | CLAUDE.md y referencias a archivos | Pro recomendado · alternativa: demostración | ✔ 1 |
| M7·3 | Reglas de proyecto y Auto Memory | Pro recomendado · alternativa: demostración | ✔ 1 |

**M8 · Claude Code · Herramientas, permisos y hooks** (4 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M8·1 | Observar y aprobar las herramientas mientras trabajas | Pro recomendado · alternativa: demostración | pendiente |
| M8·2 | Permisos y aprobaciones | Pro recomendado · alternativa: demostración | ✔ 2 |
| M8·3 | Hooks y controles de ejecución | Pro recomendado · alternativa: demostración | ✔ 1 |
| M8·4 | Usar, configurar y ejecutar skills y comandos | Pro recomendado · alternativa: demostración | ✔ 1 |

**M9 · Claude Code · Buenas prácticas y aplicación base** (2 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M9·1 | Buenas prácticas y seguridad | Pro recomendado · alternativa: demostración | ✔ 1 |
| M9·2 | Proyecto: la aplicación base del equipo (evaluación del bloque) | Pro recomendado · alternativa: demostración | pendiente |


#### Bloque: Herramientas, Skills y MCP

**M10 · Herramientas, Skills y MCP · Herramientas** (3 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M10·1 | Qué es una herramienta y cómo la usa Claude | Gratis | pendiente |
| M10·2 | Herramientas integradas del chat | Gratis | pendiente |
| M10·3 | Integradas, externas y cómo restringirlas | Gratis (diseño) · Pro recomendado (práctica) | pendiente |

**M11 · Herramientas, Skills y MCP · Skills** (4 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M11·1 | Qué es una skill; skill, herramienta y agente | Gratis (hay que activar la ejecución de código) | ✔ 1 |
| M11·2 | Estructura de una skill: SKILL.md y archivos de apoyo | Gratis (hay que activar la ejecución de código) | pendiente |
| M11·3 | Crear y probar skills en el chat | Gratis (hay que activar la ejecución de código) | pendiente |
| M11·4 | Diseñar skills especializadas y reutilizables | Pro recomendado · alternativa: demostración | ✔ 1 |

**M12 · Herramientas, Skills y MCP · MCP (Model Context Protocol)** (5 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M12·1 | Qué es MCP y qué problema resuelve | Gratis | ✔ 1 |
| M12·2 | Arquitectura de MCP: host, cliente, servidor y primitivas | Gratis | pendiente |
| M12·3 | Conectores en Claude: un servidor MCP remoto | Gratis (1 conector personalizado) | ✔ 1 |
| M12·4 | MCP en Claude Code: claude mcp add y ámbitos | Pro recomendado · alternativa: demostración | ✔ 1 |
| M12·5 | Seguridad y permisos en MCP | Gratis (diseño) · Pro recomendado (práctica) | pendiente |

**M13 · Herramientas, Skills y MCP · Plugins y kit del equipo** (2 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M13·1 | Plugins: skills, MCP, hooks y subagentes en un paquete | Pro recomendado · alternativa: demostración | ✔ 1 |
| M13·2 | Proyecto: el kit del equipo (evaluación del bloque) | Gratis (diseño) · Pro recomendado (práctica) | pendiente |


#### Bloque: Agentes

**M14 · Agentes · Qué es un agente** (4 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M14·1 | Agente, chatbot y flujo de trabajo | Gratis | ✔ 2 |
| M14·2 | Arquitectura de un agente | Gratis | ✔ 1 |
| M14·3 | Planificación y ejecución de tareas | Pro recomendado · alternativa: demostración | pendiente |
| M14·4 | Riesgos y límites de los agentes | Gratis | pendiente |

**M15 · Agentes · Subagentes** (4 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M15·1 | Qué son los subagentes | Pro recomendado · alternativa: demostración | ✔ 1 |
| M15·2 | Crear subagentes especializados | Pro recomendado · alternativa: demostración | pendiente |
| M15·3 | Roles, responsabilidades y capacidades de cada subagente | Pro recomendado · alternativa: demostración | pendiente |
| M15·4 | Contexto y transferencia de resultados | Pro recomendado · alternativa: demostración | pendiente |

**M16 · Agentes · Coordinación** (3 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M16·1 | Delegación y patrones de trabajo | Gratis (diseño) · Pro recomendado (práctica) | ✔ 1 |
| M16·2 | Coordinación y comunicación entre agentes | Pro recomendado · alternativa: demostración | ✔ 1 |
| M16·3 | Evaluación y control de calidad de agentes | Pro recomendado · alternativa: demostración | pendiente |

**M17 · Agentes · Supervisión y tres primeros agentes** (2 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M17·1 | Supervisión humana al diseñar sistemas de agentes | Pro recomendado · alternativa: demostración | pendiente |
| M17·2 | Proyecto: investigador, analista y revisor (evaluación del bloque) | Pro recomendado · alternativa: demostración | pendiente |


#### Bloque: Automatización

**M18 · Automatización · Fundamentos** (3 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M18·1 | Qué es automatizar con IA | Gratis | pendiente |
| M18·2 | Diseñar flujos de trabajo | Gratis | pendiente |
| M18·3 | Automatizar con Claude: tareas programadas, /loop, Cowork y GitHub Actions | Pro recomendado · alternativa: demostración | ✔ 1 |

**M19 · Automatización · Control y seguridad** (3 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M19·1 | Aprobaciones en procesos desatendidos | Pro recomendado · alternativa: demostración | pendiente |
| M19·2 | Controles de una automatización: permisos, hooks y límites | Pro recomendado · alternativa: demostración | pendiente |
| M19·3 | Seguridad de las automatizaciones | Gratis | pendiente |

**M20 · Automatización · Proyecto integrador I: el equipo completo** (4 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M20·1 | Del kit y los tres agentes al equipo completo | Gratis | pendiente |
| M20·2 | El coordinador | Pro recomendado · alternativa: demostración | pendiente |
| M20·3 | El programador: implementar solo lo autorizado | Pro recomendado · alternativa: demostración | pendiente |
| M20·4 | Integrar al investigador, el analista y el revisor | Pro recomendado · alternativa: demostración | pendiente |

**M21 · Automatización · Proyecto integrador II: automatización y control** (4 clases)

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M21·1 | Validación de resultados y manejo de errores | Pro recomendado · alternativa: demostración | pendiente |
| M21·2 | Automatizar el flujo del equipo | Pro recomendado · alternativa: demostración | pendiente |
| M21·3 | Pruebas de extremo a extremo y supervisión | Pro recomendado · alternativa: demostración | pendiente |
| M21·4 | Presentación y defensa del equipo (evaluación final) | Gratis (diseño) · Pro recomendado (práctica) | pendiente |


### Prompt Engineering (6 módulos · 32 clases)

**M1 · Prompting · Nivel 1: Fundamentos** (4 clases) — viene de: IA: Claude y productividad, Módulo 2

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M1·1 | ¿Qué es un prompt? Cómo interpreta Claude lo que escribes | Gratis | ✔ 1 |
| M1·2 | Preguntas e instrucciones claras: de lo vago a lo bien definido | Gratis | ✔ 1 |
| M1·3 | Contexto, objetivo y restricciones | Gratis | ✔ 1 |
| M1·4 | Definir el resultado esperado y evitar errores frecuentes (evaluación del módulo) | Gratis | ✔ 1 |

**M2 · Prompting · Nivel 2: Técnicas fundamentales** (5 clases) — viene de: IA: Claude y productividad, Módulo 3

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M2·1 | Roles y responsabilidades: asignar un papel a Claude | Gratis | ✔ 1 |
| M2·2 | Instrucciones directas y específicas; contexto y alcance | Gratis | pendiente |
| M2·3 | Ejemplos de entrada y salida (few-shot) | Gratis | pendiente |
| M2·4 | Restricciones, criterios de aceptación y formato de la respuesta | Gratis | ✔ 1 |
| M2·5 | Separar instrucciones, datos y contenido de referencia (evaluación del módulo) | Gratis | pendiente |

**M3 · Prompting · Nivel 3: Prompting estructurado** (6 clases) — viene de: IA: Claude y productividad, Módulo 5

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M3·1 | Etiquetas XML para organizar instrucciones | Gratis | ✔ 1 |
| M3·2 | Plantillas reutilizables y prompts con varias condiciones | Gratis | pendiente |
| M3·3 | Analizar documentos extensos (PDF y Word) | Gratis (con límites de uso) | pendiente |
| M3·4 | Prompts para investigar, comparar y sintetizar | Gratis con búsqueda web; Research requiere Claude Pro (opcional) | pendiente |
| M3·5 | Prompts para informes, tablas, planes y documentación | Gratis | pendiente |
| M3·6 | Evitar ambigüedades y contradicciones (evaluación del módulo) | Gratis | pendiente |

**M4 · Prompting · Nivel 4: Avanzado** (6 clases) — viene de: IA: Claude y productividad, Módulo 6

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M4·1 | Descomponer problemas complejos y encadenar prompts | Gratis | pendiente |
| M4·2 | Razonamiento paso a paso y mejora por iteraciones | Gratis | ✔ 1 |
| M4·3 | Alucinaciones: detectarlas y reducirlas | Gratis | ✔ 1 |
| M4·4 | Verificar información y trabajar con fuentes | Gratis | pendiente |
| M4·5 | Criterios de éxito, casos de prueba y evaluación de calidad | Gratis (en el chat, con una hoja de evaluación) | ✔ 1 |
| M4·6 | Biblioteca de prompts reutilizables y control de versiones (evaluación del módulo) | Gratis | pendiente |

**M5 · Prompting · Nivel 5: Aplicaciones profesionales** (7 clases) — viene de: IA: Claude y productividad, Módulo 8

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M5·1 | Prompts para desarrollar software: HTML, CSS, JavaScript y Python | Gratis | pendiente |
| M5·2 | Prompts para analizar, revisar y corregir código | Gratis | pendiente |
| M5·3 | Prompts para diseñar páginas web: estructura, estilo y accesibilidad | Gratis | pendiente |
| M5·4 | Prompts para automatizar tareas: scripts, fórmulas y flujos | Gratis | pendiente |
| M5·5 | Investigación técnica y análisis de documentos PDF y Word | Gratis (con límites de uso) | pendiente |
| M5·6 | Informes, documentación y gestión de proyectos | Gratis | pendiente |
| M5·7 | Oportunidades laborales, negocios y productividad personal (evaluación del módulo) | Gratis | pendiente |

**M6 · Proyecto integrador: biblioteca profesional de prompts** (4 clases) — viene de: IA: Claude y productividad, Módulo 11

| Clase | Título | Cuenta de Claude | Video |
|---|---|---|---|
| M6·1 | Diseño de la biblioteca: casos de uso, plantillas y criterios de prueba | Gratis | pendiente |
| M6·2 | Construcción y pruebas: investigación, documentos, programación, revisión de código y planificación | Gratis | pendiente |
| M6·3 | Automatización, agentes y subagentes; de instrucción deficiente a profesional | Gratis (diseño) · Pro recomendado (práctica) | pendiente |
| M6·4 | Presentación y defensa: cambios justificados y resultados medidos | Gratis | pendiente |

---

## 3. Solapamientos revisados: misma área, distinto aprendizaje

No se eliminó ninguna clase. Donde dos clases tocan el mismo tema, su objetivo es distinto:

| Clase | Se relaciona con | Diferencia de objetivo |
|---|---|---|
| Prompt M5·4 «Prompts para automatizar tareas: scripts, fórmulas y flujos» | IA M18 (Automatización) | Prompt: **escribir la instrucción** para obtener un script o una fórmula. IA: **configurar Claude** para que ejecute un proceso con aprobaciones |
| Prompt M3·3 «Analizar documentos extensos» y M5·5 «Investigación técnica y análisis de documentos PDF y Word» | IA M2·2 «Archivos y documentos» | IA: usar la función de archivos. Prompt M3·3: la **técnica** para textos largos (citas, contexto). Prompt M5·5: la **aplicación profesional** con material real |
| Prompt M4·4 «Verificar información y trabajar con fuentes» | IA M3·2 «Investigar y verificar fuentes» | IA: el **hábito** de comprobar fuentes con la búsqueda web. Prompt: **diseñar instrucciones** que exijan citas y permitan responder «no sé» |
| Prompt M4·3 «Alucinaciones: detectarlas y reducirlas» | IA 01 (ya creada) | IA 01: **qué son** las alucinaciones. Prompt: **técnicas** para reducirlas |
| Prompt M6·3 «Automatización, agentes y subagentes» | IA bloques 4 y 5 | Prompt: redactar las **instrucciones** de cada agente. IA: **construir y ejecutar** los agentes |
| Prompt M2·2 «Instrucciones directas y específicas; contexto y alcance» | Prompt M1·2 y M1·3 | Nivel 1: claridad básica. Nivel 2: **delimitar el alcance** como técnica (qué entra y qué no) |
| Prompt M4·6 «Biblioteca de prompts… y control de versiones» | Prompt M6 (proyecto) | M4·6: la **primera versión** con control de versiones. M6: biblioteca **completa**, probada y defendida |
| Prompt M5·1 y M5·2 (programación) | JavaScript y Python | No se enseña a programar: se enseña a **pedir y revisar** código (nota original del módulo) |
| IA M1·3 «Primeros pasos: conversaciones, archivos…» | IA M2·2 «Archivos y documentos» | M1·3: **primer contacto** (subir un archivo). M2·2: análisis **a fondo** y sus límites |
| IA M4·2 «Memoria, conectores, Claude in Chrome y Cowork» | IA M12·3 «Conectores en Claude» | M4·2: **decidir** si conviene. M12·3: **configurarlo** con seguridad |
| IA M7·1 «Contexto… y context engineering» | Antiguo «Prompting · Nivel 6» | El nivel 6 se trasladó al bloque Claude Code, donde se practica; lo documenta la trazabilidad de la sección 7 |

---

## 4. Cuentas de Claude: avisos para los estudiantes

**La academia no exige ninguna suscripción.** Páginas, teoría, actividades, exámenes, videos y sincronización
funcionan sin Claude. Claude solo se usa para **practicar** en los dos cursos de IA. No se usa ninguna API de
pago ni servicios externos de pago.

**En la tarjeta de cada curso:**

- **Inteligencia Artificial: Claude:** «Para estudiar y hacer las prácticas compatibles basta con Claude gratis;
  Claude Pro es recomendable para las prácticas avanzadas, con alternativa por demostración.»
- **Prompt Engineering:** «Para practicar basta con Claude gratis.»

**Etiquetas por clase** (texto completo, como queda en el borrador):

| Etiqueta | Cuándo se usa |
|---|---|
| Claude gratis | La práctica se hace en el chat con la cuenta gratuita |
| Claude gratis (hasta 5 proyectos) / (con límites de uso) / (hay que activar la ejecución de código) / (1 conector personalizado) / (en el chat, con una hoja de evaluación) | Gratis, con la condición indicada |
| Claude gratis con búsqueda web; Research requiere Claude Pro (opcional) | La parte de pago es opcional |
| Claude gratis con límites; Claude in Chrome y Cowork requieren Claude Pro | Clase que compara funciones; las de pago se muestran |
| Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada | Prácticas en Claude Code |
| Claude gratis para el diseño · recomendado Claude Pro para la práctica en Claude Code | Se diseña en el chat y se ejecuta en Claude Code |
| Claude gratis (parte conceptual) · recomendado Claude Pro para la práctica en Claude Code | Teoría gratis, práctica en Claude Code |
| No necesita Claude (terminal del computador) | Nivelación de terminal |

Las etiquetas son **precisas**: dicen qué función no está en el plan gratis (Claude Code, Research, Claude in
Chrome, Cowork), según la página de planes y el centro de ayuda (verificado el 11 y 12/11/2026). No prometen
que todas las funciones estén en todos los planes.

**Única excepción:** las fichas de **IA 01 e IA 02** en el catálogo conservan su etiqueta «Gratis», porque no
se tocan. Significa lo mismo que «Claude gratis».

---

## 5. Correcciones puntuales (no aplicadas: esperan tu aprobación)

### A. IA 02: el aviso del plan

- **Dónde está:** `cursos/ia/clases/clase-02.html`, línea 139. Es la nota verde de la sección de planes.
- **Texto original completo:**
  > «**Para este curso:** los Módulos 1 a 8 se hacen con el plan gratuito. Solo los Módulos 9 y 10, de Claude
  > Code, necesitan un plan de pago. Y siempre hay una alternativa gratuita: diseñar y probar la instrucción en
  > el chat.»
- **Texto corregido completo:**
  > «**Para este curso:** con el plan gratuito puedes estudiar todo y hacer las prácticas compatibles. Para las
  > prácticas de Claude Code, agentes y automatización se recomienda Claude Pro. Y siempre hay una alternativa
  > gratuita: diseñar y probar la instrucción en el chat.»
- **Por qué hay que corregirlo:**
  1. Cita los «Módulos 1 a 8» y «9 y 10» del curso antiguo de 11 módulos. En la estructura definitiva, Claude
     Code son los Módulos 5 a 9, y los módulos de prompting pasan a otro curso: los números serían falsos.
  2. Dice que esos módulos «necesitan un plan de pago», cuando la regla acordada es que Pro es
     **recomendado**, con alternativa.
- **Qué no cambia:** el `id`, las actividades, el examen, el reloj y tu avance. Solo cambian dos oraciones; la
  última se conserva.

### B. Clase 1.3: el título

| Fuente | Título |
|---|---|
| **Catálogo real** (original) | «Primeros pasos: conversaciones, archivos, búsqueda web y estilos» |
| Borrador de 6 cursos | «Primeros pasos en el chat: interfaz, configuración, conversaciones y estilos» |
| **Borrador definitivo** | Usa el **original** del catálogo real: no se cambió nada |

**Recomendación: conservar el título original.**

- Es el que ya está en la plataforma real.
- IA 02 termina anunciando exactamente ese contenido: «En la próxima clase darás tus primeros pasos en el
  chat: conversaciones, archivos, búsqueda web y estilos de respuesta».
- La interfaz y la configuración se pueden enseñar dentro de esa misma clase, sin cambiar su título.

### C. Distribución de IA: comprobación

- **71 clases**, todas presentes, sin títulos repetidos (sección 7).
- Las **71 clases de IA** del borrador anterior están todas. Solo se reemplazó «(evaluación del curso)» por
  «(evaluación del bloque)», porque ya no son cursos.
- Las **23 clases no relacionadas con prompting** del curso real tienen su destino. La tabla completa está en
  la sección 7.

---

## 6. Preparado para futuras ampliaciones

Ejemplo: «Agrega una clase sobre MCP al módulo correspondiente».

1. Se agrega una línea en el módulo **M12 · MCP** del catálogo, en la posición que corresponda.
2. Se crea su página con el siguiente número libre del curso (por ejemplo, `clase-03.html`, id `ia-03`). El
   menú muestra «Módulo 12 · Clase N (en la página: Clase 03)», como ya ocurre con otros cursos.
3. Se regenera la ruta de aprendizaje con `node herramientas/generar-rutas.js`.

No cambian los demás módulos, los identificadores existentes, el motor, el menú ni la sincronización. Lo mismo
vale para un módulo nuevo (una entrada más en el curso) o un curso nuevo (una entrada en el catálogo, su
carpeta y un color).

Cada clase mantiene su organización: **curso → módulo → clase**, con videos, actividades y evaluación en su
página.

---

## 7. Verificación (script, 12/11/2026)

Las 33 comprobaciones pasaron:

- Los cursos Ciberseguridad, Inglés, JavaScript, Python y Redes son **idénticos** al catálogo real.
- IA 01 e IA 02 son **idénticas** (n, archivo, id, etiqueta, videos, módulo y orden).
- Totales: Redes 11/51/3 · IA 21/71/2 · Prompt 6/32/0 · **154 planificadas, 5 creadas, 149 pendientes**.
- 5 bloques de 4, 5, 4, 4 y 4 módulos. Módulos numerados sin saltos, y cada requisito previo es un módulo
  anterior.
- Las **32 clases de prompting** conservan título, lugar, referencia y videos, en el mismo orden.
- Las **23 clases restantes** del curso real tienen destino. **Cobertura: 23 + 32 = 55**.
- Las **71 clases de IA** del borrador de 6 cursos están todas.
- Se conservan los **19 videos** distintos del curso real (usados en 23 clases) y todos los videos del borrador
  anterior, con su minuto, incluido el de MoureDev para Plugins desde 2:30:23.
- No hay títulos duplicados. Cada clase indica su cuenta de Claude, y ninguna etiqueta presenta Pro como
  requisito.
- `revisar-catalogo.js --agregar`: correcto; la línea base de identificadores está intacta.
- Vista previa: sin errores, sin desborde a 360 px, almacenamiento aislado.

**Trazabilidad de las 23 clases no relacionadas con prompting:**

| Clase del curso real | Destino en IA: Claude |
|---|---|
| IA 01, IA 02 | M1·1 y M1·2 (sin cambios) |
| Primeros pasos: conversaciones, archivos, búsqueda web y estilos | M1·3 (mismo título) |
| Fluidez en IA y uso responsable… | M4·1 (mismo título y videos) |
| Proyectos: instrucciones y conocimiento permanentes | M2·1 (mismo título) |
| Artefactos y archivos: documentos, páginas y datos con ejecución de código | M2·2 Archivos y documentos + M2·3 Artefactos y ejecución de código |
| Memoria y conectores (MCP) en Claude | M4·2 (memoria y decisión) + M12·3 (conectores) |
| Research, Claude in Chrome y Cowork… | M4·2 + M3·2 (Research como opción) |
| ¿Qué es un skill? Usar los skills incluidos | M11·1 + M8·4 |
| Convertir una instrucción probada en un skill (SKILL.md) | M11·2 + M11·3 |
| Skills con archivos de apoyo y pruebas | M11·2 + M11·4 |
| De prompt engineering a context engineering; Claude frente a Claude Code | M7·1 + M5·1 |
| Instalar Claude Code: permisos y supervisión de acciones | M5·3 + M8·2 |
| Contexto del proyecto: CLAUDE.md, reglas y memoria | M7·2 + M7·3 |
| Planificar antes de implementar: modo plan y verificación | M6·2 |
| Skills y comandos reutilizables en Claude Code | M8·4 + M11·4 |
| Hooks y mecanismos de protección | M8·3 |
| MCP y herramientas externas | M12·1 + M12·4 |
| Cómo trabaja un agente: herramientas, bucle agéntico y riesgos | M14·1 + M14·4 |
| Subagentes y delegación de tareas | M15·1 + M16·1 |
| Flujos con varios agentes: orquestar y combinar resultados | M16·2 |
| Evaluar los resultados de los agentes | M16·3 |
| Automatizar: tareas programadas, scripts y GitHub Actions | M18·3 |

---

## 8. Diagnóstico final

### 8.1 Los cuatro estados del contenido

| Estado | Contenido |
|---|---|
| **Existente e integrado en la academia real** | 5 clases creadas (Redes 01–03, IA 01–02). Redes con sus 51 clases planificadas. El curso de IA actual, con 55 clases planificadas (aún con su organización antigua). Menú, rutas y sincronización funcionando |
| **Preparado en borradores (no visible en el menú)** | **Definitivo:** `ia-3-cursos.borrador.js` (IA: Claude 21/71 y Prompt Engineering 6/32) y su vista previa. **Historial:** borrador de 6 cursos, su vista previa y 5 carpetas (`prompt`, `claudecode`, `extensiones`, `agentes`, `automatizacion`) |
| **Pendiente de tu decisión** | Ver 8.5 |
| **Pendiente de crear** | 149 clases |

### 8.2 Clases creadas

| Clase | Estado |
|---|---|
| IA 01 e IA 02 | Fuentes verificadas, pruebas aprobadas, **aprobadas por ti** |
| Redes 01, 02 y 03 | Fuentes verificadas (algunos datos marcados como parcialmente verificados), pruebas aprobadas. Redes 03 no tiene todavía tu revisión registrada |

### 8.3 Videos

78 clases tienen video verificado (Redes 39, IA 29 y Prompt 10) y en 76 la búsqueda está pendiente. Al crear
cada clase se confirma que el video siga disponible y corresponda al tema. Si una clase no tiene video, se busca;
si no hay uno adecuado, se registra el pendiente con su justificación.

### 8.4 Actividades, evaluaciones y prácticas pendientes

Cada una de las 149 clases por crear necesita: actividades autocorregidas (3 o 4), examen (12 a 15 preguntas),
práctica autónoma con criterios para comprobarla (con su etiqueta de cuenta y alternativa en los cursos de IA),
resumen, videos y fuentes verificadas. Las evaluaciones de módulo o de bloque y los proyectos ya están
planificados como clases dentro de esas 149. Los apuntes en Word se generan al terminar cada clase.

### 8.5 Decisiones que requieren tu aprobación

1. La **estructura definitiva de 3 cursos** (secciones 1 y 2).
2. Las **etiquetas de cuenta de Claude** (sección 4).
3. La **corrección de IA 02** (sección 5A).
4. **Conservar el título original** de la clase 1.3 (sección 5B). Ya está así en el borrador.
5. El **nombre del curso**: «Inteligencia Artificial: Claude» (hoy se llama «IA: Claude y productividad»).
6. Qué hacer con las carpetas `claudecode`, `extensiones`, `agentes` y `automatizacion` del Lote 1. Recomendación:
   conservarlas como historial y no usarlas; borrarlas solo si lo pides.
7. El **horario** del curso Prompt Engineering.
8. Después, el **Lote 2**.

### 8.6 Qué haría el Lote 2 (cuando lo autorices)

En un solo paso, con respaldo previo:

1. Copiar el borrador definitivo al catálogo real.
2. Regenerar las rutas de `ia` y `prompt` (la de `prompt` ya existe y se actualiza).
3. Pasar a `cursos/ia/instrucciones.md` lo útil de las carpetas del Lote 1.
4. Actualizar la tabla de `CLAUDE.md` y la bitácora, y subir la versión del menú.
5. Aplicar la corrección de IA 02, si la apruebas.
6. Ejecutar todas las pruebas y revisar en el navegador, en escritorio y a 360 px.
7. Commit local, sin push.

### 8.7 Estimación del trabajo restante

- **Lote 2:** una entrega. No crea clases ni toca tu avance.
- **149 clases por crear:**
  - a 1 o 2 clases por revisión (el ritmo actual): unas **75 a 150 revisiones**;
  - a 3 o 4 clases del mismo módulo por revisión: unas **40 a 50 revisiones**.
