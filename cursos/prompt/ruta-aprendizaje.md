# Ruta de aprendizaje: IA 2 · Prompt Engineering

Cada clase dura **2 horas**. Curso 2 de 6 de la formación en IA, aprobado en
`PROPUESTA-IA-6-CURSOS.md` (versión 2). **Necesitas antes:** IA 1 · Fundamentos y uso de Claude.

- **Clases:** usan el siguiente número de archivo libre (`clase-01`, `clase-02`…) con el id
  `prompt-01`, `prompt-02`… y ocupan el lugar que les toca dentro de su módulo.
- **Plan de Claude:** la columna «Plan de Claude» dice si la clase se hace con el plan gratuito o
  necesita uno de pago (Pro o superior). **Ninguna clase necesita la API de pago.** Pro tiene
  límites de uso (no es ilimitado).
- **Seguridad:** nunca pegues en Claude tokens, contraseñas ni datos personales; Claude Code se
  practica solo en carpetas de prueba.
- Las funciones y los límites de Claude cambian: cada clase se vuelve a verificar al crearla.

<!-- INICIO: generado desde recursos/catalogo.js con "node herramientas/generar-rutas.js". No editar a mano. -->

## Meta del curso

Diseñar instrucciones que produzcan resultados precisos, útiles y reproducibles, en seis niveles: desde formular una pregunta clara hasta diseñar, evaluar, corregir y reutilizar instrucciones profesionales para distintos tipos de trabajo, sin depender de la API de pago.

- **Duración:** 6 módulos · 32 clases · 64 h de clase (2 h por clase). La práctica autónoma de cada clase se suma aparte.
- **Clases listas:** 0 de 32.
- **Siguiente clase por crear:** Módulo 1 · Clase 1: ¿Qué es un prompt? Cómo interpreta Claude lo que escribes.
- **Proyecto final del curso:** Biblioteca profesional de prompts para Claude: instrucciones para investigación, análisis de documentos, programación, revisión de código, automatización, planificación de proyectos, y agentes y subagentes, cada una con sus criterios de prueba. Incluye la transformación documentada de instrucciones deficientes en profesionales. Se hace con Claude gratis; ejecutar en Claude Code las instrucciones de agentes recomienda Claude Pro.

## Resumen de módulos

| Módulo | Clases | Horas | Listas | Necesitas antes |
|---|---|---|---|---|
| Módulo 1 · Prompting · Nivel 1: Fundamentos | 4 | 8 | 0 | Ninguno obligatorio |
| Módulo 2 · Prompting · Nivel 2: Técnicas fundamentales | 5 | 10 | 0 | Módulo 1 |
| Módulo 3 · Prompting · Nivel 3: Prompting estructurado | 6 | 12 | 0 | Módulo 2 |
| Módulo 4 · Prompting · Nivel 4: Avanzado | 6 | 12 | 0 | Módulo 3 |
| Módulo 5 · Prompting · Nivel 5: Aplicaciones profesionales | 7 | 14 | 0 | Módulo 4 |
| Módulo 6 · Proyecto integrador: biblioteca profesional de prompts | 4 | 8 | 0 | Módulo 5 |
| **Total** | **32** | **64** | **0** | |

## Módulo 1 · Prompting · Nivel 1: Fundamentos (4 clases · 8 h)

- **Objetivo:** Comunicarte con Claude con instrucciones claras, con contexto, objetivo, restricciones y un resultado esperado.
- **Competencias:** Explicar qué es un prompt y cómo funciona una conversación con Claude; distinguir una instrucción vaga de una bien definida; dar contexto, objetivo y restricciones; definir el resultado esperado; reconocer los errores frecuentes al comunicarse con una IA.
- **Al terminar serás capaz de:** Convertir una petición vaga en una instrucción clara que funcione a la primera.
- **Necesitas antes:** Ninguno. Recomendado: IA: Claude, Módulo 1 (qué es Claude y cómo se usa). Basta con Claude gratis.
- **Práctica:** Reescribir diez peticiones vagas de la vida diaria y de tus cursos, comparando el resultado antes y después con una lista de comprobación.
- **Evaluación del módulo:** Mejorar cinco instrucciones reales y explicar qué cambió y por qué.
- **Fuentes previstas** (se verifican al crear cada clase): Tutorial interactivo de Anthropic (capítulos 1 y 2); guía oficial «Prompting best practices»; DevTalles (terceros).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M1·1 | ¿Qué es un prompt? Cómo interpreta Claude lo que escribes | Claude gratis · Chat de Claude | Tutorial de Anthropic, cap. 1: Basic Prompt Structure | [▶ 1](https://www.youtube.com/watch?v=jrucUmU_l8s) | Próximamente · **siguiente por crear** |
| M1·2 | Preguntas e instrucciones claras: de lo vago a lo bien definido | Claude gratis · Chat de Claude | Tutorial de Anthropic, cap. 2: Being Clear and Direct | [▶ 1](https://www.youtube.com/watch?v=A-uJeV7pSEY) | Próximamente |
| M1·3 | Contexto, objetivo y restricciones | Claude gratis · Chat de Claude | Prompting best practices: «Add context to improve performance» | [▶ 1](https://www.youtube.com/watch?v=1bXdjvRBvWk) | Próximamente |
| M1·4 | Definir el resultado esperado y evitar errores frecuentes (evaluación del módulo) | Claude gratis · Chat de Claude | — | [▶ 1](https://www.youtube.com/watch?v=UeuZM5Ulf6A) | Próximamente |

## Módulo 2 · Prompting · Nivel 2: Técnicas fundamentales (5 clases · 10 h)

- **Objetivo:** Dominar las técnicas básicas que hacen que una instrucción sea precisa y repetible.
- **Competencias:** Asignar roles y responsabilidades; dar instrucciones directas y específicas; delimitar el alcance; usar ejemplos de entrada y salida (few-shot); fijar restricciones y criterios de aceptación; definir el formato de la respuesta; separar instrucciones, datos y contenido de referencia.
- **Al terminar serás capaz de:** Elegir y combinar la técnica adecuada para cada tarea.
- **Necesitas antes:** Módulo 1.
- **Práctica:** Para una misma tarea, probar la instrucción sin técnica y con cada técnica, y registrar en una tabla qué mejoró.
- **Evaluación del módulo:** Construir una instrucción con rol, ejemplos, criterios de aceptación y formato, y demostrar que cumple los criterios en tres casos distintos.
- **Fuentes previstas** (se verifican al crear cada clase): Tutorial interactivo de Anthropic (capítulos 2 a 5 y 7); guía oficial «Prompting best practices»; video oficial «Prompting 101».

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M2·1 | Roles y responsabilidades: asignar un papel a Claude | Claude gratis · Chat de Claude | Tutorial de Anthropic, cap. 3: Assigning Roles | [▶ 1](https://www.youtube.com/watch?v=ysPbXH0LpIE) | Próximamente |
| M2·2 | Instrucciones directas y específicas; contexto y alcance | Claude gratis · Chat de Claude | Prompting best practices: «Be clear and direct» | — | Próximamente |
| M2·3 | Ejemplos de entrada y salida (few-shot) | Claude gratis · Chat de Claude | Tutorial de Anthropic, cap. 7: Using Examples | — | Próximamente |
| M2·4 | Restricciones, criterios de aceptación y formato de la respuesta | Claude gratis · Chat de Claude | Tutorial de Anthropic, cap. 5: Formatting Output (la parte «Speaking for Claude» ya no aplica a los modelos actuales) | [▶ 1](https://www.youtube.com/watch?v=JgM54aFX924) | Próximamente |
| M2·5 | Separar instrucciones, datos y contenido de referencia (evaluación del módulo) | Claude gratis · Chat de Claude | Tutorial de Anthropic, cap. 4: Separating Data from Instructions | — | Próximamente |

## Módulo 3 · Prompting · Nivel 3: Prompting estructurado (6 clases · 12 h)

- **Objetivo:** Diseñar instrucciones estructuradas y reutilizables para tareas largas y con varias condiciones.
- **Competencias:** Organizar instrucciones con etiquetas XML; crear plantillas reutilizables; escribir prompts con varias condiciones; analizar documentos extensos; investigar, comparar y sintetizar; generar informes, tablas, planes y documentación; detectar y eliminar ambigüedades y contradicciones.
- **Al terminar serás capaz de:** Escribir plantillas de instrucciones que otra persona pueda reutilizar sin explicaciones.
- **Necesitas antes:** Módulo 2.
- **Práctica:** Convertir tres instrucciones de los niveles anteriores en plantillas con etiquetas XML y probarlas con documentos reales (PDF y Word).
- **Evaluación del módulo:** Plantilla de análisis de un documento extenso, con condiciones, formato fijo y una prueba de que no tiene contradicciones.
- **Proyecto:** Plantillas para investigación y para informes, que se suman a tu biblioteca.
- **Fuentes previstas** (se verifican al crear cada clase): Guía oficial «Prompting best practices» («Structure prompts with XML tags», «Long context prompting»); tutorial de Anthropic (capítulo 9).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M3·1 | Etiquetas XML para organizar instrucciones | Claude gratis · Chat de Claude | Prompting best practices: «Structure prompts with XML tags» | [▶ 1](https://www.youtube.com/watch?v=ysPbXH0LpIE) | Próximamente |
| M3·2 | Plantillas reutilizables y prompts con varias condiciones | Claude gratis · Chat de Claude | Tutorial de Anthropic, cap. 9: Building Complex Prompts | — | Próximamente |
| M3·3 | Analizar documentos extensos (PDF y Word) | Claude gratis (con límites de uso) · Chat de Claude | Prompting best practices: «Long context prompting» | — | Próximamente |
| M3·4 | Prompts para investigar, comparar y sintetizar | Claude gratis con búsqueda web; Research requiere Claude Pro (opcional) · Chat de Claude | — | — | Próximamente |
| M3·5 | Prompts para informes, tablas, planes y documentación | Claude gratis · Chat de Claude | — | — | Próximamente |
| M3·6 | Evitar ambigüedades y contradicciones (evaluación del módulo) | Claude gratis · Chat de Claude | — | — | Próximamente |

## Módulo 4 · Prompting · Nivel 4: Avanzado (6 clases · 12 h)

- **Objetivo:** Resolver tareas complejas con procesos de varias etapas y medir la calidad de las instrucciones.
- **Competencias:** Descomponer problemas complejos; encadenar prompts; mejorar por iteraciones; detectar errores y alucinaciones; verificar información con fuentes; definir criterios de éxito y casos de prueba; evaluar la calidad de las respuestas; mantener una biblioteca de prompts con versiones.
- **Al terminar serás capaz de:** Demostrar con pruebas que una instrucción funciona, en lugar de suponerlo.
- **Necesitas antes:** Módulo 3.
- **Práctica:** Una hoja de evaluación propia (casos de prueba, criterios y resultados) para comparar versiones de una instrucción directamente en el chat, sin la API.
- **Evaluación del módulo:** Mejorar una instrucción en tres versiones y demostrar con la hoja de evaluación cuál cumple mejor los criterios.
- **Proyecto:** Primera versión de tu biblioteca, con criterios de prueba por instrucción.
- **Fuentes previstas** (se verifican al crear cada clase): Tutorial de Anthropic (capítulos 6 y 8, y apéndice «Chaining Prompts»); documentación oficial «Define success criteria and build evaluations»; artículo oficial «Building effective agents» (encadenamiento de prompts).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M4·1 | Descomponer problemas complejos y encadenar prompts | Claude gratis · Chat de Claude | Tutorial de Anthropic, apéndice: Chaining Prompts | — | Próximamente |
| M4·2 | Razonamiento paso a paso y mejora por iteraciones | Claude gratis · Chat de Claude | Tutorial de Anthropic, cap. 6: Precognition (Thinking Step by Step) | [▶ 1](https://www.youtube.com/watch?v=T9aRN5JkmL8&t=737s) | Próximamente |
| M4·3 | Alucinaciones: detectarlas y reducirlas | Claude gratis · Chat de Claude | Tutorial de Anthropic, cap. 8: Avoiding Hallucinations | [▶ 1](https://www.youtube.com/watch?v=Y0KidGr9Z2Y) | Próximamente |
| M4·4 | Verificar información y trabajar con fuentes | Claude gratis · Chat de Claude | — | — | Próximamente |
| M4·5 | Criterios de éxito, casos de prueba y evaluación de calidad | Claude gratis (en el chat, con una hoja de evaluación) · Chat de Claude | Documentación oficial: «Define success criteria and build evaluations» | [▶ 1](https://www.youtube.com/watch?v=KIGBsQqZcNA) | Próximamente |
| M4·6 | Biblioteca de prompts reutilizables y control de versiones (evaluación del módulo) | Claude gratis · Chat de Claude (proyectos) | — | — | Próximamente |

## Módulo 5 · Prompting · Nivel 5: Aplicaciones profesionales (7 clases · 14 h)

- **Objetivo:** Diseñar instrucciones profesionales para los trabajos reales de tus otros cursos y de tu vida laboral.
- **Competencias:** Escribir instrucciones para desarrollar software (HTML, CSS, JavaScript y Python); analizar y corregir código; diseñar páginas web; automatizar tareas; investigar temas técnicos; analizar documentos PDF y Word; elaborar informes y documentación; gestionar proyectos; analizar oportunidades laborales y de negocio; organizar tu productividad personal.
- **Al terminar serás capaz de:** Tener una instrucción probada para cada tipo de trabajo que haces con frecuencia.
- **Necesitas antes:** Módulo 4. Para las clases de programación se recomienda el Módulo 1 de JavaScript o de Python: aquí no se enseña a programar, se enseña a pedir y a revisar.
- **Práctica:** Cada clase usa material real de otro curso de la academia (un ejercicio de JavaScript, un registro de Ciberseguridad, un plan de red) y termina con una instrucción probada para la biblioteca.
- **Evaluación del módulo:** Resolver un encargo profesional ficticio con instrucciones propias y demostrar que el resultado cumple los criterios.
- **Proyecto:** Las instrucciones de este módulo pasan a tu biblioteca.
- **Fuentes previstas** (se verifican al crear cada clase): Guía oficial «Prompting best practices»; materiales de los cursos de JavaScript, Python, Ciberseguridad y Redes de la academia.

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M5·1 | Prompts para desarrollar software: HTML, CSS, JavaScript y Python | Claude gratis · Chat de Claude | — | — | Próximamente |
| M5·2 | Prompts para analizar, revisar y corregir código | Claude gratis · Chat de Claude | — | — | Próximamente |
| M5·3 | Prompts para diseñar páginas web: estructura, estilo y accesibilidad | Claude gratis · Chat de Claude (artefactos) | — | — | Próximamente |
| M5·4 | Prompts para automatizar tareas: scripts, fórmulas y flujos | Claude gratis · Chat de Claude | — | — | Próximamente |
| M5·5 | Investigación técnica y análisis de documentos PDF y Word | Claude gratis (con límites de uso) · Chat de Claude | — | — | Próximamente |
| M5·6 | Informes, documentación y gestión de proyectos | Claude gratis · Chat de Claude | — | — | Próximamente |
| M5·7 | Oportunidades laborales, negocios y productividad personal (evaluación del módulo) | Claude gratis · Chat de Claude | — | — | Próximamente |

## Módulo 6 · Proyecto integrador: biblioteca profesional de prompts (4 clases · 8 h)

- **Objetivo:** Construir, probar y defender tu propia biblioteca profesional de prompts para Claude.
- **Competencias:** Diseñar una biblioteca por casos de uso; escribir criterios de prueba; transformar instrucciones deficientes en profesionales y justificar cada cambio; medir si el resultado cumple los criterios; presentar el trabajo.
- **Al terminar serás capaz de:** Entregar una biblioteca profesional de prompts probada y documentada.
- **Necesitas antes:** Módulo 5. Las instrucciones para agentes y automatización se diseñan y prueban con Claude gratis; ejecutarlas en Claude Code (curso IA: Claude, bloques Agentes y Automatización) recomienda Claude Pro.
- **Práctica:** Avances semanales revisados con la rúbrica del proyecto.
- **Evaluación del módulo:** Rúbrica: cobertura de los casos de uso, calidad de cada instrucción, pruebas y resultados, transformaciones justificadas, seguridad y presentación.
- **Proyecto:** Proyecto final del curso (ver más arriba).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M6·1 | Diseño de la biblioteca: casos de uso, plantillas y criterios de prueba | Claude gratis · Chat de Claude (proyectos) | — | — | Próximamente |
| M6·2 | Construcción y pruebas: investigación, documentos, programación, revisión de código y planificación | Claude gratis · Chat de Claude | — | — | Próximamente |
| M6·3 | Automatización, agentes y subagentes; de instrucción deficiente a profesional | Claude gratis para el diseño · recomendado Claude Pro para la práctica en Claude Code · Chat de Claude o Claude Code | — | — | Próximamente |
| M6·4 | Presentación y defensa: cambios justificados y resultados medidos | Claude gratis · Chat de Claude | — | — | Próximamente |

<!-- FIN: generado desde recursos/catalogo.js -->
