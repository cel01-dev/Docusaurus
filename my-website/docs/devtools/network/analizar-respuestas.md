# Cómo analizar respuestas del servidor

Las respuestas del servidor contienen información vital sobre lo que sucede cuando tu navegador se comunica con un sitio web. Analizar estas respuestas es crucial para entender errores, depurar problemas de comunicación y optimizar el rendimiento.

## Fundamentos de las respuestas HTTP

Cada vez que tu navegador solicita un recurso (página HTML, imagen, API, etc.), el servidor responde con:

1. **Código de estado HTTP**: Número que indica el resultado de la solicitud
2. **Cabeceras de respuesta**: Metadatos sobre la respuesta
3. **Cuerpo de la respuesta**: El contenido real solicitado

## Códigos de estado HTTP comunes

Los códigos de estado HTTP te indican rápidamente si una solicitud tuvo éxito o falló:

### Respuestas exitosas (2xx)

- **200 OK**: La solicitud se completó correctamente
- **201 Created**: El recurso se creó exitosamente (común en POST)
- **204 No Content**: La solicitud se completó, pero no hay contenido para devolver

### Redirecciones (3xx)

- **301 Moved Permanently**: El recurso se ha movido permanentemente a una nueva URL
- **302 Found**: Redirección temporal
- **304 Not Modified**: El recurso no ha cambiado desde la última solicitud (caché)

### Errores del cliente (4xx)

- **400 Bad Request**: La solicitud contiene errores de sintaxis
- **401 Unauthorized**: Requiere autenticación
- **403 Forbidden**: El servidor rechaza la solicitud (sin permiso)
- **404 Not Found**: El recurso solicitado no existe
- **429 Too Many Requests**: Has enviado demasiadas solicitudes (límite de tasa)

### Errores del servidor (5xx)

- **500 Internal Server Error**: Error general del servidor
- **502 Bad Gateway**: El servidor actuó como puerta de enlace y recibió una respuesta inválida
- **503 Service Unavailable**: El servidor no está disponible temporalmente
- **504 Gateway Timeout**: El servidor actuó como puerta de enlace y no recibió respuesta a tiempo

## Cómo examinar las respuestas

### 1. Identificar respuestas con problemas

En el panel Network, las respuestas problemáticas se destacan:
- **Rojo**: Errores (4xx, 5xx)
- **Amarillo**: Advertencias (redirecciones, etc.)

### 2. Examinar las cabeceras de respuesta

1. Selecciona una solicitud en el panel Network
2. Ve a la pestaña Headers
3. Desplázate hacia abajo hasta "Response Headers"

Cabeceras importantes a observar:

- **Content-Type**: Tipo de contenido (text/html, application/json, etc.)
- **Content-Length**: Tamaño de la respuesta en bytes
- **Date**: Cuándo se generó la respuesta
- **Server**: Qué software de servidor se está utilizando
- **Cache-Control**: Directivas de caché
- **Set-Cookie**: Cookies que el servidor quiere establecer
- **Content-Encoding**: Si el contenido está comprimido (gzip, br, etc.)

### 3. Examinar el cuerpo de la respuesta

1. Selecciona una solicitud en el panel Network
2. Elige la pestaña adecuada:
   - **Preview**: Vista formateada (ideal para JSON, HTML)
   - **Response**: Contenido sin procesar
   - **Headers**: Para ver solo las cabeceras

### 4. Analizar errores en detalle

Si encuentras una respuesta con error:

1. Verifica el código de estado (404, 500, etc.)
2. Examina el cuerpo de la respuesta por mensajes de error específicos
3. Revisa las cabeceras en busca de información adicional
4. Comprueba los parámetros enviados en la solicitud

## Casos específicos de análisis

### API REST y respuestas JSON

Para APIs que devuelven JSON:

1. Busca solicitudes XHR/Fetch en el panel Network
2. Selecciona una solicitud de API
3. Ve a la pestaña Preview para ver el JSON formateado
4. Busca campos de error o mensajes dentro del JSON
5. Verifica la estructura de datos para asegurarte de que coincide con lo esperado

```json
{
  "success": false,
  "error": {
    "code": "INVALID_PARAMETERS",
    "message": "El parámetro 'id' es obligatorio"
  }
}
```

### Problemas de autenticación

Para problemas de inicio de sesión o acceso:

1. Busca códigos de estado 401 o 403
2. Examina las cabeceras de autenticación:
   - `WWW-Authenticate`: Indica el tipo de autenticación requerida
   - `Authorization`: Verifica que se envíe correctamente
3. Comprueba si hay cookies de sesión válidas

### Problemas de carga de recursos

Para recursos que no se cargan correctamente:

1. Verifica el código de estado (404 para recursos inexistentes)
2. Comprueba la URL exacta solicitada
3. Examina las cabeceras de respuesta para detectar redirecciones o problemas de CORS
4. Verifica el Content-Type para asegurarte de que coincide con lo esperado

## Ejercicios prácticos

1. **Análisis de errores**:
   - Visita una URL que no existe en un sitio web (añade "/pagina-inexistente" a la URL)
   - Observa el código de estado 404
   - Examina la respuesta para ver cómo el sitio maneja páginas no encontradas

2. **Análisis de API**:
   - Visita una página que use una API (como una tienda en línea)
   - Filtra por Fetch/XHR
   - Selecciona solicitudes a APIs y examina sus respuestas
   - Identifica la estructura de datos utilizados

3. **Análisis de rendimiento**:
   - Observa el tiempo de respuesta de diferentes recursos
   - Identifica los recursos que tardan más en cargarse
   - Examina sus cabeceras para detectar problemas de caché o compresión

Analizar respuestas del servidor te da visibilidad directa sobre lo que está sucediendo entre tu navegador y el servidor web, ayudándote a identificar y resolver problemas de manera eficiente.
