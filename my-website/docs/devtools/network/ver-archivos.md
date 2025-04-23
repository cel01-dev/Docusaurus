# Cómo ver y analizar archivos con Network

El panel Network de DevTools te permite examinar detalladamente cada archivo y recurso que tu navegador descarga. Aprender a analizar estos archivos es esencial para entender cómo funciona una página web y para solucionar problemas.

## Cómo iniciar la captura de solicitudes

1. Abre DevTools y ve a la pestaña Network
2. Asegúrate de que el botón de grabación (círculo rojo) esté activado
3. Recarga la página usando:
   - El botón de recarga del navegador
   - Atajo de teclado: F5 o Ctrl+R (Cmd+R en Mac)
   - Recarga forzada (sin caché): Ctrl+Shift+R (Cmd+Shift+R en Mac)

## Filtrar y organizar solicitudes

### Filtros predeterminados

En la barra superior del panel Network encontrarás filtros rápidos:

- **All**: Muestra todas las solicitudes
- **Fetch/XHR**: Solicitudes JavaScript (AJAX)
- **JS**: Archivos JavaScript
- **CSS**: Hojas de estilo
- **Img**: Imágenes
- **Media**: Audio/video
- **Font**: Fuentes web
- **Doc**: Documentos HTML y otros documentos
- **WS**: WebSockets
- **Manifest**: Archivos de manifiesto de aplicación
- **Other**: Otros tipos de recursos

### Filtros personalizados

1. Haz clic en el campo de búsqueda (🔍)
2. Escribe para filtrar por:
   - Nombre de archivo: `logo.png`
   - Dominio: `google.com`
   - Tipo de contenido: `image/png`
   - Estado: `status:404`
   - Tamaño mayor que: `larger-than:100k`

## Examinar archivos individuales

### Seleccionar y ver un archivo

1. Haz clic en cualquier entrada de la lista de solicitudes
2. Se abrirá un panel de detalles con varias pestañas

### Pestañas principales

#### Headers (Cabeceras)

Muestra todas las cabeceras HTTP de la solicitud y respuesta:

- **General**: URL, método, código de estado
- **Response Headers**: Cabeceras enviadas por el servidor
- **Request Headers**: Cabeceras enviadas por tu navegador
- **Query String Parameters**: Parámetros en la URL

#### Preview (Vista previa)

Muestra una vista previa formateada del contenido:
- **JSON**: Formateado y expandible
- **Imágenes**: Muestra la imagen
- **HTML**: Renderizado básico
- **CSS**: Formateado con colores
- **JavaScript**: Formateado con colores

#### Response (Respuesta)

Muestra el contenido sin procesar recibido del servidor:
- Para texto: contenido en texto plano
- Para datos binarios: representación hexadecimal

#### Timing (Tiempos)

Muestra una línea de tiempo detallada de la solicitud:
- **Queueing**: Tiempo en cola
- **DNS Lookup**: Tiempo de resolución DNS
- **Initial Connection**: Tiempo de conexión TCP
- **SSL**: Tiempo de negociación SSL/TLS
- **Request Sent**: Tiempo de envío de la solicitud
- **Waiting (TTFB)**: Tiempo hasta el primer byte
- **Content Download**: Tiempo de descarga del contenido

## Interacción con los archivos

### Copiar información

Haz clic derecho en cualquier solicitud para acceder a opciones como:
- **Copy URL**: Copiar la URL del archivo
- **Copy Response**: Copiar el contenido de la respuesta
- **Copy as Fetch**: Copiar código JavaScript para reproducir la solicitud
- **Copy All as HAR**: Exportar todas las solicitudes en formato HAR

### Guardar archivos

1. Haz clic derecho en una solicitud
2. Selecciona "Save as..." para guardar el archivo en tu computadora

### Abrir en nueva pestaña

1. Haz clic derecho en una solicitud
2. Selecciona "Open in new tab" para ver el recurso en una nueva pestaña

## Ejercicios prácticos

1. **Analiza el HTML principal**:
   - Recarga una página web
   - Busca la primera solicitud de tipo Document
   - Examina su contenido en la pestaña Response
   - Observa la estructura HTML básica

2. **Inspecciona un archivo JavaScript**:
   - Filtra por JS
   - Selecciona un archivo JavaScript
   - Utiliza la pestaña Preview para ver el código formateado
   - Intenta identificar funciones o características específicas

3. **Examina una imagen**:
   - Filtra por Img
   - Selecciona una imagen
   - Observa su tamaño y tipo (PNG, JPEG, etc.)
   - Utiliza la pestaña Preview para ver la imagen
   - Verifica si está optimizada mirando su tamaño

4. **Analiza una solicitud AJAX**:
   - Filtra por Fetch/XHR
   - Interactúa con la página para generar una solicitud AJAX
   - Examina los datos enviados y recibidos

El panel Network te permite "mirar bajo el capó" de cualquier página web, revelando todos los recursos que la componen y cómo interactúan entre sí. Esta visibilidad es invaluable para entender y solucionar problemas en sitios web modernos.
