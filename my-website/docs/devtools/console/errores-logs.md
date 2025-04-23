# Cómo interpretar errores y logs en la consola

Saber leer e interpretar los mensajes de la consola es una habilidad fundamental para cualquier persona que trabaje con páginas web, ya sea que estés creando tu propio sitio o simplemente quieras entender por qué algo no funciona correctamente.

## Anatomía de un mensaje de error

Cuando aparece un error en la consola, generalmente incluye:

1. **Icono de tipo**: Un símbolo que indica si es un error, advertencia o mensaje informativo
2. **Mensaje de error**: Una descripción breve del problema
3. **Ubicación**: Archivo y número de línea donde ocurrió el error
4. **Pila de llamadas (stack trace)**: La secuencia de funciones que llevaron al error
5. **Código previo**: A veces muestra el fragmento de código problemático
![Panel Console](/img/console1.png)

## Tipos comunes de errores

### 1. SyntaxError

Indica un problema con la estructura del código JavaScript:

```
Uncaught SyntaxError: Unexpected token ')'
```

Este tipo de error ocurre cuando hay problemas de sintaxis como paréntesis no balanceados, falta de punto y coma, o uso incorrecto de operadores.

### 2. ReferenceError

Aparece cuando intentas usar una variable o función que no existe:

```
Uncaught ReferenceError: miVariable is not defined
```

Normalmente causado por errores tipográficos, variables no declaradas o problemas de ámbito.

### 3. TypeError

Ocurre cuando intentas realizar una operación en un tipo de dato incorrecto:

```
Uncaught TypeError: Cannot read property 'length' of undefined
```

Por ejemplo, intentar tratar un valor `undefined` como si fuera un objeto o array.

### 4. NetworkError

Relacionado con problemas al cargar recursos:

```
Failed to load resource: the server responded with a status of 404 (Not Found)
```

Indica problemas con solicitudes HTTP, como recursos que no existen o errores de servidor.

## Mensajes de log y su utilidad

Los desarrolladores a menudo insertan mensajes de log en su código para rastrear la ejecución:

### console.log()

El método más básico para mostrar información:

```javascript
console.log("Datos cargados:", datosUsuario);
```

### console.warn()

Para advertencias que no impiden la ejecución pero podrían causar problemas:

```javascript
console.warn("Esta función está obsoleta, use alternativeFunction() en su lugar");
```

### console.error()

Para indicar errores controlados:

```javascript
console.error("Error al procesar el formulario:", error.message);
```

### console.info()

Para mensajes informativos:

```javascript
console.info("La API se conectó correctamente");
```

## Cómo investigar errores eficientemente

### 1. Lee el mensaje completo

No te detengas en las primeras palabras; el mensaje completo suele contener pistas importantes.

### 2. Identifica la ubicación exacta

Haz clic en el enlace del archivo y número de línea para ir directamente al código problemático.

### 3. Examina la pila de llamadas (stack trace)

Te muestra el camino de ejecución que llevó al error, lo que ayuda a entender el contexto.

### 4. Busca patrones en múltiples errores

A veces, múltiples errores están relacionados y comparten una causa raíz común.

## Filtrado y gestión de mensajes

Para manejar mejor la información en la consola:

1. **Usa los filtros** en la parte superior para mostrar solo ciertos tipos de mensajes
2. **Borra la consola** con el icono de prohibido o escribiendo `console.clear()`
3. **Preserva los logs** activando "Preserve log" para mantener mensajes entre recargas
4. **Busca texto específico** con el campo de búsqueda

## Ejercicios prácticos

1. **Genera un error deliberadamente**:
   - Escribe en la consola: `console.log(variableInexistente)`
   - Observa el error de referencia que aparece

2. **Explora errores en sitios populares**:
   - Abre un sitio web conocido
   - Revisa la consola para ver qué tipos de errores o advertencias aparecen
   - Intenta entender por qué ocurren

3. **Usa diferentes métodos de log**:
   - Prueba en la consola: `console.log("Normal")`, `console.warn("Advertencia")`, `console.error("Error")`
   - Observa las diferencias visuales entre cada tipo

Aprender a leer e interpretar los mensajes de la consola te dará una ventaja significativa para diagnosticar y resolver problemas en páginas web, ya sea como desarrollador o como usuario curioso.
