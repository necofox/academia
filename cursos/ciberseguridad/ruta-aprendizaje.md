# Ruta de aprendizaje: de cero a analista SOC

Cada nivel termina con un **reto integrador** y un **examen de nivel**.
Claude puede dividir una lección en varias sesiones si hace falta.

---

## Nivel 0 — Fundamentos (la base que todo analista necesita)

| # | Lección | Práctica / simulación |
|---|---------|-----------------------|
| 01 | ¿Qué es la ciberseguridad? Tríada CIA (confidencialidad, integridad, disponibilidad) | Clasificar incidentes reales según la CIA |
| 02 | Cómo funciona un computador y un sistema operativo (procesos, usuarios, permisos) | Ver procesos y usuarios con PowerShell (`Get-Process`, `whoami`) |
| 03 | Línea de comandos: PowerShell básico | Navegar, buscar archivos y leer logs desde PowerShell |
| 04 | Linux básico para seguridad (terminal, permisos, archivos) | Retos tipo OverTheWire *Bandit* (gratuito) |
| 05 | Redes I: modelo OSI y TCP/IP, IP, MAC, puertos | `ipconfig`, `ping`, `tracert`, `Test-NetConnection` |
| 06 | Redes II: DNS, HTTP/HTTPS, DHCP, protocolos comunes | Ver una petición web real con las herramientas del navegador |
| 07 | Redes III: análisis de tráfico con Wireshark | Analizar una captura `.pcap` de práctica |
| ★ | **Reto integrador 0**: "¿Qué pasó en esta red?" | Captura + logs ficticios |

## Nivel 1 — Seguridad básica (conocer al enemigo)

| # | Lección | Práctica / simulación |
|---|---------|-----------------------|
| 08 | Tipos de amenazas y atacantes; vulnerabilidad vs. amenaza vs. riesgo | Caso de estudio de un incidente famoso |
| 09 | Malware: virus, gusanos, troyanos, ransomware, spyware | Analizar el comportamiento de un ransomware (simulado, sin código real) |
| 10 | Ingeniería social y phishing | Página y correo de phishing falsos en `localhost` para detectar las señales |
| 11 | Contraseñas, autenticación y MFA | Ver por qué un hash débil se rompe rápido (con hashes de ejemplo) |
| 12 | Criptografía: cifrado simétrico/asimétrico, hashing, certificados | Calcular hashes con `Get-FileHash` y verificar integridad |
| 13 | Vulnerabilidades: CVE, CVSS, parches | Buscar y puntuar CVEs reales |
| 14 | Seguridad web: OWASP Top 10 (inyección SQL, XSS, etc.) | Login vulnerable creado en `localhost`: atacarlo y luego arreglarlo |
| ★ | **Reto integrador 1** + **Examen Nivel 1** | |

## Nivel 2 — Analista de seguridad (detectar)

| # | Lección | Práctica / simulación |
|---|---------|-----------------------|
| 15 | Logs: qué son y por qué son oro | Leer logs reales de tu Windows con `Get-WinEvent` |
| 16 | Eventos de Windows clave (4624, 4625, 4688, 4720, 7045…) | Detectar fuerza bruta en logs ficticios |
| 17 | Sysmon y logs de Linux (`auth.log`, `syslog`) | Encontrar una intrusión SSH en logs ficticios |
| 18 | Análisis de correos: cabeceras, SPF, DKIM, DMARC | Analizar cabeceras de un correo sospechoso |
| 19 | Indicadores de compromiso (IOC) e inteligencia de amenazas | Investigar IPs, dominios y hashes en fuentes abiertas |
| 20 | Cyber Kill Chain y MITRE ATT&CK | Mapear un ataque paso a paso a técnicas ATT&CK |
| 21 | Firewall, IDS/IPS, proxy y EDR: qué ve cada uno | Correlacionar alertas de varias fuentes |
| ★ | **Reto integrador 2** + **Examen Nivel 2** | |

## Nivel 3 — SOC (responder)

| # | Lección | Práctica / simulación |
|---|---------|-----------------------|
| 22 | Qué es un SOC: roles (L1, L2, L3), turnos, métricas (MTTD, MTTR) | Un "día en el SOC" simulado |
| 23 | SIEM: qué es y cómo se busca (Splunk / Elastic / Wazuh) | Consultas sobre un conjunto de logs |
| 24 | Triage de alertas: verdadero positivo vs. falso positivo | Cola de 10 alertas ficticias para clasificar |
| 25 | Reglas de detección (Sigma) | Escribir una regla para detectar un ataque visto antes |
| 26 | Respuesta a incidentes (NIST SP 800-61): preparar, detectar, contener, erradicar, recuperar | Simulacro de incidente de ransomware |
| 27 | Playbooks y escalamiento | Crear un playbook de phishing |
| 28 | Redacción de informes de incidente | Escribir un informe completo (Word/PDF) |
| ★ | **Reto integrador 3**: incidente completo de principio a fin | |

## Nivel 4 — Avanzado (especializarse)

| # | Lección | Práctica / simulación |
|---|---------|-----------------------|
| 29 | Threat hunting: buscar sin que haya alerta | Hipótesis + búsqueda en logs |
| 30 | Forense digital básico (memoria, disco, línea de tiempo) | Construir la línea de tiempo de un incidente |
| 31 | Análisis básico de malware (estático y dinámico, en sandbox) | Analizar un informe de sandbox |
| 32 | Pentesting ético introductorio (reconocimiento, escaneo) | Solo en laboratorio propio / plataformas legales |
| 33 | Seguridad en la nube (AWS/Azure básico) | Revisar una configuración insegura de ejemplo |
| 34 | Carrera: CV, entrevistas SOC, certificaciones | Simulacro de entrevista técnica |

---

## Recursos gratuitos para complementar

- **TryHackMe** (salas gratuitas, ruta "Pre Security" y "SOC Level 1" parcial)
- **OverTheWire – Bandit** (Linux)
- **LetsDefend** y **Blue Team Labs Online** (alertas y casos SOC, parte gratuita)
- **CyberDefenders** (retos de análisis Blue Team)
- **MITRE ATT&CK** (attack.mitre.org) y **OWASP Top 10** (owasp.org)
- Certificaciones de inicio a considerar más adelante: ISC2 CC, CompTIA Security+,
  CompTIA CySA+, Blue Team Level 1 (revisa precios y promociones vigentes).
