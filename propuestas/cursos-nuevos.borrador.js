/* BORRADOR HISTÓRICO (ya implementado en recursos/catalogo.js el 11/11/2026) — Cursos 5 y 6 de la academia.
   Propuesta: PROPUESTA-AMPLIACION-6-CURSOS.md (11/11/2026).
   NO lo carga el menú real. Se usa solo en la vista previa (propuestas/vista-previa-6-cursos.html)
   y en las revisiones. Se carga DESPUÉS de recursos/catalogo.js y le agrega los dos cursos, sin
   tocar los cuatro existentes. Ninguna clase tiene archivo todavía: todas son «Próximamente».
   Campos nuevos (el menú los ignora): practica (ejercicios del módulo), ref (tema del temario
   oficial que cubre la clase) y plan (qué plan de Claude necesita la clase). */
(function () {
  'use strict';
  // Desde el 11/11/2026 los dos cursos viven en recursos/catalogo.js (implementación real).
  // Este borrador queda como registro de la propuesta: si el catálogo ya los tiene, no agrega nada.
  if (window.CATALOGO.some((c) => c.id === 'redes' || c.id === 'ia')) return;
  const nuevos = [
    {
      id: 'redes',
      nombre: 'Redes y Telecomunicaciones',
      icono: '🌐',
      tema: 'tema-redes',
      desc: 'De cero a diseñar, configurar, administrar y diagnosticar redes, practicando en Cisco Packet Tracer.',
      duracion: '2 h por clase',
      horasClase: 2,
      meta: 'Diseñar, configurar, administrar y diagnosticar la red de una empresa pequeña o mediana, con una base alineada al temario oficial del examen CCNA 200-301 v2.0 de Cisco y práctica en Cisco Packet Tracer.',
      proyectoFinal: 'Red de una empresa ficticia con sede central y sucursal: VLAN, enrutamiento OSPF, IPv4 e IPv6, NAT, Wi-Fi, seguridad y monitoreo, con informe técnico y defensa oral.',
      modulos: [
        { n: 1, titulo: 'Fundamentos de redes',
          objetivo: 'Entender qué es una red, cómo se organiza en capas y cómo viajan los datos por cables, fibra y aire.',
          competencias: 'Identificar componentes y tipos de red; explicar los modelos OSI y TCP/IP y el encapsulamiento; comparar cobre, fibra e inalámbrico; describir cómo funciona un switch Ethernet; armar una red simple en Packet Tracer.',
          logro: 'Explicar cómo viaja un mensaje de un equipo a otro y montar una red pequeña simulada.',
          previos: [], previosNota: 'Ninguno. Basta con saber usar el computador.',
          practica: 'Identificar los equipos de tu propia red; ordenar capas y encapsulamiento; primera red en Packet Tracer; ipconfig, ping y tracert en tu PC.',
          evaluacion: 'Simular la red de una pequeña oficina (SOHO) en Packet Tracer y explicar el camino de un ping.',
          fuentes: 'ITU-T X.200 (modelo OSI), RFC 1122 (capas TCP/IP), ITU-T G.652 (fibra monomodo), temario CCNA, guía de instalación de Packet Tracer.',
          clases: [
            { titulo: '¿Qué es una red? Componentes, tipos (LAN, WAN, WLAN) y topologías', ref: 'CCNA v1.1 1.1–1.2' },
            { titulo: 'Modelos OSI y TCP/IP: capas, encapsulamiento y protocolos' },
            { titulo: 'Medios físicos: cobre, fibra óptica e inalámbrico; cables y fallas de interfaz', ref: 'CCNA v2.0 1.1' },
            { titulo: 'Ethernet y switching: tramas, direcciones MAC y tabla MAC', ref: 'CCNA v1.1 1.13' },
            { titulo: 'Cisco Packet Tracer: tu primera red y los comandos de diagnóstico del PC', ref: 'CCNA v2.0 1.6' }
          ] },
        { n: 2, titulo: 'Direccionamiento IPv4 y subnetting',
          objetivo: 'Asignar direcciones IPv4 y dividir redes en subredes sin calculadora.',
          competencias: 'Interpretar dirección, máscara y prefijo; distinguir direcciones públicas, privadas y especiales; calcular subredes y VLSM; diseñar y verificar un plan de direccionamiento.',
          logro: 'Diseñar el plan IPv4 de una empresa pequeña y detectar errores de configuración.',
          previos: [1],
          practica: 'Conversión binaria; retos de subnetting con autocorrección; configurar y corregir direcciones en Packet Tracer.',
          evaluacion: 'Prueba de subnetting cronometrada y diagnóstico de cinco equipos mal configurados.',
          proyecto: 'Plan de direccionamiento IPv4 para una empresa ficticia de cuatro áreas.',
          fuentes: 'RFC 791 (IPv4), RFC 4632 (CIDR), RFC 1918 (direcciones privadas), RFC 5737 (direcciones de documentación), temario CCNA v2.0 (1.3).',
          clases: [
            { titulo: 'IPv4: dirección, máscara, prefijo y números binarios' },
            { titulo: 'Direcciones públicas, privadas, especiales y de documentación' },
            { titulo: 'Subnetting I: dividir una red en subredes iguales' },
            { titulo: 'Subnetting II: VLSM y plan de direccionamiento' },
            { titulo: 'Taller: diagnosticar configuraciones IPv4 (evaluación del módulo)', ref: 'CCNA v2.0 1.3' }
          ] },
        { n: 3, titulo: 'Transporte y servicios básicos',
          objetivo: 'Entender cómo se comunican las aplicaciones y cómo un equipo obtiene su dirección y resuelve nombres.',
          competencias: 'Comparar TCP y UDP; explicar ARP e ICMP; configurar y diagnosticar DHCP (servidor y agente relay); interpretar registros DNS.',
          logro: 'Explicar y diagnosticar los servicios que hacen que un equipo «tenga Internet».',
          previos: [2],
          practica: 'Ver conexiones con netstat y Test-NetConnection; seguir ARP, DHCP y DNS en el modo simulación de Packet Tracer; nslookup sobre dominios de ejemplo.',
          evaluacion: 'Resolver tres casos: un equipo sin IP, otro que no resuelve nombres y otro que no alcanza un puerto.',
          fuentes: 'RFC 9293 (TCP), RFC 768 (UDP), RFC 826 (ARP), RFC 792 (ICMP), RFC 2131 (DHCP), RFC 1034 y RFC 1035 (DNS), temario CCNA v2.0 (1.7, 4.4).',
          clases: [
            { titulo: 'TCP y UDP: puertos, conexiones y confiabilidad' },
            { titulo: 'ARP e ICMP: cómo se encuentran y se prueban los equipos' },
            { titulo: 'DHCP: servidor, cliente y agente de retransmisión (relay)', ref: 'CCNA v2.0 1.7' },
            { titulo: 'DNS: resolución de nombres, registros y diagnóstico', ref: 'CCNA v2.0 4.4' }
          ] },
        { n: 4, titulo: 'Configuración de dispositivos Cisco',
          objetivo: 'Configurar, asegurar el acceso y respaldar switches y routers con Cisco IOS.',
          competencias: 'Usar la línea de comandos de Cisco IOS; hacer la configuración inicial; habilitar acceso remoto seguro con SSH; guardar, respaldar y documentar configuraciones con CDP y LLDP.',
          logro: 'Dejar operativos y documentados un switch y un router nuevos.',
          previos: [2],
          practica: 'Terminal simulada de Cisco IOS dentro de la clase y laboratorios guiados en Packet Tracer.',
          evaluacion: 'Configurar desde cero una red pequeña siguiendo una hoja de requisitos.',
          fuentes: 'Temario CCNA v2.0 (2.3, 4.1, 4.2), Cisco Packet Tracer.',
          clases: [
            { titulo: 'Cisco IOS: modos, ayuda de la línea de comandos y configuración inicial' },
            { titulo: 'Acceso seguro: contraseñas, usuarios locales y SSH', ref: 'CCNA v2.0 4.1' },
            { titulo: 'Archivos de configuración, respaldos y documentación con CDP y LLDP', ref: 'CCNA v2.0 2.3, 4.2' },
            { titulo: 'Taller: configurar y documentar una red pequeña (evaluación del módulo)' }
          ] },
        { n: 5, titulo: 'Switching y VLAN',
          objetivo: 'Segmentar una red con VLAN y mantenerla estable y redundante en la capa 2.',
          competencias: 'Crear VLAN y puertos de acceso; configurar troncales 802.1Q; enrutar entre VLAN; interpretar Rapid PVST+; agrupar enlaces con EtherChannel (LACP).',
          logro: 'Implementar la red de capa 2 de un edificio con varias áreas.',
          previos: [4],
          practica: 'Laboratorios de Packet Tracer con fallas provocadas para corregir.',
          evaluacion: 'Corregir una red con VLAN mal asignadas, troncales caídos y un bucle.',
          proyecto: 'Red de un edificio con una VLAN por área.',
          fuentes: 'IEEE 802.1Q (VLAN), temario CCNA v2.0 (2.1, 2.2, 2.5).',
          clases: [
            { titulo: 'VLAN: segmentar la red y configurar puertos de acceso', ref: 'CCNA v2.0 2.2' },
            { titulo: 'Troncales 802.1Q y VLAN nativa', ref: 'CCNA v2.0 2.1' },
            { titulo: 'Enrutamiento entre VLAN: router-on-a-stick y SVI', ref: 'CCNA v2.0 2.1' },
            { titulo: 'Spanning Tree (Rapid PVST+): evitar bucles', ref: 'CCNA v2.0 2.5' },
            { titulo: 'EtherChannel con LACP (evaluación del módulo)', ref: 'CCNA v2.0 2.1' }
          ] },
        { n: 6, titulo: 'Enrutamiento IPv4',
          objetivo: 'Conectar varias redes y entender cómo decide un router el camino.',
          competencias: 'Interpretar la tabla de enrutamiento; configurar rutas estáticas (predeterminada, de red, de host y flotante); configurar y verificar OSPFv2 de área única; interpretar la redundancia de puerta de enlace (HSRP y VRRP).',
          logro: 'Enrutar la red de una empresa con varias sedes y diagnosticar fallas de enrutamiento.',
          previos: [5],
          practica: 'Seguir paquetes en el modo simulación; tablas de enrutamiento para interpretar; fallas de OSPF para resolver.',
          evaluacion: 'Diagnosticar una red con rutas faltantes y vecinos OSPF que no se forman.',
          fuentes: 'RFC 2328 (OSPFv2), temario CCNA v2.0 (3.1–3.4).',
          clases: [
            { titulo: 'Cómo decide un router: tabla de enrutamiento, prefijo más largo y métricas', ref: 'CCNA v2.0 3.1' },
            { titulo: 'Rutas estáticas: predeterminada, de red, de host y flotante', ref: 'CCNA v2.0 3.2' },
            { titulo: 'OSPFv2 I: vecinos, router ID y redes punto a punto', ref: 'CCNA v2.0 3.3' },
            { titulo: 'OSPFv2 II: DR/BDR, verificación y fallas comunes', ref: 'CCNA v2.0 3.3' },
            { titulo: 'Redundancia de puerta de enlace: HSRP y VRRP (evaluación del módulo)', ref: 'CCNA v2.0 3.4' }
          ] },
        { n: 7, titulo: 'IPv6',
          objetivo: 'Direccionar y enrutar redes IPv6 y hacerlas convivir con IPv4.',
          competencias: 'Escribir y abreviar direcciones IPv6; reconocer sus tipos; explicar SLAAC, DHCPv6 y NDP; configurar rutas estáticas IPv6 y OSPFv3; diagnosticar IPv6 en doble pila.',
          logro: 'Agregar IPv6 a una red existente sin interrumpir IPv4.',
          previos: [6],
          practica: 'Abreviar y expandir direcciones; planificar prefijos con el bloque de documentación 2001:db8::/32; configurar doble pila en Packet Tracer.',
          evaluacion: 'Migrar a doble pila la red del módulo anterior.',
          fuentes: 'RFC 8200 (IPv6), RFC 4291 (direccionamiento), RFC 3849 (prefijo de documentación), RFC 4861 (NDP), RFC 4862 (SLAAC), RFC 9915 (DHCPv6; reemplaza al RFC 8415), RFC 5340 (OSPFv3), temario CCNA v2.0 (1.4, 3.2, 3.3).',
          clases: [
            { titulo: 'IPv6: formato, abreviación y tipos de direcciones', ref: 'CCNA v2.0 1.4' },
            { titulo: 'Asignación en IPv6: SLAAC, DHCPv6, EUI-64 y NDP', ref: 'CCNA v2.0 1.4' },
            { titulo: 'Rutas estáticas IPv6 y OSPFv3', ref: 'CCNA v2.0 3.2, 3.3' },
            { titulo: 'Doble pila y diagnóstico IPv6 (evaluación del módulo)' }
          ] },
        { n: 8, titulo: 'NAT y redes inalámbricas',
          objetivo: 'Dar salida a Internet con NAT y planificar una red Wi-Fi segura.',
          competencias: 'Configurar NAT estático, dinámico y PAT; explicar bandas, canales, radiofrecuencia e interferencias; comparar WPA2 y WPA3; describir arquitecturas con puntos de acceso autónomos y con controlador.',
          logro: 'Conectar una oficina a Internet y planificar su Wi-Fi.',
          previos: [6],
          practica: 'Configurar NAT/PAT en Packet Tracer; plan de canales para un piso de oficina.',
          evaluacion: 'Configurar la salida a Internet de una oficina y justificar su plan de canales Wi-Fi.',
          fuentes: 'RFC 3022 (NAT), IEEE 802.11 (grupo de trabajo de WLAN), temario CCNA v2.0 (1.5, 2.2, 4.3).',
          clases: [
            { titulo: 'NAT y PAT: salir a Internet con direcciones privadas', ref: 'CCNA v2.0 4.3' },
            { titulo: 'Wi-Fi: bandas, canales, interferencias y seguridad (WPA2 y WPA3)', ref: 'CCNA v2.0 1.5' },
            { titulo: 'Arquitecturas inalámbricas: puntos de acceso autónomos y con controlador (evaluación del módulo)', ref: 'CCNA v2.0 2.2' }
          ] },
        { n: 9, titulo: 'Telecomunicaciones, WAN e Internet',
          objetivo: 'Entender las redes de los proveedores: cómo llega Internet, cómo funcionan las redes móviles y cómo se unen sedes lejanas.',
          competencias: 'Explicar ancho de banda, latencia y medios de transmisión; comparar tecnologías de acceso (cobre, cable, fibra, móvil y satélite); describir las redes móviles 4G y 5G; explicar WAN, VPN IPsec y la interconexión de proveedores con BGP, a nivel conceptual.',
          logro: 'Elegir y justificar la conexión WAN e Internet de una empresa.',
          previos: [3], previosNota: 'Conviene haber hecho el Módulo 6.',
          practica: 'Medir latencia y pérdida con ping y tracert; comparar ofertas de conexión ficticias.',
          evaluacion: 'Comparar tres ofertas de conexión para una empresa ficticia y recomendar una.',
          fuentes: 'ITU-T G.652, ITU-R IMT-2020 (5G), 3GPP, ITU Facts and Figures 2025, RFC 4271 (BGP-4), temario CCNA v2.0 (4.5).',
          clases: [
            { titulo: 'Señales y transmisión: ancho de banda, latencia, pérdida y ruido' },
            { titulo: 'Acceso a Internet: cobre, cable, fibra hasta el hogar, móvil y satélite' },
            { titulo: 'Redes móviles: de 4G a 5G (3GPP e IMT-2020)' },
            { titulo: 'WAN, VPN e Internet: proveedores, IPsec y BGP en concepto (evaluación del módulo)', ref: 'CCNA v2.0 4.5' }
          ] },
        { n: 10, titulo: 'Seguridad, operación y automatización',
          objetivo: 'Proteger los equipos de red, vigilarlos y automatizar su administración.',
          competencias: 'Configurar ACL estándar y extendidas; aplicar seguridad de capa 2; usar AAA con TACACS+ y RADIUS; monitorear con SNMP, syslog y NTP; describir enfoques de gestión (controladores, nube, automatización e infraestructura como código) y usar Ansible; describir la IA agéntica y escribir prompts para la operación de redes.',
          logro: 'Proteger, monitorear y automatizar una red pequeña.',
          previos: [4, 5, 6],
          practica: 'Auditoría de seguridad de una red simulada; lectura de mensajes syslog; ejemplos de JSON y de un playbook de Ansible.',
          evaluacion: 'Auditar y corregir la seguridad de una red simulada.',
          fuentes: 'Temario CCNA v2.0 (4.1, 4.6, 4.7, 5.1–5.6); temario CCNA v1.1 (NTP, APIs REST y JSON).',
          clases: [
            { titulo: 'Listas de control de acceso (ACL) estándar y extendidas', ref: 'CCNA v2.0 4.6' },
            { titulo: 'Seguridad de capa 2: port security, DHCP snooping, DAI, storm control y RA guard', ref: 'CCNA v2.0 4.7' },
            { titulo: 'AAA, TACACS+ y RADIUS para administrar equipos', ref: 'CCNA v2.0 4.1' },
            { titulo: 'Monitoreo: SNMP, syslog y sincronización de hora con NTP', ref: 'CCNA v2.0 5.4, 5.6' },
            { titulo: 'Automatización: controladores, APIs REST, JSON y Ansible', ref: 'CCNA v2.0 5.3, 5.5' },
            { titulo: 'IA en la operación de redes: agentes y prompts (evaluación del módulo)', ref: 'CCNA v2.0 5.1, 5.2' }
          ] },
        { n: 11, titulo: 'Diseño, diagnóstico y proyecto empresarial',
          objetivo: 'Diseñar, implementar, probar y defender la red completa de una empresa.',
          competencias: 'Aplicar diseños jerárquicos (dos y tres niveles, spine-leaf, SOHO y nube); explicar el papel de hipervisores, máquinas virtuales y contenedores; seguir una metodología de diagnóstico por capas; documentar una red; integrar todo lo aprendido en un proyecto.',
          logro: 'Entregar el diseño, la configuración y la documentación de la red de una empresa.',
          previos: [7, 8, 9, 10],
          practica: 'Casos de diagnóstico encadenados; plantillas de documentación de red.',
          evaluacion: 'Rúbrica del proyecto: requisitos cumplidos, pruebas, documentación y defensa.',
          proyecto: 'Proyecto final del curso (ver más arriba).',
          fuentes: 'Temario CCNA v1.1 (1.2, arquitecturas); temario CCNA v2.0 (2.4, diagnóstico).',
          clases: [
            { titulo: 'Diseño de redes: dos y tres niveles, spine-leaf, SOHO, nube y virtualización', ref: 'CCNA v1.1 1.2; CCNA v2.0 1.2' },
            { titulo: 'Metodología de diagnóstico: por capas, comandos show, ping extendido, traceroute y capturas', ref: 'CCNA v2.0 2.4' },
            { titulo: 'Documentación de red: diagramas, tablas de direcciones e inventario' },
            { titulo: 'Proyecto empresarial I: requisitos y diseño' },
            { titulo: 'Proyecto empresarial II: implementación en Packet Tracer' },
            { titulo: 'Proyecto empresarial III: pruebas, informe y defensa' }
          ] }
      ]
    },
    {
      id: 'ia',
      nombre: 'IA: Claude y productividad',
      icono: '🤖',
      tema: 'tema-ia',
      desc: 'Del primer chat a la ingeniería de instrucciones profesional, Claude Code, agentes, skills y automatizaciones, sin depender de la API de pago.',
      duracion: '2 h por clase',
      horasClase: 2,
      meta: 'Usar Claude de forma eficaz, segura y responsable, con una formación completa en ingeniería de instrucciones (prompt engineering) en seis niveles: desde formular una pregunta clara hasta diseñar, evaluar, corregir y reutilizar instrucciones profesionales, y aplicar el context engineering con Claude Code y sus agentes, sin depender de la API de pago.',
      proyectoFinal: 'Biblioteca profesional de prompts para Claude: instrucciones para investigación, análisis de documentos, programación, revisión de código, automatización, planificación de proyectos, y agentes y subagentes, cada una con sus criterios de prueba. Incluye la transformación documentada de instrucciones deficientes en profesionales. Tiene una versión completa con el plan gratuito; la parte de agentes con Claude Code requiere un plan de pago.',
      modulos: [
        { n: 1, titulo: 'Fundamentos de la IA generativa y de Claude',
          objetivo: 'Entender qué es Claude, qué puede y qué no puede hacer, y usarlo de forma segura y responsable.',
          competencias: 'Explicar qué es un modelo de lenguaje y sus límites (errores inventados o «alucinaciones», fecha de conocimiento); distinguir Claude (chat) de Claude Code y lo que incluye cada plan; configurar la privacidad; aplicar el marco de fluidez en IA (Delegación, Descripción, Discernimiento y Diligencia) y la política de uso.',
          logro: 'Usar Claude con criterio, sabiendo cuándo confiar y cuándo verificar.',
          previos: [], previosNota: 'Ninguno. Una cuenta de Claude; el plan gratuito sirve.',
          practica: 'Comparar respuestas con y sin búsqueda web; revisar tu configuración de privacidad; detectar errores en respuestas de ejemplo.',
          evaluacion: 'Examen de conceptos y análisis de tres respuestas: cuál es confiable y por qué.',
          fuentes: 'Claude Academy: «AI Fluency: Framework and foundations» y «AI capabilities and limitations» (oficial); Elements of AI (Universidad de Helsinki); página de planes; centro de privacidad; política de uso.',
          clases: [
            { titulo: '¿Qué es la IA generativa? Modelos de lenguaje, capacidades y límites', plan: 'Gratis', donde: 'Chat de Claude', videos: ['0K5Knnq2ZRk'] },
            { titulo: 'Claude y Claude Code: planes, apps, modelos y límites de uso', plan: 'Gratis', donde: 'Chat de Claude' },
            { titulo: 'Primeros pasos: conversaciones, archivos, búsqueda web y estilos', plan: 'Gratis', donde: 'Chat de Claude' },
            { titulo: 'Fluidez en IA y uso responsable: el marco 4D, privacidad, verificación y política de uso', plan: 'Gratis', donde: 'Chat de Claude', videos: ['W4Ua6XFfX9w', 'EljzyfdYkrc'] }
          ] },
        { n: 2, titulo: 'Prompting · Nivel 1: Fundamentos',
          objetivo: 'Comunicarte con Claude con instrucciones claras, con contexto, objetivo, restricciones y un resultado esperado.',
          competencias: 'Explicar qué es un prompt y cómo funciona una conversación con Claude; distinguir una instrucción vaga de una bien definida; dar contexto, objetivo y restricciones; definir el resultado esperado; reconocer los errores frecuentes al comunicarse con una IA.',
          logro: 'Convertir una petición vaga en una instrucción clara que funcione a la primera.',
          previos: [1],
          practica: 'Reescribir diez peticiones vagas de la vida diaria y de tus cursos, comparando el resultado antes y después con una lista de comprobación.',
          evaluacion: 'Mejorar cinco instrucciones reales y explicar qué cambió y por qué.',
          fuentes: 'Tutorial interactivo de Anthropic (capítulos 1 y 2); guía oficial «Prompting best practices»; DevTalles (terceros).',
          clases: [
            { titulo: '¿Qué es un prompt? Cómo interpreta Claude lo que escribes', plan: 'Gratis', donde: 'Chat de Claude', ref: 'Tutorial de Anthropic, cap. 1: Basic Prompt Structure', videos: ['jrucUmU_l8s'] },
            { titulo: 'Preguntas e instrucciones claras: de lo vago a lo bien definido', plan: 'Gratis', donde: 'Chat de Claude', ref: 'Tutorial de Anthropic, cap. 2: Being Clear and Direct', videos: ['A-uJeV7pSEY'] },
            { titulo: 'Contexto, objetivo y restricciones', plan: 'Gratis', donde: 'Chat de Claude', ref: 'Prompting best practices: «Add context to improve performance»', videos: ['1bXdjvRBvWk'] },
            { titulo: 'Definir el resultado esperado y evitar errores frecuentes (evaluación del módulo)', plan: 'Gratis', donde: 'Chat de Claude', videos: ['UeuZM5Ulf6A'] }
          ] },
        { n: 3, titulo: 'Prompting · Nivel 2: Técnicas fundamentales',
          objetivo: 'Dominar las técnicas básicas que hacen que una instrucción sea precisa y repetible.',
          competencias: 'Asignar roles y responsabilidades; dar instrucciones directas y específicas; delimitar el alcance; usar ejemplos de entrada y salida (few-shot); fijar restricciones y criterios de aceptación; definir el formato de la respuesta; separar instrucciones, datos y contenido de referencia.',
          logro: 'Elegir y combinar la técnica adecuada para cada tarea.',
          previos: [2],
          practica: 'Para una misma tarea, probar la instrucción sin técnica y con cada técnica, y registrar en una tabla qué mejoró.',
          evaluacion: 'Construir una instrucción con rol, ejemplos, criterios de aceptación y formato, y demostrar que cumple los criterios en tres casos distintos.',
          fuentes: 'Tutorial interactivo de Anthropic (capítulos 2 a 5 y 7); guía oficial «Prompting best practices»; video oficial «Prompting 101».',
          clases: [
            { titulo: 'Roles y responsabilidades: asignar un papel a Claude', plan: 'Gratis', donde: 'Chat de Claude', ref: 'Tutorial de Anthropic, cap. 3: Assigning Roles', videos: ['ysPbXH0LpIE'] },
            { titulo: 'Instrucciones directas y específicas; contexto y alcance', plan: 'Gratis', donde: 'Chat de Claude', ref: 'Prompting best practices: «Be clear and direct»' },
            { titulo: 'Ejemplos de entrada y salida (few-shot)', plan: 'Gratis', donde: 'Chat de Claude', ref: 'Tutorial de Anthropic, cap. 7: Using Examples' },
            { titulo: 'Restricciones, criterios de aceptación y formato de la respuesta', plan: 'Gratis', donde: 'Chat de Claude', ref: 'Tutorial de Anthropic, cap. 5: Formatting Output (la parte «Speaking for Claude» ya no aplica a los modelos actuales)', videos: ['JgM54aFX924'] },
            { titulo: 'Separar instrucciones, datos y contenido de referencia (evaluación del módulo)', plan: 'Gratis', donde: 'Chat de Claude', ref: 'Tutorial de Anthropic, cap. 4: Separating Data from Instructions' }
          ] },
        { n: 4, titulo: 'Espacio de trabajo con Claude: proyectos, artefactos, memoria y conectores',
          objetivo: 'Organizar tu trabajo con Claude para no repetir contexto y guardar tus instrucciones.',
          competencias: 'Crear proyectos con instrucciones y conocimiento; crear artefactos y archivos con ejecución de código; usar la memoria; conectar Claude con otras apps mediante conectores (MCP); saber cuándo convienen Research, Claude in Chrome y Cowork según el plan.',
          logro: 'Montar un espacio de trabajo con Claude para cada curso de la academia.',
          previos: [2],
          practica: 'Un proyecto por curso con sus instrucciones; un artefacto de repaso; un conector de prueba.',
          evaluacion: 'Presentar tu espacio de trabajo y un artefacto útil para estudiar.',
          fuentes: 'Centro de ayuda de Claude: Projects, Artifacts, memoria, conectores personalizados (MCP remoto), Research, Claude in Chrome y Cowork.',
          clases: [
            { titulo: 'Proyectos: instrucciones y conocimiento permanentes', plan: 'Gratis (hasta 5 proyectos)', donde: 'Chat de Claude' },
            { titulo: 'Artefactos y archivos: documentos, páginas y datos con ejecución de código', plan: 'Gratis (hay que activar la ejecución de código)', donde: 'Chat de Claude' },
            { titulo: 'Memoria y conectores (MCP) en Claude', plan: 'Gratis con límites (1 conector propio; buscar chats anteriores es de pago)', donde: 'Chat de Claude' },
            { titulo: 'Research, Claude in Chrome y Cowork: cuándo valen la pena (evaluación del módulo)', plan: 'Pago (Pro o superior); la clase muestra la alternativa gratuita', donde: 'Chat de Claude y app de escritorio' }
          ] },
        { n: 5, titulo: 'Prompting · Nivel 3: Prompting estructurado',
          objetivo: 'Diseñar instrucciones estructuradas y reutilizables para tareas largas y con varias condiciones.',
          competencias: 'Organizar instrucciones con etiquetas XML; crear plantillas reutilizables; escribir prompts con varias condiciones; analizar documentos extensos; investigar, comparar y sintetizar; generar informes, tablas, planes y documentación; detectar y eliminar ambigüedades y contradicciones.',
          logro: 'Escribir plantillas de instrucciones que otra persona pueda reutilizar sin explicaciones.',
          previos: [3],
          practica: 'Convertir tres instrucciones de los niveles anteriores en plantillas con etiquetas XML y probarlas con documentos reales (PDF y Word).',
          evaluacion: 'Plantilla de análisis de un documento extenso, con condiciones, formato fijo y una prueba de que no tiene contradicciones.',
          proyecto: 'Plantillas para investigación y para informes, que se suman a tu biblioteca.',
          fuentes: 'Guía oficial «Prompting best practices» («Structure prompts with XML tags», «Long context prompting»); tutorial de Anthropic (capítulo 9).',
          clases: [
            { titulo: 'Etiquetas XML para organizar instrucciones', plan: 'Gratis', donde: 'Chat de Claude', ref: 'Prompting best practices: «Structure prompts with XML tags»', videos: ['ysPbXH0LpIE'] },
            { titulo: 'Plantillas reutilizables y prompts con varias condiciones', plan: 'Gratis', donde: 'Chat de Claude', ref: 'Tutorial de Anthropic, cap. 9: Building Complex Prompts' },
            { titulo: 'Analizar documentos extensos (PDF y Word)', plan: 'Gratis (con límites de uso)', donde: 'Chat de Claude', ref: 'Prompting best practices: «Long context prompting»' },
            { titulo: 'Prompts para investigar, comparar y sintetizar', plan: 'Gratis con búsqueda web; Research es de pago (opcional)', donde: 'Chat de Claude' },
            { titulo: 'Prompts para informes, tablas, planes y documentación', plan: 'Gratis', donde: 'Chat de Claude' },
            { titulo: 'Evitar ambigüedades y contradicciones (evaluación del módulo)', plan: 'Gratis', donde: 'Chat de Claude' }
          ] },
        { n: 6, titulo: 'Prompting · Nivel 4: Avanzado',
          objetivo: 'Resolver tareas complejas con procesos de varias etapas y medir la calidad de las instrucciones.',
          competencias: 'Descomponer problemas complejos; encadenar prompts; mejorar por iteraciones; detectar errores y alucinaciones; verificar información con fuentes; definir criterios de éxito y casos de prueba; evaluar la calidad de las respuestas; mantener una biblioteca de prompts con versiones.',
          logro: 'Demostrar con pruebas que una instrucción funciona, en lugar de suponerlo.',
          previos: [5],
          practica: 'Una hoja de evaluación propia (casos de prueba, criterios y resultados) para comparar versiones de una instrucción directamente en el chat, sin la API.',
          evaluacion: 'Mejorar una instrucción en tres versiones y demostrar con la hoja de evaluación cuál cumple mejor los criterios.',
          proyecto: 'Primera versión de tu biblioteca, con criterios de prueba por instrucción.',
          fuentes: 'Tutorial de Anthropic (capítulos 6 y 8, y apéndice «Chaining Prompts»); documentación oficial «Define success criteria and build evaluations»; artículo oficial «Building effective agents» (encadenamiento de prompts).',
          clases: [
            { titulo: 'Descomponer problemas complejos y encadenar prompts', plan: 'Gratis', donde: 'Chat de Claude', ref: 'Tutorial de Anthropic, apéndice: Chaining Prompts' },
            { titulo: 'Razonamiento paso a paso y mejora por iteraciones', plan: 'Gratis', donde: 'Chat de Claude', ref: 'Tutorial de Anthropic, cap. 6: Precognition (Thinking Step by Step)', videos: ['T9aRN5JkmL8@737'] },
            { titulo: 'Alucinaciones: detectarlas y reducirlas', plan: 'Gratis', donde: 'Chat de Claude', ref: 'Tutorial de Anthropic, cap. 8: Avoiding Hallucinations', videos: ['Y0KidGr9Z2Y'] },
            { titulo: 'Verificar información y trabajar con fuentes', plan: 'Gratis', donde: 'Chat de Claude' },
            { titulo: 'Criterios de éxito, casos de prueba y evaluación de calidad', plan: 'Gratis (en el chat, con una hoja de evaluación)', donde: 'Chat de Claude', ref: 'Documentación oficial: «Define success criteria and build evaluations»', videos: ['KIGBsQqZcNA'] },
            { titulo: 'Biblioteca de prompts reutilizables y control de versiones (evaluación del módulo)', plan: 'Gratis', donde: 'Chat de Claude (proyectos)' }
          ] },
        { n: 7, titulo: 'Skills: procedimientos reutilizables',
          objetivo: 'Convertir tus mejores instrucciones en skills para que Claude las aplique solo cuando corresponde.',
          competencias: 'Explicar qué es un skill y cuándo se activa; usar skills incluidos; convertir una instrucción probada en un skill (SKILL.md); agregar archivos de apoyo y pruebas.',
          logro: 'Crear un skill que automatice una tarea repetida de tu estudio.',
          previos: [4, 6],
          practica: 'Convertir en skill la instrucción que transforma el resumen de una clase en apuntes con el formato de la academia.',
          evaluacion: 'Skill propio funcionando, con instrucciones y casos de prueba.',
          fuentes: 'Centro de ayuda: «What are skills?» y «Use skills in Claude»; documentación de Claude Code: Skills; Claude Academy: «Introduction to agent skills».',
          clases: [
            { titulo: '¿Qué es un skill? Usar los skills incluidos', plan: 'Gratis (hay que activar la ejecución de código)', donde: 'Chat de Claude' },
            { titulo: 'Convertir una instrucción probada en un skill (SKILL.md)', plan: 'Gratis (hay que activar la ejecución de código)', donde: 'Chat de Claude' },
            { titulo: 'Skills con archivos de apoyo y pruebas (evaluación del módulo)', plan: 'Gratis; usarlos en Claude Code requiere plan de pago', donde: 'Chat de Claude' }
          ] },
        { n: 8, titulo: 'Prompting · Nivel 5: Aplicaciones profesionales',
          objetivo: 'Diseñar instrucciones profesionales para los trabajos reales de tus otros cursos y de tu vida laboral.',
          competencias: 'Escribir instrucciones para desarrollar software (HTML, CSS, JavaScript y Python); analizar y corregir código; diseñar páginas web; automatizar tareas; investigar temas técnicos; analizar documentos PDF y Word; elaborar informes y documentación; gestionar proyectos; analizar oportunidades laborales y de negocio; organizar tu productividad personal.',
          logro: 'Tener una instrucción probada para cada tipo de trabajo que haces con frecuencia.',
          previos: [6], previosNota: 'Para las clases de programación se recomienda el Módulo 1 de JavaScript o de Python: aquí no se enseña a programar, se enseña a pedir y a revisar.',
          practica: 'Cada clase usa material real de otro curso de la academia (un ejercicio de JavaScript, un registro de Ciberseguridad, un plan de red) y termina con una instrucción probada para la biblioteca.',
          evaluacion: 'Resolver un encargo profesional ficticio con instrucciones propias y demostrar que el resultado cumple los criterios.',
          proyecto: 'Las instrucciones de este módulo pasan a tu biblioteca.',
          fuentes: 'Guía oficial «Prompting best practices»; materiales de los cursos de JavaScript, Python, Ciberseguridad y Redes de la academia.',
          clases: [
            { titulo: 'Prompts para desarrollar software: HTML, CSS, JavaScript y Python', plan: 'Gratis', donde: 'Chat de Claude' },
            { titulo: 'Prompts para analizar, revisar y corregir código', plan: 'Gratis', donde: 'Chat de Claude' },
            { titulo: 'Prompts para diseñar páginas web: estructura, estilo y accesibilidad', plan: 'Gratis', donde: 'Chat de Claude (artefactos)' },
            { titulo: 'Prompts para automatizar tareas: scripts, fórmulas y flujos', plan: 'Gratis', donde: 'Chat de Claude' },
            { titulo: 'Investigación técnica y análisis de documentos PDF y Word', plan: 'Gratis (con límites de uso)', donde: 'Chat de Claude' },
            { titulo: 'Informes, documentación y gestión de proyectos', plan: 'Gratis', donde: 'Chat de Claude' },
            { titulo: 'Oportunidades laborales, negocios y productividad personal (evaluación del módulo)', plan: 'Gratis', donde: 'Chat de Claude' }
          ] },
        { n: 9, titulo: 'Prompting · Nivel 6: Context engineering y Claude Code',
          objetivo: 'Pasar de escribir instrucciones a diseñar el contexto completo con el que trabaja un agente de programación.',
          competencias: 'Diferenciar prompt engineering y context engineering; diferenciar Claude y Claude Code, con sus requisitos y límites por plan; dar el contexto de un proyecto con CLAUDE.md y reglas; usar skills y comandos reutilizables; planificar antes de implementar; controlar permisos y supervisar acciones; proteger con hooks; conectar herramientas con MCP.',
          logro: 'Configurar un proyecto para que Claude Code trabaje bien y de forma segura.',
          previos: [6], previosNota: 'Desde la clase 2 se necesita un plan de pago (Pro o superior). Recomendado: el Módulo 1 de JavaScript o de Python.',
          practica: 'Un proyecto de práctica en una carpeta aparte (nunca la academia real), configurado paso a paso: CLAUDE.md, reglas, un skill, un hook y un servidor MCP.',
          evaluacion: 'Entregar el proyecto de práctica configurado y una tarea resuelta con modo plan, con las acciones revisadas.',
          fuentes: 'Artículo oficial «Effective context engineering for AI agents» (29/09/2025); documentación de Claude Code: Best practices, Memory, Skills, Hooks, MCP y Permissions; MoureDev (terceros, capítulos indicados).',
          clases: [
            { titulo: 'De prompt engineering a context engineering; Claude frente a Claude Code', plan: 'Gratis (parte conceptual)', donde: 'Chat de Claude', ref: 'Artículo oficial «Effective context engineering for AI agents»' },
            { titulo: 'Instalar Claude Code: permisos y supervisión de acciones', plan: 'Pago (Pro o superior)', donde: 'Claude Code', videos: ['TCq7eZ9Lhc8@755', 'TCq7eZ9Lhc8@2509', 'DAQJvGjlgVM'] },
            { titulo: 'Contexto del proyecto: CLAUDE.md, reglas y memoria', plan: 'Pago (Pro o superior)', donde: 'Claude Code', ref: 'Documentación de Claude Code: Best practices («Keep CLAUDE.md short») y Memory', videos: ['TCq7eZ9Lhc8@4611'] },
            { titulo: 'Planificar antes de implementar: modo plan y verificación', plan: 'Pago (Pro o superior)', donde: 'Claude Code', videos: ['gv0WHhKelSE', 'TCq7eZ9Lhc8@2733'] },
            { titulo: 'Skills y comandos reutilizables en Claude Code', plan: 'Pago (Pro o superior)', donde: 'Claude Code', videos: ['TCq7eZ9Lhc8@7019'] },
            { titulo: 'Hooks y mecanismos de protección', plan: 'Pago (Pro o superior)', donde: 'Claude Code', ref: 'Documentación de Claude Code: Best practices («Enforce the rules that can\'t have exceptions») y Hooks', videos: ['TCq7eZ9Lhc8@10144'] },
            { titulo: 'MCP y herramientas externas (evaluación del módulo)', plan: 'Pago (Pro o superior)', donde: 'Claude Code', videos: ['T4-BdZQUCSE', 'TCq7eZ9Lhc8@7775'] }
          ] },
        { n: 10, titulo: 'Agentes, subagentes y automatización',
          objetivo: 'Delegar trabajo en agentes y subagentes, evaluar lo que entregan y automatizar tareas con seguridad.',
          competencias: 'Explicar cómo trabaja un agente y sus riesgos; delegar en subagentes; diseñar flujos con varios agentes (encadenamiento, enrutamiento, paralelización, orquestador-trabajadores y evaluador-optimizador); evaluar resultados de agentes; automatizar con tareas programadas, scripts y GitHub Actions, conociendo los límites de uso.',
          logro: 'Diseñar, evaluar y dejar funcionando un flujo con varios agentes.',
          previos: [9],
          practica: 'Dos subagentes propios (uno investiga en solo lectura y otro revisa) y una comparación con hacer la tarea en una sola conversación.',
          evaluacion: 'Flujo con al menos dos subagentes, con criterios de evaluación de su resultado y una automatización documentada (qué hace, cuándo corre, qué consume y cómo se apaga).',
          fuentes: 'Artículo oficial «Building effective agents» (19/12/2024); documentación de Claude Code: Sub-agents, tareas programadas, Headless y GitHub Actions; videos oficiales de Anthropic.',
          clases: [
            { titulo: 'Cómo trabaja un agente: herramientas, bucle agéntico y riesgos', plan: 'Pago (Pro o superior)', donde: 'Claude Code', ref: 'Artículo oficial «Building effective agents»', videos: ['LP5OCa20Zpg', 'TCq7eZ9Lhc8@499'] },
            { titulo: 'Subagentes y delegación de tareas', plan: 'Pago (Pro o superior)', donde: 'Claude Code', videos: ['TCq7eZ9Lhc8@9225'] },
            { titulo: 'Flujos con varios agentes: orquestar y combinar resultados', plan: 'Pago (Pro o superior)', donde: 'Claude Code', videos: ['D7_ipDqhtwk'] },
            { titulo: 'Evaluar los resultados de los agentes', plan: 'Pago (Pro o superior)', donde: 'Claude Code', ref: 'Documentación oficial: «Define success criteria and build evaluations»' },
            { titulo: 'Automatizar: tareas programadas, scripts y GitHub Actions (evaluación del módulo)', plan: 'Pago (Pro o superior)', donde: 'Claude Code', videos: ['TCq7eZ9Lhc8@10578'] }
          ] },
        { n: 11, titulo: 'Proyecto integrador: biblioteca profesional de prompts',
          objetivo: 'Construir, probar y defender tu propia biblioteca profesional de prompts para Claude.',
          competencias: 'Diseñar una biblioteca por casos de uso; escribir criterios de prueba; transformar instrucciones deficientes en profesionales y justificar cada cambio; medir si el resultado cumple los criterios; presentar el trabajo.',
          logro: 'Entregar una biblioteca profesional de prompts probada y documentada.',
          previos: [7, 8], previosNota: 'La parte de agentes y automatización requiere los Módulos 9 y 10 y un plan de pago; el resto se hace con el plan gratuito.',
          practica: 'Avances semanales revisados con la rúbrica del proyecto.',
          evaluacion: 'Rúbrica: cobertura de los casos de uso, calidad de cada instrucción, pruebas y resultados, transformaciones justificadas, seguridad y presentación.',
          proyecto: 'Proyecto final del curso (ver más arriba).',
          clases: [
            { titulo: 'Diseño de la biblioteca: casos de uso, plantillas y criterios de prueba', plan: 'Gratis', donde: 'Chat de Claude (proyectos)' },
            { titulo: 'Construcción y pruebas: investigación, documentos, programación, revisión de código y planificación', plan: 'Gratis', donde: 'Chat de Claude' },
            { titulo: 'Automatización, agentes y subagentes; de instrucción deficiente a profesional', plan: 'Gratis (diseño y prueba en el chat) o pago (ejecución con Claude Code)', donde: 'Chat de Claude o Claude Code' },
            { titulo: 'Presentación y defensa: cambios justificados y resultados medidos', plan: 'Gratis', donde: 'Chat de Claude' }
          ] }
      ]
    }
  ];

  // Videos complementarios verificados de Redes (código del video y, opcional, @segundo de inicio)
  const VIDEOS_REDES = {
    '1·1': ['H8W9oMNSuwo'], '1·2': ['4GEHbsBF0Yw', 'iNh-62Mf0O4'], '1·3': ['ieTH5lVhNaY', 'CdAl3cECvJI'], '1·4': ['w_CArT71qHc', 'u2n762WG0Vo'], '1·5': ['a1Im6GYaSno'],
    '2·1': ['3ROdsfEUuhs'], '2·2': ['gVUE2IDwWA0', 'HeZWcZmrQUY'], '2·3': ['bQ8sdpGQu8c', 'IGhd-0di0Qo'], '2·4': ['z-JqCedc9EI'],
    '3·1': ['-7DiO35rbN8', 'LIEACBqlntY'], '3·2': ['4YrYV2io3as'], '3·3': ['hzkleGAC2_Y'], '3·4': ['7XjJqUM0dvg'],
    '4·1': ['IYbtai7Nu2g'], '4·2': ['AvgYqI2qSD4'], '4·3': ['_hnMZBzXRRk'],
    '5·1': ['vzY9DJuIe9U'], '5·2': ['USmPUFzcTlE'], '5·3': ['OkPB028l2eE'], '5·4': ['j-bK-EFt9cY'], '5·5': ['xuo69Joy_Nc'],
    '6·1': ['aHwAm8GYbn8'], '6·2': ['YCv4-_sMvYE'], '6·3': ['pvuaoJ9YzoI'], '6·4': ['VtzfTA21ht0'], '6·5': ['43WnpwQMolo'],
    '7·1': ['LQf1azzcG7s', 'ZNuXyOXae5U'], '7·2': ['BrTMMOXFhDU'],
    '8·1': ['2TZCfTgopeg'], '8·2': ['zuYiktLqNYQ', 'wHXKo9So5y8'], '8·3': ['uX1h0F6wpBY'],
    '9·2': ['CdAl3cECvJI'], '9·3': ['T9Lv4y8519Q'], '9·4': ['BW3fQgdf4-w'],
    '10·1': ['z023_eRUtSo', 'dUttKY_CNXE'], '10·2': ['sHN3jOJIido'], '10·4': ['HXu0Ifj0oWU', 'RaQPSKQ4J5A'], '10·5': ['4tsBgMCPVuc'],
    '11·2': ['4YrYV2io3as']
  };
  nuevos[0].modulos.forEach((m) => m.clases.forEach((c, i) => { const v = VIDEOS_REDES[m.n + '·' + (i + 1)]; if (v) c.videos = v; }));
  nuevos.forEach((curso) => {
    curso.clases = curso.modulos.flatMap((m) => m.clases.map((c, i) => Object.assign(c, { modulo: m.n, orden: i + 1 })));
    window.CATALOGO.push(curso);
  });
})();
