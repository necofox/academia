/* Catálogo de cursos, módulos y clases que muestra el menú (inicio.html).
   Organización aprobada en PROPUESTA-ORGANIZACION-CURRICULAR.md (Etapa 1, 10/11/2026).

   - Cada curso tiene "modulos"; cada módulo, sus "clases" en el orden en que se estudian.
   - Una clase lista lleva: n (número de su archivo), titulo, archivo e id (el mismo id de
     window.CLASE). ¡NUNCA cambies el archivo ni el id de una clase existente! El avance
     guardado y sincronizado usa ese id.
   - Una clase sin "archivo" aparece como "Próximamente". Al crearla: usa el siguiente número
     de archivo libre del curso (clase-06, clase-07…) y completa aquí su n, archivo e id, en el
     lugar que ocupa dentro de su módulo.
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
    modulos: [
      { n: 1, titulo: 'Fundamentos de ciberseguridad', objetivo: 'Entender qué protege la ciberseguridad, con qué principios y con qué marcos.', clases: [
        { n: '01', titulo: '¿Qué es la ciberseguridad? La tríada CIA', archivo: 'cursos/ciberseguridad/clases/clase-01.html', id: 'ciber-01' },
        { titulo: 'Principios y marcos de seguridad: defensa en profundidad, mínimo privilegio, NIST CSF 2.0 y ética' },
        { titulo: 'Gestión del riesgo e higiene digital: contraseñas, MFA, actualizaciones y copias de seguridad' }
      ] },
      { n: 2, titulo: 'Sistemas operativos para analistas', objetivo: 'Saber cómo funcionan Windows y Linux por dentro, y dónde mira un analista.', clases: [
        { n: '02', titulo: 'El computador por dentro: procesos, usuarios y permisos', archivo: 'cursos/ciberseguridad/clases/clase-02.html', id: 'ciber-02' },
        { n: '03', titulo: 'Línea de comandos: PowerShell para analistas', archivo: 'cursos/ciberseguridad/clases/clase-03.html', id: 'ciber-03' },
        { titulo: 'Windows a fondo: servicios, registro, tareas programadas y persistencia' },
        { n: '04', titulo: 'Linux básico para seguridad', archivo: 'cursos/ciberseguridad/clases/clase-04.html', id: 'ciber-04' },
        { titulo: 'Linux para analistas: procesos, servicios, journalctl, cron y persistencia' }
      ] },
      { n: 3, titulo: 'Redes y comunicaciones', objetivo: 'Entender cómo viajan los datos y cómo se ven los ataques en la red.', clases: [
        { n: '05', titulo: 'Redes I: IP, MAC, puertos y protocolos', archivo: 'cursos/ciberseguridad/clases/clase-05.html', id: 'ciber-05' },
        { titulo: 'Redes II: DNS, HTTP y HTTPS (TLS y certificados)' },
        { titulo: 'Servicios y arquitectura de red: DHCP, ARP, NAT, VPN y firewalls' },
        { titulo: 'Análisis de tráfico con Wireshark' },
        { titulo: 'Ataques de red y redes inalámbricas, desde la detección' }
      ] },
      { n: 4, titulo: 'Criptografía, identidad y acceso', objetivo: 'Entender cómo se protegen los datos y cómo se controla quién entra.', clases: [
        { titulo: 'Criptografía aplicada: cifrado, hash, firmas y certificados' },
        { titulo: 'Autenticación e identidades: contraseñas, MFA, SSO y OAuth básico' },
        { titulo: 'Active Directory y Entra ID para analistas' }
      ] },
      { n: 5, titulo: 'Amenazas, vulnerabilidades y ataques', objetivo: 'Conocer al adversario y las debilidades que aprovecha.', clases: [
        { titulo: 'Malware: tipos y comportamiento' },
        { titulo: 'Ingeniería social y phishing' },
        { titulo: 'Vulnerabilidades: CVE, CVSS, catálogo KEV y gestión de parches' },
        { titulo: 'Seguridad web: OWASP Top 10:2025, con laboratorio local' },
        { titulo: 'Cómo atacan: Cyber Kill Chain y MITRE ATT&CK' }
      ] },
      { n: 6, titulo: 'Registros y monitoreo de seguridad', objetivo: 'Encontrar señales de ataque en los registros y automatizar su detección.', clases: [
        { titulo: 'Registros: qué son, de dónde vienen y cómo se gestionan' },
        { titulo: 'Eventos de Windows y Sysmon' },
        { titulo: 'Registros de Linux, servidores web y firewall' },
        { titulo: 'SIEM I: conceptos, ingesta de datos y búsquedas' },
        { titulo: 'SIEM II: correlación, paneles y alertas' },
        { titulo: 'Reglas de detección con Sigma' }
      ] },
      { n: 7, titulo: 'Análisis de eventos e inteligencia de amenazas', objetivo: 'Decidir rápido y bien qué es real, qué es grave y qué hacer.', clases: [
        { titulo: 'Triage de alertas: severidad, falsos positivos y escalamiento' },
        { titulo: 'Análisis de correos sospechosos: cabeceras, SPF, DKIM y DMARC' },
        { titulo: 'Indicadores de compromiso e inteligencia de amenazas' },
        { titulo: 'Análisis básico de malware sin ejecutarlo' }
      ] },
      { n: 8, titulo: 'Respuesta a incidentes', objetivo: 'Responder a un incidente de principio a fin.', clases: [
        { titulo: 'El ciclo de respuesta a incidentes (NIST SP 800-61r3)' },
        { titulo: 'Contención, erradicación y recuperación' },
        { titulo: 'Forense básico: evidencia, cadena de custodia y línea de tiempo' },
        { titulo: 'Playbooks y comunicación del incidente' },
        { titulo: 'Redacción del informe de incidente' }
      ] },
      { n: 9, titulo: 'Operaciones SOC y carrera', objetivo: 'Trabajar como lo hace un SOC real y prepararte para buscar empleo.', clases: [
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
    modulos: [
      { n: 1, titulo: 'Primeros pasos', objetivo: 'Presentarte, deletrear, contar y manejar expresiones básicas (nivel A1).', clases: [
        { n: '01', titulo: 'Saludos y despedidas', archivo: 'cursos/ingles/clases/clase-01.html', id: 'ingles-01' },
        { n: '02', titulo: 'Presentarte: my name is…, I am from…', archivo: 'cursos/ingles/clases/clase-02.html', id: 'ingles-02' },
        { n: '03', titulo: 'El abecedario y deletrear', archivo: 'cursos/ingles/clases/clase-03.html', id: 'ingles-03' },
        { n: '04', titulo: 'Números del 0 al 100', archivo: 'cursos/ingles/clases/clase-04.html', id: 'ingles-04' },
        { titulo: 'El verbo to be completo: pronombres, afirmar, negar y preguntar' },
        { titulo: 'Artículos, plurales y this / that / these / those' },
        { titulo: 'Días, meses, fechas y la hora' },
        { titulo: 'Repaso oral y evaluación del módulo' }
      ] },
      { n: 2, titulo: 'Mi vida diaria', objetivo: 'Hablar de tu rutina, tu familia, tu casa, tus compras y tus gustos.', clases: [
        { titulo: 'Presente simple: rutinas' },
        { titulo: 'Preguntas y negaciones con do / does' },
        { titulo: 'Familia y posesivos' },
        { titulo: 'There is / there are: la casa y la ciudad' },
        { titulo: 'Preposiciones de lugar y de tiempo (in, on, at)' },
        { titulo: 'Comida y compras (some, any, How much…?)' },
        { titulo: 'Can / can\'t: habilidades y permisos' },
        { titulo: 'Adjetivos y descripciones' },
        { titulo: 'Evaluación y proyecto del módulo' }
      ] },
      { n: 3, titulo: 'Contar y planear', objetivo: 'Hablar del pasado y del futuro, y comparar.', clases: [
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
      { n: 4, titulo: 'Comunicar con confianza', objetivo: 'Mantener conversaciones simples y escribir mensajes útiles.', clases: [
        { titulo: 'Presente perfecto: experiencias' },
        { titulo: 'Must, have to y should' },
        { titulo: 'Condicionales 0 y 1' },
        { titulo: 'Phrasal verbs frecuentes' },
        { titulo: 'Opinar, estar de acuerdo y en desacuerdo' },
        { titulo: 'Correos y mensajes simples' },
        { titulo: 'Llamadas y reuniones en línea' },
        { titulo: 'Evaluación: conversación' }
      ] },
      { n: 5, titulo: 'Inglés para tecnología', objetivo: 'Usar el inglés en un trabajo de tecnología.', clases: [
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
    modulos: [
      { n: 1, titulo: 'Fundamentos de programación', objetivo: 'Pensar como programador y dominar la lógica básica.', clases: [
        { n: '01', titulo: '¿Qué es programar? Tu primer código en JavaScript', archivo: 'cursos/javascript/clases/clase-01.html', id: 'js-01' },
        { n: '02', titulo: 'Variables y tipos de datos', archivo: 'cursos/javascript/clases/clase-02.html', id: 'js-02' },
        { n: '03', titulo: 'Operadores y textos', archivo: 'cursos/javascript/clases/clase-03.html', id: 'js-03' },
        { n: '04', titulo: 'Condicionales: tu programa toma decisiones', archivo: 'cursos/javascript/clases/clase-04.html', id: 'js-04' },
        { titulo: 'Bucles: for, while y for...of' },
        { titulo: 'Funciones, parámetros y valores de retorno' },
        { titulo: 'Arrays y sus métodos (map, filter, find)' },
        { titulo: 'Objetos y JSON' },
        { titulo: 'Depuración, try/catch y proyecto: adivina el número' }
      ] },
      { n: 2, titulo: 'HTML y CSS para programadores', objetivo: 'Construir la estructura y el diseño que JavaScript va a manejar.', clases: [
        { titulo: 'HTML semántico y formularios' },
        { titulo: 'CSS: selectores, cascada y modelo de caja' },
        { titulo: 'Flexbox, Grid y diseño adaptable' },
        { titulo: 'Accesibilidad web (WCAG) básica' }
      ] },
      { n: 3, titulo: 'JavaScript en el navegador', objetivo: 'Crear páginas interactivas.', clases: [
        { titulo: 'El DOM' },
        { titulo: 'Eventos' },
        { titulo: 'Formularios y validación' },
        { titulo: 'localStorage y JSON' },
        { titulo: 'Módulos de JavaScript (ES)' },
        { titulo: 'Proyecto: app de tareas' }
      ] },
      { n: 4, titulo: 'Asincronía y APIs', objetivo: 'Comunicarse con servidores y servicios externos.', clases: [
        { titulo: 'Asincronía: callbacks, promesas y async/await' },
        { titulo: 'HTTP, REST y fetch' },
        { titulo: 'Errores de red y estados de carga' },
        { titulo: 'Proyecto: app con una API pública' }
      ] },
      { n: 5, titulo: 'Herramientas del desarrollador', objetivo: 'Trabajar con las herramientas de un equipo profesional.', clases: [
        { titulo: 'Terminal y estructura de un proyecto' },
        { titulo: 'Git y GitHub' },
        { titulo: 'npm y calidad de código (ESLint, Prettier)' },
        { titulo: 'Pruebas automáticas' }
      ] },
      { n: 6, titulo: 'Node.js y backend', objetivo: 'Construir el servidor de una aplicación.', clases: [
        { titulo: 'Node.js: el entorno de ejecución y sus módulos' },
        { titulo: 'Servidor HTTP y conceptos de backend' },
        { titulo: 'Express: rutas y middleware' },
        { titulo: 'API REST completa (crear, leer, actualizar y borrar)' },
        { titulo: 'Bases de datos con SQLite' },
        { titulo: 'Autenticación y seguridad web (OWASP)' },
        { titulo: 'Pruebas de la API y despliegue' }
      ] },
      { n: 7, titulo: 'Proyecto final', objetivo: 'Diseñar, construir y presentar una aplicación completa.', clases: [
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
    modulos: [
      { n: 1, titulo: 'Fundamentos', objetivo: 'Escribir y ejecutar programas con lógica básica.', clases: [
        { n: '01', titulo: '¿Qué es Python? Instalación y tu primer programa', archivo: 'cursos/python/clases/clase-01.html', id: 'py-01' },
        { n: '02', titulo: 'Variables, tipos de datos e input()', archivo: 'cursos/python/clases/clase-02.html', id: 'py-02' },
        { n: '03', titulo: 'Operadores, textos y f-strings', archivo: 'cursos/python/clases/clase-03.html', id: 'py-03' },
        { n: '04', titulo: 'Condicionales: if, elif y else', archivo: 'cursos/python/clases/clase-04.html', id: 'py-04' },
        { titulo: 'Bucles for y while' },
        { titulo: 'Funciones' },
        { titulo: 'Errores y excepciones (try/except) y proyecto: menú de consola' }
      ] },
      { n: 2, titulo: 'Estructuras de datos', objetivo: 'Elegir la estructura de datos adecuada para cada problema.', clases: [
        { titulo: 'Listas y tuplas' },
        { titulo: 'Diccionarios y conjuntos' },
        { titulo: 'Cadenas a fondo y comprensiones de listas' },
        { titulo: 'Proyecto: agenda de contactos' }
      ] },
      { n: 3, titulo: 'Archivos, módulos y entorno', objetivo: 'Guardar datos y organizar proyectos.', clases: [
        { titulo: 'Archivos de texto, CSV y JSON' },
        { titulo: 'Módulos y biblioteca estándar (pathlib, datetime)' },
        { titulo: 'pip, entornos virtuales y paquetes' },
        { titulo: 'Proyecto: gestor de gastos' }
      ] },
      { n: 4, titulo: 'Programación orientada a objetos', objetivo: 'Modelar problemas reales con objetos.', clases: [
        { titulo: 'Clases y objetos' },
        { titulo: 'Herencia y composición' },
        { titulo: 'Dataclasses y anotaciones de tipo' },
        { titulo: 'Proyecto: sistema de inventario' }
      ] },
      { n: 5, titulo: 'Calidad de software', objetivo: 'Escribir código mantenible y probado.', clases: [
        { titulo: 'Git y GitHub' },
        { titulo: 'Pruebas con pytest' },
        { titulo: 'Estilo, calidad y registros (PEP 8, linters y logging)' },
        { titulo: 'Depuración profesional' }
      ] },
      { n: 6, titulo: 'Datos y bases de datos', objetivo: 'Guardar y consultar datos.', clases: [
        { titulo: 'SQL básico con SQLite' },
        { titulo: 'El módulo sqlite3 en Python' },
        { titulo: 'Expresiones regulares' }
      ] },
      { n: 7, titulo: 'Internet y automatización', objetivo: 'Automatizar tareas reales.', clases: [
        { titulo: 'HTTP y APIs con requests' },
        { titulo: 'Automatizar archivos y carpetas' },
        { titulo: 'Scripts de línea de comandos (argparse) y tareas programadas' },
        { titulo: 'Reportes en Excel' }
      ] },
      { n: 8, titulo: 'Desarrollo de aplicaciones', objetivo: 'Construir y publicar una aplicación.', clases: [
        { titulo: 'APIs con FastAPI' },
        { titulo: 'API con base de datos' },
        { titulo: 'Seguridad de aplicaciones: contraseñas con hash, validación y secretos' },
        { titulo: 'Interfaz web sencilla' },
        { titulo: 'Despliegue' }
      ] },
      { n: 9, titulo: 'Proyecto final', objetivo: 'Diseñar, construir y presentar una aplicación completa.', clases: [
        { titulo: 'Diseño del proyecto' },
        { titulo: 'Construcción guiada' },
        { titulo: 'Presentación y revisión' }
      ] },
      { n: 'E', titulo: 'Python aplicado a la ciberseguridad', opcional: true, objetivo: 'Usar Python en tareas de un analista de seguridad (opcional).', clases: [
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
