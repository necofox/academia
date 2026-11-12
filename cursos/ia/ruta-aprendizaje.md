# Ruta de aprendizaje: IA, Claude y productividad, desde cero

Cada clase dura **2 horas**. El curso se organiza por **módulos**, aprobados en
`PROPUESTA-AMPLIACION-6-CURSOS.md` (sección 4). La formación de ingeniería de instrucciones
(prompt engineering) ocupa seis niveles: Módulos 2, 3, 5, 6, 8 y 9. Los Módulos 1, 4, 7, 10 y 11
la acompañan (fundamentos, espacio de trabajo, skills, agentes y proyecto).

- **Clases:** usan el siguiente número de archivo libre (`clase-01`, `clase-02`…) con el id
  `ia-01`, `ia-02`… y ocupan el lugar que les toca dentro de su módulo.
- **Plan de Claude:** la columna «Plan de Claude» dice si la clase se hace con el plan gratuito o
  necesita uno de pago (Pro o superior). **Ninguna clase necesita la API de pago.**
- **Seguridad:** nunca pegues en Claude tokens, contraseñas ni datos personales; Claude Code se
  practica solo en carpetas de prueba.
- Las funciones y los límites de Claude cambian: cada clase se vuelve a verificar al crearla.

<!-- INICIO: generado desde recursos/catalogo.js con "node herramientas/generar-rutas.js". No editar a mano. -->

## Meta del curso

Usar Claude de forma eficaz, segura y responsable, con una formación completa en ingeniería de instrucciones (prompt engineering) en seis niveles: desde formular una pregunta clara hasta diseñar, evaluar, corregir y reutilizar instrucciones profesionales, y aplicar el context engineering con Claude Code y sus agentes, sin depender de la API de pago.

- **Duración:** 11 módulos · 55 clases · 110 h de clase (2 h por clase). La práctica autónoma de cada clase se suma aparte.
- **Clases listas:** 2 de 55.
- **Siguiente clase por crear:** Módulo 1 · Clase 3: Primeros pasos: conversaciones, archivos, búsqueda web y estilos.
- **Proyecto final del curso:** Biblioteca profesional de prompts para Claude: instrucciones para investigación, análisis de documentos, programación, revisión de código, automatización, planificación de proyectos, y agentes y subagentes, cada una con sus criterios de prueba. Incluye la transformación documentada de instrucciones deficientes en profesionales. Tiene una versión completa con el plan gratuito; la parte de agentes con Claude Code requiere un plan de pago.

## Resumen de módulos

| Módulo | Clases | Horas | Listas | Necesitas antes |
|---|---|---|---|---|
| Módulo 1 · Fundamentos de la IA generativa y de Claude | 4 | 8 | 2 | Ninguno obligatorio |
| Módulo 2 · Prompting · Nivel 1: Fundamentos | 4 | 8 | 0 | Módulo 1 |
| Módulo 3 · Prompting · Nivel 2: Técnicas fundamentales | 5 | 10 | 0 | Módulo 2 |
| Módulo 4 · Espacio de trabajo con Claude: proyectos, artefactos, memoria y conectores | 4 | 8 | 0 | Módulo 2 |
| Módulo 5 · Prompting · Nivel 3: Prompting estructurado | 6 | 12 | 0 | Módulo 3 |
| Módulo 6 · Prompting · Nivel 4: Avanzado | 6 | 12 | 0 | Módulo 5 |
| Módulo 7 · Skills: procedimientos reutilizables | 3 | 6 | 0 | Módulos 4 y 6 |
| Módulo 8 · Prompting · Nivel 5: Aplicaciones profesionales | 7 | 14 | 0 | Módulo 6 |
| Módulo 9 · Prompting · Nivel 6: Context engineering y Claude Code | 7 | 14 | 0 | Módulo 6 |
| Módulo 10 · Agentes, subagentes y automatización | 5 | 10 | 0 | Módulo 9 |
| Módulo 11 · Proyecto integrador: biblioteca profesional de prompts | 4 | 8 | 0 | Módulos 7 y 8 |
| **Total** | **55** | **110** | **2** | |

## Módulo 1 · Fundamentos de la IA generativa y de Claude (4 clases · 8 h)

- **Objetivo:** Entender qué es Claude, qué puede y qué no puede hacer, y usarlo de forma segura y responsable.
- **Competencias:** Explicar qué es un modelo de lenguaje y sus límites (errores inventados o «alucinaciones», fecha de conocimiento); distinguir Claude (chat) de Claude Code y lo que incluye cada plan; configurar la privacidad; aplicar el marco de fluidez en IA (Delegación, Descripción, Discernimiento y Diligencia) y la política de uso.
- **Al terminar serás capaz de:** Usar Claude con criterio, sabiendo cuándo confiar y cuándo verificar.
- **Necesitas antes:** Ninguno. Una cuenta de Claude; el plan gratuito sirve.
- **Práctica:** Comparar respuestas con y sin búsqueda web; revisar tu configuración de privacidad; detectar errores en respuestas de ejemplo.
- **Evaluación del módulo:** Examen de conceptos y análisis de tres respuestas: cuál es confiable y por qué.
- **Fuentes previstas** (se verifican al crear cada clase): Claude Academy: «AI Fluency: Framework and foundations» y «AI capabilities and limitations» (oficial); Elements of AI (Universidad de Helsinki); página de planes; centro de privacidad; política de uso.

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M1·1 | ¿Qué es la IA generativa? Modelos de lenguaje, capacidades y límites | Gratis · Chat de Claude | — | [▶ 1](https://www.youtube.com/watch?v=0K5Knnq2ZRk) | ✔ Lista: `clases/clase-01.html` (id `ia-01`) |
| M1·2 | Claude y Claude Code: planes, apps, modelos y límites de uso | Gratis · Chat de Claude | — | [▶ 1](https://www.youtube.com/watch?v=vW4MFfw8taU) [▶ 2](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=2018s) | ✔ Lista: `clases/clase-02.html` (id `ia-02`) |
| M1·3 | Primeros pasos: conversaciones, archivos, búsqueda web y estilos | Gratis · Chat de Claude | — | — | Próximamente · **siguiente por crear** |
| M1·4 | Fluidez en IA y uso responsable: el marco 4D, privacidad, verificación y política de uso | Gratis · Chat de Claude | — | [▶ 1](https://www.youtube.com/watch?v=W4Ua6XFfX9w) [▶ 2](https://www.youtube.com/watch?v=EljzyfdYkrc) | Próximamente |

## Módulo 2 · Prompting · Nivel 1: Fundamentos (4 clases · 8 h)

- **Objetivo:** Comunicarte con Claude con instrucciones claras, con contexto, objetivo, restricciones y un resultado esperado.
- **Competencias:** Explicar qué es un prompt y cómo funciona una conversación con Claude; distinguir una instrucción vaga de una bien definida; dar contexto, objetivo y restricciones; definir el resultado esperado; reconocer los errores frecuentes al comunicarse con una IA.
- **Al terminar serás capaz de:** Convertir una petición vaga en una instrucción clara que funcione a la primera.
- **Necesitas antes:** Módulo 1.
- **Práctica:** Reescribir diez peticiones vagas de la vida diaria y de tus cursos, comparando el resultado antes y después con una lista de comprobación.
- **Evaluación del módulo:** Mejorar cinco instrucciones reales y explicar qué cambió y por qué.
- **Fuentes previstas** (se verifican al crear cada clase): Tutorial interactivo de Anthropic (capítulos 1 y 2); guía oficial «Prompting best practices»; DevTalles (terceros).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M2·1 | ¿Qué es un prompt? Cómo interpreta Claude lo que escribes | Gratis · Chat de Claude | Tutorial de Anthropic, cap. 1: Basic Prompt Structure | [▶ 1](https://www.youtube.com/watch?v=jrucUmU_l8s) | Próximamente |
| M2·2 | Preguntas e instrucciones claras: de lo vago a lo bien definido | Gratis · Chat de Claude | Tutorial de Anthropic, cap. 2: Being Clear and Direct | [▶ 1](https://www.youtube.com/watch?v=A-uJeV7pSEY) | Próximamente |
| M2·3 | Contexto, objetivo y restricciones | Gratis · Chat de Claude | Prompting best practices: «Add context to improve performance» | [▶ 1](https://www.youtube.com/watch?v=1bXdjvRBvWk) | Próximamente |
| M2·4 | Definir el resultado esperado y evitar errores frecuentes (evaluación del módulo) | Gratis · Chat de Claude | — | [▶ 1](https://www.youtube.com/watch?v=UeuZM5Ulf6A) | Próximamente |

## Módulo 3 · Prompting · Nivel 2: Técnicas fundamentales (5 clases · 10 h)

- **Objetivo:** Dominar las técnicas básicas que hacen que una instrucción sea precisa y repetible.
- **Competencias:** Asignar roles y responsabilidades; dar instrucciones directas y específicas; delimitar el alcance; usar ejemplos de entrada y salida (few-shot); fijar restricciones y criterios de aceptación; definir el formato de la respuesta; separar instrucciones, datos y contenido de referencia.
- **Al terminar serás capaz de:** Elegir y combinar la técnica adecuada para cada tarea.
- **Necesitas antes:** Módulo 2.
- **Práctica:** Para una misma tarea, probar la instrucción sin técnica y con cada técnica, y registrar en una tabla qué mejoró.
- **Evaluación del módulo:** Construir una instrucción con rol, ejemplos, criterios de aceptación y formato, y demostrar que cumple los criterios en tres casos distintos.
- **Fuentes previstas** (se verifican al crear cada clase): Tutorial interactivo de Anthropic (capítulos 2 a 5 y 7); guía oficial «Prompting best practices»; video oficial «Prompting 101».

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M3·1 | Roles y responsabilidades: asignar un papel a Claude | Gratis · Chat de Claude | Tutorial de Anthropic, cap. 3: Assigning Roles | [▶ 1](https://www.youtube.com/watch?v=ysPbXH0LpIE) | Próximamente |
| M3·2 | Instrucciones directas y específicas; contexto y alcance | Gratis · Chat de Claude | Prompting best practices: «Be clear and direct» | — | Próximamente |
| M3·3 | Ejemplos de entrada y salida (few-shot) | Gratis · Chat de Claude | Tutorial de Anthropic, cap. 7: Using Examples | — | Próximamente |
| M3·4 | Restricciones, criterios de aceptación y formato de la respuesta | Gratis · Chat de Claude | Tutorial de Anthropic, cap. 5: Formatting Output (la parte «Speaking for Claude» ya no aplica a los modelos actuales) | [▶ 1](https://www.youtube.com/watch?v=JgM54aFX924) | Próximamente |
| M3·5 | Separar instrucciones, datos y contenido de referencia (evaluación del módulo) | Gratis · Chat de Claude | Tutorial de Anthropic, cap. 4: Separating Data from Instructions | — | Próximamente |

## Módulo 4 · Espacio de trabajo con Claude: proyectos, artefactos, memoria y conectores (4 clases · 8 h)

- **Objetivo:** Organizar tu trabajo con Claude para no repetir contexto y guardar tus instrucciones.
- **Competencias:** Crear proyectos con instrucciones y conocimiento; crear artefactos y archivos con ejecución de código; usar la memoria; conectar Claude con otras apps mediante conectores (MCP); saber cuándo convienen Research, Claude in Chrome y Cowork según el plan.
- **Al terminar serás capaz de:** Montar un espacio de trabajo con Claude para cada curso de la academia.
- **Necesitas antes:** Módulo 2.
- **Práctica:** Un proyecto por curso con sus instrucciones; un artefacto de repaso; un conector de prueba.
- **Evaluación del módulo:** Presentar tu espacio de trabajo y un artefacto útil para estudiar.
- **Fuentes previstas** (se verifican al crear cada clase): Centro de ayuda de Claude: Projects, Artifacts, memoria, conectores personalizados (MCP remoto), Research, Claude in Chrome y Cowork.

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M4·1 | Proyectos: instrucciones y conocimiento permanentes | Gratis (hasta 5 proyectos) · Chat de Claude | — | — | Próximamente |
| M4·2 | Artefactos y archivos: documentos, páginas y datos con ejecución de código | Gratis (hay que activar la ejecución de código) · Chat de Claude | — | — | Próximamente |
| M4·3 | Memoria y conectores (MCP) en Claude | Gratis con límites (1 conector propio; buscar chats anteriores es de pago) · Chat de Claude | — | — | Próximamente |
| M4·4 | Research, Claude in Chrome y Cowork: cuándo valen la pena (evaluación del módulo) | Pago (Pro o superior); la clase muestra la alternativa gratuita · Chat de Claude y app de escritorio | — | — | Próximamente |

## Módulo 5 · Prompting · Nivel 3: Prompting estructurado (6 clases · 12 h)

- **Objetivo:** Diseñar instrucciones estructuradas y reutilizables para tareas largas y con varias condiciones.
- **Competencias:** Organizar instrucciones con etiquetas XML; crear plantillas reutilizables; escribir prompts con varias condiciones; analizar documentos extensos; investigar, comparar y sintetizar; generar informes, tablas, planes y documentación; detectar y eliminar ambigüedades y contradicciones.
- **Al terminar serás capaz de:** Escribir plantillas de instrucciones que otra persona pueda reutilizar sin explicaciones.
- **Necesitas antes:** Módulo 3.
- **Práctica:** Convertir tres instrucciones de los niveles anteriores en plantillas con etiquetas XML y probarlas con documentos reales (PDF y Word).
- **Evaluación del módulo:** Plantilla de análisis de un documento extenso, con condiciones, formato fijo y una prueba de que no tiene contradicciones.
- **Proyecto:** Plantillas para investigación y para informes, que se suman a tu biblioteca.
- **Fuentes previstas** (se verifican al crear cada clase): Guía oficial «Prompting best practices» («Structure prompts with XML tags», «Long context prompting»); tutorial de Anthropic (capítulo 9).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M5·1 | Etiquetas XML para organizar instrucciones | Gratis · Chat de Claude | Prompting best practices: «Structure prompts with XML tags» | [▶ 1](https://www.youtube.com/watch?v=ysPbXH0LpIE) | Próximamente |
| M5·2 | Plantillas reutilizables y prompts con varias condiciones | Gratis · Chat de Claude | Tutorial de Anthropic, cap. 9: Building Complex Prompts | — | Próximamente |
| M5·3 | Analizar documentos extensos (PDF y Word) | Gratis (con límites de uso) · Chat de Claude | Prompting best practices: «Long context prompting» | — | Próximamente |
| M5·4 | Prompts para investigar, comparar y sintetizar | Gratis con búsqueda web; Research es de pago (opcional) · Chat de Claude | — | — | Próximamente |
| M5·5 | Prompts para informes, tablas, planes y documentación | Gratis · Chat de Claude | — | — | Próximamente |
| M5·6 | Evitar ambigüedades y contradicciones (evaluación del módulo) | Gratis · Chat de Claude | — | — | Próximamente |

## Módulo 6 · Prompting · Nivel 4: Avanzado (6 clases · 12 h)

- **Objetivo:** Resolver tareas complejas con procesos de varias etapas y medir la calidad de las instrucciones.
- **Competencias:** Descomponer problemas complejos; encadenar prompts; mejorar por iteraciones; detectar errores y alucinaciones; verificar información con fuentes; definir criterios de éxito y casos de prueba; evaluar la calidad de las respuestas; mantener una biblioteca de prompts con versiones.
- **Al terminar serás capaz de:** Demostrar con pruebas que una instrucción funciona, en lugar de suponerlo.
- **Necesitas antes:** Módulo 5.
- **Práctica:** Una hoja de evaluación propia (casos de prueba, criterios y resultados) para comparar versiones de una instrucción directamente en el chat, sin la API.
- **Evaluación del módulo:** Mejorar una instrucción en tres versiones y demostrar con la hoja de evaluación cuál cumple mejor los criterios.
- **Proyecto:** Primera versión de tu biblioteca, con criterios de prueba por instrucción.
- **Fuentes previstas** (se verifican al crear cada clase): Tutorial de Anthropic (capítulos 6 y 8, y apéndice «Chaining Prompts»); documentación oficial «Define success criteria and build evaluations»; artículo oficial «Building effective agents» (encadenamiento de prompts).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M6·1 | Descomponer problemas complejos y encadenar prompts | Gratis · Chat de Claude | Tutorial de Anthropic, apéndice: Chaining Prompts | — | Próximamente |
| M6·2 | Razonamiento paso a paso y mejora por iteraciones | Gratis · Chat de Claude | Tutorial de Anthropic, cap. 6: Precognition (Thinking Step by Step) | [▶ 1](https://www.youtube.com/watch?v=T9aRN5JkmL8&t=737s) | Próximamente |
| M6·3 | Alucinaciones: detectarlas y reducirlas | Gratis · Chat de Claude | Tutorial de Anthropic, cap. 8: Avoiding Hallucinations | [▶ 1](https://www.youtube.com/watch?v=Y0KidGr9Z2Y) | Próximamente |
| M6·4 | Verificar información y trabajar con fuentes | Gratis · Chat de Claude | — | — | Próximamente |
| M6·5 | Criterios de éxito, casos de prueba y evaluación de calidad | Gratis (en el chat, con una hoja de evaluación) · Chat de Claude | Documentación oficial: «Define success criteria and build evaluations» | [▶ 1](https://www.youtube.com/watch?v=KIGBsQqZcNA) | Próximamente |
| M6·6 | Biblioteca de prompts reutilizables y control de versiones (evaluación del módulo) | Gratis · Chat de Claude (proyectos) | — | — | Próximamente |

## Módulo 7 · Skills: procedimientos reutilizables (3 clases · 6 h)

- **Objetivo:** Convertir tus mejores instrucciones en skills para que Claude las aplique solo cuando corresponde.
- **Competencias:** Explicar qué es un skill y cuándo se activa; usar skills incluidos; convertir una instrucción probada en un skill (SKILL.md); agregar archivos de apoyo y pruebas.
- **Al terminar serás capaz de:** Crear un skill que automatice una tarea repetida de tu estudio.
- **Necesitas antes:** Módulos 4 y 6.
- **Práctica:** Convertir en skill la instrucción que transforma el resumen de una clase en apuntes con el formato de la academia.
- **Evaluación del módulo:** Skill propio funcionando, con instrucciones y casos de prueba.
- **Fuentes previstas** (se verifican al crear cada clase): Centro de ayuda: «What are skills?» y «Use skills in Claude»; documentación de Claude Code: Skills; Claude Academy: «Introduction to agent skills».

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M7·1 | ¿Qué es un skill? Usar los skills incluidos | Gratis (hay que activar la ejecución de código) · Chat de Claude | — | — | Próximamente |
| M7·2 | Convertir una instrucción probada en un skill (SKILL.md) | Gratis (hay que activar la ejecución de código) · Chat de Claude | — | — | Próximamente |
| M7·3 | Skills con archivos de apoyo y pruebas (evaluación del módulo) | Gratis; usarlos en Claude Code requiere plan de pago · Chat de Claude | — | — | Próximamente |

## Módulo 8 · Prompting · Nivel 5: Aplicaciones profesionales (7 clases · 14 h)

- **Objetivo:** Diseñar instrucciones profesionales para los trabajos reales de tus otros cursos y de tu vida laboral.
- **Competencias:** Escribir instrucciones para desarrollar software (HTML, CSS, JavaScript y Python); analizar y corregir código; diseñar páginas web; automatizar tareas; investigar temas técnicos; analizar documentos PDF y Word; elaborar informes y documentación; gestionar proyectos; analizar oportunidades laborales y de negocio; organizar tu productividad personal.
- **Al terminar serás capaz de:** Tener una instrucción probada para cada tipo de trabajo que haces con frecuencia.
- **Necesitas antes:** Módulo 6. Para las clases de programación se recomienda el Módulo 1 de JavaScript o de Python: aquí no se enseña a programar, se enseña a pedir y a revisar.
- **Práctica:** Cada clase usa material real de otro curso de la academia (un ejercicio de JavaScript, un registro de Ciberseguridad, un plan de red) y termina con una instrucción probada para la biblioteca.
- **Evaluación del módulo:** Resolver un encargo profesional ficticio con instrucciones propias y demostrar que el resultado cumple los criterios.
- **Proyecto:** Las instrucciones de este módulo pasan a tu biblioteca.
- **Fuentes previstas** (se verifican al crear cada clase): Guía oficial «Prompting best practices»; materiales de los cursos de JavaScript, Python, Ciberseguridad y Redes de la academia.

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M8·1 | Prompts para desarrollar software: HTML, CSS, JavaScript y Python | Gratis · Chat de Claude | — | — | Próximamente |
| M8·2 | Prompts para analizar, revisar y corregir código | Gratis · Chat de Claude | — | — | Próximamente |
| M8·3 | Prompts para diseñar páginas web: estructura, estilo y accesibilidad | Gratis · Chat de Claude (artefactos) | — | — | Próximamente |
| M8·4 | Prompts para automatizar tareas: scripts, fórmulas y flujos | Gratis · Chat de Claude | — | — | Próximamente |
| M8·5 | Investigación técnica y análisis de documentos PDF y Word | Gratis (con límites de uso) · Chat de Claude | — | — | Próximamente |
| M8·6 | Informes, documentación y gestión de proyectos | Gratis · Chat de Claude | — | — | Próximamente |
| M8·7 | Oportunidades laborales, negocios y productividad personal (evaluación del módulo) | Gratis · Chat de Claude | — | — | Próximamente |

## Módulo 9 · Prompting · Nivel 6: Context engineering y Claude Code (7 clases · 14 h)

- **Objetivo:** Pasar de escribir instrucciones a diseñar el contexto completo con el que trabaja un agente de programación.
- **Competencias:** Diferenciar prompt engineering y context engineering; diferenciar Claude y Claude Code, con sus requisitos y límites por plan; dar el contexto de un proyecto con CLAUDE.md y reglas; usar skills y comandos reutilizables; planificar antes de implementar; controlar permisos y supervisar acciones; proteger con hooks; conectar herramientas con MCP.
- **Al terminar serás capaz de:** Configurar un proyecto para que Claude Code trabaje bien y de forma segura.
- **Necesitas antes:** Módulo 6. Desde la clase 2 se necesita un plan de pago (Pro o superior). Recomendado: el Módulo 1 de JavaScript o de Python.
- **Práctica:** Un proyecto de práctica en una carpeta aparte (nunca la academia real), configurado paso a paso: CLAUDE.md, reglas, un skill, un hook y un servidor MCP.
- **Evaluación del módulo:** Entregar el proyecto de práctica configurado y una tarea resuelta con modo plan, con las acciones revisadas.
- **Fuentes previstas** (se verifican al crear cada clase): Artículo oficial «Effective context engineering for AI agents» (29/09/2025); documentación de Claude Code: Best practices, Memory, Skills, Hooks, MCP y Permissions; MoureDev (terceros, capítulos indicados).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M9·1 | De prompt engineering a context engineering; Claude frente a Claude Code | Gratis (parte conceptual) · Chat de Claude | Artículo oficial «Effective context engineering for AI agents» | — | Próximamente |
| M9·2 | Instalar Claude Code: permisos y supervisión de acciones | Pago (Pro o superior) · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=755s) [▶ 2](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=2509s) [▶ 3](https://www.youtube.com/watch?v=DAQJvGjlgVM) | Próximamente |
| M9·3 | Contexto del proyecto: CLAUDE.md, reglas y memoria | Pago (Pro o superior) · Claude Code | Documentación de Claude Code: Best practices («Keep CLAUDE.md short») y Memory | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=4611s) | Próximamente |
| M9·4 | Planificar antes de implementar: modo plan y verificación | Pago (Pro o superior) · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=gv0WHhKelSE) [▶ 2](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=2733s) | Próximamente |
| M9·5 | Skills y comandos reutilizables en Claude Code | Pago (Pro o superior) · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=7019s) | Próximamente |
| M9·6 | Hooks y mecanismos de protección | Pago (Pro o superior) · Claude Code | Documentación de Claude Code: Best practices («Enforce the rules that can't have exceptions») y Hooks | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=10144s) | Próximamente |
| M9·7 | MCP y herramientas externas (evaluación del módulo) | Pago (Pro o superior) · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=T4-BdZQUCSE) [▶ 2](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=7775s) | Próximamente |

## Módulo 10 · Agentes, subagentes y automatización (5 clases · 10 h)

- **Objetivo:** Delegar trabajo en agentes y subagentes, evaluar lo que entregan y automatizar tareas con seguridad.
- **Competencias:** Explicar cómo trabaja un agente y sus riesgos; delegar en subagentes; diseñar flujos con varios agentes (encadenamiento, enrutamiento, paralelización, orquestador-trabajadores y evaluador-optimizador); evaluar resultados de agentes; automatizar con tareas programadas, scripts y GitHub Actions, conociendo los límites de uso.
- **Al terminar serás capaz de:** Diseñar, evaluar y dejar funcionando un flujo con varios agentes.
- **Necesitas antes:** Módulo 9.
- **Práctica:** Dos subagentes propios (uno investiga en solo lectura y otro revisa) y una comparación con hacer la tarea en una sola conversación.
- **Evaluación del módulo:** Flujo con al menos dos subagentes, con criterios de evaluación de su resultado y una automatización documentada (qué hace, cuándo corre, qué consume y cómo se apaga).
- **Fuentes previstas** (se verifican al crear cada clase): Artículo oficial «Building effective agents» (19/12/2024); documentación de Claude Code: Sub-agents, tareas programadas, Headless y GitHub Actions; videos oficiales de Anthropic.

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M10·1 | Cómo trabaja un agente: herramientas, bucle agéntico y riesgos | Pago (Pro o superior) · Claude Code | Artículo oficial «Building effective agents» | [▶ 1](https://www.youtube.com/watch?v=LP5OCa20Zpg) [▶ 2](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=499s) | Próximamente |
| M10·2 | Subagentes y delegación de tareas | Pago (Pro o superior) · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=9225s) | Próximamente |
| M10·3 | Flujos con varios agentes: orquestar y combinar resultados | Pago (Pro o superior) · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=D7_ipDqhtwk) | Próximamente |
| M10·4 | Evaluar los resultados de los agentes | Pago (Pro o superior) · Claude Code | Documentación oficial: «Define success criteria and build evaluations» | — | Próximamente |
| M10·5 | Automatizar: tareas programadas, scripts y GitHub Actions (evaluación del módulo) | Pago (Pro o superior) · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=10578s) | Próximamente |

## Módulo 11 · Proyecto integrador: biblioteca profesional de prompts (4 clases · 8 h)

- **Objetivo:** Construir, probar y defender tu propia biblioteca profesional de prompts para Claude.
- **Competencias:** Diseñar una biblioteca por casos de uso; escribir criterios de prueba; transformar instrucciones deficientes en profesionales y justificar cada cambio; medir si el resultado cumple los criterios; presentar el trabajo.
- **Al terminar serás capaz de:** Entregar una biblioteca profesional de prompts probada y documentada.
- **Necesitas antes:** Módulos 7 y 8. La parte de agentes y automatización requiere los Módulos 9 y 10 y un plan de pago; el resto se hace con el plan gratuito.
- **Práctica:** Avances semanales revisados con la rúbrica del proyecto.
- **Evaluación del módulo:** Rúbrica: cobertura de los casos de uso, calidad de cada instrucción, pruebas y resultados, transformaciones justificadas, seguridad y presentación.
- **Proyecto:** Proyecto final del curso (ver más arriba).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M11·1 | Diseño de la biblioteca: casos de uso, plantillas y criterios de prueba | Gratis · Chat de Claude (proyectos) | — | — | Próximamente |
| M11·2 | Construcción y pruebas: investigación, documentos, programación, revisión de código y planificación | Gratis · Chat de Claude | — | — | Próximamente |
| M11·3 | Automatización, agentes y subagentes; de instrucción deficiente a profesional | Gratis (diseño y prueba en el chat) o pago (ejecución con Claude Code) · Chat de Claude o Claude Code | — | — | Próximamente |
| M11·4 | Presentación y defensa: cambios justificados y resultados medidos | Gratis · Chat de Claude | — | — | Próximamente |

<!-- FIN: generado desde recursos/catalogo.js -->

## Contenidos que se comparten con otros cursos (sin duplicarlos)

- **Programación:** este curso no enseña a programar; enseña a pedir, revisar y corregir código
  con ejercicios de JavaScript y Python (Módulo 8). Para Claude Code (Módulos 9 y 10) conviene
  el Módulo 1 de JavaScript o de Python.
- **Git y GitHub:** se enseñan en JavaScript (Módulo 5 · Clase 2) y Python (Módulo 5 · Clase 1);
  aquí solo se usan junto a Claude Code.
- **Verificación de fuentes:** el Módulo 6 · Clase 4 aplica con Claude la misma norma de fuentes
  de la academia (`PROMPT-MAESTRO.md`).
- **Datos sensibles:** la misma regla que Ciberseguridad (Módulo 7 · Clase 3).
- **Instrucciones para operar redes:** Redes (Módulo 10 · Clase 6) aplica las técnicas de este
  curso al tema 5.2 del CCNA v2.0.
