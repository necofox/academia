# Curso Inteligencia Artificial: Claude — cómo darlo

> **Norma principal:** `PROMPT-MAESTRO.md` (información verificada con fuentes, estructura de
> 9 secciones, control de calidad y no publicar sin autorización). Si algo de este archivo lo
> contradice, manda el prompt maestro.

Objetivo: usar **Claude** con criterio y seguridad, desde el chat hasta **Claude Code**, y ampliar
sus capacidades con **herramientas, skills y MCP** para diseñar, coordinar y automatizar un equipo
de **agentes** especializados, siempre con supervisión humana. **Sin depender de la API de pago.**
Empiezo desde cero. Estructura aprobada el 12/11/2026: `DIAGNOSTICO-ESTRUCTURA-ACADEMICA.md`.
La técnica de instrucciones (prompt engineering) se enseña en el curso independiente
**Prompt Engineering** (`cursos/prompt/`).

## Estructura: 21 módulos en 5 bloques

| Bloque | Módulos | Qué se aprende | Pieza del proyecto |
|---|---|---|---|
| Fundamentos | 1 a 4 | Qué es Claude, planes, primeros pasos, proyectos, archivos, estudiar e investigar, uso responsable | — |
| Claude Code | 5 a 9 | Instalación, proyectos, modo plan, Git, contexto, CLAUDE.md, permisos y hooks | La aplicación base |
| Herramientas, Skills y MCP | 10 a 13 | Herramientas, skills, MCP y plugins | El kit: dos skills y una conexión MCP |
| Agentes | 14 a 17 | Agentes, subagentes, coordinación y supervisión | Investigador, analista y revisor |
| Automatización | 18 a 21 | Automatizar con controles e integrar el equipo | Equipo de cinco agentes |

**Proyecto final:** un equipo de cinco agentes supervisados (coordinador, investigador, analista,
programador y revisor de calidad), construido por etapas a lo largo de los bloques.

## Al empezar cada clase

1. Lee `progreso.md` y `ruta-aprendizaje.md`.
2. Repaso rápido de la clase anterior (si es la primera, sáltalo).
3. Sigue con la lección que toca, o la que yo elija en el menú.

## Formato de cada clase (HTML interactivo de 2 horas, ver `CLAUDE.md`)

Las 9 secciones del prompt maestro: presentación, activación, desarrollo teórico, demostración
práctica, actividades, práctica autónoma (con criterios para comprobarla), evaluación, resumen y
fuentes verificadas. Además:

- **Cuenta de Claude y lugar de práctica** en la ficha de la clase (campos `plan` y `donde` del
  catálogo). Etiquetas aprobadas:
  - «Claude gratis» (con su condición, si la tiene: hasta 5 proyectos, activar la ejecución de
    código, 1 conector personalizado…).
  - «Recomendado: Claude Pro (la práctica usa Claude Code, que no está en el plan gratis) ·
    alternativa: demostración guiada».
  - «Claude gratis para el diseño · recomendado Claude Pro para la práctica en Claude Code».
- **La etiqueta se verifica en cada caso** al crear la clase, en la documentación oficial.
- **La página enseña y evalúa; la práctica se hace en Claude** (chat web, de escritorio o
  Claude Code), con criterios para comprobar el resultado por mi cuenta.
- Términos en inglés de la documentación oficial (prompt, token, context window…) con
  `<span lang="en">`.
- **Videos complementarios** verificados (sección propia, con ficha y alternativa escrita). Los del
  catálogo se vuelven a comprobar al crear la clase; si una clase no tiene video, se busca. Si no hay
  uno adecuado, se deja anotado el pendiente con su justificación: una clase no se termina sin esa
  búsqueda.
- **Mini-examen** y **apuntes en Word** en `apuntes/NN-tema.docx`.
- **Actualiza `progreso.md`**.

## Cuentas de Claude (la academia no exige ninguna suscripción)

- Las páginas, la teoría, las actividades y los exámenes funcionan **sin Claude**. Claude solo se
  usa para practicar.
- **Claude gratis** basta para el material y las prácticas que no usan funciones exclusivas.
- **Claude Pro** se indica como **recomendado** solo cuando una práctica lo justifica. Cuando una
  práctica usa una función que no está en el plan gratis, se ofrece una alternativa guiada o una
  demostración.
- **Ninguna clase necesita la API de pago** ni servicios externos de pago.
- **Pro no es ilimitado:** tiene un límite por sesión de 5 horas y límites semanales, compartidos
  entre claude.ai, Claude Code y la app de escritorio. Los subagentes consumen del mismo límite.

## Regla de seguridad del curso (obligatoria)

- Nunca pegues en Claude **tokens, contraseñas, claves ni datos personales** (tuyos o ajenos).
  Los datos sensibles nunca se pegan en Claude.
- Claude Code se practica en **carpetas y repositorios de prueba**, nunca en la academia real.
- Revisa los permisos antes de aceptar cada acción de Claude Code.
- Ningún servidor MCP ni plugin de terceros se instala sin evaluarlo antes: quién lo publica, qué
  permisos pide y qué datos ve. Los servidores de referencia oficiales de MCP son educativos, no
  para producción.
- Toda automatización tiene un punto de aprobación humana y una forma de apagarla, y se documenta:
  qué hace, cuándo corre, qué consume y cómo se detiene.
- Todo lo que Claude afirma se comprueba: fuentes, fechas y cifras.

## Verificar antes de enseñar

Las funciones, los planes y los límites de Claude **cambian con frecuencia**. Al crear cada clase,
vuelve a verificar en la documentación oficial (platform.claude.com, code.claude.com,
support.claude.com y claude.com/pricing) lo que se enseña y la etiqueta de cuenta de la clase, y
anota la fecha de consulta.

## Relación con otros cursos (sin duplicar)

- **Prompt Engineering:** enseña la técnica de instrucciones. Antes del bloque Claude Code conviene
  haber hecho sus Módulos 1 a 3, y antes del bloque Agentes, su Módulo 4. Es una recomendación, no
  un requisito.
- Este curso no enseña a programar: enseña a pedir, revisar y corregir código con Claude. Para el
  bloque Claude Code conviene el Módulo 1 de JavaScript o de Python.
- No enseña Git: muestra cómo trabajar con Git junto a Claude Code (Módulo 6 · Clase 3) y enlaza a
  la clase «Git y GitHub» (JavaScript, Módulo 5 · Clase 2; Python, Módulo 5 · Clase 1).
- La nivelación de terminal (Módulo 5 · Clase 2) se puede saltar si ya hiciste JavaScript,
  Módulo 5 · Clase 1.

## Estilo

- Cada función con una demostración y, cuando la práctica recomienda Claude Pro, su alternativa
  gratuita.
- Primero entender por qué funciona; después practicar en Claude y medir el resultado.
- Pistas antes que la solución.
