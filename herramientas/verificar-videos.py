"""VERIFICAR VIDEOS DE YOUTUBE (solo lectura; no necesita cuenta ni clave).

Uso, desde la carpeta de la academia:
    python -X utf8 herramientas/verificar-videos.py ID1 ID2 ...          -> muestra los datos
    python -X utf8 herramientas/verificar-videos.py --json salida.json ID1 ID2 ...

Por cada video consulta las páginas públicas de YouTube y devuelve: título exacto, canal,
duración, fecha de publicación, si está disponible, un extracto de la descripción y los
subtítulos que tiene (español manual, español automático, o solo traducción automática).
No inicia sesión, no descarga el video y no envía datos personales.
"""
import json
import re
import sys
import urllib.parse
import urllib.request
from datetime import date

CABECERAS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
    'Accept-Language': 'es-419,es;q=0.9,en;q=0.8',
    'Cookie': 'CONSENT=YES+1',
}


def pedir(url, idioma=None):
    cab = dict(CABECERAS)
    if idioma:  # el título original se pide en inglés: YouTube traduce los títulos según el idioma
        cab['Accept-Language'] = idioma
    req = urllib.request.Request(url, headers=cab)
    with urllib.request.urlopen(req, timeout=25) as r:
        return r.read().decode('utf-8', errors='replace')


def extraer_json(html, marcador):
    i = html.find(marcador)
    if i < 0:
        return None
    i = html.find('{', i)
    try:
        obj, _ = json.JSONDecoder().raw_decode(html[i:])
        return obj
    except ValueError:
        return None


def verificar(vid):
    url = 'https://www.youtube.com/watch?v=' + vid
    dato = {'id': vid, 'url': url, 'verificado': date.today().isoformat()}
    try:
        oe = json.loads(pedir('https://www.youtube.com/oembed?format=json&url=' + urllib.parse.quote(url, safe=''), 'en-US,en;q=0.9'))
        dato['titulo'] = oe.get('title')
        dato['canal'] = oe.get('author_name')
        dato['canalUrl'] = oe.get('author_url')
    except Exception as e:  # el video no existe, es privado o no permite insertarse
        dato['error_oembed'] = str(e)
    try:
        html = pedir(url + '&hl=es')
        pr = extraer_json(html, 'ytInitialPlayerResponse') or {}
        vd = pr.get('videoDetails', {})
        mf = pr.get('microformat', {}).get('playerMicroformatRenderer', {})
        dato['estado'] = pr.get('playabilityStatus', {}).get('status')
        if vd.get('lengthSeconds'):
            s = int(vd['lengthSeconds'])
            dato['duracion'] = ('%d:%02d:%02d' % (s // 3600, s % 3600 // 60, s % 60)) if s >= 3600 else ('%d:%02d' % (s // 60, s % 60))
        dato['tituloPagina'] = vd.get('title')
        dato['publicado'] = mf.get('publishDate', '')[:10]
        dato['descripcion'] = re.sub(r'\s+', ' ', vd.get('shortDescription', ''))[:500]
        pistas = pr.get('captions', {}).get('playerCaptionsTracklistRenderer', {}).get('captionTracks', [])
        manual = sorted({p.get('languageCode') for p in pistas if p.get('kind') != 'asr'})
        auto = sorted({p.get('languageCode') for p in pistas if p.get('kind') == 'asr'})
        dato['subtitulosManuales'] = manual
        dato['subtitulosAutomaticos'] = auto
        traducibles = any(p.get('isTranslatable') for p in pistas)
        if any(l.startswith('es') for l in manual):
            dato['subtitulosEs'] = 'Sí, en español (escritos)'
        elif any(l.startswith('es') for l in auto):
            dato['subtitulosEs'] = 'Sí, en español (automáticos)'
        elif traducibles:
            dato['subtitulosEs'] = 'Solo traducción automática de YouTube'
        else:
            dato['subtitulosEs'] = 'No'
        # Idioma del audio: el de los subtítulos automáticos, si existen
        dato['idiomaAudio'] = auto[0] if auto else (manual[0] if len(manual) == 1 else '')
        # Pistas de audio (algunos videos tienen doblaje, por ejemplo al español)
        pistas_audio = sorted({f.get('audioTrack', {}).get('displayName') for f in pr.get('streamingData', {}).get('adaptiveFormats', []) if f.get('audioTrack')} - {None})
        dato['pistasAudio'] = pistas_audio
        originales = [p for p in pistas_audio if re.search(r'(?i)original', p)]
        if originales:  # la pista marcada «original» dice el idioma real del video
            dato['idiomaAudio'] = re.sub(r'(?i)\s*original', '', originales[0]).strip()
        # Doblaje: hay una pista en español que NO es la original (doblaje, a menudo automático)
        dato['dobladoEs'] = any(re.search(r'(?i)espa|spanish', p) and not re.search(r'(?i)original', p) for p in pistas_audio)
    except Exception as e:
        dato['error_pagina'] = str(e)
    return dato


def main(args):
    salida = None
    if args[:1] == ['--json']:
        salida, args = args[1], args[2:]
    datos = [verificar(v) for v in args]
    if salida:
        with open(salida, 'w', encoding='utf-8') as f:
            json.dump(datos, f, ensure_ascii=False, indent=1)
    for d in datos:
        print('%s | %s | %s | %s | %s | publ. %s | subt. ES: %s | audio: %s%s' % (
            d['id'], d.get('estado'), d.get('canal'), d.get('duracion'), d.get('titulo'),
            d.get('publicado'), d.get('subtitulosEs'), d.get('idiomaAudio'),
            ' | doblaje ES' if d.get('dobladoEs') else ''))


if __name__ == '__main__':
    main(sys.argv[1:])
