# Resultados de la Etapa 0 (10/11/2026)

## Pruebas de las 17 clases (`pruebas-clases.html`)
Servidor local `127.0.0.1:8765`, navegador interno de pruebas sin token. El almacenamiento del
navegador de pruebas quedó **idéntico** antes y después.

| Clase | Min. | Actividades | Exámenes | Terminal | Retos | Pista→solución | 360 px | Errores | Resultado |
|---|---|---|---|---|---|---|---|---|---|
| ciber-01 | 120 | 25/25 | 12/12 | — | — | sí | sí | 0 | CUMPLE |
| ciber-02 | 120 | 19/19 | 15/15 | 8/8 | — | sí | sí | 0 | CUMPLE |
| ciber-03 | 120 | 15/15 | 15/15 | 14/14 | — | sí | sí | 0 | CUMPLE |
| ciber-04 | 120 | 12/12 | 15/15 | 11/11 | — | sí | sí | 0 | CUMPLE |
| ciber-05 | 120 | 15/15 | 15/15 | 7/7 | — | sí | sí | 0 | CUMPLE |
| ingles-01 | 60 | 13/13 | 8/8 | — | — | sí | sí | 0 | CUMPLE |
| ingles-02 | 60 | 8/8 | 13/13 | — | — | sí | sí | 0 | CUMPLE |
| ingles-03 | 60 | 9/9 | 13/13 | — | — | sí | sí | 0 | CUMPLE |
| ingles-04 | 60 | 9/9 | 13/13 | — | — | sí | sí | 0 | CUMPLE |
| js-01 | 120 | 11/11 | 10/10 | — | 3/4 + 1 manual | sí | sí | 0 | CUMPLE |
| js-02 | 120 | 4/4 | 15/15 | — | 4/4 | sí | sí | 0 | CUMPLE |
| js-03 | 120 | 5/5 | 15/15 | — | 3/3 | sí | sí | 0 | CUMPLE |
| js-04 | 120 | 3/3 | 15/15 | — | 4/4 | sí | sí | 0 | CUMPLE |
| py-01 | 120 | 15/15 | 10/10 | 8/8 | — | sí | sí | 0 | CUMPLE |
| py-02 | 120 | 9/9 | 15/15 | 7/7 | — | sí | sí | 0 | CUMPLE |
| py-03 | 120 | 5/5 | 15/15 | 7/7 | — | sí | sí | 0 | CUMPLE |
| py-04 | 120 | 7/7 | 15/15 | — | — | sí | sí | 0 | CUMPLE |

- *js-01, reto "roto":* su solución está escrita como explicación, no como código, y no se puede
  ejecutar automáticamente. Se comprobó a mano con el código corregido: **reto superado**.
- *Primera ejecución:* marcó js-01 y js-02 para revisar. **La causa fue la prueba, no las clases**:
  en los retos de "arreglar código" la solución reemplaza el código inicial. La prueba se corrigió
  para intentar las dos formas.

## Pruebas de sincronización (`pruebas-sync.html`)
`sync.js` real (sin modificar) contra un GitHub simulado y dispositivos virtuales. Sin token real,
sin internet y sin tocar el almacenamiento del navegador.

| # | Escenario | Requisito | Resultado |
|---|---|---|---|
| 1 | Clases distintas en dos dispositivos | Conservar los cambios independientes | **CUMPLE** |
| 2 | Misma clase, actividades distintas (R1) | Fusionar ambas actividades | **NO CUMPLE**: se perdió la actividad del dispositivo A |
| 3 | La misma actividad en dos dispositivos | Conservar ambos resultados y avisar | **NO CUMPLE**: el 8/12 se descartó sin avisar |
| 4 | Notas distintas en dos dispositivos (R2) | Conservar ambos textos y avisar | **NO CUMPLE**: se perdió el texto de la laptop |
| 5 | Datos existentes al sumar un dispositivo | Nada existente desaparece | **CUMPLE** |
| 6 | Conectar un dispositivo con avance antiguo (R3) | No pisar avance más nuevo | **NO CUMPLE**: las notas viejas reemplazaron a las nuevas |
| 7 | Error de conexión al subir | No perder nada y reintentar solo | **PARCIAL**: no se pierde nada, pero queda pendiente hasta el próximo cambio |
| 8 | Guardado simultáneo (choque en GitHub) | Fusionar sin perder | **CUMPLE** |
| 9 | Duplicados tras muchas sincronizaciones | Sin duplicados | **CUMPLE** |
| 10 | El token nunca se sube | Sin datos de la clave en GitHub | **CUMPLE** |

## Revisión de los navegadores del alumno (diagnóstico de solo lectura)

| Computadora | Navegador | Lugar | Conectado | Registros | Posibles sin subir | Último estado | Respaldo |
|---|---|---|---|---|---|---|---|
| Esta PC (según el alumno) | Chrome | GitHub Pages | SÍ | 0 | 0 | ✔ Sincronizado (10/11) | No necesario (vacío) |
| Esta PC | Chrome | Doble clic | NO | 0 | 0 (nunca subidos: 0) | Nunca sincronizó | No necesario (vacío) |
| Esta PC | Edge | GitHub Pages y doble clic | — | 0 (confirmado por el alumno) | — | — | No necesario |
| Computadora 2 | Chrome / Edge | GitHub Pages | — | 0 (confirmado por el alumno) | — | — | No necesario |
| Computadora 3 | Chrome / Edge | GitHub Pages | — | 0 (confirmado por el alumno) | — | — | No necesario |
| Celular | — | — | — | 0 (confirmado por el alumno) | — | — | No necesario |

**Cierre de la revisión (10/11/2026):** dos combinaciones verificadas con el comando (0 registros).
El alumno confirma que la academia es reciente y que **no hay avance en ningún otro dispositivo**;
esas combinaciones quedan como *confirmadas por el alumno* (no revisadas con el comando). Con el
respaldo remoto verificado (0 registros) y los repositorios respaldados, **todo el avance
recuperable está protegido**.

**Conclusión:** la sincronización actual cumple 5 de 10 requisitos. Los fallos (2, 3, 4, 6 y 7) se
corregirían en la Etapa 0B, que requiere autorización para modificar `sync.js`.
