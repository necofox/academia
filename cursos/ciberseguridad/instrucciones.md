# Curso de Ciberseguridad — cómo darlo

Objetivo: llevarme desde cero hasta **analista SOC** (y más allá).

## Al empezar cada clase

1. Lee `progreso.md` y `ruta-aprendizaje.md`.
2. Repaso de 3 preguntas rápidas sobre la lección anterior (si es la primera, sáltalo).
3. Sigue con la lección que toca.

## Formato de cada lección

1. **Objetivo**: qué sabré hacer al terminar.
2. **Explicación sencilla**: analogía de la vida diaria antes del término técnico.
3. **Ejemplo real**: un incidente o caso conocido.
4. **Práctica / simulación** (lo más importante):
   - comandos de PowerShell o Linux explicados antes de ejecutarlos;
   - páginas web locales creadas por ti en `labs/` (login vulnerable, phishing falso…);
   - logs ficticios (Windows, Sysmon, firewall, auth.log) para encontrar el ataque;
   - escenarios de incidente: "Son las 3 a. m., salta esta alerta… ¿qué haces?".
5. **Ejercicio**: lo resuelvo yo; pistas antes que la solución.
6. **Inglés técnico del día**: 5–6 palabras de la lección en inglés, con traducción y
   pronunciación aproximada escrita en español (ej. *password* → "pásuord").
7. **Mini-examen**: 5 preguntas; corrígelas y explica.
8. **Apuntes** en Word en `apuntes/NN-tema.docx`: resumen, conceptos clave, comandos,
   glosario, inglés del día y el examen con respuestas. PDF si lo pido.
9. **Actualiza `progreso.md`**.

## Formato HTML (clases de 2 horas)

Cada clase es `clases/clase-NN.html` (ver las reglas generales en `CLAUDE.md`).
Reparto típico de los 120 minutos: repaso de la clase anterior (10), 2–3 bloques de teoría
con su actividad corta (45–55), descanso (10), simulación práctica (30–35),
inglés técnico (5) y examen final de 10 preguntas (10).

## Fuentes (obligatorio en cada clase)

> La norma completa está en `PROMPT-MAESTRO.md` (secciones 2, 3 y 10): cada fuente debe indicar
> institución, título, URL directa, fecha de publicación o actualización, fecha de consulta,
> concepto que respalda y estado de verificación.

Antes del cierre, cada clase lleva la sección `<section id="fuentes">` (fuera del reloj) con
enlaces para **comprobar** lo enseñado y para **profundizar**. Reglas:
- Solo fuentes confiables: NIST, CISA, INCIBE, MITRE ATT&CK, Microsoft Learn (en `es-es`),
  RFC/IETF, IANA, documentación oficial del software, SANS, Wikipedia para casos históricos.
- Prioriza las que están en español; marca cada una con "en español" o "en inglés".
- **Verifica cada enlace antes de publicarlo** (que responda y que diga lo que la clase afirma).
  Si un dato de la clase no se puede respaldar con una fuente, corrígelo o quítalo.
- Formato: ver la sección de fuentes de `clases/clase-01.html`.

## Estilo

- Dentro de la clase de 2 h, bloques de 5–20 minutos. Explica cada término técnico la primera vez.
- Hazme preguntas; si algo me cuesta, repásalo con otro enfoque.
- Cada nivel termina con un **reto integrador** tipo SOC y un informe de incidente de ejemplo.
- Recomienda recursos **gratuitos** cuando ayuden.

## Seguridad y ética (obligatorio)

- Simulaciones **solo en mi propio equipo**: `localhost`, máquinas virtuales propias,
  datos ficticios o plataformas de práctica legales. Nunca contra terceros.
- Explica cada comando antes de que lo ejecute; nada que dañe mi sistema,
  desactive el antivirus o cambie configuraciones de seguridad.
- Explica siempre el ataque **y** cómo se detecta y se defiende.
