# ytdl

ytdl es una herramienta poderosa para descargar videos y audios de YouTube. Este proyecto está basado en node.js y utiliza métodos eficientes para obtener contenido multimedia desde la plataforma de YouTube.

## Características

- Descargar videos en múltiples formatos y resoluciones.
- Extraer el audio de los videos.
- Soporte para listas de reproducción.
- Fácil de usar y configurar.

## Instalación

Sigue estos pasos para instalar y configurar `ytdl`:

1. Clona el repositorio:
    ```sh
    git clone https://github.com/OfcKing/ytdl.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd ytdl
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```
   
También puedes agregar `ytdl` directamente en tu `package.json`:
```json
"dependencies": {
    "ytdl": "github:OfcKing/ytdl"
}
```

## Uso

Para usar `ytdl`, simplemente ejecuta el siguiente comando en tu terminal:

```sh
node ytdl.js <URL del video o lista de reproducción>
```

Ejemplo:
```sh
node ytdl.js https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

Esto descargará el video especificado en el directorio actual.

## Opciones

`ytdl` soporta varias opciones para personalizar tus descargas:

- `-f, --format`: Especifica el formato del video (mp4, mkv, etc.).
- `-r, --resolution`: Define la resolución del video (1080p, 720p, etc.).
- `-a, --audio-only`: Descarga solo el audio del video.

Ejemplo:
```sh
node ytdl.js -f mp4 -r 720p https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

## Ejemplo de Respuesta

Aquí tienes un ejemplo de respuesta JSON que puedes esperar al usar `ytdl`:

```json
{
  "status": true,
  "creator": "Alex-X",
  "code": 200,
  "result": {
    "title": "Ejemplo de Título de Video",
    "type": "audio",
    "format": "mp3/mp4",
    "thumbnail": "https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg",
    "dl_url": "url",
    "id": "VIDEO_ID",
    "duration": "120",
    "quality": "mp3",
    "downloaded": false
  }
}
```

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Empuja tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

## Contacto

Para cualquier pregunta o sugerencia, por favor abre un issue en el repositorio o contacta al propietario.