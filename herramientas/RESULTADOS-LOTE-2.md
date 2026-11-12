# Resultados del Lote 2: integración de la estructura aprobada (etapas 0 a 5)

> **Fecha:** 12/11/2026. Documento creado en la Etapa 4 y completado en la Etapa 5, con la verificación final, la
> lista de archivos temporales eliminados y el hash del commit de la Etapa 4. **El Lote 2 está terminado**
> (sección 12).
> **Regla de este informe:** solo se registran pruebas que se ejecutaron. Lo que no se ejecutó se indica como
> pendiente o como no ejecutado, con su motivo.
> **Estructura aprobada:** `DIAGNOSTICO-ESTRUCTURA-ACADEMICA.md`.

---

## 1. Resumen

| Dato | Valor | Cómo se verificó |
|---|---|---|
| Cursos en el menú | **7** | Menú real abierto en el navegador de pruebas (Etapa 1) y `revisar-catalogo.js` (todas las etapas). El catálogo y el menú no cambiaron después de la Etapa 1 (huellas) |
| Redes y Telecomunicaciones | 11 módulos · 51 clases | `revisar-catalogo.js` y prueba de equivalencia |
| Inteligencia Artificial: Claude | 21 módulos (5 bloques) · 71 clases | `revisar-catalogo.js`, prueba de equivalencia y menú |
| Prompt Engineering | 6 módulos · 32 clases | `revisar-catalogo.js`, prueba de equivalencia y menú |
| Clases planificadas del objetivo | **154** (51 + 71 + 32) | Prueba de equivalencia |
| Clases existentes | **5** (Redes 01–03, IA 01 e IA 02) | `revisar-catalogo.js` y páginas en disco |
| Clases pendientes | **149** | 154 − 5 |
| Rutas de aprendizaje | **7/7** coinciden con el catálogo | `generar-rutas.js --comprobar` |
| Pruebas de clases | **22/22** | `herramientas/pruebas-clases.html` |
| Pruebas de sincronización | **15/15** | `herramientas/pruebas-sync.html` |
| Huella de los identificadores de avance | `d355163a…7933d`, **idéntica a la línea base** | SHA-256 de la lista que genera `pruebas-clases.html` |
| Push a GitHub | **Ninguno** | `git ls-remote`: `main` sigue en `43e8d6e` |
| `academia-progreso` | **Sin cambios** | Copia local en `14d8233`, sin cambios |

Todos estos datos se volvieron a comprobar en la Etapa 5 sobre el estado final (sección 12).

---

## 2. Estado inicial y línea base (Etapa 0-A, 12/11/2026 a las 02:42, hora local)

Solo lectura. Resultados:

- **Git:** árbol limpio; HEAD `05e83d1`; la etiqueta `respaldo-antes-lote-2` no existía.
- **GitHub:** `main` en `43e8d6e` (consulta de solo lectura con `git ls-remote`).
- **`academia-progreso`:** copia local en `14d8233`, sin cambios.
- **Huellas SHA-256** de los 90 archivos versionados, guardadas para comparar después.
- **`revisar-catalogo.js`:** correcto; 6 cursos, 22 clases listas y línea base de identificadores intacta.
- **`generar-rutas.js --comprobar`:** 6/6.
- **`revisar-coherencia.js`:** coherente. Escribe en pantalla, no en archivos.
- **Verificación del borrador aprobado:** 32/32 comprobaciones.
- **`pruebas-clases.html`:** 22/22. js-01 figura como «CUMPLE · con revisión manual», porque su reto «roto»
  se revisa a mano por diseño. El almacenamiento del navegador quedó igual que antes y no había token.
  Huella de los identificadores de avance:
  `d355163a30933a55a6e0182ee7ec51bc29c22bfc4e814821d62f910845b7933d`.
- **`pruebas-sync.html`:** 15/15, con 0 peticiones a dominios de GitHub.

## 3. Etapa 0-B: etiqueta de respaldo

- Etiqueta anotada **`respaldo-antes-lote-2`** → `05e83d1`.
- Solo cambia los metadatos de `.git`; no cambia ningún archivo de la academia.
- Es local: no está en GitHub (`git ls-remote --tags` = 0).

## 4. Etapa 1: catálogo, rutas y menú (commit `e0a5d69`)

**Cómo se hizo:**
1. Un script temporal, fuera del proyecto, leyó `recursos/catalogo.js` y `propuestas/ia-3-cursos.borrador.js`
   y escribió un candidato temporal. No escribió en la academia.
2. **Primera comparación estricta: falló.** Todos los valores coincidían; solo cambiaba el **orden de las claves**
   en los 6 módulos de Prompt Engineering. Se detuvo el trabajo y el alumno eligió conservar el orden exacto.
3. Se ajustó solo la función del script que escribe los módulos, se regeneró el candidato y la **comparación
   estricta (valores y orden) dio idénticos**. La referencia fue el catálogo anterior tomado de la etiqueta de
   respaldo más el borrador aprobado.
4. El candidato se copió a `recursos/catalogo.js`; copia comprobada byte a byte.
5. Las rutas se regeneraron solo para `ia` y `prompt` (`generar-rutas.js --solo ia,prompt`).

**Archivos modificados (5):**

| Archivo | Cambio |
|---|---|
| `recursos/catalogo.js` | Bloque del curso `ia` reemplazado por los 21 módulos aprobados y curso `prompt` agregado. Lo anterior y lo posterior al bloque, idéntico. De 861 a 1100 líneas |
| `inicio.html` | 2 líneas: `?v=2026-11-11b` → `2026-11-12a` en `academia.css` y `catalogo.js`. Código sin cambios |
| `herramientas/revisar-coherencia.js` | 1 línea de código (omitir también `prompt`) y su comentario |
| `cursos/ia/ruta-aprendizaje.md` | Solo entre marcas; el texto de fuera, idéntico |
| `cursos/prompt/ruta-aprendizaje.md` | Solo entre marcas; el texto de fuera, idéntico |

**Pruebas (ejecutadas):**
- Equivalencia estricta del catálogo real: 10/10. Incluye los 5 cursos no afectados idénticos, IA 01 e IA 02
  idénticas (n, archivo, id, etiqueta, lugar, videos, módulo y orden), la lista de cursos y el objetivo 154 / 5 / 149.
- `revisar-catalogo.js`: correcto, con 7 cursos. `generar-rutas.js --comprobar`: 7/7. `revisar-coherencia.js`:
  coherente, con informe idéntico al de la línea base.
- Huellas: solo cambiaron los 5 archivos; los otros 85 son idénticos. Páginas de clase modificadas: 0 de 22.
- `pruebas-clases.html`: 22/22, con la huella de identificadores idéntica. `pruebas-sync.html`: 15/15, 0
  peticiones a GitHub.
- Menú real en el navegador de pruebas:
  - 7 cursos: IA con 21 módulos (2 de 71 listas) y Prompt con 6 módulos (0 de 32).
  - IA 01 e IA 02 enlazan a sus archivos de siempre.
  - `catalogo.js?v=2026-11-12a`; 0 errores en la consola; sin desborde horizontal; 0 peticiones a GitHub.
  - Al abrirlo, el menú creó 2 claves de preferencia en ese navegador de pruebas (curso elegido y estado de
    sincronización «sin token»); se eliminaron para dejarlo como estaba.
- Capturas del menú en escritorio y a 360 px (Chrome sin ventana, perfil nuevo).

## 5. Etapa 2: guías y frase de Redes (commit `349066f`)

**Incidencia detectada antes de editar:** las guías de IA remitían los datos sensibles a «Ciberseguridad
(Módulo 7 · Clase 3)», pero esa clase es «Indicadores de compromiso e inteligencia de amenazas», y ninguna clase de
Ciberseguridad trata de datos sensibles. El error venía del commit `424a88b`. Se detuvo el trabajo y el alumno eligió
quitar la referencia y conservar la regla.

**Archivos modificados (5):**

| Archivo | Cambio |
|---|---|
| `cursos/ia/instrucciones.md` | Estructura en 5 bloques, etiquetas de cuenta aprobadas, reglas de seguridad de MCP y automatización, y referencias actualizadas. Sin la referencia errónea; regla conservada: «Los datos sensibles nunca se pegan en Claude» |
| `cursos/ia/ruta-aprendizaje.md` | Solo el texto fuera de las marcas; sin la referencia errónea |
| `cursos/prompt/instrucciones.md` | Curso independiente; requisitos, etiquetas y relaciones |
| `cursos/prompt/ruta-aprendizaje.md` | Solo el texto fuera de las marcas |
| `cursos/redes/ruta-aprendizaje.md` | Solo la línea 252: «curso de Claude» → «curso Prompt Engineering» |

**Pruebas (ejecutadas):**
- `generar-rutas.js --comprobar`: 7/7. Las partes generadas de las rutas de IA, Prompt y Redes son idénticas a
  las de la Etapa 1.
- `revisar-coherencia.js`: coherente. `revisar-catalogo.js`: correcto.
- **32 referencias** de los textos nuevos comprobadas contra el catálogo real: todas coinciden con su tema. El
  mensaje final del script decía «27» por una cifra mal escrita en el propio script; las líneas correctas
  fueron 32.
- No quedan textos antiguos: «Módulos 9 y 10», la propuesta de 6 cursos, «IA 2 ·», «curso 2 de 6»,
  «Pago (Pro» ni la referencia a Ciberseguridad M7.
- Huellas: solo cambiaron los 5 archivos. Páginas de clase modificadas desde la etiqueta: 0.
- **No ejecutadas en esta etapa:** las pruebas del navegador. Solo cambiaron archivos de texto que el
  navegador no carga, y las huellas confirmaron que las páginas, el catálogo, el motor y `sync.js` no cambiaron.

## 6. Etapa 3: nota de planes de IA 02 (commits `2c4ae91` y `bd4b1f8`)

**Incidencia detectada antes de editar:** el texto de la autorización no coincidía con el registrado como
aprobado, y además repetía «Para este curso:». Se detuvo el trabajo y el alumno eligió la opción A, su
redacción registrada.

**`2c4ae91`:** se aplicó la opción A en la línea 139 de `cursos/ia/clases/clase-02.html`.

**`bd4b1f8` (corrección):** por indicación expresa del alumno, con la línea completa, se aplicó el **texto
definitivo**:

> «**Para este curso:** con el plan gratuito puedes estudiar todo y hacer las prácticas compatibles. Para las
> prácticas de Claude Code, agentes y automatización se recomienda Claude Pro. Y siempre hay una alternativa
> gratuita: diseñar y probar la instrucción en el chat.»

**Comprobaciones de ambos commits (ejecutadas):**
- Cada commit cambia **1 línea** (la 139) de 476.
- `<strong>Para este curso:</strong>`, la sangría y el cierre `</p>` se conservan; la etiqueta aparece una sola
  vez. Claude Pro queda como recomendado.
- El script `window.CLASE` (líneas 388–471: id, bloques y reloj, actividades, examen y claves de avance) es
  idéntico al original.
- SHA-256 de `clase-02.html`: original `9b1cc3ce…` → `2e12631c…` (`2c4ae91`) → `2d04bbf4…` (`bd4b1f8`).
- `pruebas-clases.html`: 22/22 en los dos casos. La fila de IA 02 es idéntica a la línea base: 120 minutos,
  actividades 19/19, examen 12/12, pista antes de la solución, 360 px correcto y 0 errores JS. La huella de
  identificadores también es idéntica.
- `pruebas-sync.html`: 15/15 en los dos casos, con 0 peticiones a GitHub.
- `revisar-catalogo.js`: correcto. Rutas: 7/7.
- Huellas: en cada commit solo cambió `clase-02.html`. Otras páginas de clase modificadas: 0.
- Capturas de la nota: en escritorio y a 360 px con `2c4ae91`; en escritorio con `bd4b1f8`. El ajuste a 360 px
  de `bd4b1f8` lo comprobó `pruebas-clases.html`.

**Observación sin cambio:** la actividad «¿gratis o de pago?» de IA 02 sigue indicando que Claude Code, Opus y
Research «necesitan un plan de pago». Es correcto como dato de disponibilidad del producto y estaba fuera de lo
autorizado.

---

## 7. Commits locales

| Commit | Etapa | Archivos | Cambios |
|---|---|---|---|
| `e0a5d69` | 1 | 5 | +767 −359 |
| `349066f` | 2 | 5 | +132 −67 |
| `2c4ae91` | 3 | 1 | +1 −1 |
| `bd4b1f8` | 3 (corrección) | 1 | +1 −1 |
| `d6d07b0` | 4 | `CLAUDE.md`, `BITACORA.md`, `DIAGNOSTICO-ESTRUCTURA-ACADEMICA.md` y este archivo (nuevo) | +356 −28 |
| Commit de la Etapa 5 | 5 | Solo este archivo | Su hash figura en el informe de cierre de la Etapa 5 |

Después de la Etapa 4, y fuera del Lote 2, el alumno aprobó otros dos cambios: `5fdc761` (fuentes reforzadas en
JavaScript y Python 01–04) y `a57d0b2` (Python 02: las tildes en los nombres son una recomendación). La
verificación final de la Etapa 5 se hizo sobre el estado que ya los incluye.

Para deshacer una etapa sin tocar las demás: `git revert <commit>`. La etiqueta `respaldo-antes-lote-2` conserva el
estado anterior a todo el Lote 2.

## 8. Identificadores y conservación del avance

- **Huella de identificadores de avance** (`d355163a…7933d`): igual en la línea base, en la Etapa 1, en la
  Etapa 3 y en su corrección. En la Etapa 2 no se ejecutó, por los motivos de la sección 5.
- **IA 01 e IA 02** conservan en el catálogo su `n`, `archivo`, `id`, etiqueta, lugar, videos, módulo y orden.
- **Páginas de clase:** de las 22, solo `cursos/ia/clases/clase-02.html` cambió, en la línea 139, que está fuera
  de `window.CLASE`.
- **Sin cambios:** `herramientas/linea-base-identificadores.json` (huella `46e5e398f394261b…`) y
  `recursos/sync.js` (huella `079117e537fb9764…`), que sigue apuntando a `necofox/academia-progreso`.
- **Los cursos originales** (Ciberseguridad, Inglés, JavaScript y Python) y el catálogo de Redes son idénticos a
  los anteriores.

## 9. GitHub y `academia-progreso`

- **GitHub:** `main` en `43e8d6e` en todas las comprobaciones (Etapa 0-A, después de cada etapa y al preparar
  este documento). La etiqueta de respaldo no está en GitHub. **No se hizo ningún push.**
- **`academia-progreso`:** la copia local estaba en `14d8233` y sin cambios en todas las comprobaciones. No se
  modificó ni se sincronizó.

## 10. Pruebas ejecutadas y pendientes

| Prueba | Línea base (0-A) | Etapa 1 | Etapa 2 | Etapa 3 | Corrección | Etapa 5 |
|---|---|---|---|---|---|---|
| `revisar-catalogo.js` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| `generar-rutas.js --comprobar` | 6/6 | 7/7 | 7/7 | 7/7 | 7/7 | 7/7 |
| `revisar-coherencia.js` | ✔ | ✔ | ✔ | No ejecutada | No ejecutada | ✔ |
| Verificación del borrador (32) | 32/32 | — | — | — | — | — |
| Equivalencia estricta del catálogo | — | ✔ | — | — | — | ✔ |
| Huellas de archivos | Base | ✔ | ✔ | ✔ | ✔ | ✔ |
| `pruebas-clases.html` | 22/22 | 22/22 | No ejecutada | 22/22 | 22/22 | 22/22 |
| Huella de identificadores | Base | Igual | No ejecutada | Igual | Igual | Igual |
| `pruebas-sync.html` | 15/15 | 15/15 | No ejecutada | 15/15 | 15/15 | 15/15 |
| Menú real en el navegador | — | ✔ | — | — | — | ✔ (escritorio y 360 px) |
| Referencias de los textos | — | — | 32/32 | — | — | — |
| GitHub y `academia-progreso` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |

«No ejecutada» significa que esa prueba no se corrió en esa etapa, por no ser pertinente al cambio. El motivo
está en la sección de cada etapa. Ninguna prueba falló sin quedar resuelta antes de seguir.

**Etapa 5:** hecha. El detalle está en la sección 12.

**Fuera del Lote 2:** comprobar la sincronización real en un equipo con token. Solo es posible después de un push,
que requiere autorización expresa del alumno.

## 11. Observaciones y limitaciones

1. **Dónde se probó:** las pruebas del navegador se hicieron en el navegador interno de la app de desarrollo
   (127.0.0.1:8765), sin token. No se usaron los navegadores ni el avance real del alumno, ni otros dispositivos.
2. **Capturas:** se hicieron con Chrome sin ventana y un perfil nuevo, borrado después de cada captura.
3. **js-01:** su reto «roto» se revisa a mano por diseño de la clase (igual en todas las ejecuciones).
4. **Huellas:** se calcularon sobre los archivos del disco y se compararon siempre con el mismo método.
5. **Errores en mis propias comprobaciones, detectados y corregidos:**
   - La primera comparación de archivos protegidos de la Etapa 1 no encontraba los nombres, por el asterisco que
     `sha256sum` agrega en Windows, y se repitió correctamente.
   - El mensaje «27» del script de referencias de la Etapa 2; las referencias correctas fueron 32.
   - La cifra «33» del diagnóstico, corregida a 32 en la Etapa 4.
6. **Repositorio privado:** no se consultó el remoto de `academia-progreso` (no se usaron credenciales). Solo se
   revisó la copia local. Ningún paso tuvo acceso a ese repositorio: las pruebas de sincronización usan un GitHub
   simulado y el navegador de pruebas no tiene token.
7. **Sitio en línea:** la academia publicada no tiene estos cambios, porque no hubo push.
8. **Etapa 5:**
   - La primera captura del menú a 360 px salió incompleta porque se tomó antes de que la página terminara de
     dibujarse; se repitió con más tiempo y salió completa.
   - La primera comprobación del foco de teclado fue no concluyente, porque enfocar desde código no activa
     `:focus-visible`. Se repitió con la tecla Tab: el foco es visible.
   - En la prueba de sincronización, la pestaña solo conservaba las últimas peticiones de red, así que «0
     peticiones a GitHub» se refiere a las que pudo listar. Lo que garantiza que no hay escritura real es el
     diseño de la prueba (GitHub simulado, token ficticio).

---

## 12. Etapa 5: verificación final y limpieza (12/11/2026, a partir de las 04:02, hora local)

**Estado de partida:** árbol limpio; HEAD `a57d0b2`; desde la etiqueta, 7 commits (`e0a5d69`, `349066f`,
`2c4ae91`, `bd4b1f8`, `d6d07b0`, `5fdc761` y `a57d0b2`). Las etiquetas locales están intactas
(`respaldo-antes-lote-2` → `05e83d1`, más las 6 de respaldos anteriores). GitHub tiene 0 etiquetas.

**Pruebas ejecutadas sobre el estado final:**

| Prueba | Resultado |
|---|---|
| `revisar-catalogo.js` | Correcto: 7 cursos, 22 clases listas y línea base de identificadores intacta |
| `generar-rutas.js --comprobar` | 7/7 |
| `revisar-coherencia.js` | Coherente |
| Equivalencia estricta del catálogo (catálogo de la etiqueta + borrador aprobado = catálogo actual) | 10/10: valores y orden idénticos; Redes 51, IA 71 y Prompt 32; 154 planificadas, 5 creadas y 149 pendientes |
| Páginas de clase (22) | 9 cambiaron desde la etiqueta (IA 02, más JavaScript y Python 01–04 por `5fdc761` y `a57d0b2`). **En las 22, `window.CLASE` es idéntico al de la etiqueta** |
| Núcleo | Sin cambios desde la etiqueta: `academia.js`, `sync.js` (apunta a `necofox/academia-progreso`), `diferencias.js`, `academia.css`, `videos.json`, `linea-base-identificadores.json`, `pruebas-clases.html`, `pruebas-sync.html` y `.gitignore` |
| `pruebas-clases.html` | 22/22 (js-01 «con revisión manual», igual que siempre). Huella de identificadores `d355163a…7933d`, **idéntica a la línea base**. Almacenamiento del navegador de pruebas igual al terminar; sin token |
| `pruebas-sync.html` | 15/15 |
| Menú real (`inicio.html`) | 7 cursos; Redes con 11 módulos, IA con 21 y Prompt con 6; IA 01 e IA 02 enlazan a sus archivos; `catalogo.js?v=2026-11-12a`; 0 errores en la consola. Sin desborde horizontal a 302 px (ancho del panel), 360 px y 1280 px. Foco de teclado visible (borde de 2,4 px). Capturas en escritorio y a 360 px correctas. Se borraron las 2 claves de preferencia que el menú crea en el navegador de pruebas |
| GitHub | `main` en `43e8d6e`; el repositorio local va 36 commits por delante. **Sin push** |
| `academia-progreso` | Copia local en `14d8233` (10/11/2026), 0 cambios |

**Archivos temporales.** Todos estaban en la carpeta temporal de la sesión, fuera del proyecto. Se identificaron por
nombre y por fecha de creación (todos del 12/11/2026, durante el Lote 2), y se confirmó que ningún archivo de la
academia los usa.

| Elemento | Origen | Acción |
|---|---|---|
| Carpeta `lote2/` (41 archivos: evidencias, candidato del catálogo, catálogo anterior extraído de la etiqueta y capturas) | Creada a las 02:42 (Etapa 0-A) y usada hasta la Etapa 5 | **Eliminada** (sus resultados están en este documento) |
| `lote2-catalogo.js` | Script de la Etapa 1 (02:49) | **Eliminado** |
| `lote2-equivalencia.js` | Script de la Etapa 1 (02:49) | **Eliminado** |
| `lote2-rutas-manual.js` | Script de la Etapa 2 (02:59) | **Eliminado** |
| `verificar-3-cursos.js` | Creado a las 02:10, **antes** del Lote 2, para la consolidación de la estructura; solo se reutilizó en la Etapa 0-A | **Conservado** (no es exclusivo del Lote 2) |
| 20 perfiles de Chrome antiguos, verificación de fuentes de JavaScript y Python, y marcos de captura | Otras tareas y sesiones anteriores | **Conservados** |

Los perfiles de Chrome que se crearon durante el Lote 2 se borraron al terminar cada captura.

**No se cambió:** ninguna clase, curso, catálogo, ruta, motor ni sincronización; tampoco commits anteriores,
etiquetas ni respaldos, ni las dos líneas históricas de `BITACORA.md` con una ruta local. El commit `a57d0b2` se
mantiene. El único archivo modificado en esta etapa es este informe.

**Pendiente de decisión del alumno (no se cambió):** `BITACORA.md` («Pendientes» dice «Lote 2: falta la Etapa
5») y `DIAGNOSTICO-ESTRUCTURA-ACADEMICA.md` (sección 9.4, fila 5 «Pendiente») quedan desactualizados ahora que la
Etapa 5 terminó. Esta etapa solo autorizaba este informe.
