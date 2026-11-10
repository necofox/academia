# Bitácora de la academia

Registro de todo lo que se ha construido y decidido, para no perder el hilo entre
sesiones y computadoras. **Claude: lee esto al empezar y agrega una entrada al final
de "Registro de cambios" cada vez que hagas un cambio importante.**

> Este archivo está en el repositorio **público**: no escribas aquí notas de exámenes,
> datos personales ni claves. Lo personal va en `cursos/*/progreso.md` (que no se publica).

---

## 0. Norma principal

**`PROMPT-MAESTRO.md`** (escrito por el alumno) manda sobre todo lo demás: información real y
verificada con fuentes confiables, estructura de 9 secciones por clase, control de calidad,
transparencia (verificado / parcialmente verificado / pendiente) y **no hacer `git push` ni
publicar sin autorización expresa del alumno**.

## 1. Qué es esto

Una academia personal para aprender **desde cero**, con Claude como profesor y en español:

| Curso | Objetivo | Duración por clase |
|-------|----------|--------------------|
| Ciberseguridad | De cero a analista SOC | 2 horas |
| Inglés básico | Desde cero, con audio | 1 hora |
| JavaScript | Desarrollo web (frontend y Node.js) | 2 horas |
| Python | Desarrollo de software | 2 horas |

- **Enlace para estudiar (todas las computadoras y el celular):** https://necofox.github.io/academia/
- **Carpeta en la PC principal:** `C:\Users\alvar\OneDrive\Desktop\Cyberseguridad`
- **Avance privado:** repositorio `necofox/academia-progreso` (clonado en `..\academia-progreso`).

## 2. Estado actual (actualizar al agregar clases)

| Curso | Clases listas | Siguiente clase por crear |
|-------|---------------|---------------------------|
| Ciberseguridad | 01 CIA · 02 Procesos y permisos · 03 PowerShell · 04 Linux · 05 Redes I | 06 Redes II: DNS, HTTP/HTTPS, DHCP |
| Inglés | 01 Saludos · 02 Presentarte · 03 Abecedario · 04 Números | 05 Pronombres |
| JavaScript | 01 ¿Qué es programar? · 02 Variables · 03 Operadores y textos · 04 Condicionales | 05 Bucles |
| Python | 01 Instalación y primer programa · 02 Variables e input() · 03 f-strings · 04 Condicionales | 05 Bucles |

El temario completo de cada curso está en `cursos/<curso>/ruta-aprendizaje.md`.

## 3. Cómo está construido

```
CLAUDE.md                 reglas generales (Claude las lee siempre)
BITACORA.md               este archivo
inicio.html               menú: elegir curso y clase, ver avance, conectar GitHub
index.html                redirige a inicio.html (portada de GitHub Pages)
recursos/
  academia.js             motor de TODAS las clases (no duplicar en cada página)
  academia.css            estilo (tema oscuro; .tema-ingles, .tema-js, .tema-python)
  catalogo.js             lista de cursos y clases que muestra el menú
  sync.js                 sincroniza el avance con el repositorio privado
cursos/<curso>/
  instrucciones.md        cómo dar ese curso
  ruta-aprendizaje.md     temario
  clases/clase-NN.html    las clases (públicas)
  progreso.md             avance y notas      (privado, no se publica)
  apuntes/                apuntes en Word     (privado, no se publica)
  proyectos/              programas del alumno (privado, no se publica)
```

**Componentes del motor** (se declaran en `window.CLASE` de cada página):
reloj y agenda por bloques · lectura en voz alta (`.lectura`, lee con voz inglesa lo marcado
con `lang="en"`) · botones de audio 🔊/🐢 (`data-en`, `data-lento`) · actividades con pista
antes de la solución (`data-actividad`) · exámenes (`data-quiz`) · terminal simulada
(`data-terminal`, opciones `mayusculas` y `sinEspacios`) · editor que ejecuta JavaScript real
con retos autocorregidos (`data-editor`) · notas y resumen.

**Sincronización:** cada página guarda el avance en el navegador (`localStorage`, claves
`academia:<idClase>:…`) y `sync.js` lo sube a `progreso.json` del repositorio privado con un
token de GitHub de grano fino (solo ese repositorio, permiso Contents). El alumno pega el token
una vez por navegador en el menú. **Claude nunca pide ni escribe ese token.**
Desde la Etapa 0B (versión 2) la fusión es de tres vías y **nunca descarta datos**:
- Los resultados se fusionan actividad por actividad.
- Las misiones y los retos se suman.
- Si las notas o el código cambian en dos equipos, se guardan las dos versiones en
  `academia:sync:conflictos` y el menú pide decidir.
- Antes de reemplazar algo propio se guarda una copia en `academia-sync:respaldo`.
- Lo que no se pudo subir queda pendiente y se reintenta solo.

Detalle y pruebas: `herramientas/RESULTADOS-ETAPA-0B.md`. Para cambiar `sync.js`, correr antes
y después `herramientas/pruebas-sync.html` (15 escenarios).

## 4. Decisiones importantes (y por qué)

- **Clases en HTML interactivo** en lugar de solo texto: con voz, reloj, simulaciones y
  ejercicios, porque el alumno quiere aprender de forma práctica y didáctica.
- **Voz del navegador**, no videos: es gratis e ilimitada. Se descartaron Google Vids (límites
  gratuitos) y la API de video (de pago).
- **Una voz por curso** (perfiles en `PERFILES` de `academia.js`, elegidos por el prefijo del `id`
  de la clase: `ciber-`, `ingles-`, `js-`, `py-`). Toda clase nueva la toma sola:
  - Ciberseguridad: docente en español de Perú (Edge: Alex/Camila Natural; Chrome: Google español
    de EE. UU., porque Chrome no trae voces de Perú).
  - Inglés: inglés americano (Edge: Jenny/Aria; Chrome: Google US English) y explicaciones en
    español latino.
  - JavaScript y Python: "Asistente IA estilo Jarvis": voz masculina, tono 0.8 y ritmo 1.06
    (Edge: Jorge; Chrome: Microsoft Raúl), y en inglés británico masculino.
  - El alumno usa sobre todo **Chrome**: las voces de Google tienen prioridad cuando no hay "Natural".
    Un efecto metálico real no es posible con la voz del navegador (solo voz, tono y velocidad).
  - La voz elegida se guarda por curso y por equipo, y no se sincroniza.
- **GitHub Pages + repositorio privado de avance**, porque OneDrive está lleno y el alumno pidió
  GitHub expresamente (se descartó publicarlo como Artifact de Claude).
- **Nada de emojis de banderas:** en el Windows del alumno se ven como letras ("GB") y confunden.
- **Ciberseguridad:** todas las simulaciones usan datos ficticios. Las IP de ejemplo son de los
  rangos de documentación del RFC 5737 (192.0.2.x, 198.51.100.x, 203.0.113.x). Cada clase trae
  una sección de **fuentes verificadas** (ver `cursos/ciberseguridad/instrucciones.md`).
- **Historia continua en ciberseguridad:** el malware `svch0st.exe` (PID 6612), la factura
  `factura_noviembre.pdf.exe` y la IP 203.0.113.50:4444 aparecen en las clases 02, 03 y 05.
  Mantener la coherencia si se vuelven a usar.
- **Python se practica en la PC real** (Python 3.12/3.14 y VS Code ya instalados); la página
  trae un simulador del modo interactivo solo para los ejemplos.

## 5. Cómo hacer las tareas frecuentes

**Crear una clase nueva** (seguir las 8 fases de `PROMPT-MAESTRO.md`; resumen técnico:)
1. Investigar y verificar el tema en fuentes confiables ANTES de escribir.
1. Copiar la estructura de la última clase del curso (`cursos/<curso>/clases/clase-NN.html`)
   e incluir las 9 secciones obligatorias, con la sección de fuentes completa.
2. Los minutos de los bloques deben sumar 120 (o 60 en inglés).
3. Cargar `recursos/sync.js` antes de `recursos/academia.js`, y el enlace "☰ Menú" a `inicio.html`.
4. Agregarla a `recursos/catalogo.js` con su `archivo` y su `id` (el mismo de `window.CLASE`).
5. Agregar la fila en `cursos/<curso>/progreso.md`.
6. Probar en el navegador (escritorio y 360 px): servir con
   `python -m http.server 8765 --bind 127.0.0.1` y revisar misiones, retos y examen.
7. `git commit`. **Pedir autorización al alumno** antes de `git push` (al subir, aparece en el
   enlace en 1–2 minutos).
8. Actualizar la sección 2 de esta bitácora y anotar el cambio abajo.

**Agregar un curso nuevo:** crear `cursos/<nombre>/` (instrucciones, ruta, progreso, apuntes,
clases), agregarlo a la tabla de `CLAUDE.md`, a `recursos/catalogo.js` y un tema
`.tema-<curso>` en `academia.css`. Preguntar duración y horario.

**Revisar el avance del alumno** ("revisa mi avance"): `git pull` en `..\academia-progreso`,
leer `progreso.json`, actualizar `progreso.md` y generar los apuntes en Word.

## 6. Pendientes

**Adecuación de las 17 clases al prompt maestro** (auditoría del 2026-11-10):
- Ninguna clase tiene todavía: "conocimientos previos", "práctica autónoma con criterios para
  comprobarla" ni una sección de "resumen" de contenidos (lo que hay es el generador de resumen
  del avance).
- Las clases 02 en adelante no tienen una lista explícita de objetivos de aprendizaje.
- Fuentes: Ciberseguridad 01–05 tienen 49 enlaces (se comprobó que abren y un dato clave, el de
  Equifax), pero les faltan fecha de publicación, fecha de consulta y estado de verificación
  por fuente. Inglés, JavaScript y Python (12 clases) no tienen fuentes.
- Estado de verificación del contenido: Ciberseguridad 01 **verificada** (clase modelo, con
  fuentes secundarias marcadas como parcialmente verificadas); Ciberseguridad 02–05
  **parcialmente verificado**; las otras 12 clases **pendientes de verificación**.
- **Plantilla:** `cursos/ciberseguridad/clases/clase-01.html` es la referencia del nuevo estándar
  para los cuatro cursos (una vez aprobada por el alumno).
- Ya cumplen: duración exacta, repaso de la clase anterior (desde la 02), práctica guiada
  (terminal/editor/comandos), actividades con pistas y examen autocorregible.

- Definir el horario de clases (`horario.md` está sin completar).
- Apuntes en Word: solo existe el de Ciberseguridad 01; generar los demás al revisar el avance.
- Conectar con el token las demás computadoras (y el celular si se quiere).
- El alumno debe activar la verificación en dos pasos de GitHub antes del 13/12/2026.
- El token de GitHub vence (plazo elegido al crearlo): cuando venza, crear otro y pegarlo de nuevo.
- Fuentes verificadas: hechas en ciberseguridad; ofrecidas para JavaScript, Python e inglés.

---

## Registro de cambios

### 2026-11-10
- Se arma la escuela: reglas (`CLAUDE.md`), cursos de ciberseguridad e inglés con temario.
- Ciberseguridad 01 dada en el chat, con apuntes en Word (resultado en `progreso.md`).
- Clases interactivas en HTML con voz, reloj de 2 h y diseño de ciberseguridad (Ciber 01 y 02).
- Menú `inicio.html`; Inglés 01 (1 h); se agregan los cursos de JavaScript y Python
  (desarrollo de software) con su Clase 01 de 2 h; editor de JavaScript en el motor.
- La carpeta se mueve a `OneDrive\Desktop\Cyberseguridad`. OneDrive está lleno.
- Se publica en GitHub: `necofox/academia` (Pages) y `necofox/academia-progreso` (privado);
  sincronización del avance con token. Probada: el primer guardado llegó a `progreso.json`.
- 12 clases nuevas: Ciber 03–05, Inglés 02–04, JavaScript 02–04, Python 02–04.
- Sección de fuentes verificadas en Ciberseguridad 01–05 (49 enlaces comprobados).
- Se crea esta bitácora.
- Voces personalizadas por curso (docente de Perú, inglés americano, asistente estilo Jarvis),
  optimizadas para Chrome y Edge; ajustes de voz por curso con botón de prueba.
- Se adopta `PROMPT-MAESTRO.md` como norma principal. Desde ahora: push solo con autorización.
  Auditoría de las 17 clases contra la nueva norma (resultado en "Pendientes").
- **Ciberseguridad 01 rehecha como clase modelo del nuevo estándar** (sin tocar el motor ni las
  otras 16 clases; commit local, sin push): 9 secciones (ficha con conocimientos previos y
  objetivos, situación inicial que se resuelve en la demostración de 5 pasos, errores frecuentes,
  aplicación profesional con FIPS 199, práctica autónoma con 6 criterios, evaluación de 12
  preguntas con casos, resumen) y 26 fuentes con institución, fechas, concepto y estado.
  Correcciones por la verificación: Dyn afectó a Norteamérica y Europa (no "muchos países");
  "casi todos se pudieron evitar" pasó a "cuatro de los seis"; se quitó "pagar no garantiza
  nada" (la página del FBI no se pudo leer); la definición de hash se aclaró como simplificación.
  Pendiente de verificar con fuente oficial: la definición de EDR (marcada en la clase).
  Esperando la aprobación del alumno para aplicar el estándar a las demás clases.
- **Propuesta de organización curricular** en `PROPUESTA-ORGANIZACION-CURRICULAR.md` (solo
  planificación; nada implementado): módulos para los 4 cursos (156 clases, 272 h), mapa de las
  17 clases existentes (todas se conservan), 139 clases nuevas recomendadas, correcciones
  detectadas y fuentes verificadas. **Pendiente de aprobación del alumno.**
- **Etapa 0 (diagnóstico y respaldos)**, autorizada por el alumno. Marca de restauración local
  `respaldo-etapa-0` (→ `52fe5b2`). Respaldos verificados en `C:\Users\alvar\respaldos-academia\`
  (copia de `progreso.json` remota con SHA-256, paquetes completos de ambos repositorios y
  restauración de prueba exitosa; sin tokens). Nuevas herramientas en `herramientas/`
  (no enlazadas desde el menú): diagnóstico de solo lectura del avance local, instrucciones,
  pruebas de las 17 clases (17/17 cumplen), pruebas de sincronización (5/10 cumplen: fallan
  R1, conflictos, R2, R3 y reintento) y línea base de identificadores. Sin cambios en clases,
  motor, `sync.js`, catálogo, páginas principales ni repositorio privado. Revisión de
  navegadores: Chrome en esta PC (enlace y doble clic) verificado con el diagnóstico, 0 registros;
  el resto confirmado por el alumno (academia reciente, sin avance en otros dispositivos).
  **Etapa 0 completa, pendiente de aprobación del alumno.**
- **Etapa 0 aprobada por el alumno** y cierre de la revisión de dispositivos.
- **Etapa 0B (sincronización segura)**, autorizada por el alumno. Marca de restauración
  `respaldo-antes-0b` (→ `656ed76`). Cambios:
  - `sync.js` versión 2: fusión de tres vías con «base» y por actividad; unión de misiones y
    retos; diferencias guardadas para decidir; respaldo local; reintentos automáticos y
    pendientes; conexión sin pisar avance nuevo; protección de la clase abierta.
  - `inicio.html`: aviso para decidir las diferencias.
  - `academia.css`: 11 líneas nuevas.
  - Pruebas de sincronización ampliadas a 15 (15/15; la versión anterior cumplía 7/15).
  - Diagnóstico actualizado.

  Las 17 clases siguen 17/17 y los 136 identificadores de la línea base están intactos. Sin
  cambios en clases, motor, catálogo ni repositorio privado; nada publicado.
  **Pendiente de aprobación del alumno.**
