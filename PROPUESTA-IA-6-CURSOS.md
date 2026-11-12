# Propuesta: la formación en IA reorganizada en seis cursos

> **Estado:** propuesta para revisar. **No implementada.** No se ha modificado el catálogo, el menú, el motor,
> la sincronización ni ninguna clase. IA 01 e IA 02 se conservan tal como están, aprobadas.
> Fecha: 11/11/2026. Verificaciones hechas ese día en la documentación oficial de Anthropic.

## Índice

1. Resumen
2. Auditoría del curso actual «IA: Claude y productividad»
3. Qué es cada componente (para no confundirlos)
4. Los seis cursos y su progresión
5. Curso 1 · Fundamentos y uso de Claude
6. Curso 2 · Prompt Engineering
7. Curso 3 · Claude Code y desarrollo asistido por IA
8. Curso 4 · Agentes y subagentes de IA
9. Curso 5 · Herramientas, Skills y MCP
10. Curso 6 · Automatización con IA y proyecto integrador
11. Cómo se combinan los componentes
12. Gratis o de pago, curso por curso
13. Biblioteca audiovisual: qué se conserva y qué falta
14. Cómo se integraría en la academia sin perder nada
15. Decisiones que necesito que apruebes
16. Fuentes verificadas

---

## 1. Resumen

- El curso actual «IA: Claude y productividad» (11 módulos, 55 clases, 2 listas) se reorganiza en
  **seis cursos independientes y conectados**, cada uno con una habilidad distinta.
- **Totales propuestos:** 6 cursos · 26 módulos · **95 clases de 120 minutos** (190 h). Hoy son 55 clases (110 h).
- **Nada se pierde:** IA 01 e IA 02 pasan al Curso 1 con su mismo archivo e `id`, así que tu avance guardado se
  conserva. Las 53 clases que aún no existen se redistribuyen sin duplicar temas.
- **Progresión:** Curso 1 → Curso 2 → Curso 3 → Cursos 4 y 5 → Curso 6.
- **Proyecto final de la formación:** un equipo de cinco agentes especializados (coordinador, investigador,
  analista, programador y revisor de calidad) construido paso a paso en el Curso 6.
- **Costos:** los Cursos 1 y 2 se hacen con el plan gratuito. Los Cursos 3, 4 y 6 necesitan, para la práctica con
  Claude Code, un plan de pago (Pro o superior). El Curso 5 se hace en buena parte gratis. **Ninguna clase necesita la
  API de pago.**
- **Sobre el video que indicaste** (MoureDev, minuto 2:30:23): está disponible, pero ese minuto corresponde al
  capítulo «Plugins» de un curso de Claude Code, no a los fundamentos. Propongo usarlo en el Curso 5 y te explico
  por qué en la sección 13.

## 2. Auditoría del curso actual «IA: Claude y productividad»

**Estado:** 11 módulos, 55 clases (110 h). Listas: **IA 01** (¿Qué es la IA generativa?) e **IA 02** (Claude y
Claude Code: planes, apps, modelos y límites de uso), ambas aprobadas.

| Módulo actual | Clases | Pasa a | Observación |
|---|---|---|---|
| M1 Fundamentos de la IA generativa y de Claude | 4 (2 listas) | Curso 1 | IA 01 e IA 02 se conservan intactas |
| M2 Prompting · Nivel 1 | 4 | Curso 2, Módulo 1 | Se conserva |
| M3 Prompting · Nivel 2 | 5 | Curso 2, Módulo 2 | «Instrucciones directas y específicas» se fusiona con el Módulo 1 (estaba duplicada) |
| M4 Espacio de trabajo (proyectos, artefactos, memoria, conectores) | 4 | Curso 1 (uso) y Curso 5 (conectores MCP a fondo) | Se separa el uso cotidiano de la parte técnica |
| M5 Prompting · Nivel 3 | 6 | Curso 2, Módulo 3 | «Investigar» e «informes» pasan a las aplicaciones del Curso 2 |
| M6 Prompting · Nivel 4 | 6 | Curso 2, Módulo 4 | «Alucinaciones» y «verificar fuentes» se fusionan |
| M7 Skills | 3 | Curso 5, Módulo 2 | Se amplía a 4 clases, con skills en Claude Code |
| M8 Prompting · Nivel 5 (aplicaciones) | 7 | Curso 2, Módulo 5 y Curso 1, Módulo 3 | El uso cotidiano (estudiar, redactar) va al Curso 1; el diseño de prompts por dominio, al Curso 2 |
| M9 Context engineering y Claude Code | 7 | Curso 3 | Se amplía a 17 clases |
| M10 Agentes, subagentes y automatización | 5 | Cursos 4 y 6 | Se amplía: agentes a un curso propio y automatización al Curso 6 |
| M11 Proyecto: biblioteca de prompts | 4 | Curso 2, Módulo 5 (proyecto del curso) | El proyecto final de la formación pasa a ser el equipo de agentes |

**Duplicaciones detectadas y cómo se resuelven:**

| Tema | Dónde aparecía | Decisión |
|---|---|---|
| Instrucciones claras y directas | M2·2 y M3·2 | Una sola clase (Curso 2, M1·2) |
| Skills | M7 y M9·5 | Crear skills: Curso 5. Usarlas desde Claude Code: Curso 3 (una clase de uso, sin repetir la creación) |
| Conectores y MCP | M4·3 y M9·7 | Agregar un conector como usuario: Curso 1 (introducción). MCP a fondo: Curso 5 |
| Alucinaciones | IA 01 (límites) y M6·3 | IA 01 da el concepto; el Curso 2 enseña las técnicas para reducirlas, sin repetir la explicación básica |
| Agentes | M10·1 y M9·1 | El concepto de agente: Curso 4. El Curso 3 solo explica que Claude Code trabaja como un agente y remite al Curso 4 |
| Investigar con Claude | M5·4 y M8·5 | Uso cotidiano: Curso 1. Diseño de prompts de investigación: Curso 2 |

## 3. Qué es cada componente (para no confundirlos)

Definiciones tomadas de la documentación oficial (sección 16). Esta tabla se repetirá como referencia en los
cursos 3 a 6.

| Componente | Qué es | Ejemplo | No es |
|---|---|---|---|
| **Herramienta** (tool) | Una función que Claude puede invocar para actuar: buscar en la web, leer un archivo, ejecutar código | La búsqueda web del chat; la herramienta Bash de Claude Code | No contiene instrucciones de procedimiento |
| **Skill** | Un archivo `SKILL.md` con instrucciones (y archivos de apoyo opcionales) que Claude agrega a su repertorio y carga cuando corresponde | Una skill «revisar accesibilidad de una página» | No es una herramienta ni un agente: es conocimiento empaquetado |
| **MCP** (Model Context Protocol) | Un estándar abierto para conectar aplicaciones de IA con herramientas y fuentes de datos externas, con arquitectura de host, cliente y servidor | Un servidor MCP que da acceso a la documentación de una tecnología | No es un agente: es la forma de conectarse |
| **Servidor MCP** | Un programa que ofrece a la IA herramientas, recursos o plantillas de prompts | El servidor de Notion o de Playwright | |
| **Agente** | Un sistema que usa un modelo, herramientas y un bucle de trabajo para completar una tarea con cierta autonomía | Claude Code resolviendo un error de principio a fin | No es un simple chatbot que responde y espera |
| **Subagente** | Un asistente especializado con su propia ventana de contexto, su propio prompt de sistema y sus propios permisos, al que el agente principal delega una tarea | Un subagente «revisor» que solo lee código | No es otro producto: vive dentro de una sesión de Claude Code |
| **Hook** | Un comando definido por ti que Claude Code ejecuta en momentos concretos (por ejemplo, antes de usar una herramienta) | Bloquear cualquier `git push` | No es una sugerencia al modelo: el control lo ejecuta Claude Code |
| **Permisos** | Reglas allow, ask y deny, y modos de permiso, que Claude Code aplica | Pedir confirmación antes de editar archivos | Las reglas de Bash no son una barrera de seguridad completa |
| **Plugin** | Un paquete que agrupa skills, subagentes, hooks y servidores MCP | Un plugin de diseño de interfaces | Puede ejecutar código con tus privilegios: instalar solo los confiables |
| **Comando personalizado** | Hoy integrado en las skills: un archivo que crea un comando `/nombre` | `/deploy` | |

## 4. Los seis cursos y su progresión

| Curso | Habilidad | Módulos · clases · horas | Necesitas antes | Plan de Claude |
|---|---|---|---|---|
| 1 · Fundamentos y uso de Claude | Usar Claude bien en la vida diaria y académica | 4 · 14 · 28 h | Nada | Gratis |
| 2 · Prompt Engineering | Diseñar instrucciones precisas y reproducibles | 5 · 20 · 40 h | Curso 1 | Gratis |
| 3 · Claude Code y desarrollo asistido por IA | Desarrollar y mantener proyectos con supervisión | 5 · 17 · 34 h | Cursos 1 y 2 (Módulos 1 a 3); se recomienda Módulo 1 de JavaScript o Python y la clase de Git | Pago (Pro o superior), salvo 2 clases |
| 4 · Agentes y subagentes de IA | Diseñar equipos de agentes coordinados | 4 · 14 · 28 h | Curso 3 | Diseño gratis; práctica de pago |
| 5 · Herramientas, Skills y MCP | Ampliar las capacidades de Claude | 4 · 15 · 30 h | Cursos 1 y 2; para la parte de Claude Code, Curso 3 | Mayormente gratis |
| 6 · Automatización con IA y proyecto integrador | Crear soluciones completas y supervisadas | 4 · 15 · 30 h | Cursos 4 y 5 | Pago, con diseño gratuito |
| **Total** | | **26 · 95 · 190 h** | | |

**Progresión:**

```
Curso 1 ──► Curso 2 ──► Curso 3 ──┬──► Curso 4 ──┐
                                   └──► Curso 5 ──┴──► Curso 6 (proyecto integrador)
```

- **Del Curso 2 al 3:** Claude Code se maneja con instrucciones. Se necesitan los Módulos 1 a 3 de Prompt
  Engineering (claridad, roles, formatos, estructura con XML y plantillas).
- **Del Curso 2 a los agentes (4) y la automatización (6):** el prompt de sistema de cada subagente, sus criterios
  de éxito y su evaluación vienen del Módulo 4 del Curso 2 (descomposición, encadenamiento, criterios de éxito y casos
  de prueba).
- **Cursos 4 y 5:** se pueden hacer en cualquier orden. El Curso 4 incluye una introducción breve a las
  herramientas y remite al Curso 5 para el detalle. Propuesta alternativa: hacer el Módulo 1 del Curso 5
  (herramientas) antes del Curso 4.
- **Curso 6:** une todo; necesita agentes (Curso 4) y skills y MCP (Curso 5).

**Metodología común en las 95 clases:** las 9 secciones del prompt maestro, 120 minutos, objetivos medibles,
ejemplos reales, demostración, actividades autocorregidas, práctica autónoma con criterios, examen, resumen, videos
verificados y fuentes oficiales. En cada clase se indica si se hace con el plan gratuito o necesita uno de pago, y
la alternativa gratuita cuando existe.

Leyenda de las tablas: **G** = plan gratuito · **P** = plan de pago (Pro o superior) · **G/P** = la parte
conceptual o de diseño es gratis y la práctica en Claude Code es de pago. En la columna de videos, «✔» indica un video
ya verificado (sección 13) y «pendiente», que se buscará y verificará al crear la clase.

## 5. Curso 1 · Fundamentos y uso de Claude

- **Meta:** usar Claude correctamente en actividades cotidianas y académicas, con criterio y seguridad.
- **Necesitas antes:** nada. **Plan:** gratuito.
- **Proyecto del curso:** un «kit de estudio» propio, con un proyecto de Claude que tenga instrucciones, materiales
  de un curso y un método de verificación de fuentes.
- **Id del curso:** se conserva `ia`, para que IA 01 e IA 02 mantengan su `id` y tu avance.

| Clase | Tema | Objetivo medible | Contenidos principales | Plan | Videos |
|---|---|---|---|---|---|
| **M1 ¿Qué es Claude?** | | | | | |
| 1.1 | ¿Qué es la IA generativa? (**IA 01, ya existe**) | Explicar qué es un modelo de lenguaje y sus límites | IA, aprendizaje automático, tokens, alucinaciones | G | ✔ Derivando |
| 1.2 | Claude y Claude Code: planes, apps, modelos y límites (**IA 02, ya existe**) | Elegir plan y modelo con argumentos | Apps, Claude Code, API, planes, modelos, límites | G | ✔ Datademia; ✔ MoureDev (modelos) |
| 1.3 | Claude frente a otras herramientas de IA | Comparar herramientas según una tarea y sus límites | Asistentes conversacionales, buscadores con IA, generadores de imágenes; criterios de elección | G | pendiente |
| 1.4 | Interfaz y configuración | Configurar Claude según tus necesidades y tu privacidad | Ajustes, preferencias y estilos de respuesta, privacidad y uso de datos | G | pendiente |
| **M2 Trabajar con Claude día a día** | | | | | |
| 2.1 | Conversaciones eficaces y organización del trabajo | Organizar chats y retomarlos sin perder el contexto | Iniciar, continuar y organizar conversaciones; cuándo empezar un chat nuevo | G | pendiente |
| 2.2 | Proyectos: instrucciones y conocimiento permanentes | Crear un proyecto con instrucciones y materiales | Proyectos (hasta 5 en el plan gratuito), conocimiento del proyecto | G | pendiente |
| 2.3 | Archivos y documentos | Analizar un PDF, una hoja de cálculo o una imagen con Claude | Subir archivos, pedir resúmenes y extracciones, límites | G | pendiente |
| 2.4 | Artefactos y ejecución de código | Crear un documento o una página con artefactos | Artefactos, ejecución de código y creación de archivos | G | pendiente |
| **M3 Claude para estudiar, investigar y producir** | | | | | |
| 3.1 | Estudiar con Claude | Usar Claude como tutor sin que haga la tarea por ti | Explicaciones, resúmenes, tarjetas, autoevaluación | G | pendiente |
| 3.2 | Investigar y verificar | Investigar un tema y comprobar cada fuente | Búsqueda web, citas, verificación; Research como opción de pago | G | pendiente |
| 3.3 | Redactar y revisar textos | Mejorar un texto propio manteniendo tu voz | Correos, informes, ensayos; revisión y estilo | G | pendiente |
| 3.4 | Resolver problemas paso a paso | Resolver un problema y validar el razonamiento | Problemas de lógica, cálculo y decisión; comprobar los pasos | G | pendiente |
| **M4 Uso responsable y funciones avanzadas** | | | | | |
| 4.1 | Fluidez en IA y uso responsable | Aplicar el marco 4D y la política de uso a un caso | Delegación, Descripción, Discernimiento y Diligencia; privacidad; verificación | G | ✔ Anthropic (4D); ✔ Anthropic (Delegación) |
| 4.2 | Memoria, conectores, Claude in Chrome y Cowork (evaluación del curso) | Decidir qué función conviene y si vale la pena pagar | Memoria; agregar un conector como usuario; Claude in Chrome y Cowork (de pago) | G/P | pendiente |

## 6. Curso 2 · Prompt Engineering

- **Meta:** diseñar instrucciones que produzcan resultados precisos, útiles y reproducibles, y evaluarlas.
- **Necesitas antes:** Curso 1. **Plan:** gratuito.
- **Proyecto del curso:** biblioteca profesional de prompts versionada, con criterios de prueba y resultados medidos
  (es el proyecto del curso actual, conservado).

| Clase | Tema | Objetivo medible | Contenidos principales | Plan | Videos |
|---|---|---|---|---|---|
| **M1 Fundamentos del prompting** | | | | | |
| 1.1 | ¿Qué es un prompt y cómo lo interpreta Claude? | Reconocer las partes de un prompt | Estructura básica; qué ve el modelo | G | ✔ DevTalles L01 |
| 1.2 | Instrucciones claras, directas y específicas | Reescribir un prompt vago como uno bien definido | Claridad, especificidad, alcance (fusiona dos clases actuales) | G | ✔ DevTalles L02 |
| 1.3 | Contexto, objetivo, audiencia y restricciones | Dar a Claude el contexto que necesita | Fórmula base: tarea, contexto, audiencia, formato | G | ✔ DevTalles L04 |
| 1.4 | Resultado esperado y errores frecuentes (evaluación del módulo) | Definir criterios de un buen resultado | Calidad de la respuesta, errores comunes | G | ✔ DevTalles L03 |
| **M2 Técnicas fundamentales** | | | | | |
| 2.1 | Roles y contextos | Asignar un rol útil y justificarlo | Prompt de rol, perspectiva, límites del rol | G | ✔ Anthropic «Prompting 101» |
| 2.2 | Ejemplos de entrada y salida (few-shot) | Mejorar la consistencia con ejemplos | Ejemplos, variedad, cuántos usar | G | pendiente |
| 2.3 | Restricciones, condiciones y formatos de salida | Obtener la respuesta en el formato pedido | Restricciones, criterios de aceptación, tablas, listas, JSON | G | ✔ DevTalles L05 |
| 2.4 | Separar instrucciones, datos y referencias (evaluación del módulo) | Evitar que los datos se confundan con las órdenes | Delimitadores, documentos de referencia | G | pendiente |
| **M3 Prompting estructurado** | | | | | |
| 3.1 | Etiquetas XML para organizar prompts | Estructurar un prompt complejo con XML | Etiquetas, jerarquía, referencias | G | ✔ Anthropic «Prompting 101» (parte de estructura) |
| 3.2 | Plantillas reutilizables y condiciones múltiples | Crear una plantilla con variables | Plantillas, variables, varias condiciones | G | pendiente |
| 3.3 | Documentos extensos y citas | Trabajar con un documento largo pidiendo citas textuales | Prompts de contexto largo, citas, extracción | G | pendiente |
| 3.4 | Ambigüedades y contradicciones (evaluación del módulo) | Detectar y corregir instrucciones contradictorias | Revisión de prompts, pruebas | G | pendiente |
| **M4 Prompting avanzado y evaluación** | | | | | |
| 4.1 | Descomponer problemas y encadenar prompts | Dividir una tarea en pasos encadenados | Descomposición, encadenamiento | G | pendiente |
| 4.2 | Razonamiento paso a paso y mejora iterativa | Mejorar un prompt en varias iteraciones medidas | Pensamiento paso a paso, iteración | G | ✔ Anthropic «AI prompt engineering: A deep dive» (desde 12:17) |
| 4.3 | Alucinaciones y verificación con fuentes | Aplicar técnicas para reducir errores y verificar | Permitir «no sé», citas, verificación (fusiona dos clases) | G | ✔ Anthropic (Discernimiento) |
| 4.4 | Criterios de éxito, casos de prueba y evaluación | Evaluar un prompt con una hoja de pruebas | Criterios medibles, casos de prueba, comparación | G | ✔ Anthropic (evaluar prompts; solo para ver) |
| **M5 Aplicaciones y biblioteca profesional** | | | | | |
| 5.1 | Prompts para programación y revisión de código | Pedir, revisar y corregir código con criterios | Generar, explicar, revisar y depurar código | G | pendiente |
| 5.2 | Prompts para investigación y análisis | Diseñar prompts de investigación y análisis de datos o documentos | Investigación, comparación, síntesis, análisis | G | pendiente |
| 5.3 | Prompts para escritura e informes | Diseñar prompts de redacción con estilo y estructura | Informes, documentación, planes | G | pendiente |
| 5.4 | Proyecto: biblioteca profesional de prompts (evaluación del curso) | Entregar una biblioteca probada y documentada | Casos de uso, versiones, transformaciones justificadas | G | pendiente |

## 7. Curso 3 · Claude Code y desarrollo asistido por IA

- **Meta:** usar Claude Code para desarrollar y mantener proyectos, siempre con supervisión.
- **Necesitas antes:** Curso 1 y Curso 2 (Módulos 1 a 3). Recomendado: Módulo 1 de JavaScript o Python y la clase
  de Git. **Plan:** Pro o superior para la práctica (Claude Code no está en el plan gratuito); las clases 1.1 y 1.2 son
  gratuitas.
- **Regla de seguridad:** se practica en carpetas y repositorios de prueba, nunca en proyectos reales.
- **Proyecto del curso:** una aplicación pequeña desarrollada y mantenida con Claude Code, con CLAUDE.md, permisos,
  un hook de protección y pruebas.

| Clase | Tema | Objetivo medible | Contenidos principales | Plan | Videos |
|---|---|---|---|---|---|
| **M1 Primeros pasos** | | | | | |
| 1.1 | Qué es Claude Code; Chat, Code y Cowork | Elegir la herramienta adecuada para una tarea | Qué hace Claude Code; diferencias con el chat y con Cowork; el bucle agéntico (el detalle va al Curso 4) | G | ✔ Datademia; ✔ MoureDev (desde 0:00 y 8:19) |
| 1.2 | Terminal y comandos básicos | Moverte por carpetas y ejecutar comandos | Rutas, carpetas, archivos, ejecutar programas | G | ✔ MoureDev, curso de Git (comandos de la terminal) |
| 1.3 | Instalación, autenticación e interfaz | Instalar Claude Code e iniciar sesión con tu plan | Instalación, inicio de sesión, interfaz | P | ✔ MoureDev (desde 12:35 y 18:35) |
| 1.4 | Acciones, modos, comandos básicos y modelos | Dar las primeras órdenes y elegir modelo y esfuerzo | Comandos, modos, modelos y esfuerzo | P | ✔ MoureDev (desde 23:04 y 33:38) |
| **M2 Trabajar con proyectos** | | | | | |
| 2.1 | Crear y administrar un proyecto; leer y modificar archivos | Crear un proyecto y revisar cada cambio | Estructura, lectura y edición supervisada | P | ✔ Anthropic «Building and prototyping with Claude Code» |
| 2.2 | Modo plan: planificar, revisar y aprobar | Aprobar un plan antes de que se ejecute | Modo plan, revisión, verificación | P | ✔ Anthropic «Claude Code best practices»; ✔ MoureDev (desde 45:33) |
| 2.3 | Checkpoints, Git y control de cambios | Deshacer un cambio y versionar con Git | Checkpoints, rewind, Git | P | ✔ MoureDev (desde 59:10) |
| 2.4 | Desarrollo, depuración y pruebas | Corregir un error y comprobarlo con pruebas | Depurar, escribir y ejecutar pruebas | P | pendiente |
| **M3 Contexto y memoria** | | | | | |
| 3.1 | Contexto y memoria de trabajo; context engineering | Explicar qué ocupa el contexto y cómo cuidarlo | Ventana de contexto, compactación, context engineering | G/P | ✔ MoureDev (desde 1:09:06) |
| 3.2 | CLAUDE.md y referencias a archivos | Escribir un CLAUDE.md breve y útil | Memoria persistente, referencias, modo shell | P | ✔ MoureDev (desde 1:16:51) |
| 3.3 | Reglas de proyecto y Auto Memory | Definir reglas adicionales para el proyecto | Reglas por proyecto, Auto Memory | P | ✔ MoureDev (desde 1:31:38) |
| **M4 Herramientas, permisos y control** | | | | | |
| 4.1 | Las herramientas de Claude Code | Reconocer qué herramienta usa Claude en cada acción | Leer, editar, Bash, búsqueda web (el detalle conceptual va al Curso 5) | P | pendiente |
| 4.2 | Permisos y aprobaciones | Configurar reglas allow, ask y deny | Modos de permiso, reglas, orden de evaluación, límites de las reglas de Bash | P | ✔ MoureDev (desde 41:49 y 3:00:26) |
| 4.3 | Hooks y controles de ejecución | Crear un hook que bloquee una acción peligrosa | Eventos PreToolUse y PostToolUse; hooks de comando y su carácter determinista | P | ✔ MoureDev (desde 2:49:04) |
| 4.4 | Comandos personalizados y uso de skills en Claude Code | Usar una skill y crear un comando sencillo | Comandos y skills integrados (crear skills a fondo: Curso 5) | P | ✔ MoureDev (desde 1:42:47) |
| **M5 Buenas prácticas y proyecto** | | | | | |
| 5.1 | Buenas prácticas y seguridad | Aplicar una lista de verificación de seguridad | Supervisión, carpetas de prueba, revisión de cambios | P | ✔ Anthropic «Claude Code best practices» |
| 5.2 | Proyecto: desarrollar y mantener una aplicación (evaluación del curso) | Entregar una app funcional con su CLAUDE.md, permisos y un hook | Proyecto completo supervisado | P | pendiente |

## 8. Curso 4 · Agentes y subagentes de IA

- **Meta:** diseñar un sistema de agentes especializados que trabajen de forma coordinada y supervisada.
- **Necesitas antes:** Curso 3 (y Curso 2, Módulo 4). **Plan:** el diseño de agentes se hace gratis en el chat; crear y
  ejecutar subagentes requiere Claude Code (de pago).
- **Proyecto del curso:** un equipo de tres subagentes (investigador de solo lectura, programador y revisor) con sus
  criterios de evaluación.

| Clase | Tema | Objetivo medible | Contenidos principales | Plan | Videos |
|---|---|---|---|---|---|
| **M1 Qué es un agente** | | | | | |
| 1.1 | Agente, chatbot y flujo de trabajo | Distinguir un agente de un chatbot y de un flujo fijo | Autonomía, bucle agéntico, cuándo conviene un agente | G | ✔ Anthropic «Tips for building AI agents»; ✔ MoureDev (desde 8:19) |
| 1.2 | Arquitectura de un agente | Dibujar los componentes de un agente | Modelo, herramientas, memoria, bucle, entorno | G | ✔ AI Engineer «How We Build Effective Agents» |
| 1.3 | Planificación y ejecución de tareas | Hacer que un agente planifique antes de actuar | Plan, pasos, verificación | P | pendiente |
| 1.4 | Riesgos y supervisión humana | Definir puntos de control humano | Errores, inyección de instrucciones, límites | G | pendiente |
| **M2 Subagentes** | | | | | |
| 2.1 | Qué son los subagentes | Explicar por qué un subagente tiene su propio contexto | Contexto propio, prompt de sistema, permisos | P | ✔ MoureDev (desde 2:33:45) |
| 2.2 | Crear subagentes especializados | Crear un subagente en `.claude/agents/` | Archivo Markdown con frontmatter, `name` y `description` | P | pendiente |
| 2.3 | Roles, responsabilidades y herramientas | Asignar a cada subagente solo las herramientas que necesita | Mínimo privilegio aplicado a agentes | P | pendiente |
| 2.4 | Memoria, contexto y transferencia de resultados | Diseñar qué devuelve cada subagente | Resúmenes, formatos de entrega, límites del contexto | P | pendiente |
| **M3 Coordinación** | | | | | |
| 3.1 | Delegación y patrones de trabajo | Elegir el patrón adecuado para un problema | Encadenamiento, enrutamiento, paralelización, orquestador-trabajadores, evaluador-optimizador | G/P | ✔ AI Engineer «How We Build Effective Agents» |
| 3.2 | Coordinación y comunicación entre agentes | Coordinar varios agentes sin perder resultados | Subagentes dentro de subagentes (con límite de profundidad); equipos de agentes (experimentales) | P | ✔ MoureDev (desde 2:33:45) |
| 3.3 | Evaluación y control de calidad | Evaluar el resultado de un agente con criterios | Criterios de éxito, casos de prueba, revisión | P | pendiente |
| **M4 Diseño de equipos** | | | | | |
| 4.1 | Diseñar un equipo de agentes | Diseñar roles e interfaces de un equipo | Roles, entradas y salidas, flujo | G | pendiente |
| 4.2 | Supervisión humana y aprobaciones | Colocar aprobaciones en los puntos de riesgo | Modo plan, permisos, revisiones | P | pendiente |
| 4.3 | Proyecto: equipo de tres subagentes (evaluación del curso) | Entregar un equipo funcional con su evaluación | Investigador, programador y revisor | P | pendiente |

## 9. Curso 5 · Herramientas, Skills y MCP

- **Meta:** comprender y ampliar las capacidades de Claude con herramientas, skills y conexiones MCP.
- **Necesitas antes:** Cursos 1 y 2; para las clases de Claude Code, Curso 3. **Plan:** las skills están en todos los
  planes, incluido el gratuito (hay que activar la ejecución de código); el plan gratuito permite un conector
  personalizado; MCP y skills en Claude Code son de pago.
- **Proyecto del curso:** una skill propia y una conexión MCP confiable que resuelvan juntas una tarea real.

| Clase | Tema | Objetivo medible | Contenidos principales | Plan | Videos |
|---|---|---|---|---|---|
| **M1 Herramientas** | | | | | |
| 1.1 | Qué es una herramienta y cómo la usa Claude | Explicar el ciclo pedir, usar y responder con herramientas | Uso de herramientas (tool use), decisión del modelo | G | pendiente |
| 1.2 | Herramientas integradas del chat | Usar la búsqueda web, los archivos y la ejecución de código | Investigación, archivos, ejecución de tareas | G | pendiente |
| 1.3 | Herramientas de Claude Code | Reconocer y limitar las herramientas de Claude Code | Leer, editar, Bash, web; permisos por herramienta | P | pendiente |
| 1.4 | Herramientas integradas y externas | Decidir cuándo hace falta una herramienta externa | Integradas frente a externas (vía MCP); configuración | G/P | pendiente |
| **M2 Skills** | | | | | |
| 2.1 | Qué es una skill; skill, herramienta y agente | Distinguir los tres con ejemplos | Definición, carga automática, diferencias | G | ✔ MoureDev (desde 1:56:59) |
| 2.2 | Estructura de una skill | Escribir un SKILL.md con su descripción | Frontmatter, `description`, instrucciones, archivos de apoyo | G | pendiente |
| 2.3 | Crear y probar skills en el chat | Convertir un prompt probado en una skill | Crear, subir y probar una skill | G | pendiente |
| 2.4 | Skills en Claude Code: reutilizables y especializadas | Instalar una skill de proyecto y una personal | Ubicaciones, gestión visual de skills | P | ✔ MoureDev (desde 2:21:25) |
| **M3 MCP** | | | | | |
| 3.1 | Qué es MCP y qué problema resuelve | Explicar MCP con un ejemplo | Estándar abierto, integración de herramientas y datos | G | ✔ PyTorch Foundation «The Model Context Protocol» (ponente de Anthropic) |
| 3.2 | Arquitectura de MCP | Identificar host, cliente y servidor en un caso | Host, cliente, servidor; herramientas, recursos y prompts; transportes stdio y Streamable HTTP | G | pendiente |
| 3.3 | Conectores en Claude: un servidor MCP remoto | Agregar un conector confiable | Conectores personalizados (1 en el plan gratuito) | G | ✔ MoureDev (desde 2:21:25) |
| 3.4 | MCP en Claude Code | Conectar un servidor con `claude mcp add` | Ámbitos local, proyecto y usuario; `.mcp.json` | P | ✔ MoureDev (desde 2:09:35) |
| 3.5 | Seguridad y permisos en MCP | Evaluar si un servidor es confiable | Confianza, inyección de instrucciones, permisos | G/P | pendiente |
| **M4 Integración** | | | | | |
| 4.1 | Plugins: skills, MCP, hooks y subagentes en un paquete | Instalar un plugin y explicar qué contiene | Plugins, marketplace, seguridad | P | ✔ **Video indicado por el alumno**: MoureDev, desde 2:30:23 (capítulo «Plugins», de 2:29:26 a 2:33:45) |
| 4.2 | Proyecto: skill + MCP para una tarea real (evaluación del curso) | Entregar una skill y una conexión MCP documentadas | Diseño, prueba y seguridad | G/P | pendiente |

## 10. Curso 6 · Automatización con IA y proyecto integrador

- **Meta:** combinar todo lo anterior para crear soluciones completas, automatizadas y supervisadas.
- **Necesitas antes:** Cursos 4 y 5. **Plan:** el diseño de flujos es gratis; ejecutar agentes y automatizaciones con
  Claude Code o Cowork es de pago. Se evita la API de pago.
- **Proyecto integrador (obligatorio):** un equipo de cinco agentes especializados, construido paso a paso.

| Clase | Tema | Objetivo medible | Contenidos principales | Plan | Videos |
|---|---|---|---|---|---|
| **M1 Fundamentos de la automatización** | | | | | |
| 1.1 | Qué es automatizar con IA | Elegir qué tareas conviene automatizar | Tareas repetitivas, riesgos, beneficios | G | pendiente |
| 1.2 | Diseñar flujos de trabajo | Dibujar un flujo con entradas, pasos, salidas y controles | Diseño de flujos, puntos de control | G | pendiente |
| 1.3 | Automatizar con Claude | Programar una tarea y explicar sus límites | Tareas programadas y `/loop` en Claude Code; tareas de Cowork; GitHub Actions | P | ✔ MoureDev (desde 2:56:18) |
| 1.4 | Manejo de errores y validación de resultados | Detectar y tratar los fallos de una automatización | Validación, reintentos, registro | G/P | pendiente |
| **M2 Control y seguridad** | | | | | |
| 2.1 | Procesos supervisados y aprobaciones humanas | Colocar aprobaciones en un flujo | Revisión humana, modo plan | P | pendiente |
| 2.2 | Permisos, hooks y límites | Proteger una automatización con permisos y hooks | Reglas, hooks, límites de uso | P | pendiente |
| 2.3 | Seguridad de las automatizaciones | Evaluar los riesgos de un flujo | Inyección de instrucciones, secretos, servidores confiables | G | pendiente |
| **M3 Proyecto integrador I: el equipo** | | | | | |
| 3.1 | Diseño del equipo de cinco agentes | Definir roles, entradas, salidas y flujo | Coordinador, investigador, analista, programador y revisor | G | pendiente |
| 3.2 | El coordinador | Recibir solicitudes y repartir el trabajo | Delegación, plan, seguimiento | P | pendiente |
| 3.3 | El investigador | Buscar y recopilar información con fuentes | Herramientas de búsqueda, skills, MCP si corresponde | P | pendiente |
| 3.4 | El analista | Interpretar resultados y proponer decisiones | Análisis, formato de entrega | P | pendiente |
| **M4 Proyecto integrador II: ejecución y control** | | | | | |
| 4.1 | El programador | Implementar solo lo autorizado | Permisos limitados, carpeta de prueba | P | pendiente |
| 4.2 | El revisor de calidad | Verificar resultados y reportar errores | Pruebas, criterios, hooks | P | pendiente |
| 4.3 | Automatizar y supervisar el flujo completo | Ejecutar el flujo con aprobaciones humanas | Coordinación, automatización, supervisión | P | pendiente |
| 4.4 | Presentación y defensa del equipo (evaluación final) | Demostrar el equipo funcionando y justificar el diseño | Demostración, evaluación, mejoras | G/P | pendiente |

**Qué aprende el estudiante en el proyecto:** diseñar los roles; configurar las herramientas y skills de cada agente;
delegar en subagentes; usar MCP cuando corresponde; coordinar el trabajo; automatizar; establecer permisos y
aprobaciones; validar los resultados; y mantener la supervisión humana. Termina con un equipo que funciona, no solo
con definiciones.

**Nota técnica:** en Claude Code un subagente puede crear sus propios subagentes si se le da la herramienta `Agent`,
dentro de un límite de profundidad; los «equipos de agentes» son una función experimental y desactivada por defecto.
Por eso el proyecto se apoya en subagentes (función estable) y presenta los equipos de agentes solo como opción.

## 11. Cómo se combinan los componentes

| Combinación | Qué aporta cada parte | Ejemplo práctico | Dónde se enseña |
|---|---|---|---|
| Claude + Prompt Engineering | Claude ejecuta; el prompt define qué y cómo | Un resumen fiel con citas gracias a un prompt estructurado | Curso 2 |
| Claude Code + Skills | Claude Code actúa en el proyecto; la skill aporta el procedimiento | Una skill «revisar accesibilidad» que Claude Code aplica al editar páginas | Cursos 3 y 5 |
| Agentes + Herramientas | El agente decide; las herramientas le permiten actuar | Un agente que busca en la web y escribe un informe | Cursos 4 y 5 |
| Agentes + Subagentes | El agente principal delega tareas con contexto separado | Un investigador de solo lectura entrega un resumen al principal | Curso 4 |
| Agentes + MCP | MCP conecta al agente con datos y servicios externos | Un agente que consulta la documentación oficial de una tecnología vía MCP | Cursos 5 y 6 |
| Skills + Agentes + Subagentes | Cada subagente usa skills de su especialidad | El revisor usa una skill de pruebas | Cursos 5 y 6 |
| MCP + herramientas externas | El servidor MCP expone herramientas de un servicio | Un servidor que ofrece herramientas para trabajar con un navegador | Curso 5 |
| Agentes + Automatizaciones | La automatización dispara al agente según un horario o evento | Un informe semanal generado y revisado | Curso 6 |
| Claude Code + agentes + permisos + hooks | Los permisos limitan, los hooks imponen reglas, los agentes trabajan | El programador no puede hacer `git push` por un hook | Cursos 3, 4 y 6 |
| Sistema completo | Todo lo anterior coordinado | El equipo de cinco agentes del proyecto integrador | Curso 6 |

**Errores de concepto que los cursos corrigen explícitamente:** una skill no es una herramienta; un agente no es un
subagente; MCP no es un agente; un hook no es una sugerencia al modelo; un plugin no es «más inteligencia», es un
paquete de componentes.

## 12. Gratis o de pago, curso por curso

Verificado el 11/11/2026 en la página de planes y el centro de ayuda oficial.

| Función | Plan gratuito | Pago (Pro o superior) | Dónde se usa |
|---|---|---|---|
| Chat, archivos, búsqueda web, memoria | Sí | Sí | Cursos 1, 2 y 5 |
| Proyectos | Hasta 5 | Sí | Cursos 1 y 2 |
| Skills | Sí (hay que activar la ejecución de código) | Sí | Curso 5 |
| Conectores personalizados (MCP remoto) | 1 | Sí | Cursos 1 y 5 |
| Research | No | Sí | Curso 1 (opcional, con alternativa gratuita) |
| Cowork | No | Sí | Cursos 1, 3 y 6 |
| Claude Code (subagentes, hooks, MCP, plugins, tareas programadas) | No | Sí | Cursos 3, 4, 5 y 6 |
| API y Agent SDK | De pago aparte | De pago aparte | **No se usan.** La documentación del Agent SDK indica configurar una clave de API |

**Alternativa gratuita en los cursos de pago:** diseñar, escribir y probar en el chat los prompts, los roles de los
agentes, las skills y los flujos; y estudiar las demostraciones de las clases. Ejecutarlos con Claude Code requiere el
plan de pago.

## 13. Biblioteca audiovisual: qué se conserva y qué falta

**Videos ya verificados que se conservan (20, todos disponibles el 11/11/2026):**

| Video | Canal | Idioma | Se usa en |
|---|---|---|---|
| ¿Qué son los Grandes Modelos de Lenguaje? | Derivando | Español | Curso 1 · 1.1 (IA 01) |
| Claude Chat, Claude Code y Claude Cowork: no son lo mismo | Datademia | Español | Curso 1 · 1.2 (IA 02); Curso 3 · 1.1 |
| Claude Code: Curso completo desde cero en 3 horas (2026) | MoureDev | Español | Por capítulos en los Cursos 1, 3, 4, 5 y 6 (ver abajo) |
| Lesson 2B: The 4D Framework | Anthropic | Inglés | Curso 1 · 4.1 |
| Lesson 4: A closer look at Delegation | Anthropic | Inglés | Curso 1 · 4.1 |
| Lesson 8: A closer look at Discernment | Anthropic | Inglés | Curso 2 · 4.3 |
| Ingeniería de prompts: Para la vida real (lecciones 1 a 5) | DevTalles | Español | Curso 2 · 1.1 a 1.4 y 2.3 |
| Prompting 101 | Anthropic | Inglés | Curso 2 · 2.1 y 3.1 |
| AI prompt engineering: A deep dive | Anthropic | Inglés | Curso 2 · 4.2 |
| Evaluate prompts in the Anthropic Console | Anthropic | Inglés | Curso 2 · 4.4 (solo para ver: usa la API) |
| Building and prototyping with Claude Code | Anthropic | Inglés | Curso 3 · 2.1 |
| Claude Code best practices | Anthropic | Inglés | Curso 3 · 2.2 y 5.1 |
| Tips for building AI agents | Anthropic | Inglés | Curso 4 · 1.1 |
| How We Build Effective Agents | AI Engineer (ponente de Anthropic) | Inglés | Curso 4 · 1.2 y 3.1 |
| The Model Context Protocol: Connecting AI to Everything | PyTorch Foundation (ponente de Anthropic) | Inglés | Curso 5 · 3.1 |
| Curso COMPLETO de GIT y GITHUB desde CERO | MoureDev | Español | Curso 3 · 1.2 (capítulo de la terminal) |

**Video indicado por el alumno: MoureDev, «Claude Code: Curso completo desde cero en 3 horas (2026)», minuto 2:30:23.**

- **Disponible:** sí (verificado el 11/11/2026; 3:07:54; publicado el 13/08/2026; en español).
- **Contenido real en ese minuto:** el capítulo oficial «Plugins: comandos + skills + MCPs + hooks en un solo paquete»,
  que va de 2:29:26 a 2:33:45. Según los subtítulos, explica que un plugin reúne skills, MCP, comandos y hooks y lo
  muestra con un plugin de diseño de interfaces y otro de Playwright.
- **Por qué no lo propongo como principal del Curso 1, Módulo 1:** ese módulo trata qué es Claude, cómo funciona,
  sus límites, planes y modelos; el fragmento de plugins es contenido de Claude Code avanzado.
- **Propuesta:** usarlo como recurso principal de la clase **Curso 5 · 4.1 (Plugins)**, desde 2:30:23, exactamente el
  minuto indicado. El mismo curso de MoureDev sí aporta al Curso 1 su capítulo «Modelos» (33:38), ya usado en IA 02.
- **Para el Curso 1, Módulo 1** propongo como principal el video de Derivando (ya en IA 01) y, para comparar
  herramientas (1.3) e interfaz (1.4), buscar y verificar videos nuevos al crear esas clases.

**Capítulos del curso de MoureDev usados (verificados en sus capítulos oficiales):** 0:00 qué es Claude Code · 8:19
agente y bucle agéntico · 12:35 instalación · 18:35 primeros pasos · 23:04 acciones y modos · 33:38 modelos · 41:49
modos de edición · 45:33 modo plan · 59:10 checkpoints · 1:09:06 contexto y memoria · 1:16:51 CLAUDE.md · 1:31:38
reglas y Auto Memory · 1:42:47 comandos personalizados · 1:56:59 skills · 2:09:35 MCP · 2:21:25 gestión visual de
skills y conectores · 2:29:26 plugins · 2:33:45 subagentes y equipos · 2:49:04 hooks · 2:56:18 comandos extra (loop,
schedule…) · 3:00:26 buenas prácticas.

- **Repeticiones justificadas:** el curso de MoureDev aparece en varios cursos, pero siempre en un capítulo distinto
  que corresponde al tema de cada clase; es el único curso completo en español sobre Claude Code verificado.
  «How We Build Effective Agents» se usa en dos clases del Curso 4 (arquitectura y patrones).
- **Videos que faltan:** 56 de las 95 clases quedan «pendientes» (39 ya tienen al menos un video verificado). Se buscarán y verificarán al crear cada clase, con
  el estándar de la academia (disponibilidad, título, canal, duración, minutos, subtítulos y contenido comprobado con
  capítulos o subtítulos). Si no hay un recurso de calidad, la clase lo dirá.
- **Integración:** los videos aparecerán dentro de cada clase, en el catálogo (`recursos/catalogo.js` y
  `recursos/videos.json`) y en las rutas de aprendizaje. No se agregan al menú principal. Al terminar cada módulo se
  entregará la auditoría que pediste.

## 14. Cómo se integraría en la academia sin perder nada

Solo después de tu aprobación, y por etapas:

1. **Curso 1 conserva el id `ia`** (con un nombre nuevo: «IA 1 · Fundamentos y uso de Claude»). IA 01 e IA 02 mantienen
   su `archivo` e `id`, así que el avance y la sincronización no cambian.
2. **Cinco cursos nuevos en el catálogo**, con ids propios: `prompt`, `claudecode`, `agentes`, `extensiones` y
   `automatizacion`. Sus clases usarían los prefijos `pe-`, `cc-`, `ag-`, `ext-` y `aut-`.
3. **Las 53 clases futuras del curso actual** se redistribuyen según esta propuesta (no existen aún, así que no hay
   avance que perder).
4. **Cambios técnicos necesarios:** un tema de color por curso nuevo en `academia.css`, sus carpetas
   (`cursos/<id>/`) con instrucciones, ruta y progreso, y la tabla de cursos de `CLAUDE.md`. El motor y la
   sincronización no necesitan cambios.
5. **El menú pasaría de 6 a 11 cursos.** Funciona sin cambios en su código; si prefieres, más adelante se puede
   proponer agruparlos (por ejemplo, «Formación en IA»), pero eso requeriría tocar el menú y te lo consultaría antes.
6. **Orden de implementación sugerido:** Curso 1 completo (12 clases nuevas), luego Curso 2, y así sucesivamente, en
   lotes pequeños con pruebas y tu revisión después de cada lote.

## 15. Decisiones que necesito que apruebes

1. **La estructura de seis cursos** (secciones 5 a 10), o los cambios que quieras.
2. **El total:** 95 clases de 120 minutos (190 h).
3. **El orden entre los Cursos 4 y 5:** en cualquier orden (propuesta), o el Módulo 1 del Curso 5 antes del Curso 4.
4. **El video que indicaste:** usarlo en el Curso 5 · 4.1 (Plugins) desde 2:30:23, como propongo, o en otro lugar
   que prefieras.
5. **Los ids** de los cursos nuevos (sección 14) y el nombre nuevo del Curso 1.
6. **El proyecto final de la formación:** el equipo de cinco agentes del Curso 6 (la biblioteca de prompts queda como
   proyecto del Curso 2).
7. **El menú con 11 cursos** sin cambios en su código, o una propuesta posterior de agrupación.

Hasta tu aprobación explícita no se implementa nada de esta propuesta.

## 16. Fuentes verificadas

Consultadas el 11/11/2026. Ninguna página de documentación muestra fecha absoluta; las del centro de ayuda dicen
«actualizado hace más de una semana».

| Fuente | URL | Respalda | Estado |
|---|---|---|---|
| Claude Code · Create custom subagents | https://code.claude.com/docs/en/sub-agents | Qué es un subagente; contexto, prompt y permisos propios; `.claude/agents/`; subagentes dentro de subagentes con límite de profundidad | Verificado (el valor exacto del límite, solo en resumen) |
| Claude Code · Extend Claude with skills | https://code.claude.com/docs/en/skills | Qué es una skill; estructura de SKILL.md; ubicaciones; los comandos se integraron en las skills | Verificado |
| Claude Code · Automate actions with hooks | https://code.claude.com/docs/en/hooks-guide | Qué son los hooks; eventos PreToolUse y PostToolUse; control determinista de los hooks de comando | Verificado |
| Claude Code · Connect Claude Code to tools via MCP | https://code.claude.com/docs/en/mcp | MCP como estándar abierto; `claude mcp add`; ámbitos; advertencias de confianza e inyección | Verificado (parte por resumen) |
| Model Context Protocol · Architecture overview | https://modelcontextprotocol.io/docs/learn/architecture | Host, cliente y servidor; herramientas, recursos y prompts; transportes stdio y Streamable HTTP | Verificado |
| Claude Code · Plugins overview | https://code.claude.com/docs/en/plugins | Qué agrupa un plugin; que puede ejecutar código con tus privilegios | Verificado |
| Claude Code · Configure permissions | https://code.claude.com/docs/en/permissions | Modos de permiso; reglas allow, ask y deny; orden de evaluación; límites de las reglas de Bash | Verificado (parte por resumen) |
| Claude Code · Agent teams | https://code.claude.com/docs/en/agent-teams | Equipos de agentes: experimentales y desactivados por defecto | Verificado |
| Claude Code · Agent SDK overview | https://code.claude.com/docs/en/agent-sdk/overview | Qué es el Agent SDK; la guía indica configurar una clave de API | Verificado (si sirve el plan Pro o Max para uso propio: no confirmado) |
| Claude Code · Run prompts on a schedule | https://code.claude.com/docs/en/scheduled-tasks | Tareas programadas y `/loop`; solo se ejecutan con la sesión abierta | Verificado |
| Ayuda de Claude · What are skills? | https://support.claude.com/en/articles/12512176-what-are-skills | Skills en todos los planes, incluido Free; requiere la ejecución de código | Verificado |
| Ayuda de Claude · Custom connectors using remote MCP | https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp | Conectores en todos los planes; Free limitado a uno | Verificado |
| Ayuda de Claude · Get started with Claude Cowork | https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork | Cowork: misma arquitectura agéntica que Claude Code, sin terminal; solo planes de pago | Verificado |
| Claude · Plans & pricing | https://claude.com/pricing | Funciones por plan (Claude Code, Research y modelos) | Verificado (en la clase IA 02) |
| MoureDev · Claude Code: Curso completo desde cero en 3 horas (2026) | https://www.youtube.com/watch?v=TCq7eZ9Lhc8 | Capítulos usados; contenido del minuto 2:30:23 (capítulo «Plugins») | Verificado (capítulos oficiales y subtítulos) |
