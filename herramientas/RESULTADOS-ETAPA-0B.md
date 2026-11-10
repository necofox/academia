# Resultados de la Etapa 0B: sincronización segura (10/11/2026)

Autorizada por el alumno. Marca de restauración previa: `respaldo-antes-0b` (→ `656ed76`).
La marca `respaldo-etapa-0` y los respaldos de `C:\Users\alvar\respaldos-academia\` no se tocaron.
**Nada se publicó ni se subió a GitHub.**

## Qué cambió

| Archivo | Cambio |
|---|---|
| `recursos/sync.js` | Versión 2: fusión de tres vías, diferencias guardadas, respaldo local, reintentos y protección de la clase abierta |
| `inicio.html` | Nuevo aviso «Tus equipos guardaron cosas distintas» para decidir qué conservar (aparece solo si hay diferencias) |
| `recursos/academia.css` | 11 líneas nuevas para ese aviso (nada existente cambió) |
| `herramientas/pruebas-sync.html` | 15 escenarios (antes 10) y opción de comparar con otra versión |
| `herramientas/diagnostico-progreso.js` | Entiende la versión 2 (sigue siendo de solo lectura) |

**Sin cambios:** las 17 clases, `academia.js`, `catalogo.js`, `index.html` y el repositorio
privado. El formato de `progreso.json` sigue siendo compatible (`{ v, t }` por registro).

## Cómo decide ahora la sincronización

| Dato | Si cambió en un solo equipo | Si cambió en los dos equipos |
|---|---|---|
| Resultados de actividades y exámenes | Se toma el cambio | Se fusiona **actividad por actividad**. Si la misma actividad tiene notas distintas, se guardan las dos y el menú pide decidir |
| Misiones de terminal y retos superados | Se toma el cambio | Se **suman** (nunca se quitan) |
| Notas y código | Se toma el cambio | Se guardan **las dos versiones** y el menú pide decidir (quedarse con una o unirlas) |
| Posición del reloj de la clase | Se toma el cambio | Gana la más reciente; la otra queda en el respaldo local (no es un resultado) |
| Un dato que falta en un lado | Se toma el del otro lado: **nada se borra** | — |

Para saber qué lado cambió, cada equipo recuerda el último valor que compartía con GitHub
(«base»). Ya no se depende solo de la hora de cada equipo.

## Pruebas de sincronización (`pruebas-sync.html`): 15 de 15 cumplen

| # | Escenario | Antes (v1) | Ahora (v2) |
|---|---|---|---|
| 1 | Clases distintas en dos dispositivos | CUMPLE | **CUMPLE** |
| 2 | Misma clase, actividades distintas (R1) | NO CUMPLE | **CUMPLE**: quedan las dos actividades, sin avisos innecesarios |
| 3 | La misma actividad cambiada en dos dispositivos | NO CUMPLE | **CUMPLE**: 8/12 y 10/12 guardados; aviso en los dos equipos |
| 4 | Notas distintas en dos dispositivos (R2) | NO CUMPLE | **CUMPLE**: los dos textos guardados y aviso |
| 5 | Datos existentes al sumar un dispositivo | CUMPLE | **CUMPLE** |
| 6 | Conectar un equipo con avance antiguo (R3) | NO CUMPLE | **CUMPLE**: se conservan las notas nuevas; las viejas quedan como diferencia y en el respaldo local |
| 7 | Error de conexión al subir | PARCIAL | **CUMPLE**: queda «pendiente», se reintenta solo y también al volver a abrir la página |
| 8 | Guardado simultáneo (choque en GitHub) | CUMPLE | **CUMPLE** |
| 9 | Duplicados tras muchas sincronizaciones | CUMPLE | **CUMPLE** (también sin misiones repetidas) |
| 10 | El token nunca se sube | CUMPLE | **CUMPLE** (tampoco las voces ni el curso elegido) |
| 11 | Decidir una diferencia desde el menú | NO CUMPLE | **CUMPLE**: la decisión llega a todos los equipos y la versión descartada queda registrada |
| 12 | Clase abierta con datos viejos en memoria | NO CUMPLE | **CUMPLE**: no se pisa el avance que llegó de otro equipo |
| 13 | Otra pestaña cambia las notas de la clase abierta | NO CUMPLE | **CUMPLE**: los dos textos guardados y aviso |
| 14 | Archivo `progreso.json` del formato anterior | CUMPLE | **CUMPLE** |
| 15 | Equipo sin token | CUMPLE | **CUMPLE**: 0 llamadas a internet |

- La columna «Antes» se obtuvo corriendo **las mismas 15 pruebas** contra el `sync.js` anterior
  (sacado de la marca `respaldo-antes-0b`): 7 cumplen y 8 no. Así se comprueba que las pruebas
  detectan los fallos.
- La versión nueva se ejecutó **4 veces**: 15/15 en todas.

## Pruebas de las 17 clases (`pruebas-clases.html`): 17 de 17 cumplen

Mismos resultados que en la Etapa 0, clase por clase (minutos, actividades, exámenes, terminales,
retos, pista→solución, 360 px y 0 errores). Los **136 identificadores** de la línea base (17 de
clase y 119 de actividades, exámenes, terminales, retos y notas) siguen
presentes: no falta ni cambió ninguno. Almacenamiento de pruebas restaurado tal como estaba.

## Aviso de diferencias en el menú (probado en el navegador)

- Con dos diferencias de prueba (notas y examen) el menú muestra el aviso con las dos versiones,
  el equipo y la fecha de cada una.
- «Unir las dos» juntó los textos; «Usar la otra versión» pidió confirmación y cambió el examen a
  9/15, y el estado de la clase en el menú se actualizó.
- Cada decisión guarda la versión reemplazada en el registro de la diferencia y en el respaldo
  local.
- Escritorio (1280 px) y móvil (360 px): sin desbordes ni errores en la consola.
- Accesibilidad: controles `<button>` con texto visible, mensaje en `role="status"` y el foco pasa
  a la siguiente decisión.
- Los datos de prueba se borraron después y el almacenamiento quedó **idéntico** al de antes.

## Límites conocidos (para decidir el alumno)

1. **Al publicar,** cada equipo debe recargar las páginas abiertas para usar la versión 2. Hoy no hay
   avance en ningún equipo, así que no hay riesgo.
2. **Posición del reloj:** si cambia en dos equipos a la vez, gana la más reciente sin preguntar
   (la otra queda en el respaldo local). Es la posición del cronómetro, no una nota.
3. **Respaldo local:** guarda las últimas 100 copias por navegador. Además, el historial de commits
   del repositorio privado conserva cada versión subida.
4. **Misma clase en dos pestañas escribiendo a la vez:** no se pierde nada, pero puede generar
   varias diferencias para decidir. La clase muestra el aviso «Recarga la página (F5)».
