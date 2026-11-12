# Curso IA 3 · Claude Code y desarrollo asistido por IA — cómo darlo

> **Norma principal:** `PROMPT-MAESTRO.md` (información verificada con fuentes, estructura de
> 9 secciones, control de calidad y no publicar sin autorización). Si algo de este archivo lo
> contradice, manda el prompt maestro.

Objetivo: usar **Claude Code** para crear, desarrollar, depurar y mantener proyectos **con supervisión**: contexto, CLAUDE.md, permisos, hooks, skills y buenas prácticas de seguridad.
Es el curso 3 de 6 de la formación en IA (`PROPUESTA-IA-6-CURSOS.md`, versión 2, aprobada
el 12/11/2026 para implementación progresiva).

- **Necesitas antes:** IA 1 completo e IA 2 (Módulos 1 a 3). Recomendado: Módulo 1 de JavaScript o Python y la clase de Git.
- **Plan de Claude:** Pro o superior para la práctica; las clases 1.1 y 1.2 son gratuitas.
- **Proyecto del curso:** Aplicación base del equipo de agentes (ver la ruta y la sección 12 de la propuesta).

## Al empezar cada clase

1. Lee `progreso.md` y `ruta-aprendizaje.md`.
2. Repaso rápido de la clase anterior (si es la primera, sáltalo).
3. Sigue con la lección que toca, o la que yo elija en el menú.

## Formato de cada clase (HTML interactivo de 2 horas, ver `CLAUDE.md`)

Las 9 secciones del prompt maestro: presentación, activación, desarrollo teórico, demostración
práctica, actividades, práctica autónoma (con criterios para comprobarla), evaluación, resumen y
fuentes verificadas. Además:

- **Plan y lugar de práctica** en la ficha de la clase (campos `plan` y `donde` del catálogo).
- **La página enseña y evalúa; la práctica se hace en Claude**, con criterios para comprobarla.
- Términos en inglés de la documentación oficial con `<span lang="en">`.
- **Videos complementarios verificados**: los de la propuesta (sección 15) se vuelven a comprobar;
  si la clase no tiene video, se busca al crearla. Si no hay uno adecuado, se deja anotado en la
  clase el pendiente con su justificación (una clase no se termina sin esa búsqueda).
- **Mini-examen**, **apuntes en Word** en `apuntes/NN-tema.docx` y **actualiza `progreso.md`**.
- Clases nuevas: el siguiente número de archivo libre (`clase-01`, `clase-02`…), con el id
  `<curso>-01`, `<curso>-02`… (ver la ruta).

## Planes y costos (verificado el 12/11/2026; se vuelve a verificar al crear cada clase)

- **Ninguna clase necesita la API de pago** ni servicios externos obligatorios.
- **«Gratis»**: se hace con el plan gratuito de Claude. **«Pago»**: necesita Pro o superior.
- **Pro no es ilimitado:** tiene un límite por sesión de 5 horas y límites semanales, compartidos
  entre claude.ai, Claude Code y la app de escritorio. Los subagentes consumen del mismo límite.
- Si una clase es de pago, ofrece siempre la alternativa gratuita (diseñar y probar en el chat)
  o explica qué parte no se puede hacer sin pagar.
- Detalle completo: `VIABILIDAD-Y-CONSERVACION-IA.md`.

## Regla de seguridad (obligatoria en todos los cursos de IA)

- Nunca pegues en Claude **tokens, contraseñas, claves ni datos personales** (tuyos o ajenos).
- Claude Code se practica en **carpetas y repositorios de prueba**, nunca en la academia real.
- Revisa los permisos antes de aceptar cada acción de Claude Code.
- Todo lo que Claude afirma se comprueba: fuentes, fechas y cifras.

## Verificar antes de enseñar

Las funciones, los planes y los límites de Claude **cambian con frecuencia**. Al crear cada clase,
vuelve a verificar en la documentación oficial (platform.claude.com, code.claude.com,
support.claude.com y claude.com/pricing) lo que se enseña, y anota la fecha de consulta.

## Relación con los otros cursos (sin duplicar)

- No enseña Git ni a programar: enlaza a esas clases de JavaScript y Python.
- La clase 1.2 (terminal) se puede saltar si ya hiciste JavaScript M5·1.
- Las herramientas se **observan y aprueban** aquí (4.1); cómo funcionan y cómo restringirlas va en **IA 4**.
- Las skills se **usan** aquí (4.4); diseñarlas va en **IA 4**. El detalle de agentes va en **IA 5**.
- Su proyecto es **la aplicación base sobre la que trabajará el equipo de agentes** (IA 5 e IA 6).

## Estilo

- Toda práctica en una carpeta de prueba creada para la clase.
- Primero el modo plan; después se aprueba; al final se revisa el cambio y se prueba.
- Pistas antes que la solución.
