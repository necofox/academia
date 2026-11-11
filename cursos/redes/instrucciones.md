# Curso de Redes y Telecomunicaciones — cómo darlo

> **Norma principal:** `PROMPT-MAESTRO.md` (información verificada con fuentes, estructura de
> 9 secciones, control de calidad y no publicar sin autorización). Si algo de este archivo lo
> contradice, manda el prompt maestro.

Objetivo: aprender **redes desde cero** hasta diseñar, configurar, administrar y diagnosticar la
red de una empresa pequeña o mediana. La base sigue el temario oficial del examen **CCNA 200-301
v2.0** de Cisco (vigente desde el 03/02/2027) y se practica en **Cisco Packet Tracer**.
Empiezo sin saber de redes. Plan aprobado: `PROPUESTA-AMPLIACION-6-CURSOS.md` (sección 3).

## Al empezar cada clase

1. Lee `progreso.md` y `ruta-aprendizaje.md`.
2. Repaso rápido de la clase anterior (si es la primera, sáltalo).
3. Sigue con la lección que toca, o la que yo elija en el menú.

## Formato de cada clase (HTML interactivo de 2 horas, ver `CLAUDE.md`)

Las 9 secciones del prompt maestro: presentación, activación, desarrollo teórico, demostración
práctica, actividades, práctica autónoma (con criterios para comprobarla), evaluación, resumen y
fuentes verificadas. Además:

- **Analogía antes del término técnico**, con voz (`<div class="lectura">`).
- **Terminal simulada** del motor (`data-terminal`) para los comandos: primero los de Windows
  (`ipconfig`, `ping`, `tracert`, `nslookup`, `Test-NetConnection`) y, desde el Módulo 4, los de
  Cisco IOS.
- **Laboratorio en Packet Tracer** desde el Módulo 1 (clase 5), con los pasos y cómo comprobarlo.
- **Vocabulario de redes:** muchos términos se usan en inglés (router, switch, LAN…). Se marcan con
  `<span lang="en">` para que se lean con voz inglesa. No es una clase de inglés: es el vocabulario
  propio de las redes.
- **Videos complementarios** verificados (sección propia, con ficha y alternativa escrita), según
  el estándar de la sección 5 de la propuesta. Se vuelven a verificar con
  `herramientas/verificar-videos.py` al crear la clase.
- **Mini-examen** y **apuntes en Word** en `apuntes/NN-tema.docx`.
- **Actualiza `progreso.md`**.

## Datos de los ejemplos (obligatorio)

- Solo direcciones de documentación: **192.0.2.0/24, 198.51.100.0/24 y 203.0.113.0/24**
  (RFC 5737) y **2001:db8::/32** (RFC 3849). Para redes internas de ejemplo, las privadas del
  RFC 1918 (por ejemplo, 192.168.1.0/24), aclarando que lo son.
- Nombres de empresas y personas ficticios.
- Nunca pidas que escanee redes ajenas: solo mi propia red o el laboratorio simulado.

## Herramientas

- **Cisco Packet Tracer** (gratis, con cuenta de Cisco Networking Academy; solo PC: Windows,
  macOS o Linux, no hay versión para celular). Explícame cómo instalarlo antes de usarlo.
- **Comandos de Windows** en PowerShell o Símbolo del sistema (ya están en el PC).
- Wireshark se ve a fondo en Ciberseguridad (Módulo 3); aquí solo se interpretan salidas.
- Los archivos de Packet Tracer (`.pkt`) van en `cursos/redes/proyectos/`.

## Relación con otros cursos (sin duplicar)

- Ciberseguridad 05 (IP, MAC y puertos) ya existe: aquí se explica a fondo; allá se usa para
  detectar ataques.
- Redes configura las defensas en los equipos; Ciberseguridad detecta y analiza los ataques.
- Para el examen CCNA (solo en inglés o japonés) conviene el Módulo 5 del curso de Inglés.
- El curso **no reemplaza** la preparación oficial de Cisco para certificarse.

## Estilo

- Paso a paso, comprobando que entiendo antes de avanzar. Pistas antes que la solución.
- Primero el «para qué sirve» con un ejemplo cotidiano; después el término y el detalle.
- Diagnóstico ordenado: de lo físico (cable, Wi-Fi) a lo lógico (dirección, puerta de enlace, DNS).
