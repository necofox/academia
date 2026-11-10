# Cómo revisar y respaldar el avance de cada computadora

**Para qué sirve:** saber si algún navegador guarda avance que todavía no llegó a GitHub, y
guardar una copia de ese avance **antes** de cualquier cambio en la academia.

**Es seguro:** el comando **solo lee**. No borra, no cambia y no sube nada. **No muestra tu
token**: solo dice si ese navegador está conectado (SÍ o NO).

---

## Dónde hay que revisarlo

Cada navegador guarda el avance por separado, y además en dos "lugares" distintos:

| Lugar | Cuándo se usa |
|---|---|
| **GitHub Pages** | Cuando abres `https://necofox.github.io/academia/` |
| **Doble clic** | Cuando abres una clase haciendo doble clic en el archivo (en Chrome y Edge, todos los archivos abiertos así comparten el mismo almacenamiento) |

Hay que revisar **cada combinación** que hayas usado:
**computadora × navegador (Chrome / Edge) × lugar (GitHub Pages / doble clic)**.
Si nunca usaste alguna combinación, sáltala.

> **Importante:** para revisar, abre las páginas "seguras" que se indican abajo (una hoja de
> estilos). Así **no se ejecuta la sincronización** mientras revisas y nada puede cambiar.
> **No abras clases ni pulses "Guardar ahora"** en otras computadoras hasta terminar la revisión de todas.

---

## Pasos (Chrome y Edge son iguales)

### A. Lugar "GitHub Pages"
1. Abre esta dirección exacta: `https://necofox.github.io/academia/recursos/academia.css`
   (verás texto de estilos; es normal).
2. Pulsa **F12** y elige la pestaña **Consola** (*Console*).
3. Abre el archivo `herramientas/diagnostico-progreso.js` de esta carpeta, copia **todo** su
   contenido y pégalo en la consola.
   - Si el navegador muestra un aviso de seguridad pidiendo que escribas una frase antes de
     pegar (por ejemplo «allow pasting» o «permitir pegar»), escríbela tal como indica el aviso,
     pulsa Enter y vuelve a pegar.
   - Si esa computadora no tiene la carpeta, pídele a Claude el contenido del comando.
4. Pulsa **Enter**. Verás una tabla con el resumen.
5. Si dice "Respaldo copiado", abre el **Bloc de notas**, pega (**Ctrl + V**) y guarda el archivo:
   - Nombre: `respaldo-avance-PC1-chrome-github.json` (cambia PC1, chrome y github según el caso).
   - Dónde: una carpeta **fuera de OneDrive**, por ejemplo `C:\respaldos-academia\`, o una memoria USB.

### B. Lugar "Doble clic" (solo en computadoras que tengan la carpeta de la academia)
1. Abre el Explorador de archivos, entra a la carpeta de la academia → `recursos` y **arrastra**
   el archivo `academia.css` a una ventana de Chrome o de Edge.
   (En esta PC la dirección es `file:///C:/Users/alvar/OneDrive/Desktop/Cyberseguridad/recursos/academia.css`).
2. Repite los pasos 2 a 5 de la parte A, y nombra el archivo con `archivos` en lugar de `github`.

### C. Celular
Los navegadores del celular no tienen consola. Si usaste la academia en el celular, avísale a
Claude para buscar otra forma segura de revisarlo.

---

## Qué enviarle a Claude

Solo la **tabla del resumen** de cada combinación (puedes escribirla o enviar una captura):
lugar, navegador, si está conectado, cantidad de registros y "posibles registros sin subir".
**No hace falta enviar el archivo de respaldo**: contiene tus notas y es para que lo guardes tú.
**Nunca envíes tu token.**

## Qué significa cada dato

| Dato | Significado |
|---|---|
| Registros de avance | Cuántos datos de avance hay (resultados, notas, código, reloj…) |
| Registros sin hora | Avance guardado antes de conectar GitHub. Es el caso de riesgo R3: al conectar, podría pisar avance más nuevo de otra computadora |
| Posibles registros sin subir | Cambios que quizás no llegaron a GitHub. Si es mayor que 0, **no borres nada** y avísale a Claude |
| Último estado de sincronización | El último mensaje de sincronización que vio ese navegador |
