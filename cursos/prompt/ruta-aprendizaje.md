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

Diseñar instrucciones que produzcan resultados precisos, útiles y reproducibles, con técnicas fundamentales, estructuradas y avanzadas, y evaluarlas con criterios y casos de prueba.

- **Duración:** 5 módulos · 20 clases · 40 h de clase (2 h por clase). La práctica autónoma de cada clase se suma aparte.
- **Clases listas:** 0 de 20.
- **Siguiente clase por crear:** Módulo 1 · Clase 1: ¿Qué es un prompt y cómo lo interpreta Claude?.
- **Proyecto final del curso:** Biblioteca profesional de prompts versionada, con criterios de prueba y resultados medidos.

## Resumen de módulos

| Módulo | Clases | Horas | Listas | Necesitas antes |
|---|---|---|---|---|
| Módulo 1 · Fundamentos del prompting | 4 | 8 | 0 | Ninguno obligatorio |
| Módulo 2 · Técnicas fundamentales | 4 | 8 | 0 | Módulo 1 |
| Módulo 3 · Prompting estructurado | 4 | 8 | 0 | Módulo 2 |
| Módulo 4 · Prompting avanzado y evaluación | 4 | 8 | 0 | Módulo 3 |
| Módulo 5 · Aplicaciones y biblioteca profesional | 4 | 8 | 0 | Módulo 4 |
| **Total** | **20** | **40** | **0** | |

## Módulo 1 · Fundamentos del prompting (4 clases · 8 h)

- **Objetivo:** Escribir instrucciones claras con el contexto necesario.
- **Competencias:** Reconocer las partes de un prompt; escribir instrucciones claras y específicas; dar contexto, objetivo y audiencia; diagnosticar un mal resultado.
- **Al terminar serás capaz de:** Convertir un pedido vago en una instrucción clara.
- **Necesitas antes:** Curso «IA 1 · Fundamentos y uso de Claude».
- **Evaluación del módulo:** Diagnóstico y corrección de cinco prompts deficientes.
- **Fuentes previstas** (se verifican al crear cada clase): Tutorial interactivo de Anthropic (caps. 1 y 2), Prompting best practices.

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M1·1 | ¿Qué es un prompt y cómo lo interpreta Claude? | Gratis · Chat de Claude | Tutorial de Anthropic, cap. 1: Basic Prompt Structure | [▶ 1](https://www.youtube.com/watch?v=jrucUmU_l8s) | Próximamente · **siguiente por crear** |
| M1·2 | Instrucciones claras, directas y específicas | Gratis · Chat de Claude | Tutorial de Anthropic, cap. 2: Being Clear and Direct | [▶ 1](https://www.youtube.com/watch?v=A-uJeV7pSEY) | Próximamente |
| M1·3 | Contexto, objetivo y audiencia | Gratis · Chat de Claude | Prompting best practices: «Add context to improve performance» | [▶ 1](https://www.youtube.com/watch?v=1bXdjvRBvWk) | Próximamente |
| M1·4 | Diagnosticar un mal resultado (evaluación del módulo) | Gratis · Chat de Claude | — | [▶ 1](https://www.youtube.com/watch?v=UeuZM5Ulf6A) | Próximamente |

## Módulo 2 · Técnicas fundamentales (4 clases · 8 h)

- **Objetivo:** Aplicar roles, ejemplos, restricciones y formatos.
- **Competencias:** Asignar roles; usar ejemplos; fijar restricciones y formatos de salida; separar instrucciones de datos.
- **Al terminar serás capaz de:** Obtener respuestas consistentes y con el formato pedido.
- **Necesitas antes:** Módulo 1.
- **Evaluación del módulo:** Un prompt con rol, ejemplos, restricciones y formato, probado con tres entradas.
- **Fuentes previstas** (se verifican al crear cada clase): Tutorial de Anthropic (caps. 3, 4, 5 y 7), Prompting best practices.

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M2·1 | Roles y contextos | Gratis · Chat de Claude | Tutorial de Anthropic, cap. 3: Assigning Roles | [▶ 1](https://www.youtube.com/watch?v=ysPbXH0LpIE) | Próximamente |
| M2·2 | Ejemplos de entrada y salida (few-shot) | Gratis · Chat de Claude | Tutorial de Anthropic, cap. 7: Using Examples | — | Próximamente |
| M2·3 | Restricciones, condiciones y formatos de salida | Gratis · Chat de Claude | Tutorial de Anthropic, cap. 5: Formatting Output (la parte «Speaking for Claude» ya no aplica a los modelos actuales) | [▶ 1](https://www.youtube.com/watch?v=JgM54aFX924) | Próximamente |
| M2·4 | Separar instrucciones, datos y referencias (evaluación del módulo) | Gratis · Chat de Claude | Tutorial de Anthropic, cap. 4: Separating Data from Instructions | — | Próximamente |

## Módulo 3 · Prompting estructurado (4 clases · 8 h)

- **Objetivo:** Estructurar prompts complejos y reutilizables.
- **Competencias:** Usar etiquetas XML; crear plantillas con variables; trabajar con documentos extensos y citas; detectar ambigüedades.
- **Al terminar serás capaz de:** Diseñar plantillas reutilizables para tareas complejas.
- **Necesitas antes:** Módulo 2.
- **Evaluación del módulo:** Una plantilla estructurada probada con un documento extenso.
- **Fuentes previstas** (se verifican al crear cada clase): Prompting best practices (XML, contexto largo), tutorial de Anthropic (cap. 9).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M3·1 | Etiquetas XML para organizar prompts | Gratis · Chat de Claude | Prompting best practices: «Structure prompts with XML tags» | [▶ 1](https://www.youtube.com/watch?v=ysPbXH0LpIE) | Próximamente |
| M3·2 | Plantillas reutilizables y condiciones múltiples | Gratis · Chat de Claude | Tutorial de Anthropic, cap. 9: Building Complex Prompts | — | Próximamente |
| M3·3 | Documentos extensos y citas | Gratis (con límites de uso) · Chat de Claude | Prompting best practices: «Long context prompting» | — | Próximamente |
| M3·4 | Ambigüedades y contradicciones (evaluación del módulo) | Gratis · Chat de Claude | — | — | Próximamente |

## Módulo 4 · Prompting avanzado y evaluación (4 clases · 8 h)

- **Objetivo:** Resolver tareas complejas y medir la calidad de los prompts.
- **Competencias:** Descomponer y encadenar; razonar paso a paso e iterar; reducir alucinaciones y verificar; definir criterios de éxito y casos de prueba.
- **Al terminar serás capaz de:** Mejorar un prompt con iteraciones medidas.
- **Necesitas antes:** Módulo 3.
- **Evaluación del módulo:** Evaluación de un prompt con una hoja de casos de prueba.
- **Fuentes previstas** (se verifican al crear cada clase): Define success criteria and build evaluations, Reduce hallucinations (Anthropic).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M4·1 | Descomponer problemas y encadenar prompts | Gratis · Chat de Claude | Tutorial de Anthropic, apéndice: Chaining Prompts | — | Próximamente |
| M4·2 | Razonamiento paso a paso y mejora iterativa | Gratis · Chat de Claude | Tutorial de Anthropic, cap. 6: Precognition (Thinking Step by Step) | [▶ 1](https://www.youtube.com/watch?v=T9aRN5JkmL8&t=737s) | Próximamente |
| M4·3 | Alucinaciones y verificación con fuentes | Gratis · Chat de Claude | Tutorial de Anthropic, cap. 8: Avoiding Hallucinations | [▶ 1](https://www.youtube.com/watch?v=Y0KidGr9Z2Y) | Próximamente |
| M4·4 | Criterios de éxito, casos de prueba y evaluación | Gratis (en el chat, con una hoja de evaluación) · Chat de Claude | Documentación oficial: «Define success criteria and build evaluations» | [▶ 1](https://www.youtube.com/watch?v=KIGBsQqZcNA) | Próximamente |

## Módulo 5 · Aplicaciones y biblioteca profesional (4 clases · 8 h)

- **Objetivo:** Aplicar el prompting a programación, investigación, análisis y escritura.
- **Competencias:** Diseñar prompts por dominio; versionar y documentar una biblioteca de prompts.
- **Al terminar serás capaz de:** Entregar una biblioteca profesional de prompts probada.
- **Necesitas antes:** Módulo 4.
- **Evaluación del módulo:** Proyecto del curso con rúbrica.
- **Proyecto:** Proyecto final del curso (ver más arriba).
- **Fuentes previstas** (se verifican al crear cada clase): Prompting best practices (Anthropic).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M5·1 | Prompts para programación y revisión de código | Gratis · Chat de Claude | — | — | Próximamente |
| M5·2 | Prompts para investigación y análisis | Gratis · Chat de Claude | — | — | Próximamente |
| M5·3 | Prompts para escritura e informes | Gratis · Chat de Claude | — | — | Próximamente |
| M5·4 | Proyecto: biblioteca profesional de prompts (evaluación del curso) | Gratis · Chat de Claude (proyectos) | — | — | Próximamente |

<!-- FIN: generado desde recursos/catalogo.js -->
