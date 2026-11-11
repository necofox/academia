# Propuesta de ampliación: la academia con 6 cursos

> **Estado:** propuesta para revisión. **No implementada.** No se modificó ninguna de las 17 clases,
> ni el catálogo real (`recursos/catalogo.js`), ni el menú, ni el motor. No se publicó nada en GitHub.
> **Fecha:** 11 de noviembre de 2026 (segunda versión: formación completa de ingeniería de
> instrucciones en el curso 6 y videos verificados). **Norma aplicada:** `PROMPT-MAESTRO.md`.
> **Relación con lo aprobado:** amplía `PROPUESTA-ORGANIZACION-CURRICULAR.md`. Si la apruebas, se
> integra en ese documento y en el catálogo real.
> *(Archivo generado con `node propuestas/generar-propuesta-ampliacion.js`: la plantilla está en
> `propuestas/`; las tablas de módulos, clases, videos y totales salen de los datos.)*

---

## Índice

1. Resumen
2. Cómo encajan los dos cursos nuevos
3. Curso 5: Redes y Telecomunicaciones
4. Curso 6: IA: Claude y productividad (con la formación completa de prompt engineering)
5. Videos complementarios: estándar para los 6 cursos y videos verificados
6. Qué se comparte entre cursos y cómo se evita duplicar
7. La academia con 6 cursos: totales
8. Cómo quedaría el catálogo
9. Cómo se integraría sin romper nada
10. Fuentes consultadas y estado de verificación
11. Decisiones que necesito que apruebes

---

## 1. Resumen

- **Redes y Telecomunicaciones:** 11 módulos, 51 clases y 102 h (2 h
  por clase). Va desde qué es una red hasta diseñar, configurar, administrar y diagnosticar la red
  de una empresa, con un proyecto empresarial al final.
  - Sigue el temario oficial del examen **CCNA 200-301 v2.0** de Cisco (vigente desde el
    3/02/2027) e incluye un módulo de telecomunicaciones.
  - Se practica gratis con **Cisco Packet Tracer** y los comandos de tu PC.
- **IA: Claude y productividad:** 11 módulos, 55 clases y 110 h
  (antes 36 clases y 72 h).
  - Integra una **formación completa de ingeniería de instrucciones (prompt engineering) en seis
    niveles**: fundamentos, técnicas, prompting estructurado, avanzado, aplicaciones profesionales,
    y context engineering con Claude Code.
  - Termina con un proyecto integrador: tu **biblioteca profesional de prompts**.
  - **No necesita la API de pago:** 43 de las 55 clases se hacen con el plan
    gratuito, y las demás con un plan de pago (Pro o superior).
- **Videos complementarios:** 65 videos de YouTube verificados el 11/11/2026, uno o
  más por clase cuando aportan valor. En español siempre que existe una buena opción; si no, se
  indica si tiene subtítulos o doblaje al español. Cada video tiene una alternativa escrita.
- **La academia pasa de 4 a 6 cursos:** de 156 clases y 272 h a **262 clases y
  484 h**, más la electiva opcional de Python (3 clases, 6 h). Las 17 clases
  existentes no cambian.
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
- **Duración:** 11 módulos, 51 clases y 102 h (2 h por clase), más la
  práctica autónoma.
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

Los códigos de la columna «Videos» (R01, R02…) remiten a la tabla de la sección 5.

### Módulo 1 · Fundamentos de redes (5 clases · 10 h)

- **Objetivo:** Entender qué es una red, cómo se organiza en capas y cómo viajan los datos por cables, fibra y aire.
- **Competencias:** Identificar componentes y tipos de red; explicar los modelos OSI y TCP/IP y el encapsulamiento; comparar cobre, fibra e inalámbrico; describir cómo funciona un switch Ethernet; armar una red simple en Packet Tracer.
- **Al terminar serás capaz de:** Explicar cómo viaja un mensaje de un equipo a otro y montar una red pequeña simulada.
- **Conocimientos previos:** Ninguno. Basta con saber usar el computador.
- **Ejercicios y prácticas:** Identificar los equipos de tu propia red; ordenar capas y encapsulamiento; primera red en Packet Tracer; ipconfig, ping y tracert en tu PC.
- **Evaluación del módulo:** Simular la red de una pequeña oficina (SOHO) en Packet Tracer y explicar el camino de un ping.
- **Fuentes previstas** (se verifican al crear cada clase): ITU-T X.200 (modelo OSI), RFC 1122 (capas TCP/IP), ITU-T G.652 (fibra monomodo), temario CCNA, guía de instalación de Packet Tracer.

| Clase | Tema | Temario oficial que cubre | Videos |
|---|---|---|---|
| M1·1 | ¿Qué es una red? Componentes, tipos (LAN, WAN, WLAN) y topologías | CCNA v1.1 1.1–1.2 | R01 |
| M1·2 | Modelos OSI y TCP/IP: capas, encapsulamiento y protocolos | — | R02, R03 |
| M1·3 | Medios físicos: cobre, fibra óptica e inalámbrico; cables y fallas de interfaz | CCNA v2.0 1.1 | R04, R05 |
| M1·4 | Ethernet y switching: tramas, direcciones MAC y tabla MAC | CCNA v1.1 1.13 | R06, R07 |
| M1·5 | Cisco Packet Tracer: tu primera red y los comandos de diagnóstico del PC | CCNA v2.0 1.6 | R08 |

### Módulo 2 · Direccionamiento IPv4 y subnetting (5 clases · 10 h)

- **Objetivo:** Asignar direcciones IPv4 y dividir redes en subredes sin calculadora.
- **Competencias:** Interpretar dirección, máscara y prefijo; distinguir direcciones públicas, privadas y especiales; calcular subredes y VLSM; diseñar y verificar un plan de direccionamiento.
- **Al terminar serás capaz de:** Diseñar el plan IPv4 de una empresa pequeña y detectar errores de configuración.
- **Conocimientos previos:** Módulo 1.
- **Ejercicios y prácticas:** Conversión binaria; retos de subnetting con autocorrección; configurar y corregir direcciones en Packet Tracer.
- **Evaluación del módulo:** Prueba de subnetting cronometrada y diagnóstico de cinco equipos mal configurados.
- **Proyecto:** Plan de direccionamiento IPv4 para una empresa ficticia de cuatro áreas.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 791 (IPv4), RFC 4632 (CIDR), RFC 1918 (direcciones privadas), RFC 5737 (direcciones de documentación), temario CCNA v2.0 (1.3).

| Clase | Tema | Temario oficial que cubre | Videos |
|---|---|---|---|
| M2·1 | IPv4: dirección, máscara, prefijo y números binarios | — | R09 |
| M2·2 | Direcciones públicas, privadas, especiales y de documentación | — | R10, R11 |
| M2·3 | Subnetting I: dividir una red en subredes iguales | — | R12, R13 |
| M2·4 | Subnetting II: VLSM y plan de direccionamiento | — | R14 |
| M2·5 | Taller: diagnosticar configuraciones IPv4 (evaluación del módulo) | CCNA v2.0 1.3 | — |

### Módulo 3 · Transporte y servicios básicos (4 clases · 8 h)

- **Objetivo:** Entender cómo se comunican las aplicaciones y cómo un equipo obtiene su dirección y resuelve nombres.
- **Competencias:** Comparar TCP y UDP; explicar ARP e ICMP; configurar y diagnosticar DHCP (servidor y agente relay); interpretar registros DNS.
- **Al terminar serás capaz de:** Explicar y diagnosticar los servicios que hacen que un equipo «tenga Internet».
- **Conocimientos previos:** Módulo 2.
- **Ejercicios y prácticas:** Ver conexiones con netstat y Test-NetConnection; seguir ARP, DHCP y DNS en el modo simulación de Packet Tracer; nslookup sobre dominios de ejemplo.
- **Evaluación del módulo:** Resolver tres casos: un equipo sin IP, otro que no resuelve nombres y otro que no alcanza un puerto.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 9293 (TCP), RFC 768 (UDP), RFC 826 (ARP), RFC 792 (ICMP), RFC 2131 (DHCP), RFC 1034 y RFC 1035 (DNS), temario CCNA v2.0 (1.7, 4.4).

| Clase | Tema | Temario oficial que cubre | Videos |
|---|---|---|---|
| M3·1 | TCP y UDP: puertos, conexiones y confiabilidad | — | R15, R16 |
| M3·2 | ARP e ICMP: cómo se encuentran y se prueban los equipos | — | R17 |
| M3·3 | DHCP: servidor, cliente y agente de retransmisión (relay) | CCNA v2.0 1.7 | R18 |
| M3·4 | DNS: resolución de nombres, registros y diagnóstico | CCNA v2.0 4.4 | R19 |

### Módulo 4 · Configuración de dispositivos Cisco (4 clases · 8 h)

- **Objetivo:** Configurar, asegurar el acceso y respaldar switches y routers con Cisco IOS.
- **Competencias:** Usar la línea de comandos de Cisco IOS; hacer la configuración inicial; habilitar acceso remoto seguro con SSH; guardar, respaldar y documentar configuraciones con CDP y LLDP.
- **Al terminar serás capaz de:** Dejar operativos y documentados un switch y un router nuevos.
- **Conocimientos previos:** Módulo 2.
- **Ejercicios y prácticas:** Terminal simulada de Cisco IOS dentro de la clase y laboratorios guiados en Packet Tracer.
- **Evaluación del módulo:** Configurar desde cero una red pequeña siguiendo una hoja de requisitos.
- **Fuentes previstas** (se verifican al crear cada clase): Temario CCNA v2.0 (2.3, 4.1, 4.2), Cisco Packet Tracer.

| Clase | Tema | Temario oficial que cubre | Videos |
|---|---|---|---|
| M4·1 | Cisco IOS: modos, ayuda de la línea de comandos y configuración inicial | — | R20 |
| M4·2 | Acceso seguro: contraseñas, usuarios locales y SSH | CCNA v2.0 4.1 | R21 |
| M4·3 | Archivos de configuración, respaldos y documentación con CDP y LLDP | CCNA v2.0 2.3, 4.2 | R22 |
| M4·4 | Taller: configurar y documentar una red pequeña (evaluación del módulo) | — | — |

### Módulo 5 · Switching y VLAN (5 clases · 10 h)

- **Objetivo:** Segmentar una red con VLAN y mantenerla estable y redundante en la capa 2.
- **Competencias:** Crear VLAN y puertos de acceso; configurar troncales 802.1Q; enrutar entre VLAN; interpretar Rapid PVST+; agrupar enlaces con EtherChannel (LACP).
- **Al terminar serás capaz de:** Implementar la red de capa 2 de un edificio con varias áreas.
- **Conocimientos previos:** Módulo 4.
- **Ejercicios y prácticas:** Laboratorios de Packet Tracer con fallas provocadas para corregir.
- **Evaluación del módulo:** Corregir una red con VLAN mal asignadas, troncales caídos y un bucle.
- **Proyecto:** Red de un edificio con una VLAN por área.
- **Fuentes previstas** (se verifican al crear cada clase): IEEE 802.1Q (VLAN), temario CCNA v2.0 (2.1, 2.2, 2.5).

| Clase | Tema | Temario oficial que cubre | Videos |
|---|---|---|---|
| M5·1 | VLAN: segmentar la red y configurar puertos de acceso | CCNA v2.0 2.2 | R23 |
| M5·2 | Troncales 802.1Q y VLAN nativa | CCNA v2.0 2.1 | R24 |
| M5·3 | Enrutamiento entre VLAN: router-on-a-stick y SVI | CCNA v2.0 2.1 | R25 |
| M5·4 | Spanning Tree (Rapid PVST+): evitar bucles | CCNA v2.0 2.5 | R26 |
| M5·5 | EtherChannel con LACP (evaluación del módulo) | CCNA v2.0 2.1 | R27 |

### Módulo 6 · Enrutamiento IPv4 (5 clases · 10 h)

- **Objetivo:** Conectar varias redes y entender cómo decide un router el camino.
- **Competencias:** Interpretar la tabla de enrutamiento; configurar rutas estáticas (predeterminada, de red, de host y flotante); configurar y verificar OSPFv2 de área única; interpretar la redundancia de puerta de enlace (HSRP y VRRP).
- **Al terminar serás capaz de:** Enrutar la red de una empresa con varias sedes y diagnosticar fallas de enrutamiento.
- **Conocimientos previos:** Módulo 5.
- **Ejercicios y prácticas:** Seguir paquetes en el modo simulación; tablas de enrutamiento para interpretar; fallas de OSPF para resolver.
- **Evaluación del módulo:** Diagnosticar una red con rutas faltantes y vecinos OSPF que no se forman.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 2328 (OSPFv2), temario CCNA v2.0 (3.1–3.4).

| Clase | Tema | Temario oficial que cubre | Videos |
|---|---|---|---|
| M6·1 | Cómo decide un router: tabla de enrutamiento, prefijo más largo y métricas | CCNA v2.0 3.1 | R28 |
| M6·2 | Rutas estáticas: predeterminada, de red, de host y flotante | CCNA v2.0 3.2 | R29 |
| M6·3 | OSPFv2 I: vecinos, router ID y redes punto a punto | CCNA v2.0 3.3 | R30 |
| M6·4 | OSPFv2 II: DR/BDR, verificación y fallas comunes | CCNA v2.0 3.3 | R31 |
| M6·5 | Redundancia de puerta de enlace: HSRP y VRRP (evaluación del módulo) | CCNA v2.0 3.4 | R32 |

### Módulo 7 · IPv6 (4 clases · 8 h)

- **Objetivo:** Direccionar y enrutar redes IPv6 y hacerlas convivir con IPv4.
- **Competencias:** Escribir y abreviar direcciones IPv6; reconocer sus tipos; explicar SLAAC, DHCPv6 y NDP; configurar rutas estáticas IPv6 y OSPFv3; diagnosticar IPv6 en doble pila.
- **Al terminar serás capaz de:** Agregar IPv6 a una red existente sin interrumpir IPv4.
- **Conocimientos previos:** Módulo 6.
- **Ejercicios y prácticas:** Abreviar y expandir direcciones; planificar prefijos con el bloque de documentación 2001:db8::/32; configurar doble pila en Packet Tracer.
- **Evaluación del módulo:** Migrar a doble pila la red del módulo anterior.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 8200 (IPv6), RFC 4291 (direccionamiento), RFC 3849 (prefijo de documentación), RFC 4861 (NDP), RFC 4862 (SLAAC), RFC 9915 (DHCPv6; reemplaza al RFC 8415), RFC 5340 (OSPFv3), temario CCNA v2.0 (1.4, 3.2, 3.3).

| Clase | Tema | Temario oficial que cubre | Videos |
|---|---|---|---|
| M7·1 | IPv6: formato, abreviación y tipos de direcciones | CCNA v2.0 1.4 | R33, R34 |
| M7·2 | Asignación en IPv6: SLAAC, DHCPv6, EUI-64 y NDP | CCNA v2.0 1.4 | R35 |
| M7·3 | Rutas estáticas IPv6 y OSPFv3 | CCNA v2.0 3.2, 3.3 | — |
| M7·4 | Doble pila y diagnóstico IPv6 (evaluación del módulo) | — | — |

### Módulo 8 · NAT y redes inalámbricas (3 clases · 6 h)

- **Objetivo:** Dar salida a Internet con NAT y planificar una red Wi-Fi segura.
- **Competencias:** Configurar NAT estático, dinámico y PAT; explicar bandas, canales, radiofrecuencia e interferencias; comparar WPA2 y WPA3; describir arquitecturas con puntos de acceso autónomos y con controlador.
- **Al terminar serás capaz de:** Conectar una oficina a Internet y planificar su Wi-Fi.
- **Conocimientos previos:** Módulo 6.
- **Ejercicios y prácticas:** Configurar NAT/PAT en Packet Tracer; plan de canales para un piso de oficina.
- **Evaluación del módulo:** Configurar la salida a Internet de una oficina y justificar su plan de canales Wi-Fi.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 3022 (NAT), IEEE 802.11 (grupo de trabajo de WLAN), temario CCNA v2.0 (1.5, 2.2, 4.3).

| Clase | Tema | Temario oficial que cubre | Videos |
|---|---|---|---|
| M8·1 | NAT y PAT: salir a Internet con direcciones privadas | CCNA v2.0 4.3 | R36 |
| M8·2 | Wi-Fi: bandas, canales, interferencias y seguridad (WPA2 y WPA3) | CCNA v2.0 1.5 | R37, R38 |
| M8·3 | Arquitecturas inalámbricas: puntos de acceso autónomos y con controlador (evaluación del módulo) | CCNA v2.0 2.2 | R39 |

### Módulo 9 · Telecomunicaciones, WAN e Internet (4 clases · 8 h)

- **Objetivo:** Entender las redes de los proveedores: cómo llega Internet, cómo funcionan las redes móviles y cómo se unen sedes lejanas.
- **Competencias:** Explicar ancho de banda, latencia y medios de transmisión; comparar tecnologías de acceso (cobre, cable, fibra, móvil y satélite); describir las redes móviles 4G y 5G; explicar WAN, VPN IPsec y la interconexión de proveedores con BGP, a nivel conceptual.
- **Al terminar serás capaz de:** Elegir y justificar la conexión WAN e Internet de una empresa.
- **Conocimientos previos:** Módulo 3. Conviene haber hecho el Módulo 6.
- **Ejercicios y prácticas:** Medir latencia y pérdida con ping y tracert; comparar ofertas de conexión ficticias.
- **Evaluación del módulo:** Comparar tres ofertas de conexión para una empresa ficticia y recomendar una.
- **Fuentes previstas** (se verifican al crear cada clase): ITU-T G.652, ITU-R IMT-2020 (5G), 3GPP, ITU Facts and Figures 2025, RFC 4271 (BGP-4), temario CCNA v2.0 (4.5).

| Clase | Tema | Temario oficial que cubre | Videos |
|---|---|---|---|
| M9·1 | Señales y transmisión: ancho de banda, latencia, pérdida y ruido | — | — |
| M9·2 | Acceso a Internet: cobre, cable, fibra hasta el hogar, móvil y satélite | — | R05 |
| M9·3 | Redes móviles: de 4G a 5G (3GPP e IMT-2020) | — | R40 |
| M9·4 | WAN, VPN e Internet: proveedores, IPsec y BGP en concepto (evaluación del módulo) | CCNA v2.0 4.5 | R41 |

### Módulo 10 · Seguridad, operación y automatización (6 clases · 12 h)

- **Objetivo:** Proteger los equipos de red, vigilarlos y automatizar su administración.
- **Competencias:** Configurar ACL estándar y extendidas; aplicar seguridad de capa 2; usar AAA con TACACS+ y RADIUS; monitorear con SNMP, syslog y NTP; describir enfoques de gestión (controladores, nube, automatización e infraestructura como código) y usar Ansible; describir la IA agéntica y escribir prompts para la operación de redes.
- **Al terminar serás capaz de:** Proteger, monitorear y automatizar una red pequeña.
- **Conocimientos previos:** Módulos 4, 5 y 6.
- **Ejercicios y prácticas:** Auditoría de seguridad de una red simulada; lectura de mensajes syslog; ejemplos de JSON y de un playbook de Ansible.
- **Evaluación del módulo:** Auditar y corregir la seguridad de una red simulada.
- **Fuentes previstas** (se verifican al crear cada clase): Temario CCNA v2.0 (4.1, 4.6, 4.7, 5.1–5.6); temario CCNA v1.1 (NTP, APIs REST y JSON).

| Clase | Tema | Temario oficial que cubre | Videos |
|---|---|---|---|
| M10·1 | Listas de control de acceso (ACL) estándar y extendidas | CCNA v2.0 4.6 | R42, R43 |
| M10·2 | Seguridad de capa 2: port security, DHCP snooping, DAI, storm control y RA guard | CCNA v2.0 4.7 | R44 |
| M10·3 | AAA, TACACS+ y RADIUS para administrar equipos | CCNA v2.0 4.1 | — |
| M10·4 | Monitoreo: SNMP, syslog y sincronización de hora con NTP | CCNA v2.0 5.4, 5.6 | R45, R46 |
| M10·5 | Automatización: controladores, APIs REST, JSON y Ansible | CCNA v2.0 5.3, 5.5 | R47 |
| M10·6 | IA en la operación de redes: agentes y prompts (evaluación del módulo) | CCNA v2.0 5.1, 5.2 | — |

### Módulo 11 · Diseño, diagnóstico y proyecto empresarial (6 clases · 12 h)

- **Objetivo:** Diseñar, implementar, probar y defender la red completa de una empresa.
- **Competencias:** Aplicar diseños jerárquicos (dos y tres niveles, spine-leaf, SOHO y nube); explicar el papel de hipervisores, máquinas virtuales y contenedores; seguir una metodología de diagnóstico por capas; documentar una red; integrar todo lo aprendido en un proyecto.
- **Al terminar serás capaz de:** Entregar el diseño, la configuración y la documentación de la red de una empresa.
- **Conocimientos previos:** Módulos 7, 8, 9 y 10.
- **Ejercicios y prácticas:** Casos de diagnóstico encadenados; plantillas de documentación de red.
- **Evaluación del módulo:** Rúbrica del proyecto: requisitos cumplidos, pruebas, documentación y defensa.
- **Proyecto:** Proyecto final del curso (ver más arriba).
- **Fuentes previstas** (se verifican al crear cada clase): Temario CCNA v1.1 (1.2, arquitecturas); temario CCNA v2.0 (2.4, diagnóstico).

| Clase | Tema | Temario oficial que cubre | Videos |
|---|---|---|---|
| M11·1 | Diseño de redes: dos y tres niveles, spine-leaf, SOHO, nube y virtualización | CCNA v1.1 1.2; CCNA v2.0 1.2 | — |
| M11·2 | Metodología de diagnóstico: por capas, comandos show, ping extendido, traceroute y capturas | CCNA v2.0 2.4 | R17 |
| M11·3 | Documentación de red: diagramas, tablas de direcciones e inventario | — | — |
| M11·4 | Proyecto empresarial I: requisitos y diseño | — | — |
| M11·5 | Proyecto empresarial II: implementación en Packet Tracer | — | — |
| M11·6 | Proyecto empresarial III: pruebas, informe y defensa | — | — |

## 4. Curso 6: IA: Claude y productividad

- **Meta:** usar Claude de forma eficaz, segura y responsable, con una formación completa en
  ingeniería de instrucciones (prompt engineering): desde formular una pregunta clara hasta diseñar,
  evaluar, corregir y reutilizar instrucciones profesionales, y aplicar el context engineering con
  Claude Code y sus agentes. **Sin depender de la API de pago.**
- **Para quién:** desde cero. **Conocimientos previos:** ninguno para los módulos 1 a 8. Para
  Claude Code (módulos 9 y 10) se recomienda el Módulo 1 de JavaScript o de Python, porque aquí no
  se enseña a programar.
- **Duración:** 11 módulos, 55 clases y 110 h (2 h por clase), más
  la práctica autónoma. La formación de ingeniería de instrucciones ocupa los módulos 2, 3, 5, 6,
  8 y 9; los módulos 1, 4, 7, 10 y 11 la acompañan (fundamentos, espacio de trabajo, skills,
  agentes y proyecto).
- **Cómo se practica:**
  - La página de cada clase enseña y evalúa (actividades y examen).
  - La práctica se hace en Claude (chat web o de escritorio, o Claude Code), con criterios para
    comprobar el resultado por tu cuenta.
  - Las pruebas de calidad se hacen con una **hoja de evaluación** propia (casos de prueba,
    criterios y resultados) directamente en el chat, sin la API.
- **Regla de seguridad del curso:**
  - Nunca se pegan en Claude tokens, contraseñas ni datos personales.
  - Claude Code se practica en carpetas y repositorios de prueba, **nunca en la academia real**.
  - Se revisan los permisos antes de aceptar cada acción.

**La formación de ingeniería de instrucciones, nivel por nivel**

| Nivel pedido | Módulo del curso | Temas que cubre |
|---|---|---|
| 1. Fundamentos del prompting | M2 (4 clases) | Qué es un prompt y cómo funciona la interacción; preguntas e instrucciones claras; vago frente a bien definido; contexto, objetivo y restricciones; resultado esperado; errores frecuentes |
| 2. Técnicas fundamentales | M3 (5 clases) | Roles y responsabilidades; instrucciones directas y específicas; contexto y alcance; ejemplos (few-shot); restricciones y criterios de aceptación; formatos de respuesta; separar instrucciones, datos y referencias |
| 3. Prompting estructurado | M5 (6 clases) | Etiquetas XML; estructuras reutilizables; varias condiciones; documentos extensos; investigación, comparación y síntesis; informes, tablas, planes y documentación; ambigüedades y contradicciones |
| 4. Prompt engineering avanzado | M6 (6 clases) | Descomposición; encadenamiento (prompt chaining); mejora iterativa; errores y alucinaciones; verificación con fuentes; evaluación de calidad; pruebas y criterios de éxito; bibliotecas reutilizables |
| 5. Aplicaciones profesionales | M8 (7 clases) | Desarrollo de software; HTML, CSS, JavaScript y Python; análisis y corrección de código; automatización; investigación técnica; PDF y Word; informes y documentación; gestión de proyectos; diseño web; oportunidades laborales y negocios; productividad personal |
| 6. Context engineering y Claude Code | M9 (7 clases) y M10 (5 clases) | Prompt frente a context engineering; Claude frente a Claude Code, con requisitos y límites; contexto del proyecto; CLAUDE.md; skills y reglas; subagentes y delegación; planificar antes de implementar; permisos y supervisión; hooks; MCP; evaluar agentes; flujos con varios agentes |

**Dónde se practica y qué plan necesita cada clase** (detalle por clase en las tablas de abajo):

| Dónde y con qué plan | Clases |
|---|---|
| En el chat de Claude, con el plan gratuito | 43 |
| Necesitan un plan de pago (Pro o superior) | 12 (Claude Code: 11; otras funciones de pago, como Research, Claude in Chrome y Cowork: 1) |
| Necesitan la API de pago | **0** |
| **Total** | **55** |

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
| Research (investigación profunda) | No | Sí | Requiere la búsqueda web activada; la alternativa gratuita es la búsqueda web |
| Claude in Chrome | No | Sí | Extensión que lee, hace clic y navega sitios contigo |
| Cowork | No | Sí | Misma arquitectura de agente que Claude Code, sin terminal; usa la app de escritorio |
| Claude Code (terminal, escritorio, web y VS Code) | **No** | Sí | Comparte los límites de uso con el chat |
| Tareas programadas en la nube | No | Sí | En vista previa; máximo 100 ejecuciones programadas por hora |
| API, Console y Agent SDK | Pago aparte | Pago aparte | **Fuera del curso.** Los cuadernos del tutorial oficial usan la API: son opcionales |

- **Precios** (página oficial, 11/11/2026; en dólares y sin impuestos):
  - Pro: US$17 al mes con pago anual o US$20 con pago mensual.
  - Max: desde US$100 al mes. Ultra: US$200 al mes.
  - Team y Enterprise: para organizaciones.
  - La página advierte que precios y planes pueden cambiar.
- **Ruta gratuita:** 43 de las 55 clases y la biblioteca profesional del
  proyecto final se hacen con el plan gratuito. Sin plan de pago solo quedan fuera Claude Code y
  sus agentes, Research, Claude in Chrome y Cowork.
- **Privacidad** (se enseña en el Módulo 1):
  - En las cuentas Free, Pro y Max, incluido Claude Code, tú decides si tus chats se usan para
    entrenar modelos (Configuración → Privacidad → «Help improve our AI models»).
  - Los chats de incógnito no se usan para entrenar.
  - Edad mínima: 18 años (o la de tu país, si es mayor).
  - La política de uso tiene una versión nueva que entra en vigor el 12/11/2026; se revisará al
    crear la clase.

**Materiales de apoyo y de qué tipo es cada uno**

| Material | Tipo | Cómo se usa en el curso | Costo y acceso |
|---|---|---|---|
| Tutorial interactivo de prompt engineering de Anthropic (9 capítulos y un apéndice) | Oficial (Anthropic) | Guía la secuencia de los módulos 2, 3, 5 y 6 (ver el mapa de abajo). Las lecciones se leen y los ejercicios se rehacen en el chat de Claude | Las lecciones se leen gratis en GitHub. Los cuadernos **requieren una clave de API** (de pago): son opcionales |
| Guía oficial «Prompting best practices» | Oficial (Anthropic) | Referencia principal de técnicas para los modelos actuales | Gratis |
| Documentación «Define success criteria and build evaluations» | Oficial (Anthropic) | Criterios de éxito y casos de prueba (M6·5 y M10·4), aplicados con una hoja de evaluación en el chat | Gratis; la herramienta de evaluación de la Console usa la API y no se exige |
| Artículos oficiales «Building effective agents» (19/12/2024) y «Effective context engineering for AI agents» (29/09/2025) | Oficial (Anthropic) | Patrones de agentes (M6·1 y M10) y diferencia entre prompt y context engineering (M9·1) | Gratis |
| Documentación de Claude Code (incluida «Best practices for Claude Code») | Oficial (Anthropic) | Módulos 9 y 10 | Gratis; Claude Code requiere un plan de pago |
| Claude Academy (academy.claude.com): «AI Fluency», «AI capabilities and limitations», «Introduction to agent skills», «Introduction to subagents»… | Oficial (Anthropic), con profesores de University College Cork y Ringling College en «AI Fluency» | Lecturas y videos de apoyo en los módulos 1, 7 y 10 | Gratis |
| Repositorio de cursos de Anthropic (github.com/anthropics/courses) | Oficial (Anthropic) | Solo lectura de apoyo («Real world prompting» y «Prompt evaluations») | **Archivado desde el 15/09/2026** (solo lectura). Sus cuadernos usan la API |
| Elements of AI | Universidad (Universidad de Helsinki con MinnaLearn) | Lectura complementaria del Módulo 1, en español | Gratis |
| Prompt Engineering Guide (DAIR.AI) | Terceros | Consulta opcional; tiene una versión en español parcial | Gratis |
| Videos de DevTalles, MoureDev, Derivando y otros | Terceros | Videos complementarios (sección 5) | Gratis |
| Explicaciones, ejercicios, hojas de evaluación y rúbricas de cada clase | Original de la academia | Contenido principal de las clases | Gratis |

> **Nota de vigencia:** el tutorial oficial se escribió para los modelos Claude 3. En la academia se
> indicará en cada clase qué partes ya no aplican. Por ejemplo, la técnica de «prellenar» la
> respuesta (*Speaking for Claude*, capítulo 5) ya no funciona en los modelos actuales, según la
> guía de buenas prácticas, y tampoco se puede usar en el chat.

**Mapa: material oficial que apoya cada clase**

| Material oficial | Clases de la academia que lo usan |
|---|---|
| Artículo oficial «Building effective agents» | M10·1 |
| Artículo oficial «Effective context engineering for AI agents» | M9·1 |
| Documentación de Claude Code: Best practices («Enforce the rules that can't have exceptions») y Hooks | M9·6 |
| Documentación de Claude Code: Best practices («Keep CLAUDE.md short») y Memory | M9·3 |
| Documentación oficial: «Define success criteria and build evaluations» | M6·5, M10·4 |
| Prompting best practices: «Add context to improve performance» | M2·3 |
| Prompting best practices: «Be clear and direct» | M3·2 |
| Prompting best practices: «Long context prompting» | M5·3 |
| Prompting best practices: «Structure prompts with XML tags» | M5·1 |
| Tutorial de Anthropic, apéndice: Chaining Prompts | M6·1 |
| Tutorial de Anthropic, cap. 1: Basic Prompt Structure | M2·1 |
| Tutorial de Anthropic, cap. 2: Being Clear and Direct | M2·2 |
| Tutorial de Anthropic, cap. 3: Assigning Roles | M3·1 |
| Tutorial de Anthropic, cap. 4: Separating Data from Instructions | M3·5 |
| Tutorial de Anthropic, cap. 5: Formatting Output | M3·4 |
| Tutorial de Anthropic, cap. 6: Precognition | M6·2 |
| Tutorial de Anthropic, cap. 7: Using Examples | M3·3 |
| Tutorial de Anthropic, cap. 8: Avoiding Hallucinations | M6·3 |
| Tutorial de Anthropic, cap. 9: Building Complex Prompts | M5·2 |

**Proyecto integrador: tu biblioteca profesional de prompts**

- **Contenido de la biblioteca:** instrucciones para investigación, análisis de documentos,
  programación, revisión y corrección de código, automatización, planificación de proyectos, y
  agentes y subagentes.
- **Ficha de cada instrucción:**
  - propósito y caso de uso;
  - variables (lo que cambia en cada uso);
  - la instrucción completa, con su estructura (rol, contexto, etiquetas XML, ejemplos y formato);
  - criterios de aceptación;
  - casos de prueba con los resultados obtenidos;
  - historial de versiones con lo que cambió y por qué.
- **Demostración obligatoria:** transformar al menos cinco instrucciones deficientes en
  profesionales, justificar cada cambio con la técnica aplicada y comprobar con la hoja de
  evaluación si el resultado cumple los criterios.
- **Dónde se guarda:** en un proyecto de Claude (plan gratuito, hasta 5 proyectos) y como archivos
  propios. Las mejores instrucciones pueden convertirse en skills (Módulo 7).
- **Rúbrica:**
  - cobertura de los casos de uso;
  - calidad de cada instrucción;
  - pruebas y resultados medidos;
  - transformaciones justificadas;
  - seguridad (sin datos sensibles);
  - presentación.
- **Versión gratuita y versión completa:** la biblioteca completa se hace con el plan gratuito.
  Las instrucciones para agentes y subagentes se diseñan y revisan en el chat. Solo ejecutarlas
  con Claude Code requiere un plan de pago.

Los códigos de la columna «Videos» (C01, C02…) remiten a la tabla de la sección 5. Cuando un video
es largo, se indica el minuto en que empieza la parte que corresponde a la clase.

### Módulo 1 · Fundamentos de la IA generativa y de Claude (4 clases · 8 h)

- **Objetivo:** Entender qué es Claude, qué puede y qué no puede hacer, y usarlo de forma segura y responsable.
- **Competencias:** Explicar qué es un modelo de lenguaje y sus límites (errores inventados o «alucinaciones», fecha de conocimiento); distinguir Claude (chat) de Claude Code y lo que incluye cada plan; configurar la privacidad; aplicar el marco de fluidez en IA (Delegación, Descripción, Discernimiento y Diligencia) y la política de uso.
- **Al terminar serás capaz de:** Usar Claude con criterio, sabiendo cuándo confiar y cuándo verificar.
- **Conocimientos previos:** Ninguno. Una cuenta de Claude; el plan gratuito sirve.
- **Ejercicios y prácticas:** Comparar respuestas con y sin búsqueda web; revisar tu configuración de privacidad; detectar errores en respuestas de ejemplo.
- **Evaluación del módulo:** Examen de conceptos y análisis de tres respuestas: cuál es confiable y por qué.
- **Fuentes previstas** (se verifican al crear cada clase): Claude Academy: «AI Fluency: Framework and foundations» y «AI capabilities and limitations» (oficial); Elements of AI (Universidad de Helsinki); página de planes; centro de privacidad; política de uso.

| Clase | Tema | Dónde se practica | Plan de Claude | Material oficial de apoyo | Videos |
|---|---|---|---|---|---|
| M1·1 | ¿Qué es la IA generativa? Modelos de lenguaje, capacidades y límites | Chat de Claude | Gratis | — | C01 |
| M1·2 | Claude y Claude Code: planes, apps, modelos y límites de uso | Chat de Claude | Gratis | — | — |
| M1·3 | Primeros pasos: conversaciones, archivos, búsqueda web y estilos | Chat de Claude | Gratis | — | — |
| M1·4 | Fluidez en IA y uso responsable: el marco 4D, privacidad, verificación y política de uso | Chat de Claude | Gratis | — | C02, C03 |

### Módulo 2 · Prompting · Nivel 1: Fundamentos (4 clases · 8 h)

- **Objetivo:** Comunicarte con Claude con instrucciones claras, con contexto, objetivo, restricciones y un resultado esperado.
- **Competencias:** Explicar qué es un prompt y cómo funciona una conversación con Claude; distinguir una instrucción vaga de una bien definida; dar contexto, objetivo y restricciones; definir el resultado esperado; reconocer los errores frecuentes al comunicarse con una IA.
- **Al terminar serás capaz de:** Convertir una petición vaga en una instrucción clara que funcione a la primera.
- **Conocimientos previos:** Módulo 1.
- **Ejercicios y prácticas:** Reescribir diez peticiones vagas de la vida diaria y de tus cursos, comparando el resultado antes y después con una lista de comprobación.
- **Evaluación del módulo:** Mejorar cinco instrucciones reales y explicar qué cambió y por qué.
- **Fuentes previstas** (se verifican al crear cada clase): Tutorial interactivo de Anthropic (capítulos 1 y 2); guía oficial «Prompting best practices»; DevTalles (terceros).

| Clase | Tema | Dónde se practica | Plan de Claude | Material oficial de apoyo | Videos |
|---|---|---|---|---|---|
| M2·1 | ¿Qué es un prompt? Cómo interpreta Claude lo que escribes | Chat de Claude | Gratis | Tutorial de Anthropic, cap. 1: Basic Prompt Structure | C04 |
| M2·2 | Preguntas e instrucciones claras: de lo vago a lo bien definido | Chat de Claude | Gratis | Tutorial de Anthropic, cap. 2: Being Clear and Direct | C05 |
| M2·3 | Contexto, objetivo y restricciones | Chat de Claude | Gratis | Prompting best practices: «Add context to improve performance» | C06 |
| M2·4 | Definir el resultado esperado y evitar errores frecuentes (evaluación del módulo) | Chat de Claude | Gratis | — | C07 |

### Módulo 3 · Prompting · Nivel 2: Técnicas fundamentales (5 clases · 10 h)

- **Objetivo:** Dominar las técnicas básicas que hacen que una instrucción sea precisa y repetible.
- **Competencias:** Asignar roles y responsabilidades; dar instrucciones directas y específicas; delimitar el alcance; usar ejemplos de entrada y salida (few-shot); fijar restricciones y criterios de aceptación; definir el formato de la respuesta; separar instrucciones, datos y contenido de referencia.
- **Al terminar serás capaz de:** Elegir y combinar la técnica adecuada para cada tarea.
- **Conocimientos previos:** Módulo 2.
- **Ejercicios y prácticas:** Para una misma tarea, probar la instrucción sin técnica y con cada técnica, y registrar en una tabla qué mejoró.
- **Evaluación del módulo:** Construir una instrucción con rol, ejemplos, criterios de aceptación y formato, y demostrar que cumple los criterios en tres casos distintos.
- **Fuentes previstas** (se verifican al crear cada clase): Tutorial interactivo de Anthropic (capítulos 2 a 5 y 7); guía oficial «Prompting best practices»; video oficial «Prompting 101».

| Clase | Tema | Dónde se practica | Plan de Claude | Material oficial de apoyo | Videos |
|---|---|---|---|---|---|
| M3·1 | Roles y responsabilidades: asignar un papel a Claude | Chat de Claude | Gratis | Tutorial de Anthropic, cap. 3: Assigning Roles | C08 |
| M3·2 | Instrucciones directas y específicas; contexto y alcance | Chat de Claude | Gratis | Prompting best practices: «Be clear and direct» | — |
| M3·3 | Ejemplos de entrada y salida (few-shot) | Chat de Claude | Gratis | Tutorial de Anthropic, cap. 7: Using Examples | — |
| M3·4 | Restricciones, criterios de aceptación y formato de la respuesta | Chat de Claude | Gratis | Tutorial de Anthropic, cap. 5: Formatting Output (la parte «Speaking for Claude» ya no aplica a los modelos actuales) | C09 |
| M3·5 | Separar instrucciones, datos y contenido de referencia (evaluación del módulo) | Chat de Claude | Gratis | Tutorial de Anthropic, cap. 4: Separating Data from Instructions | — |

### Módulo 4 · Espacio de trabajo con Claude: proyectos, artefactos, memoria y conectores (4 clases · 8 h)

- **Objetivo:** Organizar tu trabajo con Claude para no repetir contexto y guardar tus instrucciones.
- **Competencias:** Crear proyectos con instrucciones y conocimiento; crear artefactos y archivos con ejecución de código; usar la memoria; conectar Claude con otras apps mediante conectores (MCP); saber cuándo convienen Research, Claude in Chrome y Cowork según el plan.
- **Al terminar serás capaz de:** Montar un espacio de trabajo con Claude para cada curso de la academia.
- **Conocimientos previos:** Módulo 2.
- **Ejercicios y prácticas:** Un proyecto por curso con sus instrucciones; un artefacto de repaso; un conector de prueba.
- **Evaluación del módulo:** Presentar tu espacio de trabajo y un artefacto útil para estudiar.
- **Fuentes previstas** (se verifican al crear cada clase): Centro de ayuda de Claude: Projects, Artifacts, memoria, conectores personalizados (MCP remoto), Research, Claude in Chrome y Cowork.

| Clase | Tema | Dónde se practica | Plan de Claude | Material oficial de apoyo | Videos |
|---|---|---|---|---|---|
| M4·1 | Proyectos: instrucciones y conocimiento permanentes | Chat de Claude | Gratis (hasta 5 proyectos) | — | — |
| M4·2 | Artefactos y archivos: documentos, páginas y datos con ejecución de código | Chat de Claude | Gratis (hay que activar la ejecución de código) | — | — |
| M4·3 | Memoria y conectores (MCP) en Claude | Chat de Claude | Gratis con límites (1 conector propio; buscar chats anteriores es de pago) | — | — |
| M4·4 | Research, Claude in Chrome y Cowork: cuándo valen la pena (evaluación del módulo) | Chat de Claude y app de escritorio | Pago (Pro o superior); la clase muestra la alternativa gratuita | — | — |

### Módulo 5 · Prompting · Nivel 3: Prompting estructurado (6 clases · 12 h)

- **Objetivo:** Diseñar instrucciones estructuradas y reutilizables para tareas largas y con varias condiciones.
- **Competencias:** Organizar instrucciones con etiquetas XML; crear plantillas reutilizables; escribir prompts con varias condiciones; analizar documentos extensos; investigar, comparar y sintetizar; generar informes, tablas, planes y documentación; detectar y eliminar ambigüedades y contradicciones.
- **Al terminar serás capaz de:** Escribir plantillas de instrucciones que otra persona pueda reutilizar sin explicaciones.
- **Conocimientos previos:** Módulo 3.
- **Ejercicios y prácticas:** Convertir tres instrucciones de los niveles anteriores en plantillas con etiquetas XML y probarlas con documentos reales (PDF y Word).
- **Evaluación del módulo:** Plantilla de análisis de un documento extenso, con condiciones, formato fijo y una prueba de que no tiene contradicciones.
- **Proyecto:** Plantillas para investigación y para informes, que se suman a tu biblioteca.
- **Fuentes previstas** (se verifican al crear cada clase): Guía oficial «Prompting best practices» («Structure prompts with XML tags», «Long context prompting»); tutorial de Anthropic (capítulo 9).

| Clase | Tema | Dónde se practica | Plan de Claude | Material oficial de apoyo | Videos |
|---|---|---|---|---|---|
| M5·1 | Etiquetas XML para organizar instrucciones | Chat de Claude | Gratis | Prompting best practices: «Structure prompts with XML tags» | C08 |
| M5·2 | Plantillas reutilizables y prompts con varias condiciones | Chat de Claude | Gratis | Tutorial de Anthropic, cap. 9: Building Complex Prompts | — |
| M5·3 | Analizar documentos extensos (PDF y Word) | Chat de Claude | Gratis (con límites de uso) | Prompting best practices: «Long context prompting» | — |
| M5·4 | Prompts para investigar, comparar y sintetizar | Chat de Claude | Gratis con búsqueda web; Research es de pago (opcional) | — | — |
| M5·5 | Prompts para informes, tablas, planes y documentación | Chat de Claude | Gratis | — | — |
| M5·6 | Evitar ambigüedades y contradicciones (evaluación del módulo) | Chat de Claude | Gratis | — | — |

### Módulo 6 · Prompting · Nivel 4: Avanzado (6 clases · 12 h)

- **Objetivo:** Resolver tareas complejas con procesos de varias etapas y medir la calidad de las instrucciones.
- **Competencias:** Descomponer problemas complejos; encadenar prompts; mejorar por iteraciones; detectar errores y alucinaciones; verificar información con fuentes; definir criterios de éxito y casos de prueba; evaluar la calidad de las respuestas; mantener una biblioteca de prompts con versiones.
- **Al terminar serás capaz de:** Demostrar con pruebas que una instrucción funciona, en lugar de suponerlo.
- **Conocimientos previos:** Módulo 5.
- **Ejercicios y prácticas:** Una hoja de evaluación propia (casos de prueba, criterios y resultados) para comparar versiones de una instrucción directamente en el chat, sin la API.
- **Evaluación del módulo:** Mejorar una instrucción en tres versiones y demostrar con la hoja de evaluación cuál cumple mejor los criterios.
- **Proyecto:** Primera versión de tu biblioteca, con criterios de prueba por instrucción.
- **Fuentes previstas** (se verifican al crear cada clase): Tutorial de Anthropic (capítulos 6 y 8, y apéndice «Chaining Prompts»); documentación oficial «Define success criteria and build evaluations»; artículo oficial «Building effective agents» (encadenamiento de prompts).

| Clase | Tema | Dónde se practica | Plan de Claude | Material oficial de apoyo | Videos |
|---|---|---|---|---|---|
| M6·1 | Descomponer problemas complejos y encadenar prompts | Chat de Claude | Gratis | Tutorial de Anthropic, apéndice: Chaining Prompts | — |
| M6·2 | Razonamiento paso a paso y mejora por iteraciones | Chat de Claude | Gratis | Tutorial de Anthropic, cap. 6: Precognition (Thinking Step by Step) | C10 (desde 12:17) |
| M6·3 | Alucinaciones: detectarlas y reducirlas | Chat de Claude | Gratis | Tutorial de Anthropic, cap. 8: Avoiding Hallucinations | C11 |
| M6·4 | Verificar información y trabajar con fuentes | Chat de Claude | Gratis | — | — |
| M6·5 | Criterios de éxito, casos de prueba y evaluación de calidad | Chat de Claude | Gratis (en el chat, con una hoja de evaluación) | Documentación oficial: «Define success criteria and build evaluations» | C12 |
| M6·6 | Biblioteca de prompts reutilizables y control de versiones (evaluación del módulo) | Chat de Claude (proyectos) | Gratis | — | — |

### Módulo 7 · Skills: procedimientos reutilizables (3 clases · 6 h)

- **Objetivo:** Convertir tus mejores instrucciones en skills para que Claude las aplique solo cuando corresponde.
- **Competencias:** Explicar qué es un skill y cuándo se activa; usar skills incluidos; convertir una instrucción probada en un skill (SKILL.md); agregar archivos de apoyo y pruebas.
- **Al terminar serás capaz de:** Crear un skill que automatice una tarea repetida de tu estudio.
- **Conocimientos previos:** Módulos 4 y 6.
- **Ejercicios y prácticas:** Convertir en skill la instrucción que transforma el resumen de una clase en apuntes con el formato de la academia.
- **Evaluación del módulo:** Skill propio funcionando, con instrucciones y casos de prueba.
- **Fuentes previstas** (se verifican al crear cada clase): Centro de ayuda: «What are skills?» y «Use skills in Claude»; documentación de Claude Code: Skills; Claude Academy: «Introduction to agent skills».

| Clase | Tema | Dónde se practica | Plan de Claude | Material oficial de apoyo | Videos |
|---|---|---|---|---|---|
| M7·1 | ¿Qué es un skill? Usar los skills incluidos | Chat de Claude | Gratis (hay que activar la ejecución de código) | — | — |
| M7·2 | Convertir una instrucción probada en un skill (SKILL.md) | Chat de Claude | Gratis (hay que activar la ejecución de código) | — | — |
| M7·3 | Skills con archivos de apoyo y pruebas (evaluación del módulo) | Chat de Claude | Gratis; usarlos en Claude Code requiere plan de pago | — | — |

### Módulo 8 · Prompting · Nivel 5: Aplicaciones profesionales (7 clases · 14 h)

- **Objetivo:** Diseñar instrucciones profesionales para los trabajos reales de tus otros cursos y de tu vida laboral.
- **Competencias:** Escribir instrucciones para desarrollar software (HTML, CSS, JavaScript y Python); analizar y corregir código; diseñar páginas web; automatizar tareas; investigar temas técnicos; analizar documentos PDF y Word; elaborar informes y documentación; gestionar proyectos; analizar oportunidades laborales y de negocio; organizar tu productividad personal.
- **Al terminar serás capaz de:** Tener una instrucción probada para cada tipo de trabajo que haces con frecuencia.
- **Conocimientos previos:** Módulo 6. Para las clases de programación se recomienda el Módulo 1 de JavaScript o de Python: aquí no se enseña a programar, se enseña a pedir y a revisar.
- **Ejercicios y prácticas:** Cada clase usa material real de otro curso de la academia (un ejercicio de JavaScript, un registro de Ciberseguridad, un plan de red) y termina con una instrucción probada para la biblioteca.
- **Evaluación del módulo:** Resolver un encargo profesional ficticio con instrucciones propias y demostrar que el resultado cumple los criterios.
- **Proyecto:** Las instrucciones de este módulo pasan a tu biblioteca.
- **Fuentes previstas** (se verifican al crear cada clase): Guía oficial «Prompting best practices»; materiales de los cursos de JavaScript, Python, Ciberseguridad y Redes de la academia.

| Clase | Tema | Dónde se practica | Plan de Claude | Material oficial de apoyo | Videos |
|---|---|---|---|---|---|
| M8·1 | Prompts para desarrollar software: HTML, CSS, JavaScript y Python | Chat de Claude | Gratis | — | — |
| M8·2 | Prompts para analizar, revisar y corregir código | Chat de Claude | Gratis | — | — |
| M8·3 | Prompts para diseñar páginas web: estructura, estilo y accesibilidad | Chat de Claude (artefactos) | Gratis | — | — |
| M8·4 | Prompts para automatizar tareas: scripts, fórmulas y flujos | Chat de Claude | Gratis | — | — |
| M8·5 | Investigación técnica y análisis de documentos PDF y Word | Chat de Claude | Gratis (con límites de uso) | — | — |
| M8·6 | Informes, documentación y gestión de proyectos | Chat de Claude | Gratis | — | — |
| M8·7 | Oportunidades laborales, negocios y productividad personal (evaluación del módulo) | Chat de Claude | Gratis | — | — |

### Módulo 9 · Prompting · Nivel 6: Context engineering y Claude Code (7 clases · 14 h)

- **Objetivo:** Pasar de escribir instrucciones a diseñar el contexto completo con el que trabaja un agente de programación.
- **Competencias:** Diferenciar prompt engineering y context engineering; diferenciar Claude y Claude Code, con sus requisitos y límites por plan; dar el contexto de un proyecto con CLAUDE.md y reglas; usar skills y comandos reutilizables; planificar antes de implementar; controlar permisos y supervisar acciones; proteger con hooks; conectar herramientas con MCP.
- **Al terminar serás capaz de:** Configurar un proyecto para que Claude Code trabaje bien y de forma segura.
- **Conocimientos previos:** Módulo 6. Desde la clase 2 se necesita un plan de pago (Pro o superior). Recomendado: el Módulo 1 de JavaScript o de Python.
- **Ejercicios y prácticas:** Un proyecto de práctica en una carpeta aparte (nunca la academia real), configurado paso a paso: CLAUDE.md, reglas, un skill, un hook y un servidor MCP.
- **Evaluación del módulo:** Entregar el proyecto de práctica configurado y una tarea resuelta con modo plan, con las acciones revisadas.
- **Fuentes previstas** (se verifican al crear cada clase): Artículo oficial «Effective context engineering for AI agents» (29/09/2025); documentación de Claude Code: Best practices, Memory, Skills, Hooks, MCP y Permissions; MoureDev (terceros, capítulos indicados).

| Clase | Tema | Dónde se practica | Plan de Claude | Material oficial de apoyo | Videos |
|---|---|---|---|---|---|
| M9·1 | De prompt engineering a context engineering; Claude frente a Claude Code | Chat de Claude | Gratis (parte conceptual) | Artículo oficial «Effective context engineering for AI agents» | — |
| M9·2 | Instalar Claude Code: permisos y supervisión de acciones | Claude Code | Pago (Pro o superior) | — | C13 (desde 12:35), C13 (desde 41:49), C14 |
| M9·3 | Contexto del proyecto: CLAUDE.md, reglas y memoria | Claude Code | Pago (Pro o superior) | Documentación de Claude Code: Best practices («Keep CLAUDE.md short») y Memory | C13 (desde 1:16:51) |
| M9·4 | Planificar antes de implementar: modo plan y verificación | Claude Code | Pago (Pro o superior) | — | C15, C13 (desde 45:33) |
| M9·5 | Skills y comandos reutilizables en Claude Code | Claude Code | Pago (Pro o superior) | — | C13 (desde 1:56:59) |
| M9·6 | Hooks y mecanismos de protección | Claude Code | Pago (Pro o superior) | Documentación de Claude Code: Best practices («Enforce the rules that can't have exceptions») y Hooks | C13 (desde 2:49:04) |
| M9·7 | MCP y herramientas externas (evaluación del módulo) | Claude Code | Pago (Pro o superior) | — | C16, C13 (desde 2:09:35) |

### Módulo 10 · Agentes, subagentes y automatización (5 clases · 10 h)

- **Objetivo:** Delegar trabajo en agentes y subagentes, evaluar lo que entregan y automatizar tareas con seguridad.
- **Competencias:** Explicar cómo trabaja un agente y sus riesgos; delegar en subagentes; diseñar flujos con varios agentes (encadenamiento, enrutamiento, paralelización, orquestador-trabajadores y evaluador-optimizador); evaluar resultados de agentes; automatizar con tareas programadas, scripts y GitHub Actions, conociendo los límites de uso.
- **Al terminar serás capaz de:** Diseñar, evaluar y dejar funcionando un flujo con varios agentes.
- **Conocimientos previos:** Módulo 9.
- **Ejercicios y prácticas:** Dos subagentes propios (uno investiga en solo lectura y otro revisa) y una comparación con hacer la tarea en una sola conversación.
- **Evaluación del módulo:** Flujo con al menos dos subagentes, con criterios de evaluación de su resultado y una automatización documentada (qué hace, cuándo corre, qué consume y cómo se apaga).
- **Fuentes previstas** (se verifican al crear cada clase): Artículo oficial «Building effective agents» (19/12/2024); documentación de Claude Code: Sub-agents, tareas programadas, Headless y GitHub Actions; videos oficiales de Anthropic.

| Clase | Tema | Dónde se practica | Plan de Claude | Material oficial de apoyo | Videos |
|---|---|---|---|---|---|
| M10·1 | Cómo trabaja un agente: herramientas, bucle agéntico y riesgos | Claude Code | Pago (Pro o superior) | Artículo oficial «Building effective agents» | C17, C13 (desde 8:19) |
| M10·2 | Subagentes y delegación de tareas | Claude Code | Pago (Pro o superior) | — | C13 (desde 2:33:45) |
| M10·3 | Flujos con varios agentes: orquestar y combinar resultados | Claude Code | Pago (Pro o superior) | — | C18 |
| M10·4 | Evaluar los resultados de los agentes | Claude Code | Pago (Pro o superior) | Documentación oficial: «Define success criteria and build evaluations» | — |
| M10·5 | Automatizar: tareas programadas, scripts y GitHub Actions (evaluación del módulo) | Claude Code | Pago (Pro o superior) | — | C13 (desde 2:56:18) |

### Módulo 11 · Proyecto integrador: biblioteca profesional de prompts (4 clases · 8 h)

- **Objetivo:** Construir, probar y defender tu propia biblioteca profesional de prompts para Claude.
- **Competencias:** Diseñar una biblioteca por casos de uso; escribir criterios de prueba; transformar instrucciones deficientes en profesionales y justificar cada cambio; medir si el resultado cumple los criterios; presentar el trabajo.
- **Al terminar serás capaz de:** Entregar una biblioteca profesional de prompts probada y documentada.
- **Conocimientos previos:** Módulos 7 y 8. La parte de agentes y automatización requiere los Módulos 9 y 10 y un plan de pago; el resto se hace con el plan gratuito.
- **Ejercicios y prácticas:** Avances semanales revisados con la rúbrica del proyecto.
- **Evaluación del módulo:** Rúbrica: cobertura de los casos de uso, calidad de cada instrucción, pruebas y resultados, transformaciones justificadas, seguridad y presentación.
- **Proyecto:** Proyecto final del curso (ver más arriba).

| Clase | Tema | Dónde se practica | Plan de Claude | Material oficial de apoyo | Videos |
|---|---|---|---|---|---|
| M11·1 | Diseño de la biblioteca: casos de uso, plantillas y criterios de prueba | Chat de Claude (proyectos) | Gratis | — | — |
| M11·2 | Construcción y pruebas: investigación, documentos, programación, revisión de código y planificación | Chat de Claude | Gratis | — | — |
| M11·3 | Automatización, agentes y subagentes; de instrucción deficiente a profesional | Chat de Claude o Claude Code | Gratis (diseño y prueba en el chat) o pago (ejecución con Claude Code) | — | — |
| M11·4 | Presentación y defensa: cambios justificados y resultados medidos | Chat de Claude | Gratis | — | — |

## 5. Videos complementarios: estándar para los 6 cursos y videos verificados

**Estándar** (se propone para los seis cursos):

1. Los videos **complementan** la clase. No reemplazan las explicaciones escritas, los ejercicios
   ni la evaluación.
2. Se recomiendan solo cuando aportan valor a una clase o a un tema importante.
3. **Prioridad:** canales oficiales, universidades, y docentes o educadores con trayectoria.
4. **Primero en español.** Si el mejor recurso está en inglés, se indica si tiene subtítulos en
   español (escritos o automáticos), solo traducción automática, o doblaje al español.
5. **Ficha de cada video:**
   - título exacto, canal y tipo (oficial, universidad o terceros);
   - idioma, duración y fecha de publicación;
   - qué enseña;
   - enlace directo y fecha de verificación;
   - una alternativa escrita, por si el video desaparece.
6. **Se verifica con una herramienta** (`herramientas/verificar-videos.py`) que comprueba en
   YouTube que el video existe y está disponible, su título exacto, canal, duración, fecha y
   subtítulos o doblaje en español.
   - Qué enseña se revisa con la descripción y los capítulos oficiales de cada video.
   - Ningún video se vio completo, y así se declara.
7. **Nada de enlaces de búsqueda** ni de videos que solo mencionan el tema en el título.
8. **Videos largos:** se prefiere uno breve si es igual de claro. Si el largo es el mejor, se
   enlaza el minuto exacto del capítulo que corresponde a la clase.
9. **Se vuelven a verificar** al crear cada clase y antes de publicarla, porque los videos pueden
   desaparecer o cambiar.

**Cómo se aplica a los cuatro cursos existentes:** progresivamente, al actualizar cada clase al
estándar (después de que apruebes Ciberseguridad 01 como modelo). Por ahora no se modifica ninguna
clase. Cada clase actualizada tendrá su sección de videos, junto a la de fuentes verificadas.

**Resultado de la verificación (11/11/2026):**

- **Videos verificados:** 65, todos disponibles el 11/11/2026.
- **En español:** 19 videos (18 con subtítulos en español). **En inglés:** 46; de ellos, 34 tienen doblaje al español y 46 tienen subtítulos en español (automáticos o por traducción automática de YouTube).
- **Por tipo:** 9 oficiales de Anthropic, 2 charlas de ingenieros de Anthropic en canales de terceros, 2 de universidades y 52 de educadores con trayectoria.

**Videos de Redes y Telecomunicaciones**

| Código | Video (título exacto y enlace) | Canal · tipo | Idioma y acceso en español | Duración · publicado | Qué enseña | Clases | Alternativa escrita |
|---|---|---|---|---|---|---|---|
| R01 | [Free CCNA \| Network Devices \| Day 1 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=H8W9oMNSuwo) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática | 30:25 · 2019-10-13 | Qué es una red y sus dispositivos: clientes, servidores, switches, routers y firewalls. | M1·1 | Temario oficial CCNA v1.1, tema 1.1: https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf |
| R02 | [Redes de ordenadores. Modelo OSI \| 38/48 \| UPV](https://www.youtube.com/watch?v=4GEHbsBF0Yw) | Universitat Politècnica de València - UPV · Universidad | Español. Subtítulos: en español, escritos | 10:46 · 2016-12-15 | El modelo OSI (lección de un MOOC universitario). | M1·2 | ITU-T X.200: https://www.itu.int/rec/T-REC-X.200 |
| R03 | [Modelo de capas OSI y TCP/IP. Curso de redes desde 0 \| Cap 12 \|](https://www.youtube.com/watch?v=iNh-62Mf0O4) | NASeros · Terceros (educador especializado en redes) | Español. Subtítulos: en español, escritos | 24:02 · 2021-01-10 | Modelos de capas OSI y TCP/IP. | M1·2 | RFC 1122 (capas de TCP/IP): https://www.rfc-editor.org/rfc/rfc1122 |
| R04 | [Free CCNA \| Interfaces and Cables \| Day 2 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=ieTH5lVhNaY) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 35:51 · 2019-10-20 | Interfaces y cables: cobre y fibra. | M1·3 | ITU-T G.652 (fibra monomodo): https://www.itu.int/rec/T-REC-G.652 |
| R05 | [Introducción a las redes de fibra óptica ⚡️ Curso de redes desde 0 \| Cap 17 \|](https://www.youtube.com/watch?v=CdAl3cECvJI) | NASeros · Terceros (educador especializado en redes) | Español. Subtítulos: en español, escritos | 23:01 · 2022-12-26 | Introducción a las redes de fibra óptica. | M1·3, M9·2 | ITU-T G.652 (fibra monomodo). |
| R06 | [Cómo funciona un switch y por qué debes usarlo. Curso de redes desde 0 \| Cap 14 \|](https://www.youtube.com/watch?v=w_CArT71qHc) | NASeros · Terceros (educador especializado en redes) | Español. Subtítulos: en español, escritos | 23:33 · 2021-06-13 | Cómo funciona un switch y para qué sirve. | M1·4 | Temario oficial CCNA v1.1, tema 1.13 (conceptos de switching). |
| R07 | [Free CCNA \| Ethernet LAN Switching (Part 1) \| Day 5 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=u2n762WG0Vo) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: (automáticos); tiene doblaje al español | 38:13 · 2019-11-15 | Conmutación Ethernet en la LAN: tramas, direcciones MAC y tabla MAC. | M1·4 | Temario oficial CCNA v1.1, tema 1.13. |
| R08 | [Free CCNA \| Packet Tracer Introduction \| Day 1 Lab \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=a1Im6GYaSno) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática | 15:18 · 2023-01-10 | Introducción a Cisco Packet Tracer (laboratorio). | M1·5 | Guía oficial de descarga e instalación de Packet Tracer: https://www.netacad.com/skillsforall/files/Cisco_Packet_Tracer_Download_and_Installation_Instructions.pdf |
| R09 | [Free CCNA \| IPv4 Addressing (Part 1) \| Day 7 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=3ROdsfEUuhs) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 40:20 · 2019-11-29 | Direccionamiento IPv4, parte 1: binario, red y host. | M2·1 | RFC 791 (IPv4). |
| R10 | [Qué es la IP pública. Curso de redes desde 0 \| Cap 1 \|](https://www.youtube.com/watch?v=gVUE2IDwWA0) | NASeros · Terceros (educador especializado en redes) | Español. Subtítulos: en español, escritos | 16:49 · 2020-05-13 | Qué es la IP pública. | M2·2 | RFC 791 (IPv4): https://www.rfc-editor.org/rfc/rfc791 |
| R11 | [Qué es la IP privada, NAT y puerta de enlace. Curso de redes dede 0 \| Cap 2 \|](https://www.youtube.com/watch?v=HeZWcZmrQUY) | NASeros · Terceros (educador especializado en redes) | Español. Subtítulos: no tiene | 11:59 · 2020-05-14 | IP privada, NAT y puerta de enlace. | M2·2 | RFC 1918 (direcciones privadas): https://www.rfc-editor.org/rfc/rfc1918 |
| R12 | [Free CCNA \| Subnetting (Part 1) \| Day 13 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=bQ8sdpGQu8c) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 28:54 · 2020-02-15 | Subnetting, parte 1. | M2·3 | RFC 4632 (CIDR): https://www.rfc-editor.org/rfc/rfc4632 |
| R13 | [Free CCNA \| Subnetting (Part 2) \| Day 14 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=IGhd-0di0Qo) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 24:46 · 2020-02-26 | Subnetting, parte 2. | M2·3 | RFC 4632 (CIDR). |
| R14 | [Free CCNA \| Subnetting (Part 3 - VLSM) \| Day 15 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=z-JqCedc9EI) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: (automáticos); tiene doblaje al español | 23:52 · 2020-02-29 | Subnetting con VLSM. | M2·4 | RFC 4632 (CIDR). |
| R15 | [Qué es un puerto y un socket. Curso de redes desde 0 \| Cap 5 \|](https://www.youtube.com/watch?v=-7DiO35rbN8) | NASeros · Terceros (educador especializado en redes) | Español. Subtítulos: en español, escritos | 12:42 · 2020-05-27 | Qué es un puerto y un socket. | M3·1 | RFC 9293 (TCP): https://www.rfc-editor.org/rfc/rfc9293 |
| R16 | [Free CCNA \| TCP & UDP \| Day 30 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=LIEACBqlntY) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 33:58 · 2020-10-18 | TCP y UDP. | M3·1 | RFC 9293 (TCP) y RFC 768 (UDP): https://www.rfc-editor.org/rfc/rfc768 |
| R17 | [Free CCNA \| The Life of a Packet \| Day 12 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=4YrYV2io3as) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 20:13 · 2020-02-02 | La vida de un paquete: cómo viaja de un equipo a otro, incluido ARP. | M3·2, M11·2 | RFC 826 (ARP): https://www.rfc-editor.org/rfc/rfc826 |
| R18 | [Free CCNA \| DHCP \| Day 39 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=hzkleGAC2_Y) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática | 37:02 · 2021-02-23 | DHCP. | M3·3 | RFC 2131 (DHCP): https://www.rfc-editor.org/rfc/rfc2131 |
| R19 | [Qué es y para qué sirve un DNS. Curso de redes desde 0 \| Cap 4 \|](https://www.youtube.com/watch?v=7XjJqUM0dvg) | NASeros · Terceros (educador especializado en redes) | Español. Subtítulos: en español, escritos | 8:43 · 2020-05-18 | Qué es y para qué sirve un DNS. | M3·4 | RFC 1034 (DNS): https://www.rfc-editor.org/rfc/rfc1034 |
| R20 | [Free CCNA \| Intro to the CLI \| Day 4 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=IYbtai7Nu2g) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática | 31:06 · 2019-11-03 | Introducción a la línea de comandos (CLI) de Cisco IOS. | M4·1 | Temario oficial CCNA v2.0 y laboratorio guiado de la clase. |
| R21 | [Free CCNA \| SSH \| Day 42 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=AvgYqI2qSD4) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 31:07 · 2021-04-06 | SSH para administrar equipos de red. | M4·2 | Temario oficial CCNA v2.0, tema 4.1: https://learningnetwork.cisco.com/s/ccna-v2-exam-topics |
| R22 | [Free CCNA \| CDP & LLDP \| Day 36 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=_hnMZBzXRRk) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 39:23 · 2021-01-12 | CDP y LLDP. | M4·3 | Temario oficial CCNA v2.0, tema 2.3. |
| R23 | [Qué son las VLAN, para qué sirven y cómo funcionan. Curso de redes desde 0 \| Cap 20 \|](https://www.youtube.com/watch?v=vzY9DJuIe9U) | NASeros · Terceros (educador especializado en redes) | Español. Subtítulos: en español, escritos | 25:35 · 2024-02-26 | Qué son las VLAN, para qué sirven y cómo funcionan. | M5·1 | IEEE 802.1Q (descarga gratuita por el programa IEEE GET). |
| R24 | [VLAN para principiantes: Access vs Trunk con ejemplos reales \| Cap 21 \|](https://www.youtube.com/watch?v=USmPUFzcTlE) | NASeros · Terceros (educador especializado en redes) | Español. Subtítulos: en español, escritos | 15:23 · 2025-09-01 | VLAN: puertos de acceso frente a troncales, con ejemplos. | M5·2 | Temario oficial CCNA v2.0, tema 2.1. |
| R25 | [Free CCNA \| VLANs (Part 3) \| Day 18 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=OkPB028l2eE) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 32:32 · 2020-04-30 | VLAN, parte 3: enrutamiento entre VLAN. | M5·3 | Temario oficial CCNA v2.0, tema 2.1 (SVI). |
| R26 | [Free CCNA \| Spanning Tree Protocol (Part 1) \| Day 20 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=j-bK-EFt9cY) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática | 38:39 · 2020-05-24 | Spanning Tree Protocol, parte 1. | M5·4 | Temario oficial CCNA v2.0, tema 2.5. |
| R27 | [Free CCNA \| EtherChannel \| Day 23 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=xuo69Joy_Nc) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 41:33 · 2020-07-05 | EtherChannel. | M5·5 | Temario oficial CCNA v2.0, tema 2.1. |
| R28 | [Free CCNA \| Routing Fundamentals \| Day 11 (part 1) \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=aHwAm8GYbn8) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática | 31:00 · 2022-12-26 | Fundamentos de enrutamiento. | M6·1 | Temario oficial CCNA v2.0, tema 3.1. |
| R29 | [Free CCNA \| Static Routing \| Day 11 (part 2) \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=YCv4-_sMvYE) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática | 37:44 · 2022-12-27 | Rutas estáticas. | M6·2 | Temario oficial CCNA v2.0, tema 3.2. |
| R30 | [Free CCNA \| OSPF Part 1 \| Day 26 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=pvuaoJ9YzoI) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 39:40 · 2020-08-23 | OSPF, parte 1. | M6·3 | RFC 2328 (OSPFv2): https://www.rfc-editor.org/rfc/rfc2328 |
| R31 | [Free CCNA \| OSPF Part 2 \| Day 27 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=VtzfTA21ht0) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 36:55 · 2020-09-06 | OSPF, parte 2. | M6·4 | RFC 2328 (OSPFv2). |
| R32 | [Free CCNA \| First Hop Redundancy Protocols \| Day 29 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=43WnpwQMolo) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 40:24 · 2020-10-04 | Protocolos de redundancia de primer salto (FHRP). | M6·5 | Temario oficial CCNA v2.0, tema 3.4. |
| R33 | [Qué es IPv6. Curso de redes desde 0 \| Cap 3 \|](https://www.youtube.com/watch?v=LQf1azzcG7s) | NASeros · Terceros (educador especializado en redes) | Español. Subtítulos: en español, escritos | 9:35 · 2020-05-15 | Qué es IPv6. | M7·1 | RFC 8200 (IPv6): https://www.rfc-editor.org/rfc/rfc8200 |
| R34 | [Free CCNA \| IPv6 Part 1 \| Day 31 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=ZNuXyOXae5U) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 39:26 · 2020-11-01 | IPv6, parte 1. | M7·1 | RFC 4291 (direccionamiento IPv6): https://www.rfc-editor.org/rfc/rfc4291 |
| R35 | [Free CCNA \| IPv6 Part 2 \| Day 32 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=BrTMMOXFhDU) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática | 39:33 · 2020-11-17 | IPv6, parte 2. | M7·2 | RFC 4862 (SLAAC) y RFC 4861 (NDP). |
| R36 | [Free CCNA \| NAT (Part 1) \| Day 44 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=2TZCfTgopeg) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática | 32:10 · 2021-05-04 | NAT, parte 1. | M8·1 | RFC 3022 (NAT): https://www.rfc-editor.org/rfc/rfc3022 |
| R37 | [Free CCNA \| Wireless Fundamentals \| Day 55 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=zuYiktLqNYQ) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática | 35:57 · 2021-10-12 | Fundamentos de redes inalámbricas. | M8·2 | Grupo de trabajo IEEE 802.11: https://www.ieee802.org/11/ |
| R38 | [Free CCNA \| Wireless Security \| Day 57 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=wHXKo9So5y8) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática | 33:52 · 2021-11-09 | Seguridad inalámbrica. | M8·2 | Temario oficial CCNA v2.0, tema 1.5. |
| R39 | [Free CCNA \| Wireless Architectures \| Day 56 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=uX1h0F6wpBY) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 38:20 · 2021-10-26 | Arquitecturas inalámbricas. | M8·3 | Temario oficial CCNA v2.0, tema 2.2. |
| R40 | [Ciencia animada UPM: Qué es el 5G](https://www.youtube.com/watch?v=T9Lv4y8519Q) | UPM · Universidad | Español. Subtítulos: en español, automáticos | 2:56 · 2022-09-21 | Qué es el 5G (animación universitaria breve). | M9·3 | ITU-R, IMT-2020: https://www.itu.int/en/ITU-R/study-groups/rsg5/rwp5d/imt-2020/Pages/default.aspx |
| R41 | [Free CCNA \| WAN Architectures \| Day 53 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=BW3fQgdf4-w) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 37:34 · 2021-09-07 | Arquitecturas WAN. | M9·4 | Temario oficial CCNA v2.0, tema 4.5 (VPN IPsec). |
| R42 | [Free CCNA \| Standard ACLs \| Day 34 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=z023_eRUtSo) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 46:50 · 2020-12-15 | ACL estándar. | M10·1 | Temario oficial CCNA v2.0, tema 4.6. |
| R43 | [Free CCNA \| Extended ACLs \| Day 35 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=dUttKY_CNXE) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 40:54 · 2020-12-29 | ACL extendidas. | M10·1 | Temario oficial CCNA v2.0, tema 4.6. |
| R44 | [Free CCNA \| Port Security \| Day 49 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=sHN3jOJIido) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 34:28 · 2021-07-13 | Port security. | M10·2 | Temario oficial CCNA v2.0, tema 4.7. |
| R45 | [Free CCNA \| SNMP \| Day 40 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=HXu0Ifj0oWU) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 29:21 · 2021-03-09 | SNMP. | M10·4 | Temario oficial CCNA v2.0, tema 5.4. |
| R46 | [Free CCNA \| Syslog \| Day 41 \| CCNA 200-301 Complete Course](https://www.youtube.com/watch?v=RaQPSKQ4J5A) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 27:58 · 2021-03-23 | Syslog. | M10·4 | Temario oficial CCNA v2.0, tema 5.6. |
| R47 | [Intro to Network Automation \| CCNA 200-301 Day 59 (part 1)](https://www.youtube.com/watch?v=4tsBgMCPVuc) | Jeremy's IT Lab · Terceros (curso gratuito de CCNA de referencia) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 33:26 · 2021-12-07 | Introducción a la automatización de redes. | M10·5 | Temario oficial CCNA v2.0, temas 5.3 y 5.5. |

**Videos de IA: Claude y productividad**

| Código | Video (título exacto y enlace) | Canal · tipo | Idioma y acceso en español | Duración · publicado | Qué enseña | Clases | Alternativa escrita |
|---|---|---|---|---|---|---|---|
| C01 | [¿Qué son los Grandes Modelos de Lenguaje? 🤖 Explicación Sencilla de la IA Generativa](https://www.youtube.com/watch?v=0K5Knnq2ZRk) | Derivando · Terceros (divulgación científica) | Español. Subtítulos: en español, automáticos | 9:12 · 2025-01-22 | Qué son los grandes modelos de lenguaje, cómo se entrenan y cómo funcionan, explicado de forma sencilla. | M1·1 | Elements of AI (Universidad de Helsinki), curso gratuito en español: https://www.elementsofai.com/es/ |
| C02 | [Lesson 2B: The 4D Framework \| AI Fluency: Framework & Foundations Course](https://www.youtube.com/watch?v=W4Ua6XFfX9w) | Anthropic · Oficial (Anthropic) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 5:20 · 2025-06-12 | Las cuatro competencias de la fluidez en IA: Delegación, Descripción, Discernimiento y Diligencia (marco 4D). | M1·4 | Curso gratuito «AI Fluency: Framework and foundations» en Claude Academy: https://academy.claude.com/ |
| C03 | [Lesson 4: A closer look at Delegation \| AI Fluency: Framework & Foundations Course](https://www.youtube.com/watch?v=EljzyfdYkrc) | Anthropic · Oficial (Anthropic) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 5:49 · 2025-06-12 | Delegación: fijar objetivos y decidir si, cuándo y cómo usar la IA. | M1·4 | Curso «AI Fluency: Framework and foundations» (Claude Academy). |
| C04 | [[S2/L01] Ingeniería de prompts: Para la vida real - ¿Qué es un prompt?](https://www.youtube.com/watch?v=jrucUmU_l8s) | DevTalles · Terceros (educador con trayectoria) | Español. Subtítulos: en español, automáticos | 4:22 · 2026-04-24 | Qué es un prompt (lección de un curso práctico de ingeniería de prompts). | M2·1 | Tutorial de Anthropic, capítulo 1 (Basic Prompt Structure). |
| C05 | [[S2/L02] Ingeniería de prompts: Para la vida real - ¿Por qué fallan los prompts?](https://www.youtube.com/watch?v=A-uJeV7pSEY) | DevTalles · Terceros (educador con trayectoria) | Español. Subtítulos: en español, automáticos | 6:49 · 2026-04-24 | Por qué fallan los prompts. | M2·2 | Guía oficial «Prompting best practices»: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices |
| C06 | [[S2/L04] Ingeniería de prompts: Para la vida real - Fórmula base: Tarea, contexto, audiencia, format](https://www.youtube.com/watch?v=1bXdjvRBvWk) | DevTalles · Terceros (educador con trayectoria) | Español. Subtítulos: en español, automáticos | 6:19 · 2026-05-01 | Fórmula base de un prompt: tarea, contexto, audiencia y formato. | M2·3 | Guía oficial «Prompting best practices» («Be clear and direct», «Add context»). |
| C07 | [[S2/L03] Ingeniería de prompts: Para la vida real - Calidad de la respuesta](https://www.youtube.com/watch?v=UeuZM5Ulf6A) | DevTalles · Terceros (educador con trayectoria) | Español. Subtítulos: en español, automáticos | 4:40 · 2026-05-01 | Cómo juzgar la calidad de una respuesta. | M2·4 | Documentación oficial «Define success criteria and build evaluations»: https://platform.claude.com/docs/en/test-and-evaluate/develop-tests |
| C08 | [Prompting 101 \| Code w/ Claude](https://www.youtube.com/watch?v=ysPbXH0LpIE) | Anthropic · Oficial (Anthropic) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 24:52 · 2025-07-31 | Taller oficial «Prompting 101» del equipo de IA aplicada de Anthropic (Code w/ Claude, 2025): construir un prompt desde cero. | M3·1, M5·1 | Guía oficial «Prompting best practices». |
| C09 | [[S2/L05] Ingeniería de prompts: Para la vida real - Formato de salida](https://www.youtube.com/watch?v=JgM54aFX924) | DevTalles · Terceros (educador con trayectoria) | Español. Subtítulos: en español, automáticos | 3:56 · 2026-05-08 | Cómo pedir un formato de salida. | M3·4 | Tutorial de Anthropic, capítulo 5 (Formatting Output). |
| C10 | [AI prompt engineering: A deep dive](https://www.youtube.com/watch?v=T9aRN5JkmL8) | Anthropic · Oficial (Anthropic) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 1:16:42 · 2024-09-05 | Mesa redonda de expertos de Anthropic. Los capítulos oficiales incluyen: qué es la ingeniería de prompts, cómo refinar prompts (12:17), razonamiento del modelo (37:12) y consejos para mejorar. | M6·2 | Guía oficial «Prompting best practices». |
| C11 | [Lesson 8: A closer look at Discernment \| AI Fluency: Framework & Foundations Course](https://www.youtube.com/watch?v=Y0KidGr9Z2Y) | Anthropic · Oficial (Anthropic) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 5:23 · 2025-06-12 | Discernimiento: evaluar con precisión si las respuestas de la IA son útiles y correctas. | M6·3 | Tutorial de Anthropic, capítulo 8 (Avoiding Hallucinations): https://github.com/anthropics/prompt-eng-interactive-tutorial |
| C12 | [Evaluate prompts in the Anthropic Console](https://www.youtube.com/watch?v=KIGBsQqZcNA) | Anthropic · Oficial (Anthropic) | Inglés. Subtítulos en español: (automáticos); tiene doblaje al español | 3:20 · 2024-07-09 | Generar, probar y evaluar prompts con casos de prueba automáticos en la Console de Anthropic. Solo para ver: la Console usa la API; la práctica se hace en el chat con una hoja de evaluación. | M6·5 | Documentación oficial «Define success criteria and build evaluations». |
| C13 | [Claude Code: Curso completo desde cero en 3 horas (2026)](https://www.youtube.com/watch?v=TCq7eZ9Lhc8) | MoureDev by Brais Moure · Terceros (educador con trayectoria) | Español. Subtítulos: en español, automáticos | 3:07:54 · 2026-08-13 | Curso de Claude Code desde cero (2026), con capítulos oficiales: instalación, modos, modo plan, CLAUDE.md, reglas, skills, MCP, plugins, subagentes, hooks y comandos programados. Cada clase enlaza su capítulo. | M9·2, M9·3, M9·4, M9·5, M9·6, M9·7, M10·1, M10·2, M10·5 | Documentación oficial de Claude Code: https://code.claude.com/docs/en/overview |
| C14 | [Building and prototyping with Claude Code](https://www.youtube.com/watch?v=DAQJvGjlgVM) | Anthropic · Oficial (Anthropic) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 14:03 · 2025-08-21 | Cómo prototipa el equipo de Claude Code y buenas prácticas de uso (conversación oficial). | M9·2 | Documentación de Claude Code, Overview: https://code.claude.com/docs/en/overview |
| C15 | [Claude Code best practices \| Code w/ Claude](https://www.youtube.com/watch?v=gv0WHhKelSE) | Anthropic · Oficial (Anthropic) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 25:53 · 2025-07-31 | Charla oficial «Claude Code best practices» (Code w/ Claude, 2025). | M9·4 | Documentación oficial «Best practices for Claude Code»: https://code.claude.com/docs/en/best-practices |
| C16 | [The Model Context Protocol: Connecting AI to Everything - Adam Jones, Anthropic](https://www.youtube.com/watch?v=T4-BdZQUCSE) | PyTorch Foundation · Conferencia (ponente de Anthropic; canal de terceros) | Inglés. Subtítulos en español: solo traducción automática | 32:53 · 2025-11-03 | Qué es MCP, por qué existe y cómo funciona; incluye crear un primer servidor MCP con Claude Code (charla de un ingeniero de Anthropic). | M9·7 | Documentación de Claude Code, MCP: https://code.claude.com/docs/en/mcp |
| C17 | [Tips for building AI agents](https://www.youtube.com/watch?v=LP5OCa20Zpg) | Anthropic · Oficial (Anthropic) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 18:19 · 2025-02-13 | Qué es un agente frente a un flujo de trabajo, anatomía del prompt de un agente y consejos para empezar (capítulos oficiales). | M10·1 | Artículo oficial «Building effective agents»: https://www.anthropic.com/engineering/building-effective-agents |
| C18 | [How We Build Effective Agents: Barry Zhang, Anthropic](https://www.youtube.com/watch?v=D7_ipDqhtwk) | AI Engineer · Conferencia (ponente de Anthropic; canal de terceros) | Inglés. Subtítulos en español: solo traducción automática; tiene doblaje al español | 15:09 · 2025-04-04 | Charla de un ingeniero de Anthropic (AI Engineer Summit 2025) sobre cómo construir agentes eficaces. | M10·3 | Artículo oficial «Building effective agents». |

## 6. Qué se comparte entre cursos y cómo se evita duplicar

| Tema | Dónde aparece | Decisión |
|---|---|---|
| IP, MAC y puertos | Ciberseguridad 05 (ya existe) · Redes M1–M3 | Ciber 05 no cambia. Redes lo explica a fondo; Ciberseguridad lo usa para detectar ataques y puede enlazar a Redes como ampliación |
| DNS | Ciber M3·2 · Redes M3·4 | Redes: cómo funciona y cómo se diagnostica. Ciberseguridad: cómo se abusa de él y cómo se detecta |
| DHCP, ARP, NAT, VPN, segmentación y firewalls | Ciber M3·3 · Redes M3, M8, M9 y M10 | **Ajuste propuesto (requiere tu aprobación):** Ciber M3·3 pasaría a llamarse «Arquitectura de red segura: segmentación, firewalls, DMZ y VPN desde la defensa». Haría solo un repaso breve de DHCP, ARP y NAT, con enlace a Redes |
| Capturas de tráfico (Wireshark) | Ciber M3·4 · Redes M11·2 | Wireshark a fondo solo en Ciberseguridad. Redes interpreta salidas de captura y enlaza |
| Ataques de red | Ciber M3·5 · Redes M10 | Ciberseguridad detecta y analiza. Redes configura las defensas en los equipos (ACL y seguridad de capa 2) |
| HTTP, APIs REST y JSON | JS M4·2 · Python M7·1 · Ciber M3·2 · Redes M10·5 | Redes los trata solo para la gestión de equipos de red y enlaza con JavaScript y Python |
| Automatización | Python M7 · Redes M10·5 · Claude M8·4 y M10·5 | Python enseña a programar la automatización. Redes muestra controladores y Ansible. Claude enseña a pedirla y a automatizar con Claude Code |
| Git y GitHub | JS M5·2 · Python M5·1 · Claude M9 | Claude no enseña Git: muestra cómo trabajar con Git junto a Claude Code y enlaza a la clase compartida |
| Programación (HTML, CSS, JavaScript y Python) | JavaScript · Python · Claude M8·1 a M8·3 y M9 | Claude no enseña a programar: enseña a pedir, revisar y corregir código, con ejercicios tomados de esos cursos. Recomienda JS M1 o Python M1 |
| Instrucciones (prompts) | Claude M2, M3, M5, M6 y M8 · Redes M10·6 | La técnica está en Claude. Redes la aplica a la operación de redes (tema 5.2 del CCNA v2.0) y enlaza |
| Verificación de fuentes | Norma de la academia (`PROMPT-MAESTRO.md`) · Claude M6·4 | Claude M6·4 enseña a aplicar con Claude la misma norma de fuentes de la academia |
| Datos sensibles | Ciber M7·3 · Claude M1·4 | La misma regla en los dos: nunca subir datos sensibles. Claude profundiza en la configuración de la cuenta |
| Inglés técnico | Inglés M5 · examen CCNA · documentación y videos oficiales de Claude | Se recomienda Inglés M5 a quien quiera certificarse. Propuesta: permitir el «inglés técnico del día» también en Redes |

## 7. La academia con 6 cursos: totales

| Curso | Estado | Módulos | Clases | Horas | Clases listas |
|---|---|---|---|---|---|
| 🛡️ Ciberseguridad | Aprobado | 9 | 41 | 82 | 5 |
| 💬 Inglés básico | Aprobado | 5 | 40 | 40 | 4 |
| ⚡ JavaScript | Aprobado | 7 | 37 | 74 | 4 |
| 🐍 Python | Aprobado | 9 | 38 | 76 (+6 h de electiva) | 4 |
| 🌐 Redes y Telecomunicaciones | **Nuevo (propuesto)** | 11 | 51 | 102 | 0 |
| 🤖 IA: Claude y productividad | **Nuevo (propuesto)** | 11 | 55 | 110 | 0 |
| **Academia (6 cursos)** | | **52** | **262** | **484** | **17** |

- Las horas son de clase; la práctica autónoma de cada clase se suma aparte, a tu ritmo.
- La electiva de Python sigue siendo opcional y no se cuenta en el total.
- **Efecto de esta versión:** el curso 6 sube de 36 a 55 clases y de 72 h a
  110 h por la formación completa de ingeniería de instrucciones. La academia pasa de
  243 clases y 446 h (primera versión de esta propuesta) a 262 clases y
  484 h. Los otros cinco cursos no cambian.

## 8. Cómo quedaría el catálogo

- 🛡️ **Ciberseguridad** · 2 h por clase · 41 clases · 82 h
  M1 Fundamentos de ciberseguridad (3) · M2 Sistemas operativos para analistas (5) · M3 Redes y comunicaciones (5) · M4 Criptografía, identidad y acceso (3) · M5 Amenazas, vulnerabilidades y ataques (5) · M6 Registros y monitoreo de seguridad (6) · M7 Análisis de eventos e inteligencia de amenazas (4) · M8 Respuesta a incidentes (5) · M9 Operaciones SOC y carrera (5)
- 💬 **Inglés básico** · 1 h por clase · 40 clases · 40 h
  M1 Primeros pasos (8) · M2 Mi vida diaria (9) · M3 Contar y planear (9) · M4 Comunicar con confianza (8) · M5 Inglés para tecnología (6)
- ⚡ **JavaScript** · 2 h por clase · 37 clases · 74 h
  M1 Fundamentos de programación (9) · M2 HTML y CSS para programadores (4) · M3 JavaScript en el navegador (6) · M4 Asincronía y APIs (4) · M5 Herramientas del desarrollador (4) · M6 Node.js y backend (7) · M7 Proyecto final (3)
- 🐍 **Python** · 2 h por clase · 38 clases · 76 h
  M1 Fundamentos (7) · M2 Estructuras de datos (4) · M3 Archivos, módulos y entorno (4) · M4 Programación orientada a objetos (4) · M5 Calidad de software (4) · M6 Datos y bases de datos (3) · M7 Internet y automatización (4) · M8 Desarrollo de aplicaciones (5) · M9 Proyecto final (3) · Electiva Python aplicado a la ciberseguridad (3)
- 🌐 **Redes y Telecomunicaciones** *(nuevo)* · 2 h por clase · 51 clases · 102 h
  M1 Fundamentos de redes (5) · M2 Direccionamiento IPv4 y subnetting (5) · M3 Transporte y servicios básicos (4) · M4 Configuración de dispositivos Cisco (4) · M5 Switching y VLAN (5) · M6 Enrutamiento IPv4 (5) · M7 IPv6 (4) · M8 NAT y redes inalámbricas (3) · M9 Telecomunicaciones, WAN e Internet (4) · M10 Seguridad, operación y automatización (6) · M11 Diseño, diagnóstico y proyecto empresarial (6)
- 🤖 **IA: Claude y productividad** *(nuevo)* · 2 h por clase · 55 clases · 110 h
  M1 Fundamentos de la IA generativa y de Claude (4) · M2 Prompting · Nivel 1: Fundamentos (4) · M3 Prompting · Nivel 2: Técnicas fundamentales (5) · M4 Espacio de trabajo con Claude: proyectos, artefactos, memoria y conectores (4) · M5 Prompting · Nivel 3: Prompting estructurado (6) · M6 Prompting · Nivel 4: Avanzado (6) · M7 Skills: procedimientos reutilizables (3) · M8 Prompting · Nivel 5: Aplicaciones profesionales (7) · M9 Prompting · Nivel 6: Context engineering y Claude Code (7) · M10 Agentes, subagentes y automatización (5) · M11 Proyecto integrador: biblioteca profesional de prompts (4)

- **Borrador:** `propuestas/cursos-nuevos.borrador.js` contiene los dos cursos completos. Incluye:
  - módulos y clases, con ejercicios, evaluación, proyecto y fuentes;
  - el tema oficial del CCNA que cubre cada clase de Redes;
  - el plan de Claude y el lugar de práctica de cada clase del curso 6;
  - los videos de cada clase.

  Se agrega al catálogo real **sin modificarlo**.
- **Vista previa:** abre con doble clic `propuestas/vista-previa-6-cursos.html` (o, desde el
  servidor local, `http://127.0.0.1:8765/propuestas/vista-previa-6-cursos.html`).
  - Muestra tu menú real con los 6 cursos. El menú de la vista previa
    (`propuestas/vista-previa-menu.html`) se genera desde `inicio.html` con el mismo comando que
    este documento.
  - Con `?curso=redes` o `?curso=ia` al final de la dirección se abre en ese curso.
  - Funciona aislada: usa un almacenamiento temporal en memoria, no sincroniza con GitHub, tiene
    los enlaces desactivados y no modifica ningún archivo.

## 9. Cómo se integraría sin romper nada

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
5. **Videos en las clases:** cada clase nueva tendrá una sección de videos complementarios con su
   ficha, generada desde los datos verificados.
   - Agregar esta regla a CLAUDE.md y al prompt maestro requiere tu autorización.
   - Mostrar los videos en las páginas de las clases podría requerir un pequeño cambio en el motor;
     se te consultará antes.
6. **Reglas:** agregar los dos cursos a la tabla de CLAUDE.md y a las duraciones, y preguntarte el
   horario (`horario.md`).
7. **Menú:** actualizar la versión `?v=` de `inicio.html`.
8. **Pruebas:**
   - `revisar-catalogo.js` y `generar-rutas.js --comprobar`.
   - `verificar-videos.py` antes de publicar.
   - Ampliar `revisar-coherencia.js` para que también lea esta propuesta.
   - `pruebas-clases.html` a medida que existan clases nuevas.

## 10. Fuentes consultadas y estado de verificación

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
| Anthropic · Tutorial interactivo de prompt engineering (GitHub) | https://github.com/anthropics/prompt-eng-interactive-tutorial | Última actualización: 28/08/2026 | 9 capítulos (principiante, intermedio y avanzado) y apéndice (Chaining Prompts, Tool Use, Search & Retrieval); escrito para Claude 3 Haiku; los cuadernos requieren una clave de API («requires an API key»); versión en Google Sheets | Verificada (README y cuaderno de inicio) |
| Anthropic · Cursos (GitHub) | https://github.com/anthropics/courses | Archivado el 15/09/2026 | Cinco cursos (API fundamentals, tutorial, Real world prompting, Prompt evaluations, Tool use); usan Claude 3 Haiku «to keep API costs down» | Verificada |
| Claude Platform · Prompt engineering overview / Prompting best practices | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview · https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices | — | Técnicas actuales (claridad, contexto, ejemplos, XML, rol, contextos largos, razonamiento); el prellenado de respuestas ya no es compatible con los modelos actuales | Verificada (la parte final de la página, por resumen) |
| Claude Platform · Define success criteria and build evaluations | https://platform.claude.com/docs/en/test-and-evaluate/develop-tests | — | Criterios específicos, medibles, alcanzables y relevantes; principios para diseñar evaluaciones | Verificada |
| Anthropic · Building effective agents | https://www.anthropic.com/engineering/building-effective-agents | 19/12/2024 | Flujos de trabajo frente a agentes; patrones (encadenamiento, enrutamiento, paralelización, orquestador-trabajadores, evaluador-optimizador) | Verificada |
| Anthropic · Effective context engineering for AI agents | https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents | 29/09/2025 | El context engineering como evolución del prompt engineering | Verificada |
| Claude Code · Best practices for Claude Code | https://code.claude.com/docs/en/best-practices | — | CLAUDE.md corto, verificación, hooks, permisos y subagentes | Verificada (una parte, por resumen) |
| Claude Academy | https://academy.claude.com/ | — | Cursos gratuitos de Anthropic: «AI Fluency» (14 lecciones, 4 h), «AI capabilities and limitations» (13 lecciones, 3,5 h), entre otros | Verificada (portada; no se vio un curso específico de prompting) |
| Anthropic Academy · AI Fluency: Framework & Foundations | https://anthropic.skilljar.com/ai-fluency-framework-foundations | — | Marco 4D (Delegation, Description, Discernment, Diligence); desarrollado con profesores de University College Cork y Ringling College; gratis | Verificada |
| Elements of AI | https://www.elementsofai.com/es/ | — | Curso gratuito de la Universidad de Helsinki y MinnaLearn, con versión en español | Verificada (portada en español) |
| DAIR.AI · Prompt Engineering Guide | https://www.promptingguide.ai/es | — | Guía de terceros con traducción parcial al español | Verificada (material de terceros, opcional) |
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
| Claude Platform · Models overview | https://platform.claude.com/docs/en/about-claude/models/overview | — | Modelos actuales y anteriores (cambian con el tiempo) | Verificada |
| Anthropic · Updates to Consumer Terms and Privacy Policy | https://www.anthropic.com/news/updates-to-our-consumer-terms | 28/08/2025 | Elegir si los chats entrenan modelos (Free, Pro y Max, incluido Claude Code); retención de 5 años si se permite o 30 días si no | Verificada; la retención actual se comprobará al crear la clase |
| Centro de privacidad · How do I change my model improvement privacy settings? / Is my data used for model training? | https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings · https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training | 03/08/2026 · 16/03/2026 | Cómo cambiar el ajuste; los chats de incógnito no se usan | Verificada |
| Anthropic · Consumer Terms of Service | https://www.anthropic.com/legal/consumer-terms | Vigentes desde 08/10/2025 | Edad mínima de 18 años (o la de tu país, si es mayor) | Verificada |
| Anthropic · Usage Policy | https://www.anthropic.com/legal/aup | Entra en vigor el 12/11/2026 | Uso responsable | Verificada |

**Videos:** sus fuentes y su estado están en la sección 5 (verificados con
`herramientas/verificar-videos.py` el 11/11/2026; los datos completos están en
`propuestas/videos-verificados.json`).

**No accesibles o no usadas como respaldo:**
- El catálogo de cursos de Networking Academy (se genera con JavaScript y no cargó).
- La página del programa GET de IEEE (error 418).
- La pestaña de la API en la página de precios.
- Las duraciones de los cursos de Anthropic Academy (no están publicadas).
- Las transcripciones de los videos (YouTube no las entrega sin un navegador real): lo que enseña
  cada video se revisó con su título, descripción y capítulos oficiales.

## 11. Decisiones que necesito que apruebes

1. **Los dos planes de estudio** (secciones 3 y 4), incluida la formación de ingeniería de
   instrucciones en seis niveles dentro del curso 6, o los cambios que quieras.
2. **La duración:** 2 h por clase en los dos cursos. El curso 6 queda en 55 clases y
   110 h.
3. **El estándar de videos** (sección 5) para los seis cursos, y su aplicación progresiva a los
   cuatro existentes al actualizar cada clase.
4. **Agregar ese estándar a las reglas** (CLAUDE.md y prompt maestro).
5. **La referencia del curso de Redes:** temario CCNA v2.0, vigente desde el 03/02/2027.
6. **El ajuste de Ciberseguridad M3·3** para no repetir DHCP, ARP y NAT (sección 6). Esa clase aún
   no existe; ninguna de las 17 clases cambia.
7. **Tu plan de Claude:** dime cuál usas (Free, Pro, Max…) para adaptar las prácticas. La propuesta
   mantiene una ruta gratuita.
8. **La voz de cada curso nuevo:** Redes, docente (sin cambios); Claude, docente o «Jarvis» (esta
   última requiere tocar una línea del motor).
9. **El «inglés técnico del día» en Redes**, como excepción a la regla de no mezclar cursos.
10. **Nombres, íconos y colores** de los cursos nuevos (🌐 Redes y Telecomunicaciones · 🤖 IA:
    Claude y productividad).
11. **El horario** para los dos cursos nuevos.
12. **El orden de trabajo:** los cursos nuevos se crearían después de que apruebes Ciberseguridad 01
    como modelo, igual que el resto.

> Hasta tu aprobación explícita no se implementa nada de esta propuesta.
