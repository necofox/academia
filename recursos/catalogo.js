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
      { n: '03', titulo: 'Línea de comandos: PowerShell básico' },
      { n: '04', titulo: 'Linux básico para seguridad' }
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
      { n: '02', titulo: 'Presentarte: my name is…, I am from…' },
      { n: '03', titulo: 'El abecedario y deletrear' }
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
      { n: '02', titulo: 'Variables y tipos de datos' }
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
      { n: '02', titulo: 'Variables, tipos de datos e input()' }
    ]
  }
];
