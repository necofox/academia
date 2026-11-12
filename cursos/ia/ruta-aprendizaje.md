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

Usar Claude con criterio y seguridad, desde el chat hasta Claude Code, y ampliar sus capacidades con herramientas, skills y MCP para diseñar, coordinar y automatizar un equipo de agentes especializados, siempre con supervisión humana y sin depender de la API de pago.

- **Duración:** 21 módulos · 71 clases · 142 h de clase (2 h por clase). La práctica autónoma de cada clase se suma aparte.
- **Clases listas:** 2 de 71.
- **Siguiente clase por crear:** Módulo 1 · Clase 3: Primeros pasos: conversaciones, archivos, búsqueda web y estilos.
- **Proyecto final del curso:** Equipo de cinco agentes (coordinador, investigador, analista, programador y revisor de calidad), construido por etapas: la aplicación base (bloque Claude Code), el kit de skills y MCP, los tres primeros agentes y el equipo completo automatizado, con permisos, aprobaciones humanas, validación y pruebas de extremo a extremo.

## Resumen de módulos

| Módulo | Clases | Horas | Listas | Necesitas antes |
|---|---|---|---|---|
| Módulo 1 · Fundamentos de la IA generativa y de Claude | 4 | 8 | 2 | Ninguno obligatorio |
| Módulo 2 · Fundamentos · Trabajar con Claude día a día | 3 | 6 | 0 | Módulo 1 |
| Módulo 3 · Fundamentos · Claude para estudiar, investigar y producir | 4 | 8 | 0 | Módulo 2 |
| Módulo 4 · Fundamentos · Uso responsable y funciones avanzadas | 2 | 4 | 0 | Módulo 3 |
| Módulo 5 · Claude Code · Primeros pasos | 4 | 8 | 0 | Módulo 4 |
| Módulo 6 · Claude Code · Trabajar con proyectos | 4 | 8 | 0 | Módulo 5 |
| Módulo 7 · Claude Code · Contexto y memoria | 3 | 6 | 0 | Módulo 6 |
| Módulo 8 · Claude Code · Herramientas, permisos y hooks | 4 | 8 | 0 | Módulo 7 |
| Módulo 9 · Claude Code · Buenas prácticas y aplicación base | 2 | 4 | 0 | Módulo 8 |
| Módulo 10 · Herramientas, Skills y MCP · Herramientas | 3 | 6 | 0 | Módulo 4 |
| Módulo 11 · Herramientas, Skills y MCP · Skills | 4 | 8 | 0 | Módulo 10 |
| Módulo 12 · Herramientas, Skills y MCP · MCP (Model Context Protocol) | 5 | 10 | 0 | Módulo 10 |
| Módulo 13 · Herramientas, Skills y MCP · Plugins y kit del equipo | 2 | 4 | 0 | Módulos 11 y 12 |
| Módulo 14 · Agentes · Qué es un agente | 4 | 8 | 0 | Módulos 9 y 13 |
| Módulo 15 · Agentes · Subagentes | 4 | 8 | 0 | Módulo 14 |
| Módulo 16 · Agentes · Coordinación | 3 | 6 | 0 | Módulo 15 |
| Módulo 17 · Agentes · Supervisión y tres primeros agentes | 2 | 4 | 0 | Módulo 16 |
| Módulo 18 · Automatización · Fundamentos | 3 | 6 | 0 | Módulo 17 |
| Módulo 19 · Automatización · Control y seguridad | 3 | 6 | 0 | Módulo 18 |
| Módulo 20 · Automatización · Proyecto integrador I: el equipo completo | 4 | 8 | 0 | Módulo 19 |
| Módulo 21 · Automatización · Proyecto integrador II: automatización y control | 4 | 8 | 0 | Módulo 20 |
| **Total** | **71** | **142** | **2** | |

## Módulo 1 · Fundamentos de la IA generativa y de Claude (4 clases · 8 h)

- **Objetivo:** Entender qué es Claude, cómo funciona, sus límites, planes y modelos, y dar los primeros pasos.
- **Competencias:** Explicar qué es un modelo de lenguaje y sus límites; elegir plan y modelo; usar la interfaz, la configuración y las conversaciones; comparar Claude con otras herramientas de IA.
- **Al terminar serás capaz de:** Elegir y configurar Claude con criterio para tus tareas.
- **Necesitas antes:** Ninguno. Una cuenta de Claude; el plan gratuito sirve.
- **Evaluación del módulo:** Examen de conceptos y elección argumentada de plan y modelo para tres casos.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación oficial de Anthropic (glosario, modelos, planes, centro de ayuda), NIST.

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M1·1 | ¿Qué es la IA generativa? Modelos de lenguaje, capacidades y límites | Gratis · Chat de Claude | — | [▶ 1](https://www.youtube.com/watch?v=0K5Knnq2ZRk) | ✔ Lista: `clases/clase-01.html` (id `ia-01`) |
| M1·2 | Claude y Claude Code: planes, apps, modelos y límites de uso | Gratis · Chat de Claude | — | [▶ 1](https://www.youtube.com/watch?v=vW4MFfw8taU) [▶ 2](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=2018s) | ✔ Lista: `clases/clase-02.html` (id `ia-02`) |
| M1·3 | Primeros pasos: conversaciones, archivos, búsqueda web y estilos | Claude gratis · Chat de Claude | — | — | Próximamente · **siguiente por crear** |
| M1·4 | Claude frente a otras herramientas de IA: criterios para elegir | Claude gratis · Chat de Claude | — | — | Próximamente |

## Módulo 2 · Fundamentos · Trabajar con Claude día a día (3 clases · 6 h)

- **Objetivo:** Organizar el trabajo con proyectos y trabajar con archivos y artefactos.
- **Competencias:** Crear proyectos con instrucciones y conocimiento; analizar archivos; crear artefactos.
- **Al terminar serás capaz de:** Usar proyectos, archivos y artefactos para tu trabajo diario.
- **Necesitas antes:** Módulo 1.
- **Evaluación del módulo:** Un proyecto de Claude con instrucciones y un artefacto creado a partir de un archivo propio.
- **Fuentes previstas** (se verifican al crear cada clase): Centro de ayuda de Claude: proyectos, archivos y artefactos.

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M2·1 | Proyectos: instrucciones y conocimiento permanentes | Claude gratis (hasta 5 proyectos) · Chat de Claude | — | — | Próximamente |
| M2·2 | Archivos y documentos: PDF, hojas de cálculo e imágenes | Claude gratis (con límites de uso) · Chat de Claude | — | — | Próximamente |
| M2·3 | Artefactos y ejecución de código | Claude gratis (hay que activar la ejecución de código) · Chat de Claude | — | — | Próximamente |

## Módulo 3 · Fundamentos · Claude para estudiar, investigar y producir (4 clases · 8 h)

- **Objetivo:** Usar Claude para estudiar, investigar, redactar y resolver problemas, verificando siempre.
- **Competencias:** Estudiar con Claude como tutor; investigar con fuentes verificables; redactar y revisar textos propios; comprobar razonamientos.
- **Al terminar serás capaz de:** Aplicar Claude a tus estudios y trabajos sin perder el criterio propio.
- **Necesitas antes:** Módulo 2.
- **Evaluación del módulo:** Tres tareas reales (estudio, investigación y redacción) con su verificación documentada.
- **Fuentes previstas** (se verifican al crear cada clase): Centro de ayuda de Claude (búsqueda web, Research), Reduce hallucinations (Anthropic).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M3·1 | Estudiar con Claude: explicaciones, resúmenes y autoevaluación | Claude gratis · Chat de Claude | — | — | Próximamente |
| M3·2 | Investigar y verificar fuentes | Claude gratis con búsqueda web; Research requiere Claude Pro (opcional) · Chat de Claude | — | — | Próximamente |
| M3·3 | Redactar y revisar textos manteniendo tu voz | Claude gratis · Chat de Claude | — | — | Próximamente |
| M3·4 | Resolver problemas y comprobar el razonamiento | Claude gratis · Chat de Claude | — | — | Próximamente |

## Módulo 4 · Fundamentos · Uso responsable y funciones avanzadas (2 clases · 4 h)

- **Objetivo:** Usar Claude de forma responsable y decidir qué funciones avanzadas valen la pena.
- **Competencias:** Aplicar el marco de fluidez en IA (4D) y la política de uso; proteger la privacidad; evaluar memoria, conectores, Claude in Chrome y Cowork.
- **Al terminar serás capaz de:** Usar Claude con seguridad y decidir cuándo conviene una función de pago.
- **Necesitas antes:** Módulo 3.
- **Evaluación del módulo:** Kit de estudio: un proyecto de Claude con instrucciones, materiales de un curso y un método de verificación de fuentes.
- **Fuentes previstas** (se verifican al crear cada clase): Anthropic Academy «AI Fluency», política de uso, centro de ayuda (memoria, conectores, Chrome, Cowork).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M4·1 | Fluidez en IA y uso responsable: el marco 4D, privacidad, verificación y política de uso | Claude gratis · Chat de Claude | — | [▶ 1](https://www.youtube.com/watch?v=W4Ua6XFfX9w) [▶ 2](https://www.youtube.com/watch?v=EljzyfdYkrc) | Próximamente |
| M4·2 | Memoria, conectores, Claude in Chrome y Cowork: cuándo valen la pena (evaluación del bloque) | Claude gratis con límites; Claude in Chrome y Cowork requieren Claude Pro · Chat de Claude | — | — | Próximamente |

## Módulo 5 · Claude Code · Primeros pasos (4 clases · 8 h)

- **Objetivo:** Entender qué es Claude Code e instalarlo.
- **Competencias:** Distinguir Chat, Code y Cowork; usar la terminal; instalar, autenticar y dar las primeras órdenes.
- **Al terminar serás capaz de:** Instalar Claude Code y dar órdenes básicas con seguridad.
- **Necesitas antes:** Módulo 4. Recomendado: Prompt Engineering, Módulos 1 a 3; JavaScript o Python, Módulo 1, y la clase de Git. La práctica recomienda Claude Pro.
- **Evaluación del módulo:** Primera sesión supervisada en una carpeta de prueba.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude Code (overview, setup).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M5·1 | Qué es Claude Code; Chat, Code y Cowork | Claude gratis · Chat de Claude | — | [▶ 1](https://www.youtube.com/watch?v=vW4MFfw8taU) [▶ 2](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=0s) | Próximamente |
| M5·2 | Terminal y comandos básicos (nivelación) | No necesita Claude (terminal del computador); se puede saltar con JavaScript M5·1 · Terminal del computador | — | [▶ 1](https://www.youtube.com/watch?v=3GymExBkKjE&t=1440s) | Próximamente |
| M5·3 | Instalación, autenticación e interfaz | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=755s) [▶ 2](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=1115s) | Próximamente |
| M5·4 | Acciones, modos, comandos básicos y modelos | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=1384s) [▶ 2](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=2018s) | Próximamente |

## Módulo 6 · Claude Code · Trabajar con proyectos (4 clases · 8 h)

- **Objetivo:** Desarrollar con Claude Code planificando y revisando cada cambio.
- **Competencias:** Crear proyectos; leer y modificar archivos; usar el modo plan; controlar cambios con checkpoints y Git; depurar y probar.
- **Al terminar serás capaz de:** Desarrollar una funcionalidad con plan, revisión y pruebas.
- **Necesitas antes:** Módulo 5.
- **Evaluación del módulo:** Una funcionalidad implementada con plan aprobado y pruebas.
- **Fuentes previstas** (se verifican al crear cada clase): Claude Code best practices.

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M6·1 | Crear un proyecto; leer y modificar archivos | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=DAQJvGjlgVM) | Próximamente |
| M6·2 | Modo plan: planificar, revisar y aprobar | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=gv0WHhKelSE) [▶ 2](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=2733s) | Próximamente |
| M6·3 | Checkpoints, Git y control de cambios | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=3550s) | Próximamente |
| M6·4 | Desarrollo, depuración y pruebas | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | — | Próximamente |

## Módulo 7 · Claude Code · Contexto y memoria (3 clases · 6 h)

- **Objetivo:** Gestionar el contexto y la memoria del proyecto.
- **Competencias:** Explicar la ventana de contexto y el context engineering; escribir CLAUDE.md; definir reglas y Auto Memory.
- **Al terminar serás capaz de:** Dar a Claude Code el contexto justo para tu proyecto.
- **Necesitas antes:** Módulo 6.
- **Evaluación del módulo:** Un CLAUDE.md breve y reglas de proyecto revisadas.
- **Fuentes previstas** (se verifican al crear cada clase): Effective context engineering for AI agents; documentación de Claude Code (memory).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M7·1 | Contexto, memoria de trabajo y context engineering | Claude gratis (parte conceptual) · recomendado Claude Pro para la práctica en Claude Code · Chat de Claude o Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=4146s) | Próximamente |
| M7·2 | CLAUDE.md y referencias a archivos | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=4611s) | Próximamente |
| M7·3 | Reglas de proyecto y Auto Memory | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=5498s) | Próximamente |

## Módulo 8 · Claude Code · Herramientas, permisos y hooks (4 clases · 8 h)

- **Objetivo:** Supervisar herramientas, permisos, hooks y skills.
- **Competencias:** Observar y aprobar herramientas; configurar reglas allow, ask y deny; crear hooks de protección; usar y ejecutar skills y comandos.
- **Al terminar serás capaz de:** Trabajar con Claude Code bajo reglas que tú controlas.
- **Necesitas antes:** Módulo 7.
- **Evaluación del módulo:** Configuración de permisos y un hook que bloquea una acción peligrosa.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude Code (permissions, hooks, skills).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M8·1 | Observar y aprobar las herramientas mientras trabajas | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | — | Próximamente |
| M8·2 | Permisos y aprobaciones | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=2509s) [▶ 2](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=10826s) | Próximamente |
| M8·3 | Hooks y controles de ejecución | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=10144s) | Próximamente |
| M8·4 | Usar, configurar y ejecutar skills y comandos | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=6167s) | Próximamente |

## Módulo 9 · Claude Code · Buenas prácticas y aplicación base (2 clases · 4 h)

- **Objetivo:** Aplicar buenas prácticas y entregar la aplicación base sobre la que trabajará el equipo de agentes.
- **Competencias:** Aplicar una lista de seguridad; desarrollar y mantener un proyecto supervisado.
- **Al terminar serás capaz de:** Entregar la aplicación base con CLAUDE.md, permisos, un hook de protección y pruebas.
- **Necesitas antes:** Módulo 8.
- **Evaluación del módulo:** Proyecto del bloque: la aplicación base.
- **Proyecto:** Primera pieza del proyecto de cinco agentes (ver más arriba).
- **Fuentes previstas** (se verifican al crear cada clase): Claude Code best practices.

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M9·1 | Buenas prácticas y seguridad | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=gv0WHhKelSE) | Próximamente |
| M9·2 | Proyecto: la aplicación base del equipo (evaluación del bloque) | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | — | Próximamente |

## Módulo 10 · Herramientas, Skills y MCP · Herramientas (3 clases · 6 h)

- **Objetivo:** Entender cómo usa Claude las herramientas y cómo restringirlas.
- **Competencias:** Explicar el ciclo de uso de herramientas; usar las integradas del chat; distinguir integradas y externas; restringir herramientas en Claude Code.
- **Al terminar serás capaz de:** Decidir qué herramientas necesita una tarea y limitarlas.
- **Necesitas antes:** Módulo 4. Para las clases que se hacen en Claude Code conviene el bloque Claude Code (Módulos 5 a 9).
- **Evaluación del módulo:** Mapa de herramientas de una tarea con sus restricciones.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude (tool use), documentación de Claude Code (permissions).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M10·1 | Qué es una herramienta y cómo la usa Claude | Claude gratis · Chat de Claude | — | — | Próximamente |
| M10·2 | Herramientas integradas del chat | Claude gratis · Chat de Claude | — | — | Próximamente |
| M10·3 | Integradas, externas y cómo restringirlas | Claude gratis para el diseño · recomendado Claude Pro para la práctica en Claude Code · Chat de Claude o Claude Code | — | — | Próximamente |

## Módulo 11 · Herramientas, Skills y MCP · Skills (4 clases · 8 h)

- **Objetivo:** Diseñar, crear y reutilizar skills.
- **Competencias:** Distinguir skill, herramienta y agente; escribir SKILL.md; crear y probar skills en el chat; diseñar skills especializadas para Claude Code.
- **Al terminar serás capaz de:** Convertir un procedimiento probado en una skill reutilizable.
- **Necesitas antes:** Módulo 10.
- **Evaluación del módulo:** Una skill propia con su descripción, archivos de apoyo y pruebas.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude Code (skills), centro de ayuda (skills).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M11·1 | Qué es una skill; skill, herramienta y agente | Claude gratis (hay que activar la ejecución de código) · Chat de Claude | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=7019s) | Próximamente |
| M11·2 | Estructura de una skill: SKILL.md y archivos de apoyo | Claude gratis (hay que activar la ejecución de código) · Chat de Claude | — | — | Próximamente |
| M11·3 | Crear y probar skills en el chat | Claude gratis (hay que activar la ejecución de código) · Chat de Claude | — | — | Próximamente |
| M11·4 | Diseñar skills especializadas y reutilizables | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=8485s) | Próximamente |

## Módulo 12 · Herramientas, Skills y MCP · MCP (Model Context Protocol) (5 clases · 10 h)

- **Objetivo:** Comprender MCP y conectar Claude con datos y servicios de forma segura.
- **Competencias:** Explicar MCP y su arquitectura; agregar un conector; configurar servidores en Claude Code; evaluar su seguridad.
- **Al terminar serás capaz de:** Conectar Claude a una fuente externa confiable con MCP.
- **Necesitas antes:** Módulo 10.
- **Evaluación del módulo:** Una conexión MCP documentada con su evaluación de seguridad.
- **Fuentes previstas** (se verifican al crear cada clase): modelcontextprotocol.io (arquitectura), documentación de Claude Code (MCP), centro de ayuda (conectores).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M12·1 | Qué es MCP y qué problema resuelve | Claude gratis · Chat de Claude | — | [▶ 1](https://www.youtube.com/watch?v=T4-BdZQUCSE) | Próximamente |
| M12·2 | Arquitectura de MCP: host, cliente, servidor y primitivas | Claude gratis · Chat de Claude | — | — | Próximamente |
| M12·3 | Conectores en Claude: un servidor MCP remoto | Claude gratis (1 conector personalizado) · Chat de Claude | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=8485s) | Próximamente |
| M12·4 | MCP en Claude Code: claude mcp add y ámbitos | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=7775s) | Próximamente |
| M12·5 | Seguridad y permisos en MCP | Claude gratis para el diseño · recomendado Claude Pro para la práctica en Claude Code · Chat de Claude o Claude Code | — | — | Próximamente |

## Módulo 13 · Herramientas, Skills y MCP · Plugins y kit del equipo (2 clases · 4 h)

- **Objetivo:** Empaquetar componentes y construir el kit del equipo de agentes.
- **Competencias:** Instalar y evaluar plugins; integrar skills y MCP en un kit probado.
- **Al terminar serás capaz de:** Entregar el kit que usarán los agentes.
- **Necesitas antes:** Módulos 11 y 12.
- **Evaluación del módulo:** Proyecto del bloque: dos skills (investigar con fuentes y revisar calidad) y una conexión MCP confiable.
- **Proyecto:** Segunda pieza del proyecto de cinco agentes (ver más arriba).
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude Code (plugins).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M13·1 | Plugins: skills, MCP, hooks y subagentes en un paquete | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=9023s) | Próximamente |
| M13·2 | Proyecto: el kit del equipo (evaluación del bloque) | Claude gratis para el diseño · recomendado Claude Pro para la práctica en Claude Code · Chat de Claude o Claude Code | — | — | Próximamente |

## Módulo 14 · Agentes · Qué es un agente (4 clases · 8 h)

- **Objetivo:** Comprender qué es un agente, cómo se compone y sus riesgos.
- **Competencias:** Distinguir agente, chatbot y flujo; describir su arquitectura; planificar tareas; identificar riesgos y consumo.
- **Al terminar serás capaz de:** Decidir cuándo conviene un agente y cómo componerlo.
- **Necesitas antes:** Módulos 9 y 13. Recomendado: Prompt Engineering, Módulo 4 (criterios de éxito y evaluación).
- **Evaluación del módulo:** Diseño en papel de un agente con sus componentes y riesgos.
- **Fuentes previstas** (se verifican al crear cada clase): Building effective agents (Anthropic), documentación de Claude Code.

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M14·1 | Agente, chatbot y flujo de trabajo | Claude gratis · Chat de Claude | Artículo oficial «Building effective agents» | [▶ 1](https://www.youtube.com/watch?v=LP5OCa20Zpg) [▶ 2](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=499s) | Próximamente |
| M14·2 | Arquitectura de un agente | Claude gratis · Chat de Claude | — | [▶ 1](https://www.youtube.com/watch?v=D7_ipDqhtwk) | Próximamente |
| M14·3 | Planificación y ejecución de tareas | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | — | Próximamente |
| M14·4 | Riesgos y límites de los agentes | Claude gratis · Chat de Claude | — | — | Próximamente |

## Módulo 15 · Agentes · Subagentes (4 clases · 8 h)

- **Objetivo:** Crear subagentes especializados con capacidades limitadas.
- **Competencias:** Explicar el contexto propio de un subagente; crearlo; asignarle herramientas, skills y conexiones; diseñar la entrega de resultados.
- **Al terminar serás capaz de:** Crear subagentes especializados que devuelvan resultados útiles.
- **Necesitas antes:** Módulo 14.
- **Evaluación del módulo:** Un subagente de solo lectura con su formato de entrega.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude Code (sub-agents).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M15·1 | Qué son los subagentes | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=9225s) | Próximamente |
| M15·2 | Crear subagentes especializados | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | — | Próximamente |
| M15·3 | Roles, responsabilidades y capacidades de cada subagente | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | — | Próximamente |
| M15·4 | Contexto y transferencia de resultados | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | — | Próximamente |

## Módulo 16 · Agentes · Coordinación (3 clases · 6 h)

- **Objetivo:** Coordinar varios agentes y evaluar su trabajo.
- **Competencias:** Elegir patrones de delegación; coordinar agentes; evaluar resultados con criterios.
- **Al terminar serás capaz de:** Coordinar varios agentes y medir la calidad de su trabajo.
- **Necesitas antes:** Módulo 15.
- **Evaluación del módulo:** Un flujo con dos subagentes y su evaluación.
- **Fuentes previstas** (se verifican al crear cada clase): Building effective agents; documentación de Claude Code (sub-agents, agent teams).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M16·1 | Delegación y patrones de trabajo | Claude gratis para el diseño · recomendado Claude Pro para la práctica en Claude Code · Chat de Claude o Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=D7_ipDqhtwk) | Próximamente |
| M16·2 | Coordinación y comunicación entre agentes | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=9225s) | Próximamente |
| M16·3 | Evaluación y control de calidad de agentes | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | Documentación oficial: «Define success criteria and build evaluations» | — | Próximamente |

## Módulo 17 · Agentes · Supervisión y tres primeros agentes (2 clases · 4 h)

- **Objetivo:** Diseñar la supervisión humana y crear los tres primeros agentes del equipo.
- **Competencias:** Colocar aprobaciones en un diseño; construir y evaluar tres subagentes que trabajen juntos.
- **Al terminar serás capaz de:** Entregar investigador, analista y revisor funcionando.
- **Necesitas antes:** Módulo 16.
- **Evaluación del módulo:** Proyecto del bloque: investigador, analista y revisor de calidad.
- **Proyecto:** Tercera pieza del proyecto de cinco agentes (ver más arriba).
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude Code (permissions, sub-agents).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M17·1 | Supervisión humana al diseñar sistemas de agentes | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | — | Próximamente |
| M17·2 | Proyecto: investigador, analista y revisor (evaluación del bloque) | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | — | Próximamente |

## Módulo 18 · Automatización · Fundamentos (3 clases · 6 h)

- **Objetivo:** Diseñar y programar automatizaciones con Claude.
- **Competencias:** Elegir qué automatizar; diseñar flujos; programar tareas con Claude y conocer sus límites.
- **Al terminar serás capaz de:** Programar una automatización sencilla y explicar sus límites.
- **Necesitas antes:** Módulo 17. Usa los hooks y permisos del Módulo 8.
- **Evaluación del módulo:** Una automatización sencilla documentada (qué hace, cuándo corre, qué consume y cómo se apaga).
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude Code (scheduled tasks, GitHub Actions), centro de ayuda (Cowork).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M18·1 | Qué es automatizar con IA | Claude gratis · Chat de Claude | — | — | Próximamente |
| M18·2 | Diseñar flujos de trabajo | Claude gratis · Chat de Claude | — | — | Próximamente |
| M18·3 | Automatizar con Claude: tareas programadas, /loop, Cowork y GitHub Actions | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | [▶ 1](https://www.youtube.com/watch?v=TCq7eZ9Lhc8&t=10578s) | Próximamente |

## Módulo 19 · Automatización · Control y seguridad (3 clases · 6 h)

- **Objetivo:** Proteger y supervisar las automatizaciones.
- **Competencias:** Diseñar aprobaciones en procesos desatendidos; aplicar permisos, hooks y límites; evaluar riesgos de seguridad.
- **Al terminar serás capaz de:** Proteger una automatización con aprobaciones y controles.
- **Necesitas antes:** Módulo 18.
- **Evaluación del módulo:** Análisis de riesgos y controles de un flujo.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude Code (permissions, hooks, MCP).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M19·1 | Aprobaciones en procesos desatendidos | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | — | Próximamente |
| M19·2 | Controles de una automatización: permisos, hooks y límites | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | — | Próximamente |
| M19·3 | Seguridad de las automatizaciones | Claude gratis · Chat de Claude | — | — | Próximamente |

## Módulo 20 · Automatización · Proyecto integrador I: el equipo completo (4 clases · 8 h)

- **Objetivo:** Completar el equipo de cinco agentes.
- **Competencias:** Definir responsabilidades y contratos; crear el coordinador y el programador; integrar los agentes del bloque Agentes.
- **Al terminar serás capaz de:** Tener los cinco agentes trabajando en un mismo flujo.
- **Necesitas antes:** Módulo 19.
- **Evaluación del módulo:** Revisión del equipo con un caso real.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude Code (sub-agents, permissions).

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M20·1 | Del kit y los tres agentes al equipo completo | Claude gratis · Chat de Claude | — | — | Próximamente |
| M20·2 | El coordinador | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | — | Próximamente |
| M20·3 | El programador: implementar solo lo autorizado | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | — | Próximamente |
| M20·4 | Integrar al investigador, el analista y el revisor | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | — | Próximamente |

## Módulo 21 · Automatización · Proyecto integrador II: automatización y control (4 clases · 8 h)

- **Objetivo:** Automatizar, validar y supervisar el equipo.
- **Competencias:** Validar resultados y manejar errores; automatizar el flujo; probarlo de extremo a extremo; defender el diseño.
- **Al terminar serás capaz de:** Entregar un equipo de agentes funcional y supervisado.
- **Necesitas antes:** Módulo 20.
- **Evaluación del módulo:** Proyecto integrador con rúbrica y defensa.
- **Proyecto:** Proyecto final del curso (ver más arriba).
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude Code.

| Clase | Tema | Plan de Claude | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|---|
| M21·1 | Validación de resultados y manejo de errores | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | — | Próximamente |
| M21·2 | Automatizar el flujo del equipo | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | — | Próximamente |
| M21·3 | Pruebas de extremo a extremo y supervisión | Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada · Claude Code | — | — | Próximamente |
| M21·4 | Presentación y defensa del equipo (evaluación final) | Claude gratis para el diseño · recomendado Claude Pro para la práctica en Claude Code · Chat de Claude o Claude Code | — | — | Próximamente |

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
