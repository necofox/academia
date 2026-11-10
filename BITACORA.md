# Bitácora de la academia

Registro de todo lo que se ha construido y decidido, para no perder el hilo entre
sesiones y computadoras. **Claude: lee esto al empezar y agrega una entrada al final
de "Registro de cambios" cada vez que hagas un cambio importante.**

> Este archivo está en el repositorio **público**: no escribas aquí notas de exámenes,
> datos personales ni claves. Lo personal va en `cursos/*/progreso.md` (que no se publica).

---

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

## 4. Decisiones importantes (y por qué)

- **Clases en HTML interactivo** en lugar de solo texto: con voz, reloj, simulaciones y
  ejercicios, porque el alumno quiere aprender de forma práctica y didáctica.
- **Voz del navegador**, no videos: es gratis e ilimitada. Se recomiendan Microsoft Edge y voces
  "Natural". Se descartaron Google Vids (límites gratuitos) y la API de video (de pago).
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

**Crear una clase nueva**
1. Copiar la estructura de la última clase del curso (`cursos/<curso>/clases/clase-NN.html`).
2. Los minutos de los bloques deben sumar 120 (o 60 en inglés).
3. Cargar `recursos/sync.js` antes de `recursos/academia.js`, y el enlace "☰ Menú" a `inicio.html`.
4. Agregarla a `recursos/catalogo.js` con su `archivo` y su `id` (el mismo de `window.CLASE`).
5. Agregar la fila en `cursos/<curso>/progreso.md`.
6. Probar en el navegador (escritorio y 360 px): servir con
   `python -m http.server 8765 --bind 127.0.0.1` y revisar misiones, retos y examen.
7. `git commit` y `git push` → aparece en el enlace en 1–2 minutos.
8. Actualizar la sección 2 de esta bitácora y anotar el cambio abajo.

**Agregar un curso nuevo:** crear `cursos/<nombre>/` (instrucciones, ruta, progreso, apuntes,
clases), agregarlo a la tabla de `CLAUDE.md`, a `recursos/catalogo.js` y un tema
`.tema-<curso>` en `academia.css`. Preguntar duración y horario.

**Revisar el avance del alumno** ("revisa mi avance"): `git pull` en `..\academia-progreso`,
leer `progreso.json`, actualizar `progreso.md` y generar los apuntes en Word.

## 6. Pendientes

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
