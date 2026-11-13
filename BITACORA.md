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
| Redes y Telecomunicaciones | De cero a la red de una pyme (base CCNA 200-301 v2.0) | 2 horas |
| Inteligencia Artificial: Claude | Del chat a Claude Code y un equipo de agentes supervisados | 2 horas |
| Prompt Engineering | Instrucciones precisas, evaluadas y reutilizables | 2 horas |

- **Enlace para estudiar (todas las computadoras y el celular):** https://necofox.github.io/academia/
- **Carpeta en la PC principal:** `C:\Users\alvar\OneDrive\Desktop\Cyberseguridad`
- **Avance privado:** repositorio `necofox/academia-progreso` (clonado en `..\academia-progreso`).

## 2. Estado actual (actualizar al agregar clases)

| Curso | Módulos · clases planificadas | Clases listas (dónde están) | Siguiente clase por crear |
|-------|------|---------------|---------------------------|
| Ciberseguridad | 9 · 41 (82 h) | 01 → M1·1 · 02 → M2·1 · 03 → M2·2 · 04 → M2·4 · 05 → M3·1 | M1·2 Principios y marcos de seguridad |
| Inglés | 5 · 40 (40 h) | 01–04 → M1·1 a M1·4 | M1·5 El verbo *to be* completo |
| JavaScript | 7 · 37 (74 h) | 01–04 → M1·1 a M1·4 | M1·5 Bucles |
| Python | 9 · 38 (76 h) + electiva de 3 | 01–04 → M1·1 a M1·4 | M1·5 Bucles |
| Redes y Telecomunicaciones | 11 · 51 (102 h) | 01–03 → M1·1 a M1·3 | M1·4 Ethernet y switching |
| Inteligencia Artificial: Claude | 21 · 71 (142 h), en 5 bloques | 01–02 → M1·1 a M1·2 | M1·3 Primeros pasos: conversaciones, archivos, búsqueda web y estilos |
| Prompt Engineering | 6 · 32 (64 h) | 01 → M1·1 | M1·2 Preguntas e instrucciones claras: de lo vago a lo bien definido |

Los módulos y el orden de todas las clases están en `recursos/catalogo.js` (aprobados en
`PROPUESTA-ORGANIZACION-CURRICULAR.md`; Redes, en `PROPUESTA-AMPLIACION-6-CURSOS.md`; Inteligencia
Artificial: Claude y Prompt Engineering, en `DIAGNOSTICO-ESTRUCTURA-ACADEMICA.md`). El número de archivo (`clase-04`) no cambia aunque la
clase se muestre en otro lugar del módulo.

El temario completo de cada curso está en `cursos/<curso>/ruta-aprendizaje.md`.

## 3. Cómo está construido

```
CLAUDE.md                 reglas generales (Claude las lee siempre)
BITACORA.md               este archivo
inicio.html               menú: elegir curso, módulo y clase, ver avance, conectar GitHub
index.html                redirige a inicio.html (portada de GitHub Pages)
recursos/
  academia.js             motor de TODAS las clases (no duplicar en cada página)
  academia.css            estilo (tema oscuro; .tema-ingles, .tema-js, .tema-python)
  catalogo.js             cursos → módulos → clases (fuente única del menú y de las rutas)
  sync.js                 sincroniza el avance con el repositorio privado
  diferencias.js          aviso «Tus equipos guardaron cosas distintas» (menú y demostración)
herramientas/             pruebas, diagnóstico, generador de rutas, revisiones y demostración
                          (no se enlazan desde el menú)
cursos/<curso>/
  instrucciones.md        cómo dar ese curso
  ruta-aprendizaje.md     temario por módulos (la parte de módulos se genera desde catalogo.js)
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
- **Equipo de 6 agentes para producir clases** (12/11/2026; piloto Prompt Engineering 01 aprobado):
  coordinador, investigador, disenador-pedagogico, desarrollador, revisor e integrador, con reglas comunes y
  un perfil por curso. Están en `.claude/agents/`, `.claude/equipo/` y `.claude/skills/producir-clase/`, que son
  archivos **locales de la PC principal** (`.claude/` está en `.gitignore`). Por eso esta bitácora es el
  registro compartido de lo que hace el equipo.
- **Los agentes solo trabajan con los comandos que escribe el alumno:** `/producir-clase <curso> [módulo]
  [cantidad]` (clases nuevas) y `/actualizar-clase <id>` (poner al día una clase existente). Sin el comando, ninguna sesión los lanza. Cada ejecución termina en un commit local y un informe; el
  push lo autoriza el alumno aparte.
- **Videos complementarios desde el 1 de enero de 2023** (regla del alumno, 13/11/2026, también a futuro): un video
  anterior se reemplaza o queda como pendiente justificado.
- **Orden de producción:** en cada curso, primero todas las clases de los Módulos 1 y 2; después, los demás
  módulos en orden. Las clases que ya existen en otros módulos se conservan.
- **Bitácora al día en cada avance:** los agentes la leen antes de empezar; el coordinador la actualiza al
  cerrar cada clase (secciones 2 y 6, y registro de cambios), y antes de cada push se anota la publicación.

## 5. Cómo hacer las tareas frecuentes

**Crear una clase nueva con el equipo de agentes** (forma habitual desde el 12/11/2026): el alumno escribe
`/producir-clase <curso> [módulo] [cantidad]`. El equipo sigue los pasos de abajo, actualiza esta bitácora y
deja un commit local. **Publicar** solo con la autorización del alumno: antes del push se anota la publicación
en el registro de cambios y, después, se comprueba el despliegue de GitHub Pages.

**Poner al día una clase antigua** con la estructura de 9 secciones: el alumno escribe `/actualizar-clase <id>`
(por ejemplo, `ciber-02`). Se añade lo que falta sin cambiar actividades, examen, terminales, editores ni notas,
para que el avance guardado siga sirviendo; el catálogo y las rutas no cambian.

**Crear una clase nueva** (seguir las 8 fases de `PROMPT-MAESTRO.md`; resumen técnico:)
1. Investigar y verificar el tema en fuentes confiables ANTES de escribir.
1. Copiar la estructura de la última clase del curso (`cursos/<curso>/clases/clase-NN.html`)
   e incluir las 9 secciones obligatorias, con la sección de fuentes completa.
2. Los minutos de los bloques deben sumar 120 (o 60 en inglés).
3. Cargar `recursos/sync.js` antes de `recursos/academia.js`, y el enlace "☰ Menú" a `inicio.html`.
4. En `recursos/catalogo.js`, completar su entrada «Próximamente» dentro de su módulo con su
   `n`, su `archivo` (siguiente número libre del curso) y su `id` (el mismo de `window.CLASE`).
   El orden dentro del módulo lo da su posición; el menú la muestra como "Módulo X · Clase Y".
   Después: `node herramientas/generar-rutas.js` (actualiza la ruta de aprendizaje),
   `node herramientas/revisar-catalogo.js` y `node herramientas/revisar-coherencia.js`.
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
- **Actualización del 12/11/2026:** de las 23 clases creadas, 9 siguen la estructura completa de 9 secciones
  (Ciberseguridad 01, Redes 01–03, IA 01–02 y Prompt 01). Las otras 14 (Ciberseguridad 02–05 y Inglés,
  JavaScript y Python 01–04) siguen con el formato anterior: sin conocimientos previos ni práctica autónoma con
  criterios, y con objetivos solo en la clase 01 de cada curso. Ponerlas al día es modificar clases existentes:
  solo si el alumno lo pide, con `/actualizar-clase <id>`. A Ciberseguridad 02–05 también les falta la ficha
  completa de sus fuentes (fecha de consulta y estado). Lo que sigue es el detalle de la auditoría original.
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
- Fuentes verificadas: hechas en los 4 cursos originales (Inglés, el 11/11/2026). En Inglés quedan 4 datos
  «pendientes de fuente escrita» (señalados en cada clase): los diccionarios de Cambridge y Oxford bloquean
  la consulta automática.
- Resumen y videos complementarios: hechos en las 17 clases originales. Ciberseguridad 01 fue revisada y
  aprobada por el alumno el 11/11/2026 y es la clase modelo.
- Recursos audiovisuales de JavaScript, Python y Ciberseguridad: registrados en el catálogo para todas las
  clases (también las que aún no existen). Quedan 17 clases sin video, con el motivo anotado en el catálogo y en
  las rutas (sobre todo proyectos). Al crear cada clase, sus videos del catálogo pasan a su página.
- **Objetivo principal pendiente:** completar Redes y Telecomunicaciones, Inteligencia Artificial: Claude y
  Prompt Engineering. Que estén en el menú no significa que estén hechos: de 154 clases planificadas hay 6
  creadas y faltan 148 (Redes 48, Inteligencia Artificial: Claude 69 y Prompt Engineering 31). La ampliación
  no está terminada hasta que todo el contenido esté creado, integrado y probado. El horario semanal de los
  cursos nuevos lo define el alumno más adelante.
- **Módulos 1 y 2 primero** (decisión del 12/11/2026): faltan 53 clases en esos módulos (Ciberseguridad 4,
  Inglés 13, JavaScript 9, Python 7, Redes 7, IA: Claude 5 y Prompt Engineering 8). En toda la academia hay 23
  de 313 clases creadas.
- **Lote 2:** terminado. Las etapas 0-A, 0-B y 1 a 5 están completadas; el cierre es el commit `92e7ff7`. El
  detalle está en `herramientas/RESULTADOS-LOTE-2.md`.

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
- **Etapa 1 (cursos por módulos en el menú)**, autorizada por el alumno. Marca de restauración
  `respaldo-antes-etapa-1` (→ `530f51d`). Cambios:
  - `catalogo.js`: cursos → módulos → clases (156 clases planificadas más 3 de la electiva).
  - `inicio.html`: módulos plegables con avance, «Módulo X · Clase Y» y «Te toca esta», archivos
    con `?v=` y compatibilidad con el catálogo anterior.
  - `academia.css`: 20 líneas nuevas.
  - Nueva herramienta `herramientas/revisar-catalogo.js`.

  Pruebas: 17/17 clases, 15/15 sincronización, 360 px, teclado, contraste y doble clic en Edge y
  Chrome. Las 17 clases, sus ids y archivos no cambiaron. Nada publicado. Detalle:
  `herramientas/RESULTADOS-ETAPA-1.md`. **Pendiente de revisión y aprobación del alumno.**

### 2026-11-11

- **Pendientes de la Etapa 1**, pedidos por el alumno (la organización por módulos ya está aprobada visualmente):
  - `catalogo.js`: cada módulo suma competencias, logro, previos, evaluación, proyecto y fuentes
    previstas, tomados de la propuesta. Se completaron 9 títulos de clases futuras para parecerse
    más a la propuesta. Las 17 clases no cambiaron.
  - Las 4 `ruta-aprendizaje.md` se reescribieron por módulos. La parte de módulos y clases la genera
    `herramientas/generar-rutas.js` desde el catálogo; `--comprobar` revisa que coincidan.
  - Nueva `herramientas/revisar-coherencia.js`: compara catálogo y propuesta módulo por módulo. Todo
    coincide; deja anotados 10 objetivos que la propuesta no traía (resultado en
    `herramientas/RESULTADOS-COHERENCIA.md`).
  - Nueva demostración `herramientas/demo-diferencias.html`, con datos ficticios, equipos y GitHub
    simulados. El aviso de diferencias pasó a `recursos/diferencias.js`, compartido por el menú y
    la demostración.

  Pruebas: 17/17 clases con contenido idéntico a `respaldo-etapa-0`, 136 identificadores intactos y
  15/15 de sincronización. Nada publicado. **Pendiente de aprobación del alumno.**
- **Propuesta de ampliación a 6 cursos** (pedida por el alumno; solo propuesta, nada implementado):
  - `PROPUESTA-AMPLIACION-6-CURSOS.md`:
    - Redes y Telecomunicaciones: 11 módulos, 51 clases, 102 h; alineado al CCNA 200-301 v2.0
      (vigente desde el 03/02/2027); Packet Tracer 9.0.1, gratis con cuenta de Networking Academy.
    - IA: Claude y productividad: 9 módulos, 36 clases, 72 h; sin API de pago; 21 clases funcionan
      con el plan gratuito.
    - Academia con 6 cursos: 243 clases y 446 h.
  - En `propuestas/`:
    - borrador de los dos cursos (se agrega al catálogo real sin modificarlo);
    - vista previa aislada del menú con 6 cursos;
    - generador del documento.
  - `herramientas/revisar-catalogo.js` acepta `--agregar <borrador>`.
  - Comprobado: las 17 clases siguen intactas y los 28 temas del CCNA v2.0 tienen al menos una clase.

  No se modificaron clases, catálogo real, menú ni motor; nada publicado. **Pendiente de
  aprobación del alumno.**
- **Complemento de la propuesta de ampliación** (pedido por el alumno; solo propuesta):
  - Curso 6 rediseñado con una formación completa de ingeniería de instrucciones en seis niveles:
    11 módulos, 55 clases y 110 h. 43 clases se hacen con el plan gratuito, 12 necesitan un plan de
    pago y ninguna necesita la API. Proyecto integrador: biblioteca profesional de prompts.
  - Materiales oficiales clasificados:
    - el tutorial interactivo de Anthropic requiere clave de API, así que sus ejercicios se
      adaptan al chat;
    - el repositorio `anthropics/courses` está archivado;
    - Claude Academy es gratuita.
  - Estándar de videos para los seis cursos, más 65 videos de YouTube verificados con
    `herramientas/verificar-videos.py` (título, canal, duración, disponibilidad, subtítulos y doblaje
    al español). Datos en `propuestas/videos-verificados.json` y `propuestas/videos-anotaciones.json`.
  - Academia con 6 cursos: 262 clases y 484 h.

  No se modificaron clases, catálogo real, menú ni motor; nada publicado. **Pendiente de
  aprobación del alumno.**

### 2026-11-11 (implementación de los cursos 5 y 6)
- **Cursos nuevos en la academia real:** Redes y Telecomunicaciones (`redes`) e IA: Claude y
  productividad (`ia`), copiados del borrador aprobado a `recursos/catalogo.js` (solo líneas nuevas),
  con colores `.tema-redes` y `.tema-ia` en `academia.css` y `?v=2026-11-11b` en `inicio.html`.
  Carpetas `cursos/redes/` y `cursos/ia/` con instrucciones, ruta, progreso, apuntes, clases y proyectos.
- **Clases creadas:** `redes-01` (¿Qué es una red?) e `ia-01` (¿Qué es la IA generativa?), de 120 min,
  con las 9 secciones, fuentes verificadas y video complementario. Las otras 104 clases figuran como
  «Próximamente». El motor no se modificó (la voz de los cursos nuevos es la de docente).
- **Herramientas:** `generar-rutas.js` muestra plan de Claude, temario oficial y videos solo en los
  cursos que tienen esos datos; `pruebas-clases.html` acepta 120 min en Redes e IA;
  `revisar-coherencia.js` omite los dos cursos nuevos (vienen de otra propuesta). El borrador
  `propuestas/cursos-nuevos.borrador.js` ya no agrega cursos si el catálogo los tiene.
- **Clases existentes (pedido del alumno):** se agregaron, sin cambiar nada más, un resumen y videos
  complementarios verificados a Ciberseguridad 02–05, JavaScript 01–04 y Python 01–04, y fuentes
  verificadas (MDN y documentación oficial de Python) a JavaScript y Python. Solo líneas nuevas: no
  cambia ningún id ni el avance guardado. Ciberseguridad 01 e Inglés no se tocaron.
- **Pruebas:** `pruebas-clases` 19/19, `pruebas-sync` 15/15, catálogo, rutas y coherencia correctos;
  menú con 6 cursos. Nada publicado (sin push).

### 2026-11-11 (Inglés 01–04: resumen, videos y fuentes)
- Se agregaron a Inglés 01–04, sin cambiar nada más, un resumen basado en el contenido de cada clase,
  dos videos complementarios por clase (uno explicado en español y otro en inglés) y fuentes verificadas:
  lista oficial de vocabulario de Cambridge English (2025), páginas A1 del British Council (LearnEnglish y
  LearnEnglish Teens) y Cambridge Dictionary (good evening). Los videos se comprobaron leyendo sus
  subtítulos completos. Los datos de pronunciación sin fuente oficial legible quedan como «parcialmente
  verificado» (Wikipedia) o «pendiente».
- Pruebas: pruebas-clases 19/19 (Inglés 60 min, actividades y exámenes completos) y pruebas-sync 15/15.
  Nada publicado (sin push). Ciberseguridad 01 sigue sin cambios, a la espera de la revisión del alumno.

### 2026-11-11 (recursos audiovisuales de JavaScript, Python y Ciberseguridad)
- **Revisado:** JavaScript (7 módulos, 37 clases), Python (9 módulos + electiva, 41 clases) y Ciberseguridad
  (9 módulos, 41 clases). Las clases que ya existen (JS y Python 01–04, Ciberseguridad 02–05) ya tenían sus
  videos en la página; las demás solo existen en el catálogo, que es donde se guardan sus recursos (igual que en
  Redes e IA). No se modificó ninguna página de clase.
- **Dónde quedó:** cada clase de `recursos/catalogo.js` tiene `videos: [{ v, temas, doc }]` (código del video con
  su minuto, qué ayuda a comprender y la fuente documental de contraste) o `videosPendiente` con el motivo. El
  Módulo 1 de JavaScript y de Python tiene `videoPrincipal`. Las fichas de los 104 videos (título exacto, canal,
  duración, idioma, subtítulos, fecha de verificación y cómo se comprobó su contenido) y las fuentes de contraste
  están en `recursos/videos.json`. `herramientas/generar-rutas.js` las muestra en cada `ruta-aprendizaje.md`
  (sección «Recursos audiovisuales del módulo»).
- **Videos principales del Módulo 1 (elegidos por el alumno):** JavaScript, MoureDev «Curso COMPLETO de
  JavaScript DESDE CERO para Principiantes» (1glVfFxj8a4); Python, MoureDev «Curso COMPLETO de PYTHON desde CERO
  para PRINCIPIANTES» (Kp4Mvapo5kc). Cada clase del módulo enlaza su capítulo exacto.
- **Selección por módulo (resumen):** JS M2 jonmircha (HTML y CSS, Flexbox, Grid); M3 freeCodeCamp Español (DOM)
  y jonmircha (validación, localStorage, módulos); M4 jonmircha (callbacks, promesas, async/await, fetch) y midulive
  (errores de red); M5 MoureDev (Git y terminal), jonmircha (npm), midulive (ESLint, Vitest); M6 jonmircha (Node.js
  y Express), JePaFe Dev (SQLite), midulive (autenticación) y The Coder Cave (OWASP). Python M2 midudev y Soy Dalto;
  M3 MoureDev intermedio, Soy Dalto y UskoKruM2010; M4 UskoKruM2010 y codigofacilito; M5 MoureDev (Git),
  UskoKruM2010, Pildoras de programación y Charly Cimino; M6 MoureDev (SQL), Dimas y MoureDev intermedio (regex);
  M7 luisetindev, Código Espinoza, ChepeCarlos y Frank Andrade; M8 MoureDev backend (FastAPI), Andrés Cruz y Código
  Espinoza; electiva Luis Cabrera, Adrian Dolinay y El Pingüino de Mario. Ciberseguridad: NIST (oficial), INCIBE y
  la OSI (oficiales), AEPD (oficial), UCAM y URJC (universidades), Red Hat e IBM Technology (fabricantes), y
  especialistas como SEGURIDAD CERO, RedesCiber, David Pereira, RINKU, Profe Sang, Pelado Nerd, Alberto López,
  Alvaro Chirou y El Pingüino de Mario. Detalle completo en cada ruta y en `recursos/videos.json`.
- **Comprobación:** los 104 videos existen y están disponibles (verificar-videos.py); su contenido se comprobó con
  los capítulos oficiales, los subtítulos o, en lecciones de un solo tema, el título y la descripción. Las 99
  fuentes de contraste (MDN, JavaScript.info, documentación de Python, OWASP, NIST, INCIBE, MITRE, Microsoft…)
  responden; CISA bloquea la lectura automática y se comprobó en el navegador. Videos en inglés: marcados.
- **Descartados:** webinar de Cisco sobre respuesta a incidentes (promoción de productos); análisis de malware de
  Cyberhill-Security (sin subtítulos: no se pudo comprobar); Wazuh de Fredy CiberSec (solo instalación); despliegue
  de midulive (usa FL0, plataforma que puede no existir); video de contraseñas de la OSI de 2012 (desactualizado);
  un video de «reporte de incidentes» que era de seguridad laboral.
- **Pendientes (17 clases, con motivo):** JS M6·7 (parte de despliegue) y M7·1–3 (proyecto); Python M2·4, M3·4,
  M4·4, M9·1–3 (proyectos), M4·2 (composición) y E·1; Ciberseguridad M6·3, M6·5, M7·4, M8·2 y M8·5.
  Ciberseguridad 01 no se tocó (ni su página ni su entrada del catálogo).
- **Archivos:** `recursos/catalogo.js` (solo campos de videos), `recursos/videos.json` (nuevo),
  `herramientas/generar-rutas.js`, y las rutas de JavaScript, Python y Ciberseguridad (generadas).
- **Pruebas:** pruebas-clases 19/19, pruebas-sync 15/15, revisar-catalogo, generar-rutas --comprobar y
  revisar-coherencia correctos; menú revisado en escritorio y a 360 px. Inglés, Redes e IA sin cambios.

### 2026-11-11 (Ciberseguridad 01 aprobada y con videos)
- El alumno revisó y aprobó Ciberseguridad 01, y autorizó agregarle los recursos audiovisuales.
- Se agregó solo la sección de videos (antes de las fuentes), sin cambiar el contenido, las actividades ni el
  examen: INCIBE «Introducción a la ciberseguridad» (oficial), URJC «Conceptos de amenaza, riesgo y
  vulnerabilidad» (universidad) y RINKU «¿Qué es la triada CIA en ciberseguridad?». Comprobados con sus
  subtítulos. También en el catálogo, en `recursos/videos.json` y en la ruta de Ciberseguridad.
- Pruebas: pruebas-clases 19/19 (ciber-01: 120 min, actividades 25/25, examen 12/12, sin errores, 360 px OK).

### 2026-11-11 (Redes 02 e IA 02)
- **`redes-02`** «Modelos OSI y TCP/IP: capas, encapsulamiento y protocolos» (`cursos/redes/clases/clase-02.html`):
  120 min, 9 secciones, 4 actividades (capas OSI, capas TCP/IP, nombre del mensaje y lectura de una captura
  simulada), examen de 12 preguntas y videos UPV y NASeros. Fuentes: ITU-T X.200, RFC 1122, IBM, RFC 9110,
  9293 y 791, NIST (router) e IEEE 802.
- **`ia-02`** «Claude y Claude Code: planes, apps, modelos y límites de uso» (`cursos/ia/clases/clase-02.html`):
  120 min, 9 secciones, 4 actividades (herramienta, plan, modelo y límites), examen de 12 preguntas y videos de
  Datademia y MoureDev (capítulo de modelos). Planes, precios, modelos y límites verificados el 11/11/2026 en
  las páginas oficiales de Anthropic (pricing, centro de ayuda, models overview, download y Claude Code).
- Catálogo y rutas actualizados. Ninguna clase anterior cambió. Pruebas: pruebas-clases 21/21, pruebas-sync
  15/15, catálogo, rutas y coherencia correctos, revisión visual en escritorio y a 360 px.
- Punto de control: el alumno revisa estas dos clases antes de seguir con las clases 03.

### 2026-11-11 (Redes 03)
- **`redes-03`** «Medios físicos: cobre, fibra óptica e inalámbrico; cables y fallas de interfaz»
  (`cursos/redes/clases/clase-03.html`): 120 min, 9 secciones, 3 actividades (medio, cable y falla probable),
  terminal simulada con Get-NetAdapter, lectura simulada de contadores de un puerto, examen de 12 preguntas y
  videos de Jeremy's IT Lab (desde «UTP Cables») y NASeros. Fuentes: guía de Cisco de problemas de puertos,
  Fluke Networks (T568A/T568B), Cisco (fibra multimodo OM1–OM5), ITU-T G.652, IEEE 802.3 y 802.11, Wi-Fi Alliance,
  Microsoft (Get-NetAdapter) y temario CCNA v2.0 1.1. Cable cruzado, Auto MDI-X y alcance de la monomodo:
  parcialmente verificados (subtítulos del video).
- Pruebas: pruebas-clases 22/22 (redes-03 sin errores, 360 px OK). Ninguna otra clase cambió.

### 2026-11-11 (propuesta: formación en IA en seis cursos)
- Nueva propuesta `PROPUESTA-IA-6-CURSOS.md`: el curso «IA: Claude y productividad» se reorganiza en seis cursos
  (Fundamentos y uso de Claude; Prompt Engineering; Claude Code; Agentes y subagentes; Herramientas, Skills y MCP;
  Automatización y proyecto integrador): 26 módulos y 95 clases. Incluye auditoría del temario actual, definiciones
  verificadas de cada componente, dependencias, gratis o de pago, biblioteca audiovisual y plan de integración que
  conserva IA 01 e IA 02 (id `ia`).
- El video indicado por el alumno (MoureDev, 2:30:23) corresponde al capítulo «Plugins»: se propone para el
  Curso 5 · 4.1. **Pendiente de aprobación. No se modificó el catálogo, el menú, el motor ni ninguna clase.**

### 2026-11-12 (revisión de la propuesta de IA: versión 2)
- Auditoría pedagógica, técnica y estructural de `PROPUESTA-IA-6-CURSOS.md`, aplicada como versión 2 (la versión 1
  queda en el commit `487415d`). Se corrigieron 9 problemas: clases repetidas (herramientas de Claude Code,
  restricciones, supervisión humana, diseño de equipos, manejo de errores), una clase demasiado delgada, la
  diferencia entre usar y crear skills, la terminal como nivelación y un proyecto que repetía agentes.
- Nuevo orden: Herramientas, Skills y MCP (Curso 4) antes de Agentes (Curso 5), con argumentos en el documento.
- Proyecto integrador progresivo: cada curso construye una pieza (app base, kit de skills y MCP, tres subagentes) y
  el Curso 6 completa el equipo de cinco agentes. Tabla de requisitos y viabilidad técnica verificada.
- Resultado: 6 cursos, 26 módulos, **91 clases** (182 h); 39 con video verificado y 52 pendientes.
  **Sigue pendiente de aprobación. No se modificó el catálogo, el menú, el motor ni ninguna clase.**

### 2026-11-12 (formación en IA: aprobación condicionada y Lote 1, estructura técnica)
- El alumno aprobó la versión 2 de forma condicionada, para implementarla por lotes. Antes pidió: verificar planes
  y costos, la viabilidad del proyecto de cinco agentes sin API de pago, la conservación de los videos y el
  procedimiento para conservar IA 01/02, el id `ia`, el avance, las rutas, el motor y la sincronización.
  Respuesta en `VIABILIDAD-Y-CONSERVACION-IA.md`: **sin impedimentos graves**. Pro no es ilimitado (sesión de 5 h,
  límite semanal, compartido entre apps, y los subagentes gastan del mismo límite). MCP es opcional y se hace con
  servidores locales gratuitos. La automatización usa tareas de escritorio, `/loop` o GitHub Actions con el token
  de la suscripción.
- Etiqueta de respaldo `respaldo-antes-ia-6-cursos` (commit `07fd805`).
- **Lote 1 (preparación, sin migrar):**
  - Borrador `propuestas/ia-6-cursos.borrador.js` con los 6 cursos, 26 módulos y 91 clases. Reutiliza los objetos
    de IA 01 e IA 02 sin cambiarlos, trae los `ref` de las clases que pasan al Curso 2 y conserva los 39 videos
    verificados, entre ellos el del alumno para Plugins (MoureDev, 2:30:23). El menú no lo carga.
  - Carpetas `cursos/prompt`, `claudecode`, `extensiones`, `agentes` y `automatizacion`, con `instrucciones.md`,
    `ruta-aprendizaje.md` (generada desde el borrador) y `progreso.md`.
  - Temas `.tema-prompt`, `.tema-claudecode`, `.tema-extensiones`, `.tema-agentes` y `.tema-automatizacion` en
    `academia.css`, solo con líneas nuevas y contraste mayor de 8:1. Duraciones de 120 min en `pruebas-clases.html`.
  - `generar-rutas.js` acepta `--con <borrador>` y `--solo <ids>`. Sin opciones funciona igual que antes.
  - Vista previa aislada del menú con 11 cursos: `propuestas/vista-previa-ia-6-cursos.html`, generada con
    `node propuestas/generar-vista-previa-ia.js`.
- Ajuste de orden en el Curso 1 (riesgo R1): el Módulo 1 se sigue llamando «Fundamentos de la IA generativa y de
  Claude», y la clase 1.3 pasa a ser «Primeros pasos en el chat…», como anuncia IA 02. Así IA 02 sigue siendo
  correcta, salvo la frase de la línea 139, que espera la decisión del alumno.
- Pruebas: `pruebas-clases` 22/22, `pruebas-sync` 15/15, `revisar-catalogo` correcto (línea base intacta),
  `generar-rutas --comprobar` 6/6 y `revisar-coherencia` coherente. IA 01, IA 02, `academia.js`, `sync.js`,
  `catalogo.js`, `inicio.html` y la ruta de IA son idénticos a la etiqueta, y los otros cinco cursos no cambiaron.
  **No se migró nada: el menú real sigue con 6 cursos.** Próximo paso, el Lote 2 (migración en un solo paso),
  cuando el alumno lo autorice.

### 2026-11-12 (borrador de IA: aviso de cuenta de Claude)
- A pedido del alumno, la descripción de cada curso de IA (en el borrador) indica qué cuenta de Claude conviene
  para las prácticas: basta Claude gratis en IA 1 e IA 2; en IA 4 la mayor parte es gratis; en IA 3, IA 5 e IA 6
  se recomienda Claude Pro, con la alternativa gratuita (diseñar en el chat y seguir las demostraciones).
  Aclaración registrada: la academia no usa Claude ni ninguna API para funcionar (solo la API de GitHub, gratis,
  para sincronizar); el plan de Claude solo importa para las prácticas de los cursos de IA.
  Probado en la vista previa, en escritorio y a 360 px. Menú real, catálogo, IA 01 e IA 02 sin cambios.

### 2026-11-12 (estructura de IA aprobada y Lote 2: etapas 0 a 3)
- **Estructura aprobada por el alumno:** tres cursos en la ampliación: Redes y Telecomunicaciones (sin
  cambios), **Inteligencia Artificial: Claude** (id `ia`, 21 módulos en 5 bloques, 71 clases) y **Prompt
  Engineering** (id `prompt`, 6 módulos, las 32 clases de prompting del curso anterior, recuperadas sin
  recortes). Borrador `propuestas/ia-3-cursos.borrador.js` e informe `DIAGNOSTICO-ESTRUCTURA-ACADEMICA.md`
  (commits `831963a`, `2f462ce` y `05e83d1`). La propuesta de 6 cursos, su borrador y las carpetas del Lote 1
  se conservan como historial.
- **Lote 2**, autorizado por etapas, con punto de control al final de cada una:
  - Etapa 0: comprobaciones de solo lectura (todo correcto) y etiqueta local `respaldo-antes-lote-2` →
    `05e83d1` (no publicada).
  - Etapa 1 (`e0a5d69`): catálogo real con los tres cursos, generado desde el borrador aprobado; rutas de
    `ia` y `prompt` regeneradas solo entre sus marcas; `?v=` del menú; `revisar-coherencia.js` omite
    `prompt`. La primera comparación estricta falló solo por el orden de las claves en los módulos de Prompt
    (valores idénticos): se detuvo, se ajustó el script temporal para conservar el orden y la comparación
    estricta pasó.
  - Etapa 2 (`349066f`): guías de IA y de Prompt Engineering, y la frase de la ruta de Redes («la técnica
    está en el curso Prompt Engineering»). Se quitó una referencia errónea, presente desde `424a88b`, que
    remitía los datos sensibles a Ciberseguridad M7·3 (esa clase trata de indicadores de compromiso); se
    conserva la regla «los datos sensibles nunca se pegan en Claude».
  - Etapa 3 (`2c4ae91`) y su corrección (`bd4b1f8`): nota de planes de IA 02, línea 139. El texto
    definitivo, indicado por el alumno, es: «con el plan gratuito puedes estudiar todo y hacer las prácticas
    compatibles. Para las prácticas de Claude Code, agentes y automatización se recomienda Claude Pro. Y
    siempre hay una alternativa gratuita: diseñar y probar la instrucción en el chat.» Solo cambió esa
    línea; el script `window.CLASE` es idéntico.
  - Etapa 4: este registro, `CLAUDE.md`, el diagnóstico y `herramientas/RESULTADOS-LOTE-2.md`.
- **Resultado:** el menú muestra 7 cursos. Objetivo: 154 clases planificadas (Redes 51, Inteligencia
  Artificial: Claude 71 y Prompt Engineering 32), 5 creadas y 149 pendientes. Pruebas: clases 22/22,
  sincronización 15/15, rutas 7/7 y catálogo correcto; huella de los identificadores de avance
  `d355163a…7933d`, idéntica a la línea base. Sin push (GitHub sigue en `43e8d6e`) y `academia-progreso`
  sin cambios (`14d8233`).
- **Observaciones:** el diagnóstico decía «33 comprobaciones» del borrador; son 32 (error de escritura,
  corregido en la Etapa 4). Una comprobación de huellas falló al principio por el formato de `sha256sum` en
  Windows y se repitió correctamente. Falta la Etapa 5 (verificación final y borrado de los archivos
  temporales).

### 2026-11-12 (JavaScript y Python 01–04: fuentes reforzadas)
- A pedido del alumno, con Ciberseguridad como modelo: 31 fuentes nuevas, cada una leída antes de agregarla para
  comprobar que respalda lo que enseña la clase (MDN, javascript.info, Node.js, OWASP, documentación oficial de
  Python, PEP 8, Visual Studio Marketplace y Real Python). JavaScript pasa de 16 a 33 fuentes y Python, de 17 a
  31. Las alternativas escritas de los videos ahora enlazan directamente a la guía de JavaScript de MDN y al
  tutorial oficial de Python.
- Solo cambiaron la sección de fuentes y las líneas de alternativa escrita. El script `window.CLASE`
  (actividades, exámenes, reloj e identificadores) es idéntico. Pruebas: clases 22/22, identificadores de avance
  idénticos, catálogo correcto y rutas 7/7.
- **Pendiente de decisión del alumno:** Python 02 dice que los nombres de variables «no llevan tildes». La
  documentación oficial (Análisis léxico, 2.3) permite caracteres no ASCII en los nombres; es una buena
  práctica, no una regla del lenguaje. No se cambió el texto de la clase.
- **Corregido el mismo día, a pedido del alumno:** la regla de Python 02 (línea 46) ahora dice que los nombres
  no pueden empezar con número ni llevar espacios, y que Python 3 acepta tildes y ñ, aunque conviene evitarlas
  (la clase usa `anio`). Se comprobó ejecutando Python 3.12 (`año = 5` funciona). La fuente de Análisis léxico
  ahora indica también que los nombres admiten caracteres no ASCII. La pista del reto («sin tildes ni ñ») se
  dejó igual porque es un consejo coherente. El script `window.CLASE` no cambió; clases 22/22 e identificadores
  de avance idénticos.

### 2026-11-12 (Lote 2 terminado: Etapa 5)
- **Lote 2 terminado:** etapas 0-A, 0-B y 1 a 5 completadas. Commits: `e0a5d69` (Etapa 1), `349066f` (Etapa 2),
  `2c4ae91` y `bd4b1f8` (Etapa 3), `d6d07b0` (Etapa 4) y `92e7ff7` (Etapa 5, cierre).
- **Etapa 5 (`92e7ff7`):** verificación final sobre el estado definitivo, que ya incluye `5fdc761` y `a57d0b2`:
  - Catálogo correcto, equivalencia estricta 10/10, rutas 7/7 y coherencia correcta.
  - `window.CLASE` idéntico en las 22 clases y núcleo sin cambios.
  - Clases 22/22, con la huella de identificadores de avance `d355163a…7933d` idéntica a la línea base, y
    sincronización 15/15.
  - Menú real con 7 cursos, sin desborde a 302, 360 y 1280 px, y foco de teclado visible.
  - Se borraron los temporales exclusivos del Lote 2 (carpeta `lote2/` con 41 archivos y 3 scripts), fuera del
    proyecto; se conservó lo que no era exclusivo.
  - Resultados completos en `herramientas/RESULTADOS-LOTE-2.md`.
- Sin push (GitHub sigue en `43e8d6e`) y `academia-progreso` sin cambios (`14d8233`).

### 2026-11-12 (Prompt Engineering 01: clase piloto del equipo de agentes)
- **El equipo:** 6 agentes (coordinador, investigador, disenador-pedagogico, desarrollador, revisor, integrador), sus
  reglas y 7 perfiles de curso, en `.claude/agents/` y `.claude/equipo/`. Son archivos locales: `.claude/` está en
  `.gitignore`, no se versionan ni se publican.
- **La clase:** `cursos/prompt/clases/clase-01.html`, id `prompt-01`, 120 minutos, 11 bloques, 4 actividades
  (25 tarjetas) y examen de 12 preguntas. «Claude gratis · Chat de Claude» confirmado.
- **Fuentes y video:** 16 fuentes (14 verificadas y 2 parcialmente verificadas: memoria y proyectos del centro de
  ayuda). 1 video (`jrucUmU_l8s`, DevTalles, verificado); no hubo un segundo video adecuado, y se justificó en el
  expediente.
- **Revisión 1:** devuelta con 2 observaciones obligatorias (longitud de las opciones del examen y ficha del video) y
  5 sugerencias; todo corregido y aprobado en la segunda pasada.
- **Revisión 2:** pruebas-clases 23/23, huella de identificadores de las 22 clases anteriores idéntica a la línea base
  (`d355163a…7933d`), catálogo correcto, rutas 7/7, coherencia correcta y menú con la clase disponible.
- **Catálogo:** solo cambió la entrada de M1·1 (`n`, `archivo`, `id`) y `?v=2026-11-12b` en `inicio.html`; la ruta de
  Prompt se regeneró.
- **Aprendido para el equipo:** comprobar que la respuesta correcta del examen no sea la opción más larga (añadido a
  las fichas del diseñador y del revisor). Las clases ya aprobadas IA 01 y Ciberseguridad 01 tienen esa pista (9 y 7
  de 12) y no se tocaron.
- **Decisión del alumno (mismo día):** en cada curso se completan todas las clases de los Módulos 1 y 2 antes de
  pasar a otros módulos. Faltan 53: Ciberseguridad 4, Inglés 13, JavaScript 9, Python 7, Redes 7, IA: Claude 5 y
  Prompt Engineering 8. Las clases que ya existen en otros módulos (Ciberseguridad M3·1) se conservan.
- **Piloto aprobado por el alumno** el mismo día (commit `5ee9893`). El equipo puede seguir con la siguiente clase,
  de una en una. Sin push.

### 2026-11-12 (publicación del piloto, comando del equipo y bitácora al día)
- **Publicado con autorización del alumno:** push de `5ee9893` y `b3d801c` (GitHub `main`: `f4433a2` → `b3d801c`),
  sin etiquetas ni force. GitHub Pages desplegó con éxito y Prompt Engineering 01 responde en el enlace publicado.
- **Comando `/producir-clase <curso> [módulo] [cantidad]`** (`.claude/skills/producir-clase/`, local): activa el
  equipo de agentes. Solo lo puede activar el alumno; sin el comando, los agentes no trabajan. Produce 1 clase por
  defecto y 3 como máximo, y termina en un commit local y un informe.
- **Bitácora al día:** sección 1 (los 7 cursos), sección 4 (decisiones del equipo), sección 5 (cómo producir y
  publicar) y sección 6 (estado de la estructura de las 23 clases y cuentas de lo que falta). El coordinador la
  mantiene al cerrar cada clase.
- Publicado con autorización del alumno (12/11/2026).

### 2026-11-12 (comando para poner al día las clases antiguas)
- **Comando `/actualizar-clase <id>`** (`.claude/skills/actualizar-clase/`, local; solo lo activa el alumno): el equipo
  de agentes pone al día **una** clase existente con las 9 partes del prompt maestro. Añade lo que falta
  (conocimientos previos, objetivos, activación, errores frecuentes, aplicaciones profesionales, práctica autónoma
  con criterios y fichas de fuentes completas).
- **Lo protegido no cambia:** `archivo`, `id`, actividades, exámenes, terminales, editores y notas, para que el
  avance guardado siga sirviendo. Se comprueba con una herramienta local de solo lectura
  (`.claude/equipo/herramientas/huella-clase.js`), probada con las 23 clases.
- Candidatas: Ciberseguridad 02–05 y Inglés, JavaScript y Python 01–04 (14 clases). Todavía no se actualizó ninguna.
- Publicado con autorización del alumno (12/11/2026).

### 2026-11-13 (auditoría de videos con la regla «desde el 1 de enero de 2023»)
- **Regla nueva del alumno:** los videos complementarios deben estar publicados desde el 1 de enero de 2023, también
  los que se agreguen en el futuro. Anotada en `CLAUDE.md`, en la sección 4 de esta bitácora y en las fichas locales
  del investigador y del revisor.
- **Auditoría (solo lectura):** se verificaron con `herramientas/verificar-videos.py` los 178 videos distintos de la
  academia (170 del catálogo y 8 que solo están en las páginas de Inglés). Cumplen 82, son anteriores a 2023 95 y
  1 ya no está disponible (`DAQJvGjlgVM`, IA M6·1, pide iniciar sesión).
- **Clases creadas:** de 38 enlaces de video en las 23 páginas, 21 no cumplen. Hay 9 clases sin ningún video que
  cumpla: Ciberseguridad 02, 03 y 05; Inglés 03; Python 01 y 03; Redes 01, 02 y 03.
- **Clases futuras (catálogo):** 92 enlaces anteriores a 2023 y 63 clases sin ningún video que cumpla. El recurso
  principal de Python, Módulo 1 (`Kp4Mvapo5kc`, elegido por el alumno), es del 30/09/2022.
- No se cambió ningún video todavía. Publicación de este cambio: pendiente de autorización del alumno.

