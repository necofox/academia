# Resultados de la Etapa 1: cursos organizados por módulos (10/11/2026)

Autorizada por el alumno. Marca de restauración previa: `respaldo-antes-etapa-1` (→ `530f51d`).
**Nada se publicó ni se subió a GitHub.**

## Qué cambió

| Archivo | Cambio |
|---|---|
| `recursos/catalogo.js` | Cursos → módulos → clases, según la propuesta aprobada. Las clases planificadas aparecen como «Próximamente». Se sigue generando la lista plana `clases` |
| `inicio.html` | Módulos plegables con objetivo, horas y avance por módulo. Etiqueta «Módulo X · Clase Y» y «Te toca esta». Sugerencia del día por módulo. Versión `?v=` en sus archivos para evitar la caché |
| `recursos/academia.css` | 20 líneas nuevas para los módulos (nada existente cambió) |
| `herramientas/revisar-catalogo.js` | Nueva revisión automática del catálogo (solo lectura) |
| `CLAUDE.md`, `BITACORA.md` | Cómo agregar una clase dentro de su módulo y el estado de cada curso |

**Sin cambios:** las 17 clases, `academia.js`, `sync.js` (salvo lo de la Etapa 0B), `index.html`
y el repositorio privado.

## Estructura que muestra el menú

| Curso | Módulos | Clases planificadas | Horas | Clases listas y su lugar |
|---|---|---|---|---|
| Ciberseguridad | 9 | 41 | 82 | 01→M1·1, 02→M2·1, 03→M2·2, 04→M2·4, 05→M3·1 |
| Inglés | 5 | 40 | 40 | 01–04 → M1·1 a M1·4 |
| JavaScript | 7 | 37 | 74 | 01–04 → M1·1 a M1·4 |
| Python | 9 + electiva | 38 + 3 | 76 + 6 | 01–04 → M1·1 a M1·4 |

Coincide con las secciones 2 a 6 de `PROPUESTA-ORGANIZACION-CURRICULAR.md`. Cada clase existente
muestra también su número de página (por ejemplo, «Módulo 2 · Clase 4 (en la página: Clase 04)»),
porque el encabezado de cada clase todavía dice «Clase 04» y no se modificó.

## Pruebas y resultados

| Prueba | Resultado |
|---|---|
| `node herramientas/revisar-catalogo.js` | ✔ 17 clases listas; archivos, ids, números y títulos idénticos al catálogo anterior; cada id coincide con su página; sin repetidos |
| Pruebas de las 17 clases (`pruebas-clases.html`) | **17/17 cumplen**, 0 errores, 136 identificadores intactos |
| Pruebas de sincronización (`pruebas-sync.html`) | **15/15 cumplen** |
| Menú en escritorio (1280 px) | 4 cursos y sus módulos. Se abren los que tienen clases listas. Al elegir un curso, el foco pasa al título del panel |
| Menú a 360 px | Sin scroll horizontal en ninguno de los 4 cursos (con todos los módulos abiertos) |
| Teclado | Tab llega a cada módulo; Enter lo abre y lo cierra; contorno de foco amarillo visible |
| Contraste | Mínimo 6.58:1 (texto «Próximamente», con su transparencia); los demás, entre 7.8 y 10.2:1 |
| Avance con datos ficticios | «Terminada · examen 10/12», «Continuar» en la clase empezada, «Te toca esta» en la siguiente, barras del 33 % y del 14 %, y sugerencia del día actualizada |
| Portada `index.html` | Sigue redirigiendo a `inicio.html` |
| Clase abierta desde el menú (Ciber 04) | Funciona; su enlace «☰ Menú» vuelve a `inicio.html`; sin errores |
| Doble clic (`file://`) en Edge y en Chrome | El menú carga completo con estilos (4 cursos, 9 módulos, 41 clases) |
| Caché vieja tras publicar | Con el catálogo anterior, el menú nuevo muestra las clases sin errores. Además, `?v=` obliga a bajar los archivos nuevos |

En todas las pruebas con datos ficticios, el almacenamiento del navegador de pruebas se restauró
**idéntico** al de antes. El token nunca se usó.

## Pendiente (no incluido en la primera parte)

- ~~Los archivos `ruta-aprendizaje.md` describen el temario anterior.~~ Resuelto en la segunda
  parte (ver abajo).
- El encabezado de cada clase dice «Clase 0X». Se ajustará al actualizar cada clase al estándar,
  después de que apruebes Ciberseguridad 01 como modelo.
- Al publicar, conviene recargar las páginas abiertas en cada equipo.

---

# Segunda parte: pendientes de la Etapa 1 (11/11/2026)

Pedidos por el alumno después de aprobar visualmente la organización por módulos. **Nada se
publicó.** Las 17 clases no se modificaron y no se crearon clases nuevas.

## Archivos modificados

| Archivo | Cambio |
|---|---|
| `recursos/catalogo.js` | Cada curso suma su meta y su proyecto final; cada módulo, sus competencias, logro, previos, evaluación, proyecto y fuentes previstas (de la propuesta). Se completaron 9 títulos de clases futuras para parecerse más a la propuesta (ninguno de las 17 clases existentes). Los 3 objetivos de módulo que no coincidían ahora usan el texto exacto de la propuesta |
| `cursos/*/ruta-aprendizaje.md` (4) | Reescritas por módulos. La zona de módulos y clases se genera desde el catálogo; la introducción y los recursos se escriben a mano y se conservaron (recursos gratuitos, transparencia de horas en inglés, contenidos compartidos, ideas para después) |
| `recursos/diferencias.js` (nuevo) | El aviso «Tus equipos guardaron cosas distintas», sacado de `inicio.html` para que el menú y la demostración usen exactamente el mismo |
| `inicio.html` | Usa `recursos/diferencias.js`; versión `?v=2026-11-11` en sus archivos (el catálogo cambió) |
| `herramientas/generar-rutas.js` (nuevo) | Genera las rutas desde el catálogo; `--comprobar` revisa que coincidan sin escribir |
| `herramientas/revisar-coherencia.js` (nuevo) | Compara el catálogo con la propuesta, módulo por módulo |
| `herramientas/RESULTADOS-COHERENCIA.md` (nuevo) | Resultado de esa revisión |
| `herramientas/demo-diferencias.html` (nuevo) | Demostración de diferencias con datos ficticios |
| `CLAUDE.md`, `BITACORA.md` | Al crear una clase, regenerar la ruta; estructura y registro de cambios |

## 1. Rutas de aprendizaje = catálogo

- `node herramientas/generar-rutas.js --comprobar` → ✔ en los 4 cursos.
- Cada ruta muestra la meta del curso, la duración, las clases listas, la siguiente clase por
  crear y el proyecto final. También trae una tabla resumen de módulos (clases, horas, listas y
  previos). Por cada módulo: objetivo, competencias, logro, previos, evaluación, proyecto, fuentes
  previstas y la tabla de clases con su estado.
- Siguiente clase por crear (primera «Próximamente» en orden): Ciberseguridad M1·2, Inglés M1·5,
  JavaScript M1·5 y Python M1·5, igual que la prioridad de la propuesta (sección 7).

## 2. Demostración de diferencias (`herramientas/demo-diferencias.html`)

Una Laptop y una PC ficticias, con un GitHub simulado, en 5 pasos: dos equipos al día → cada
uno trabaja sin internet → vuelve internet → decides en el mismo aviso del menú → la Laptop recibe
tu decisión. Una tabla muestra en cada paso qué tiene cada equipo y GitHub, y el registro conserva
las versiones no elegidas.

| Prueba | Resultado |
|---|---|
| Recorrido con «Unir las dos» y «Usar la otra versión» | Paso 3: se unieron solas las actividades CIA y SOC; 2 diferencias (examen 9/12 contra 10/12, y notas). Al final los 5 datos coinciden en los dos equipos y en GitHub; el registro guarda las versiones reemplazadas |
| Recorrido con «Quedarme con la que se usa ahora» (×2) | Al final todo coincide |
| «Empezar de nuevo» | Vuelve al inicio y oculta el aviso |
| Aislamiento | Almacenamiento real del navegador: 0 claves antes y después. Red: solo 4 archivos locales (CSS, catálogo, `diferencias.js` y `sync.js`); ninguna llamada a GitHub |
| 360 px | Sin scroll horizontal |
| Consola | Sin errores en una pestaña limpia |

**Límite:** se abre desde el servidor local o, cuando se publique, desde GitHub Pages. Con doble
clic (`file://`) muestra cómo abrirla, porque el navegador no permite leer `sync.js` así. Para que
también funcione con doble clic habría que reorganizar `sync.js` (sin cambiar su lógica); no se
hizo sin tu autorización.

## 3. Coherencia con la propuesta (`herramientas/revisar-coherencia.js`)

En los 31 módulos (incluida la electiva) coinciden título, cantidad de clases, horas, objetivo, competencias, logro,
previos (y cada módulo solo depende de módulos anteriores), lugar de las clases existentes y
parecido de los títulos. También coinciden los totales: 41 · 40 · 37 · 38 (+3).

- **Corregido durante la revisión:** Inglés M1 tenía «(nivel A1)» añadido al objetivo, y Python M2
  y M5 tenían una redacción distinta. Ahora usan el texto exacto de la propuesta.
- **Anotado:** la propuesta no trae «Objetivo» en Python M2–M8 (el catálogo usa sus competencias).
  Tampoco define objetivo para JavaScript M7, Python M9 y la electiva; el catálogo usa una
  redacción derivada del título. Tampoco fija previos para los proyectos finales; las rutas
  recomiendan haber terminado los módulos anteriores.
- **El revisor detecta errores:** con 4 catálogos alterados a propósito (previos fuera de orden,
  clases 02 y 03 intercambiadas, una clase menos y un título cambiado) marcó ✘ en los 4. Con el
  catálogo real, 0 diferencias.

## 4. Las 17 clases siguen intactas

| Prueba | Resultado |
|---|---|
| `git diff respaldo-etapa-0 -- cursos/*/clases/*.html` | Sin cambios |
| Contenido byte a byte frente a `respaldo-etapa-0` | 17/17 idénticos (4 archivos tienen fin de línea de Windows en la carpeta; git los guarda iguales) |
| `node herramientas/revisar-catalogo.js` | ✔ 17 clases listas, cada id coincide con su página |
| `pruebas-clases.html` | 17/17 cumplen, 0 errores, 136 identificadores presentes |
| `pruebas-sync.html` | 15/15 cumplen |
| Menú a 360 px (4 cursos, todos los módulos abiertos) | Sin scroll horizontal |
| Menú con doble clic en Edge (sin ventana, perfil temporal) | 4 cursos, 9 módulos, 41 clases; aviso oculto |
| Aviso del menú con `diferencias.js` | Muestra y resuelve una diferencia de prueba igual que antes |

## Pendientes para tu aprobación

- Aprobar esta segunda parte (rutas, demostración y coherencia).
- Decidir si quieres que la demostración funcione también con doble clic (requiere tocar `sync.js`).
- Aprobar Ciberseguridad 01 como modelo, antes de corregir las otras 16 clases.
- Autorizar la publicación cuando lo decidas (hay commits locales sin subir).
