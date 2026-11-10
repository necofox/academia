# Propuesta de organización curricular de la academia

> **Estado:** propuesta para revisión. **No implementada.** No se modificó ninguna clase, ni
> `academia.js`, `academia.css` o `catalogo.js`, ni el repositorio privado de progreso. No se
> publicó nada en GitHub.
> **Fecha:** 10 de noviembre de 2026.
> **Norma aplicada:** `PROMPT-MAESTRO.md`.

---

## Índice

1. Estructura general de la academia
2. Ciberseguridad por módulos
3. Inglés por módulos
4. JavaScript por módulos
5. Python por módulos
6. Mapa de ubicación de las 17 clases existentes
7. Clases nuevas recomendadas
8. Clases que necesitan actualización o ampliación
9. Competencias al finalizar cada módulo
10. Duración de módulos y cursos
11. Justificación pedagógica
12. Proyectos integradores
13. Fuentes consultadas y estado de verificación
14. Decisiones que necesito que apruebes

---

## 1. Estructura general de la academia

```
ACADEMIA
└── CURSO (Ciberseguridad · Inglés · JavaScript · Python)
    └── MÓDULO (agrupa clases que desarrollan una competencia)
        └── CLASE (2 h; Inglés 1 h) con las 9 secciones del prompt maestro
            ├── ACTIVIDADES (con pistas antes de la solución)
            ├── EVALUACIÓN de la clase (examen autocorregible)
            └── PRÁCTICA AUTÓNOMA (con criterios para comprobarla)
        ├── EVALUACIÓN DEL MÓDULO (caso integrador)
        └── PROYECTO DEL MÓDULO (cuando corresponde)
    └── PROYECTO FINAL DEL CURSO
```

**Convenciones:**
- Un módulo dura la suma de sus clases. La cantidad de clases depende del contenido, no de una cifra fija.
- Clases existentes: se marcan con ★ y su archivo (por ejemplo, ★ `clase-01`).
- Clases nuevas: se marcan con «nueva». Ninguna se crea en esta fase.
- La evaluación del módulo se hace dentro de su última clase o en una clase de taller. No se agregan horas aparte.

### Compatibilidad con la arquitectura actual (importante)

- **Los archivos y los `id` actuales no cambian** (`ciber-01`, `js-02`, etc.). El avance sincronizado
  (`localStorage` y `progreso.json`) usa esos `id` como claves. Renumerarlos haría perder o
  confundir el avance.
- **Propuesta:** el orden por módulos viviría solo en `catalogo.js`, con dos campos nuevos por clase:
  `modulo` y `orden`. Las clases nuevas usarían el siguiente número libre de archivo
  (`clase-06`, `clase-07`…), aunque se muestren en otro lugar dentro de su módulo. El menú
  mostraría "Módulo 1 · Clase 2" en lugar del número de archivo.
- Esto exigiría cambiar más adelante, **con tu aprobación**, `catalogo.js` e `inicio.html` (el menú).
  **No hace falta tocar el motor** (`academia.js`). El texto "Clase 0X" del encabezado de cada
  página se ajustaría cuando se actualice cada clase.

---

## 2. Curso de Ciberseguridad (2 h por clase)

**Meta del curso:** llegar al nivel de entrada de un analista SOC. La referencia es el rol
"Defensive Cybersecurity" del marco NICE: *analizar los datos de las herramientas de defensa para
mitigar riesgos*. La secuencia sigue las funciones del NIST CSF 2.0 (Gobernar, Identificar,
Proteger, Detectar, Responder, Recuperar) y la guía de respuesta a incidentes NIST SP 800-61r3.

### Módulo 1 · Fundamentos de ciberseguridad (3 clases · 6 h)
- **Objetivo:** entender qué protege la ciberseguridad, con qué principios y con qué marcos.
- **Competencias:** usar la tríada CIA y el vocabulario de riesgo; aplicar principios básicos
  (defensa en profundidad, mínimo privilegio, separación de funciones); ubicar una tarea dentro
  de las 6 funciones del CSF 2.0; actuar dentro de la ética y la legalidad.
- **Previos:** ninguno.
- **Clases:**
  1. ★ `clase-01` ¿Qué es la ciberseguridad? (ya en el estándar nuevo).
  2. nueva · Principios y marcos de seguridad: defensa en profundidad, mínimo privilegio, NIST CSF 2.0, CIS Controls, ética y legalidad.
  3. nueva · Gestión del riesgo e higiene digital: matriz de probabilidad por impacto, contraseñas, gestores de contraseñas, MFA, actualizaciones y copias de seguridad.
- **Evaluación:** caso integrador. Analizar una pequeña empresa ficticia y proponer controles.
- **Proyecto:** "Mi hogar digital seguro": inventario de activos propios, amenazas, riesgos y controles.
- **Fuentes:** NIST CSF 2.0, CIS Controls v8.1, glosario NIST (sección 13).

### Módulo 2 · Sistemas operativos para analistas (5 clases · 10 h)
- **Objetivo:** saber cómo funcionan Windows y Linux por dentro, y dónde mira un analista.
- **Competencias:** distinguir procesos legítimos de sospechosos; manejar PowerShell y la terminal de Linux; leer permisos; conocer los lugares donde el malware suele instalarse para sobrevivir a un reinicio (persistencia).
- **Previos:** Módulo 1.
- **Clases:**
  1. ★ `clase-02` El computador por dentro: procesos, usuarios y permisos.
  2. ★ `clase-03` PowerShell para analistas.
  3. nueva · Windows a fondo: servicios, registro de Windows, tareas programadas y persistencia.
  4. ★ `clase-04` Linux básico para seguridad.
  5. nueva · Linux para analistas: procesos, servicios (systemd), journalctl, cron y persistencia.
- **Evaluación:** revisar un equipo Windows y otro Linux en simulación y redactar los hallazgos.
- **Proyecto (opcional):** instalar Linux en una máquina virtual propia, como laboratorio personal.
- **Fuentes:** Microsoft Learn (Sysmon, eventos), MITRE ATT&CK (táctica de persistencia), póster SANS "Hunt Evil" (ya citado en las clases).

### Módulo 3 · Redes y comunicaciones (5 clases · 10 h)
- **Objetivo:** entender cómo viajan los datos y cómo se ven los ataques en la red.
- **Competencias:** direccionamiento IP, puertos y protocolos; DNS, HTTP y HTTPS; servicios de red; leer capturas de tráfico; reconocer ataques de red comunes.
- **Previos:** Módulo 2 (los comandos de red usan PowerShell).
- **Clases:**
  1. ★ `clase-05` Redes I: IP, MAC, puertos y protocolos.
  2. nueva · Redes II: DNS, HTTP y HTTPS (TLS y certificados).
  3. nueva · Servicios y arquitectura de red: DHCP, ARP, NAT, VPN, segmentación y firewalls.
  4. nueva · Análisis de tráfico con Wireshark (capturas de ejemplo).
  5. nueva · Ataques de red y redes inalámbricas, desde la detección: suplantación, DNS y wifi.
- **Evaluación:** analizar una captura de red de práctica y explicar qué ocurrió.
- **Proyecto:** mapa de la red de tu propia casa, solo con tus dispositivos.
- **Fuentes:** RFC 1918, RFC 5737, RFC 9110, documentación de Wireshark, IANA (puertos).

### Módulo 4 · Criptografía, identidad y acceso (3 clases · 6 h)
- **Objetivo:** entender cómo se protegen los datos y cómo se controla quién entra.
- **Competencias:** distinguir cifrado simétrico y asimétrico, hash y firma; entender los certificados; autenticación, MFA e inicio de sesión único; conceptos de Active Directory y Entra ID.
- **Previos:** Módulos 1 a 3.
- **Clases:**
  1. nueva · Criptografía aplicada: cifrado, hash, firmas y certificados.
  2. nueva · Autenticación y gestión de identidades: contraseñas, MFA, inicio de sesión único (SSO) y OAuth básico.
  3. nueva · Active Directory y Entra ID para analistas: usuarios, grupos y eventos de inicio de sesión.
- **Evaluación:** caso de una cuenta comprometida.
- **Fuentes:** glosario NIST; Microsoft Learn (evento 4624).

### Módulo 5 · Amenazas, vulnerabilidades y ataques (5 clases · 10 h)
- **Objetivo:** conocer al adversario y las debilidades que aprovecha.
- **Competencias:** clasificar malware; reconocer ingeniería social; usar CVE y CVSS; entender las fallas web más comunes; describir un ataque con la Cyber Kill Chain y MITRE ATT&CK.
- **Previos:** Módulos 1 a 3.
- **Clases:**
  1. nueva · Malware: tipos y comportamiento.
  2. nueva · Ingeniería social y phishing.
  3. nueva · Vulnerabilidades: CVE, CVSS, catálogo KEV y gestión de parches.
  4. nueva · Seguridad web: OWASP Top 10:2025, con laboratorio local.
  5. nueva · Cómo atacan: Cyber Kill Chain y MITRE ATT&CK, más la evaluación del módulo.
- **Evaluación:** asignar técnicas de ATT&CK a un ataque narrado.
- **Fuentes:** MITRE ATT&CK, OWASP Top 10, CVE.org, FIRST (CVSS v4.0).

### Módulo 6 · Registros y monitoreo de seguridad (6 clases · 12 h)
- **Objetivo:** encontrar señales de ataque en los registros y automatizar su detección.
- **Competencias:** gestión de registros; eventos clave de Windows y Sysmon; registros de Linux, web y firewall; búsquedas y correlación en un SIEM; reglas de detección con Sigma.
- **Previos:** Módulos 2, 3 y 5.
- **Clases:**
  1. nueva · Registros: qué son, de dónde vienen y cómo se gestionan.
  2. nueva · Eventos de Windows (4624, 4625, 4688, 4720, 7045) y Sysmon.
  3. nueva · Registros de Linux, servidores web y firewall. Amplía, sin repetir, lo visto en la `clase-04`.
  4. nueva · SIEM I: conceptos, ingesta de datos y búsquedas (laboratorio con Wazuh u otro SIEM gratuito).
  5. nueva · SIEM II: correlación, paneles y alertas.
  6. nueva · Reglas de detección con Sigma.
- **Evaluación:** escribir una regla que detecte un ataque visto en el curso.
- **Proyecto:** un mini-SOC casero en una máquina virtual, si tu PC lo permite, o en simulación.
- **Fuentes:** NIST SP 800-92, Microsoft Learn (eventos y Sysmon), repositorio SigmaHQ, documentación de Wazuh.

### Módulo 7 · Análisis de eventos e inteligencia de amenazas (4 clases · 8 h)
- **Objetivo:** decidir rápido y bien qué es real, qué es grave y qué hacer.
- **Competencias:** priorizar alertas y separar verdaderos de falsos positivos; analizar correos (SPF, DKIM, DMARC); usar indicadores de compromiso (IOC) e inteligencia de amenazas; hacer análisis básico de malware sin ejecutarlo.
- **Previos:** Módulos 5 y 6.
- **Clases:**
  1. nueva · Triage de alertas: severidad, falsos positivos y escalamiento.
  2. nueva · Análisis de correos sospechosos: cabeceras, SPF, DKIM y DMARC.
  3. nueva · Indicadores de compromiso e inteligencia de amenazas, sin subir datos sensibles.
  4. nueva · Análisis básico de malware sin ejecutarlo: hashes, cadenas de texto e informes de sandbox.
- **Evaluación:** atender una cola de 10 alertas simuladas.
- **Fuentes:** RFC 7489 (DMARC), MITRE ATT&CK.

### Módulo 8 · Respuesta a incidentes (5 clases · 10 h)
- **Objetivo:** responder a un incidente de principio a fin.
- **Competencias:** aplicar el ciclo de respuesta de NIST SP 800-61r3; contener, erradicar y recuperar; preservar evidencia; usar playbooks; redactar un informe.
- **Previos:** Módulos 6 y 7.
- **Clases:**
  1. nueva · El ciclo de respuesta a incidentes (SP 800-61r3 y CSF 2.0).
  2. nueva · Contención, erradicación y recuperación.
  3. nueva · Forense básico: evidencia, cadena de custodia y línea de tiempo.
  4. nueva · Playbooks y comunicación del incidente.
  5. nueva · Redacción del informe de incidente.
- **Evaluación:** simulacro de ransomware con informe final.
- **Fuentes:** NIST SP 800-61r3, guía #StopRansomware de CISA.

### Módulo 9 · Operaciones SOC y carrera (5 clases · 10 h)
- **Objetivo:** trabajar como lo hace un SOC real y prepararte para buscar empleo.
- **Competencias:** roles, turnos y métricas de un SOC; búsqueda proactiva de amenazas (threat hunting) básica; monitoreo en la nube; resolver un caso de punta a punta; presentarte en una entrevista técnica.
- **Previos:** Módulos 6 a 8.
- **Clases:**
  1. nueva · Cómo funciona un SOC: roles, turnos y métricas.
  2. nueva · Búsqueda proactiva de amenazas (threat hunting) básica.
  3. nueva · Seguridad y monitoreo en la nube.
  4. nueva · Simulacro integral SOC, de la alerta al informe.
  5. nueva · Carrera: certificaciones, portafolio y entrevista técnica.
- **Proyecto final del curso:** ver la sección 12.
- **Fuentes:** NCSC (SOC), Centro Canadiense de Ciberseguridad (SOC), marco NICE.

**Total del curso: 41 clases (5 existentes y 36 nuevas) · 82 horas.**

---

## 3. Curso de Inglés (1 h por clase)

**Meta del curso:** cubrir el nivel A1 completo y el A2 del Marco Común Europeo de Referencia
(MCER), con pasos hacia el B1, y terminar con inglés aplicado a la tecnología.

> **Transparencia:** Cambridge English estima entre 180 y 200 horas de aprendizaje guiado para
> el nivel A2 Key, y entre 350 y 400 para el B1 Preliminary. Este curso son 40 horas de clase,
> así que **no basta por sí solo para alcanzar el B1**. La meta realista es dominar el A1 y
> avanzar en el A2. La práctica autónoma diaria de cada clase es indispensable.

### Módulo 1 · Primeros pasos (8 clases · 8 h)
- **Objetivo:** presentarte, deletrear, contar y manejar expresiones básicas.
- **Competencias:** según el descriptor A1 del MCER, *presentarse y presentar a otros, y hacer y
  responder preguntas sobre datos personales*; pronunciar el alfabeto y los números.
- **Previos:** ninguno.
- **Clases:**
  1. ★ `clase-01` Saludos y despedidas.
  2. ★ `clase-02` Presentarte.
  3. ★ `clase-03` El abecedario y deletrear.
  4. ★ `clase-04` Números del 0 al 100.
  5. nueva · El verbo *to be* completo: todos los pronombres, afirmar, negar y preguntar. Continúa lo introducido en la `clase-02`.
  6. nueva · Artículos, plurales y *this/that/these/those*.
  7. nueva · Días, meses, fechas y la hora.
  8. nueva · Repaso oral y evaluación del módulo con un diálogo actuado (role-play).
- **Evaluación:** presentación personal grabada en audio, con criterios.
- **Fuentes:** MCER (escala global), diccionario Cambridge (pronunciación).

### Módulo 2 · Mi vida diaria (9 clases · 9 h)
- **Objetivo:** hablar de tu rutina, tu familia, tu casa, tus compras y tus gustos.
- **Competencias:** presente simple, posesivos, *there is/are*, preposiciones, *can*, adjetivos.
- **Previos:** Módulo 1.
- **Clases:** 9 Presente simple: rutinas · 10 Preguntas y negaciones con *do/does* · 11 Familia y posesivos (*my*, *'s*) · 12 *There is/are*: la casa y la ciudad · 13 Preposiciones de lugar y de tiempo (*in/on/at*) · 14 Comida y compras (*some/any*, *How much…?*) · 15 *Can/can't*: habilidades y permisos · 16 Adjetivos y descripciones · 17 Evaluación y proyecto.
- **Proyecto:** audio de 1 minuto: "Mi día".
- **Fuentes:** gramática A1–A2 de British Council LearnEnglish.

### Módulo 3 · Contar y planear (9 clases · 9 h)
- **Objetivo:** hablar del pasado y del futuro, y comparar.
- **Competencias:** presente continuo, pasado simple, futuro, comparativos y superlativos, dar indicaciones.
- **Previos:** Módulo 2.
- **Clases:** 18 Presente continuo · 19 Pasado de *to be* · 20 Pasado simple: verbos regulares · 21 Pasado simple: verbos irregulares · 22 Futuro con *going to* · 23 *Will*: predicciones y ofrecimientos · 24 Comparativos y superlativos · 25 Indicaciones y transporte · 26 Evaluación y proyecto.
- **Proyecto:** relato oral de un viaje o de un fin de semana.
- **Fuentes:** British Council (gramática A1–A2), MCER (descriptor A2).

### Módulo 4 · Comunicar con confianza (8 clases · 8 h)
- **Objetivo:** mantener conversaciones simples y escribir mensajes útiles.
- **Competencias:** presente perfecto, obligación y consejo, condicionales 0 y 1, verbos compuestos (*phrasal verbs*), dar opiniones, correos simples, llamadas y reuniones.
- **Previos:** Módulo 3.
- **Clases:** 27 Presente perfecto: experiencias · 28 *Must, have to, should* · 29 Condicionales 0 y 1 · 30 *Phrasal verbs* frecuentes · 31 Opinar, estar de acuerdo y en desacuerdo · 32 Correos y mensajes simples · 33 Llamadas y reuniones en línea · 34 Evaluación: conversación.
- **Fuentes:** British Council (gramática B1–B2), MCER (descriptor B1).

### Módulo 5 · Inglés para tecnología (6 clases · 6 h)
- **Objetivo:** usar el inglés en un trabajo de tecnología.
- **Competencias:** leer documentación y mensajes de error, escribir tickets e informes cortos, participar en reuniones breves de equipo y presentarte en una entrevista.
- **Previos:** Módulo 4. Se puede adelantar en paralelo si hace falta.
- **Clases:** 35 Vocabulario de computación y redes · 36 Leer documentación técnica y mensajes de error · 37 Tickets, incidentes y reportes cortos · 38 Reuniones diarias de equipo (*stand-up*) · 39 Entrevista de trabajo en tecnología · 40 Proyecto final: presentación técnica oral.
- **Relación con los demás cursos:** el "inglés técnico del día" de los otros cursos sigue siendo
  solo vocabulario. Este módulo trabaja **habilidades** (leer, escribir, hablar), así que no repite contenido.

**Total del curso: 40 clases (4 existentes y 36 nuevas) · 40 horas.**

---

## 4. Curso de JavaScript (2 h por clase)

**Meta del curso:** desarrollar aplicaciones web completas (frontend y backend con Node.js).

### Módulo 1 · Fundamentos de programación (9 clases · 18 h)
- **Objetivo:** pensar como programador y dominar la lógica básica.
- **Competencias:** variables y tipos, operadores, condicionales, bucles, funciones, arrays, objetos, JSON y depuración.
- **Previos:** ninguno.
- **Clases:**
  1. ★ `clase-01` ¿Qué es programar? Tu primer código.
  2. ★ `clase-02` Variables y tipos de datos.
  3. ★ `clase-03` Operadores y textos.
  4. ★ `clase-04` Condicionales.
  5. nueva · Bucles: `for`, `while` y `for...of`.
  6. nueva · Funciones, parámetros y valores de retorno.
  7. nueva · Arrays y sus métodos (`map`, `filter`, `find`).
  8. nueva · Objetos y JSON.
  9. nueva · Depuración, manejo de errores (`try/catch`) y proyecto del módulo: juego de adivinar el número.
- **Evaluación:** el proyecto, con retos autocorregidos.
- **Fuentes:** guía de JavaScript de MDN (en español), especificación ECMA-262.

### Módulo 2 · HTML y CSS para programadores (4 clases · 8 h)
- **Objetivo:** construir la estructura y el diseño que JavaScript va a manejar.
- **Competencias:** HTML semántico y formularios; selectores, cascada y modelo de caja; Flexbox, Grid y diseño adaptable; accesibilidad básica.
- **Previos:** ninguno, aunque conviene haber hecho el Módulo 1.
- **Clases:** 10 HTML semántico y formularios · 11 CSS: selectores, cascada y modelo de caja · 12 Flexbox, Grid y diseño adaptable · 13 Accesibilidad web (WCAG) básica.
- **Proyecto:** una página personal adaptable al celular.
- **Fuentes:** ruta de aprendizaje web de MDN, WCAG 2 (W3C).

### Módulo 3 · JavaScript en el navegador (6 clases · 12 h)
- **Objetivo:** crear páginas interactivas.
- **Competencias:** manejar el DOM y los eventos, validar formularios, guardar datos en el navegador y organizar el código en módulos.
- **Previos:** Módulos 1 y 2.
- **Clases:** 14 El DOM · 15 Eventos · 16 Formularios y validación · 17 `localStorage` y JSON · 18 Módulos de JavaScript (ES) · 19 Proyecto: app de tareas.
- **Fuentes:** MDN.

### Módulo 4 · Asincronía y APIs (4 clases · 8 h)
- **Objetivo:** comunicarse con servidores y servicios externos.
- **Competencias:** promesas y `async/await`; HTTP, REST y `fetch`; manejar errores y estados de carga.
- **Previos:** Módulo 3.
- **Clases:** 20 Asincronía: callbacks, promesas y `async/await` · 21 HTTP, REST y `fetch` · 22 Errores de red y estados de carga · 23 Proyecto: app con una API pública.
- **Fuentes:** MDN, RFC 9110 (HTTP).

### Módulo 5 · Herramientas del desarrollador (4 clases · 8 h)
- **Objetivo:** trabajar con las herramientas de un equipo profesional.
- **Competencias:** terminal y estructura de proyectos; Git y GitHub; npm y herramientas de calidad de código; pruebas automáticas.
- **Previos:** Módulo 1. Se recomienda haber hecho el Módulo 3.
- **Clases:** 24 Terminal y estructura de un proyecto · 25 Git y GitHub · 26 npm y calidad de código (ESLint, Prettier) · 27 Pruebas automáticas (la herramienta concreta se decidirá al investigar esa clase).
- **Fuentes:** libro Pro Git (en español), documentación de Node.js.

### Módulo 6 · Node.js y backend (7 clases · 14 h)
- **Objetivo:** construir el servidor de una aplicación.
- **Competencias:** entorno de ejecución Node.js; servidor HTTP; Express; API REST; base de datos SQLite; autenticación y seguridad web; pruebas y despliegue.
- **Previos:** Módulos 4 y 5.
- **Clases:** 28 Node.js: el entorno de ejecución y sus módulos · 29 Servidor HTTP y conceptos de backend · 30 Express: rutas y middleware · 31 API REST completa (crear, leer, actualizar y borrar) · 32 Bases de datos con SQLite · 33 Autenticación y seguridad web (OWASP) · 34 Pruebas de la API y despliegue.
- **Fuentes:** documentación de Node.js (versiones LTS), Express, guías de OWASP (Cheat Sheet Series).

### Módulo 7 · Proyecto final (3 clases · 6 h)
- 35 Diseño del proyecto · 36 Construcción guiada · 37 Presentación y revisión.

**Total del curso: 37 clases (4 existentes y 33 nuevas) · 74 horas.**

---

## 5. Curso de Python (2 h por clase)

**Meta del curso:** desarrollar programas y aplicaciones con buenas prácticas profesionales.
La secuencia sigue el orden del tutorial oficial de Python: estructuras de datos, luego errores
y excepciones, luego clases y, al final, entornos virtuales.

### Módulo 1 · Fundamentos (7 clases · 14 h)
- **Objetivo:** escribir y ejecutar programas con lógica básica.
- **Competencias:** entorno de trabajo (terminal y VS Code), variables y tipos, entrada de datos, operadores, f-strings, condicionales, bucles, funciones y excepciones.
- **Previos:** ninguno.
- **Clases:**
  1. ★ `clase-01` ¿Qué es Python? Instalación y primer programa.
  2. ★ `clase-02` Variables, tipos e `input()`.
  3. ★ `clase-03` Operadores, textos y f-strings.
  4. ★ `clase-04` Condicionales.
  5. nueva · Bucles `for` y `while`.
  6. nueva · Funciones.
  7. nueva · Errores y excepciones (`try/except`) y proyecto: menú de consola.
- **Fuentes:** tutorial oficial de Python (en español), PEP 8.

### Módulo 2 · Estructuras de datos (4 clases · 8 h)
- **Clases:** 8 Listas y tuplas · 9 Diccionarios y conjuntos · 10 Cadenas a fondo y comprensiones de listas · 11 Proyecto: agenda de contactos.
- **Competencias:** elegir la estructura adecuada para cada problema. **Previos:** Módulo 1.

### Módulo 3 · Archivos, módulos y entorno (4 clases · 8 h)
- **Clases:** 12 Archivos de texto, CSV y JSON · 13 Módulos y biblioteca estándar (`pathlib`, `datetime`) · 14 `pip`, entornos virtuales y paquetes · 15 Proyecto: gestor de gastos.
- **Competencias:** guardar datos y organizar proyectos. **Previos:** Módulo 2.
- **Fuentes:** documentación oficial de `venv` y guía de empaquetado de Python.

### Módulo 4 · Programación orientada a objetos (4 clases · 8 h)
- **Clases:** 16 Clases y objetos · 17 Herencia y composición · 18 Dataclasses y anotaciones de tipo · 19 Proyecto: sistema de inventario.
- **Competencias:** modelar problemas reales con objetos. **Previos:** Módulo 3.

### Módulo 5 · Calidad de software (4 clases · 8 h)
- **Clases:** 20 Git y GitHub · 21 Pruebas con pytest · 22 Estilo, calidad y registros (PEP 8, linters y `logging`) · 23 Depuración profesional.
- **Competencias:** código mantenible y probado. **Previos:** Módulo 4.
- **Fuentes:** documentación de pytest, PEP 8, libro Pro Git.

### Módulo 6 · Datos y bases de datos (3 clases · 6 h)
- **Clases:** 24 SQL básico con SQLite · 25 El módulo `sqlite3` en Python · 26 Expresiones regulares.
- **Competencias:** guardar y consultar datos. **Previos:** Módulo 3.
- **Fuentes:** documentación oficial de `sqlite3`.

### Módulo 7 · Internet y automatización (4 clases · 8 h)
- **Clases:** 27 HTTP y APIs con `requests` · 28 Automatizar archivos y carpetas · 29 Scripts de línea de comandos (`argparse`) y tareas programadas · 30 Reportes en Excel.
- **Competencias:** automatizar tareas reales. **Previos:** Módulos 3 y 6.
- **Fuentes:** documentación de Requests.

### Módulo 8 · Desarrollo de aplicaciones (5 clases · 10 h)
- **Clases:** 31 APIs con FastAPI · 32 API con base de datos · 33 Seguridad de aplicaciones: contraseñas con hash, validación y secretos · 34 Interfaz web sencilla · 35 Despliegue.
- **Competencias:** construir y publicar una aplicación. **Previos:** Módulos 5 a 7.
- **Fuentes:** documentación de FastAPI, guías de OWASP.

### Módulo 9 · Proyecto final (3 clases · 6 h)
- 36 Diseño del proyecto · 37 Construcción guiada · 38 Presentación y revisión.

### Electiva · Python aplicado a la ciberseguridad (3 clases · 6 h, opcional)
- **Clases:** E1 Analizar registros de autenticación · E2 Hashes e integridad de archivos · E3 Automatizar consultas de indicadores de compromiso.
- **Previos:** Python, Módulo 7. Se **recomienda**, sin ser obligatorio, el Módulo 6 de Ciberseguridad.

**Total del curso: 38 clases (4 existentes y 34 nuevas) · 76 horas, más 6 h de la electiva.**

---

## 6. Mapa de ubicación de las 17 clases existentes

Abreviaturas: **Ubic.** = ¿está bien ubicada? · **Decisión** = conservar / trasladar / dividir.
Todas las clases, salvo Ciberseguridad 01, necesitan además la actualización al estándar de 9
secciones con fuentes completas (ver la sección 8).

| Clase | Módulo propuesto | Previos | Competencias que desarrolla | Ubic. | Solapamientos | Decisión |
|---|---|---|---|---|---|---|
| Ciber `01` | Ciber M1 · clase 1 | Ninguno | Tríada CIA; activo, amenaza, vulnerabilidad, riesgo e incidente; análisis en 5 pasos; primera simulación SOC | Sí | Introduce el SOC y el phishing, que se profundizan en M5 y M9 (introducción intencional) | **Conservar.** Ya está en el estándar |
| Ciber `02` | Ciber M2 · clase 1 | Ciber 01 | Hardware básico; sistema operativo, procesos y PID; procesos legítimos y sospechosos; extensiones; usuarios, permisos y mínimo privilegio | Sí | Presenta PowerShell, que la `03` profundiza; el mínimo privilegio también aparecerá en M1·2 como principio | **Conservar.** Es una clase densa: valorar dividirla en el futuro según tu experiencia |
| Ciber `03` | Ciber M2 · clase 2 | Ciber 02 | Navegar con PowerShell, archivos ocultos, tuberías, investigar un registro | Sí | El registro de la práctica es simple; M6 trabaja eventos reales de Windows, sin repetirlo | **Conservar** |
| Ciber `04` | Ciber M2 · clase 4 | Ciber 02–03 | Carpetas y comandos de Linux, permisos, ataque por SSH en auth.log | Sí | auth.log reaparece en M6·3, que debe ampliarlo, no repetirlo | **Conservar** |
| Ciber `05` | Ciber M3 · clase 1 | M2 (comandos) | Tipos de red, IP y MAC, OSI y TCP/IP, puertos, TCP y UDP, comandos de red, conexiones sospechosas | Sí | Introduce DNS y DHCP, que se profundizan en M3·2 y M3·3 | **Conservar.** Es densa: valorar dividirla después |
| Inglés `01` | Inglés M1 · clase 1 | Ninguno | Saludos formales e informales según la hora; gracias, por favor, de nada; diálogo corto | Sí | — | **Conservar** |
| Inglés `02` | Inglés M1 · clase 2 | Inglés 01 | Presentarse (nombre, origen, edad, ocupación); *I am / you are* (descriptor A1) | Sí | Adelanta *to be*; la clase nueva M1·5 debe completarlo sin repetir | **Conservar** |
| Inglés `03` | Inglés M1 · clase 3 | Inglés 02 | Alfabeto, deletrear nombres y correos (*at*, *dot*) | Sí | — | **Conservar** |
| Inglés `04` | Inglés M1 · clase 4 | Inglés 01 | Números del 0 al 100, diferencia *teen/ty*, teléfonos y precios | Sí | — | **Conservar** |
| JS `01` | JS M1 · clase 1 | Ninguno | Qué es programar; algoritmos; papel de HTML, CSS y JS; consola; leer errores | Sí | Menciona HTML y CSS, que se estudian en el M2 | **Conservar** |
| JS `02` | JS M1 · clase 2 | JS 01 | `let` y `const`, tipos, `typeof`, errores con variables | Sí | — | **Conservar** |
| JS `03` | JS M1 · clase 3 | JS 02 | Operadores, plantillas de texto, métodos de cadenas, comparaciones, lógica y conversión de tipos | Sí | La lógica booleana se usa en la `04` (es progresión, no repetición) | **Conservar** |
| JS `04` | JS M1 · clase 4 | JS 03 | `if`, `else if`, condiciones combinadas, `switch`, operador ternario | Sí | — | **Conservar** |
| Python `01` | Python M1 · clase 1 | Ninguno | Qué es Python, instalación y VS Code, modo interactivo, primer programa, leer errores | Sí | — | **Conservar** |
| Python `02` | Python M1 · clase 2 | Py 01 | Variables, tipos, conversiones, `input()` y errores típicos | Sí | — | **Conservar** |
| Python `03` | Python M1 · clase 3 | Py 02 | Operadores, `round`, métodos de cadenas, índices, f-strings, comparaciones y lógica | Sí | — | **Conservar** |
| Python `04` | Python M1 · clase 4 | Py 03 | `if`, `elif`, `else`, sangría, `and`, `or`, `in`, errores típicos | Sí | — | **Conservar** |

**Conclusión:** las 17 clases están bien ubicadas al **inicio** de su curso, en el orden correcto.
No se recomienda trasladar ninguna. Solo `Ciber 02` y `Ciber 05` podrían dividirse más
adelante si resultan muy densas. Eso se decidiría con tu experiencia real al estudiarlas, no ahora.

---

## 7. Clases nuevas recomendadas

| Curso | Clases nuevas | Ubicación |
|---|---|---|
| Ciberseguridad | 36 | 2 en M1, 2 en M2, 4 en M3, 3 en M4, 5 en M5, 6 en M6, 4 en M7, 5 en M8, 5 en M9 |
| Inglés | 36 | 4 en M1, 9 en M2, 9 en M3, 8 en M4, 6 en M5 |
| JavaScript | 33 | 5 en M1, 4 en M2, 6 en M3, 4 en M4, 4 en M5, 7 en M6, 3 en M7 |
| Python | 34 (+3 electivas) | 3 en M1, 4 en M2, 4 en M3, 4 en M4, 4 en M5, 3 en M6, 4 en M7, 5 en M8, 3 en M9 |
| **Total** | **139 (+3)** | |

**Prioridad sugerida** (siguiente clase de cada curso):
- **Ciberseguridad:** M1·2 *Principios y marcos de seguridad* y M1·3 *Gestión del riesgo*, para cerrar el Módulo 1.
- **Inglés:** M1·5 *El verbo to be completo*.
- **JavaScript:** M1·5 *Bucles*.
- **Python:** M1·5 *Bucles*.

---

## 8. Clases que necesitan actualización o ampliación

### Para las 16 clases que aún no están en el estándar
Les falta lo mismo, según la auditoría del 10/11/2026:
- conocimientos previos y objetivos explícitos;
- una situación inicial;
- la práctica autónoma con criterios para comprobarla;
- el resumen;
- las fuentes completas: Ciberseguridad 02–05 tienen enlaces sin fechas ni estado, e Inglés, JavaScript y Python no tienen fuentes.

### Correcciones concretas detectadas en esta revisión
| Clase | Qué corregir | Evidencia |
|---|---|---|
| Ciber `05` | La simulación de `tracert` usa la IP `142.250.0.100` y la presenta como "ficticia", pero no está en los rangos reservados para ejemplos. Cambiarla por una de documentación (por ejemplo `203.0.113.x`) | RFC 5737 (verificado) |
| Python `01` | Dice "Python 3.12.x". La versión actual publicada es **3.15.2** y tu PC tiene la 3.12 y la 3.14. Redactar como "3.12 o superior" | python.org/downloads (consultado el 10/11/2026) |
| Python `01` | "Instagram está construido en gran parte con Python": **no verificado**. Buscar una fuente o quitarlo | Pendiente |
| Python `01` | Guido van Rossum, 1991 y el nombre por Monty Python: **correcto**. Agregar la fuente | FAQ oficial de Python (verificado) |
| JS `01` | El origen de "bug" (1947) y el motivo del nombre JavaScript: **no verificados** todavía. Buscar fuente o matizar | Pendiente |
| JS `02` | `typeof null` devuelve "object" desde el inicio de JavaScript: **correcto**. Agregar la fuente | MDN (verificado) |
| JS `03` | Ubicación de la comilla invertida en el teclado latinoamericano: **no verificada**. Comprobarla o quitarla | Pendiente |
| Python `03` | `round()` puede sorprender con algunos decimales. Conviene una nota de advertencia | Pendiente de verificar en la documentación de Python |
| Inglés `01–04` | Las pronunciaciones aproximadas y los usos de *Good evening / Good night* deben contrastarse con un diccionario | Diccionario Cambridge (accesible) |
| Ciber `02` | Verificar con fuente: rutas de `svchost` y `lsass`, UAC, BitLocker y "Windows oculta las extensiones por defecto" | Pendiente (SANS y Microsoft Learn) |

---

## 9. Competencias al finalizar cada módulo (resumen)

| Curso · Módulo | Al terminar, serás capaz de… |
|---|---|
| Ciber M1 | Explicar riesgos y principios de seguridad y proponer controles básicos |
| Ciber M2 | Revisar un equipo Windows o Linux y detectar procesos, cuentas o persistencia sospechosos |
| Ciber M3 | Interpretar tráfico y servicios de red y reconocer ataques de red |
| Ciber M4 | Explicar cifrado, certificados e identidades, y detectar cuentas comprometidas |
| Ciber M5 | Clasificar amenazas y vulnerabilidades y describir un ataque con ATT&CK |
| Ciber M6 | Buscar y correlacionar eventos en un SIEM y escribir reglas de detección |
| Ciber M7 | Priorizar alertas y analizar correos, indicadores y muestras sin riesgo |
| Ciber M8 | Responder a un incidente y redactar el informe |
| Ciber M9 | Trabajar en un turno SOC simulado y presentarte a una entrevista |
| Inglés M1 | Presentarte, deletrear, contar y decir fechas y horas (A1 inicial) |
| Inglés M2 | Describir tu vida diaria (A1) |
| Inglés M3 | Contar experiencias pasadas y planes (A2) |
| Inglés M4 | Conversar sobre temas conocidos y escribir mensajes simples (A2 y pasos hacia el B1) |
| Inglés M5 | Usar el inglés en tareas técnicas básicas |
| JS M1 | Resolver problemas con lógica y estructuras de datos |
| JS M2 | Maquetar páginas semánticas, adaptables y accesibles |
| JS M3 | Crear aplicaciones interactivas en el navegador |
| JS M4 | Consumir APIs de forma asíncrona |
| JS M5 | Trabajar con Git, npm y pruebas automáticas |
| JS M6 | Construir una API segura con Node.js, Express y SQLite |
| JS M7 | Entregar una aplicación web completa |
| Py M1 | Escribir programas con lógica, funciones y manejo de errores |
| Py M2 | Elegir y usar las estructuras de datos adecuadas |
| Py M3 | Trabajar con archivos y entornos virtuales |
| Py M4 | Diseñar programas orientados a objetos |
| Py M5 | Versionar, probar y mantener tu código |
| Py M6 | Guardar y consultar datos con SQL |
| Py M7 | Automatizar tareas y usar APIs |
| Py M8 | Construir y publicar una aplicación |
| Py M9 | Entregar un proyecto completo |

---

## 10. Duración de módulos y cursos

| Curso | Módulos (clases · horas) | Total |
|---|---|---|
| Ciberseguridad | M1 3·6 · M2 5·10 · M3 5·10 · M4 3·6 · M5 5·10 · M6 6·12 · M7 4·8 · M8 5·10 · M9 5·10 | **41 clases · 82 h** |
| Inglés | M1 8·8 · M2 9·9 · M3 9·9 · M4 8·8 · M5 6·6 | **40 clases · 40 h** |
| JavaScript | M1 9·18 · M2 4·8 · M3 6·12 · M4 4·8 · M5 4·8 · M6 7·14 · M7 3·6 | **37 clases · 74 h** |
| Python | M1 7·14 · M2 4·8 · M3 4·8 · M4 4·8 · M5 4·8 · M6 3·6 · M7 4·8 · M8 5·10 · M9 3·6 | **38 clases · 76 h** (+6 h de la electiva) |
| **Academia** | | **156 clases · 272 h** (+6 h) |

Las horas son de clase. La práctica autónoma de cada clase se suma aparte, a tu ritmo.

---

## 11. Justificación pedagógica

1. **De lo concreto a lo abstracto, respetando las dependencias reales.** Ciberseguridad avanza
   así: fundamentos → sistemas → redes → identidad → amenazas → detección → análisis → respuesta
   → operaciones. No se puede detectar un ataque en un registro sin saber cómo funcionan el
   sistema y la red que lo generan. Este recorrido coincide con las funciones del NIST CSF 2.0
   (Identificar y Proteger antes de Detectar y Responder) y con la guía NIST SP 800-61r3.
2. **Orientación a un rol real.** El destino del curso de ciberseguridad es el rol "Defensive
   Cybersecurity" del marco NICE: analizar los datos de las herramientas de defensa para mitigar riesgos.
3. **Inglés por niveles del MCER.** Cada módulo apunta a un descriptor oficial (A1, A2, B1) y la
   gramática sigue la progresión A1–A2 y B1 de British Council. Las horas se comunican con
   honestidad (ver la nota del curso de inglés).
4. **Programación: primero la lógica, después las capas.** En JavaScript, la lógica va primero
   porque el editor integrado permite practicarla sin HTML. HTML y CSS van **antes del DOM**,
   porque el DOM los necesita. La asincronía va antes del backend, porque Node.js la usa siempre.
   En Python se sigue el orden del tutorial oficial.
5. **Repetición espaciada sin duplicar.** Los temas se retoman con más profundidad (por ejemplo,
   auth.log en la `clase-04` y en M6), nunca copiados.
6. **Cursos independientes pero conectados.** Ningún curso exige otro. Los vínculos son
   recomendaciones: la electiva de Python sobre ciberseguridad; la seguridad web en
   JavaScript M6 enlazada con Ciberseguridad M5; el inglés técnico.
7. **Evaluación en tres niveles:** cada clase (examen y práctica autónoma), cada módulo (caso o
   proyecto) y cada curso (proyecto final).

**Contenidos compartidos que no deben duplicarse:**
- **Git y GitHub** (JS M5·25 y Python M5·20): una sola clase conceptual con práctica en los dos
  lenguajes. Si ya la cursaste en un curso, en el otro se ofrece como repaso.
- **SQL básico** (JS M6·32 y Python M6·24): los mismos conceptos; cambia la práctica según el lenguaje.
- **HTTP** (Ciber M3·2, JS M4·21 y Python M7·27): cada curso lo ve desde su perspectiva
  (seguridad, cliente web, automatización), enlazando a los otros.

---

## 12. Proyectos integradores

**Por curso:**
- **Ciberseguridad:** *Mini-SOC personal*. Un laboratorio con máquinas virtuales propias y un
  SIEM gratuito. Se simula un incidente, se detecta, se responde y se entrega el informe. Si tu PC
  no tiene recursos suficientes, se hace en simulación.
- **Inglés:** *Presentación técnica oral*. Grabar la explicación en inglés de un proyecto
  propio, seguida de una entrevista simulada.
- **JavaScript:** *Aplicación web completa*, con frontend, API en Node.js y base de datos.
  Por ejemplo, un gestor de tareas o un panel de alertas.
- **Python:** *Aplicación con API, base de datos y automatización*. Por ejemplo, un sistema de
  inventario con reportes automáticos.

**Entre cursos (opcionales):**
- **Panel de seguridad:** un script de Python (electiva) analiza registros y genera un JSON, y un
  panel en JavaScript lo muestra con gráficos. Une los tres cursos técnicos.
- **Informe bilingüe:** el informe del simulacro SOC (Ciber M9) con un resumen ejecutivo en
  inglés (Inglés M5).

---

## 13. Fuentes consultadas y estado de verificación

Consultadas el 10/11/2026. **Verificada** significa que se leyó el contenido y respalda el uso que
se le da; **no accesible** significa que no se pudo leer y, por eso, no se usa como respaldo.

| Fuente | Qué respalda en esta propuesta | Estado |
|---|---|---|
| NIST, nota de lanzamiento del CSF 2.0 (26/02/2024): https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework | Las 6 funciones: Govern, Identify, Protect, Detect, Respond, Recover | Verificada |
| NIST CSWP 29, CSF 2.0 (publicado el 26/02/2024): https://csrc.nist.gov/pubs/cswp/29/the-nist-cybersecurity-framework-csf-20/final | Marco de referencia de Ciber M1 | Verificada (página de la publicación) |
| NIST SP 800-181r1, marco NICE (noviembre de 2020): https://csrc.nist.gov/pubs/sp/800/181/r1/final | Uso de roles y competencias para diseñar la formación | Verificada |
| NICCS (CISA), rol "Defensive Cybersecurity": https://niccs.cisa.gov/workforce-development/nice-framework/work-roles/defensive-cybersecurity | Meta del curso: analizar datos de herramientas de defensa para mitigar riesgos | Verificada |
| NIST SP 800-61r3 (abril de 2025): https://csrc.nist.gov/pubs/sp/800/61/r3/final | Ciber M8, respuesta a incidentes alineada con CSF 2.0 | Verificada |
| NIST SP 800-92 (septiembre de 2006): https://csrc.nist.gov/pubs/sp/800/92/final | Ciber M6, gestión de registros | Verificada |
| MITRE ATT&CK: https://attack.mitre.org/ | Base de tácticas y técnicas de adversarios basada en observaciones reales (Ciber M2, M5, M7) | Verificada |
| OWASP Top 10: https://owasp.org/Top10/ | Existe la edición 2025 (la página redirige a "OWASP Top 10:2025") | Verificada |
| CVE: https://www.cve.org/ · FIRST CVSS: https://www.first.org/cvss/ | Ciber M5; CVSS v4.0 disponible | Verificadas |
| CIS Controls: https://www.cisecurity.org/controls | Ciber M1; versión v8.1 | Verificada |
| Microsoft Learn, evento 4624: https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4624 | Ciber M4 y M6 | Verificada |
| Microsoft Sysinternals, Sysmon (publicado el 10/09/2026): https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon | Ciber M6: registra creación de procesos y conexiones de red | Verificada |
| SigmaHQ: https://github.com/SigmaHQ/sigma | Ciber M6: repositorio de reglas Sigma | Verificada |
| Wireshark, documentación: https://www.wireshark.org/docs/ | Ciber M3 | Verificada |
| RFC 7489 (DMARC): https://www.rfc-editor.org/rfc/rfc7489 | Ciber M7 | Verificada |
| Wazuh, documentación: https://documentation.wazuh.com/current/getting-started/index.html | Ciber M6: SIEM/XDR gratuito para laboratorio | Verificada |
| NCSC (Reino Unido), SOC · Centro Canadiense de Ciberseguridad, SOC (ya citados en Ciber 01) | Ciber M9 | Verificadas |
| Consejo de Europa, MCER, escala global: https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale | Descriptores A1, A2 y B1 de los módulos de Inglés | Verificada (leída con el navegador) |
| Cambridge English, horas de aprendizaje guiado (actualizada el 10/11/2026): https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours | A2 Key 180–200 h y B1 Preliminary 350–400 h | Verificada |
| British Council LearnEnglish, gramática A1–A2: https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2 | Progresión gramatical de Inglés M2 y M3 | Verificada (leída con el navegador) |
| British Council, gramática B1–B2: https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar | Inglés M4 | No accesible en la consulta: pendiente |
| Diccionario Cambridge: https://dictionary.cambridge.org/ | Revisión de pronunciaciones (Inglés 01–04) | Accesible; contenido pendiente de revisar clase por clase |
| MDN, ruta de aprendizaje web: https://developer.mozilla.org/en-US/docs/Learn_web_development | JS M2 y M3: la ruta "Core" incluye HTML, CSS, JavaScript, accesibilidad y control de versiones | Verificada (los temas; el orden no se confirmó) |
| MDN, guía de JavaScript (en español): https://developer.mozilla.org/es/docs/Web/JavaScript/Guide | JS M1 | Verificada |
| MDN, `typeof`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof | Corrección de la clase JS 02 | Verificada |
| Node.js, introducción y versiones: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs · https://nodejs.org/en/about/previous-releases | JS M6: entorno de ejecución multiplataforma; versiones LTS | Verificadas |
| Express: https://expressjs.com/ | JS M6 | Verificada |
| Pro Git (en español): https://git-scm.com/book/es/v2 | JS M5 y Python M5 | Verificada |
| OWASP Cheat Sheet Series: https://cheatsheetseries.owasp.org/ | JS M6 y Python M8 | Verificada |
| W3C, WCAG 2: https://www.w3.org/WAI/standards-guidelines/wcag/ | JS M2 | Verificada |
| Tutorial oficial de Python (en español): https://docs.python.org/es/3/tutorial/index.html | Orden de Python: estructuras de datos → errores y excepciones → clases → entornos virtuales | Verificada (orden parcial confirmado) |
| python.org, descargas: https://www.python.org/downloads/ | Versión actual 3.15.2 | Verificada |
| Python, FAQ general: https://docs.python.org/3/faq/general.html | Monty Python, Guido van Rossum, publicación en 1991 | Verificada |
| PEP 8 · `venv` · `sqlite3` · pytest · Requests · FastAPI · guía de empaquetado (enlaces oficiales) | Módulos de Python correspondientes | Verificadas (páginas oficiales accesibles) |

**No accesibles o no usadas como respaldo:**
- Página de la certificación CompTIA CySA+: error 404.
- Página de CVSS del NVD: el contenido no se cargó; se usó FIRST en su lugar.
- PDF del CSF 2.0: su texto no se pudo extraer; se usó la nota oficial de NIST.
- Documentación de Security Onion: accesible, pero no confirmó el contenido buscado.

---

## 14. Decisiones que necesito que apruebes

1. **La estructura de módulos de los cuatro cursos** (secciones 2 a 5), o los cambios que quieras.
2. **La forma de integrarlo sin romper nada:** mantener los archivos e `id` actuales y agregar
   `modulo` y `orden` en `catalogo.js`, con el menú `inicio.html` mostrando los módulos
   (sección 1). Requiere tu autorización para modificar esos dos archivos.
3. **Las clases compartidas** de Git, SQL y HTTP (sección 11).
4. **La meta de inglés:** A1 completo y avance en A2, con la transparencia sobre las horas.
5. **El laboratorio de ciberseguridad** con máquinas virtuales (desde Ciber M2 y M6). Requiere
   instalar software gratuito en tu PC, como VirtualBox o un SIEM. Existe la alternativa de
   hacerlo todo en simulación.
6. **El orden de trabajo:** actualizar primero las 16 clases existentes al estándar y luego crear
   las nuevas, o avanzar con las nuevas de cada curso en paralelo.

> Hasta tu aprobación explícita no se implementa nada de esta propuesta.
