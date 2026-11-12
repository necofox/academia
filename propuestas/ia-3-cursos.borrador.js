/* BORRADOR DEFINITIVO (pendiente de aprobación) — Ampliación consolidada en tres cursos.
   Informe: DIAGNOSTICO-ESTRUCTURA-ACADEMICA.md. Reemplaza como propuesta a ia-6-cursos.borrador.js, que se
   conserva sin cambios como historial.
   NO lo carga el menú real. Se carga DESPUÉS de recursos/catalogo.js y solo actúa sobre el curso `ia`:
   - Redes y Telecomunicaciones: no se toca.
   - `ia` («Inteligencia Artificial: Claude»): conserva su id; IA 01 e IA 02 se reutilizan TAL CUAL (mismos
     objetos: n, archivo, id, videos). 21 módulos en 5 bloques (Fundamentos, Claude Code, Herramientas/Skills/MCP,
     Agentes, Automatización y proyecto de cinco agentes).
   - `prompt` («Prompt Engineering»): curso independiente con las 32 clases de prompting del catálogo real,
     copiadas con sus títulos, referencias y videos (módulos reales 2, 3, 5, 6, 8 y 11).
   Las etiquetas de cuenta de Claude se reescriben con la tabla PLAN: Claude gratis / Recomendado: Claude Pro con
   alternativa. La academia no exige ninguna suscripción; las etiquetas solo describen las prácticas. */
(function () {
  'use strict';
  const CAT = window.CATALOGO;
  const ia = CAT.find((c) => c.id === 'ia');
  if (!ia || ia.modulos.length !== 11 || CAT.some((c) => c.id === 'prompt')) return; // ya activado o catálogo distinto

  const real = ia.modulos; // los 11 módulos del catálogo real (sin modificar)
  const moduloReal = (n) => real.find((m) => m.n === n);
  const claseReal = (n, i) => moduloReal(n).clases[i - 1];
  const ia01 = ia.clases.find((c) => c.id === 'ia-01');
  const ia02 = ia.clases.find((c) => c.id === 'ia-02');

  // ---------- Etiquetas de cuenta de Claude (precisas; no prometen funciones que el plan gratis no tiene) ----------
  const PRO = 'Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) · alternativa: demostración guiada';
  const GP = 'Claude gratis para el diseño · recomendado Claude Pro para la práctica en Claude Code';
  const PLAN = {
    'Gratis': 'Claude gratis',
    'Gratis (hasta 5 proyectos)': 'Claude gratis (hasta 5 proyectos)',
    'Gratis (hay que activar la ejecución de código)': 'Claude gratis (hay que activar la ejecución de código)',
    'Gratis (con límites de uso)': 'Claude gratis (con límites de uso)',
    'Gratis con búsqueda web; Research es de pago (opcional)': 'Claude gratis con búsqueda web; Research requiere Claude Pro (opcional)',
    'Gratis (en el chat, con una hoja de evaluación)': 'Claude gratis (en el chat, con una hoja de evaluación)',
    'Gratis (diseño y prueba en el chat) o pago (ejecución con Claude Code)': GP
  };
  const etiqueta = (p) => { if (!(p in PLAN)) throw new Error('Etiqueta de plan sin equivalencia: ' + p); return PLAN[p]; };
  // Copia de una clase planificada del catálogo real: mismos datos, etiqueta nueva (sin modulo/orden: se recalculan)
  const copia = (c) => { const o = Object.assign({}, c, { plan: etiqueta(c.plan) }); delete o.modulo; delete o.orden; return o; };

  const G = 'Claude gratis'; const CHAT = 'Chat de Claude'; const CC = 'Claude Code'; const AMBOS = 'Chat de Claude o Claude Code';
  const k = (titulo, plan, donde, videos, ref) => Object.assign({ titulo, plan, donde }, ref ? { ref } : {}, videos && videos.length ? { videos } : {});
  const MOURE = (s) => 'TCq7eZ9Lhc8@' + s;
  const mod = (n, bloque, titulo, datos, clases) => Object.assign({ n, bloque, titulo }, datos, { clases });

  // =====================================================================================================
  // CURSO: INTELIGENCIA ARTIFICIAL: CLAUDE (id `ia`) — 21 módulos en 5 bloques
  // =====================================================================================================
  const B1 = 'Fundamentos'; const B2 = 'Claude Code'; const B3 = 'Herramientas, Skills y MCP'; const B4 = 'Agentes'; const B5 = 'Automatización';
  const modulosIA = [
    // ---------- Bloque 1 · Fundamentos (M1–M4) ----------
    mod(1, B1, 'Fundamentos de la IA generativa y de Claude', {
      objetivo: 'Entender qué es Claude, cómo funciona, sus límites, planes y modelos, y dar los primeros pasos.',
      competencias: 'Explicar qué es un modelo de lenguaje y sus límites; elegir plan y modelo; usar la interfaz, la configuración y las conversaciones; comparar Claude con otras herramientas de IA.',
      logro: 'Elegir y configurar Claude con criterio para tus tareas.', previos: [], previosNota: 'Ninguno. Una cuenta de Claude; el plan gratuito sirve.',
      evaluacion: 'Examen de conceptos y elección argumentada de plan y modelo para tres casos.',
      fuentes: 'Documentación oficial de Anthropic (glosario, modelos, planes, centro de ayuda), NIST.'
    }, [ia01, ia02,
      copia(claseReal(1, 3)), // «Primeros pasos: conversaciones, archivos, búsqueda web y estilos» (título del catálogo real)
      k('Claude frente a otras herramientas de IA: criterios para elegir', G, CHAT)]),
    mod(2, B1, 'Fundamentos · Trabajar con Claude día a día', {
      objetivo: 'Organizar el trabajo con proyectos y trabajar con archivos y artefactos.',
      competencias: 'Crear proyectos con instrucciones y conocimiento; analizar archivos; crear artefactos.',
      logro: 'Usar proyectos, archivos y artefactos para tu trabajo diario.', previos: [1],
      evaluacion: 'Un proyecto de Claude con instrucciones y un artefacto creado a partir de un archivo propio.',
      fuentes: 'Centro de ayuda de Claude: proyectos, archivos y artefactos.'
    }, [copia(claseReal(4, 1)),
      k('Archivos y documentos: PDF, hojas de cálculo e imágenes', 'Claude gratis (con límites de uso)', CHAT),
      k('Artefactos y ejecución de código', 'Claude gratis (hay que activar la ejecución de código)', CHAT)]),
    mod(3, B1, 'Fundamentos · Claude para estudiar, investigar y producir', {
      objetivo: 'Usar Claude para estudiar, investigar, redactar y resolver problemas, verificando siempre.',
      competencias: 'Estudiar con Claude como tutor; investigar con fuentes verificables; redactar y revisar textos propios; comprobar razonamientos.',
      logro: 'Aplicar Claude a tus estudios y trabajos sin perder el criterio propio.', previos: [2],
      evaluacion: 'Tres tareas reales (estudio, investigación y redacción) con su verificación documentada.',
      fuentes: 'Centro de ayuda de Claude (búsqueda web, Research), Reduce hallucinations (Anthropic).'
    }, [k('Estudiar con Claude: explicaciones, resúmenes y autoevaluación', G, CHAT),
      k('Investigar y verificar fuentes', 'Claude gratis con búsqueda web; Research requiere Claude Pro (opcional)', CHAT),
      k('Redactar y revisar textos manteniendo tu voz', G, CHAT),
      k('Resolver problemas y comprobar el razonamiento', G, CHAT)]),
    mod(4, B1, 'Fundamentos · Uso responsable y funciones avanzadas', {
      objetivo: 'Usar Claude de forma responsable y decidir qué funciones avanzadas valen la pena.',
      competencias: 'Aplicar el marco de fluidez en IA (4D) y la política de uso; proteger la privacidad; evaluar memoria, conectores, Claude in Chrome y Cowork.',
      logro: 'Usar Claude con seguridad y decidir cuándo conviene una función de pago.', previos: [3],
      evaluacion: 'Kit de estudio: un proyecto de Claude con instrucciones, materiales de un curso y un método de verificación de fuentes.',
      fuentes: 'Anthropic Academy «AI Fluency», política de uso, centro de ayuda (memoria, conectores, Chrome, Cowork).'
    }, [copia(claseReal(1, 4)), // «Fluidez en IA y uso responsable…» (título y videos del catálogo real)
      k('Memoria, conectores, Claude in Chrome y Cowork: cuándo valen la pena (evaluación del bloque)', 'Claude gratis con límites; Claude in Chrome y Cowork requieren Claude Pro', CHAT)]),

    // ---------- Bloque 2 · Claude Code (M5–M9) ----------
    mod(5, B2, 'Claude Code · Primeros pasos', {
      objetivo: 'Entender qué es Claude Code e instalarlo.',
      competencias: 'Distinguir Chat, Code y Cowork; usar la terminal; instalar, autenticar y dar las primeras órdenes.',
      logro: 'Instalar Claude Code y dar órdenes básicas con seguridad.', previos: [4],
      previosNota: 'Recomendado: Prompt Engineering, Módulos 1 a 3; JavaScript o Python, Módulo 1, y la clase de Git. La práctica recomienda Claude Pro.',
      evaluacion: 'Primera sesión supervisada en una carpeta de prueba.', fuentes: 'Documentación de Claude Code (overview, setup).'
    }, [k('Qué es Claude Code; Chat, Code y Cowork', G, CHAT, ['vW4MFfw8taU', MOURE(0)]),
      k('Terminal y comandos básicos (nivelación)', 'No necesita Claude (terminal del computador); se puede saltar con JavaScript M5·1', 'Terminal del computador', ['3GymExBkKjE@1440']),
      k('Instalación, autenticación e interfaz', PRO, CC, [MOURE(755), MOURE(1115)]),
      k('Acciones, modos, comandos básicos y modelos', PRO, CC, [MOURE(1384), MOURE(2018)])]),
    mod(6, B2, 'Claude Code · Trabajar con proyectos', {
      objetivo: 'Desarrollar con Claude Code planificando y revisando cada cambio.',
      competencias: 'Crear proyectos; leer y modificar archivos; usar el modo plan; controlar cambios con checkpoints y Git; depurar y probar.',
      logro: 'Desarrollar una funcionalidad con plan, revisión y pruebas.', previos: [5],
      evaluacion: 'Una funcionalidad implementada con plan aprobado y pruebas.', fuentes: 'Claude Code best practices.'
    }, [k('Crear un proyecto; leer y modificar archivos', PRO, CC, ['DAQJvGjlgVM']),
      k('Modo plan: planificar, revisar y aprobar', PRO, CC, ['gv0WHhKelSE', MOURE(2733)]),
      k('Checkpoints, Git y control de cambios', PRO, CC, [MOURE(3550)]),
      k('Desarrollo, depuración y pruebas', PRO, CC)]),
    mod(7, B2, 'Claude Code · Contexto y memoria', {
      objetivo: 'Gestionar el contexto y la memoria del proyecto.',
      competencias: 'Explicar la ventana de contexto y el context engineering; escribir CLAUDE.md; definir reglas y Auto Memory.',
      logro: 'Dar a Claude Code el contexto justo para tu proyecto.', previos: [6],
      evaluacion: 'Un CLAUDE.md breve y reglas de proyecto revisadas.', fuentes: 'Effective context engineering for AI agents; documentación de Claude Code (memory).'
    }, [k('Contexto, memoria de trabajo y context engineering', 'Claude gratis (parte conceptual) · recomendado Claude Pro para la práctica en Claude Code', AMBOS, [MOURE(4146)]),
      k('CLAUDE.md y referencias a archivos', PRO, CC, [MOURE(4611)]),
      k('Reglas de proyecto y Auto Memory', PRO, CC, [MOURE(5498)])]),
    mod(8, B2, 'Claude Code · Herramientas, permisos y hooks', {
      objetivo: 'Supervisar herramientas, permisos, hooks y skills.',
      competencias: 'Observar y aprobar herramientas; configurar reglas allow, ask y deny; crear hooks de protección; usar y ejecutar skills y comandos.',
      logro: 'Trabajar con Claude Code bajo reglas que tú controlas.', previos: [7],
      evaluacion: 'Configuración de permisos y un hook que bloquea una acción peligrosa.', fuentes: 'Documentación de Claude Code (permissions, hooks, skills).'
    }, [k('Observar y aprobar las herramientas mientras trabajas', PRO, CC),
      k('Permisos y aprobaciones', PRO, CC, [MOURE(2509), MOURE(10826)]),
      k('Hooks y controles de ejecución', PRO, CC, [MOURE(10144)]),
      k('Usar, configurar y ejecutar skills y comandos', PRO, CC, [MOURE(6167)])]),
    mod(9, B2, 'Claude Code · Buenas prácticas y aplicación base', {
      objetivo: 'Aplicar buenas prácticas y entregar la aplicación base sobre la que trabajará el equipo de agentes.',
      competencias: 'Aplicar una lista de seguridad; desarrollar y mantener un proyecto supervisado.',
      logro: 'Entregar la aplicación base con CLAUDE.md, permisos, un hook de protección y pruebas.', previos: [8],
      evaluacion: 'Proyecto del bloque: la aplicación base.', proyecto: 'Primera pieza del proyecto de cinco agentes (ver más arriba).', fuentes: 'Claude Code best practices.'
    }, [k('Buenas prácticas y seguridad', PRO, CC, ['gv0WHhKelSE']),
      k('Proyecto: la aplicación base del equipo (evaluación del bloque)', PRO, CC)]),

    // ---------- Bloque 3 · Herramientas, Skills y MCP (M10–M13) ----------
    mod(10, B3, 'Herramientas, Skills y MCP · Herramientas', {
      objetivo: 'Entender cómo usa Claude las herramientas y cómo restringirlas.',
      competencias: 'Explicar el ciclo de uso de herramientas; usar las integradas del chat; distinguir integradas y externas; restringir herramientas en Claude Code.',
      logro: 'Decidir qué herramientas necesita una tarea y limitarlas.', previos: [4],
      previosNota: 'Para las clases que se hacen en Claude Code conviene el bloque Claude Code (Módulos 5 a 9).',
      evaluacion: 'Mapa de herramientas de una tarea con sus restricciones.', fuentes: 'Documentación de Claude (tool use), documentación de Claude Code (permissions).'
    }, [k('Qué es una herramienta y cómo la usa Claude', G, CHAT),
      k('Herramientas integradas del chat', G, CHAT),
      k('Integradas, externas y cómo restringirlas', GP, AMBOS)]),
    mod(11, B3, 'Herramientas, Skills y MCP · Skills', {
      objetivo: 'Diseñar, crear y reutilizar skills.',
      competencias: 'Distinguir skill, herramienta y agente; escribir SKILL.md; crear y probar skills en el chat; diseñar skills especializadas para Claude Code.',
      logro: 'Convertir un procedimiento probado en una skill reutilizable.', previos: [10],
      evaluacion: 'Una skill propia con su descripción, archivos de apoyo y pruebas.', fuentes: 'Documentación de Claude Code (skills), centro de ayuda (skills).'
    }, [k('Qué es una skill; skill, herramienta y agente', 'Claude gratis (hay que activar la ejecución de código)', CHAT, [MOURE(7019)]),
      k('Estructura de una skill: SKILL.md y archivos de apoyo', 'Claude gratis (hay que activar la ejecución de código)', CHAT),
      k('Crear y probar skills en el chat', 'Claude gratis (hay que activar la ejecución de código)', CHAT),
      k('Diseñar skills especializadas y reutilizables', PRO, CC, [MOURE(8485)])]),
    mod(12, B3, 'Herramientas, Skills y MCP · MCP (Model Context Protocol)', {
      objetivo: 'Comprender MCP y conectar Claude con datos y servicios de forma segura.',
      competencias: 'Explicar MCP y su arquitectura; agregar un conector; configurar servidores en Claude Code; evaluar su seguridad.',
      logro: 'Conectar Claude a una fuente externa confiable con MCP.', previos: [10],
      evaluacion: 'Una conexión MCP documentada con su evaluación de seguridad.', fuentes: 'modelcontextprotocol.io (arquitectura), documentación de Claude Code (MCP), centro de ayuda (conectores).'
    }, [k('Qué es MCP y qué problema resuelve', G, CHAT, ['T4-BdZQUCSE']),
      k('Arquitectura de MCP: host, cliente, servidor y primitivas', G, CHAT),
      k('Conectores en Claude: un servidor MCP remoto', 'Claude gratis (1 conector personalizado)', CHAT, [MOURE(8485)]),
      k('MCP en Claude Code: claude mcp add y ámbitos', PRO, CC, [MOURE(7775)]),
      k('Seguridad y permisos en MCP', GP, AMBOS)]),
    mod(13, B3, 'Herramientas, Skills y MCP · Plugins y kit del equipo', {
      objetivo: 'Empaquetar componentes y construir el kit del equipo de agentes.',
      competencias: 'Instalar y evaluar plugins; integrar skills y MCP en un kit probado.',
      logro: 'Entregar el kit que usarán los agentes.', previos: [11, 12],
      evaluacion: 'Proyecto del bloque: dos skills (investigar con fuentes y revisar calidad) y una conexión MCP confiable.',
      proyecto: 'Segunda pieza del proyecto de cinco agentes (ver más arriba).', fuentes: 'Documentación de Claude Code (plugins).'
    }, [k('Plugins: skills, MCP, hooks y subagentes en un paquete', PRO, CC, [MOURE(9023)]), // video indicado por el alumno, desde 2:30:23
      k('Proyecto: el kit del equipo (evaluación del bloque)', GP, AMBOS)]),

    // ---------- Bloque 4 · Agentes y subagentes (M14–M17) ----------
    mod(14, B4, 'Agentes · Qué es un agente', {
      objetivo: 'Comprender qué es un agente, cómo se compone y sus riesgos.',
      competencias: 'Distinguir agente, chatbot y flujo; describir su arquitectura; planificar tareas; identificar riesgos y consumo.',
      logro: 'Decidir cuándo conviene un agente y cómo componerlo.', previos: [9, 13],
      previosNota: 'Recomendado: Prompt Engineering, Módulo 4 (criterios de éxito y evaluación).',
      evaluacion: 'Diseño en papel de un agente con sus componentes y riesgos.', fuentes: 'Building effective agents (Anthropic), documentación de Claude Code.'
    }, [k('Agente, chatbot y flujo de trabajo', G, CHAT, ['LP5OCa20Zpg', MOURE(499)], 'Artículo oficial «Building effective agents»'),
      k('Arquitectura de un agente', G, CHAT, ['D7_ipDqhtwk']),
      k('Planificación y ejecución de tareas', PRO, CC),
      k('Riesgos y límites de los agentes', G, CHAT)]),
    mod(15, B4, 'Agentes · Subagentes', {
      objetivo: 'Crear subagentes especializados con capacidades limitadas.',
      competencias: 'Explicar el contexto propio de un subagente; crearlo; asignarle herramientas, skills y conexiones; diseñar la entrega de resultados.',
      logro: 'Crear subagentes especializados que devuelvan resultados útiles.', previos: [14],
      evaluacion: 'Un subagente de solo lectura con su formato de entrega.', fuentes: 'Documentación de Claude Code (sub-agents).'
    }, [k('Qué son los subagentes', PRO, CC, [MOURE(9225)]),
      k('Crear subagentes especializados', PRO, CC),
      k('Roles, responsabilidades y capacidades de cada subagente', PRO, CC),
      k('Contexto y transferencia de resultados', PRO, CC)]),
    mod(16, B4, 'Agentes · Coordinación', {
      objetivo: 'Coordinar varios agentes y evaluar su trabajo.',
      competencias: 'Elegir patrones de delegación; coordinar agentes; evaluar resultados con criterios.',
      logro: 'Coordinar varios agentes y medir la calidad de su trabajo.', previos: [15],
      evaluacion: 'Un flujo con dos subagentes y su evaluación.', fuentes: 'Building effective agents; documentación de Claude Code (sub-agents, agent teams).'
    }, [k('Delegación y patrones de trabajo', GP, AMBOS, ['D7_ipDqhtwk']),
      k('Coordinación y comunicación entre agentes', PRO, CC, [MOURE(9225)]),
      k('Evaluación y control de calidad de agentes', PRO, CC, null, 'Documentación oficial: «Define success criteria and build evaluations»')]),
    mod(17, B4, 'Agentes · Supervisión y tres primeros agentes', {
      objetivo: 'Diseñar la supervisión humana y crear los tres primeros agentes del equipo.',
      competencias: 'Colocar aprobaciones en un diseño; construir y evaluar tres subagentes que trabajen juntos.',
      logro: 'Entregar investigador, analista y revisor funcionando.', previos: [16],
      evaluacion: 'Proyecto del bloque: investigador, analista y revisor de calidad.', proyecto: 'Tercera pieza del proyecto de cinco agentes (ver más arriba).',
      fuentes: 'Documentación de Claude Code (permissions, sub-agents).'
    }, [k('Supervisión humana al diseñar sistemas de agentes', PRO, CC),
      k('Proyecto: investigador, analista y revisor (evaluación del bloque)', PRO, CC)]),

    // ---------- Bloque 5 · Automatización y proyecto integrador (M18–M21) ----------
    mod(18, B5, 'Automatización · Fundamentos', {
      objetivo: 'Diseñar y programar automatizaciones con Claude.',
      competencias: 'Elegir qué automatizar; diseñar flujos; programar tareas con Claude y conocer sus límites.',
      logro: 'Programar una automatización sencilla y explicar sus límites.', previos: [17], previosNota: 'Usa los hooks y permisos del Módulo 8.',
      evaluacion: 'Una automatización sencilla documentada (qué hace, cuándo corre, qué consume y cómo se apaga).',
      fuentes: 'Documentación de Claude Code (scheduled tasks, GitHub Actions), centro de ayuda (Cowork).'
    }, [k('Qué es automatizar con IA', G, CHAT),
      k('Diseñar flujos de trabajo', G, CHAT),
      k('Automatizar con Claude: tareas programadas, /loop, Cowork y GitHub Actions', PRO, CC, [MOURE(10578)])]),
    mod(19, B5, 'Automatización · Control y seguridad', {
      objetivo: 'Proteger y supervisar las automatizaciones.',
      competencias: 'Diseñar aprobaciones en procesos desatendidos; aplicar permisos, hooks y límites; evaluar riesgos de seguridad.',
      logro: 'Proteger una automatización con aprobaciones y controles.', previos: [18],
      evaluacion: 'Análisis de riesgos y controles de un flujo.', fuentes: 'Documentación de Claude Code (permissions, hooks, MCP).'
    }, [k('Aprobaciones en procesos desatendidos', PRO, CC),
      k('Controles de una automatización: permisos, hooks y límites', PRO, CC),
      k('Seguridad de las automatizaciones', G, CHAT)]),
    mod(20, B5, 'Automatización · Proyecto integrador I: el equipo completo', {
      objetivo: 'Completar el equipo de cinco agentes.',
      competencias: 'Definir responsabilidades y contratos; crear el coordinador y el programador; integrar los agentes del bloque Agentes.',
      logro: 'Tener los cinco agentes trabajando en un mismo flujo.', previos: [19],
      evaluacion: 'Revisión del equipo con un caso real.', fuentes: 'Documentación de Claude Code (sub-agents, permissions).'
    }, [k('Del kit y los tres agentes al equipo completo', G, CHAT),
      k('El coordinador', PRO, CC),
      k('El programador: implementar solo lo autorizado', PRO, CC),
      k('Integrar al investigador, el analista y el revisor', PRO, CC)]),
    mod(21, B5, 'Automatización · Proyecto integrador II: automatización y control', {
      objetivo: 'Automatizar, validar y supervisar el equipo.',
      competencias: 'Validar resultados y manejar errores; automatizar el flujo; probarlo de extremo a extremo; defender el diseño.',
      logro: 'Entregar un equipo de agentes funcional y supervisado.', previos: [20],
      evaluacion: 'Proyecto integrador con rúbrica y defensa.', proyecto: 'Proyecto final del curso (ver más arriba).', fuentes: 'Documentación de Claude Code.'
    }, [k('Validación de resultados y manejo de errores', PRO, CC),
      k('Automatizar el flujo del equipo', PRO, CC),
      k('Pruebas de extremo a extremo y supervisión', PRO, CC),
      k('Presentación y defensa del equipo (evaluación final)', GP, AMBOS)])
  ];

  // =====================================================================================================
  // CURSO: PROMPT ENGINEERING (id `prompt`) — las 32 clases de prompting del catálogo real
  // =====================================================================================================
  // Módulo real → módulo nuevo. Se conservan título, objetivo, competencias, logro, práctica, evaluación,
  // proyecto, fuentes y clases; solo se renumeran los requisitos previos y se ajustan las notas que citaban
  // números de módulo del curso anterior.
  const traslado = (nReal, nNuevo, previos, previosNota) => {
    const o = Object.assign({}, moduloReal(nReal), { n: nNuevo, previos, origen: 'IA: Claude y productividad, Módulo ' + nReal, clases: moduloReal(nReal).clases.map(copia) });
    if (previosNota === null) delete o.previosNota; else if (previosNota) o.previosNota = previosNota;
    return o;
  };
  const modulosPrompt = [
    traslado(2, 1, [], 'Ninguno. Recomendado: IA: Claude, Módulo 1 (qué es Claude y cómo se usa). Basta con Claude gratis.'),
    traslado(3, 2, [1]),
    traslado(5, 3, [2]),
    traslado(6, 4, [3]),
    traslado(8, 5, [4]), // conserva su nota: «Para las clases de programación se recomienda el Módulo 1 de JavaScript o de Python…»
    traslado(11, 6, [5], 'Las instrucciones para agentes y automatización se diseñan y prueban con Claude gratis; ejecutarlas en Claude Code (curso IA: Claude, bloques Agentes y Automatización) recomienda Claude Pro.')
  ];

  const prompt = {
    id: 'prompt', nombre: 'Prompt Engineering', icono: '✍️', tema: 'tema-prompt',
    desc: 'Diseñar, evaluar, corregir y reutilizar instrucciones profesionales para Claude, desde cero. Para practicar basta con Claude gratis.',
    duracion: '2 h por clase', horasClase: 2,
    meta: 'Diseñar instrucciones que produzcan resultados precisos, útiles y reproducibles, en seis niveles: desde formular una pregunta clara hasta diseñar, evaluar, corregir y reutilizar instrucciones profesionales para distintos tipos de trabajo, sin depender de la API de pago.',
    proyectoFinal: 'Biblioteca profesional de prompts para Claude: instrucciones para investigación, análisis de documentos, programación, revisión de código, automatización, planificación de proyectos, y agentes y subagentes, cada una con sus criterios de prueba. Incluye la transformación documentada de instrucciones deficientes en profesionales. Se hace con Claude gratis; ejecutar en Claude Code las instrucciones de agentes recomienda Claude Pro.',
    modulos: modulosPrompt
  };

  Object.assign(ia, {
    nombre: 'Inteligencia Artificial: Claude',
    desc: 'Del primer chat a Claude Code, herramientas, skills, MCP, agentes y automatización, hasta un equipo de cinco agentes. Para estudiar y hacer las prácticas compatibles basta con Claude gratis; Claude Pro es recomendable para las prácticas avanzadas, con alternativa por demostración.',
    meta: 'Usar Claude con criterio y seguridad, desde el chat hasta Claude Code, y ampliar sus capacidades con herramientas, skills y MCP para diseñar, coordinar y automatizar un equipo de agentes especializados, siempre con supervisión humana y sin depender de la API de pago.',
    proyectoFinal: 'Equipo de cinco agentes (coordinador, investigador, analista, programador y revisor de calidad), construido por etapas: la aplicación base (bloque Claude Code), el kit de skills y MCP, los tres primeros agentes y el equipo completo automatizado, con permisos, aprobaciones humanas, validación y pruebas de extremo a extremo.',
    modulos: modulosIA
  });

  [ia, prompt].forEach((curso) => {
    curso.clases = curso.modulos.flatMap((m) => m.clases.map((c, i) => Object.assign(c, { modulo: m.n, orden: i + 1 })));
  });
  CAT.splice(CAT.indexOf(ia) + 1, 0, prompt);
})();
