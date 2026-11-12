# Viabilidad, costos y conservación: formación en IA en seis cursos

> **Responde a:** «Aprobación condicionada de PROPUESTA-IA-6-CURSOS.md — Versión 2» (12/11/2026).
> **Estado:** verificación previa a la implementación. **La migración NO se ha realizado:** el menú, el
> catálogo real, el motor y la sincronización siguen igual. IA 01 e IA 02 no se modificaron.
> **Conclusión:** no hay impedimentos graves. Hay un riesgo de contenido en IA 02 (R1) que necesita tu
> decisión antes de la migración.

## 1. Planes y costos (verificado el 11 y 12/11/2026)

**Claude Pro no es acceso ilimitado.** La página de planes dice «More usage than Free» y advierte que
se aplican límites de uso. Los límites funcionan así:

- **Sesión de 5 horas:** empieza con tu primer mensaje; al agotarla, esperas a que se reinicie.
- **Límite semanal:** además del de la sesión.
- **Compartidos:** el mismo límite lo gastan claude.ai, Claude Code y la app de escritorio.
- **Agentes:** cada subagente hace sus propias consultas y **gasta del mismo límite**. Un equipo de
  cinco agentes consume bastante más que una conversación.

| Categoría | Qué incluye | Uso en los cursos |
|---|---|---|
| **Gratis (Free, US$0)** | Chat con Sonnet y Haiku, archivos, búsqueda web, memoria, hasta 5 proyectos, artefactos y skills (hay que activar la ejecución de código), 1 conector personalizado (MCP remoto). Sin Opus, Research, Claude Code, Cowork ni Claude in Chrome | Cursos 1 y 2 completos; la mayor parte del 4; el diseño de los Cursos 5 y 6 |
| **Incluido en Pro (US$20/mes, o US$17/mes con pago anual)** | Todo lo anterior, más Opus, Research, Claude Code (terminal, escritorio, web y VS Code), subagentes, hooks, permisos, MCP y plugins en Claude Code, Cowork, Claude in Chrome y tareas programadas | Práctica de los Cursos 3, 5 y 6, y las clases de Claude Code del Curso 4 |
| **Con límites de uso (todos los planes)** | Sesión de 5 h y límite semanal, compartidos entre apps; los subagentes y los equipos de agentes gastan más | Se enseña a medir y cuidar el consumo (Curso 5 · 1.4) |
| **Otros planes (no necesarios)** | Max (US$100: 5 veces el uso de Pro), Ultra (US$200: 10 veces el uso semanal de Pro), Team y Enterprise (organizaciones) | Ninguna clase los exige |
| **API de pago (Claude Platform)** | Se paga por consumo de tokens. El Agent SDK pide una clave de API; `claude --bare` usa `ANTHROPIC_API_KEY` | **No se usa** en ningún curso |
| **Servicios externos** | GitHub Actions: gratis en repositorios públicos; los privados tienen una cuota incluida. Servidores MCP de terceros: opcionales | Opcionales; siempre hay una alternativa sin ellos |

**Equipos de agentes (agent teams):** son experimentales y consumen más tokens. El proyecto se apoya en
**subagentes**, que son estables; los equipos quedan como opción.

## 2. El proyecto de cinco agentes sin API de pago

**Resultado: sí se puede construir con un plan Pro, sin API y sin servicios externos obligatorios.**

| Pieza | Cómo se hace con Pro | Alternativa gratuita o limitación |
|---|---|---|
| Coordinador | La sesión principal de Claude Code, o un subagente con la herramienta `Agent`, que puede crear subagentes dentro de un límite de profundidad | En el chat gratuito se diseña su prompt y su plan de delegación, pero no se ejecuta |
| Investigador, analista y revisor | Subagentes en `.claude/agents/`, con contexto, prompt y permisos propios; el investigador y el analista quedan en solo lectura | Se diseñan y prueban sus prompts en el chat (Curso 2) |
| Programador | Subagente con permiso de edición y aprobación antes de cada cambio | El mismo diseño en el chat; sin ejecución real |
| Herramientas y skills | Integradas en Claude Code; skills de proyecto | Las skills también funcionan en el chat gratuito |
| MCP («cuando sea necesario») | **Opcional.** Servidores locales de referencia oficiales (Filesystem, Fetch, Git, Memory, Time…), gratis y sin cuentas externas. Son educativos, no para producción, y así se enseñará | Plan gratuito: 1 conector personalizado. Si no hace falta un dato externo, no se usa MCP |
| Permisos y aprobaciones | Reglas allow, ask y deny, más hooks de comando, que son deterministas: por ejemplo, bloquear `git push` | Plan gratuito: solo diseño |
| Automatización | Tareas programadas de la app de escritorio (necesitan la app abierta y el equipo encendido), `/loop`, tareas en la nube, o GitHub Actions con el token de la suscripción (`claude setup-token`, Pro o superior); los minutos de Actions son gratis en repositorios públicos | Ejecución manual del flujo, con la misma lista de pasos y aprobaciones |
| Pruebas y supervisión | Casos de prueba del Curso 2 · 4.4, ejecutados en Claude Code | Hoja de evaluación en el chat |

**Limitaciones que se dirán en clase:**

1. Un equipo de agentes gasta el límite rápido. Se trabaja con tareas pequeñas y se mide el consumo.
2. Que `claude -p` (modo sin interfaz) funcione con la suscripción se **deduce** de la documentación,
   pero no está escrito literalmente; se volverá a verificar al crear la clase 6 · 1.3. La opción
   `--bare` exige clave de API y no se usa.
3. Los servidores MCP de referencia no son para producción, y ningún servidor de terceros se instala sin
   evaluarlo antes (Curso 4 · 3.5).

## 3. Recursos audiovisuales

- **39 clases con video verificado** en la propuesta v2. En el borrador están en las mismas 39 clases,
  comprobado con un script. Antes de cada clase se vuelve a confirmar que el video sigue disponible y que
  corresponde al tema; si ya no corresponde, se reemplaza o se registra como pendiente.
- **52 clases sin video:** la búsqueda se hace al crear cada clase. **Una clase no se da por terminada
  sin esa búsqueda.** Si no hay un video adecuado, se registra el pendiente con su justificación en la
  sección de videos de la clase (`videosPendiente` en el catálogo).
- **Tu video de MoureDev para Plugins** (Curso 4 · 4.1): `TCq7eZ9Lhc8` desde **2:30:23** (9023 s),
  dentro del capítulo «Plugins» (de 2:29:26 a 2:33:45). Ya figura así en el borrador.

## 4. Procedimiento de conservación (la migración todavía no se hace)

**Respaldo:** la etiqueta `respaldo-antes-ia-6-cursos` (commit `07fd805`) guarda el estado anterior a
todo este trabajo. Se creará otra etiqueta justo antes de la migración (Lote 2).

| Qué se conserva | Cómo | Cómo se comprueba |
|---|---|---|
| IA 01 e IA 02 | Sus páginas no se tocan. En el catálogo, el borrador reutiliza **los mismos objetos** (mismo `n`, `archivo`, `id`, `videos`, módulo y orden) | Comparación de bytes con la etiqueta y comparación JSON de sus entradas (hecha: idénticas) |
| El id del curso `ia` | El Curso 1 conserva `ia`; los cursos nuevos tienen ids propios: `prompt`, `claudecode`, `extensiones`, `agentes` y `automatizacion` | `revisar-catalogo.js` (línea base de identificadores) |
| Tu avance, evaluaciones y actividades | Se guardan con claves `academia:<idClase>:…`. Como `ia-01` e `ia-02` no cambian, sus claves tampoco. Las 53 clases futuras del curso actual no existen, así que no tienen avance que perder | `pruebas-sync.html` (15 escenarios) y revisión de las claves |
| Rutas | La ruta de `ia` se regenera solo en la migración. Las de los cursos nuevos ya están generadas desde el borrador (`generar-rutas.js --con … --solo …`) | `generar-rutas.js --comprobar` |
| Motor (`academia.js`) | No cambia. Los prefijos nuevos usan la voz por defecto (la de Ciberseguridad) | Se compara con la etiqueta |
| Sincronización (`sync.js`) | No cambia | Se compara con la etiqueta y se ejecuta `pruebas-sync.html` |
| Los otros cinco cursos | Sus entradas del catálogo no cambian | Comparación JSON curso por curso (hecha: idénticos) |

**Pasos de la migración (Lote 2, cuando la autorices):**

1. Crear una etiqueta de respaldo.
2. En un solo commit, copiar el borrador a `recursos/catalogo.js`: reestructurar `ia` como Curso 1 y
   agregar los cinco cursos. Se hace de una vez para que el menú nunca muestre contenidos duplicados.
3. Regenerar las rutas y subir la versión `?v=` de `inicio.html`.
4. Actualizar la tabla de `CLAUDE.md` y preguntarte el horario de los cursos nuevos.
5. Ejecutar todas las pruebas, comprobar que IA 01, IA 02, el motor y la sincronización son idénticos
   byte a byte, y revisar el menú en el navegador (escritorio y 360 px).
6. Commit local, informe y esperar tu revisión. Sin push.

## 5. Riesgos encontrados

| # | Riesgo | Gravedad | Mitigación |
|---|---|---|---|
| R1 | **IA 02 dice algo que dejará de ser cierto.** En la línea 139: «los Módulos 1 a 8 se hacen con el plan gratuito. Solo los Módulos 9 y 10, de Claude Code, necesitan un plan de pago». Con seis cursos, esos módulos ya no existen | Media (contenido, no técnico) | **Necesita tu decisión** (ver sección 6). El resto de IA 02 sigue siendo cierto: el Módulo 1 conserva el nombre «Fundamentos de la IA generativa y de Claude» y la clase 1.3 es «Primeros pasos en el chat…», como anuncia el final de IA 02 |
| R2 | `propuestas/generar-propuesta-ampliacion.js` supone la estructura antigua de `ia` | Baja | No se vuelve a ejecutar; queda como documento histórico |
| R3 | `generar-rutas.js` exige una ruta por curso del catálogo | Baja | Las cinco carpetas ya existen con su ruta |
| R4 | Agregar los cursos nuevos antes de reestructurar `ia` duplicaría contenidos en el menú | Media | La migración se hace en un solo paso |
| R5 | Los prefijos nuevos usan la voz de Ciberseguridad | Baja | Igual que en Redes; cambiarla tocaría el motor y requiere tu autorización |
| R6 | Las funciones, precios y límites de Claude cambian | Media | Se vuelven a verificar al crear cada clase, anotando la fecha de consulta |

**Dos ajustes de orden en el Curso 1 respecto a la propuesta v2** (por R1, para que IA 02 siga siendo
cierta):

- El Módulo 1 se llama «Fundamentos de la IA generativa y de Claude», no «¿Qué es Claude?».
- La clase 1.3 es «Primeros pasos en el chat: interfaz, configuración, conversaciones y estilos»: es
  la antigua 1.4 de la v2, con el mismo contenido. La comparación con otras herramientas pasa a 1.4.

## 6. Decisión que necesito: la frase de IA 02

IA 02 está aprobada y no la toco sin tu autorización. Hay tres opciones:

1. **(Recomendada)** Cambiar solo esa frase por: «Para esta formación: los cursos IA 1 (Fundamentos) e
   IA 2 (Prompt Engineering) se hacen con el plan gratuito; los cursos de Claude Code, agentes y
   automatización necesitan un plan de pago para la práctica, y cada clase indica su alternativa
   gratuita.» Es un cambio de texto: no afecta el `id`, las actividades, el avance ni el reloj.
2. Dejarla igual y agregar en la ficha del catálogo una nota de que la organización cambió.
3. Dejarla igual por ahora y decidir después.

## 7. Fuentes verificadas

Consultadas el 11 y el 12/11/2026. Las páginas de documentación no muestran fecha de actualización.

| Fuente | URL | Respalda | Estado |
|---|---|---|---|
| Claude · Plans & pricing | https://claude.com/pricing | Precios y funciones por plan; «More usage than Free»; nota de límites de uso | Verificado |
| Ayuda de Claude · How do usage and length limits work? | https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work | Sesión de 5 h desde el primer mensaje; límites semanales | Verificado |
| Ayuda de Claude · Using Claude Code with your Pro or Max plan | https://support.claude.com/en/articles/11145838-using-claude-code-with-your-pro-or-max-plan | Claude Code incluido en Pro; límites compartidos con claude.ai | Verificado |
| Claude Code · Create custom subagents | https://code.claude.com/docs/en/sub-agents | Contexto, prompt y permisos propios; subagentes dentro de subagentes con límite de profundidad | Verificado |
| Claude Code · Agent teams | https://code.claude.com/docs/en/agent-teams | Experimentales; más consumo | Verificado |
| Claude Code · Automate actions with hooks | https://code.claude.com/docs/en/hooks-guide | Los hooks de comando son deterministas | Verificado |
| Claude Code · Configure permissions | https://code.claude.com/docs/en/permissions | Reglas allow, ask y deny | Verificado |
| Claude Code · Run prompts on a schedule | https://code.claude.com/docs/en/scheduled-tasks | `/loop` y tareas programadas en la sesión | Verificado |
| Claude Code · Desktop scheduled tasks | https://code.claude.com/docs/en/desktop-scheduled-tasks | Necesitan la app abierta y el equipo encendido | Verificado |
| Claude Code · GitHub Actions | https://code.claude.com/docs/en/github-actions | `CLAUDE_CODE_OAUTH_TOKEN` con `claude setup-token` (suscripción Pro o superior) | Verificado |
| Claude Code · Run Claude Code programmatically | https://code.claude.com/docs/en/headless | `--bare` exige `ANTHROPIC_API_KEY`; `claude -p` con suscripción se deduce, no se afirma | Parcialmente verificado |
| Claude Code · Agent SDK overview | https://code.claude.com/docs/en/agent-sdk/overview | El SDK pide una clave de API | Verificado |
| GitHub Docs · GitHub Actions billing | https://docs.github.com/en/billing/concepts/product-billing/github-actions | Gratis en repositorios públicos; cuota incluida en los privados | Verificado |
| Model Context Protocol · servidores de referencia | https://github.com/modelcontextprotocol/servers | Servidores oficiales de referencia, educativos y no para producción | Verificado |
| Ayuda de Claude · What are skills? | https://support.claude.com/en/articles/12512176-what-are-skills | Skills en todos los planes, incluido Free | Verificado |
| Ayuda de Claude · Custom connectors using remote MCP | https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp | 1 conector personalizado en Free | Verificado |
| Ayuda de Claude · Get started with Claude Cowork | https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork | Cowork solo en planes de pago | Verificado |
| Ayuda de Claude · Get started with Claude in Chrome | https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome | Claude in Chrome solo en planes de pago | Verificado |
