# Propuesta: la formación en IA reorganizada en seis cursos (versión 2, revisada)

> **Estado:** propuesta revisada, **no implementada.** No se ha modificado el catálogo, el menú, el motor, la
> sincronización ni ninguna clase. IA 01 e IA 02 se conservan tal como están, aprobadas.
> Versión 1: 11/11/2026 (commit `487415d`). **Versión 2: 12/11/2026**, tras la auditoría pedagógica, técnica y
> estructural pedida por el alumno. Verificaciones en la documentación oficial de Anthropic del 11/11/2026.

## Índice

1. Informe de la revisión: qué se encontró y qué se corrigió
2. El orden de los cursos: Herramientas, Skills y MCP antes de Agentes
3. Cada componente con un objetivo distinto en cada curso
4. Qué es cada componente (para no confundirlos)
5. Los seis cursos y su progresión
6. Curso 1 · Fundamentos y uso de Claude
7. Curso 2 · Prompt Engineering
8. Curso 3 · Claude Code y desarrollo asistido por IA
9. Curso 4 · Herramientas, Skills y MCP
10. Curso 5 · Agentes y subagentes de IA
11. Curso 6 · Automatización con IA y proyecto integrador
12. El proyecto integrador: cómo se construye a lo largo de los cursos
13. Cómo se combinan los componentes
14. Gratis o de pago
15. Biblioteca audiovisual
16. Auditoría del curso actual y traslado de contenidos
17. Cómo se integraría en la academia sin perder nada
18. Decisiones que necesito que apruebes
19. Fuentes verificadas

---

## 1. Informe de la revisión: qué se encontró y qué se corrigió

**Resultado general:** la estructura de seis cursos es correcta y cada curso tiene un objetivo claro, pero la
versión 1 tenía **duplicaciones, una clase dividida artificialmente y un proyecto que se repetía**. La versión 2
pasa de **95 a 91 clases** (182 h) sin perder ningún contenido pedido.

### Comprobaciones

| Criterio | Resultado en la versión 1 | Versión 2 |
|---|---|---|
| Objetivo claro en cada curso | Sí, los seis tienen una meta medible | Se mantiene |
| Progresión de principiante a avanzado | Sí, pero el orden de los Cursos 4 y 5 obligaba a usar herramientas y MCP antes de estudiarlas | Corregido: Herramientas, Skills y MCP pasa a ser el Curso 4 (sección 2) |
| Sin repeticiones innecesarias | **No**: 6 repeticiones (tabla siguiente) | Corregidas |
| Cada clase con contenido suficiente | **Casi**: una clase era demasiado delgada para 120 minutos | Fusionada |
| Sin divisiones artificiales | **Casi**: dos clases de herramientas podían explicarse juntas | Fusionadas |
| Duración razonable | Clases de 120 minutos, como el resto de la academia; total 190 h | 182 h, unas 30 h por curso de media |
| Conocimientos previos identificados | Sí, pero sin indicar qué clases concretas se necesitan | Se detallan clase por clase en la sección 5 |

### Problemas encontrados y correcciones

| # | Problema en la versión 1 | Corrección | Por qué |
|---|---|---|---|
| 1 | «Herramientas de Claude Code» aparecía dos veces: Curso 3 · 4.1 y Curso 5 · 1.3 | Curso 3 · 4.1 enseña a **observar y aprobar** las herramientas mientras se trabaja; el curso de Herramientas enseña **cómo funcionan y cómo restringirlas**, fusionando dos clases en una (4 → 3 clases) | Mismo tema con dos objetivos que no se distinguían |
| 2 | Las «restricciones» se enseñaban dos veces en el Curso 2 (1.3 y 2.3) | 1.3 queda en contexto, objetivo y audiencia; las restricciones van solo en 2.3 | Repetición dentro del mismo curso |
| 3 | La supervisión humana aparecía tres veces: Agentes 1.4 y 4.2, y Automatización 2.1 | Agentes 1.4 pasa a «riesgos y límites»; Agentes 4.1 enseña dónde poner aprobaciones **al diseñar** un sistema; Automatización 2.1, cómo aprobar cuando el proceso corre **sin una persona delante** | Tres clases con el mismo propósito |
| 4 | El proyecto del curso de Agentes (investigador, programador y revisor) repetía tres de los cinco agentes del proyecto final | El proyecto se vuelve **progresivo**: cada curso construye una pieza del equipo final (sección 12) | El estudiante habría construido dos veces los mismos agentes |
| 5 | «Diseñar un equipo de agentes» estaba en Agentes 4.1 y en Automatización 3.1 | El método se enseña dentro del proyecto de Agentes; Automatización 3.1 integra el equipo completo | Repetición entre cursos |
| 6 | «Manejo de errores y validación» estaba como teoría (Automatización 1.4) y otra vez en el proyecto | Se enseña una vez, aplicado al equipo (Automatización 4.1) | La teoría aislada no justificaba 120 minutos propios |
| 7 | «Conversaciones y organización» (Curso 1 · 2.1) era demasiado delgada para 120 minutos | Se fusiona con «Interfaz y configuración» (Curso 1 · 1.4) | División artificial |
| 8 | Skills: «uso de skills en Claude Code» y «skills en Claude Code» no se diferenciaban | Curso 3 · 4.4: **usar, configurar y ejecutar** skills; Curso 4 · 2.4: **diseñar, crear y reutilizar** skills especializadas | Lo pidió el alumno y evita repetir explicaciones |
| 9 | El Curso 3 · 1.2 (terminal) repetía en parte JavaScript M5·1 | Se marca como **clase de nivelación**: quien ya hizo JavaScript M5·1 puede saltarla | Evita repetir sin dejar sin base a quien no la tiene |

**Vacíos detectados y cubiertos:**

- La versión 1 no decía **en qué clase concreta** se aprende cada cosa que exige el proyecto final. La sección 12 lo
  detalla requisito por requisito.
- La versión 1 no tenía **pruebas de extremo a extremo** del equipo de agentes. Se agrega Automatización 4.3.
- Faltaba advertir que **los agentes consumen más uso**. Los equipos de agentes gastan más tokens, según la
  documentación oficial. Se agrega en Agentes 1.4.

## 2. El orden de los cursos: Herramientas, Skills y MCP antes de Agentes

**Conclusión: tu recomendación es correcta.** El orden de la versión 2 es:

1. Fundamentos y uso de Claude → 2. Prompt Engineering → 3. Claude Code → **4. Herramientas, Skills y MCP** →
**5. Agentes y subagentes** → 6. Automatización y proyecto integrador.

**Argumentos a favor:**

1. **Un agente es un modelo que usa herramientas en un bucle.** Para construir uno hay que saber qué es una
   herramienta. Si los agentes van antes, el estudiante configura algo que todavía no entiende.
2. **Configurar un subagente es elegir sus componentes.** Su archivo define, entre otras cosas, qué herramientas
   puede usar. La documentación también indica que un subagente puede tener sus propios servidores MCP, hooks y modo
   de permisos (por ejemplo, al aclarar que los subagentes de plugins no los admiten). Con el Curso 4 hecho, cada
   decisión de diseño del Curso 5 tiene sentido.
3. **El proyecto avanza mejor.** El Curso 4 termina con el «kit» del equipo (skills y una conexión MCP). El Curso 5
   lo usa para crear los primeros agentes, y el Curso 6 completa el equipo (sección 12).
4. **De lo simple a lo complejo.** Una herramienta es una pieza, una skill es un procedimiento y MCP es una
   conexión. Un agente combina varias piezas. Primero se aprenden las piezas.

**Argumentos en contra, y cómo se resuelven:**

- *Los agentes motivan más y retrasarlos puede desanimar.* El Curso 3 ya muestra que Claude Code trabaja como un
  agente (bucle agéntico), así que el estudiante ve un agente funcionando antes de llegar al Curso 5.
- *Algunas skills se ejecutan dentro de un subagente.* Según la documentación, una skill con `context: fork` corre en
  un subagente. Es un detalle avanzado: el Curso 4 lo menciona y el Curso 5 lo desarrolla.

## 3. Cada componente con un objetivo distinto en cada curso

Un mismo componente puede aparecer en varios cursos, pero **nunca con el mismo objetivo**:

| Componente | Curso 1 | Curso 3 · Claude Code | Curso 4 · Herramientas, Skills y MCP | Curso 5 · Agentes | Curso 6 · Automatización |
|---|---|---|---|---|---|
| **Herramientas** | Usar la búsqueda web y los archivos sin saber cómo funcionan por dentro | **Observar y aprobar** las herramientas que usa Claude mientras trabajas (4.1) | **Entender** el ciclo de uso, distinguir integradas y externas, **configurar y restringir** (M1) | **Asignar** a cada subagente solo las que necesita (2.3) | **Limitar** las de una automatización desatendida (2.2) |
| **Skills** | — | **Usar, configurar y ejecutar** skills y comandos (4.4) | **Diseñar, estructurar, crear, probar y reutilizar** skills (M2) | **Dar** a cada subagente las skills de su especialidad (2.3) | **Integrar** las skills en el flujo del equipo (3.4) |
| **MCP** | **Decidir** si conviene un conector (4.2) | — | **Comprender** el protocolo, **configurar** servidores y **evaluar** su seguridad (M3) | **Conectar** un agente a una fuente externa cuando hace falta (2.3) | **Usar** MCP en el proyecto solo si aporta (3.4) |
| **Agentes** | — | Ver que Claude Code **trabaja como un agente** (1.1) | — | **Comprender, diseñar, crear, coordinar y evaluar** agentes y subagentes (todo el curso) | **Orquestar** el equipo completo (M3 y M4) |
| **Permisos y hooks** | — | **Configurar** reglas, modos y hooks (4.2 y 4.3) | **Restringir** herramientas (1.3) y **evaluar** permisos MCP (3.5) | **Diseñar** los puntos de aprobación (4.1) | **Proteger** procesos desatendidos (2.1 y 2.2) |
| **Automatización** | — | — | — | — | **Diseñar, programar y supervisar** automatizaciones (todo el curso) |

## 4. Qué es cada componente (para no confundirlos)

Definiciones tomadas de la documentación oficial (sección 19).

| Componente | Qué es | Ejemplo | No es |
|---|---|---|---|
| **Herramienta** (tool) | Una función que Claude puede invocar para actuar: buscar en la web, leer un archivo, ejecutar código | La búsqueda web del chat; la herramienta Bash de Claude Code | No contiene instrucciones de procedimiento |
| **Skill** | Un archivo `SKILL.md` con instrucciones (y archivos de apoyo opcionales) que Claude agrega a su repertorio y carga cuando corresponde | Una skill «revisar accesibilidad de una página» | No es una herramienta ni un agente: es conocimiento empaquetado |
| **MCP** (Model Context Protocol) | Un estándar abierto para conectar aplicaciones de IA con herramientas y fuentes de datos externas, con host, cliente y servidor | Un servidor MCP con la documentación de una tecnología | No es un agente: es la forma de conectarse |
| **Agente** | Un sistema que usa un modelo, herramientas y un bucle de trabajo para completar una tarea con cierta autonomía | Claude Code resolviendo un error de principio a fin | No es un chatbot que responde y espera |
| **Subagente** | Un asistente especializado con su propia ventana de contexto, su propio prompt de sistema y sus propios permisos, al que se delega una tarea | Un subagente «revisor» que solo lee código | No es otro producto: vive dentro de una sesión de Claude Code |
| **Hook** | Un comando que Claude Code ejecuta en momentos concretos (por ejemplo, antes de usar una herramienta) | Bloquear cualquier `git push` | No es una sugerencia al modelo: lo ejecuta Claude Code |
| **Permisos** | Reglas allow, ask y deny, y modos de permiso, que aplica Claude Code | Pedir confirmación antes de editar | Las reglas de Bash no son una barrera de seguridad completa |
| **Plugin** | Un paquete que agrupa skills, subagentes, hooks y servidores MCP | Un plugin de diseño de interfaces | Puede ejecutar código con tus privilegios |

## 5. Los seis cursos y su progresión

| Curso | Habilidad | Módulos · clases · horas | Necesitas antes | Plan de Claude |
|---|---|---|---|---|
| 1 · Fundamentos y uso de Claude | Usar Claude bien en la vida diaria y académica | 4 · 13 · 26 h | Nada | Gratis |
| 2 · Prompt Engineering | Diseñar instrucciones precisas y reproducibles | 5 · 20 · 40 h | Curso 1 | Gratis |
| 3 · Claude Code y desarrollo asistido por IA | Desarrollar y mantener proyectos con supervisión | 5 · 17 · 34 h | Curso 1; Curso 2, Módulos 1 a 3. Recomendado: JavaScript o Python M1 y la clase de Git | Pago (Pro o superior), salvo 2 clases |
| 4 · Herramientas, Skills y MCP | Ampliar las capacidades de Claude | 4 · 14 · 28 h | Cursos 1 y 2; para las clases de Claude Code, Curso 3 | Mayormente gratis |
| 5 · Agentes y subagentes de IA | Diseñar y crear agentes especializados coordinados | 4 · 13 · 26 h | Cursos 3 y 4; Curso 2, Módulo 4 | Diseño gratis; práctica de pago |
| 6 · Automatización con IA y proyecto integrador | Crear soluciones completas y supervisadas | 4 · 14 · 28 h | Curso 5 | Pago, con diseño gratuito |
| **Total** | | **26 · 91 · 182 h** | | |

**Progresión lineal:** Curso 1 → 2 → 3 → 4 → 5 → 6.

**Qué conocimientos concretos se necesitan para avanzar:**

| Para… | Necesitas… | Por qué |
|---|---|---|
| Curso 3 (Claude Code) | Curso 2: claridad (1.2), roles (2.1), formatos (2.3), XML y plantillas (3.1 y 3.2) | En Claude Code todo se pide con instrucciones; el CLAUDE.md es un prompt estructurado |
| Curso 4 (Herramientas, Skills y MCP) | Curso 2: plantillas (3.2) y evaluación (4.4); Curso 3: permisos (4.2) para la parte de Claude Code | Una skill es una instrucción probada y reutilizable; MCP en Claude Code exige saber aprobar herramientas |
| Curso 5 (Agentes) | Curso 2: descomposición y encadenamiento (4.1), criterios de éxito (4.4); Curso 4 completo | El prompt de sistema de cada subagente y su evaluación vienen del Curso 2; sus capacidades, del Curso 4 |
| Curso 6 (Automatización) | Curso 5 completo; Curso 3: hooks (4.3) | Se automatiza un equipo que ya funciona, protegido con permisos y hooks |

**Duración:** se mantienen las clases de 120 minutos de toda la academia; no hay motivo pedagógico para cambiarlas.
Los proyectos ocupan varias clases seguidas.

**Metodología común en las 91 clases:** las 9 secciones del prompt maestro, objetivos medibles, ejemplos reales,
demostración, actividades autocorregidas, práctica autónoma con criterios, examen, resumen, videos verificados y
fuentes oficiales. Cada clase indica si se hace con el plan gratuito o necesita uno de pago, y la alternativa
gratuita cuando existe.

Leyenda: **G** = plan gratuito · **P** = plan de pago (Pro o superior) · **G/P** = diseño gratis, práctica en
Claude Code de pago. Videos: «✔» = ya verificado (sección 15); «pendiente» = se buscará y verificará al crear la clase.

## 6. Curso 1 · Fundamentos y uso de Claude

- **Meta:** usar Claude correctamente en actividades cotidianas y académicas, con criterio y seguridad.
- **Necesitas antes:** nada. **Plan:** gratuito. **Id:** se conserva `ia` (IA 01 e IA 02 mantienen su avance).
- **Proyecto del curso:** un «kit de estudio» propio: un proyecto de Claude con instrucciones, materiales de un curso
  y un método de verificación de fuentes.

| Clase | Tema | Objetivo medible | Contenidos principales | Plan | Videos |
|---|---|---|---|---|---|
| **M1 ¿Qué es Claude?** | | | | | |
| 1.1 | ¿Qué es la IA generativa? (**IA 01, ya existe**) | Explicar qué es un modelo de lenguaje y sus límites | IA, aprendizaje automático, tokens, alucinaciones | G | ✔ Derivando |
| 1.2 | Claude y Claude Code: planes, apps, modelos y límites (**IA 02, ya existe**) | Elegir plan y modelo con argumentos | Apps, Claude Code, API, planes, modelos, límites | G | ✔ Datademia; ✔ MoureDev (modelos) |
| 1.3 | Claude frente a otras herramientas de IA | Elegir la herramienta adecuada para una tarea, con criterios | Asistentes conversacionales, buscadores con IA, generadores de imágenes; criterios de elección | G | pendiente |
| 1.4 | Interfaz, configuración y organización de conversaciones | Configurar Claude y organizar los chats sin perder el contexto | Ajustes, preferencias, estilos y privacidad; iniciar, continuar y organizar chats (fusiona dos clases) | G | pendiente |
| **M2 Trabajar con Claude día a día** | | | | | |
| 2.1 | Proyectos: instrucciones y conocimiento permanentes | Crear un proyecto con instrucciones y materiales | Proyectos (hasta 5 en el plan gratuito) | G | pendiente |
| 2.2 | Archivos y documentos | Analizar un PDF, una hoja de cálculo o una imagen | Subir archivos, resúmenes, extracciones, límites | G | pendiente |
| 2.3 | Artefactos y ejecución de código | Crear un documento o una página con artefactos | Artefactos, ejecución de código y creación de archivos | G | pendiente |
| **M3 Claude para estudiar, investigar y producir** | | | | | |
| 3.1 | Estudiar con Claude | Usar Claude como tutor sin que haga la tarea por ti | Explicaciones, resúmenes, tarjetas, autoevaluación | G | pendiente |
| 3.2 | Investigar y verificar | Investigar un tema y comprobar cada fuente | Búsqueda web, citas, verificación; Research como opción de pago | G | pendiente |
| 3.3 | Redactar y revisar textos | Mejorar un texto propio manteniendo tu voz | Correos, informes, ensayos | G | pendiente |
| 3.4 | Resolver problemas y comprobar el razonamiento | Detectar un error en un razonamiento de Claude | Lógica, cálculo y decisiones; comprobar cada paso (la técnica de prompting va al Curso 2 · 4.2) | G | pendiente |
| **M4 Uso responsable y funciones avanzadas** | | | | | |
| 4.1 | Fluidez en IA y uso responsable | Aplicar el marco 4D y la política de uso a un caso | Delegación, Descripción, Discernimiento, Diligencia; privacidad | G | ✔ Anthropic (4D); ✔ Anthropic (Delegación) |
| 4.2 | Memoria, conectores, Claude in Chrome y Cowork (evaluación del curso) | Decidir qué función conviene y si vale la pena pagar | Memoria; qué es un conector y cuándo conviene (configurarlo: Curso 4); Chrome y Cowork, de pago | G/P | pendiente |

## 7. Curso 2 · Prompt Engineering

- **Meta:** diseñar instrucciones que produzcan resultados precisos, útiles y reproducibles, y evaluarlas.
- **Necesitas antes:** Curso 1. **Plan:** gratuito.
- **Proyecto del curso:** biblioteca profesional de prompts versionada, con criterios de prueba y resultados medidos.

| Clase | Tema | Objetivo medible | Contenidos principales | Plan | Videos |
|---|---|---|---|---|---|
| **M1 Fundamentos del prompting** | | | | | |
| 1.1 | ¿Qué es un prompt y cómo lo interpreta Claude? | Reconocer las partes de un prompt | Estructura básica; qué ve el modelo | G | ✔ DevTalles L01 |
| 1.2 | Instrucciones claras, directas y específicas | Reescribir un prompt vago como uno bien definido | Claridad, especificidad, alcance | G | ✔ DevTalles L02 |
| 1.3 | Contexto, objetivo y audiencia | Dar a Claude el contexto que necesita | Fórmula base: tarea, contexto, audiencia (las restricciones van en 2.3) | G | ✔ DevTalles L04 |
| 1.4 | Diagnosticar un mal resultado (evaluación del módulo) | Identificar por qué falló una respuesta y corregir el prompt | Errores frecuentes, calidad de la respuesta (la evaluación formal va en 4.4) | G | ✔ DevTalles L03 |
| **M2 Técnicas fundamentales** | | | | | |
| 2.1 | Roles y contextos | Asignar un rol útil y justificarlo | Prompt de rol, perspectiva, límites | G | ✔ Anthropic «Prompting 101» |
| 2.2 | Ejemplos de entrada y salida (few-shot) | Mejorar la consistencia con ejemplos | Ejemplos, variedad, cuántos usar | G | pendiente |
| 2.3 | Restricciones, condiciones y formatos de salida | Obtener la respuesta con las condiciones y el formato pedidos | Restricciones, criterios de aceptación, tablas, listas, JSON | G | ✔ DevTalles L05 |
| 2.4 | Separar instrucciones, datos y referencias (evaluación del módulo) | Evitar que los datos se confundan con las órdenes | Delimitadores, documentos de referencia | G | pendiente |
| **M3 Prompting estructurado** | | | | | |
| 3.1 | Etiquetas XML para organizar prompts | Estructurar un prompt complejo con XML | Etiquetas, jerarquía, referencias | G | ✔ Anthropic «Prompting 101» (estructura) |
| 3.2 | Plantillas reutilizables y condiciones múltiples | Crear una plantilla con variables | Plantillas, variables, varias condiciones | G | pendiente |
| 3.3 | Documentos extensos y citas | Trabajar con un documento largo pidiendo citas textuales | Contexto largo, citas, extracción | G | pendiente |
| 3.4 | Ambigüedades y contradicciones (evaluación del módulo) | Detectar y corregir instrucciones contradictorias | Revisión de prompts, pruebas | G | pendiente |
| **M4 Prompting avanzado y evaluación** | | | | | |
| 4.1 | Descomponer problemas y encadenar prompts | Dividir una tarea en pasos encadenados | Descomposición, encadenamiento | G | pendiente |
| 4.2 | Razonamiento paso a paso y mejora iterativa | Mejorar un prompt en varias iteraciones medidas | Pensamiento paso a paso, iteración | G | ✔ Anthropic «AI prompt engineering: A deep dive» (desde 12:17) |
| 4.3 | Alucinaciones y verificación con fuentes | Aplicar técnicas para reducir errores y verificar | Permitir «no sé», citas, verificación | G | ✔ Anthropic (Discernimiento) |
| 4.4 | Criterios de éxito, casos de prueba y evaluación | Evaluar un prompt con una hoja de pruebas | Criterios medibles, casos de prueba, comparación | G | ✔ Anthropic (evaluar prompts; solo para ver) |
| **M5 Aplicaciones y biblioteca profesional** | | | | | |
| 5.1 | Prompts para programación y revisión de código | Pedir, revisar y corregir código con criterios | Generar, explicar, revisar, depurar | G | pendiente |
| 5.2 | Prompts para investigación y análisis | Diseñar prompts de investigación y de análisis de datos o documentos | Investigación, comparación, síntesis, análisis | G | pendiente |
| 5.3 | Prompts para escritura e informes | Diseñar prompts de redacción con estilo y estructura | Informes, documentación, planes | G | pendiente |
| 5.4 | Proyecto: biblioteca profesional de prompts (evaluación del curso) | Entregar una biblioteca probada y documentada | Casos de uso, versiones, transformaciones justificadas | G | pendiente |

## 8. Curso 3 · Claude Code y desarrollo asistido por IA

- **Meta:** usar Claude Code para desarrollar y mantener proyectos, siempre con supervisión.
- **Necesitas antes:** Curso 1 y Curso 2 (Módulos 1 a 3). Recomendado: Módulo 1 de JavaScript o Python y la clase de
  Git. **Plan:** Pro o superior para la práctica; 1.1 y 1.2 son gratuitas. **Seguridad:** se practica en carpetas y
  repositorios de prueba.
- **Proyecto del curso:** una aplicación pequeña desarrollada y mantenida con Claude Code, con su CLAUDE.md, permisos,
  un hook de protección y pruebas. **Es el proyecto sobre el que trabajará el equipo de agentes** (sección 12).

| Clase | Tema | Objetivo medible | Contenidos principales | Plan | Videos |
|---|---|---|---|---|---|
| **M1 Primeros pasos** | | | | | |
| 1.1 | Qué es Claude Code; Chat, Code y Cowork | Elegir la herramienta adecuada para una tarea | Qué hace Claude Code; diferencias; trabaja como un agente (el detalle va al Curso 5) | G | ✔ Datademia; ✔ MoureDev (0:00 y 8:19) |
| 1.2 | Terminal y comandos básicos (nivelación) | Moverte por carpetas y ejecutar comandos | Rutas, archivos, ejecutar programas. Se puede saltar con JavaScript M5·1 | G | ✔ MoureDev, curso de Git (terminal) |
| 1.3 | Instalación, autenticación e interfaz | Instalar Claude Code e iniciar sesión con tu plan | Instalación, inicio de sesión, interfaz | P | ✔ MoureDev (12:35 y 18:35) |
| 1.4 | Acciones, modos, comandos básicos y modelos | Dar las primeras órdenes y elegir modelo y esfuerzo | Comandos, modos, modelos, esfuerzo | P | ✔ MoureDev (23:04 y 33:38) |
| **M2 Trabajar con proyectos** | | | | | |
| 2.1 | Crear un proyecto; leer y modificar archivos | Crear un proyecto y revisar cada cambio | Estructura, lectura y edición supervisada | P | ✔ Anthropic «Building and prototyping with Claude Code» |
| 2.2 | Modo plan: planificar, revisar y aprobar | Aprobar un plan antes de que se ejecute | Modo plan, revisión, verificación | P | ✔ Anthropic «Claude Code best practices»; ✔ MoureDev (45:33) |
| 2.3 | Checkpoints, Git y control de cambios | Deshacer un cambio y versionar con Git | Checkpoints, rewind, Git | P | ✔ MoureDev (59:10) |
| 2.4 | Desarrollo, depuración y pruebas | Corregir un error y comprobarlo con pruebas | Depurar, escribir y ejecutar pruebas | P | pendiente |
| **M3 Contexto y memoria** | | | | | |
| 3.1 | Contexto, memoria de trabajo y context engineering | Explicar qué ocupa el contexto y cómo cuidarlo | Ventana de contexto, compactación, context engineering | G/P | ✔ MoureDev (1:09:06) |
| 3.2 | CLAUDE.md y referencias a archivos | Escribir un CLAUDE.md breve y útil | Memoria persistente, referencias | P | ✔ MoureDev (1:16:51) |
| 3.3 | Reglas de proyecto y Auto Memory | Definir reglas adicionales para el proyecto | Reglas por proyecto, Auto Memory | P | ✔ MoureDev (1:31:38) |
| **M4 Herramientas, permisos y control** | | | | | |
| 4.1 | Observar y aprobar las herramientas mientras trabajas | Seguir qué herramienta usa Claude y decidir si la apruebas | Leer, editar, Bash, web, vistos en uso (cómo funcionan y cómo restringirlas: Curso 4) | P | pendiente |
| 4.2 | Permisos y aprobaciones | Configurar reglas allow, ask y deny | Modos, reglas, orden de evaluación, límites de las reglas de Bash | P | ✔ MoureDev (41:49 y 3:00:26) |
| 4.3 | Hooks y controles de ejecución | Crear un hook que bloquee una acción peligrosa | PreToolUse y PostToolUse; hooks de comando | P | ✔ MoureDev (2:49:04) |
| 4.4 | Usar, configurar y ejecutar skills y comandos | Ejecutar una skill instalada y crear un comando sencillo | Skills integradas como `/loop`, invocación, configuración (diseñar skills: Curso 4) | P | ✔ MoureDev (1:42:47) |
| **M5 Buenas prácticas y proyecto** | | | | | |
| 5.1 | Buenas prácticas y seguridad | Aplicar una lista de verificación de seguridad | Supervisión, carpetas de prueba, revisión de cambios | P | ✔ Anthropic «Claude Code best practices» |
| 5.2 | Proyecto: la aplicación base del equipo (evaluación del curso) | Entregar una app funcional con CLAUDE.md, permisos, un hook y pruebas | Proyecto completo supervisado | P | pendiente |

## 9. Curso 4 · Herramientas, Skills y MCP

- **Meta:** comprender y ampliar las capacidades de Claude con herramientas, skills y conexiones MCP.
- **Necesitas antes:** Cursos 1 y 2; para las clases de Claude Code, Curso 3. **Plan:** las skills están en todos los
  planes (hay que activar la ejecución de código); el plan gratuito permite un conector personalizado; skills, MCP y
  plugins en Claude Code son de pago.
- **Proyecto del curso:** **el kit del equipo**: dos skills (investigar con fuentes y revisar calidad) y una
  conexión MCP confiable que usarán los agentes de los Cursos 5 y 6.

| Clase | Tema | Objetivo medible | Contenidos principales | Plan | Videos |
|---|---|---|---|---|---|
| **M1 Herramientas** | | | | | |
| 1.1 | Qué es una herramienta y cómo la usa Claude | Explicar el ciclo pedir, usar y responder | Uso de herramientas (tool use), decisión del modelo | G | pendiente |
| 1.2 | Herramientas integradas del chat | Usar la búsqueda web, los archivos y la ejecución de código con criterio | Investigación, archivos, ejecución de tareas | G | pendiente |
| 1.3 | Integradas, externas y cómo restringirlas | Decidir cuándo hace falta una externa y limitar las de Claude Code | Integradas frente a externas (vía MCP); restringir herramientas (fusiona dos clases) | G/P | pendiente |
| **M2 Skills** | | | | | |
| 2.1 | Qué es una skill; skill, herramienta y agente | Distinguir los tres con ejemplos | Definición, carga automática, diferencias | G | ✔ MoureDev (1:56:59) |
| 2.2 | Estructura de una skill | Escribir un SKILL.md con una buena descripción | Frontmatter, `description`, instrucciones, archivos de apoyo | G | pendiente |
| 2.3 | Crear y probar skills en el chat | Convertir un prompt probado en una skill | Crear, subir y probar una skill | G | pendiente |
| 2.4 | Diseñar skills especializadas y reutilizables | Crear una skill de proyecto, probarla y compartirla | Skills de proyecto y personales, pruebas, distribución (usarlas: Curso 3 · 4.4) | P | ✔ MoureDev (2:21:25) |
| **M3 MCP** | | | | | |
| 3.1 | Qué es MCP y qué problema resuelve | Explicar MCP con un ejemplo | Estándar abierto, integración de herramientas y datos | G | ✔ PyTorch Foundation «The Model Context Protocol» (ponente de Anthropic) |
| 3.2 | Arquitectura de MCP | Identificar host, cliente y servidor en un caso | Host, cliente, servidor; herramientas, recursos y prompts; transportes stdio y Streamable HTTP | G | pendiente |
| 3.3 | Conectores en Claude: un servidor MCP remoto | Agregar un conector confiable | Conectores personalizados (1 en el plan gratuito) | G | ✔ MoureDev (2:21:25) |
| 3.4 | MCP en Claude Code | Conectar un servidor con `claude mcp add` | Ámbitos local, proyecto y usuario; `.mcp.json` | P | ✔ MoureDev (2:09:35) |
| 3.5 | Seguridad y permisos en MCP | Evaluar si un servidor es confiable | Confianza, inyección de instrucciones, permisos | G/P | pendiente |
| **M4 Integración** | | | | | |
| 4.1 | Plugins: skills, MCP, hooks y subagentes en un paquete | Instalar un plugin y explicar qué contiene | Plugins, marketplace, seguridad | P | ✔ **Video indicado por el alumno:** MoureDev, desde 2:30:23 (capítulo «Plugins», de 2:29:26 a 2:33:45) |
| 4.2 | Proyecto: el kit del equipo (evaluación del curso) | Entregar dos skills y una conexión MCP documentadas y probadas | Skill de investigación, skill de calidad, conexión MCP | G/P | pendiente |

## 10. Curso 5 · Agentes y subagentes de IA

- **Meta:** diseñar, crear, coordinar y evaluar agentes especializados que trabajen juntos con supervisión.
- **Necesitas antes:** Cursos 3 y 4; Curso 2, Módulo 4. **Plan:** el diseño se hace gratis en el chat; crear y
  ejecutar subagentes requiere Claude Code (de pago).
- **Proyecto del curso:** **los tres primeros agentes del equipo**: investigador, analista y revisor de calidad, con
  las skills y la conexión MCP del Curso 4 y sus criterios de evaluación.

| Clase | Tema | Objetivo medible | Contenidos principales | Plan | Videos |
|---|---|---|---|---|---|
| **M1 Qué es un agente** | | | | | |
| 1.1 | Agente, chatbot y flujo de trabajo | Distinguir un agente de un chatbot y de un flujo fijo | Autonomía, bucle agéntico, cuándo conviene un agente | G | ✔ Anthropic «Tips for building AI agents»; ✔ MoureDev (8:19) |
| 1.2 | Arquitectura de un agente | Dibujar los componentes de un agente | Modelo, herramientas, skills y MCP (del Curso 4), memoria, bucle | G | ✔ AI Engineer «How We Build Effective Agents» |
| 1.3 | Planificación y ejecución de tareas | Hacer que un agente planifique antes de actuar | Plan, pasos, verificación | P | pendiente |
| 1.4 | Riesgos y límites de los agentes | Identificar qué puede salir mal y cuánto cuesta | Errores, inyección de instrucciones, consumo de uso | G | pendiente |
| **M2 Subagentes** | | | | | |
| 2.1 | Qué son los subagentes | Explicar por qué un subagente tiene su propio contexto | Contexto, prompt de sistema y permisos propios | P | ✔ MoureDev (2:33:45) |
| 2.2 | Crear subagentes especializados | Crear un subagente en `.claude/agents/` | Archivo Markdown con frontmatter, `name` y `description` | P | pendiente |
| 2.3 | Roles, responsabilidades y capacidades de cada subagente | Dar a cada subagente solo las herramientas, skills y conexiones que necesita | Mínimo privilegio aplicado a agentes (usa el Curso 4) | P | pendiente |
| 2.4 | Contexto y transferencia de resultados | Diseñar qué devuelve cada subagente y en qué formato | Resúmenes, formatos de entrega, límites del contexto | P | pendiente |
| **M3 Coordinación** | | | | | |
| 3.1 | Delegación y patrones de trabajo | Elegir el patrón adecuado para un problema | Encadenamiento, enrutamiento, paralelización, orquestador-trabajadores, evaluador-optimizador | G/P | ✔ AI Engineer «How We Build Effective Agents» |
| 3.2 | Coordinación y comunicación entre agentes | Coordinar varios agentes sin perder resultados | Subagentes dentro de subagentes (con límite de profundidad); equipos de agentes (experimentales) | P | ✔ MoureDev (2:33:45) |
| 3.3 | Evaluación y control de calidad de agentes | Evaluar el resultado de un agente con criterios | Criterios de éxito, casos de prueba, revisión | P | pendiente |
| **M4 Supervisión y proyecto** | | | | | |
| 4.1 | Supervisión humana al diseñar sistemas de agentes | Colocar aprobaciones en los puntos de riesgo de un diseño | Modo plan, permisos, revisiones | P | pendiente |
| 4.2 | Proyecto: investigador, analista y revisor (evaluación del curso) | Entregar tres subagentes que trabajen juntos y se evalúen | Diseño del equipo, configuración, evaluación | P | pendiente |

## 11. Curso 6 · Automatización con IA y proyecto integrador

- **Meta:** combinar todo lo anterior para crear soluciones completas, automatizadas y supervisadas.
- **Necesitas antes:** Curso 5. **Plan:** el diseño de flujos es gratis; ejecutar agentes y automatizaciones con
  Claude Code o Cowork es de pago. Se evita la API de pago.
- **Proyecto integrador (obligatorio):** el equipo completo de cinco agentes.

| Clase | Tema | Objetivo medible | Contenidos principales | Plan | Videos |
|---|---|---|---|---|---|
| **M1 Fundamentos de la automatización** | | | | | |
| 1.1 | Qué es automatizar con IA | Elegir qué tareas conviene automatizar | Tareas repetitivas, riesgos, beneficios | G | pendiente |
| 1.2 | Diseñar flujos de trabajo | Dibujar un flujo con entradas, pasos, salidas y controles | Diseño de flujos, integración de herramientas y servicios | G | pendiente |
| 1.3 | Automatizar con Claude | Programar una tarea y explicar sus límites | Tareas programadas y `/loop` en Claude Code; tareas de Cowork; GitHub Actions | P | ✔ MoureDev (2:56:18) |
| **M2 Control y seguridad** | | | | | |
| 2.1 | Aprobaciones en procesos desatendidos | Diseñar cómo aprueba una persona cuando el proceso corre solo | Colas de revisión, puntos de parada | P | pendiente |
| 2.2 | Controles de una automatización | Proteger un proceso con permisos, hooks y límites | Reglas de denegación, hooks como barreras, límites de uso | P | pendiente |
| 2.3 | Seguridad de las automatizaciones | Evaluar los riesgos de un flujo | Inyección de instrucciones, secretos, servidores confiables | G | pendiente |
| **M3 Proyecto integrador I: el equipo completo** | | | | | |
| 3.1 | Del kit y los tres agentes al equipo completo | Diseñar los cinco roles y cómo se pasan el trabajo | Responsabilidades, contratos entre agentes, flujo | G | pendiente |
| 3.2 | El coordinador | Recibir solicitudes, planificar y delegar | Delegación, seguimiento, coordinación de resultados | P | pendiente |
| 3.3 | El programador | Implementar solo lo autorizado | Permisos limitados, aprobación antes de cambiar | P | pendiente |
| 3.4 | Integrar al investigador, el analista y el revisor | Hacer que los cinco agentes trabajen en un mismo flujo | Herramientas, skills y MCP del equipo | P | pendiente |
| **M4 Proyecto integrador II: automatización y control** | | | | | |
| 4.1 | Validación de resultados y manejo de errores | Detectar y tratar los fallos del equipo | Validación, reintentos, registro | P | pendiente |
| 4.2 | Automatizar el flujo del equipo | Disparar el flujo de forma programada con aprobaciones | Automatización supervisada | P | pendiente |
| 4.3 | Pruebas de extremo a extremo y supervisión | Probar el equipo con casos reales y medir resultados | Casos de prueba, supervisión humana | P | pendiente |
| 4.4 | Presentación y defensa del equipo (evaluación final) | Demostrar el equipo funcionando y justificar el diseño | Demostración, evaluación, mejoras | G/P | pendiente |

## 12. El proyecto integrador: cómo se construye a lo largo de los cursos

El equipo final no se construye de golpe: **cada curso entrega una pieza** y el Curso 6 las une.

| Curso | Pieza que se construye | Se usa después en |
|---|---|---|
| 2 · Prompt Engineering | Plantillas y criterios de prueba (biblioteca de prompts) | Prompts de sistema y evaluación de cada agente |
| 3 · Claude Code | La aplicación base con CLAUDE.md, permisos, un hook y pruebas | Es el proyecto sobre el que trabaja el equipo |
| 4 · Herramientas, Skills y MCP | El kit: skill de investigación, skill de calidad y una conexión MCP confiable | Capacidades del investigador y del revisor |
| 5 · Agentes | Tres subagentes: investigador, analista y revisor | Integrados al equipo completo |
| 6 · Automatización | Coordinador, programador, automatización, aprobaciones, validación y pruebas | Equipo final funcionando |

**Cada requisito del proyecto y dónde se aprende:**

| Requisito | Se aprende en | Se aplica en |
|---|---|---|
| Definición de responsabilidades | Curso 5 · 2.3 | Curso 6 · 3.1 |
| Configuración de agentes especializados | Curso 5 · 2.2 y 2.3 | Cursos 5 · 4.2 y 6 · 3.2–3.3 |
| Delegación mediante subagentes | Curso 5 · 3.1 y 3.2 | Curso 6 · 3.2 |
| Uso de herramientas | Cursos 3 · 4.1 y 4 · M1 | Curso 6 · 3.4 |
| Uso de skills | Cursos 3 · 4.4 y 4 · M2 | Cursos 4 · 4.2 y 6 · 3.4 |
| Integración con MCP cuando sea necesario | Curso 4 · M3 | Cursos 4 · 4.2 y 6 · 3.4 |
| Coordinación de resultados | Curso 5 · 2.4 y 3.2 | Curso 6 · 3.2 |
| Automatización de procesos | Curso 6 · 1.3 | Curso 6 · 4.2 |
| Permisos y aprobaciones humanas | Cursos 3 · 4.2–4.3, 5 · 4.1 y 6 · 2.1–2.2 | Curso 6 · 3.3 y 4.2 |
| Pruebas y validación | Cursos 2 · 4.4, 3 · 2.4 y 5 · 3.3 | Curso 6 · 4.1 y 4.3 |
| Supervisión humana | Cursos 5 · 4.1 y 6 · 2.1 | Curso 6 · 4.3 |

**Viabilidad técnica (verificada en la documentación oficial):**

- El **coordinador** puede ser la sesión principal de Claude Code o un subagente con permiso para crear otros
  subagentes: la documentación indica que un subagente puede crear sus propios subagentes si tiene la herramienta
  `Agent`, dentro de un límite de profundidad.
- Cada subagente tiene **su propio contexto, prompt de sistema y permisos**. Así se limita al programador, que solo
  edita con aprobación, y se deja al investigador y al analista en solo lectura.
- Los **hooks** bloquean acciones peligrosas de forma determinista, por ejemplo `git push`, y las **reglas de
  permisos** piden confirmación antes de editar.
- Las **tareas programadas** de Claude Code solo se ejecutan con la sesión abierta. Para automatizar sin el
  computador encendido existen las tareas de Cowork en la nube (de pago) y GitHub Actions; se elegirá al crear las
  clases, siempre sin la API de pago.
- Los **equipos de agentes** de Claude Code son experimentales: el proyecto se apoya en subagentes, que son estables,
  y los equipos quedan como opción.
- **Costo:** todo el proyecto se hace con un plan Pro. Usar varios agentes consume más del límite de uso, y la clase
  5 · 1.4 lo explica.

## 13. Cómo se combinan los componentes

| Combinación | Qué aporta cada parte | Ejemplo práctico | Dónde se enseña |
|---|---|---|---|
| Claude + Prompt Engineering | Claude ejecuta; el prompt define qué y cómo | Un resumen fiel con citas gracias a un prompt estructurado | Curso 2 |
| Claude Code + Skills | Claude Code actúa en el proyecto; la skill aporta el procedimiento | Una skill «revisar accesibilidad» aplicada al editar páginas | Cursos 3 · 4.4 y 4 · M2 |
| Agentes + Herramientas | El agente decide; las herramientas le permiten actuar | Un agente que busca en la web y escribe un informe | Curso 5 · 1.2 y 2.3 |
| Agentes + Subagentes | El agente principal delega con contexto separado | El investigador de solo lectura entrega un resumen al coordinador | Curso 5 · M2 y M3 |
| Agentes + MCP | MCP conecta al agente con datos y servicios externos | Un agente que consulta documentación oficial vía MCP | Cursos 5 · 2.3 y 6 · 3.4 |
| Skills + Agentes + Subagentes | Cada subagente usa skills de su especialidad | El revisor usa la skill de calidad | Cursos 5 · 4.2 y 6 · 3.4 |
| MCP + herramientas externas | El servidor MCP expone herramientas de un servicio | Un servidor que ofrece herramientas de navegador | Curso 4 · M3 |
| Agentes + Automatizaciones | La automatización dispara al equipo | Un informe semanal generado y revisado | Curso 6 · 4.2 |
| Claude Code + agentes + permisos + hooks | Los permisos limitan, los hooks imponen reglas, los agentes trabajan | El programador no puede hacer `git push` | Cursos 3 · M4 y 6 · M2 |
| Sistema completo | Todo coordinado | El equipo de cinco agentes | Curso 6 |

**Errores de concepto que se corrigen explícitamente:** una skill no es una herramienta; un agente no es un
subagente; MCP no es un agente; un hook no es una sugerencia al modelo; un plugin es un paquete de componentes.

## 14. Gratis o de pago

Verificado el 11/11/2026 en la página de planes y el centro de ayuda.

| Función | Plan gratuito | Pago (Pro o superior) | Cursos |
|---|---|---|---|
| Chat, archivos, búsqueda web, memoria | Sí | Sí | 1, 2 y 4 |
| Proyectos | Hasta 5 | Sí | 1 y 2 |
| Skills | Sí (hay que activar la ejecución de código) | Sí | 4 |
| Conectores personalizados (MCP remoto) | 1 | Sí | 1 y 4 |
| Research | No | Sí | 1 (opcional) |
| Cowork | No | Sí | 1, 3 y 6 |
| Claude Code (subagentes, hooks, MCP, plugins, tareas programadas) | No | Sí | 3, 4, 5 y 6 |
| API y Agent SDK | De pago aparte | De pago aparte | **No se usan** (la documentación del Agent SDK indica configurar una clave de API) |

**Alternativa gratuita en los cursos de pago:** diseñar, escribir y probar en el chat los prompts, los roles de los
agentes, las skills y los flujos, y estudiar las demostraciones.

## 15. Biblioteca audiovisual

**Videos ya verificados que se conservan: 20.** Todos estaban disponibles el 11/11/2026. 39 de las 91 clases tienen al
menos uno, y 52 quedan «pendientes».

| Video | Canal | Idioma | Se usa en |
|---|---|---|---|
| ¿Qué son los Grandes Modelos de Lenguaje? | Derivando | Español | Curso 1 · 1.1 |
| Claude Chat, Claude Code y Claude Cowork: no son lo mismo | Datademia | Español | Cursos 1 · 1.2 y 3 · 1.1 |
| Claude Code: Curso completo desde cero en 3 horas (2026) | MoureDev | Español | Por capítulos en los Cursos 1, 3, 4, 5 y 6 |
| Lesson 2B: The 4D Framework · Lesson 4: Delegation | Anthropic | Inglés | Curso 1 · 4.1 |
| Lesson 8: A closer look at Discernment | Anthropic | Inglés | Curso 2 · 4.3 |
| Ingeniería de prompts: Para la vida real (lecciones 1 a 5) | DevTalles | Español | Curso 2 · M1 y 2.3 |
| Prompting 101 | Anthropic | Inglés | Curso 2 · 2.1 y 3.1 |
| AI prompt engineering: A deep dive | Anthropic | Inglés | Curso 2 · 4.2 |
| Evaluate prompts in the Anthropic Console | Anthropic | Inglés | Curso 2 · 4.4 (solo para ver: usa la API) |
| Building and prototyping with Claude Code | Anthropic | Inglés | Curso 3 · 2.1 |
| Claude Code best practices | Anthropic | Inglés | Curso 3 · 2.2 y 5.1 |
| Tips for building AI agents | Anthropic | Inglés | Curso 5 · 1.1 |
| How We Build Effective Agents | AI Engineer (ponente de Anthropic) | Inglés | Curso 5 · 1.2 y 3.1 |
| The Model Context Protocol: Connecting AI to Everything | PyTorch Foundation (ponente de Anthropic) | Inglés | Curso 4 · 3.1 |
| Curso COMPLETO de GIT y GITHUB desde CERO | MoureDev | Español | Curso 3 · 1.2 |

**Video indicado por el alumno: MoureDev, «Claude Code: Curso completo desde cero en 3 horas (2026)», minuto 2:30:23.**

- **Disponible:** sí (verificado el 11/11/2026; 3:07:54; publicado el 13/08/2026; en español).
- **Contenido real:** ese minuto está dentro del capítulo oficial «Plugins: comandos + skills + MCPs + hooks en un solo
  paquete» (de 2:29:26 a 2:33:45). Según los subtítulos, explica que un plugin reúne skills, MCP, comandos y hooks.
- **Propuesta:** recurso principal de **Curso 4 · 4.1 (Plugins)**, desde 2:30:23. No encaja en el Curso 1, Módulo 1,
  que trata qué es Claude, sus límites, planes y modelos. Ahí el principal sería Derivando (ya en IA 01).

**Capítulos de MoureDev usados (verificados en sus capítulos oficiales):** 0:00 qué es Claude Code · 8:19 agente y
bucle agéntico · 12:35 instalación · 18:35 primeros pasos · 23:04 acciones y modos · 33:38 modelos · 41:49 modos de
edición · 45:33 modo plan · 59:10 checkpoints · 1:09:06 contexto y memoria · 1:16:51 CLAUDE.md · 1:31:38 reglas y
Auto Memory · 1:42:47 comandos personalizados · 1:56:59 skills · 2:09:35 MCP · 2:21:25 gestión visual de skills y
conectores · 2:29:26 plugins · 2:33:45 subagentes y equipos · 2:49:04 hooks · 2:56:18 comandos extra · 3:00:26 buenas
prácticas.

**Repeticiones justificadas:**

- El curso de MoureDev aparece en varios cursos, pero siempre en un capítulo distinto que corresponde al tema de cada
  clase. Es el único curso completo en español sobre Claude Code verificado.
- Hay tres casos en que dos clases comparten el mismo capítulo: MoureDev 2:21:25 en Curso 4 · 2.4 y 3.3 (el capítulo
  trata skills y conectores a la vez); MoureDev 2:33:45 en Curso 5 · 2.1 y 3.2 (subagentes y su coordinación); y
  MoureDev 8:19 en Cursos 3 · 1.1 y 5 · 1.1 (presentación breve frente a estudio a fondo del agente). Al crear esas
  clases se buscará un segundo recurso para reducir la repetición.

**Al crear cada clase** se buscarán y verificarán los videos pendientes con el estándar de la academia. Aparecerán
dentro de la clase, en el catálogo y en las rutas, nunca en el menú. Al terminar cada módulo se entregará la auditoría
pedida: clases, clases con videos verificados, pendientes, videos únicos, fuentes y repeticiones justificadas.

## 16. Auditoría del curso actual y traslado de contenidos

**Estado actual:** «IA: Claude y productividad», 11 módulos, 55 clases; listas IA 01 e IA 02 (aprobadas).

| Módulo actual | Pasa a |
|---|---|
| M1 Fundamentos de la IA generativa y de Claude | Curso 1 (IA 01 e IA 02 intactas) |
| M2 y M3 Prompting · Niveles 1 y 2 | Curso 2, Módulos 1 y 2 |
| M4 Espacio de trabajo | Curso 1 (uso) y Curso 4 (conectores MCP a fondo) |
| M5 y M6 Prompting · Niveles 3 y 4 | Curso 2, Módulos 3 y 4 |
| M7 Skills | Curso 4, Módulo 2 |
| M8 Prompting · Nivel 5 (aplicaciones) | Curso 2, Módulo 5 y Curso 1, Módulo 3 |
| M9 Context engineering y Claude Code | Curso 3 |
| M10 Agentes, subagentes y automatización | Cursos 5 y 6 |
| M11 Proyecto: biblioteca de prompts | Curso 2, proyecto del curso |

## 17. Cómo se integraría en la academia sin perder nada

Solo después de tu aprobación, y por etapas:

1. El Curso 1 **conserva el id `ia`** («IA 1 · Fundamentos y uso de Claude»). IA 01 e IA 02 mantienen su `archivo` e
   `id`; el avance y la sincronización no cambian.
2. Cinco cursos nuevos con ids propios: `prompt`, `claudecode`, `extensiones` (Curso 4), `agentes` (Curso 5) y
   `automatizacion`, con clases de prefijos `pe-`, `cc-`, `ext-`, `ag-` y `aut-`.
3. Las 53 clases futuras del curso actual se redistribuyen según esta propuesta: no existen, así que no hay avance
   que perder.
4. Cambios técnicos: un tema de color por curso nuevo en `academia.css`, sus carpetas `cursos/<id>/` y la tabla de
   `CLAUDE.md`. El motor y la sincronización no cambian.
5. El menú pasaría de 6 a 11 cursos sin cambios en su código; una agrupación posible se consultaría antes.
6. Implementación por lotes pequeños (Curso 1 primero), con pruebas y tu revisión después de cada lote.

## 18. Decisiones que necesito que apruebes

1. **Las correcciones de la revisión** (sección 1) y la estructura resultante de 91 clases.
2. **El orden** 1 → 2 → 3 → Herramientas, Skills y MCP → Agentes → Automatización (sección 2).
3. **El reparto por objetivos** de herramientas, skills, MCP, agentes y automatización (sección 3).
4. **El proyecto progresivo** de cinco agentes (sección 12).
5. **Tu video** en el Curso 4 · 4.1 (Plugins) desde 2:30:23.
6. **Los ids** de los cursos nuevos y el nombre del Curso 1.
7. **El menú con 11 cursos** sin cambios en su código.

Hasta tu aprobación explícita no se implementa nada.

## 19. Fuentes verificadas

Consultadas el 11/11/2026. Las páginas de documentación no muestran fecha absoluta; las del centro de ayuda dicen
«actualizado hace más de una semana».

| Fuente | URL | Respalda | Estado |
|---|---|---|---|
| Claude Code · Create custom subagents | https://code.claude.com/docs/en/sub-agents | Subagentes: contexto, prompt y permisos propios; `.claude/agents/`; subagentes dentro de subagentes con límite de profundidad; los de plugins no admiten hooks, MCP ni modo de permisos propios | Verificado (el valor exacto del límite, solo en resumen) |
| Claude Code · Extend Claude with skills | https://code.claude.com/docs/en/skills | Qué es una skill; SKILL.md; ubicaciones; comandos integrados en las skills; `context: fork` | Verificado (`context: fork`, por resumen) |
| Claude Code · Automate actions with hooks | https://code.claude.com/docs/en/hooks-guide | Hooks; PreToolUse y PostToolUse; control determinista de los hooks de comando | Verificado |
| Claude Code · Connect Claude Code to tools via MCP | https://code.claude.com/docs/en/mcp | MCP; `claude mcp add`; ámbitos; advertencias de confianza e inyección | Verificado (parte por resumen) |
| Model Context Protocol · Architecture overview | https://modelcontextprotocol.io/docs/learn/architecture | Host, cliente y servidor; herramientas, recursos y prompts; stdio y Streamable HTTP | Verificado |
| Claude Code · Plugins overview | https://code.claude.com/docs/en/plugins | Qué agrupa un plugin; que puede ejecutar código con tus privilegios | Verificado |
| Claude Code · Configure permissions | https://code.claude.com/docs/en/permissions | Modos y reglas allow, ask y deny; orden; límites de las reglas de Bash | Verificado (parte por resumen) |
| Claude Code · Agent teams | https://code.claude.com/docs/en/agent-teams | Equipos de agentes: experimentales; más consumo de tokens | Verificado |
| Claude Code · Agent SDK overview | https://code.claude.com/docs/en/agent-sdk/overview | Qué es el Agent SDK; la guía pide clave de API | Verificado (si sirve el plan Pro o Max para uso propio: no confirmado) |
| Claude Code · Run prompts on a schedule | https://code.claude.com/docs/en/scheduled-tasks | Tareas programadas y `/loop`; solo con la sesión abierta | Verificado |
| Ayuda de Claude · What are skills? | https://support.claude.com/en/articles/12512176-what-are-skills | Skills en todos los planes, incluido Free; requiere ejecución de código | Verificado |
| Ayuda de Claude · Custom connectors using remote MCP | https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp | Conectores en todos los planes; Free limitado a uno | Verificado |
| Ayuda de Claude · Get started with Claude Cowork | https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork | Cowork: arquitectura agéntica de Claude Code sin terminal; solo de pago; tareas programadas en la nube | Verificado |
| Claude · Plans & pricing | https://claude.com/pricing | Funciones por plan | Verificado (en la clase IA 02) |
| MoureDev · Claude Code: Curso completo desde cero en 3 horas (2026) | https://www.youtube.com/watch?v=TCq7eZ9Lhc8 | Capítulos usados; contenido del minuto 2:30:23 | Verificado (capítulos oficiales y subtítulos) |
