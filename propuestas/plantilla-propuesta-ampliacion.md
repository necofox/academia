# Propuesta de ampliación: la academia con 6 cursos

> **Estado:** propuesta para revisión. **No implementada.** No se modificó ninguna de las 17 clases,
> ni el catálogo real (`recursos/catalogo.js`), ni el menú, ni el motor. No se publicó nada en GitHub.
> **Fecha:** 11 de noviembre de 2026. **Norma aplicada:** `PROMPT-MAESTRO.md`.
> **Relación con lo aprobado:** amplía `PROPUESTA-ORGANIZACION-CURRICULAR.md`. Si la apruebas, se
> integra en ese documento y en el catálogo real.
> *(Archivo generado con `node propuestas/generar-propuesta-ampliacion.js`: la plantilla está en
> `propuestas/` y las tablas de módulos salen del borrador del catálogo.)*

---

## Índice

1. Resumen
2. Cómo encajan los dos cursos nuevos
3. Curso 5: Redes y Telecomunicaciones
4. Curso 6: IA: Claude y productividad
5. Qué se comparte entre cursos y cómo se evita duplicar
6. La academia con 6 cursos: totales
7. Cómo quedaría el catálogo
8. Cómo se integraría sin romper nada
9. Fuentes consultadas y estado de verificación
10. Decisiones que necesito que apruebes

---

## 1. Resumen

- **Redes y Telecomunicaciones:** 11 módulos, 51 clases y 102 h (2 h por clase). Va desde qué es
  una red hasta diseñar, configurar, administrar y diagnosticar la red de una empresa, con un
  proyecto empresarial al final. Sigue el temario oficial del examen **CCNA 200-301 v2.0** de Cisco
  (vigente desde el 3 de febrero de 2027), más un módulo de telecomunicaciones (fibra, redes
  móviles 4G/5G, WAN e Internet). Todo se practica con herramientas gratuitas: **Cisco Packet
  Tracer** (gratis con una cuenta de Networking Academy) y los comandos de tu propio PC.
- **IA: Claude y productividad:** 9 módulos, 36 clases y 72 h. Va del primer chat a las técnicas
  avanzadas de instrucciones, la investigación, el análisis de documentos, Claude Code, agentes,
  subagentes, skills y automatizaciones. **No usa la API de pago.** 21 de las 36 clases funcionan
  con el plan gratuito; Claude Code y lo que depende de él (módulos 6 a 8) requiere un plan de pago
  (Pro o superior).
- **La academia pasa de 4 a 6 cursos:** de 156 clases y 272 h a **243 clases y 446 h**, más la
  electiva opcional de Python (3 clases, 6 h). Las 17 clases existentes no cambian.
- **Vista previa:** `propuestas/vista-previa-6-cursos.html` muestra el menú con los 6 cursos, sin
  tocar tu menú real ni tu avance.

## 2. Cómo encajan los dos cursos nuevos

- **Misma estructura:** curso → módulo → clase. Cada clase seguirá las 9 secciones del prompt
  maestro, con fuentes verificadas, y usará el motor de siempre (voz, reloj, actividades,
  exámenes y terminal simulada).
- **Cursos independientes:** ningún curso exige otro. Las relaciones son recomendaciones.
- **El papel de cada curso:**
  - **Redes:** cómo se construye y se opera la red (infraestructura).
  - **Ciberseguridad:** cómo se ataca, se detecta y se responde (defensa).
  - **JavaScript y Python:** cómo se construye el software.
  - **Claude:** herramienta transversal, que se usa en todos los cursos.
  - **Inglés:** la lengua de la documentación técnica y de los exámenes.
- **Transparencia:**
  - El curso de Redes **no reemplaza** la preparación oficial para la certificación CCNA. Da la
    base y la práctica para empezar; quien quiera certificarse necesita además práctica adicional
    y materiales oficiales de Cisco.
  - Las funciones, los planes y los límites de Claude **cambian con frecuencia**. Cada clase del
    curso de Claude volverá a verificar en la documentación oficial lo que enseña, el día en que se
    cree.

## 3. Curso 5: Redes y Telecomunicaciones

- **Meta:** diseñar, configurar, administrar y diagnosticar la red de una empresa pequeña o mediana,
  con una base alineada al temario oficial del CCNA 200-301 v2.0 y práctica en Cisco Packet Tracer.
- **Para quién:** desde cero. **Conocimientos previos:** ninguno; basta con saber usar el computador.
- **Duración:** 11 módulos, 51 clases y 102 h (2 h por clase), más la práctica autónoma.
- **Cómo se practica:**
  1. Terminal simulada del motor, para los comandos de Cisco IOS dentro de la página de la clase.
  2. Laboratorios en Cisco Packet Tracer, en tu PC.
  3. Comandos reales de Windows para diagnosticar tu propia red (`ipconfig`, `ping`, `tracert`,
     `nslookup` y `Test-NetConnection`).
  4. Las direcciones de los ejemplos serán siempre de documentación: 192.0.2.0/24, 198.51.100.0/24
     y 203.0.113.0/24 (RFC 5737), y 2001:db8::/32 (RFC 3849).
- **Evaluación en tres niveles:**
  - **Clase:** examen autocorregible y práctica autónoma con criterios para comprobarla.
  - **Módulo:** laboratorio o caso de diagnóstico.
  - **Curso:** proyecto empresarial con informe y defensa.

**Herramientas y requisitos** (verificados el 11/11/2026):

| Herramienta | Costo | Requisitos y límites | Uso en el curso |
|---|---|---|---|
| Cisco Packet Tracer 9.0.1 | Gratis | Hay que iniciar sesión con una cuenta de Cisco Networking Academy para descargarlo y al abrirlo. Windows 11, macOS 12 o superior, o Ubuntu 22.04/24.04; 4 GB de RAM libre y 1,4 GB de disco. **No existe para celulares ni tablets.** | Laboratorios desde el Módulo 1 |
| Comandos de Windows | Gratis | Ya están en tu PC | Diagnóstico de redes reales |
| Wireshark | Gratis | Se ve a fondo en Ciberseguridad (Módulo 3) | Opcional: interpretar capturas |

**Referencia oficial: el examen CCNA 200-301 de Cisco**

- **Versión v1.1:** se puede rendir hasta el **2 de febrero de 2027**. **Versión v2.0:** desde el
  **3 de febrero de 2027**. El curso se alinea con la **v2.0**, porque se desarrollaría en 2027.
- **Datos del examen v2.0:** 120 minutos, US$300 y solo en **inglés o japonés**. Por eso el
  Módulo 5 del curso de Inglés es muy recomendable para quien quiera certificarse.
- **Cómo cubre el curso los dominios de la v2.0:**

| Dominio CCNA v2.0 | Peso | Módulos del curso |
|---|---|---|
| 1.0 Infraestructura y conectividad de red | 25% | 1, 2, 3, 7, 8 y 11 |
| 2.0 Switching y acceso a la red | 25% | 4, 5, 8 y 11 |
| 3.0 Enrutamiento IP | 20% | 6 y 7 |
| 4.0 Servicios de red y seguridad | 20% | 3, 4, 8, 9 y 10 |
| 5.0 IA, operación y gestión de la red | 10% | 10 |

  Algunos temas de la v1.1 que la v2.0 ya no detalla se mantienen porque son básicos para
  entender una red: los modelos de topología, la tabla MAC y NTP. Las clases que los tratan lo
  indican en la columna «Temario oficial que cubre».

{{CURSO:redes}}

## 4. Curso 6: IA: Claude y productividad

- **Meta:** usar Claude de forma eficaz, segura y responsable para aprender, investigar, analizar
  documentos, programar y automatizar tareas, desde el chat hasta Claude Code y sus agentes,
  **sin depender de la API de pago**.
- **Para quién:** desde cero. **Conocimientos previos:** ninguno para los módulos 1 a 5. Para
  Claude Code (módulos 6 a 8) se recomienda el Módulo 1 de JavaScript o de Python, porque aquí no
  se enseña a programar.
- **Duración:** 9 módulos, 36 clases y 72 h (2 h por clase), más la práctica autónoma.
- **Cómo se practica:**
  - La página de cada clase enseña y evalúa (actividades y examen).
  - La práctica se hace en Claude (web, escritorio o Claude Code), con criterios para comprobar
    el resultado por tu cuenta.
- **Regla de seguridad del curso:**
  - Nunca se pegan en Claude tokens, contraseñas ni datos personales.
  - Claude Code se practica en carpetas y repositorios de prueba, **nunca en la academia real**.
  - Se revisan los permisos antes de aceptar cada acción.

**Qué necesitas en cada parte** (verificado el 11/11/2026 en la página de planes y en el centro de
ayuda oficial):

| Función | Plan gratuito (Free) | Pro o superior | Notas |
|---|---|---|---|
| Chat, archivos y búsqueda web | Sí | Sí | Límite de uso cada 5 horas y semanal; Pro tiene más |
| Proyectos (Projects) | Sí, hasta 5 | Sí | |
| Artefactos | Sí | Sí | Hay que activar «ejecución de código y creación de archivos». Conectar apps y guardar datos en artefactos es de pago |
| Memoria | Sí | Sí | Buscar en chats anteriores es de pago |
| Skills | Sí | Sí | Requiere activar la ejecución de código; se pueden crear y subir skills propios |
| Conectores personalizados (MCP remoto) | Sí, 1 | Sí | |
| Research (investigación profunda) | No | Sí | Requiere la búsqueda web activada |
| Claude in Chrome | No | Sí | Extensión que lee, hace clic y navega sitios contigo |
| Cowork | No | Sí | Misma arquitectura de agente que Claude Code, sin terminal; usa la app de escritorio |
| Claude Code (terminal, escritorio, web y VS Code) | **No** | Sí | Comparte los límites de uso con el chat |
| Tareas programadas en la nube | No | Sí | En vista previa; máximo 100 ejecuciones programadas por hora |
| API y Agent SDK | Pago aparte | Pago aparte | **Fuera del curso** |

- **Precios** (página oficial, 11/11/2026; en dólares y sin impuestos):
  - Pro: US$17 al mes con pago anual o US$20 con pago mensual.
  - Max: desde US$100 al mes. Ultra: US$200 al mes.
  - Team y Enterprise: para organizaciones.
  - La página advierte que precios y planes pueden cambiar.
- **Ruta gratuita:** con el plan gratuito se pueden hacer 21 de las 36 clases (módulos 1 a 5
  casi completos) y la versión básica del proyecto final.
- **Privacidad** (se enseña en el Módulo 1):
  - En las cuentas Free, Pro y Max, incluido Claude Code, tú decides si tus chats se usan para
    entrenar modelos (Configuración → Privacidad → «Help improve our AI models»).
  - Los chats de incógnito no se usan para entrenar.
  - Edad mínima: 18 años (o la de tu país, si es mayor).
  - La política de uso tiene una versión nueva que entra en vigor el 12/11/2026; se revisará al
    crear la clase.

{{CURSO:ia}}

## 5. Qué se comparte entre cursos y cómo se evita duplicar

| Tema | Dónde aparece | Decisión |
|---|---|---|
| IP, MAC y puertos | Ciberseguridad 05 (ya existe) · Redes M1–M3 | Ciber 05 no cambia. Redes lo explica a fondo; Ciberseguridad lo usa para detectar ataques y puede enlazar a Redes como ampliación |
| DNS | Ciber M3·2 · Redes M3·4 | Redes: cómo funciona y cómo se diagnostica. Ciberseguridad: cómo se abusa de él y cómo se detecta |
| DHCP, ARP, NAT, VPN, segmentación y firewalls | Ciber M3·3 · Redes M3, M8, M9 y M10 | **Ajuste propuesto (requiere tu aprobación):** Ciber M3·3 pasaría a llamarse «Arquitectura de red segura: segmentación, firewalls, DMZ y VPN desde la defensa». Haría solo un repaso breve de DHCP, ARP y NAT, con enlace a Redes |
| Capturas de tráfico (Wireshark) | Ciber M3·4 · Redes M11·2 | Wireshark a fondo solo en Ciberseguridad. Redes interpreta salidas de captura y enlaza |
| Ataques de red | Ciber M3·5 · Redes M10 | Ciberseguridad detecta y analiza. Redes configura las defensas en los equipos (ACL y seguridad de capa 2) |
| HTTP, APIs REST y JSON | JS M4·2 · Python M7·1 · Ciber M3·2 · Redes M10·5 | Redes los trata solo para la gestión de equipos de red y enlaza con JavaScript y Python |
| Automatización | Python M7 · Redes M10·5 · Claude M8 | Python enseña a programar la automatización. Redes muestra controladores y Ansible. Claude automatiza con Claude Code |
| Git y GitHub | JS M5·2 · Python M5·1 · Claude M6·4 | Claude M6·4 no enseña Git: muestra cómo trabajar con Git junto a Claude y enlaza a la clase compartida |
| Programación | JavaScript · Python · Claude M6 | Claude M6 no enseña a programar; recomienda JS M1 o Python M1 |
| Instrucciones (prompts) | Claude M2 · Redes M10·6 | La técnica general está en Claude M2. Redes la aplica a la operación de redes (tema 5.2 del CCNA v2.0) y enlaza |
| Datos sensibles | Ciber M7·3 · Claude M1·4 | La misma regla en los dos: nunca subir datos sensibles. Claude profundiza en la configuración de la cuenta |
| Inglés técnico | Inglés M5 · examen CCNA · documentación de Claude | Se recomienda Inglés M5 a quien quiera certificarse. Propuesta: permitir el «inglés técnico del día» también en Redes |

## 6. La academia con 6 cursos: totales

{{TOTALES}}

Las horas son de clase; la práctica autónoma de cada clase se suma aparte, a tu ritmo. La
electiva de Python sigue siendo opcional y no se cuenta en el total.

## 7. Cómo quedaría el catálogo

{{CATALOGO}}

- **Borrador:** `propuestas/cursos-nuevos.borrador.js` contiene los dos cursos completos, con
  módulos, clases, ejercicios, evaluación, proyecto, fuentes, el tema oficial del CCNA y el plan de
  Claude que necesita cada clase. Se agrega al catálogo real **sin modificarlo**.
- **Vista previa:** sirve la carpeta (`python -m http.server 8765 --bind 127.0.0.1`) y abre
  `http://127.0.0.1:8765/propuestas/vista-previa-6-cursos.html`. Muestra el menú real con los
  6 cursos; con `?curso=redes` o `?curso=ia` al final de la dirección se abre en ese curso.
  Funciona aislada: dentro de la vista previa el menú usa un almacenamiento temporal en memoria,
  no sincroniza con GitHub, tiene los enlaces desactivados y no modifica ningún archivo.

## 8. Cómo se integraría sin romper nada

Solo después de tu aprobación:

1. **Catálogo:** copiar los dos cursos del borrador a `recursos/catalogo.js`. Ids de curso
   `redes` e `ia`; ids de clase `redes-01`, `ia-01`…; archivos `cursos/redes/clases/clase-NN.html`
   y `cursos/ia/clases/clase-NN.html`. Las 17 clases existentes no cambian.
2. **Carpetas:** `cursos/redes/` y `cursos/ia/` con `instrucciones.md`, `ruta-aprendizaje.md`
   (generada con `herramientas/generar-rutas.js`), `progreso.md` y `apuntes/`, como dice CLAUDE.md.
3. **Colores:** agregar `.tema-redes` y `.tema-ia` en `recursos/academia.css` (solo líneas nuevas).
4. **Voz:** el motor elige la voz por el prefijo del id. Con un prefijo nuevo usa la de
   Ciberseguridad (docente en español de Perú).
   - Redes: puede quedarse con esa voz, sin cambios en el motor.
   - Claude: si prefieres la voz «Jarvis» de JavaScript y Python, hay que cambiar una línea de
     `recursos/academia.js`. Ese cambio necesita tu autorización.
5. **Reglas:** agregar los dos cursos a la tabla de CLAUDE.md y a las duraciones, y preguntarte el
   horario (`horario.md`).
6. **Menú:** actualizar la versión `?v=` de `inicio.html`.
7. **Pruebas:**
   - `revisar-catalogo.js` y `generar-rutas.js --comprobar`.
   - Ampliar `revisar-coherencia.js` para que también lea esta propuesta.
   - `pruebas-clases.html` a medida que existan clases nuevas.

## 9. Fuentes consultadas y estado de verificación

Todas se consultaron el **11/11/2026**.
- **Verificada:** se leyó el contenido y respalda el uso que se le da.
- **Parcialmente verificada:** se leyó solo una parte, o el dato salió de un resumen automático y
  no del texto literal.
- **Pendiente o no accesible:** no se pudo leer, así que no se usa como respaldo.

**Redes y Telecomunicaciones**

| Fuente | URL | Fecha | Qué respalda | Estado |
|---|---|---|---|---|
| Cisco Learning Network · 200-301 CCNA v2.0 Exam Topics | https://learningnetwork.cisco.com/s/ccna-v2-exam-topics | Primera fecha de examen: 03/02/2027 | Dominios, pesos y temas de la v2.0; 120 min, US$300, inglés o japonés | Verificada (página generada con JavaScript, leída con Chrome sin ventana) |
| Cisco Learning Network · 200-301 CCNA v1.1 Exam Topics | https://learningnetwork.cisco.com/s/ccna-exam-topics | Última fecha de v1.1: 02/02/2027 | Transición de v1.1 a v2.0 | Verificada |
| Cisco · CCNA Exam v1.1 (200-301), PDF | https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf | 2024 | Temas de la v1.1 (topologías, tabla MAC, NTP, APIs REST, JSON) | Verificada (texto extraído del PDF) |
| Cisco · CCNA Minor Update v1.1, notas de versión | https://learningcontent.cisco.com/documents/marketing/exam-topics/CCNA_1_1_release_notes.pdf | 04/2024; vigente desde 20/08/2024 | IA, aprendizaje automático y Terraform en la v1.1 | Verificada |
| Cisco Networking Academy · Resource Hub (descargas) | https://www.netacad.com/resources/lab-downloads | — | Packet Tracer 9.0.1 para Windows, macOS y Ubuntu; requiere iniciar sesión; requisitos del equipo | Verificada |
| Cisco · Packet Tracer Download and Installation Instructions | https://www.netacad.com/skillsforall/files/Cisco_Packet_Tracer_Download_and_Installation_Instructions.pdf | 2025 | No hay versión para celulares; inicio de sesión al abrirlo | Verificada |
| Cisco Networking Academy · página de Packet Tracer y catálogo de cursos | https://www.netacad.com/cisco-packet-tracer | — | «Free Training and Download» (solo el título) y cursos gratuitos de redes | Parcialmente verificada: el contenido no cargó; los cursos concretos quedan pendientes |
| RFC Editor · RFC 791 (IPv4), 768 (UDP), 792 (ICMP), 826 (ARP), 1034 y 1035 (DNS), 1122 (capas TCP/IP), 1918 (direcciones privadas), 2131 (DHCP), 2328 (OSPFv2), 3022 (NAT), 3849 (IPv6 de documentación), 4271 (BGP-4), 4291 (direcciones IPv6), 4443 (ICMPv6), 4632 (CIDR), 4861 (NDP), 4862 (SLAAC), 5340 (OSPFv3), 5737 (IPv4 de documentación), 8200 (IPv6), 9293 (TCP) y 9915 (DHCPv6) | https://www.rfc-editor.org/ | Fechas oficiales de cada RFC (de 1980 a 2026) | Título, fecha y estado vigente de cada documento. El RFC 8415 (DHCPv6) quedó reemplazado por el RFC 9915 (enero de 2026) | Verificada (registro oficial); el contenido se leerá al crear cada clase |
| ITU-T · X.200, modelo de referencia OSI | https://www.itu.int/rec/T-REC-X.200 | Edición 07/1994, vigente | Modelo OSI | Verificada |
| ITU-T · G.652, fibra óptica monomodo | https://www.itu.int/rec/T-REC-G.652 | Edición 08/2024, vigente | Medios de fibra | Verificada |
| ITU-R · IMT-2020 («5G») | https://www.itu.int/en/ITU-R/study-groups/rsg5/rwp5d/imt-2020/Pages/default.aspx | — | IMT-2020 es el marco de la ITU para 5G | Verificada |
| 3GPP · About 3GPP | https://www.3gpp.org/about-us | — | 3GPP produce las especificaciones de las redes móviles (LTE y 5G) | Verificada |
| IEEE 802.11 Working Group | https://www.ieee802.org/11/ | Página de 2026 | Estándares de WLAN; los estándares IEEE 802 se pueden descargar gratis seis meses después de publicados | Verificada (la página del programa GET de IEEE dio error 418) |
| ITU · Facts and Figures 2025 | https://www.itu.int/itu-d/reports/statistics/facts-figures-2025/ | Noviembre de 2025 | Casi tres cuartas partes de la población mundial está en línea; 2.200 millones siguen sin conexión | Verificada |

**IA: Claude y productividad**

| Fuente | URL | Fecha | Qué respalda | Estado |
|---|---|---|---|---|
| Claude · Planes y precios | https://claude.com/pricing | Consultada el 11/11/2026 | Planes, precios y funciones por plan | Verificada (la pestaña de precios de la API no se leyó) |
| Ayuda de Claude · Use Claude Code with your Pro, Max, or Ultra plan | https://support.claude.com/en/articles/11145838-using-claude-code-with-your-pro-or-max-plan | Actualizada hace más de una semana | Claude Code incluido en los planes de pago; límites compartidos con el chat | Verificada |
| Ayuda de Claude · How do usage and length limits work? | https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work | Actualizada esta semana | Límite que se reinicia cada 5 horas y límite semanal | Verificada |
| Ayuda de Claude · What are projects? | https://support.claude.com/en/articles/9517075-what-are-projects | — | Proyectos para todos; Free hasta 5 | Verificada |
| Ayuda de Claude · What are skills? / Use skills in Claude | https://support.claude.com/en/articles/12512176-what-are-skills · https://support.claude.com/en/articles/12512180-use-skills-in-claude | Actualizada el 11/11/2026 | Skills en todos los planes; requiere ejecución de código; subir skills propios | Verificada |
| Ayuda de Claude · What are artifacts and how do I use them? | https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them | Actualizada el 11/11/2026 | Artefactos en todos los planes | Verificada |
| Ayuda de Claude · Chat search and memory | https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context | Actualizada el 11/11/2026 | Memoria en Free; buscar chats, de pago | Verificada |
| Ayuda de Claude · Custom connectors using remote MCP | https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp | — | Free: 1 conector personalizado | Verificada |
| Ayuda de Claude · Use research on Claude | https://support.claude.com/en/articles/11088861-use-research-on-claude | — | Research solo en planes de pago | Verificada |
| Ayuda de Claude · Get started with Claude in Chrome | https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome | — | Qué es y planes (de pago) | Verificada |
| Ayuda de Claude · Get started with Claude Cowork | https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork | — | Qué es y planes (de pago) | Verificada |
| Claude Code · Setup y Overview | https://code.claude.com/docs/en/setup · https://code.claude.com/docs/en/overview | — | El plan gratuito no incluye Claude Code; instalación en Windows; superficies (terminal, VS Code, escritorio y web) | Verificada |
| Claude Code · Sub-agents, Skills, Hooks, Memory, MCP y Plugins | https://code.claude.com/docs/en/sub-agents · /skills · /hooks-guide · /memory · /mcp · /plugins | — | Definiciones, ubicaciones (`.claude/agents/`, `SKILL.md`, `CLAUDE.md`) y comandos (`claude mcp add`, `/plugin`) | Verificada (algunas partes largas, por resumen) |
| Claude Code · Run Claude Code programmatically | https://code.claude.com/docs/en/headless | — | Modo `claude -p`; el modo `--bare` no usa el inicio de sesión de la suscripción | Parcialmente verificada: no dice de forma explícita que `-p` funcione con la suscripción |
| Claude Code · GitHub Actions | https://code.claude.com/docs/en/github-actions | — | Token OAuth de la suscripción (`claude setup-token`) como alternativa a la clave de API | Verificada |
| Claude Code · Scheduled tasks (routines) y /loop | https://code.claude.com/docs/en/routines · https://code.claude.com/docs/en/scheduled-tasks | — | Tareas programadas en la nube (vista previa; planes de pago; máximo 100 por hora) y tareas dentro de la sesión | Parcialmente verificada (los límites salieron de un resumen) |
| Claude Code · Use Claude Code in the cloud | https://code.claude.com/docs/en/claude-code-on-the-web | — | Sesiones en la nube en planes de pago | Verificada |
| Claude Code · Manage costs effectively | https://code.claude.com/docs/en/costs | — | El uso con suscripción está incluido; comando `/usage` | Verificada |
| Claude Platform · Prompting best practices / Prompt engineering overview | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices | — | Técnicas del Módulo 2 (claridad, contexto, ejemplos, XML, rol, contextos largos y razonamiento) | Verificada (la parte final de la página, por resumen) |
| Claude Platform · Models overview | https://platform.claude.com/docs/en/about-claude/models/overview | — | Modelos actuales y anteriores (cambian con el tiempo) | Verificada |
| Anthropic Academy | https://anthropic.skilljar.com/ | — | Cursos gratuitos complementarios (Claude 101, Claude Code in Action, Introduction to agent skills, AI Fluency, MCP…) | Verificada (gratis en los 3 cursos abiertos; duraciones no publicadas) |
| Anthropic · Updates to Consumer Terms and Privacy Policy | https://www.anthropic.com/news/updates-to-our-consumer-terms | 28/08/2025 | Elegir si los chats entrenan modelos (Free, Pro y Max, incluido Claude Code); retención de 5 años si se permite o 30 días si no | Verificada; la retención actual se comprobará al crear la clase |
| Centro de privacidad · How do I change my model improvement privacy settings? / Is my data used for model training? | https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings · https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training | 03/08/2026 · 16/03/2026 | Cómo cambiar el ajuste; los chats de incógnito no se usan | Verificada |
| Anthropic · Consumer Terms of Service | https://www.anthropic.com/legal/consumer-terms | Vigentes desde 08/10/2025 | Edad mínima de 18 años (o la de tu país, si es mayor) | Verificada |
| Anthropic · Usage Policy | https://www.anthropic.com/legal/aup | Entra en vigor el 12/11/2026 | Uso responsable | Verificada |

**No accesibles o no usadas como respaldo:**
- El catálogo de cursos de Networking Academy (se genera con JavaScript y no cargó).
- La página del programa GET de IEEE (error 418).
- La pestaña de la API en la página de precios.
- Las duraciones de los cursos de Anthropic Academy (no están publicadas).

## 10. Decisiones que necesito que apruebes

1. **Los dos planes de estudio** (secciones 3 y 4), o los cambios que quieras.
2. **La duración:** 2 h por clase en los dos cursos, como Ciberseguridad, JavaScript y Python.
3. **La referencia del curso de Redes:** temario CCNA v2.0, vigente desde el 03/02/2027.
4. **El ajuste de Ciberseguridad M3·3** para no repetir DHCP, ARP y NAT (sección 5). Esa clase aún
   no existe; ninguna de las 17 clases cambia.
5. **El curso de Claude y tu plan:** dime qué plan usas (Free, Pro, Max…) para adaptar las
   prácticas. La propuesta mantiene una ruta gratuita.
6. **La voz de cada curso nuevo:** Redes, docente (sin cambios); Claude, docente o «Jarvis» (esta
   última requiere tocar una línea del motor).
7. **El «inglés técnico del día» en Redes**, como excepción a la regla de no mezclar cursos.
8. **Nombres, íconos y colores** de los cursos nuevos (🌐 Redes y Telecomunicaciones · 🤖 IA:
   Claude y productividad).
9. **El horario** para los dos cursos nuevos.
10. **El orden de trabajo:** los cursos nuevos se crearían después de que apruebes Ciberseguridad 01
    como modelo, igual que el resto.

> Hasta tu aprobación explícita no se implementa nada de esta propuesta.
