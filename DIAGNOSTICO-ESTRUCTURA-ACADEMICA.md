# Diagnóstico y estructura académica recomendada (antes del Lote 2)

> **Fecha:** 12/11/2026. **Tipo:** revisión y diagnóstico. **No se modificó nada:** ni el menú, ni el catálogo
> real, ni el motor, ni la sincronización, ni IA 01 o IA 02. No se migró, no se borró y no se publicó nada.
> **Principio aplicado:** conservar lo construido, organizar bien los contenidos y continuar desde donde
> quedamos, sin volver a empezar.

---

## Resumen en 6 puntos

1. **Tu academia está intacta.** El menú real, el catálogo, el motor, la sincronización con
   `academia-progreso`, tu avance, IA 01 e IA 02 son idénticos a la copia de respaldo.
2. **Los commits `710c45b` y `c9c9932` solo agregaron archivos de preparación.** No modificaron nada de lo
   que usas: crearon un borrador, carpetas, colores y una vista previa que el menú no carga.
3. **Estructura recomendada: 3 cursos**, como indicas. Redes (sin cambios), **IA: Claude** (un solo curso que
   reúne fundamentos, Claude Code, herramientas, skills, MCP, agentes, hooks, permisos, automatización y el
   proyecto de cinco agentes) y **Prompt Engineering** (curso propio).
4. **Encontré una pérdida en el borrador de 6 cursos:** Prompt Engineering tenía **32 clases** en tu curso real y
   el borrador las redujo a 20. Quedaron fuera temas que pediste el 11/11, como diseño web, automatización de
   tareas y oportunidades laborales. **Recomiendo recuperar las 32 tal como estaban.**
5. **Cifras recalculadas:** el objetivo (Redes + IA: Claude + Prompt) tiene **154 clases**; hay **5 creadas** y
   faltan **149**. El avance real es **3 %**.
6. **Nada exige pagar.** La academia no usa Claude ni APIs para funcionar. Claude solo se usa para las prácticas
   de los cursos de IA: con Claude gratis se estudia y se hacen las prácticas compatibles; Claude Pro se
   recomienda para las avanzadas, siempre con una alternativa por demostración.

---

## 1. Auditoría del trabajo realizado

### 1.1 Qué contienen realmente los dos commits

| Commit | Qué agregó | Qué modificó | ¿Afecta a la academia real? |
|---|---|---|---|
| `710c45b` (Lote 1) | Borrador de 6 cursos (`propuestas/ia-6-cursos.borrador.js`); 5 carpetas (`cursos/prompt`, `claudecode`, `extensiones`, `agentes`, `automatizacion`) con instrucciones y temario, sin clases; vista previa aislada; documento `VIABILIDAD-Y-CONSERVACION-IA.md` | 1 línea en `pruebas-clases.html` (duración de los cursos nuevos); 2 opciones nuevas en `generar-rutas.js` (sin opciones funciona igual); 5 colores nuevos en `academia.css` (solo líneas agregadas); bitácora | **No.** El menú no carga el borrador y los colores no se usan mientras los cursos no existan |
| `c9c9932` | — | Las descripciones de los cursos en el borrador (aviso de cuenta de Claude); bitácora | **No.** Solo cambió el borrador |

### 1.2 Verificación de lo que debe conservarse

Comparado con la etiqueta de respaldo `respaldo-antes-ia-6-cursos` (estado anterior a todo este trabajo):

| Elemento | Estado | Cómo se comprobó |
|---|---|---|
| IA 01 e IA 02 (páginas) | **Idénticas** | Comparación exacta de archivos |
| Catálogo real (`recursos/catalogo.js`) | **Idéntico** | Comparación exacta |
| Menú real (`inicio.html`) | **Idéntico**: 6 cursos; IA con 11 módulos y 55 clases | Comparación exacta |
| Motor (`academia.js`) y diferencias (`diferencias.js`) | **Idénticos** | Comparación exacta |
| Sincronización (`sync.js`) | **Idéntica**: guarda en `necofox/academia-progreso` | Comparación exacta y lectura de su configuración |
| Ciberseguridad, Inglés, JavaScript, Python y Redes | **Sin cambios** | Comparación de sus carpetas y de sus entradas del catálogo |
| Identificadores y avance | **Intactos** (las clases `ia-01` e `ia-02` conservan su `id` y `archivo`) | `revisar-catalogo.js` con la línea base |
| Rutas de aprendizaje de los 6 cursos reales | **Coinciden** con el catálogo | `generar-rutas.js --comprobar` |
| Pruebas | Clases 22/22 · Sincronización 15/15 | Ejecutadas en el navegador el 12/11/2026 |

**Arquitectura confirmada y sin cambios:** `academia` (público, la plataforma en GitHub Pages) y
`academia-progreso` (privado, tu avance, sincronizado con tu token). La única conexión externa de la academia es
la API de GitHub para esa sincronización. No hay llamadas a Claude ni a servicios de pago.

---

## 2. Contradicciones encontradas y recomendación

| # | Contradicción | Opciones | Recomendación |
|---|---|---|---|
| C1 | El borrador tiene **6 cursos**; tú quieres **IA: Claude** como un solo curso con módulos, y **Prompt Engineering** aparte | (a) 3 cursos: Redes, IA: Claude, Prompt · (b) mantener 6 · (c) 4 cursos con Claude Code aparte | **(a)**. Es lo que describes, no pierde contenido (solo se reagrupan módulos) y deja la academia lista para agregar clases o módulos sin reorganizar |
| C2 | El borrador redujo Prompt Engineering de **32 a 20 clases**; se perdieron temas que pediste (ver sección 5) | (a) recuperar las 32 clases originales · (b) quedarse con 20 | **(a)**. Ninguna de esas clases existía todavía, pero eran temas aprobados: se conservan tal como estaban en tu catálogo real |
| C3 | La etiqueta «Pago (Pro o superior)» se lee como un requisito | (a) cambiarla por «Recomendado: Claude Pro», con su alternativa · (b) dejarla | **(a)**. Respeta tu regla: Pro no es requisito para entrar ni para estudiar |
| C4 | IA 02 (línea 139) dice: «los Módulos 1 a 8 se hacen con el plan gratuito. Solo los Módulos 9 y 10, de Claude Code, necesitan un plan de pago». Con cualquier reorganización esa numeración deja de existir | (a) cambiar solo esa frase · (b) dejarla y agregar una nota en la ficha del catálogo · (c) decidir después | **(a)**, con tu autorización: es solo texto, no afecta el `id`, las actividades ni el avance. Texto propuesto en la sección 8 |
| C5 | El borrador cambió el título de la clase 1.3 («Primeros pasos en el chat: interfaz, configuración…»), mientras IA 02 anuncia «conversaciones, archivos, búsqueda web y estilos» | (a) volver al título original del catálogo real · (b) dejar el nuevo | **(a)**: «Primeros pasos: conversaciones, archivos, búsqueda web y estilos», que coincide con lo que anuncia IA 02 |
| C6 | Las carpetas `claudecode`, `extensiones`, `agentes` y `automatizacion`, sus colores y la vista previa reflejan 6 cursos | (a) conservarlas como archivo histórico y no usarlas · (b) eliminarlas más adelante con tu autorización · (c) reutilizar su contenido | **(a) + (c)**. No se borra nada ahora: su texto (instrucciones, avisos de seguridad y costos) se integra en `cursos/ia/instrucciones.md`. Borrarlas, solo si lo pides |
| C7 | IA: Claude quedaría con **21 módulos** | (a) 21 módulos con un prefijo por bloque en el título («Claude Code · …», como el actual «Prompting · Nivel 1») · (b) fusionar módulos pequeños | **(a)**. No elimina clases y el menú los muestra ordenados por bloque, sin cambiar su código |
| C8 | Los cursos deben poder estudiarse por separado, pero algunas clases de Claude Code usan técnicas de Prompt Engineering | — | Indicarlo como **recomendación** («conviene haber hecho Prompt Engineering, Módulos 1 a 3»), nunca como bloqueo |

---

## 3. Estructura académica recomendada

### A. Redes y Telecomunicaciones (sin cambios)

Curso independiente: **11 módulos · 51 clases · 102 h**. Tal como está en el menú real.

### B. Inteligencia Artificial: Claude (id `ia`, el mismo de hoy)

Un solo curso con **5 bloques de módulos**. El bloque va como prefijo en el título del módulo.
**21 módulos · 71 clases · 142 h.** IA 01 e IA 02 siguen siendo «Módulo 1 · Clase 1» y «Módulo 1 · Clase 2».

| Bloque | Módulos | Clases | Temas |
|---|---|---|---|
| Fundamentos | M1–M4 | 13 | Qué es Claude (IA 01), planes, apps y modelos (IA 02), primeros pasos, Claude frente a otras IA, proyectos, archivos, artefactos, estudiar, investigar, redactar, uso responsable, memoria y conectores |
| Claude Code | M5–M9 | 17 | Instalación, terminal, modos, proyectos, modo plan, checkpoints y Git, depuración, context engineering, CLAUDE.md, **permisos**, **hooks**, uso de skills, buenas prácticas, proyecto de la aplicación base |
| Herramientas, Skills y MCP | M10–M13 | 14 | Herramientas, diseño de **skills**, **MCP** (arquitectura, conectores, Claude Code, seguridad), plugins, kit del equipo |
| Agentes y subagentes | M14–M17 | 13 | **Agentes**, arquitectura, planificación, riesgos, **subagentes**, roles, delegación, coordinación, evaluación, supervisión humana, tres primeros agentes |
| Automatización y proyecto integrador | M18–M21 | 14 | Automatización, aprobaciones, **permisos y hooks** como controles, seguridad, **equipo de cinco agentes** (coordinador, investigador, analista, programador y revisor), validación, pruebas y defensa |

Los **hooks y permisos** se enseñan en Claude Code (M8) y se aplican como controles de seguridad en
Automatización (M19). El detalle de cada clase está en el borrador actual: las clases son las mismas, solo
cambia que pasan a ser módulos de un curso.

### C. Prompt Engineering (id `prompt`, curso independiente)

**6 módulos · 32 clases · 64 h.** Son exactamente las 32 clases de prompting de tu catálogo real, con sus títulos,
referencias al tutorial oficial de Anthropic y videos:

| Módulo | Clases | Viene del curso real |
|---|---|---|
| M1 Fundamentos del prompting | 4 | Prompting · Nivel 1 (M2) |
| M2 Técnicas fundamentales | 5 | Prompting · Nivel 2 (M3) |
| M3 Prompting estructurado | 6 | Prompting · Nivel 3 (M5) |
| M4 Prompting avanzado y evaluación | 6 | Prompting · Nivel 4 (M6) |
| M5 Aplicaciones profesionales | 7 | Prompting · Nivel 5 (M8) |
| M6 Proyecto integrador: biblioteca profesional de prompts | 4 | Proyecto (M11) |

Las mejoras de la revisión v2 (por ejemplo, «diagnosticar un mal resultado» o «criterios de éxito con casos de
prueba») se incorporan **dentro** de esas clases cuando se creen, sin quitar ninguna.

### El menú resultante

**7 cursos:** Ciberseguridad, Inglés, JavaScript, Python, Redes y Telecomunicaciones, IA: Claude y Prompt
Engineering. Para agregar más adelante una clase, un módulo o un curso basta con agregarlo al catálogo y crear
su página, sin reorganizar nada.

---

## 4. Aviso sobre cuentas de Claude

**La academia no exige ninguna suscripción.** Las páginas, la teoría, las actividades, los exámenes y la
sincronización funcionan sin Claude. Claude solo se usa para **practicar** en los cursos de IA.

**En la tarjeta de cada curso** (se conserva la idea ya agregada):

- **IA: Claude:** «Para estudiar y hacer las prácticas compatibles basta con Claude gratis; Claude Pro es
  recomendable para las prácticas avanzadas (Claude Code, agentes y automatización), y cada una ofrece una
  alternativa por demostración.»
- **Prompt Engineering:** «Para practicar basta con Claude gratis.»

**En cada clase**, tres etiquetas claras, en lugar de las actuales:

| Etiqueta actual | Etiqueta propuesta |
|---|---|
| «Gratis» | **Claude gratis** |
| «Pago (Pro o superior)» | **Recomendado: Claude Pro** · alternativa: demostración guiada |
| «Gratis (diseño) o pago (práctica en Claude Code)» | **Claude gratis** para el diseño · **Recomendado: Claude Pro** para la práctica |

---

## 5. Trazabilidad: dónde queda cada clase del curso de IA actual

Ninguna de estas clases existe todavía como página, salvo IA 01 e IA 02, así que no hay avance que perder. Aun
así, todas se conservan:

| Módulo actual (55 clases) | Destino recomendado | Cambio |
|---|---|---|
| M1 Fundamentos (4): IA 01, IA 02, Primeros pasos, Fluidez en IA | IA: Claude, bloque Fundamentos (M1 y M4) | IA 01 e IA 02 en su mismo lugar; «Fluidez en IA» pasa a M4 · 1 |
| M2 Prompting Nivel 1 (4) | Prompt Engineering M1 | Igual |
| M3 Prompting Nivel 2 (5) | Prompt Engineering M2 | Igual (el borrador había fusionado una: **se recupera**) |
| M4 Espacio de trabajo (4): proyectos, artefactos, memoria y conectores, Research/Chrome/Cowork | IA: Claude, Fundamentos (M2 y M4) y MCP (M12) | «Artefactos y archivos» se amplía a dos clases; conectores, a fondo en MCP |
| M5 Prompting Nivel 3 (6) | Prompt Engineering M3 | Igual (el borrador había movido dos clases: **se recuperan en su lugar**) |
| M6 Prompting Nivel 4 (6) | Prompt Engineering M4 | Igual (el borrador había fusionado «verificar con fuentes» y quitado «biblioteca y versiones»: **se recuperan**) |
| M7 Skills (3) | IA: Claude, Herramientas, Skills y MCP (M11) | Se amplía a 4 clases |
| M8 Prompting Nivel 5 (7) | Prompt Engineering M5 | Igual (el borrador había dejado 3: **se recuperan** diseño web, automatización de tareas y oportunidades laborales, negocios y productividad) |
| M9 Context engineering y Claude Code (7) | IA: Claude, bloque Claude Code (M5–M8) y MCP (M12) | Se amplía a 17 clases + 5 de MCP |
| M10 Agentes y automatización (5) | IA: Claude, bloques Agentes (M14–M17) y Automatización (M18) | Se amplía |
| M11 Proyecto: biblioteca de prompts (4) | Prompt Engineering M6 | Igual (el borrador lo había reducido a 1 clase: **se recupera**) |

**Videos:** los 23 que tenía el curso real están todos en la estructura recomendada (comprobado con un script).

---

## 6. Diagnóstico actualizado

### 6.1 Cifras por curso (recalculadas)

| Curso | Módulos | Clases planificadas | Creadas | Faltan | Horas por crear |
|---|---|---|---|---|---|
| Redes y Telecomunicaciones | 11 | 51 | 3 | **48** | 96 h |
| IA: Claude | 21 | 71 | 2 | **69** | 138 h |
| Prompt Engineering | 6 | 32 | 0 | **32** | 64 h |
| **Objetivo (3 cursos)** | **38** | **154** | **5** | **149** | **298 h** |

**Avance real del objetivo: 5 de 154 clases (3 %).**
Toda la academia: **22 de 310 clases** (7 %), contando Ciberseguridad (5/41), Inglés (4/40), JavaScript (4/37)
y Python (4/38), sin la electiva de Python.

### 6.2 Clases creadas y su verificación

| Clase | Estado |
|---|---|
| IA 01 e IA 02 | Creadas, con fuentes verificadas y pruebas aprobadas. **Revisadas y aprobadas por ti** |
| Redes 01, 02 y 03 | Creadas, con fuentes verificadas (algunos datos marcados como parcialmente verificados) y pruebas aprobadas. Redes 03 no tiene todavía tu revisión registrada |

### 6.3 Los cuatro estados del contenido

| Estado | Qué incluye |
|---|---|
| **Existente e integrado en la academia real** | 5 clases (Redes 01–03, IA 01–02); Redes con sus 51 clases planificadas; el curso de IA actual con 55 clases planificadas; menú, rutas y sincronización funcionando |
| **Preparado en borradores (no visible en el menú)** | Borrador de 6 cursos con 91 clases; 5 carpetas de cursos; vista previa; documento de viabilidad. Con la estructura recomendada, se reagrupa en 2 cursos (IA: Claude y Prompt Engineering) y se recuperan las 12 clases de prompting |
| **Pendiente de tu decisión** | Estructura de 3 cursos (C1); recuperar las 32 clases de Prompt (C2); etiquetas de cuenta (C3); frase de IA 02 (C4); título de la clase 1.3 (C5); horario de los cursos nuevos |
| **Pendiente de crear** | 149 clases |

### 6.4 Videos

| Curso | Clases con video verificado | Clases sin video (búsqueda pendiente) |
|---|---|---|
| Redes | 39 | 12 |
| IA: Claude | 29 | 42 |
| Prompt Engineering | 10 | 22 |
| **Total** | **78** | **76** |

Los videos se verificaron el 11 y 12/11/2026. Al crear cada clase se confirma de nuevo que siga disponible y
que corresponda al tema. Si una clase no tiene video, se busca; y si no hay uno adecuado, se registra el
pendiente con su justificación. El video de MoureDev que elegiste para Plugins (desde 2:30:23) se conserva en
IA: Claude, bloque Herramientas, Skills y MCP.

### 6.5 Actividades, evaluaciones y prácticas pendientes

Cada una de las 149 clases por crear necesita, según el prompt maestro:

- **Actividades** autocorregidas (normalmente 3 o 4) y un **examen** de 12 a 15 preguntas.
- **Práctica autónoma** con criterios para comprobarla. En los cursos de IA se hace en Claude, con su etiqueta
  de cuenta y la alternativa por demostración.
- **Resumen, videos y fuentes verificadas.**

Las **evaluaciones de módulo** y los **proyectos de curso** ya están planificados como clases dentro de esas 149:
el proyecto de la aplicación base, el kit de skills y MCP, los tres agentes, el equipo de cinco agentes y la
biblioteca de prompts. Los **apuntes en Word** se generan cuando terminas cada clase; por ahora solo existe el
de Ciberseguridad 01.

### 6.6 Estado técnico

| Pieza | Estado |
|---|---|
| Menú real | 6 cursos; sin cambios |
| Catálogo real | Sin cambios; IA con 11 módulos y 55 clases |
| Rutas de aprendizaje | Las 6 reales coinciden con el catálogo; hay 5 rutas más, generadas desde el borrador, que el menú no usa |
| Sincronización | Sin cambios; pruebas 15/15 |
| Pruebas de clases | 22/22 |

### 6.7 Estimación del trabajo restante

1. **Consolidación y migración (Lote 2 revisado), una vez que lo autorices.** Reagrupar el borrador en 3 cursos,
   recuperar las 12 clases de prompting, cambiar las etiquetas, regenerar rutas y vista previa, y luego pasarlo
   al menú real en un solo paso, con pruebas. Es **una entrega**: no crea clases ni toca tu avance.
2. **Crear las 149 clases**, en el orden de cada curso:
   - a 1 o 2 clases por revisión (el ritmo actual): unas **75 a 150 revisiones**;
   - a 3 o 4 clases del mismo módulo por revisión: unas **40 a 50 revisiones**.

---

## 7. Qué necesito que autorices (no haré nada hasta entonces)

1. La **estructura de 3 cursos** (sección 3).
2. **Recuperar las 32 clases** de Prompt Engineering.
3. Las **etiquetas de cuenta** de la sección 4.
4. Qué hacer con la **frase de IA 02** (sección 8).
5. El **título original** de la clase 1.3.
6. Después, el **Lote 2 revisado** (consolidar el borrador y migrar en un solo paso).

## 8. Texto propuesto para la línea 139 de IA 02

> **Actual:** «Para este curso: los Módulos 1 a 8 se hacen con el plan gratuito. Solo los Módulos 9 y 10, de
> Claude Code, necesitan un plan de pago. Y siempre hay una alternativa gratuita: diseñar y probar la
> instrucción en el chat.»
>
> **Propuesto:** «Para este curso: con el plan gratuito puedes estudiar todo y hacer las prácticas compatibles.
> Para las prácticas de Claude Code, agentes y automatización se recomienda Claude Pro. Y siempre hay una
> alternativa gratuita: diseñar y probar la instrucción en el chat.»

Cambian solo las dos primeras oraciones; la última se conserva igual. No afecta el `id`, las actividades, el examen, el reloj ni tu avance.
