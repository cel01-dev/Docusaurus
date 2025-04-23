# ¿Qué es el panel Network?

El panel Network (Red) es una herramienta fundamental en DevTools que te permite monitorear y analizar todas las solicitudes de red que realiza tu navegador al cargar y utilizar una página web. Es como un "observador de tráfico" que te muestra todo lo que tu navegador descarga e intercambia con los servidores.

## ¿Para qué sirve el panel Network?

El panel Network te permite:

- **Ver todos los recursos** que se descargan para mostrar una página web
- **Analizar el rendimiento** de carga de la página
- **Identificar problemas** de conexión o errores en las solicitudes
- **Examinar los datos** que se envían y reciben (como JSON, imágenes, etc.)
- **Depurar problemas** con APIs y servicios web
- **Optimizar la velocidad** de carga de tu sitio web

## Cómo acceder al panel Network

Existen varias formas de abrir el panel Network:

1. Abre DevTools y haz clic en la pestaña "Network"
2. Usa el atajo de teclado:
   - Windows/Linux: `Ctrl + Shift + E`
   - Mac: `Command + Option + E`

**Importante**: Para ver las solicitudes de red, debes tener el panel Network abierto **antes** de cargar la página. Si abres el panel después de que la página ya cargó, necesitarás recargarla para ver todas las solicitudes.

## Anatomía del panel Network

El panel Network está organizado en varias secciones:

### 1. Barra de control

Contiene opciones para:
- **Activar/desactivar** la grabación de solicitudes
- **Borrar** las solicitudes registradas
- **Filtrar** por tipo de solicitud (XHR, JS, CSS, etc.)
- **Buscar** solicitudes específicas
- **Preservar registro** entre cargas de página
- **Simular** diferentes condiciones de red (3G, offline, etc.)

### 2. Lista de solicitudes

Muestra todas las solicitudes de red en una tabla con columnas que incluyen:
- **Nombre**: El nombre del recurso solicitado
- **Estado**: Código de estado HTTP (200, 404, 500, etc.)
- **Tipo**: El tipo de recurso (document, stylesheet, script, etc.)
- **Iniciador**: Qué parte del código inició la solicitud
- **Tamaño**: Tamaño del recurso
- **Tiempo**: Cuánto tardó en completarse la solicitud
- **Cascada**: Representación visual del tiempo de cada solicitud

### 3. Panel de detalles

Al hacer clic en cualquier solicitud, se muestra un panel con pestañas que te permiten ver:
- **Headers**: Cabeceras HTTP enviadas y recibidas
- **Preview**: Vista previa del contenido (para JSON, imágenes, etc.)
- **Response**: Respuesta completa en texto
- **Timing**: Desglose detallado del tiempo de la solicitud
- **Cookies**: Cookies enviadas con la solicitud
- **Parámetros**: Parámetros de URL o formulario

### 4. Resumen

En la parte inferior del panel, encontrarás un resumen con:
- Número total de solicitudes
- Cantidad total de datos transferidos
- Tiempo total de carga
- Tiempo hasta que la página es interactiva (DOMContentLoaded)
- Tiempo hasta que la página está completamente cargada (Load)

## ¿Por qué es importante el panel Network?

### Para usuarios regulares

- Entender por qué una página carga lentamente
- Verificar si un problema es del sitio web o de tu conexión
- Ver qué datos estás enviando a un sitio web

### Para desarrolladores y diseñadores

- Optimizar el rendimiento de carga de la página
- Depurar problemas con APIs y servicios externos
- Verificar que las solicitudes HTTP envíen los datos correctos
- Analizar respuestas de servidores para detectar errores

### Para profesionales de seguridad y privacidad

- Monitorear qué datos se envían a terceros
- Identificar posibles problemas de seguridad
- Verificar el uso de conexiones seguras (HTTPS)

En las siguientes secciones, aprenderás a examinar archivos específicos, analizar respuestas del servidor y utilizar el panel Network para diagnosticar problemas comunes.
