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

| Clase | Tema | Videos | Estado |
|---|---|---|---|
| M1·1 | ¿Qué es la ciberseguridad? La tríada CIA | [▶ 1](https://www.youtube.com/watch?v=TM-OT1U3P0k) [▶ 2](https://www.youtube.com/watch?v=9hJ4fgfePfg) [▶ 3](https://www.youtube.com/watch?v=_MJt0ugOc_E) | ✔ Lista: `clases/clase-01.html` (id `ciber-01`) |
| M1·2 | Principios y marcos de seguridad: defensa en profundidad, mínimo privilegio, NIST CSF 2.0 y ética | [▶ 1](https://www.youtube.com/watch?v=dDHMro1NxM0) [▶ 2](https://www.youtube.com/watch?v=pPPiaGU12Og) [▶ 3](https://www.youtube.com/watch?v=rvsaVA_orPU) | Próximamente · **siguiente por crear** |
| M1·3 | Gestión del riesgo e higiene digital: contraseñas, MFA, actualizaciones y copias de seguridad | [▶ 1](https://www.youtube.com/watch?v=wZU25uB_iuA) [▶ 2](https://www.youtube.com/watch?v=aGggJPdW6MQ) [▶ 3](https://www.youtube.com/watch?v=YH_4JWKfzIk) | Próximamente |

#### Recursos audiovisuales del módulo

| Clase | Video | Canal · duración · idioma | Desde | Ayuda a comprender | Contraste documental |
|---|---|---|---|---|---|
| M1·1 | [Introducción a la ciberseguridad](https://www.youtube.com/watch?v=TM-OT1U3P0k) | INCIBE · 12:14 · español | inicio | qué es la ciberseguridad y por qué la información es un activo | [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) |
| M1·1 | [Conceptos de amenaza, riesgo y vulnerabilidad (URJCx)](https://www.youtube.com/watch?v=9hJ4fgfePfg) | universidadurjc · 2:35 · español | inicio | diferencias entre amenaza, riesgo y vulnerabilidad (lección universitaria) | [NIST SP 800-30 Rev. 1: Guide for Conducting Risk Assessments](https://csrc.nist.gov/pubs/sp/800/30/r1/final) |
| M1·1 | [¿Qué es la triada CIA en ciberseguridad? \| Curso CIBERSEGURIDAD desde 0 2025](https://www.youtube.com/watch?v=_MJt0ugOc_E) | RINKU · 5:01 · español | inicio | la tríada CIA: confidencialidad, integridad y disponibilidad | [NIST CSRC: glosario, confidentiality / integrity / availability](https://csrc.nist.gov/glossary/term/confidentiality) |
| M1·2 | [NIST Cybersecurity Framework 2.0 \| Todo lo que necesitas saber sobre la nueva versión](https://www.youtube.com/watch?v=dDHMro1NxM0) | SEGURIDAD CERO · 24:22 · español | inicio | el marco NIST CSF 2.0 y sus funciones, incluida la nueva función Gobernar | [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) |
| M1·2 | [The NIST Cybersecurity Framework (CSF) 2.0](https://www.youtube.com/watch?v=pPPiaGU12Og) | National Institute of Standards and Technology · 3:54 · inglés | inicio | presentación oficial del NIST CSF 2.0 (en inglés) | [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) |
| M1·2 | [Defensa en Profundidad \| Zero Trust \| Wild IT Academy](https://www.youtube.com/watch?v=rvsaVA_orPU) | Wild IT Academy · 22:56 · español | inicio | defensa en profundidad y Zero Trust | [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final) |
| M1·3 | [CONSTRUYENDO CONTRASEÑAS SEGURAS](https://www.youtube.com/watch?v=wZU25uB_iuA) | Agencia Española de Protección de Datos · 5:21 · español | inicio | cómo construir contraseñas seguras y fáciles de recordar | [NIST SP 800-63B: Digital Identity Guidelines (autenticación)](https://pages.nist.gov/800-63-4/sp800-63b.html); [INCIBE: Ciudadanía (consejos de ciberseguridad)](https://www.incibe.es/ciudadania) |
| M1·3 | [Sigue sin actualizar y mira lo que te puede ocurrir](https://www.youtube.com/watch?v=aGggJPdW6MQ) | Oficina de Seguridad del Internauta · 2:24 · español | inicio | por qué hay que mantener el equipo actualizado | [INCIBE: Ciudadanía (consejos de ciberseguridad)](https://www.incibe.es/ciudadania) |
| M1·3 | [Cómo proteger nuestros datos haciendo copias de seguridad](https://www.youtube.com/watch?v=YH_4JWKfzIk) | Oficina de Seguridad del Internauta · 2:04 · español | inicio | proteger los datos con copias de seguridad | [INCIBE: Ciudadanía (consejos de ciberseguridad)](https://www.incibe.es/ciudadania) |

## Módulo 2 · Sistemas operativos para analistas (5 clases · 10 h)

- **Objetivo:** Saber cómo funcionan Windows y Linux por dentro, y dónde mira un analista.
- **Competencias:** Distinguir procesos legítimos de sospechosos; manejar PowerShell y la terminal de Linux; leer permisos; conocer los lugares donde el malware suele instalarse para sobrevivir a un reinicio (persistencia).
- **Al terminar serás capaz de:** Revisar un equipo Windows o Linux y detectar procesos, cuentas o persistencia sospechosos.
- **Necesitas antes:** Módulo 1.
- **Evaluación del módulo:** Revisar un equipo Windows y otro Linux en simulación y redactar los hallazgos.
- **Proyecto:** Opcional: instalar Linux en una máquina virtual propia, como laboratorio personal.
- **Fuentes previstas** (se verifican al crear cada clase): Microsoft Learn (Sysmon, eventos), MITRE ATT&CK (táctica de persistencia), póster SANS "Hunt Evil".

| Clase | Tema | Videos | Estado |
|---|---|---|---|
| M2·1 | El computador por dentro: procesos, usuarios y permisos | [▶ 1](https://www.youtube.com/watch?v=CUsHYhyyQA0) | ✔ Lista: `clases/clase-02.html` (id `ciber-02`) |
| M2·2 | Línea de comandos: PowerShell para analistas | [▶ 1](https://www.youtube.com/watch?v=Hk7bHAFNuVA) [▶ 2](https://www.youtube.com/watch?v=1zVIKuHU30E) | ✔ Lista: `clases/clase-03.html` (id `ciber-03`) |
| M2·3 | Windows a fondo: servicios, registro, tareas programadas y persistencia | [▶ 1](https://www.youtube.com/watch?v=LFjflD8_RqU&t=923s) | Próximamente |
| M2·4 | Linux básico para seguridad | [▶ 1](https://www.youtube.com/watch?v=M3AayeYuzMI) [▶ 2](https://www.youtube.com/watch?v=ABgLEKFhlZE&t=2934s) [▶ 3](https://www.youtube.com/watch?v=ABgLEKFhlZE&t=10885s) | ✔ Lista: `clases/clase-04.html` (id `ciber-04`) |
| M2·5 | Linux para analistas: procesos, servicios, journalctl, cron y persistencia | [▶ 1](https://www.youtube.com/watch?v=k_jFLEVJ7UE&t=955s) | Próximamente |

#### Recursos audiovisuales del módulo

| Clase | Video | Canal · duración · idioma | Desde | Ayuda a comprender | Contraste documental |
|---|---|---|---|---|---|
| M2·1 | [Primeros pasos en Windows PowerShell \| 1/14 \| UPV](https://www.youtube.com/watch?v=CUsHYhyyQA0) | Universitat Politècnica de València - UPV · 9:37 · español | inicio | primeros pasos en PowerShell (lección universitaria) | las fuentes de la clase |
| M2·2 | [Sintaxis de los mandatos en Windows PowerShell \| 4/14 \| UPV](https://www.youtube.com/watch?v=Hk7bHAFNuVA) | Universitat Politècnica de València - UPV · 10:05 · español | inicio | sintaxis de los comandos de PowerShell | las fuentes de la clase |
| M2·2 | [El sistema de ayuda de Windows PowerShell \| 3/14 \| UPV](https://www.youtube.com/watch?v=1zVIKuHU30E) | Universitat Politècnica de València - UPV · 8:19 · español | inicio | el sistema de ayuda de PowerShell | las fuentes de la clase |
| M2·3 | [Windows Threat Detection 3 \| TryHackMe \| SOC Level 1 2025](https://www.youtube.com/watch?v=LFjflD8_RqU&t=923s) | WireDogSec · 37:37 · inglés | 15:23 | detectar persistencia en Windows: servicios, tareas programadas, claves Run y carpetas de inicio | [MITRE ATT&CK: Persistence (TA0003)](https://attack.mitre.org/tactics/TA0003/) |
| M2·4 | [🐧 Curso de LINUX desde CERO para PRINCIPIANTES](https://www.youtube.com/watch?v=M3AayeYuzMI) | El Pingüino de Mario · 33:17 · español | inicio | Linux desde cero: comandos y permisos | las fuentes de la clase |
| M2·4 | [Curso de BASH y Terminal desde CERO en Español](https://www.youtube.com/watch?v=ABgLEKFhlZE&t=2934s) | MoureDev by Brais Moure · 5:51:25 · español | 48:54 | comandos de navegación | las fuentes de la clase |
| M2·4 | [Curso de BASH y Terminal desde CERO en Español](https://www.youtube.com/watch?v=ABgLEKFhlZE&t=10885s) | MoureDev by Brais Moure · 5:51:25 · español | 3:01:25 | permisos en Linux | las fuentes de la clase |
| M2·5 | [How SOC Analysts Detect Linux Persistence \| Linux Threat Detection 3   TryHackMe \| SOC Level 1 2025](https://www.youtube.com/watch?v=k_jFLEVJ7UE&t=955s) | WireDogSec · 33:38 · inglés | 15:55 | detectar persistencia en Linux: arranque, cuentas y escalada de privilegios | [MITRE ATT&CK: Persistence (TA0003)](https://attack.mitre.org/tactics/TA0003/) |

## Módulo 3 · Redes y comunicaciones (5 clases · 10 h)

- **Objetivo:** Entender cómo viajan los datos y cómo se ven los ataques en la red.
- **Competencias:** Direccionamiento IP, puertos y protocolos; DNS, HTTP y HTTPS; servicios de red; leer capturas de tráfico; reconocer ataques de red comunes.
- **Al terminar serás capaz de:** Interpretar tráfico y servicios de red y reconocer ataques de red.
- **Necesitas antes:** Módulo 2. Los comandos de red usan PowerShell.
- **Evaluación del módulo:** Analizar una captura de red de práctica y explicar qué ocurrió.
- **Proyecto:** Mapa de la red de tu propia casa, solo con tus dispositivos.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 1918, RFC 5737, RFC 9110, documentación de Wireshark, IANA (puertos).

| Clase | Tema | Videos | Estado |
|---|---|---|---|
| M3·1 | Redes I: IP, MAC, puertos y protocolos | [▶ 1](https://www.youtube.com/watch?v=gVUE2IDwWA0) [▶ 2](https://www.youtube.com/watch?v=-7DiO35rbN8) [▶ 3](https://www.youtube.com/watch?v=iNh-62Mf0O4) | ✔ Lista: `clases/clase-05.html` (id `ciber-05`) |
| M3·2 | Redes II: DNS, HTTP y HTTPS (TLS y certificados) | [▶ 1](https://www.youtube.com/watch?v=gAstDaSaaWU) [▶ 2](https://www.youtube.com/watch?v=6HJAWFenYx8) | Próximamente |
| M3·3 | Servicios y arquitectura de red: DHCP, ARP, NAT, VPN, segmentación y firewalls | [▶ 1](https://www.youtube.com/watch?v=OsaOKS7Q-cE) [▶ 2](https://www.youtube.com/watch?v=Z6j3ZsqJMKg) | Próximamente |
| M3·4 | Análisis de tráfico con Wireshark (capturas de ejemplo) | [▶ 1](https://www.youtube.com/watch?v=u0aHPeuAU1E) [▶ 2](https://www.youtube.com/watch?v=mwqBUih8FG8) | Próximamente |
| M3·5 | Ataques de red y redes inalámbricas, desde la detección | [▶ 1](https://www.youtube.com/watch?v=UAypyo5RT_U) | Próximamente |

#### Recursos audiovisuales del módulo

| Clase | Video | Canal · duración · idioma | Desde | Ayuda a comprender | Contraste documental |
|---|---|---|---|---|---|
| M3·1 | [Qué es la IP pública. Curso de redes desde 0 \| Cap 1 \|](https://www.youtube.com/watch?v=gVUE2IDwWA0) | NASeros · 16:49 · español | inicio | qué es la IP pública | las fuentes de la clase |
| M3·1 | [Qué es un puerto y un socket. Curso de redes desde 0 \| Cap 5 \|](https://www.youtube.com/watch?v=-7DiO35rbN8) | NASeros · 12:42 · español | inicio | puertos y sockets | las fuentes de la clase |
| M3·1 | [Modelo de capas OSI y TCP/IP. Curso de redes desde 0 \| Cap 12 \|](https://www.youtube.com/watch?v=iNh-62Mf0O4) | NASeros · 24:02 · español | inicio | modelos OSI y TCP/IP | las fuentes de la clase |
| M3·2 | [Protocolo DNS - Cómo funciona - Fundamentos de Networking para redes IP](https://www.youtube.com/watch?v=gAstDaSaaWU) | RedesCiber - Tu Academia de Redes y Ciberseguridad · 12:33 · español | inicio | cómo funciona el protocolo DNS | [MDN: DNS (glosario, en inglés)](https://developer.mozilla.org/en-US/docs/Glossary/DNS) |
| M3·2 | [SSL, TLS, HTTPS, HTTP - Explicado Fácilmente](https://www.youtube.com/watch?v=6HJAWFenYx8) | Profe Sang · 8:50 · español | inicio | HTTP, HTTPS, SSL y TLS explicados | [MDN: Transport Layer Security (glosario, en inglés)](https://developer.mozilla.org/en-US/docs/Glossary/TLS); [MDN: Generalidades del protocolo HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Guides/Overview) |
| M3·3 | [Seguridad perimetral: Firewalls y DMZ (URJCx)](https://www.youtube.com/watch?v=OsaOKS7Q-cE) | universidadurjc · 5:07 · español | inicio | seguridad perimetral: firewalls y DMZ (lección de un curso universitario) | [NIST SP 800-41 Rev. 1: Guidelines on Firewalls and Firewall Policy](https://csrc.nist.gov/pubs/sp/800/41/r1/final) |
| M3·3 | [¿SEGMENTACIÓN de redes? Firewalls, Routers, VLANs, NGFW, ACL, IPS, IDS y más! Aprende CIBERSEGURIDAD](https://www.youtube.com/watch?v=Z6j3ZsqJMKg) | RedesCiber - Tu Academia de Redes y Ciberseguridad · 14:46 · español | inicio | segmentación de redes: firewalls, VLAN, ACL, IDS e IPS | [NIST SP 800-41 Rev. 1: Guidelines on Firewalls and Firewall Policy](https://csrc.nist.gov/pubs/sp/800/41/r1/final) |
| M3·4 | [Metodología de análisis de tráfico con Wireshark](https://www.youtube.com/watch?v=u0aHPeuAU1E) | David Pereira · 42:33 · español | inicio | metodología para analizar tráfico con Wireshark | [Wireshark User’s Guide](https://www.wireshark.org/docs/wsug_html_chunked/) |
| M3·4 | [Análisis de Tráfico de Red:  Análisis de tráfico con Wireshark \| Curso CIBERSEGURIDAD desde 0 2025](https://www.youtube.com/watch?v=mwqBUih8FG8) | RINKU · 16:24 · español | inicio | análisis de tráfico de red con Wireshark | [Wireshark User’s Guide](https://www.wireshark.org/docs/wsug_html_chunked/) |
| M3·5 | [Envenenamiento ARP - Ataque Man-in-the-Middle - ARP Poisoning \| Spoofing](https://www.youtube.com/watch?v=UAypyo5RT_U) | RedesCiber - Tu Academia de Redes y Ciberseguridad · 9:16 · español | inicio | envenenamiento ARP y ataques de intermediario (man-in-the-middle) | [MITRE ATT&CK: Adversary-in-the-Middle (T1557)](https://attack.mitre.org/techniques/T1557/) |

## Módulo 4 · Criptografía, identidad y acceso (3 clases · 6 h)

- **Objetivo:** Entender cómo se protegen los datos y cómo se controla quién entra.
- **Competencias:** Distinguir cifrado simétrico y asimétrico, hash y firma; entender los certificados; autenticación, MFA e inicio de sesión único; conceptos de Active Directory y Entra ID.
- **Al terminar serás capaz de:** Explicar cifrado, certificados e identidades, y detectar cuentas comprometidas.
- **Necesitas antes:** Módulos 1, 2 y 3.
- **Evaluación del módulo:** Caso de una cuenta comprometida.
- **Fuentes previstas** (se verifican al crear cada clase): Glosario NIST; Microsoft Learn (evento 4624).

| Clase | Tema | Videos | Estado |
|---|---|---|---|
| M4·1 | Criptografía aplicada: cifrado, hash, firmas y certificados | [▶ 1](https://www.youtube.com/watch?v=eZzCuGzwpdg) [▶ 2](https://www.youtube.com/watch?v=wDpqrasDmxM) | Próximamente |
| M4·2 | Autenticación e identidades: contraseñas, MFA, SSO y OAuth básico | [▶ 1](https://www.youtube.com/watch?v=HoQJhs00wk8) [▶ 2](https://www.youtube.com/watch?v=woFaVMP_Kio) | Próximamente |
| M4·3 | Active Directory y Entra ID para analistas: usuarios, grupos y eventos de inicio de sesión | [▶ 1](https://www.youtube.com/watch?v=M3fAyZGZQKc) | Próximamente |

#### Recursos audiovisuales del módulo

| Clase | Video | Canal · duración · idioma | Desde | Ayuda a comprender | Contraste documental |
|---|---|---|---|---|---|
| M4·1 | [Seguridad en la Información  - Criptografía Simétrica y Asimétrica - Fernando Pereñíguez](https://www.youtube.com/watch?v=eZzCuGzwpdg) | UCAM Universidad Católica de Murcia · 6:40 · español | inicio | criptografía simétrica y asimétrica (lección universitaria) | [NIST CSRC: glosario, cryptography](https://csrc.nist.gov/glossary/term/cryptography) |
| M4·1 | [Encriptación (Cifrado) Simétrica y Asimétrica - Explicado Fácilmente](https://www.youtube.com/watch?v=wDpqrasDmxM) | Profe Sang · 15:53 · español | inicio | cifrado simétrico y asimétrico con ejemplos | [NIST CSRC: glosario, cryptography](https://csrc.nist.gov/glossary/term/cryptography) |
| M4·2 | [Las 4 Formas de Autenticación que TODO Programador Debe Conocer](https://www.youtube.com/watch?v=HoQJhs00wk8) | Fazt Code · 26:55 · español | inicio | formas de autenticación: sesiones, tokens, OAuth y más | [NIST SP 800-63B: Digital Identity Guidelines (autenticación)](https://pages.nist.gov/800-63-4/sp800-63b.html) |
| M4·2 | [Introducción a OAuth 2.0: Los conceptos que necesitas entender](https://www.youtube.com/watch?v=woFaVMP_Kio) | Leo Códigos · 13:43 · español | inicio | conceptos de OAuth 2.0 | [OAuth 2.0 (sitio oficial)](https://oauth.net/2/) |
| M4·3 | [Windows Logon Events 4624, 4625, 4634 Explained](https://www.youtube.com/watch?v=M3fAyZGZQKc) | Infosec Wizard · 14:53 · inglés | inicio | eventos de inicio de sesión de Windows 4624, 4625 y 4634 | [Microsoft Learn: 4624, An account was successfully logged on](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4624) |

## Módulo 5 · Amenazas, vulnerabilidades y ataques (5 clases · 10 h)

- **Objetivo:** Conocer al adversario y las debilidades que aprovecha.
- **Competencias:** Clasificar malware; reconocer ingeniería social; usar CVE y CVSS; entender las fallas web más comunes; describir un ataque con la Cyber Kill Chain y MITRE ATT&CK.
- **Al terminar serás capaz de:** Clasificar amenazas y vulnerabilidades y describir un ataque con ATT&CK.
- **Necesitas antes:** Módulos 1, 2 y 3.
- **Evaluación del módulo:** Asignar técnicas de ATT&CK a un ataque narrado.
- **Fuentes previstas** (se verifican al crear cada clase): MITRE ATT&CK, OWASP Top 10, CVE.org, FIRST (CVSS v4.0).

| Clase | Tema | Videos | Estado |
|---|---|---|---|
| M5·1 | Malware: tipos y comportamiento | [▶ 1](https://www.youtube.com/watch?v=b7kEr04BjxM) | Próximamente |
| M5·2 | Ingeniería social y phishing | [▶ 1](https://www.youtube.com/watch?v=pnyOBx_m6CQ) | Próximamente |
| M5·3 | Vulnerabilidades: CVE, CVSS, catálogo KEV y gestión de parches | [▶ 1](https://www.youtube.com/watch?v=sIJ5WbCoUB8) [▶ 2](https://www.youtube.com/watch?v=oSyEGkX6sX0) | Próximamente |
| M5·4 | Seguridad web: OWASP Top 10:2025, con laboratorio local | [▶ 1](https://www.youtube.com/watch?v=7fv0j1krRJg) | Próximamente |
| M5·5 | Cómo atacan: Cyber Kill Chain y MITRE ATT&CK (con la evaluación del módulo) | [▶ 1](https://www.youtube.com/watch?v=2eRE-yLoTlM) [▶ 2](https://www.youtube.com/watch?v=II91fiUax2g) | Próximamente |

#### Recursos audiovisuales del módulo

| Clase | Video | Canal · duración · idioma | Desde | Ayuda a comprender | Contraste documental |
|---|---|---|---|---|---|
| M5·1 | [🦠 ¿Qué es un MALWARE? TIPOS de VIRUS ► Diccionario de hacking ético](https://www.youtube.com/watch?v=b7kEr04BjxM) | RINKU · 4:13 · español | inicio | qué es el malware y sus tipos | [INCIBE: Aprende ciberseguridad, Malware](https://www.incibe.es/aprendeciberseguridad/malware) |
| M5·2 | [Introducción e identificación de phishing](https://www.youtube.com/watch?v=pnyOBx_m6CQ) | INCIBE · 23:09 · español | inicio | cómo identificar un phishing (taller de INCIBE) | [INCIBE: Aprende ciberseguridad, Phishing](https://www.incibe.es/aprendeciberseguridad/phishing) |
| M5·3 | [¿Qué es un CVE - CPE - EXPLOIT? ¿Cómo funciona MITRE - NIST? Aprende ciberseguridad desde 0.](https://www.youtube.com/watch?v=sIJ5WbCoUB8) | ShellDredd Informática · 21:16 · español | inicio | qué es un CVE, un CPE y un exploit, y el papel de MITRE y NIST | [FIRST: Common Vulnerability Scoring System (CVSS)](https://www.first.org/cvss/); [CISA: Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) |
| M5·3 | [CVE and CVSS explained \| Security Detail](https://www.youtube.com/watch?v=oSyEGkX6sX0) | Red Hat · 3:44 · inglés | inicio | CVE y CVSS explicados por Red Hat (en inglés) | [FIRST: Common Vulnerability Scoring System (CVSS)](https://www.first.org/cvss/) |
| M5·4 | [Domina el Nuevo OWASP Top 10 2025 de forma practica - Analisis de cambios, ejemplos y laboratorios](https://www.youtube.com/watch?v=7fv0j1krRJg) | SEGURIDAD CERO · 56:09 · español | inicio | el OWASP Top 10:2025, sus cambios y ejemplos prácticos | [OWASP Top 10:2025](https://top10.owasp.org/2025/) |
| M5·5 | [¿Qué es MITRE ATT&CK y por qué está en boca de todos en ciberseguridad?](https://www.youtube.com/watch?v=2eRE-yLoTlM) | Hablemos de Ciberseguridad · 18:07 · español | inicio | qué es MITRE ATT&CK y cómo se usa | [MITRE ATT&CK](https://attack.mitre.org/) |
| M5·5 | [Cyber Kill Chain Explained: Breaking the Kill Chain](https://www.youtube.com/watch?v=II91fiUax2g) | The CISO Perspective · 13:18 · inglés | inicio | la Cyber Kill Chain y cómo romper la cadena (en inglés) | [MITRE ATT&CK](https://attack.mitre.org/) |

## Módulo 6 · Registros y monitoreo de seguridad (6 clases · 12 h)

- **Objetivo:** Encontrar señales de ataque en los registros y automatizar su detección.
- **Competencias:** Gestión de registros; eventos clave de Windows y Sysmon; registros de Linux, web y firewall; búsquedas y correlación en un SIEM; reglas de detección con Sigma.
- **Al terminar serás capaz de:** Buscar y correlacionar eventos en un SIEM y escribir reglas de detección.
- **Necesitas antes:** Módulos 2, 3 y 5.
- **Evaluación del módulo:** Escribir una regla que detecte un ataque visto en el curso.
- **Proyecto:** Un mini-SOC casero en una máquina virtual, si tu PC lo permite, o en simulación.
- **Fuentes previstas** (se verifican al crear cada clase): NIST SP 800-92, Microsoft Learn (eventos y Sysmon), repositorio SigmaHQ, documentación de Wazuh.

| Clase | Tema | Videos | Estado |
|---|---|---|---|
| M6·1 | Registros: qué son, de dónde vienen y cómo se gestionan | [▶ 1](https://www.youtube.com/watch?v=TlB-vGW-xLQ) | Próximamente |
| M6·2 | Eventos de Windows (4624, 4625, 4688, 4720, 7045) y Sysmon | [▶ 1](https://www.youtube.com/watch?v=PIbhoD68TPE&t=68s) [▶ 2](https://www.youtube.com/watch?v=MjU3JpnFc8E) | Próximamente |
| M6·3 | Registros de Linux, servidores web y firewall | — | Próximamente |
| M6·4 | SIEM I: conceptos, ingesta de datos y búsquedas | [▶ 1](https://www.youtube.com/watch?v=xgxJUUaD3lg) [▶ 2](https://www.youtube.com/watch?v=9RfsRn7m7OE) | Próximamente |
| M6·5 | SIEM II: correlación, paneles y alertas | — | Próximamente |
| M6·6 | Reglas de detección con Sigma | [▶ 1](https://www.youtube.com/watch?v=dThOKXxcHMM) | Próximamente |

#### Recursos audiovisuales del módulo

| Clase | Video | Canal · duración · idioma | Desde | Ayuda a comprender | Contraste documental |
|---|---|---|---|---|---|
| M6·1 | [how to CORRECTLY read logs as a Cybersecurity SOC Analyst](https://www.youtube.com/watch?v=TlB-vGW-xLQ) | Tech with Jono · 8:29 · inglés | inicio | cómo leer registros como un analista SOC (en inglés) | [NIST SP 800-92: Guide to Computer Security Log Management](https://csrc.nist.gov/pubs/sp/800/92/final) |
| M6·2 | [Sysmon for Beginners \| A Deep Dive into Windows Logging \| TryHackMe \| SOC Level 1](https://www.youtube.com/watch?v=PIbhoD68TPE&t=68s) | WireDogSec · 1:08:42 · inglés | 1:08 | Sysmon: configuración y búsqueda de actividad maliciosa (en inglés) | [Microsoft Learn: Sysmon](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon) |
| M6·2 | [Read Windows Process Logs Like a SOC Analyst (4688 + Sysmon)](https://www.youtube.com/watch?v=MjU3JpnFc8E) | Infosec Wizard · 18:14 · inglés | inicio | leer eventos de procesos de Windows: 4688 y Sysmon (en inglés) | [Microsoft Learn: Sysmon](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon) |
| M6·3 | Pendiente | — | — | No se encontró un video de calidad suficiente sobre registros de Linux, servidores web y firewall. | — |
| M6·4 | [📌 ¿Qué es un SIEM? ► Software para la Gestión de Información y Eventos de Seguridad \| Alberto López](https://www.youtube.com/watch?v=xgxJUUaD3lg) | AlbertoLopez TECH TIPS · 8:47 · español | inicio | qué es un SIEM y para qué sirve | [NIST SP 800-92: Guide to Computer Security Log Management](https://csrc.nist.gov/pubs/sp/800/92/final) |
| M6·4 | [What Is SIEM?](https://www.youtube.com/watch?v=9RfsRn7m7OE) | IBM Technology · 4:28 · inglés | inicio | qué es un SIEM, explicado por IBM (en inglés) | [NIST SP 800-92: Guide to Computer Security Log Management](https://csrc.nist.gov/pubs/sp/800/92/final) |
| M6·5 | Pendiente | — | — | El único video encontrado sobre Wazuh trata sobre todo de instalarlo; no cubre correlación, paneles y alertas. | — |
| M6·6 | [Sigma v2 Explained: Modifiers, pySigma, & Correlation Rules](https://www.youtube.com/watch?v=dThOKXxcHMM) | Adam Goss · 16:57 · inglés | inicio | reglas Sigma: estructura, modificadores y correlación (en inglés, nivel algo avanzado) | [SigmaHQ: documentación de reglas Sigma](https://sigmahq.io/docs/basics/rules.html) |

## Módulo 7 · Análisis de eventos e inteligencia de amenazas (4 clases · 8 h)

- **Objetivo:** Decidir rápido y bien qué es real, qué es grave y qué hacer.
- **Competencias:** Priorizar alertas y separar verdaderos de falsos positivos; analizar correos (SPF, DKIM, DMARC); usar indicadores de compromiso (IOC) e inteligencia de amenazas; hacer análisis básico de malware sin ejecutarlo.
- **Al terminar serás capaz de:** Priorizar alertas y analizar correos, indicadores y muestras sin riesgo.
- **Necesitas antes:** Módulos 5 y 6.
- **Evaluación del módulo:** Atender una cola de 10 alertas simuladas.
- **Fuentes previstas** (se verifican al crear cada clase): RFC 7489 (DMARC), MITRE ATT&CK.

| Clase | Tema | Videos | Estado |
|---|---|---|---|
| M7·1 | Triage de alertas: severidad, falsos positivos y escalamiento | [▶ 1](https://www.youtube.com/watch?v=VAEbftO0OK0&t=626s) | Próximamente |
| M7·2 | Análisis de correos sospechosos: cabeceras, SPF, DKIM y DMARC | [▶ 1](https://www.youtube.com/watch?v=fz4Ny5QBKHM) | Próximamente |
| M7·3 | Indicadores de compromiso e inteligencia de amenazas | [▶ 1](https://www.youtube.com/watch?v=UQtg9FeYMNQ) [▶ 2](https://www.youtube.com/watch?v=vDygXGJzWCY) | Próximamente |
| M7·4 | Análisis básico de malware sin ejecutarlo | — | Próximamente |

#### Recursos audiovisuales del módulo

| Clase | Video | Canal · duración · idioma | Desde | Ayuda a comprender | Contraste documental |
|---|---|---|---|---|---|
| M7·1 | [SOC 1 (2025-2026) \| EP4 \| SOC L1 Alert Triage \| TryHackMe SOC 1 \| Alert Triage Techniques](https://www.youtube.com/watch?v=VAEbftO0OK0&t=626s) | Hank Hackerson · 57:48 · inglés | 10:26 | eventos, alertas, propiedades, priorización y triaje (en inglés) | [NIST SP 800-61 Rev. 3: Incident Response Recommendations](https://csrc.nist.gov/pubs/sp/800/61/r3/final) |
| M7·2 | [Descubre el poder de SPF, DKIM y DMARC](https://www.youtube.com/watch?v=fz4Ny5QBKHM) | Pelado Nerd · 26:15 · español | inicio | SPF, DKIM y DMARC para autenticar el correo | [DMARC.org: Overview](https://dmarc.org/overview/) |
| M7·3 | [¿Qué es la PYRAMID OF PAIN en Ciberseguridad?](https://www.youtube.com/watch?v=UQtg9FeYMNQ) | TiziMass · 18:26 · español | inicio | la pirámide del dolor y los indicadores de compromiso | [NIST SP 800-150: Guide to Cyber Threat Information Sharing](https://csrc.nist.gov/pubs/sp/800/150/final) |
| M7·3 | [Cyber Threat Intelligence Explained: A Quick Guide for Beginners](https://www.youtube.com/watch?v=vDygXGJzWCY) | Adam Goss · 10:31 · inglés | inicio | qué es la inteligencia de amenazas (en inglés) | [NIST SP 800-150: Guide to Cyber Threat Information Sharing](https://csrc.nist.gov/pubs/sp/800/150/final) |
| M7·4 | Pendiente | — | — | El único video adecuado en español no tiene subtítulos y no se pudo comprobar su contenido. | — |

## Módulo 8 · Respuesta a incidentes (5 clases · 10 h)

- **Objetivo:** Responder a un incidente de principio a fin.
- **Competencias:** Aplicar el ciclo de respuesta de NIST SP 800-61r3; contener, erradicar y recuperar; preservar evidencia; usar playbooks; redactar un informe.
- **Al terminar serás capaz de:** Responder a un incidente y redactar el informe.
- **Necesitas antes:** Módulos 6 y 7.
- **Evaluación del módulo:** Simulacro de ransomware con informe final.
- **Fuentes previstas** (se verifican al crear cada clase): NIST SP 800-61r3, guía #StopRansomware de CISA.

| Clase | Tema | Videos | Estado |
|---|---|---|---|
| M8·1 | El ciclo de respuesta a incidentes (NIST SP 800-61r3) | [▶ 1](https://www.youtube.com/watch?v=Vv-FJINU2f0) | Próximamente |
| M8·2 | Contención, erradicación y recuperación | — | Próximamente |
| M8·3 | Forense básico: evidencia, cadena de custodia y línea de tiempo | [▶ 1](https://www.youtube.com/watch?v=bIZrGJrkGBM) | Próximamente |
| M8·4 | Playbooks y comunicación del incidente | [▶ 1](https://www.youtube.com/watch?v=JFRH3lWPFUg) | Próximamente |
| M8·5 | Redacción del informe de incidente | — | Próximamente |

#### Recursos audiovisuales del módulo

| Clase | Video | Canal · duración · idioma | Desde | Ayuda a comprender | Contraste documental |
|---|---|---|---|---|---|
| M8·1 | [NIST SP 800-61 Rev. 3 Explained \| Incident Response and Tabletop Exercises](https://www.youtube.com/watch?v=Vv-FJINU2f0) | ProfessorBlackOps - CyberSecurity for the people · 48:49 · inglés | inicio | NIST SP 800-61 Rev. 3 y ejercicios de mesa (transmisión en vivo, en inglés) | [NIST SP 800-61 Rev. 3: Incident Response Recommendations](https://csrc.nist.gov/pubs/sp/800/61/r3/final) |
| M8·2 | Pendiente | — | — | Los videos encontrados eran de promoción de productos; ninguno explica bien contención, erradicación y recuperación. | — |
| M8·3 | [Cadena de Custodia y Hash - 📚Aprende 🕵️‍♂️Informática Forense con 10 ⏰Minutos al dia. Cap 04](https://www.youtube.com/watch?v=bIZrGJrkGBM) | Alvaro Chirou · 9:02 · español | inicio | cadena de custodia y uso de hashes en la evidencia digital | [NIST SP 800-86: Integrating Forensic Techniques into Incident Response](https://csrc.nist.gov/pubs/sp/800/86/final) |
| M8·4 | [¿QUÉ es SOAR en CIBERSEGURIDAD? Orquestación, Automatización, Respuesta a Incidentes \| Alberto López](https://www.youtube.com/watch?v=JFRH3lWPFUg) | AlbertoLopez TECH TIPS · 12:55 · español | inicio | SOAR: orquestar y automatizar la respuesta con playbooks | [NIST SP 800-61 Rev. 3: Incident Response Recommendations](https://csrc.nist.gov/pubs/sp/800/61/r3/final) |
| M8·5 | Pendiente | — | — | No se encontró un video que enseñe a redactar un informe de incidente de ciberseguridad. | — |

## Módulo 9 · Operaciones SOC y carrera (5 clases · 10 h)

- **Objetivo:** Trabajar como lo hace un SOC real y prepararte para buscar empleo.
- **Competencias:** Roles, turnos y métricas de un SOC; búsqueda proactiva de amenazas (threat hunting) básica; monitoreo en la nube; resolver un caso de punta a punta; presentarte en una entrevista técnica.
- **Al terminar serás capaz de:** Trabajar en un turno SOC simulado y presentarte a una entrevista.
- **Necesitas antes:** Módulos 6, 7 y 8.
- **Proyecto:** Proyecto final del curso (ver más arriba).
- **Fuentes previstas** (se verifican al crear cada clase): NCSC (SOC), Centro Canadiense de Ciberseguridad (SOC), marco NICE.

| Clase | Tema | Videos | Estado |
|---|---|---|---|
| M9·1 | Cómo funciona un SOC: roles, turnos y métricas | [▶ 1](https://www.youtube.com/watch?v=f0jiMDaHe1E) [▶ 2](https://www.youtube.com/watch?v=Z2kzsOpH-_A) | Próximamente |
| M9·2 | Búsqueda proactiva de amenazas (threat hunting) básica | [▶ 1](https://www.youtube.com/watch?v=VNp35Uw_bSM) | Próximamente |
| M9·3 | Seguridad y monitoreo en la nube | [▶ 1](https://www.youtube.com/watch?v=ZuPxHCwT0ws) | Próximamente |
| M9·4 | Simulacro integral SOC: de la alerta al informe | [▶ 1](https://www.youtube.com/watch?v=E8mkSKTczLk&t=445s) | Próximamente |
| M9·5 | Carrera: certificaciones, portafolio y entrevista técnica | [▶ 1](https://www.youtube.com/watch?v=1YEO2MYMEGw) | Próximamente |

#### Recursos audiovisuales del módulo

| Clase | Video | Canal · duración · idioma | Desde | Ayuda a comprender | Contraste documental |
|---|---|---|---|---|---|
| M9·1 | [📌[SOC] ¿Qué es un SOC? ►Actividades y Responsabilidad de un CENTRO de OPERACIONES de SEGURIDAD](https://www.youtube.com/watch?v=f0jiMDaHe1E) | AlbertoLopez TECH TIPS · 7:30 · español | inicio | qué es un SOC, sus actividades y responsabilidades | [NICE Framework (NIST): roles de ciberseguridad](https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center) |
| M9·1 | [🛡️ Curso de SOC ANALYST para PRINCIPIANTES](https://www.youtube.com/watch?v=Z2kzsOpH-_A) | El Pingüino de Mario · 24:11 · español | inicio | curso exprés de analista SOC para principiantes | [NICE Framework (NIST): roles de ciberseguridad](https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center) |
| M9·2 | [Cybersecurity Threat Hunting Explained](https://www.youtube.com/watch?v=VNp35Uw_bSM) | IBM Technology · 6:50 · inglés | inicio | qué es la búsqueda proactiva de amenazas, explicado por IBM (en inglés) | [MITRE ATT&CK](https://attack.mitre.org/) |
| M9·3 | [Seguridad en la nube de AWS](https://www.youtube.com/watch?v=ZuPxHCwT0ws) | AWS Security Users Group LatAm · 38:24 · español | inicio | seguridad en la nube de AWS y la responsabilidad compartida | [AWS: Modelo de responsabilidad compartida](https://aws.amazon.com/es/compliance/shared-responsibility-model/) |
| M9·4 | [Curso Analista de Seguridad (SOC Analyst) gratuito en español](https://www.youtube.com/watch?v=E8mkSKTczLk&t=445s) | RINKU · 1:00:37 · español | 7:25 | cómo gestionar una alerta de principio a fin como analista SOC | [NIST SP 800-61 Rev. 3: Incident Response Recommendations](https://csrc.nist.gov/pubs/sp/800/61/r3/final) |
| M9·5 | [Cómo empezar en Ciberseguridad en 2026 (Roadmap REAL desde cero)](https://www.youtube.com/watch?v=1YEO2MYMEGw) | Fernando Alaniz CloudSec · 14:38 · español | inicio | ruta para empezar en ciberseguridad en 2026 | [NICE Framework (NIST): roles de ciberseguridad](https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center) |

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
