# Ruta de aprendizaje: Redes y Telecomunicaciones, desde cero

Cada clase dura **2 horas**. El curso se organiza por **módulos**, aprobados en
`PROPUESTA-AMPLIACION-6-CURSOS.md` (sección 3). La base sigue el temario oficial del examen
**CCNA 200-301 v2.0** de Cisco (vigente desde el 03/02/2027) y se practica con la terminal
simulada de cada clase, en **Cisco Packet Tracer** y con los comandos de Windows de tu PC.

- **Clases:** usan el siguiente número de archivo libre (`clase-01`, `clase-02`…) con el id
  `redes-01`, `redes-02`… y ocupan el lugar que les toca dentro de su módulo.
- **Datos de los ejemplos:** siempre direcciones de documentación (RFC 5737 y RFC 3849) y
  empresas ficticias.
- **El curso no reemplaza** la preparación oficial de Cisco para certificarse.

<!-- INICIO: generado desde recursos/catalogo.js con "node herramientas/generar-rutas.js". No editar a mano. -->

## Meta del curso

Diseñar, configurar, administrar y diagnosticar la red de una empresa pequeña o mediana, con una base alineada al temario oficial del examen CCNA 200-301 v2.0 de Cisco y práctica en Cisco Packet Tracer.

- **Duración:** 11 módulos · 51 clases · 102 h de clase (2 h por clase). La práctica autónoma de cada clase se suma aparte.
- **Clases listas:** 3 de 51.
- **Siguiente clase por crear:** Módulo 1 · Clase 4: Ethernet y switching: tramas, direcciones MAC y tabla MAC.
- **Proyecto final del curso:** Red de una empresa ficticia con sede central y sucursal: VLAN, enrutamiento OSPF, IPv4 e IPv6, NAT, Wi-Fi, seguridad y monitoreo, con informe técnico y defensa oral.

## Resumen de módulos

| Módulo | Clases | Horas | Listas | Necesitas antes |
|---|---|---|---|---|
| Módulo 1 · Fundamentos de redes | 5 | 10 | 3 | Ninguno obligatorio |
| Módulo 2 · Direccionamiento IPv4 y subnetting | 5 | 10 | 0 | Módulo 1 |
| Módulo 3 · Transporte y servicios básicos | 4 | 8 | 0 | Módulo 2 |
| Módulo 4 · Configuración de dispositivos Cisco | 4 | 8 | 0 | Módulo 2 |
| Módulo 5 · Switching y VLAN | 5 | 10 | 0 | Módulo 4 |
| Módulo 6 · Enrutamiento IPv4 | 5 | 10 | 0 | Módulo 5 |
| Módulo 7 · IPv6 | 4 | 8 | 0 | Módulo 6 |
| Módulo 8 · NAT y redes inalámbricas | 3 | 6 | 0 | Módulo 6 |
| Módulo 9 · Telecomunicaciones, WAN e Internet | 4 | 8 | 0 | Módulo 3 |
| Módulo 10 · Seguridad, operación y automatización | 6 | 12 | 0 | Módulos 4, 5 y 6 |
| Módulo 11 · Diseño, diagnóstico y proyecto empresarial | 6 | 12 | 0 | Módulos 7, 8, 9 y 10 |
| **Total** | **51** | **102** | **3** | |

## Módulo 1 · Fundamentos de redes (5 clases · 10 h)

- **Objetivo:** Entender qué es una red, cómo se organiza en capas y cómo viajan los datos por cables, fibra y aire.
- **Competencias:** Identificar componentes y tipos de red; explicar los modelos OSI y TCP/IP y el encapsulamiento; comparar cobre, fibra e inalámbrico; describir cómo funciona un switch Ethernet; armar una red simple en Packet Tracer.
- **Al terminar serás capaz de:** Explicar cómo viaja un mensaje de un equipo a otro y montar una red pequeña simulada.
- **Necesitas antes:** Ninguno. Basta con saber usar el computador.
- **Práctica:** Identificar los equipos de tu propia red; ordenar capas y encapsulamiento; primera red en Packet Tracer; ipconfig, ping y tracert en tu PC.
- **Evaluación del módulo:** Simular la red de una pequeña oficina (SOHO) en Packet Tracer y explicar el camino de un ping.
- **Fuentes previstas** (se verifican al crear cada clase): ITU-T X.200 (modelo OSI), RFC 1122 (capas TCP/IP), ITU-T G.652 (fibra monomodo), temario CCNA, guía de instalación de Packet Tracer.

| Clase | Tema | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|
| M1·1 | ¿Qué es una red? Componentes, tipos (LAN, WAN, WLAN) y topologías | CCNA v1.1 1.1–1.2 | [▶ 1](https://www.youtube.com/watch?v=H8W9oMNSuwo) | ✔ Lista: `clases/clase-01.html` (id `redes-01`) |
| M1·2 | Modelos OSI y TCP/IP: capas, encapsulamiento y protocolos | — | [▶ 1](https://www.youtube.com/watch?v=4GEHbsBF0Yw) [▶ 2](https://www.youtube.com/watch?v=iNh-62Mf0O4) | ✔ Lista: `clases/clase-02.html` (id `redes-02`) |
| M1·3 | Medios físicos: cobre, fibra óptica e inalámbrico; cables y fallas de interfaz | CCNA v2.0 1.1 | [▶ 1](https://www.youtube.com/watch?v=ieTH5lVhNaY&t=557s) [▶ 2](https://www.youtube.com/watch?v=CdAl3cECvJI) | ✔ Lista: `clases/clase-03.html` (id `redes-03`) |
| M1·4 | Ethernet y switching: tramas, direcciones MAC y tabla MAC | CCNA v1.1 1.13 | [▶ 1](https://www.youtube.com/watch?v=w_CArT71qHc) [▶ 2](https://www.youtube.com/watch?v=u2n762WG0Vo) | Próximamente · **siguiente por crear** |
| M1·5 | Cisco Packet Tracer: tu primera red y los comandos de diagnóstico del PC | CCNA v2.0 1.6 | [▶ 1](https://www.youtube.com/watch?v=a1Im6GYaSno) | Próximamente |

## Módulo 2 · Direccionamiento IPv4 y subnetting (5 clases · 10 h)

- **Objetivo:** Asignar direcciones IPv4 y dividir redes en subredes sin calculadora.
- **Competencias:** Interpretar dirección, máscara y prefijo; distinguir direcciones públicas, privadas y especiales; calcular subredes y VLSM; diseñar y verificar un plan de direccionamiento.
- **Al terminar serás capaz de:** Diseñar el plan IPv4 de una empresa pequeña y detectar errores de configuración.
- **Necesitas antes:** Módulo 1.
- **Práctica:** Conversión binaria; retos de subnetting con autocorrección; configurar y corregir direcciones en Packet Tracer.
- **Evaluación del módulo:** Prueba de subnetting cronometrada y diagnóstico de cinco equipos mal configurados.
- **Proyecto:** Plan de direccionamiento IPv4 para una empresa ficticia de cuatro áreas.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 791 (IPv4), RFC 4632 (CIDR), RFC 1918 (direcciones privadas), RFC 5737 (direcciones de documentación), temario CCNA v2.0 (1.3).

| Clase | Tema | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|
| M2·1 | IPv4: dirección, máscara, prefijo y números binarios | — | [▶ 1](https://www.youtube.com/watch?v=3ROdsfEUuhs) | Próximamente |
| M2·2 | Direcciones públicas, privadas, especiales y de documentación | — | [▶ 1](https://www.youtube.com/watch?v=gVUE2IDwWA0) [▶ 2](https://www.youtube.com/watch?v=HeZWcZmrQUY) | Próximamente |
| M2·3 | Subnetting I: dividir una red en subredes iguales | — | [▶ 1](https://www.youtube.com/watch?v=bQ8sdpGQu8c) [▶ 2](https://www.youtube.com/watch?v=IGhd-0di0Qo) | Próximamente |
| M2·4 | Subnetting II: VLSM y plan de direccionamiento | — | [▶ 1](https://www.youtube.com/watch?v=z-JqCedc9EI) | Próximamente |
| M2·5 | Taller: diagnosticar configuraciones IPv4 (evaluación del módulo) | CCNA v2.0 1.3 | — | Próximamente |

## Módulo 3 · Transporte y servicios básicos (4 clases · 8 h)

- **Objetivo:** Entender cómo se comunican las aplicaciones y cómo un equipo obtiene su dirección y resuelve nombres.
- **Competencias:** Comparar TCP y UDP; explicar ARP e ICMP; configurar y diagnosticar DHCP (servidor y agente relay); interpretar registros DNS.
- **Al terminar serás capaz de:** Explicar y diagnosticar los servicios que hacen que un equipo «tenga Internet».
- **Necesitas antes:** Módulo 2.
- **Práctica:** Ver conexiones con netstat y Test-NetConnection; seguir ARP, DHCP y DNS en el modo simulación de Packet Tracer; nslookup sobre dominios de ejemplo.
- **Evaluación del módulo:** Resolver tres casos: un equipo sin IP, otro que no resuelve nombres y otro que no alcanza un puerto.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 9293 (TCP), RFC 768 (UDP), RFC 826 (ARP), RFC 792 (ICMP), RFC 2131 (DHCP), RFC 1034 y RFC 1035 (DNS), temario CCNA v2.0 (1.7, 4.4).

| Clase | Tema | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|
| M3·1 | TCP y UDP: puertos, conexiones y confiabilidad | — | [▶ 1](https://www.youtube.com/watch?v=-7DiO35rbN8) [▶ 2](https://www.youtube.com/watch?v=LIEACBqlntY) | Próximamente |
| M3·2 | ARP e ICMP: cómo se encuentran y se prueban los equipos | — | [▶ 1](https://www.youtube.com/watch?v=4YrYV2io3as) | Próximamente |
| M3·3 | DHCP: servidor, cliente y agente de retransmisión (relay) | CCNA v2.0 1.7 | [▶ 1](https://www.youtube.com/watch?v=hzkleGAC2_Y) | Próximamente |
| M3·4 | DNS: resolución de nombres, registros y diagnóstico | CCNA v2.0 4.4 | [▶ 1](https://www.youtube.com/watch?v=7XjJqUM0dvg) | Próximamente |

## Módulo 4 · Configuración de dispositivos Cisco (4 clases · 8 h)

- **Objetivo:** Configurar, asegurar el acceso y respaldar switches y routers con Cisco IOS.
- **Competencias:** Usar la línea de comandos de Cisco IOS; hacer la configuración inicial; habilitar acceso remoto seguro con SSH; guardar, respaldar y documentar configuraciones con CDP y LLDP.
- **Al terminar serás capaz de:** Dejar operativos y documentados un switch y un router nuevos.
- **Necesitas antes:** Módulo 2.
- **Práctica:** Terminal simulada de Cisco IOS dentro de la clase y laboratorios guiados en Packet Tracer.
- **Evaluación del módulo:** Configurar desde cero una red pequeña siguiendo una hoja de requisitos.
- **Fuentes previstas** (se verifican al crear cada clase): Temario CCNA v2.0 (2.3, 4.1, 4.2), Cisco Packet Tracer.

| Clase | Tema | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|
| M4·1 | Cisco IOS: modos, ayuda de la línea de comandos y configuración inicial | — | [▶ 1](https://www.youtube.com/watch?v=IYbtai7Nu2g) | Próximamente |
| M4·2 | Acceso seguro: contraseñas, usuarios locales y SSH | CCNA v2.0 4.1 | [▶ 1](https://www.youtube.com/watch?v=AvgYqI2qSD4) | Próximamente |
| M4·3 | Archivos de configuración, respaldos y documentación con CDP y LLDP | CCNA v2.0 2.3, 4.2 | [▶ 1](https://www.youtube.com/watch?v=_hnMZBzXRRk) | Próximamente |
| M4·4 | Taller: configurar y documentar una red pequeña (evaluación del módulo) | — | — | Próximamente |

## Módulo 5 · Switching y VLAN (5 clases · 10 h)

- **Objetivo:** Segmentar una red con VLAN y mantenerla estable y redundante en la capa 2.
- **Competencias:** Crear VLAN y puertos de acceso; configurar troncales 802.1Q; enrutar entre VLAN; interpretar Rapid PVST+; agrupar enlaces con EtherChannel (LACP).
- **Al terminar serás capaz de:** Implementar la red de capa 2 de un edificio con varias áreas.
- **Necesitas antes:** Módulo 4.
- **Práctica:** Laboratorios de Packet Tracer con fallas provocadas para corregir.
- **Evaluación del módulo:** Corregir una red con VLAN mal asignadas, troncales caídos y un bucle.
- **Proyecto:** Red de un edificio con una VLAN por área.
- **Fuentes previstas** (se verifican al crear cada clase): IEEE 802.1Q (VLAN), temario CCNA v2.0 (2.1, 2.2, 2.5).

| Clase | Tema | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|
| M5·1 | VLAN: segmentar la red y configurar puertos de acceso | CCNA v2.0 2.2 | [▶ 1](https://www.youtube.com/watch?v=vzY9DJuIe9U) | Próximamente |
| M5·2 | Troncales 802.1Q y VLAN nativa | CCNA v2.0 2.1 | [▶ 1](https://www.youtube.com/watch?v=USmPUFzcTlE) | Próximamente |
| M5·3 | Enrutamiento entre VLAN: router-on-a-stick y SVI | CCNA v2.0 2.1 | [▶ 1](https://www.youtube.com/watch?v=OkPB028l2eE) | Próximamente |
| M5·4 | Spanning Tree (Rapid PVST+): evitar bucles | CCNA v2.0 2.5 | [▶ 1](https://www.youtube.com/watch?v=j-bK-EFt9cY) | Próximamente |
| M5·5 | EtherChannel con LACP (evaluación del módulo) | CCNA v2.0 2.1 | [▶ 1](https://www.youtube.com/watch?v=xuo69Joy_Nc) | Próximamente |

## Módulo 6 · Enrutamiento IPv4 (5 clases · 10 h)

- **Objetivo:** Conectar varias redes y entender cómo decide un router el camino.
- **Competencias:** Interpretar la tabla de enrutamiento; configurar rutas estáticas (predeterminada, de red, de host y flotante); configurar y verificar OSPFv2 de área única; interpretar la redundancia de puerta de enlace (HSRP y VRRP).
- **Al terminar serás capaz de:** Enrutar la red de una empresa con varias sedes y diagnosticar fallas de enrutamiento.
- **Necesitas antes:** Módulo 5.
- **Práctica:** Seguir paquetes en el modo simulación; tablas de enrutamiento para interpretar; fallas de OSPF para resolver.
- **Evaluación del módulo:** Diagnosticar una red con rutas faltantes y vecinos OSPF que no se forman.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 2328 (OSPFv2), temario CCNA v2.0 (3.1–3.4).

| Clase | Tema | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|
| M6·1 | Cómo decide un router: tabla de enrutamiento, prefijo más largo y métricas | CCNA v2.0 3.1 | [▶ 1](https://www.youtube.com/watch?v=aHwAm8GYbn8) | Próximamente |
| M6·2 | Rutas estáticas: predeterminada, de red, de host y flotante | CCNA v2.0 3.2 | [▶ 1](https://www.youtube.com/watch?v=YCv4-_sMvYE) | Próximamente |
| M6·3 | OSPFv2 I: vecinos, router ID y redes punto a punto | CCNA v2.0 3.3 | [▶ 1](https://www.youtube.com/watch?v=pvuaoJ9YzoI) | Próximamente |
| M6·4 | OSPFv2 II: DR/BDR, verificación y fallas comunes | CCNA v2.0 3.3 | [▶ 1](https://www.youtube.com/watch?v=VtzfTA21ht0) | Próximamente |
| M6·5 | Redundancia de puerta de enlace: HSRP y VRRP (evaluación del módulo) | CCNA v2.0 3.4 | [▶ 1](https://www.youtube.com/watch?v=43WnpwQMolo) | Próximamente |

## Módulo 7 · IPv6 (4 clases · 8 h)

- **Objetivo:** Direccionar y enrutar redes IPv6 y hacerlas convivir con IPv4.
- **Competencias:** Escribir y abreviar direcciones IPv6; reconocer sus tipos; explicar SLAAC, DHCPv6 y NDP; configurar rutas estáticas IPv6 y OSPFv3; diagnosticar IPv6 en doble pila.
- **Al terminar serás capaz de:** Agregar IPv6 a una red existente sin interrumpir IPv4.
- **Necesitas antes:** Módulo 6.
- **Práctica:** Abreviar y expandir direcciones; planificar prefijos con el bloque de documentación 2001:db8::/32; configurar doble pila en Packet Tracer.
- **Evaluación del módulo:** Migrar a doble pila la red del módulo anterior.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 8200 (IPv6), RFC 4291 (direccionamiento), RFC 3849 (prefijo de documentación), RFC 4861 (NDP), RFC 4862 (SLAAC), RFC 9915 (DHCPv6; reemplaza al RFC 8415), RFC 5340 (OSPFv3), temario CCNA v2.0 (1.4, 3.2, 3.3).

| Clase | Tema | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|
| M7·1 | IPv6: formato, abreviación y tipos de direcciones | CCNA v2.0 1.4 | [▶ 1](https://www.youtube.com/watch?v=LQf1azzcG7s) [▶ 2](https://www.youtube.com/watch?v=ZNuXyOXae5U) | Próximamente |
| M7·2 | Asignación en IPv6: SLAAC, DHCPv6, EUI-64 y NDP | CCNA v2.0 1.4 | [▶ 1](https://www.youtube.com/watch?v=BrTMMOXFhDU) | Próximamente |
| M7·3 | Rutas estáticas IPv6 y OSPFv3 | CCNA v2.0 3.2, 3.3 | — | Próximamente |
| M7·4 | Doble pila y diagnóstico IPv6 (evaluación del módulo) | — | — | Próximamente |

## Módulo 8 · NAT y redes inalámbricas (3 clases · 6 h)

- **Objetivo:** Dar salida a Internet con NAT y planificar una red Wi-Fi segura.
- **Competencias:** Configurar NAT estático, dinámico y PAT; explicar bandas, canales, radiofrecuencia e interferencias; comparar WPA2 y WPA3; describir arquitecturas con puntos de acceso autónomos y con controlador.
- **Al terminar serás capaz de:** Conectar una oficina a Internet y planificar su Wi-Fi.
- **Necesitas antes:** Módulo 6.
- **Práctica:** Configurar NAT/PAT en Packet Tracer; plan de canales para un piso de oficina.
- **Evaluación del módulo:** Configurar la salida a Internet de una oficina y justificar su plan de canales Wi-Fi.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 3022 (NAT), IEEE 802.11 (grupo de trabajo de WLAN), temario CCNA v2.0 (1.5, 2.2, 4.3).

| Clase | Tema | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|
| M8·1 | NAT y PAT: salir a Internet con direcciones privadas | CCNA v2.0 4.3 | [▶ 1](https://www.youtube.com/watch?v=2TZCfTgopeg) | Próximamente |
| M8·2 | Wi-Fi: bandas, canales, interferencias y seguridad (WPA2 y WPA3) | CCNA v2.0 1.5 | [▶ 1](https://www.youtube.com/watch?v=zuYiktLqNYQ) [▶ 2](https://www.youtube.com/watch?v=wHXKo9So5y8) | Próximamente |
| M8·3 | Arquitecturas inalámbricas: puntos de acceso autónomos y con controlador (evaluación del módulo) | CCNA v2.0 2.2 | [▶ 1](https://www.youtube.com/watch?v=uX1h0F6wpBY) | Próximamente |

## Módulo 9 · Telecomunicaciones, WAN e Internet (4 clases · 8 h)

- **Objetivo:** Entender las redes de los proveedores: cómo llega Internet, cómo funcionan las redes móviles y cómo se unen sedes lejanas.
- **Competencias:** Explicar ancho de banda, latencia y medios de transmisión; comparar tecnologías de acceso (cobre, cable, fibra, móvil y satélite); describir las redes móviles 4G y 5G; explicar WAN, VPN IPsec y la interconexión de proveedores con BGP, a nivel conceptual.
- **Al terminar serás capaz de:** Elegir y justificar la conexión WAN e Internet de una empresa.
- **Necesitas antes:** Módulo 3. Conviene haber hecho el Módulo 6.
- **Práctica:** Medir latencia y pérdida con ping y tracert; comparar ofertas de conexión ficticias.
- **Evaluación del módulo:** Comparar tres ofertas de conexión para una empresa ficticia y recomendar una.
- **Fuentes previstas** (se verifican al crear cada clase): ITU-T G.652, ITU-R IMT-2020 (5G), 3GPP, ITU Facts and Figures 2025, RFC 4271 (BGP-4), temario CCNA v2.0 (4.5).

| Clase | Tema | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|
| M9·1 | Señales y transmisión: ancho de banda, latencia, pérdida y ruido | — | — | Próximamente |
| M9·2 | Acceso a Internet: cobre, cable, fibra hasta el hogar, móvil y satélite | — | [▶ 1](https://www.youtube.com/watch?v=CdAl3cECvJI) | Próximamente |
| M9·3 | Redes móviles: de 4G a 5G (3GPP e IMT-2020) | — | [▶ 1](https://www.youtube.com/watch?v=T9Lv4y8519Q) | Próximamente |
| M9·4 | WAN, VPN e Internet: proveedores, IPsec y BGP en concepto (evaluación del módulo) | CCNA v2.0 4.5 | [▶ 1](https://www.youtube.com/watch?v=BW3fQgdf4-w) | Próximamente |

## Módulo 10 · Seguridad, operación y automatización (6 clases · 12 h)

- **Objetivo:** Proteger los equipos de red, vigilarlos y automatizar su administración.
- **Competencias:** Configurar ACL estándar y extendidas; aplicar seguridad de capa 2; usar AAA con TACACS+ y RADIUS; monitorear con SNMP, syslog y NTP; describir enfoques de gestión (controladores, nube, automatización e infraestructura como código) y usar Ansible; describir la IA agéntica y escribir prompts para la operación de redes.
- **Al terminar serás capaz de:** Proteger, monitorear y automatizar una red pequeña.
- **Necesitas antes:** Módulos 4, 5 y 6.
- **Práctica:** Auditoría de seguridad de una red simulada; lectura de mensajes syslog; ejemplos de JSON y de un playbook de Ansible.
- **Evaluación del módulo:** Auditar y corregir la seguridad de una red simulada.
- **Fuentes previstas** (se verifican al crear cada clase): Temario CCNA v2.0 (4.1, 4.6, 4.7, 5.1–5.6); temario CCNA v1.1 (NTP, APIs REST y JSON).

| Clase | Tema | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|
| M10·1 | Listas de control de acceso (ACL) estándar y extendidas | CCNA v2.0 4.6 | [▶ 1](https://www.youtube.com/watch?v=z023_eRUtSo) [▶ 2](https://www.youtube.com/watch?v=dUttKY_CNXE) | Próximamente |
| M10·2 | Seguridad de capa 2: port security, DHCP snooping, DAI, storm control y RA guard | CCNA v2.0 4.7 | [▶ 1](https://www.youtube.com/watch?v=sHN3jOJIido) | Próximamente |
| M10·3 | AAA, TACACS+ y RADIUS para administrar equipos | CCNA v2.0 4.1 | — | Próximamente |
| M10·4 | Monitoreo: SNMP, syslog y sincronización de hora con NTP | CCNA v2.0 5.4, 5.6 | [▶ 1](https://www.youtube.com/watch?v=HXu0Ifj0oWU) [▶ 2](https://www.youtube.com/watch?v=RaQPSKQ4J5A) | Próximamente |
| M10·5 | Automatización: controladores, APIs REST, JSON y Ansible | CCNA v2.0 5.3, 5.5 | [▶ 1](https://www.youtube.com/watch?v=4tsBgMCPVuc) | Próximamente |
| M10·6 | IA en la operación de redes: agentes y prompts (evaluación del módulo) | CCNA v2.0 5.1, 5.2 | — | Próximamente |

## Módulo 11 · Diseño, diagnóstico y proyecto empresarial (6 clases · 12 h)

- **Objetivo:** Diseñar, implementar, probar y defender la red completa de una empresa.
- **Competencias:** Aplicar diseños jerárquicos (dos y tres niveles, spine-leaf, SOHO y nube); explicar el papel de hipervisores, máquinas virtuales y contenedores; seguir una metodología de diagnóstico por capas; documentar una red; integrar todo lo aprendido en un proyecto.
- **Al terminar serás capaz de:** Entregar el diseño, la configuración y la documentación de la red de una empresa.
- **Necesitas antes:** Módulos 7, 8, 9 y 10.
- **Práctica:** Casos de diagnóstico encadenados; plantillas de documentación de red.
- **Evaluación del módulo:** Rúbrica del proyecto: requisitos cumplidos, pruebas, documentación y defensa.
- **Proyecto:** Proyecto final del curso (ver más arriba).
- **Fuentes previstas** (se verifican al crear cada clase): Temario CCNA v1.1 (1.2, arquitecturas); temario CCNA v2.0 (2.4, diagnóstico).

| Clase | Tema | Temario oficial que cubre | Videos | Estado |
|---|---|---|---|---|
| M11·1 | Diseño de redes: dos y tres niveles, spine-leaf, SOHO, nube y virtualización | CCNA v1.1 1.2; CCNA v2.0 1.2 | — | Próximamente |
| M11·2 | Metodología de diagnóstico: por capas, comandos show, ping extendido, traceroute y capturas | CCNA v2.0 2.4 | [▶ 1](https://www.youtube.com/watch?v=4YrYV2io3as) | Próximamente |
| M11·3 | Documentación de red: diagramas, tablas de direcciones e inventario | — | — | Próximamente |
| M11·4 | Proyecto empresarial I: requisitos y diseño | — | — | Próximamente |
| M11·5 | Proyecto empresarial II: implementación en Packet Tracer | — | — | Próximamente |
| M11·6 | Proyecto empresarial III: pruebas, informe y defensa | — | — | Próximamente |

<!-- FIN: generado desde recursos/catalogo.js -->

## Contenidos que se comparten con otros cursos (sin duplicarlos)

- **IP, MAC y puertos:** Ciberseguridad 05 (ya existe) no cambia. Redes lo explica a fondo
  (Módulos 1 a 3); Ciberseguridad lo usa para detectar ataques.
- **DNS:** aquí, cómo funciona y cómo se diagnostica (Módulo 3 · Clase 4); en Ciberseguridad
  (Módulo 3 · Clase 2), cómo se abusa de él y cómo se detecta.
- **Wireshark:** a fondo solo en Ciberseguridad (Módulo 3 · Clase 4); aquí se interpretan salidas.
- **Ataques de red:** Ciberseguridad detecta y analiza; Redes configura las defensas en los
  equipos (ACL y seguridad de capa 2, Módulo 10).
- **Automatización:** Python enseña a programarla; aquí se ven controladores y Ansible
  (Módulo 10 · Clase 5).
- **Instrucciones para IA (tema 5.2 del CCNA v2.0):** la técnica está en el curso Prompt Engineering; aquí
  se aplica a la operación de redes (Módulo 10 · Clase 6).
