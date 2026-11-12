# Ruta de aprendizaje: IA 4 · Herramientas, Skills y MCP

Cada clase dura **2 horas**. Curso 4 de 6 de la formación en IA, aprobado en
`PROPUESTA-IA-6-CURSOS.md` (versión 2). **Necesitas antes:** IA 1 e IA 2; para las clases de Claude Code, IA 3.

- **Clases:** usan el siguiente número de archivo libre (`clase-01`, `clase-02`…) con el id
  `extensiones-01`, `extensiones-02`… y ocupan el lugar que les toca dentro de su módulo.
- **Plan de Claude:** la columna «Plan de Claude» dice si la clase se hace con el plan gratuito o
  necesita uno de pago (Pro o superior). **Ninguna clase necesita la API de pago.** Pro tiene
  límites de uso (no es ilimitado).
- **Seguridad:** nunca pegues en Claude tokens, contraseñas ni datos personales; Claude Code se
  practica solo en carpetas de prueba.
- Las funciones y los límites de Claude cambian: cada clase se vuelve a verificar al crearla.

<!-- INICIO: generado desde recursos/catalogo.js con "node herramientas/generar-rutas.js". No editar a mano. -->

## Meta del curso

Comprender y ampliar las capacidades de Claude: cómo usa herramientas, cómo diseñar y crear skills reutilizables, y cómo conectarlo con datos y servicios mediante MCP, con seguridad.

- **Duración:** 4 módulos · 14 clases · 28 h de clase (2 h por clase). La práctica autónoma de cada clase se suma aparte.
- **Clases listas:** 0 de 14.
- **Siguiente clase por crear:** Módulo 1 · Clase 1: Qué es una herramienta y cómo la usa Claude.
- **Proyecto final del curso:** El kit del equipo de agentes: una skill de investigación, una skill de calidad y una conexión MCP confiable.

## Resumen de módulos

| Módulo | Clases | Horas | Listas | Necesitas antes |
|---|---|---|---|---|
| Módulo 1 · Herramientas | 3 | 6 | 0 | Ninguno obligatorio |
| Módulo 2 · Skills | 4 | 8 | 0 | Módulo 1 |
| Módulo 3 · MCP (Model Context Protocol) | 5 | 10 | 0 | Módulo 1 |
| Módulo 4 · Integración: plugins y kit del equipo | 2 | 4 | 0 | Módulos 2 y 3 |
| **Total** | **14** | **28** | **0** | |

## Módulo 1 · Herramientas (3 clases · 6 h)

- **Objetivo:** Entender cómo usa Claude las herramientas y cómo restringirlas.
- **Competencias:** Explicar el ciclo de uso de herramientas; usar las integradas del chat; distinguir integradas y externas; restringir herramientas en Claude Code.
- **Al terminar serás capaz de:** Decidir qué herramientas necesita una tarea y limitarlas.
- **Necesitas antes:** IA 1 e IA 2; para las clases de Claude Code, IA 3.
- **Evaluación del módulo:** Mapa de herramientas de una tarea con sus restricciones.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude (tool use), documentación de Claude Code (permissions).

| Clase | Tema | Plan de Claude | Videos | Estado |
|---|---|---|---|---|
| M1·1 | Qué es una herramienta y cómo la usa Claude | Gratis · Chat de Claude | — | Próximamente · **siguiente por crear** |
| M1·2 | Herramientas integradas del chat | Gratis · Chat de Claude | — | Próximamente |
| M1·3 | Integradas, externas y cómo restringirlas | Gratis (diseño) o pago (práctica en Claude Code) · Chat de Claude o Claude Code | — | Próximamente |

## Módulo 2 · Skills (4 clases · 8 h)

- **Objetivo:** Diseñar, crear y reutilizar skills.
- **Competencias:** Distinguir skill, herramienta y agente; escribir SKILL.md; crear y probar skills en el chat; diseñar skills especializadas para Claude Code.
- **Al terminar serás capaz de:** Convertir un procedimiento probado en una skill reutilizable.
- **Necesitas antes:** Módulo 1.
- **Evaluación del módulo:** Una skill propia con su descripción, archivos de apoyo y pruebas.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude Code (skills), centro de ayuda (skills).

| Clase | Tema | Plan de Claude | Videos | Estado |
|---|---|---|---|---|
| M2·1 | Qué es una skill; skill, herramienta y agente | Gratis (hay que activar la ejecución de código) · Chat de Claude | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=7019s) | Próximamente |
| M2·2 | Estructura de una skill: SKILL.md y archivos de apoyo | Gratis (hay que activar la ejecución de código) · Chat de Claude | — | Próximamente |
| M2·3 | Crear y probar skills en el chat | Gratis (hay que activar la ejecución de código) · Chat de Claude | — | Próximamente |
| M2·4 | Diseñar skills especializadas y reutilizables | Pago (Pro o superior) · Claude Code | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=8485s) | Próximamente |

## Módulo 3 · MCP (Model Context Protocol) (5 clases · 10 h)

- **Objetivo:** Comprender MCP y conectar Claude con datos y servicios de forma segura.
- **Competencias:** Explicar MCP y su arquitectura; agregar un conector; configurar servidores en Claude Code; evaluar su seguridad.
- **Al terminar serás capaz de:** Conectar Claude a una fuente externa confiable con MCP.
- **Necesitas antes:** Módulo 1.
- **Evaluación del módulo:** Una conexión MCP documentada con su evaluación de seguridad.
- **Fuentes previstas** (se verifican al crear cada clase): modelcontextprotocol.io (arquitectura), documentación de Claude Code (MCP), centro de ayuda (conectores).

| Clase | Tema | Plan de Claude | Videos | Estado |
|---|---|---|---|---|
| M3·1 | Qué es MCP y qué problema resuelve | Gratis · Chat de Claude | [▶ 1](https://www.youtube.com/watch?v=T4-BdZQUCSE) | Próximamente |
| M3·2 | Arquitectura de MCP: host, cliente, servidor y primitivas | Gratis · Chat de Claude | — | Próximamente |
| M3·3 | Conectores en Claude: un servidor MCP remoto | Gratis (1 conector personalizado) · Chat de Claude | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=8485s) | Próximamente |
| M3·4 | MCP en Claude Code: claude mcp add y ámbitos | Pago (Pro o superior) · Claude Code | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=7775s) | Próximamente |
| M3·5 | Seguridad y permisos en MCP | Gratis (diseño) o pago (práctica en Claude Code) · Chat de Claude o Claude Code | — | Próximamente |

## Módulo 4 · Integración: plugins y kit del equipo (2 clases · 4 h)

- **Objetivo:** Empaquetar componentes y construir el kit del equipo de agentes.
- **Competencias:** Instalar y evaluar plugins; integrar skills y MCP en un kit probado.
- **Al terminar serás capaz de:** Entregar el kit que usarán los agentes.
- **Necesitas antes:** Módulos 2 y 3.
- **Evaluación del módulo:** Proyecto del curso.
- **Proyecto:** Proyecto final del curso (ver más arriba).
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude Code (plugins).

| Clase | Tema | Plan de Claude | Videos | Estado |
|---|---|---|---|---|
| M4·1 | Plugins: skills, MCP, hooks y subagentes en un paquete | Pago (Pro o superior) · Claude Code | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=9023s) | Próximamente |
| M4·2 | Proyecto: el kit del equipo (evaluación del curso) | Gratis (diseño) o pago (práctica en Claude Code) · Chat de Claude o Claude Code | — | Próximamente |

<!-- FIN: generado desde recursos/catalogo.js -->
