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
    "title": "Young Cister - miau (Video Oficial)",
    "thumbnail": "https://img.youtube.com/vi/A3WAPhe5JV8/hqdefault.jpg",
    "id": "A3WAPhe5JV8",
    "format": "<Buffer 49 44 33 03 00 00 00 01 59 39 54 49 54 32 00 00 00 49 00 00 01 ff fe 59 00 6f 00 75 00 6e 00 67 00 20 00 43 00 69 00 73 00 74 00 65 00 72 00 20 00 2d ... 3218492 more bytes>"
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