# Ruta de aprendizaje: Ciberseguridad, de cero a analista SOC

Cada clase dura **2 horas**. El curso se organiza por **módulos**, aprobados en
`PROPUESTA-ORGANIZACION-CURRICULAR.md`. Cada módulo termina con una evaluación (caso integrador)
y, cuando corresponde, con un proyecto. Claude puede dividir una clase en varias sesiones si hace
falta.

- **Clases existentes:** conservan su número de archivo y su `id` (`clase-04` es `ciber-04`),
  aunque en el menú se vean en otro lugar del módulo (por ejemplo, «Módulo 2 · Clase 4»).
- **Clases nuevas:** usan el siguiente número de archivo libre (`clase-06`, `clase-07`…) y
  ocupan el lugar que les toca dentro de su módulo.
- **Laboratorios:** primero simulados, con datos ficticios e IP de documentación (RFC 5737). Las
  máquinas virtuales son opcionales, y no se usan servicios de pago.

<!-- INICIO: generado desde recursos/catalogo.js con "node herramientas/generar-rutas.js". No editar a mano. -->

## Meta del curso

Llegar al nivel de entrada de un analista SOC. La referencia es el rol "Defensive Cybersecurity" del marco NICE: analizar los datos de las herramientas de defensa para mitigar riesgos. La secuencia sigue las funciones del NIST CSF 2.0 (Gobernar, Identificar, Proteger, Detectar, Responder, Recuperar) y la guía de respuesta a incidentes NIST SP 800-61r3.

- **Duración:** 9 módulos · 41 clases · 82 h de clase (2 h por clase). La práctica autónoma de cada clase se suma aparte.
- **Clases listas:** 5 de 41.
- **Siguiente clase por crear:** Módulo 1 · Clase 2: Principios y marcos de seguridad: defensa en profundidad, mínimo privilegio, NIST CSF 2.0 y ética.
- **Proyecto final del curso:** Mini-SOC personal: un laboratorio con máquinas virtuales propias y un SIEM gratuito. Se simula un incidente, se detecta, se responde y se entrega el informe. Si tu PC no tiene recursos suficientes, se hace en simulación.

## Resumen de módulos

| Módulo | Clases | Horas | Listas | Necesitas antes |
|---|---|---|---|---|
| Módulo 1 · Fundamentos de ciberseguridad | 3 | 6 | 1 | — |
| Módulo 2 · Sistemas operativos para analistas | 5 | 10 | 3 | Módulo 1 |
| Módulo 3 · Redes y comunicaciones | 5 | 10 | 1 | Módulo 2 |
| Módulo 4 · Criptografía, identidad y acceso | 3 | 6 | 0 | Módulos 1, 2 y 3 |
| Módulo 5 · Amenazas, vulnerabilidades y ataques | 5 | 10 | 0 | Módulos 1, 2 y 3 |
| Módulo 6 · Registros y monitoreo de seguridad | 6 | 12 | 0 | Módulos 2, 3 y 5 |
| Módulo 7 · Análisis de eventos e inteligencia de amenazas | 4 | 8 | 0 | Módulos 5 y 6 |
| Módulo 8 · Respuesta a incidentes | 5 | 10 | 0 | Módulos 6 y 7 |
| Módulo 9 · Operaciones SOC y carrera | 5 | 10 | 0 | Módulos 6, 7 y 8 |
| **Total** | **41** | **82** | **5** | |

## Módulo 1 · Fundamentos de ciberseguridad (3 clases · 6 h)

- **Objetivo:** Entender qué protege la ciberseguridad, con qué principios y con qué marcos.
- **Competencias:** Usar la tríada CIA y el vocabulario de riesgo; aplicar principios básicos (defensa en profundidad, mínimo privilegio, separación de funciones); ubicar una tarea dentro de las 6 funciones del CSF 2.0; actuar dentro de la ética y la legalidad.
- **Al terminar serás capaz de:** Explicar riesgos y principios de seguridad y proponer controles básicos.
- **Necesitas antes:** Ninguno.
- **Evaluación del módulo:** Caso integrador: analizar una pequeña empresa ficticia y proponer controles.
- **Proyecto:** "Mi hogar digital seguro": inventario de activos propios, amenazas, riesgos y controles.
- **Fuentes previstas** (se verifican al crear cada clase): NIST CSF 2.0, CIS Controls v8.1, glosario NIST.

| Clase | Tema | Estado |
|---|---|---|
| M1·1 | ¿Qué es la ciberseguridad? La tríada CIA | ✔ Lista: `clases/clase-01.html` (id `ciber-01`) |
| M1·2 | Principios y marcos de seguridad: defensa en profundidad, mínimo privilegio, NIST CSF 2.0 y ética | Próximamente · **siguiente por crear** |
| M1·3 | Gestión del riesgo e higiene digital: contraseñas, MFA, actualizaciones y copias de seguridad | Próximamente |

## Módulo 2 · Sistemas operativos para analistas (5 clases · 10 h)

- **Objetivo:** Saber cómo funcionan Windows y Linux por dentro, y dónde mira un analista.
- **Competencias:** Distinguir procesos legítimos de sospechosos; manejar PowerShell y la terminal de Linux; leer permisos; conocer los lugares donde el malware suele instalarse para sobrevivir a un reinicio (persistencia).
- **Al terminar serás capaz de:** Revisar un equipo Windows o Linux y detectar procesos, cuentas o persistencia sospechosos.
- **Necesitas antes:** Módulo 1.
- **Evaluación del módulo:** Revisar un equipo Windows y otro Linux en simulación y redactar los hallazgos.
- **Proyecto:** Opcional: instalar Linux en una máquina virtual propia, como laboratorio personal.
- **Fuentes previstas** (se verifican al crear cada clase): Microsoft Learn (Sysmon, eventos), MITRE ATT&CK (táctica de persistencia), póster SANS "Hunt Evil".

| Clase | Tema | Estado |
|---|---|---|
| M2·1 | El computador por dentro: procesos, usuarios y permisos | ✔ Lista: `clases/clase-02.html` (id `ciber-02`) |
| M2·2 | Línea de comandos: PowerShell para analistas | ✔ Lista: `clases/clase-03.html` (id `ciber-03`) |
| M2·3 | Windows a fondo: servicios, registro, tareas programadas y persistencia | Próximamente |
| M2·4 | Linux básico para seguridad | ✔ Lista: `clases/clase-04.html` (id `ciber-04`) |
| M2·5 | Linux para analistas: procesos, servicios, journalctl, cron y persistencia | Próximamente |

## Módulo 3 · Redes y comunicaciones (5 clases · 10 h)

- **Objetivo:** Entender cómo viajan los datos y cómo se ven los ataques en la red.
- **Competencias:** Direccionamiento IP, puertos y protocolos; DNS, HTTP y HTTPS; servicios de red; leer capturas de tráfico; reconocer ataques de red comunes.
- **Al terminar serás capaz de:** Interpretar tráfico y servicios de red y reconocer ataques de red.
- **Necesitas antes:** Módulo 2. Los comandos de red usan PowerShell.
- **Evaluación del módulo:** Analizar una captura de red de práctica y explicar qué ocurrió.
- **Proyecto:** Mapa de la red de tu propia casa, solo con tus dispositivos.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 1918, RFC 5737, RFC 9110, documentación de Wireshark, IANA (puertos).

| Clase | Tema | Estado |
|---|---|---|
| M3·1 | Redes I: IP, MAC, puertos y protocolos | ✔ Lista: `clases/clase-05.html` (id `ciber-05`) |
| M3·2 | Redes II: DNS, HTTP y HTTPS (TLS y certificados) | Próximamente |
| M3·3 | Servicios y arquitectura de red: DHCP, ARP, NAT, VPN, segmentación y firewalls | Próximamente |
| M3·4 | Análisis de tráfico con Wireshark (capturas de ejemplo) | Próximamente |
| M3·5 | Ataques de red y redes inalámbricas, desde la detección | Próximamente |

## Módulo 4 · Criptografía, identidad y acceso (3 clases · 6 h)

- **Objetivo:** Entender cómo se protegen los datos y cómo se controla quién entra.
- **Competencias:** Distinguir cifrado simétrico y asimétrico, hash y firma; entender los certificados; autenticación, MFA e inicio de sesión único; conceptos de Active Directory y Entra ID.
- **Al terminar serás capaz de:** Explicar cifrado, certificados e identidades, y detectar cuentas comprometidas.
- **Necesitas antes:** Módulos 1, 2 y 3.
- **Evaluación del módulo:** Caso de una cuenta comprometida.
- **Fuentes previstas** (se verifican al crear cada clase): Glosario NIST; Microsoft Learn (evento 4624).

| Clase | Tema | Estado |
|---|---|---|
| M4·1 | Criptografía aplicada: cifrado, hash, firmas y certificados | Próximamente |
| M4·2 | Autenticación e identidades: contraseñas, MFA, SSO y OAuth básico | Próximamente |
| M4·3 | Active Directory y Entra ID para analistas: usuarios, grupos y eventos de inicio de sesión | Próximamente |

## Módulo 5 · Amenazas, vulnerabilidades y ataques (5 clases · 10 h)

- **Objetivo:** Conocer al adversario y las debilidades que aprovecha.
- **Competencias:** Clasificar malware; reconocer ingeniería social; usar CVE y CVSS; entender las fallas web más comunes; describir un ataque con la Cyber Kill Chain y MITRE ATT&CK.
- **Al terminar serás capaz de:** Clasificar amenazas y vulnerabilidades y describir un ataque con ATT&CK.
- **Necesitas antes:** Módulos 1, 2 y 3.
- **Evaluación del módulo:** Asignar técnicas de ATT&CK a un ataque narrado.
- **Fuentes previstas** (se verifican al crear cada clase): MITRE ATT&CK, OWASP Top 10, CVE.org, FIRST (CVSS v4.0).

| Clase | Tema | Estado |
|---|---|---|
| M5·1 | Malware: tipos y comportamiento | Próximamente |
| M5·2 | Ingeniería social y phishing | Próximamente |
| M5·3 | Vulnerabilidades: CVE, CVSS, catálogo KEV y gestión de parches | Próximamente |
| M5·4 | Seguridad web: OWASP Top 10:2025, con laboratorio local | Próximamente |
| M5·5 | Cómo atacan: Cyber Kill Chain y MITRE ATT&CK (con la evaluación del módulo) | Próximamente |

## Módulo 6 · Registros y monitoreo de seguridad (6 clases · 12 h)

- **Objetivo:** Encontrar señales de ataque en los registros y automatizar su detección.
- **Competencias:** Gestión de registros; eventos clave de Windows y Sysmon; registros de Linux, web y firewall; búsquedas y correlación en un SIEM; reglas de detección con Sigma.
- **Al terminar serás capaz de:** Buscar y correlacionar eventos en un SIEM y escribir reglas de detección.
- **Necesitas antes:** Módulos 2, 3 y 5.
- **Evaluación del módulo:** Escribir una regla que detecte un ataque visto en el curso.
- **Proyecto:** Un mini-SOC casero en una máquina virtual, si tu PC lo permite, o en simulación.
- **Fuentes previstas** (se verifican al crear cada clase): NIST SP 800-92, Microsoft Learn (eventos y Sysmon), repositorio SigmaHQ, documentación de Wazuh.

| Clase | Tema | Estado |
|---|---|---|
| M6·1 | Registros: qué son, de dónde vienen y cómo se gestionan | Próximamente |
| M6·2 | Eventos de Windows (4624, 4625, 4688, 4720, 7045) y Sysmon | Próximamente |
| M6·3 | Registros de Linux, servidores web y firewall | Próximamente |
| M6·4 | SIEM I: conceptos, ingesta de datos y búsquedas | Próximamente |
| M6·5 | SIEM II: correlación, paneles y alertas | Próximamente |
| M6·6 | Reglas de detección con Sigma | Próximamente |

## Módulo 7 · Análisis de eventos e inteligencia de amenazas (4 clases · 8 h)

- **Objetivo:** Decidir rápido y bien qué es real, qué es grave y qué hacer.
- **Competencias:** Priorizar alertas y separar verdaderos de falsos positivos; analizar correos (SPF, DKIM, DMARC); usar indicadores de compromiso (IOC) e inteligencia de amenazas; hacer análisis básico de malware sin ejecutarlo.
- **Al terminar serás capaz de:** Priorizar alertas y analizar correos, indicadores y muestras sin riesgo.
- **Necesitas antes:** Módulos 5 y 6.
- **Evaluación del módulo:** Atender una cola de 10 alertas simuladas.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 7489 (DMARC), MITRE ATT&CK.

| Clase | Tema | Estado |
|---|---|---|
| M7·1 | Triage de alertas: severidad, falsos positivos y escalamiento | Próximamente |
| M7·2 | Análisis de correos sospechosos: cabeceras, SPF, DKIM y DMARC | Próximamente |
| M7·3 | Indicadores de compromiso e inteligencia de amenazas | Próximamente |
| M7·4 | Análisis básico de malware sin ejecutarlo | Próximamente |

## Módulo 8 · Respuesta a incidentes (5 clases · 10 h)

- **Objetivo:** Responder a un incidente de principio a fin.
- **Competencias:** Aplicar el ciclo de respuesta de NIST SP 800-61r3; contener, erradicar y recuperar; preservar evidencia; usar playbooks; redactar un informe.
- **Al terminar serás capaz de:** Responder a un incidente y redactar el informe.
- **Necesitas antes:** Módulos 6 y 7.
- **Evaluación del módulo:** Simulacro de ransomware con informe final.
- **Fuentes previstas** (se verifican al crear cada clase): NIST SP 800-61r3, guía #StopRansomware de CISA.

| Clase | Tema | Estado |
|---|---|---|
| M8·1 | El ciclo de respuesta a incidentes (NIST SP 800-61r3) | Próximamente |
| M8·2 | Contención, erradicación y recuperación | Próximamente |
| M8·3 | Forense básico: evidencia, cadena de custodia y línea de tiempo | Próximamente |
| M8·4 | Playbooks y comunicación del incidente | Próximamente |
| M8·5 | Redacción del informe de incidente | Próximamente |

## Módulo 9 · Operaciones SOC y carrera (5 clases · 10 h)

- **Objetivo:** Trabajar como lo hace un SOC real y prepararte para buscar empleo.
- **Competencias:** Roles, turnos y métricas de un SOC; búsqueda proactiva de amenazas (threat hunting) básica; monitoreo en la nube; resolver un caso de punta a punta; presentarte en una entrevista técnica.
- **Al terminar serás capaz de:** Trabajar en un turno SOC simulado y presentarte a una entrevista.
- **Necesitas antes:** Módulos 6, 7 y 8.
- **Proyecto:** Proyecto final del curso (ver más arriba).
- **Fuentes previstas** (se verifican al crear cada clase): NCSC (SOC), Centro Canadiense de Ciberseguridad (SOC), marco NICE.

| Clase | Tema | Estado |
|---|---|---|
| M9·1 | Cómo funciona un SOC: roles, turnos y métricas | Próximamente |
| M9·2 | Búsqueda proactiva de amenazas (threat hunting) básica | Próximamente |
| M9·3 | Seguridad y monitoreo en la nube | Próximamente |
| M9·4 | Simulacro integral SOC: de la alerta al informe | Próximamente |
| M9·5 | Carrera: certificaciones, portafolio y entrevista técnica | Próximamente |

<!-- FIN: generado desde recursos/catalogo.js -->

## Contenidos que se comparten con otros cursos (sin duplicarlos)

- **HTTP:** Ciberseguridad lo ve desde la seguridad (Módulo 3 · Clase 2). JavaScript lo ve como
  cliente web y Python para automatizar; cada curso enlaza a los otros.
- **Python aplicado a la ciberseguridad:** electiva opcional del curso de Python. Se recomienda
  haber hecho el Módulo 6 de este curso.
- **Inglés técnico del día:** vocabulario dentro de las clases de ciberseguridad (no reemplaza
  el curso de inglés).

## Recursos gratuitos para complementar

- **TryHackMe** (salas gratuitas, ruta "Pre Security" y "SOC Level 1" parcial)
- **OverTheWire – Bandit** (Linux)
- **LetsDefend** y **Blue Team Labs Online** (alertas y casos SOC, parte gratuita)
- **CyberDefenders** (retos de análisis Blue Team)
- **MITRE ATT&CK** (attack.mitre.org) y **OWASP Top 10** (owasp.org)
- Certificaciones de inicio a considerar más adelante: ISC2 CC, CompTIA Security+,
  CompTIA CySA+, Blue Team Level 1 (revisa precios y promociones vigentes).
