/* Catálogo de cursos y clases que muestra el menú (inicio.html).
   Al crear una clase nueva: agrégala aquí con su "archivo" y su "id" (el mismo id de window.CLASE).
   Las clases sin "archivo" aparecen como "Próximamente". */
window.CATALOGO = [
  {
    id: 'ciberseguridad',
    nombre: 'Ciberseguridad',
    icono: '🛡️',
    tema: '',
    desc: 'De cero a analista SOC: redes, ataques, logs y respuesta a incidentes.',
    duracion: '2 h por clase',
    clases: [
      { n: '01', titulo: '¿Qué es la ciberseguridad? La tríada CIA', archivo: 'cursos/ciberseguridad/clases/clase-01.html', id: 'ciber-01' },
      { n: '02', titulo: 'El computador por dentro: procesos, usuarios y permisos', archivo: 'cursos/ciberseguridad/clases/clase-02.html', id: 'ciber-02' },
      { n: '03', titulo: 'Línea de comandos: PowerShell para analistas', archivo: 'cursos/ciberseguridad/clases/clase-03.html', id: 'ciber-03' },
      { n: '04', titulo: 'Linux básico para seguridad', archivo: 'cursos/ciberseguridad/clases/clase-04.html', id: 'ciber-04' },
      { n: '05', titulo: 'Redes I: IP, MAC, puertos y protocolos', archivo: 'cursos/ciberseguridad/clases/clase-05.html', id: 'ciber-05' },
      { n: '06', titulo: 'Redes II: DNS, HTTP/HTTPS y DHCP' }
    ]
  },
  {
    id: 'ingles',
    nombre: 'Inglés básico',
    icono: '💬',
    tema: 'tema-ingles',
    desc: 'Desde cero, explicado en español y con audio en cada palabra.',
    duracion: '1 h por clase',
    clases: [
      { n: '01', titulo: 'Saludos y despedidas', archivo: 'cursos/ingles/clases/clase-01.html', id: 'ingles-01' },
      { n: '02', titulo: 'Presentarte: my name is…, I am from…', archivo: 'cursos/ingles/clases/clase-02.html', id: 'ingles-02' },
      { n: '03', titulo: 'El abecedario y deletrear', archivo: 'cursos/ingles/clases/clase-03.html', id: 'ingles-03' },
      { n: '04', titulo: 'Números del 0 al 100', archivo: 'cursos/ingles/clases/clase-04.html', id: 'ingles-04' },
      { n: '05', titulo: 'Pronombres (I, you, he, she…)' }
    ]
  },
  {
    id: 'javascript',
    nombre: 'JavaScript',
    icono: '⚡',
    tema: 'tema-js',
    desc: 'Desarrollo web desde cero: páginas interactivas, apps y servidores con Node.js.',
    duracion: '2 h por clase',
    clases: [
      { n: '01', titulo: '¿Qué es programar? Tu primer código en JavaScript', archivo: 'cursos/javascript/clases/clase-01.html', id: 'js-01' },
      { n: '02', titulo: 'Variables y tipos de datos', archivo: 'cursos/javascript/clases/clase-02.html', id: 'js-02' },
      { n: '03', titulo: 'Operadores y textos', archivo: 'cursos/javascript/clases/clase-03.html', id: 'js-03' },
      { n: '04', titulo: 'Condicionales: tu programa toma decisiones', archivo: 'cursos/javascript/clases/clase-04.html', id: 'js-04' },
      { n: '05', titulo: 'Bucles (for, while)' }
    ]
  },
  {
    id: 'python',
    nombre: 'Python',
    icono: '🐍',
    tema: 'tema-python',
    desc: 'Desarrollo de software desde cero: programas, APIs, bases de datos y automatización.',
    duracion: '2 h por clase',
    clases: [
      { n: '01', titulo: '¿Qué es Python? Instalación y tu primer programa', archivo: 'cursos/python/clases/clase-01.html', id: 'py-01' },
      { n: '02', titulo: 'Variables, tipos de datos e input()', archivo: 'cursos/python/clases/clase-02.html', id: 'py-02' },
      { n: '03', titulo: 'Operadores, textos y f-strings', archivo: 'cursos/python/clases/clase-03.html', id: 'py-03' },
      { n: '04', titulo: 'Condicionales: if, elif y else', archivo: 'cursos/python/clases/clase-04.html', id: 'py-04' },
      { n: '05', titulo: 'Bucles (for, while)' }
    ]
  }
];
