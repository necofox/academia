# Ruta de aprendizaje: IA 5 · Agentes y subagentes de IA

Cada clase dura **2 horas**. Curso 5 de 6 de la formación en IA, aprobado en
`PROPUESTA-IA-6-CURSOS.md` (versión 2). **Necesitas antes:** IA 3 e IA 4; IA 2, Módulo 4.

- **Clases:** usan el siguiente número de archivo libre (`clase-01`, `clase-02`…) con el id
  `agentes-01`, `agentes-02`… y ocupan el lugar que les toca dentro de su módulo.
- **Plan de Claude:** la columna «Plan de Claude» dice si la clase se hace con el plan gratuito o
  necesita uno de pago (Pro o superior). **Ninguna clase necesita la API de pago.** Pro tiene
  límites de uso (no es ilimitado).
- **Seguridad:** nunca pegues en Claude tokens, contraseñas ni datos personales; Claude Code se
  practica solo en carpetas de prueba.
- Las funciones y los límites de Claude cambian: cada clase se vuelve a verificar al crearla.

<!-- INICIO: generado desde recursos/catalogo.js con "node herramientas/generar-rutas.js". No editar a mano. -->

## Meta del curso

Diseñar sistemas de agentes especializados que trabajen de forma coordinada y supervisada: arquitectura, subagentes, delegación, coordinación, evaluación y supervisión humana.

- **Duración:** 4 módulos · 13 clases · 26 h de clase (2 h por clase). La práctica autónoma de cada clase se suma aparte.
- **Clases listas:** 0 de 13.
- **Siguiente clase por crear:** Módulo 1 · Clase 1: Agente, chatbot y flujo de trabajo.
- **Proyecto final del curso:** Los tres primeros agentes del equipo: investigador, analista y revisor de calidad, con el kit del curso IA 4.

## Resumen de módulos

| Módulo | Clases | Horas | Listas | Necesitas antes |
|---|---|---|---|---|
| Módulo 1 · Qué es un agente | 4 | 8 | 0 | Ninguno obligatorio |
| Módulo 2 · Subagentes | 4 | 8 | 0 | Módulo 1 |
| Módulo 3 · Coordinación | 3 | 6 | 0 | Módulo 2 |
| Módulo 4 · Supervisión y proyecto | 2 | 4 | 0 | Módulo 3 |
| **Total** | **13** | **26** | **0** | |

## Módulo 1 · Qué es un agente (4 clases · 8 h)

- **Objetivo:** Comprender qué es un agente, cómo se compone y sus riesgos.
- **Competencias:** Distinguir agente, chatbot y flujo; describir su arquitectura; planificar tareas; identificar riesgos y costos.
- **Al terminar serás capaz de:** Decidir cuándo conviene un agente y cómo componerlo.
- **Necesitas antes:** IA 3 e IA 4; IA 2, Módulo 4.
- **Evaluación del módulo:** Diseño en papel de un agente con sus componentes y riesgos.
- **Fuentes previstas** (se verifican al crear cada clase): Building effective agents (Anthropic), documentación de Claude Code.

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M1·1 | Agente, chatbot y flujo de trabajo | Gratis · Chat de Claude | Artículo oficial «Building effective agents» | [▶ 1](https://www.youtube.com/watch?v=LP5OCa20Zpg) [▶ 2](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=499s) | Próximamente · **siguiente por crear** |
| M1·2 | Arquitectura de un agente | Gratis · Chat de Claude | — | [▶ 1](https://www.youtube.com/watch?v=D7_ipDqhtwk) | Próximamente |
| M1·3 | Planificación y ejecución de tareas | Pago (Pro o superior) · Claude Code | — | — | Próximamente |
| M1·4 | Riesgos y límites de los agentes | Gratis · Chat de Claude | — | — | Próximamente |

## Módulo 2 · Subagentes (4 clases · 8 h)

- **Objetivo:** Crear subagentes especializados con capacidades limitadas.
- **Competencias:** Explicar el contexto propio de un subagente; crearlo; asignarle herramientas, skills y conexiones; diseñar la entrega de resultados.
- **Al terminar serás capaz de:** Crear subagentes especializados que devuelvan resultados útiles.
- **Necesitas antes:** Módulo 1.
- **Evaluación del módulo:** Un subagente de solo lectura con su formato de entrega.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude Code (sub-agents).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M2·1 | Qué son los subagentes | Pago (Pro o superior) · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=9225s) | Próximamente |
| M2·2 | Crear subagentes especializados | Pago (Pro o superior) · Claude Code | — | — | Próximamente |
| M2·3 | Roles, responsabilidades y capacidades de cada subagente | Pago (Pro o superior) · Claude Code | — | — | Próximamente |
| M2·4 | Contexto y transferencia de resultados | Pago (Pro o superior) · Claude Code | — | — | Próximamente |

## Módulo 3 · Coordinación (3 clases · 6 h)

- **Objetivo:** Coordinar varios agentes y evaluar su trabajo.
- **Competencias:** Elegir patrones de delegación; coordinar agentes; evaluar resultados con criterios.
- **Al terminar serás capaz de:** Coordinar varios agentes y medir la calidad de su trabajo.
- **Necesitas antes:** Módulo 2.
- **Evaluación del módulo:** Un flujo con dos subagentes y su evaluación.
- **Fuentes previstas** (se verifican al crear cada clase): Building effective agents; documentación de Claude Code (sub-agents, agent teams).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M3·1 | Delegación y patrones de trabajo | Gratis (diseño) o pago (práctica en Claude Code) · Chat de Claude o Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=D7_ipDqhtwk) | Próximamente |
| M3·2 | Coordinación y comunicación entre agentes | Pago (Pro o superior) · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=9225s) | Próximamente |
| M3·3 | Evaluación y control de calidad de agentes | Pago (Pro o superior) · Claude Code | Documentación oficial: «Define success criteria and build evaluations» | — | Próximamente |

## Módulo 4 · Supervisión y proyecto (2 clases · 4 h)

- **Objetivo:** Diseñar la supervisión humana y crear los tres primeros agentes del equipo.
- **Competencias:** Colocar aprobaciones en un diseño; construir y evaluar tres subagentes que trabajen juntos.
- **Al terminar serás capaz de:** Entregar investigador, analista y revisor funcionando.
- **Necesitas antes:** Módulo 3.
- **Evaluación del módulo:** Proyecto del curso.
- **Proyecto:** Proyecto final del curso (ver más arriba).
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude Code (permissions, sub-agents).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M4·1 | Supervisión humana al diseñar sistemas de agentes | Pago (Pro o superior) · Claude Code | — | — | Próximamente |
| M4·2 | Proyecto: investigador, analista y revisor (evaluación del curso) | Pago (Pro o superior) · Claude Code | — | — | Próximamente |

<!-- FIN: generado desde recursos/catalogo.js -->
