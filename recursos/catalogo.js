/* Catálogo de cursos, módulos y clases que muestra el menú (inicio.html).
   Organización aprobada en PROPUESTA-ORGANIZACION-CURRICULAR.md (Etapa 1, 10/11/2026).
   Es la fuente única: las rutas de aprendizaje (cursos/<curso>/ruta-aprendizaje.md) se generan
   desde aquí con  node herramientas/generar-rutas.js

   - Cada curso tiene "modulos"; cada módulo, sus "clases" en el orden en que se estudian.
   - Una clase lista lleva: n (número de su archivo), titulo, archivo e id (el mismo id de
     window.CLASE). ¡NUNCA cambies el archivo ni el id de una clase existente! El avance
     guardado y sincronizado usa ese id.
   - Una clase sin "archivo" aparece como "Próximamente". Al crearla: usa el siguiente número
     de archivo libre del curso (clase-06, clase-07…) y completa aquí su n, archivo e id, en el
     lugar que ocupa dentro de su módulo. Después ejecuta generar-rutas.js.
   - Datos de cada módulo (tomados de la propuesta): objetivo, competencias, logro (lo que serás
     capaz de hacer al terminar), previos (números de módulo que conviene haber terminado),
     previosNota, evaluacion, proyecto y fuentes (fuentes previstas: se verifican al crear cada
     clase). El menú usa titulo, objetivo y clases; el resto lo usan las rutas.
   - Al final del archivo se genera curso.clases (lista plana con modulo y orden en cada clase)
     para las herramientas que recorren todas las clases. */
window.CATALOGO = [
  {
    id: 'ciberseguridad',
    nombre: 'Ciberseguridad',
    icono: '🛡️',
    tema: '',
    desc: 'De cero a analista SOC: redes, ataques, logs y respuesta a incidentes.',
    duracion: '2 h por clase',
    horasClase: 2,
    meta: 'Llegar al nivel de entrada de un analista SOC. La referencia es el rol "Defensive Cybersecurity" del marco NICE: analizar los datos de las herramientas de defensa para mitigar riesgos. La secuencia sigue las funciones del NIST CSF 2.0 (Gobernar, Identificar, Proteger, Detectar, Responder, Recuperar) y la guía de respuesta a incidentes NIST SP 800-61r3.',
    proyectoFinal: 'Mini-SOC personal: un laboratorio con máquinas virtuales propias y un SIEM gratuito. Se simula un incidente, se detecta, se responde y se entrega el informe. Si tu PC no tiene recursos suficientes, se hace en simulación.',
    modulos: [
      { n: 1, titulo: 'Fundamentos de ciberseguridad',
        objetivo: 'Entender qué protege la ciberseguridad, con qué principios y con qué marcos.',
        competencias: 'Usar la tríada CIA y el vocabulario de riesgo; aplicar principios básicos (defensa en profundidad, mínimo privilegio, separación de funciones); ubicar una tarea dentro de las 6 funciones del CSF 2.0; actuar dentro de la ética y la legalidad.',
        logro: 'Explicar riesgos y principios de seguridad y proponer controles básicos.',
        previos: [],
        evaluacion: 'Caso integrador: analizar una pequeña empresa ficticia y proponer controles.',
        proyecto: '"Mi hogar digital seguro": inventario de activos propios, amenazas, riesgos y controles.',
        fuentes: 'NIST CSF 2.0, CIS Controls v8.1, glosario NIST.',
        clases: [
          { n: '01', titulo: '¿Qué es la ciberseguridad? La tríada CIA', archivo: 'cursos/ciberseguridad/clases/clase-01.html', id: 'ciber-01' },
          { titulo: 'Principios y marcos de seguridad: defensa en profundidad, mínimo privilegio, NIST CSF 2.0 y ética' },
          { titulo: 'Gestión del riesgo e higiene digital: contraseñas, MFA, actualizaciones y copias de seguridad' }
        ] },
      { n: 2, titulo: 'Sistemas operativos para analistas',
        objetivo: 'Saber cómo funcionan Windows y Linux por dentro, y dónde mira un analista.',
        competencias: 'Distinguir procesos legítimos de sospechosos; manejar PowerShell y la terminal de Linux; leer permisos; conocer los lugares donde el malware suele instalarse para sobrevivir a un reinicio (persistencia).',
        logro: 'Revisar un equipo Windows o Linux y detectar procesos, cuentas o persistencia sospechosos.',
        previos: [1],
        evaluacion: 'Revisar un equipo Windows y otro Linux en simulación y redactar los hallazgos.',
        proyecto: 'Opcional: instalar Linux en una máquina virtual propia, como laboratorio personal.',
        fuentes: 'Microsoft Learn (Sysmon, eventos), MITRE ATT&CK (táctica de persistencia), póster SANS "Hunt Evil".',
        clases: [
          { n: '02', titulo: 'El computador por dentro: procesos, usuarios y permisos', archivo: 'cursos/ciberseguridad/clases/clase-02.html', id: 'ciber-02' },
          { n: '03', titulo: 'Línea de comandos: PowerShell para analistas', archivo: 'cursos/ciberseguridad/clases/clase-03.html', id: 'ciber-03' },
          { titulo: 'Windows a fondo: servicios, registro, tareas programadas y persistencia' },
          { n: '04', titulo: 'Linux básico para seguridad', archivo: 'cursos/ciberseguridad/clases/clase-04.html', id: 'ciber-04' },
          { titulo: 'Linux para analistas: procesos, servicios, journalctl, cron y persistencia' }
        ] },
      { n: 3, titulo: 'Redes y comunicaciones',
        objetivo: 'Entender cómo viajan los datos y cómo se ven los ataques en la red.',
        competencias: 'Direccionamiento IP, puertos y protocolos; DNS, HTTP y HTTPS; servicios de red; leer capturas de tráfico; reconocer ataques de red comunes.',
        logro: 'Interpretar tráfico y servicios de red y reconocer ataques de red.',
        previos: [2], previosNota: 'Los comandos de red usan PowerShell.',
        evaluacion: 'Analizar una captura de red de práctica y explicar qué ocurrió.',
        proyecto: 'Mapa de la red de tu propia casa, solo con tus dispositivos.',
        fuentes: 'RFC 1918, RFC 5737, RFC 9110, documentación de Wireshark, IANA (puertos).',
        clases: [
          { n: '05', titulo: 'Redes I: IP, MAC, puertos y protocolos', archivo: 'cursos/ciberseguridad/clases/clase-05.html', id: 'ciber-05' },
          { titulo: 'Redes II: DNS, HTTP y HTTPS (TLS y certificados)' },
          { titulo: 'Servicios y arquitectura de red: DHCP, ARP, NAT, VPN, segmentación y firewalls' },
          { titulo: 'Análisis de tráfico con Wireshark (capturas de ejemplo)' },
          { titulo: 'Ataques de red y redes inalámbricas, desde la detección' }
        ] },
      { n: 4, titulo: 'Criptografía, identidad y acceso',
        objetivo: 'Entender cómo se protegen los datos y cómo se controla quién entra.',
        competencias: 'Distinguir cifrado simétrico y asimétrico, hash y firma; entender los certificados; autenticación, MFA e inicio de sesión único; conceptos de Active Directory y Entra ID.',
        logro: 'Explicar cifrado, certificados e identidades, y detectar cuentas comprometidas.',
        previos: [1, 2, 3],
        evaluacion: 'Caso de una cuenta comprometida.',
        fuentes: 'Glosario NIST; Microsoft Learn (evento 4624).',
        clases: [
          { titulo: 'Criptografía aplicada: cifrado, hash, firmas y certificados' },
          { titulo: 'Autenticación e identidades: contraseñas, MFA, SSO y OAuth básico' },
          { titulo: 'Active Directory y Entra ID para analistas: usuarios, grupos y eventos de inicio de sesión' }
        ] },
      { n: 5, titulo: 'Amenazas, vulnerabilidades y ataques',
        objetivo: 'Conocer al adversario y las debilidades que aprovecha.',
        competencias: 'Clasificar malware; reconocer ingeniería social; usar CVE y CVSS; entender las fallas web más comunes; describir un ataque con la Cyber Kill Chain y MITRE ATT&CK.',
        logro: 'Clasificar amenazas y vulnerabilidades y describir un ataque con ATT&CK.',
        previos: [1, 2, 3],
        evaluacion: 'Asignar técnicas de ATT&CK a un ataque narrado.',
        fuentes: 'MITRE ATT&CK, OWASP Top 10, CVE.org, FIRST (CVSS v4.0).',
        clases: [
          { titulo: 'Malware: tipos y comportamiento' },
          { titulo: 'Ingeniería social y phishing' },
          { titulo: 'Vulnerabilidades: CVE, CVSS, catálogo KEV y gestión de parches' },
          { titulo: 'Seguridad web: OWASP Top 10:2025, con laboratorio local' },
          { titulo: 'Cómo atacan: Cyber Kill Chain y MITRE ATT&CK (con la evaluación del módulo)' }
        ] },
      { n: 6, titulo: 'Registros y monitoreo de seguridad',
        objetivo: 'Encontrar señales de ataque en los registros y automatizar su detección.',
        competencias: 'Gestión de registros; eventos clave de Windows y Sysmon; registros de Linux, web y firewall; búsquedas y correlación en un SIEM; reglas de detección con Sigma.',
        logro: 'Buscar y correlacionar eventos en un SIEM y escribir reglas de detección.',
        previos: [2, 3, 5],
        evaluacion: 'Escribir una regla que detecte un ataque visto en el curso.',
        proyecto: 'Un mini-SOC casero en una máquina virtual, si tu PC lo permite, o en simulación.',
        fuentes: 'NIST SP 800-92, Microsoft Learn (eventos y Sysmon), repositorio SigmaHQ, documentación de Wazuh.',
        clases: [
          { titulo: 'Registros: qué son, de dónde vienen y cómo se gestionan' },
          { titulo: 'Eventos de Windows (4624, 4625, 4688, 4720, 7045) y Sysmon' },
          { titulo: 'Registros de Linux, servidores web y firewall' },
          { titulo: 'SIEM I: conceptos, ingesta de datos y búsquedas' },
          { titulo: 'SIEM II: correlación, paneles y alertas' },
          { titulo: 'Reglas de detección con Sigma' }
        ] },
      { n: 7, titulo: 'Análisis de eventos e inteligencia de amenazas',
        objetivo: 'Decidir rápido y bien qué es real, qué es grave y qué hacer.',
        competencias: 'Priorizar alertas y separar verdaderos de falsos positivos; analizar correos (SPF, DKIM, DMARC); usar indicadores de compromiso (IOC) e inteligencia de amenazas; hacer análisis básico de malware sin ejecutarlo.',
        logro: 'Priorizar alertas y analizar correos, indicadores y muestras sin riesgo.',
        previos: [5, 6],
        evaluacion: 'Atender una cola de 10 alertas simuladas.',
        fuentes: 'RFC 7489 (DMARC), MITRE ATT&CK.',
        clases: [
          { titulo: 'Triage de alertas: severidad, falsos positivos y escalamiento' },
          { titulo: 'Análisis de correos sospechosos: cabeceras, SPF, DKIM y DMARC' },
          { titulo: 'Indicadores de compromiso e inteligencia de amenazas' },
          { titulo: 'Análisis básico de malware sin ejecutarlo' }
        ] },
      { n: 8, titulo: 'Respuesta a incidentes',
        objetivo: 'Responder a un incidente de principio a fin.',
        competencias: 'Aplicar el ciclo de respuesta de NIST SP 800-61r3; contener, erradicar y recuperar; preservar evidencia; usar playbooks; redactar un informe.',
        logro: 'Responder a un incidente y redactar el informe.',
        previos: [6, 7],
        evaluacion: 'Simulacro de ransomware con informe final.',
        fuentes: 'NIST SP 800-61r3, guía #StopRansomware de CISA.',
        clases: [
          { titulo: 'El ciclo de respuesta a incidentes (NIST SP 800-61r3)' },
          { titulo: 'Contención, erradicación y recuperación' },
          { titulo: 'Forense básico: evidencia, cadena de custodia y línea de tiempo' },
          { titulo: 'Playbooks y comunicación del incidente' },
          { titulo: 'Redacción del informe de incidente' }
        ] },
      { n: 9, titulo: 'Operaciones SOC y carrera',
        objetivo: 'Trabajar como lo hace un SOC real y prepararte para buscar empleo.',
        competencias: 'Roles, turnos y métricas de un SOC; búsqueda proactiva de amenazas (threat hunting) básica; monitoreo en la nube; resolver un caso de punta a punta; presentarte en una entrevista técnica.',
        logro: 'Trabajar en un turno SOC simulado y presentarte a una entrevista.',
        previos: [6, 7, 8],
        proyecto: 'Proyecto final del curso (ver más arriba).',
        fuentes: 'NCSC (SOC), Centro Canadiense de Ciberseguridad (SOC), marco NICE.',
        clases: [
          { titulo: 'Cómo funciona un SOC: roles, turnos y métricas' },
          { titulo: 'Búsqueda proactiva de amenazas (threat hunting) básica' },
          { titulo: 'Seguridad y monitoreo en la nube' },
          { titulo: 'Simulacro integral SOC: de la alerta al informe' },
          { titulo: 'Carrera: certificaciones, portafolio y entrevista técnica' }
        ] }
    ]
  },
  {
    id: 'ingles',
    nombre: 'Inglés básico',
    icono: '💬',
    tema: 'tema-ingles',
    desc: 'Desde cero, explicado en español y con audio en cada palabra.',
    duracion: '1 h por clase',
    horasClase: 1,
    meta: 'Cubrir el nivel A1 completo y el A2 del Marco Común Europeo de Referencia (MCER), con pasos hacia el B1, y terminar con inglés aplicado a la tecnología.',
    proyectoFinal: 'Presentación técnica oral: grabar la explicación en inglés de un proyecto propio, seguida de una entrevista simulada.',
    modulos: [
      { n: 1, titulo: 'Primeros pasos',
        objetivo: 'Presentarte, deletrear, contar y manejar expresiones básicas.',
        competencias: 'Según el descriptor A1 del MCER, presentarse y presentar a otros, y hacer y responder preguntas sobre datos personales; pronunciar el alfabeto y los números.',
        logro: 'Presentarte, deletrear, contar y decir fechas y horas (A1 inicial).',
        previos: [],
        evaluacion: 'Presentación personal grabada en audio, con criterios.',
        fuentes: 'MCER (escala global), diccionario Cambridge (pronunciación).',
        clases: [
          { n: '01', titulo: 'Saludos y despedidas', archivo: 'cursos/ingles/clases/clase-01.html', id: 'ingles-01' },
          { n: '02', titulo: 'Presentarte: my name is…, I am from…', archivo: 'cursos/ingles/clases/clase-02.html', id: 'ingles-02' },
          { n: '03', titulo: 'El abecedario y deletrear', archivo: 'cursos/ingles/clases/clase-03.html', id: 'ingles-03' },
          { n: '04', titulo: 'Números del 0 al 100', archivo: 'cursos/ingles/clases/clase-04.html', id: 'ingles-04' },
          { titulo: 'El verbo to be completo: pronombres, afirmar, negar y preguntar' },
          { titulo: 'Artículos, plurales y this / that / these / those' },
          { titulo: 'Días, meses, fechas y la hora' },
          { titulo: 'Repaso oral y evaluación del módulo con un diálogo actuado (role-play)' }
        ] },
      { n: 2, titulo: 'Mi vida diaria',
        objetivo: 'Hablar de tu rutina, tu familia, tu casa, tus compras y tus gustos.',
        competencias: 'Presente simple, posesivos, there is/are, preposiciones, can, adjetivos.',
        logro: 'Describir tu vida diaria (A1).',
        previos: [1],
        proyecto: 'Audio de 1 minuto: "Mi día".',
        fuentes: 'Gramática A1–A2 de British Council LearnEnglish.',
        clases: [
          { titulo: 'Presente simple: rutinas' },
          { titulo: 'Preguntas y negaciones con do / does' },
          { titulo: 'Familia y posesivos (my, \'s)' },
          { titulo: 'There is / there are: la casa y la ciudad' },
          { titulo: 'Preposiciones de lugar y de tiempo (in, on, at)' },
          { titulo: 'Comida y compras (some, any, How much…?)' },
          { titulo: 'Can / can\'t: habilidades y permisos' },
          { titulo: 'Adjetivos y descripciones' },
          { titulo: 'Evaluación y proyecto del módulo' }
        ] },
      { n: 3, titulo: 'Contar y planear',
        objetivo: 'Hablar del pasado y del futuro, y comparar.',
        competencias: 'Presente continuo, pasado simple, futuro, comparativos y superlativos, dar indicaciones.',
        logro: 'Contar experiencias pasadas y planes (A2).',
        previos: [2],
        proyecto: 'Relato oral de un viaje o de un fin de semana.',
        fuentes: 'British Council (gramática A1–A2), MCER (descriptor A2).',
        clases: [
          { titulo: 'Presente continuo' },
          { titulo: 'El pasado de to be' },
          { titulo: 'Pasado simple: verbos regulares' },
          { titulo: 'Pasado simple: verbos irregulares' },
          { titulo: 'Futuro con going to' },
          { titulo: 'Will: predicciones y ofrecimientos' },
          { titulo: 'Comparativos y superlativos' },
          { titulo: 'Indicaciones y transporte' },
          { titulo: 'Evaluación y proyecto del módulo' }
        ] },
      { n: 4, titulo: 'Comunicar con confianza',
        objetivo: 'Mantener conversaciones simples y escribir mensajes útiles.',
        competencias: 'Presente perfecto, obligación y consejo, condicionales 0 y 1, verbos compuestos (phrasal verbs), dar opiniones, correos simples, llamadas y reuniones.',
        logro: 'Conversar sobre temas conocidos y escribir mensajes simples (A2 y pasos hacia el B1).',
        previos: [3],
        evaluacion: 'Conversación (última clase del módulo).',
        fuentes: 'British Council (gramática B1–B2), MCER (descriptor B1).',
        clases: [
          { titulo: 'Presente perfecto: experiencias' },
          { titulo: 'Must, have to y should' },
          { titulo: 'Condicionales 0 y 1' },
          { titulo: 'Phrasal verbs frecuentes' },
          { titulo: 'Opinar, estar de acuerdo y en desacuerdo' },
          { titulo: 'Correos y mensajes simples' },
          { titulo: 'Llamadas y reuniones en línea' },
          { titulo: 'Evaluación: conversación' }
        ] },
      { n: 5, titulo: 'Inglés para tecnología',
        objetivo: 'Usar el inglés en un trabajo de tecnología.',
        competencias: 'Leer documentación y mensajes de error, escribir tickets e informes cortos, participar en reuniones breves de equipo y presentarte en una entrevista.',
        logro: 'Usar el inglés en tareas técnicas básicas.',
        previos: [4], previosNota: 'Se puede adelantar en paralelo si hace falta.',
        proyecto: 'Proyecto final del curso (última clase del módulo).',
        clases: [
          { titulo: 'Vocabulario de computación y redes' },
          { titulo: 'Leer documentación técnica y mensajes de error' },
          { titulo: 'Tickets, incidentes y reportes cortos' },
          { titulo: 'Reuniones diarias de equipo (stand-up)' },
          { titulo: 'Entrevista de trabajo en tecnología' },
          { titulo: 'Proyecto final: presentación técnica oral' }
        ] }
    ]
  },
  {
    id: 'javascript',
    nombre: 'JavaScript',
    icono: '⚡',
    tema: 'tema-js',
    desc: 'Desarrollo web desde cero: páginas interactivas, apps y servidores con Node.js.',
    duracion: '2 h por clase',
    horasClase: 2,
    meta: 'Desarrollar aplicaciones web completas (frontend y backend con Node.js).',
    proyectoFinal: 'Aplicación web completa, con frontend, API en Node.js y base de datos. Por ejemplo, un gestor de tareas o un panel de alertas.',
    modulos: [
      { n: 1, titulo: 'Fundamentos de programación',
        objetivo: 'Pensar como programador y dominar la lógica básica.',
        competencias: 'Variables y tipos, operadores, condicionales, bucles, funciones, arrays, objetos, JSON y depuración.',
        logro: 'Resolver problemas con lógica y estructuras de datos.',
        previos: [],
        evaluacion: 'El proyecto del módulo, con retos autocorregidos.',
        proyecto: 'Juego de adivinar el número (última clase del módulo).',
        fuentes: 'Guía de JavaScript de MDN (en español), especificación ECMA-262.',
        clases: [
          { n: '01', titulo: '¿Qué es programar? Tu primer código en JavaScript', archivo: 'cursos/javascript/clases/clase-01.html', id: 'js-01' },
          { n: '02', titulo: 'Variables y tipos de datos', archivo: 'cursos/javascript/clases/clase-02.html', id: 'js-02' },
          { n: '03', titulo: 'Operadores y textos', archivo: 'cursos/javascript/clases/clase-03.html', id: 'js-03' },
          { n: '04', titulo: 'Condicionales: tu programa toma decisiones', archivo: 'cursos/javascript/clases/clase-04.html', id: 'js-04' },
          { titulo: 'Bucles: for, while y for...of' },
          { titulo: 'Funciones, parámetros y valores de retorno' },
          { titulo: 'Arrays y sus métodos (map, filter, find)' },
          { titulo: 'Objetos y JSON' },
          { titulo: 'Depuración, manejo de errores (try/catch) y proyecto: adivina el número' }
        ] },
      { n: 2, titulo: 'HTML y CSS para programadores',
        objetivo: 'Construir la estructura y el diseño que JavaScript va a manejar.',
        competencias: 'HTML semántico y formularios; selectores, cascada y modelo de caja; Flexbox, Grid y diseño adaptable; accesibilidad básica.',
        logro: 'Maquetar páginas semánticas, adaptables y accesibles.',
        previos: [], previosNota: 'Ninguno obligatorio; conviene haber hecho el Módulo 1.',
        proyecto: 'Una página personal adaptable al celular.',
        fuentes: 'Ruta de aprendizaje web de MDN, WCAG 2 (W3C).',
        clases: [
          { titulo: 'HTML semántico y formularios' },
          { titulo: 'CSS: selectores, cascada y modelo de caja' },
          { titulo: 'Flexbox, Grid y diseño adaptable' },
          { titulo: 'Accesibilidad web (WCAG) básica' }
        ] },
      { n: 3, titulo: 'JavaScript en el navegador',
        objetivo: 'Crear páginas interactivas.',
        competencias: 'Manejar el DOM y los eventos, validar formularios, guardar datos en el navegador y organizar el código en módulos.',
        logro: 'Crear aplicaciones interactivas en el navegador.',
        previos: [1, 2],
        proyecto: 'App de tareas (última clase del módulo).',
        fuentes: 'MDN.',
        clases: [
          { titulo: 'El DOM' },
          { titulo: 'Eventos' },
          { titulo: 'Formularios y validación' },
          { titulo: 'localStorage y JSON' },
          { titulo: 'Módulos de JavaScript (ES)' },
          { titulo: 'Proyecto: app de tareas' }
        ] },
      { n: 4, titulo: 'Asincronía y APIs',
        objetivo: 'Comunicarse con servidores y servicios externos.',
        competencias: 'Promesas y async/await; HTTP, REST y fetch; manejar errores y estados de carga.',
        logro: 'Consumir APIs de forma asíncrona.',
        previos: [3],
        proyecto: 'App con una API pública (última clase del módulo).',
        fuentes: 'MDN, RFC 9110 (HTTP).',
        clases: [
          { titulo: 'Asincronía: callbacks, promesas y async/await' },
          { titulo: 'HTTP, REST y fetch' },
          { titulo: 'Errores de red y estados de carga' },
          { titulo: 'Proyecto: app con una API pública' }
        ] },
      { n: 5, titulo: 'Herramientas del desarrollador',
        objetivo: 'Trabajar con las herramientas de un equipo profesional.',
        competencias: 'Terminal y estructura de proyectos; Git y GitHub; npm y herramientas de calidad de código; pruebas automáticas.',
        logro: 'Trabajar con Git, npm y pruebas automáticas.',
        previos: [1], previosNota: 'Se recomienda haber hecho el Módulo 3.',
        fuentes: 'Libro Pro Git (en español), documentación de Node.js.',
        clases: [
          { titulo: 'Terminal y estructura de un proyecto' },
          { titulo: 'Git y GitHub' },
          { titulo: 'npm y calidad de código (ESLint, Prettier)' },
          { titulo: 'Pruebas automáticas (la herramienta se decide al investigar la clase)' }
        ] },
      { n: 6, titulo: 'Node.js y backend',
        objetivo: 'Construir el servidor de una aplicación.',
        competencias: 'Entorno de ejecución Node.js; servidor HTTP; Express; API REST; base de datos SQLite; autenticación y seguridad web; pruebas y despliegue.',
        logro: 'Construir una API segura con Node.js, Express y SQLite.',
        previos: [4, 5],
        fuentes: 'Documentación de Node.js (versiones LTS), Express, guías de OWASP (Cheat Sheet Series).',
        clases: [
          { titulo: 'Node.js: el entorno de ejecución y sus módulos' },
          { titulo: 'Servidor HTTP y conceptos de backend' },
          { titulo: 'Express: rutas y middleware' },
          { titulo: 'API REST completa (crear, leer, actualizar y borrar)' },
          { titulo: 'Bases de datos con SQLite' },
          { titulo: 'Autenticación y seguridad web (OWASP)' },
          { titulo: 'Pruebas de la API y despliegue' }
        ] },
      { n: 7, titulo: 'Proyecto final',
        objetivo: 'Diseñar, construir y presentar una aplicación completa.',
        logro: 'Entregar una aplicación web completa.',
        previos: [], previosNota: 'La propuesta no fija previos; conviene haber terminado los módulos anteriores.',
        proyecto: 'Proyecto final del curso (ver más arriba).',
        clases: [
          { titulo: 'Diseño del proyecto' },
          { titulo: 'Construcción guiada' },
          { titulo: 'Presentación y revisión' }
        ] }
    ]
  },
  {
    id: 'python',
    nombre: 'Python',
    icono: '🐍',
    tema: 'tema-python',
    desc: 'Desarrollo de software desde cero: programas, APIs, bases de datos y automatización.',
    duracion: '2 h por clase',
    horasClase: 2,
    meta: 'Desarrollar programas y aplicaciones con buenas prácticas profesionales. La secuencia sigue el orden del tutorial oficial de Python: estructuras de datos, luego errores y excepciones, luego clases y, al final, entornos virtuales.',
    proyectoFinal: 'Aplicación con API, base de datos y automatización. Por ejemplo, un sistema de inventario con reportes automáticos.',
    modulos: [
      { n: 1, titulo: 'Fundamentos',
        objetivo: 'Escribir y ejecutar programas con lógica básica.',
        competencias: 'Entorno de trabajo (terminal y VS Code), variables y tipos, entrada de datos, operadores, f-strings, condicionales, bucles, funciones y excepciones.',
        logro: 'Escribir programas con lógica, funciones y manejo de errores.',
        previos: [],
        proyecto: 'Menú de consola (última clase del módulo).',
        fuentes: 'Tutorial oficial de Python (en español), PEP 8.',
        clases: [
          { n: '01', titulo: '¿Qué es Python? Instalación y tu primer programa', archivo: 'cursos/python/clases/clase-01.html', id: 'py-01' },
          { n: '02', titulo: 'Variables, tipos de datos e input()', archivo: 'cursos/python/clases/clase-02.html', id: 'py-02' },
          { n: '03', titulo: 'Operadores, textos y f-strings', archivo: 'cursos/python/clases/clase-03.html', id: 'py-03' },
          { n: '04', titulo: 'Condicionales: if, elif y else', archivo: 'cursos/python/clases/clase-04.html', id: 'py-04' },
          { titulo: 'Bucles for y while' },
          { titulo: 'Funciones' },
          { titulo: 'Errores y excepciones (try/except) y proyecto: menú de consola' }
        ] },
      { n: 2, titulo: 'Estructuras de datos',
        objetivo: 'Elegir la estructura adecuada para cada problema.',
        logro: 'Elegir y usar las estructuras de datos adecuadas.',
        previos: [1],
        proyecto: 'Agenda de contactos (última clase del módulo).',
        clases: [
          { titulo: 'Listas y tuplas' },
          { titulo: 'Diccionarios y conjuntos' },
          { titulo: 'Cadenas a fondo y comprensiones de listas' },
          { titulo: 'Proyecto: agenda de contactos' }
        ] },
      { n: 3, titulo: 'Archivos, módulos y entorno',
        objetivo: 'Guardar datos y organizar proyectos.',
        logro: 'Trabajar con archivos y entornos virtuales.',
        previos: [2],
        proyecto: 'Gestor de gastos (última clase del módulo).',
        fuentes: 'Documentación oficial de venv y guía de empaquetado de Python.',
        clases: [
          { titulo: 'Archivos de texto, CSV y JSON' },
          { titulo: 'Módulos y biblioteca estándar (pathlib, datetime)' },
          { titulo: 'pip, entornos virtuales y paquetes' },
          { titulo: 'Proyecto: gestor de gastos' }
        ] },
      { n: 4, titulo: 'Programación orientada a objetos',
        objetivo: 'Modelar problemas reales con objetos.',
        logro: 'Diseñar programas orientados a objetos.',
        previos: [3],
        proyecto: 'Sistema de inventario (última clase del módulo).',
        clases: [
          { titulo: 'Clases y objetos' },
          { titulo: 'Herencia y composición' },
          { titulo: 'Dataclasses y anotaciones de tipo' },
          { titulo: 'Proyecto: sistema de inventario' }
        ] },
      { n: 5, titulo: 'Calidad de software',
        objetivo: 'Código mantenible y probado.',
        logro: 'Versionar, probar y mantener tu código.',
        previos: [4],
        fuentes: 'Documentación de pytest, PEP 8, libro Pro Git.',
        clases: [
          { titulo: 'Git y GitHub' },
          { titulo: 'Pruebas con pytest' },
          { titulo: 'Estilo, calidad y registros (PEP 8, linters y logging)' },
          { titulo: 'Depuración profesional' }
        ] },
      { n: 6, titulo: 'Datos y bases de datos',
        objetivo: 'Guardar y consultar datos.',
        logro: 'Guardar y consultar datos con SQL.',
        previos: [3],
        fuentes: 'Documentación oficial de sqlite3.',
        clases: [
          { titulo: 'SQL básico con SQLite' },
          { titulo: 'El módulo sqlite3 en Python' },
          { titulo: 'Expresiones regulares' }
        ] },
      { n: 7, titulo: 'Internet y automatización',
        objetivo: 'Automatizar tareas reales.',
        logro: 'Automatizar tareas y usar APIs.',
        previos: [3, 6],
        fuentes: 'Documentación de Requests.',
        clases: [
          { titulo: 'HTTP y APIs con requests' },
          { titulo: 'Automatizar archivos y carpetas' },
          { titulo: 'Scripts de línea de comandos (argparse) y tareas programadas' },
          { titulo: 'Reportes en Excel' }
        ] },
      { n: 8, titulo: 'Desarrollo de aplicaciones',
        objetivo: 'Construir y publicar una aplicación.',
        logro: 'Construir y publicar una aplicación.',
        previos: [5, 6, 7],
        fuentes: 'Documentación de FastAPI, guías de OWASP.',
        clases: [
          { titulo: 'APIs con FastAPI' },
          { titulo: 'API con base de datos' },
          { titulo: 'Seguridad de aplicaciones: contraseñas con hash, validación y secretos' },
          { titulo: 'Interfaz web sencilla' },
          { titulo: 'Despliegue' }
        ] },
      { n: 9, titulo: 'Proyecto final',
        objetivo: 'Diseñar, construir y presentar una aplicación completa.',
        logro: 'Entregar un proyecto completo.',
        previos: [], previosNota: 'La propuesta no fija previos; conviene haber terminado los módulos anteriores.',
        proyecto: 'Proyecto final del curso (ver más arriba).',
        clases: [
          { titulo: 'Diseño del proyecto' },
          { titulo: 'Construcción guiada' },
          { titulo: 'Presentación y revisión' }
        ] },
      { n: 'E', titulo: 'Python aplicado a la ciberseguridad', opcional: true,
        objetivo: 'Usar Python en tareas de un analista de seguridad (opcional).',
        previos: [7], previosNota: 'Se recomienda, sin ser obligatorio, el Módulo 6 de Ciberseguridad.',
        clases: [
          { titulo: 'Analizar registros de autenticación' },
          { titulo: 'Hashes e integridad de archivos' },
          { titulo: 'Automatizar consultas de indicadores de compromiso' }
        ] }
    ]
  }
];

// Lista plana de clases de cada curso (con su módulo y su orden dentro del módulo)
window.CATALOGO.forEach((curso) => {
  curso.clases = curso.modulos.flatMap((m) => m.clases.map((c, i) => Object.assign(c, { modulo: m.n, orden: i + 1 })));
});
