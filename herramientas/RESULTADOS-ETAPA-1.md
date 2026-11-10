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

## Pendiente (no incluido en esta etapa)

- Los archivos `cursos/<curso>/ruta-aprendizaje.md` todavía describen el temario anterior. Hay que
  actualizarlos a los módulos.
- El encabezado de cada clase dice «Clase 0X». Se ajustará al actualizar cada clase al estándar,
  después de que apruebes Ciberseguridad 01 como modelo.
- Al publicar, conviene recargar las páginas abiertas en cada equipo.
