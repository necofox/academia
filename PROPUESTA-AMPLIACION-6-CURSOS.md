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

### Módulo 1 · Fundamentos de redes (5 clases · 10 h)

- **Objetivo:** Entender qué es una red, cómo se organiza en capas y cómo viajan los datos por cables, fibra y aire.
- **Competencias:** Identificar componentes y tipos de red; explicar los modelos OSI y TCP/IP y el encapsulamiento; comparar cobre, fibra e inalámbrico; describir cómo funciona un switch Ethernet; armar una red simple en Packet Tracer.
- **Al terminar serás capaz de:** Explicar cómo viaja un mensaje de un equipo a otro y montar una red pequeña simulada.
- **Conocimientos previos:** Ninguno. Basta con saber usar el computador.
- **Ejercicios y prácticas:** Identificar los equipos de tu propia red; ordenar capas y encapsulamiento; primera red en Packet Tracer; ipconfig, ping y tracert en tu PC.
- **Evaluación del módulo:** Simular la red de una pequeña oficina (SOHO) en Packet Tracer y explicar el camino de un ping.
- **Fuentes previstas** (se verifican al crear cada clase): ITU-T X.200 (modelo OSI), RFC 1122 (capas TCP/IP), ITU-T G.652 (fibra monomodo), temario CCNA, guía de instalación de Packet Tracer.

| Clase | Tema | Temario oficial que cubre |
|---|---|---|
| M1·1 | ¿Qué es una red? Componentes, tipos (LAN, WAN, WLAN) y topologías | CCNA v1.1 1.1–1.2 |
| M1·2 | Modelos OSI y TCP/IP: capas, encapsulamiento y protocolos | — |
| M1·3 | Medios físicos: cobre, fibra óptica e inalámbrico; cables y fallas de interfaz | CCNA v2.0 1.1 |
| M1·4 | Ethernet y switching: tramas, direcciones MAC y tabla MAC | CCNA v1.1 1.13 |
| M1·5 | Cisco Packet Tracer: tu primera red y los comandos de diagnóstico del PC | CCNA v2.0 1.6 |

### Módulo 2 · Direccionamiento IPv4 y subnetting (5 clases · 10 h)

- **Objetivo:** Asignar direcciones IPv4 y dividir redes en subredes sin calculadora.
- **Competencias:** Interpretar dirección, máscara y prefijo; distinguir direcciones públicas, privadas y especiales; calcular subredes y VLSM; diseñar y verificar un plan de direccionamiento.
- **Al terminar serás capaz de:** Diseñar el plan IPv4 de una empresa pequeña y detectar errores de configuración.
- **Conocimientos previos:** Módulo 1.
- **Ejercicios y prácticas:** Conversión binaria; retos de subnetting con autocorrección; configurar y corregir direcciones en Packet Tracer.
- **Evaluación del módulo:** Prueba de subnetting cronometrada y diagnóstico de cinco equipos mal configurados.
- **Proyecto:** Plan de direccionamiento IPv4 para una empresa ficticia de cuatro áreas.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 791 (IPv4), RFC 4632 (CIDR), RFC 1918 (direcciones privadas), RFC 5737 (direcciones de documentación), temario CCNA v2.0 (1.3).

| Clase | Tema | Temario oficial que cubre |
|---|---|---|
| M2·1 | IPv4: dirección, máscara, prefijo y números binarios | — |
| M2·2 | Direcciones públicas, privadas, especiales y de documentación | — |
| M2·3 | Subnetting I: dividir una red en subredes iguales | — |
| M2·4 | Subnetting II: VLSM y plan de direccionamiento | — |
| M2·5 | Taller: diagnosticar configuraciones IPv4 (evaluación del módulo) | CCNA v2.0 1.3 |

### Módulo 3 · Transporte y servicios básicos (4 clases · 8 h)

- **Objetivo:** Entender cómo se comunican las aplicaciones y cómo un equipo obtiene su dirección y resuelve nombres.
- **Competencias:** Comparar TCP y UDP; explicar ARP e ICMP; configurar y diagnosticar DHCP (servidor y agente relay); interpretar registros DNS.
- **Al terminar serás capaz de:** Explicar y diagnosticar los servicios que hacen que un equipo «tenga Internet».
- **Conocimientos previos:** Módulo 2.
- **Ejercicios y prácticas:** Ver conexiones con netstat y Test-NetConnection; seguir ARP, DHCP y DNS en el modo simulación de Packet Tracer; nslookup sobre dominios de ejemplo.
- **Evaluación del módulo:** Resolver tres casos: un equipo sin IP, otro que no resuelve nombres y otro que no alcanza un puerto.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 9293 (TCP), RFC 768 (UDP), RFC 826 (ARP), RFC 792 (ICMP), RFC 2131 (DHCP), RFC 1034 y RFC 1035 (DNS), temario CCNA v2.0 (1.7, 4.4).

| Clase | Tema | Temario oficial que cubre |
|---|---|---|
| M3·1 | TCP y UDP: puertos, conexiones y confiabilidad | — |
| M3·2 | ARP e ICMP: cómo se encuentran y se prueban los equipos | — |
| M3·3 | DHCP: servidor, cliente y agente de retransmisión (relay) | CCNA v2.0 1.7 |
| M3·4 | DNS: resolución de nombres, registros y diagnóstico | CCNA v2.0 4.4 |

### Módulo 4 · Configuración de dispositivos Cisco (4 clases · 8 h)

- **Objetivo:** Configurar, asegurar el acceso y respaldar switches y routers con Cisco IOS.
- **Competencias:** Usar la línea de comandos de Cisco IOS; hacer la configuración inicial; habilitar acceso remoto seguro con SSH; guardar, respaldar y documentar configuraciones con CDP y LLDP.
- **Al terminar serás capaz de:** Dejar operativos y documentados un switch y un router nuevos.
- **Conocimientos previos:** Módulo 2.
- **Ejercicios y prácticas:** Terminal simulada de Cisco IOS dentro de la clase y laboratorios guiados en Packet Tracer.
- **Evaluación del módulo:** Configurar desde cero una red pequeña siguiendo una hoja de requisitos.
- **Fuentes previstas** (se verifican al crear cada clase): Temario CCNA v2.0 (2.3, 4.1, 4.2), Cisco Packet Tracer.

| Clase | Tema | Temario oficial que cubre |
|---|---|---|
| M4·1 | Cisco IOS: modos, ayuda de la línea de comandos y configuración inicial | — |
| M4·2 | Acceso seguro: contraseñas, usuarios locales y SSH | CCNA v2.0 4.1 |
| M4·3 | Archivos de configuración, respaldos y documentación con CDP y LLDP | CCNA v2.0 2.3, 4.2 |
| M4·4 | Taller: configurar y documentar una red pequeña (evaluación del módulo) | — |

### Módulo 5 · Switching y VLAN (5 clases · 10 h)

- **Objetivo:** Segmentar una red con VLAN y mantenerla estable y redundante en la capa 2.
- **Competencias:** Crear VLAN y puertos de acceso; configurar troncales 802.1Q; enrutar entre VLAN; interpretar Rapid PVST+; agrupar enlaces con EtherChannel (LACP).
- **Al terminar serás capaz de:** Implementar la red de capa 2 de un edificio con varias áreas.
- **Conocimientos previos:** Módulo 4.
- **Ejercicios y prácticas:** Laboratorios de Packet Tracer con fallas provocadas para corregir.
- **Evaluación del módulo:** Corregir una red con VLAN mal asignadas, troncales caídos y un bucle.
- **Proyecto:** Red de un edificio con una VLAN por área.
- **Fuentes previstas** (se verifican al crear cada clase): IEEE 802.1Q (VLAN), temario CCNA v2.0 (2.1, 2.2, 2.5).

| Clase | Tema | Temario oficial que cubre |
|---|---|---|
| M5·1 | VLAN: segmentar la red y configurar puertos de acceso | CCNA v2.0 2.2 |
| M5·2 | Troncales 802.1Q y VLAN nativa | CCNA v2.0 2.1 |
| M5·3 | Enrutamiento entre VLAN: router-on-a-stick y SVI | CCNA v2.0 2.1 |
| M5·4 | Spanning Tree (Rapid PVST+): evitar bucles | CCNA v2.0 2.5 |
| M5·5 | EtherChannel con LACP (evaluación del módulo) | CCNA v2.0 2.1 |

### Módulo 6 · Enrutamiento IPv4 (5 clases · 10 h)

- **Objetivo:** Conectar varias redes y entender cómo decide un router el camino.
- **Competencias:** Interpretar la tabla de enrutamiento; configurar rutas estáticas (predeterminada, de red, de host y flotante); configurar y verificar OSPFv2 de área única; interpretar la redundancia de puerta de enlace (HSRP y VRRP).
- **Al terminar serás capaz de:** Enrutar la red de una empresa con varias sedes y diagnosticar fallas de enrutamiento.
- **Conocimientos previos:** Módulo 5.
- **Ejercicios y prácticas:** Seguir paquetes en el modo simulación; tablas de enrutamiento para interpretar; fallas de OSPF para resolver.
- **Evaluación del módulo:** Diagnosticar una red con rutas faltantes y vecinos OSPF que no se forman.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 2328 (OSPFv2), temario CCNA v2.0 (3.1–3.4).

| Clase | Tema | Temario oficial que cubre |
|---|---|---|
| M6·1 | Cómo decide un router: tabla de enrutamiento, prefijo más largo y métricas | CCNA v2.0 3.1 |
| M6·2 | Rutas estáticas: predeterminada, de red, de host y flotante | CCNA v2.0 3.2 |
| M6·3 | OSPFv2 I: vecinos, router ID y redes punto a punto | CCNA v2.0 3.3 |
| M6·4 | OSPFv2 II: DR/BDR, verificación y fallas comunes | CCNA v2.0 3.3 |
| M6·5 | Redundancia de puerta de enlace: HSRP y VRRP (evaluación del módulo) | CCNA v2.0 3.4 |

### Módulo 7 · IPv6 (4 clases · 8 h)

- **Objetivo:** Direccionar y enrutar redes IPv6 y hacerlas convivir con IPv4.
- **Competencias:** Escribir y abreviar direcciones IPv6; reconocer sus tipos; explicar SLAAC, DHCPv6 y NDP; configurar rutas estáticas IPv6 y OSPFv3; diagnosticar IPv6 en doble pila.
- **Al terminar serás capaz de:** Agregar IPv6 a una red existente sin interrumpir IPv4.
- **Conocimientos previos:** Módulo 6.
- **Ejercicios y prácticas:** Abreviar y expandir direcciones; planificar prefijos con el bloque de documentación 2001:db8::/32; configurar doble pila en Packet Tracer.
- **Evaluación del módulo:** Migrar a doble pila la red del módulo anterior.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 8200 (IPv6), RFC 4291 (direccionamiento), RFC 3849 (prefijo de documentación), RFC 4861 (NDP), RFC 4862 (SLAAC), RFC 9915 (DHCPv6; reemplaza al RFC 8415), RFC 5340 (OSPFv3), temario CCNA v2.0 (1.4, 3.2, 3.3).

| Clase | Tema | Temario oficial que cubre |
|---|---|---|
| M7·1 | IPv6: formato, abreviación y tipos de direcciones | CCNA v2.0 1.4 |
| M7·2 | Asignación en IPv6: SLAAC, DHCPv6, EUI-64 y NDP | CCNA v2.0 1.4 |
| M7·3 | Rutas estáticas IPv6 y OSPFv3 | CCNA v2.0 3.2, 3.3 |
| M7·4 | Doble pila y diagnóstico IPv6 (evaluación del módulo) | — |

### Módulo 8 · NAT y redes inalámbricas (3 clases · 6 h)

- **Objetivo:** Dar salida a Internet con NAT y planificar una red Wi-Fi segura.
- **Competencias:** Configurar NAT estático, dinámico y PAT; explicar bandas, canales, radiofrecuencia e interferencias; comparar WPA2 y WPA3; describir arquitecturas con puntos de acceso autónomos y con controlador.
- **Al terminar serás capaz de:** Conectar una oficina a Internet y planificar su Wi-Fi.
- **Conocimientos previos:** Módulo 6.
- **Ejercicios y prácticas:** Configurar NAT/PAT en Packet Tracer; plan de canales para un piso de oficina.
- **Evaluación del módulo:** Configurar la salida a Internet de una oficina y justificar su plan de canales Wi-Fi.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 3022 (NAT), IEEE 802.11 (grupo de trabajo de WLAN), temario CCNA v2.0 (1.5, 2.2, 4.3).

| Clase | Tema | Temario oficial que cubre |
|---|---|---|
| M8·1 | NAT y PAT: salir a Internet con direcciones privadas | CCNA v2.0 4.3 |
| M8·2 | Wi-Fi: bandas, canales, interferencias y seguridad (WPA2 y WPA3) | CCNA v2.0 1.5 |
| M8·3 | Arquitecturas inalámbricas: puntos de acceso autónomos y con controlador (evaluación del módulo) | CCNA v2.0 2.2 |

### Módulo 9 · Telecomunicaciones, WAN e Internet (4 clases · 8 h)

- **Objetivo:** Entender las redes de los proveedores: cómo llega Internet, cómo funcionan las redes móviles y cómo se unen sedes lejanas.
- **Competencias:** Explicar ancho de banda, latencia y medios de transmisión; comparar tecnologías de acceso (cobre, cable, fibra, móvil y satélite); describir las redes móviles 4G y 5G; explicar WAN, VPN IPsec y la interconexión de proveedores con BGP, a nivel conceptual.
- **Al terminar serás capaz de:** Elegir y justificar la conexión WAN e Internet de una empresa.
- **Conocimientos previos:** Módulo 3. Conviene haber hecho el Módulo 6.
- **Ejercicios y prácticas:** Medir latencia y pérdida con ping y tracert; comparar ofertas de conexión ficticias.
- **Evaluación del módulo:** Comparar tres ofertas de conexión para una empresa ficticia y recomendar una.
- **Fuentes previstas** (se verifican al crear cada clase): ITU-T G.652, ITU-R IMT-2020 (5G), 3GPP, ITU Facts and Figures 2025, RFC 4271 (BGP-4), temario CCNA v2.0 (4.5).

| Clase | Tema | Temario oficial que cubre |
|---|---|---|
| M9·1 | Señales y transmisión: ancho de banda, latencia, pérdida y ruido | — |
| M9·2 | Acceso a Internet: cobre, cable, fibra hasta el hogar, móvil y satélite | — |
| M9·3 | Redes móviles: de 4G a 5G (3GPP e IMT-2020) | — |
| M9·4 | WAN, VPN e Internet: proveedores, IPsec y BGP en concepto (evaluación del módulo) | CCNA v2.0 4.5 |

### Módulo 10 · Seguridad, operación y automatización (6 clases · 12 h)

- **Objetivo:** Proteger los equipos de red, vigilarlos y automatizar su administración.
- **Competencias:** Configurar ACL estándar y extendidas; aplicar seguridad de capa 2; usar AAA con TACACS+ y RADIUS; monitorear con SNMP, syslog y NTP; describir enfoques de gestión (controladores, nube, automatización e infraestructura como código) y usar Ansible; describir la IA agéntica y escribir prompts para la operación de redes.
- **Al terminar serás capaz de:** Proteger, monitorear y automatizar una red pequeña.
- **Conocimientos previos:** Módulos 4, 5 y 6.
- **Ejercicios y prácticas:** Auditoría de seguridad de una red simulada; lectura de mensajes syslog; ejemplos de JSON y de un playbook de Ansible.
- **Evaluación del módulo:** Auditar y corregir la seguridad de una red simulada.
- **Fuentes previstas** (se verifican al crear cada clase): Temario CCNA v2.0 (4.1, 4.6, 4.7, 5.1–5.6); temario CCNA v1.1 (NTP, APIs REST y JSON).

| Clase | Tema | Temario oficial que cubre |
|---|---|---|
| M10·1 | Listas de control de acceso (ACL) estándar y extendidas | CCNA v2.0 4.6 |
| M10·2 | Seguridad de capa 2: port security, DHCP snooping, DAI, storm control y RA guard | CCNA v2.0 4.7 |
| M10·3 | AAA, TACACS+ y RADIUS para administrar equipos | CCNA v2.0 4.1 |
| M10·4 | Monitoreo: SNMP, syslog y sincronización de hora con NTP | CCNA v2.0 5.4, 5.6 |
| M10·5 | Automatización: controladores, APIs REST, JSON y Ansible | CCNA v2.0 5.3, 5.5 |
| M10·6 | IA en la operación de redes: agentes y prompts (evaluación del módulo) | CCNA v2.0 5.1, 5.2 |

### Módulo 11 · Diseño, diagnóstico y proyecto empresarial (6 clases · 12 h)

- **Objetivo:** Diseñar, implementar, probar y defender la red completa de una empresa.
- **Competencias:** Aplicar diseños jerárquicos (dos y tres niveles, spine-leaf, SOHO y nube); explicar el papel de hipervisores, máquinas virtuales y contenedores; seguir una metodología de diagnóstico por capas; documentar una red; integrar todo lo aprendido en un proyecto.
- **Al terminar serás capaz de:** Entregar el diseño, la configuración y la documentación de la red de una empresa.
- **Conocimientos previos:** Módulos 7, 8, 9 y 10.
- **Ejercicios y prácticas:** Casos de diagnóstico encadenados; plantillas de documentación de red.
- **Evaluación del módulo:** Rúbrica del proyecto: requisitos cumplidos, pruebas, documentación y defensa.
- **Proyecto:** Proyecto final del curso (ver más arriba).
- **Fuentes previstas** (se verifican al crear cada clase): Temario CCNA v1.1 (1.2, arquitecturas); temario CCNA v2.0 (2.4, diagnóstico).

| Clase | Tema | Temario oficial que cubre |
|---|---|---|
| M11·1 | Diseño de redes: dos y tres niveles, spine-leaf, SOHO, nube y virtualización | CCNA v1.1 1.2; CCNA v2.0 1.2 |
| M11·2 | Metodología de diagnóstico: por capas, comandos show, ping extendido, traceroute y capturas | CCNA v2.0 2.4 |
| M11·3 | Documentación de red: diagramas, tablas de direcciones e inventario | — |
| M11·4 | Proyecto empresarial I: requisitos y diseño | — |
| M11·5 | Proyecto empresarial II: implementación en Packet Tracer | — |
| M11·6 | Proyecto empresarial III: pruebas, informe y defensa | — |

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

### Módulo 1 · Fundamentos de la IA generativa y de Claude (4 clases · 8 h)

- **Objetivo:** Entender qué es Claude, qué puede y qué no puede hacer, y configurarlo de forma segura.
- **Competencias:** Explicar qué es un modelo de lenguaje y sus límites (errores inventados o «alucinaciones», fecha de conocimiento); elegir plan, app y modelo; configurar la privacidad; aplicar las reglas de uso responsable.
- **Al terminar serás capaz de:** Usar Claude con criterio, sabiendo cuándo confiar y cuándo verificar.
- **Conocimientos previos:** Ninguno. Una cuenta de Claude; el plan gratuito sirve para este módulo.
- **Ejercicios y prácticas:** Comparar respuestas con y sin búsqueda web; revisar tu configuración de privacidad; detectar errores en respuestas de ejemplo.
- **Evaluación del módulo:** Examen de conceptos y análisis de tres respuestas: cuál es confiable y por qué.
- **Fuentes previstas** (se verifican al crear cada clase): Anthropic Academy (Claude 101, AI Fluency, AI Capabilities and Limitations), página de planes, centro de privacidad, política de uso.

| Clase | Tema | Plan de Claude necesario |
|---|---|---|
| M1·1 | ¿Qué es la IA generativa? Modelos de lenguaje, capacidades y límites | Gratis |
| M1·2 | Claude por dentro: planes, apps, modelos y límites de uso | Gratis |
| M1·3 | Primeros pasos: conversaciones, archivos, búsqueda web y estilos | Gratis |
| M1·4 | Privacidad y uso responsable: datos, verificación, derechos de autor y política de uso | Gratis |

### Módulo 2 · Técnicas de instrucciones (prompting) (5 clases · 10 h)

- **Objetivo:** Escribir instrucciones que den resultados precisos y repetibles.
- **Competencias:** Ser claro y directo; dar contexto; usar ejemplos; pedir un formato; estructurar con etiquetas XML; trabajar con documentos largos; asignar un rol; aprovechar el razonamiento y dividir tareas complejas.
- **Al terminar serás capaz de:** Convertir una petición vaga en una instrucción que funcione a la primera.
- **Conocimientos previos:** Módulo 1.
- **Ejercicios y prácticas:** Reescribir instrucciones débiles y comparar los resultados con una rúbrica.
- **Evaluación del módulo:** Mejorar cinco instrucciones reales y justificar cada técnica usada.
- **Proyecto:** Biblioteca personal de instrucciones para tus otros cursos.
- **Fuentes previstas** (se verifican al crear cada clase): Guía oficial «Prompting best practices» y resumen de ingeniería de instrucciones (platform.claude.com).

| Clase | Tema | Plan de Claude necesario |
|---|---|---|
| M2·1 | Instrucciones claras y directas: tarea, contexto y criterio de éxito | Gratis |
| M2·2 | Ejemplos y formato de salida | Gratis |
| M2·3 | Estructurar con etiquetas XML y trabajar con documentos largos | Gratis |
| M2·4 | Roles, razonamiento y tareas en varios pasos | Gratis |
| M2·5 | Taller: tu biblioteca de instrucciones (evaluación del módulo) | Gratis |

### Módulo 3 · Investigación y análisis de documentos (4 clases · 8 h)

- **Objetivo:** Investigar, leer y analizar información con Claude sin perder el control de la verdad.
- **Competencias:** Buscar en la web con Claude y comprobar fuentes; usar Research cuando el plan lo permite; analizar PDF y documentos largos; analizar datos con ejecución de código; citar y verificar.
- **Al terminar serás capaz de:** Producir un informe con fuentes verificadas, como lo exige la norma de esta academia.
- **Conocimientos previos:** Módulo 2.
- **Ejercicios y prácticas:** Investigar un tema y llenar una tabla de fuentes (institución, fecha y estado); resumir un documento largo y comprobar cinco afirmaciones.
- **Evaluación del módulo:** Informe breve con fuentes verificadas y errores detectados.
- **Proyecto:** Informe de investigación sobre un tema de otro curso (por ejemplo, IPv6 o phishing).
- **Fuentes previstas** (se verifican al crear cada clase): Centro de ayuda de Claude: Research, artefactos y ejecución de código.

| Clase | Tema | Plan de Claude necesario |
|---|---|---|
| M3·1 | Investigar con búsqueda web y verificar fuentes | Gratis |
| M3·2 | Research: investigación profunda (y su alternativa gratuita) | Pago (Pro o superior); la clase incluye la alternativa gratuita |
| M3·3 | Análisis de documentos: PDF, informes y textos largos | Gratis (con límites de uso) |
| M3·4 | Datos y hojas de cálculo con ejecución de código (evaluación del módulo) | Gratis (hay que activar la ejecución de código) |

### Módulo 4 · Productividad: proyectos, artefactos, memoria y conectores (4 clases · 8 h)

- **Objetivo:** Organizar tu trabajo con Claude para no repetir contexto y crear entregables útiles.
- **Competencias:** Crear proyectos con conocimiento e instrucciones; crear artefactos (documentos, páginas y herramientas); usar la memoria; conectar Claude con otras apps mediante conectores (MCP); delegar tareas en el navegador y el escritorio cuando el plan lo permite.
- **Al terminar serás capaz de:** Montar un espacio de trabajo con Claude para cada curso de la academia.
- **Conocimientos previos:** Módulo 2.
- **Ejercicios y prácticas:** Crear un proyecto por curso con sus instrucciones; crear un artefacto de repaso; probar un conector.
- **Evaluación del módulo:** Presentar tu espacio de trabajo y un artefacto útil para estudiar.
- **Fuentes previstas** (se verifican al crear cada clase): Centro de ayuda de Claude: Projects, Artifacts, memoria y búsqueda de chats, conectores personalizados (MCP remoto), Claude in Chrome y Cowork.

| Clase | Tema | Plan de Claude necesario |
|---|---|---|
| M4·1 | Proyectos: conocimiento e instrucciones permanentes | Gratis (hasta 5 proyectos) |
| M4·2 | Artefactos: documentos, páginas y herramientas interactivas | Gratis (hay que activar la ejecución de código) |
| M4·3 | Memoria y conectores: Claude con tus apps | Gratis con límites (1 conector propio; buscar chats anteriores es de pago) |
| M4·4 | Claude en el navegador y en el escritorio: Claude in Chrome y Cowork (evaluación del módulo) | Pago (Pro o superior) |

### Módulo 5 · Skills: enseñar procedimientos a Claude (3 clases · 6 h)

- **Objetivo:** Empaquetar tus procedimientos en skills para que Claude los repita bien.
- **Competencias:** Explicar qué es un skill y cuándo se activa; usar skills incluidos; crear, probar y subir un skill propio (SKILL.md); reutilizarlo en Claude Code.
- **Al terminar serás capaz de:** Crear un skill que automatice una tarea repetida de tu estudio.
- **Conocimientos previos:** Módulo 2.
- **Ejercicios y prácticas:** Crear un skill que convierta el resumen de una clase en apuntes con el formato de la academia.
- **Evaluación del módulo:** Skill propio funcionando, con instrucciones y casos de prueba.
- **Fuentes previstas** (se verifican al crear cada clase): Centro de ayuda: «What are skills?» y «Use skills in Claude»; documentación de Claude Code: Skills; Anthropic Academy: Introduction to agent skills.

| Clase | Tema | Plan de Claude necesario |
|---|---|---|
| M5·1 | ¿Qué es un skill? Usar los skills incluidos | Gratis (hay que activar la ejecución de código) |
| M5·2 | Crear y subir tu primer skill (SKILL.md) | Gratis (hay que activar la ejecución de código) |
| M5·3 | Skills avanzados: archivos de apoyo, scripts y pruebas (evaluación del módulo) | Gratis; usarlos en Claude Code requiere plan de pago |

### Módulo 6 · Programación asistida con Claude Code (5 clases · 10 h)

- **Objetivo:** Trabajar con Claude Code como asistente de programación, con control y buenas prácticas.
- **Competencias:** Instalar y usar Claude Code (terminal, app de escritorio o VS Code); dar contexto con CLAUDE.md y reglas; seguir el ciclo explorar, planificar, programar y probar; revisar, depurar y versionar con Git; manejar los permisos con seguridad.
- **Al terminar serás capaz de:** Construir y mejorar un programa pequeño con Claude Code, entendiendo cada cambio.
- **Conocimientos previos:** Módulo 2. Recomendado: el Módulo 1 de JavaScript o de Python (aquí no se enseña a programar).
- **Ejercicios y prácticas:** Proyecto de práctica en una carpeta aparte (nunca en la academia real ni en repositorios con datos personales).
- **Evaluación del módulo:** Agregar una función a un programa existente con plan, pruebas y commit explicados.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude Code: Setup, Overview, Memory y Costs; Centro de ayuda: Claude Code con Pro, Max o Ultra; Anthropic Academy: Claude Code in Action.

| Clase | Tema | Plan de Claude necesario |
|---|---|---|
| M6·1 | Instalar Claude Code y entender sus permisos | Pago (Pro o superior) |
| M6·2 | El ciclo de trabajo: explorar, planificar, programar y probar | Pago (Pro o superior) |
| M6·3 | Memoria del proyecto: CLAUDE.md, reglas y comandos | Pago (Pro o superior) |
| M6·4 | Revisar, depurar y versionar con Git junto a Claude | Pago (Pro o superior) |
| M6·5 | Taller: mejorar un programa con Claude Code (evaluación del módulo) | Pago (Pro o superior) |

### Módulo 7 · Agentes, subagentes y MCP (4 clases · 8 h)

- **Objetivo:** Entender cómo trabaja un agente y repartir el trabajo entre varios.
- **Competencias:** Explicar el ciclo de un agente y sus herramientas; usar y crear subagentes; coordinar tareas en paralelo; conectar herramientas con MCP; reconocer riesgos como la inyección de instrucciones (prompt injection).
- **Al terminar serás capaz de:** Diseñar un equipo de subagentes para una tarea real.
- **Conocimientos previos:** Módulo 6.
- **Ejercicios y prácticas:** Crear dos subagentes (uno que investiga en solo lectura y otro que revisa) y comparar el resultado con hacerlo en una sola conversación.
- **Evaluación del módulo:** Resolver una tarea con al menos dos subagentes propios y explicar el resultado.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude Code: Subagents y MCP; Anthropic Academy: Introduction to subagents e Introduction to Model Context Protocol.

| Clase | Tema | Plan de Claude necesario |
|---|---|---|
| M7·1 | ¿Qué es un agente? Herramientas, permisos y riesgos | Pago (Pro o superior) |
| M7·2 | Subagentes: los incluidos y los tuyos (.claude/agents/) | Pago (Pro o superior) |
| M7·3 | Coordinar trabajo en paralelo y en varios pasos | Pago (Pro o superior) |
| M7·4 | MCP: conectar Claude Code con herramientas externas (evaluación del módulo) | Pago (Pro o superior) |

### Módulo 8 · Automatizaciones (4 clases · 8 h)

- **Objetivo:** Automatizar tareas repetidas con Claude de forma segura y sin API de pago.
- **Competencias:** Usar hooks para controles automáticos; empaquetar en plugins; programar tareas (/loop y tareas programadas); ejecutar Claude Code desde scripts y GitHub Actions con la suscripción; conocer los límites de uso.
- **Al terminar serás capaz de:** Dejar funcionando una automatización útil, con sus límites claros.
- **Conocimientos previos:** Módulos 5 y 7.
- **Ejercicios y prácticas:** Un hook que revise un archivo antes de guardarlo; una tarea programada de repaso; un flujo de prueba en un repositorio de práctica.
- **Evaluación del módulo:** Automatización propia documentada: qué hace, cuándo corre, qué consume y cómo se apaga.
- **Fuentes previstas** (se verifican al crear cada clase): Documentación de Claude Code: Hooks, Plugins, tareas programadas (routines y /loop), modo programático, GitHub Actions y Costs.

| Clase | Tema | Plan de Claude necesario |
|---|---|---|
| M8·1 | Hooks: controles automáticos antes y después de cada acción | Pago (Pro o superior) |
| M8·2 | Plugins: empaquetar skills, subagentes, hooks y MCP | Pago (Pro o superior) |
| M8·3 | Tareas programadas: /loop y tareas en el escritorio y en la nube | Pago (Pro o superior) |
| M8·4 | Claude Code desde scripts y GitHub Actions (evaluación del módulo) | Pago (Pro o superior) |

### Módulo 9 · Proyecto final (3 clases · 6 h)

- **Objetivo:** Diseñar, construir y presentar tu sistema de productividad con Claude.
- **Competencias:** Integrar instrucciones, proyectos, skills y automatizaciones en un sistema útil; verificar resultados; documentar límites, costos y riesgos; presentar el trabajo.
- **Al terminar serás capaz de:** Entregar un sistema de productividad personal con Claude.
- **Conocimientos previos:** Módulos 3, 4 y 5. La parte de automatización requiere los Módulos 6 a 8 y un plan de pago; existe una versión del proyecto solo con el plan gratuito.
- **Ejercicios y prácticas:** Avances semanales revisados con una lista de comprobación.
- **Evaluación del módulo:** Rúbrica: utilidad real, buenas instrucciones, verificación, seguridad y presentación.
- **Proyecto:** Proyecto final del curso (ver más arriba).

| Clase | Tema | Plan de Claude necesario |
|---|---|---|
| M9·1 | Diseño del proyecto | Gratis (versión básica) o pago (versión con Claude Code) |
| M9·2 | Construcción guiada | Gratis (versión básica) o pago (versión con Claude Code) |
| M9·3 | Presentación y revisión | Gratis |

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

| Curso | Estado | Módulos | Clases | Horas | Clases listas |
|---|---|---|---|---|---|
| 🛡️ Ciberseguridad | Aprobado | 9 | 41 | 82 | 5 |
| 💬 Inglés básico | Aprobado | 5 | 40 | 40 | 4 |
| ⚡ JavaScript | Aprobado | 7 | 37 | 74 | 4 |
| 🐍 Python | Aprobado | 9 | 38 | 76 (+6 h de electiva) | 4 |
| 🌐 Redes y Telecomunicaciones | **Nuevo (propuesto)** | 11 | 51 | 102 | 0 |
| 🤖 IA: Claude y productividad | **Nuevo (propuesto)** | 9 | 36 | 72 | 0 |
| **Academia (6 cursos)** | | **50** | **243** | **446** | **17** |

Las horas son de clase; la práctica autónoma de cada clase se suma aparte, a tu ritmo. La
electiva de Python sigue siendo opcional y no se cuenta en el total.

## 7. Cómo quedaría el catálogo

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
- 🤖 **IA: Claude y productividad** *(nuevo)* · 2 h por clase · 36 clases · 72 h
  M1 Fundamentos de la IA generativa y de Claude (4) · M2 Técnicas de instrucciones (prompting) (5) · M3 Investigación y análisis de documentos (4) · M4 Productividad: proyectos, artefactos, memoria y conectores (4) · M5 Skills: enseñar procedimientos a Claude (3) · M6 Programación asistida con Claude Code (5) · M7 Agentes, subagentes y MCP (4) · M8 Automatizaciones (4) · M9 Proyecto final (3)

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
