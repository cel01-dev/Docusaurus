# Consejos y trucos para la consola

La consola de DevTools ofrece muchas funcionalidades avanzadas que pueden hacer tu trabajo mucho más eficiente. Aquí encontrarás consejos y trucos que te ayudarán a sacar el máximo provecho de esta herramienta.

## Comandos útiles de la consola

### Referencia rápida a elementos

La consola ofrece varias variables especiales para acceder a elementos:

- `$0` - El elemento actualmente seleccionado en el panel Elements
- `$1` - El elemento anteriormente seleccionado
- `$2` - `$4` - Referencias a selecciones previas

```javascript
// Si seleccionaste un botón en el panel Elements
$0.click();  // Hará clic en ese botón
```

### Selectores rápidos

Además de `$()` y `$$()`, puedes usar:

```javascript
// Encontrar todos los elementos que contienen el texto "precio"
$$('*:contains("precio")');

// Obtener el elemento activo en la página
$x('//a[contains(@class, "active")]');  // Usando XPath
```

### Copiar datos

```javascript
// Copiar objeto como JSON al portapapeles
copy(objeto);

// Copiar como array de objetos desde una tabla HTML
copy($$('table tr').map(row => Array.from(row.children).map(cell => cell.textContent)));
```

## Formateo avanzado de logs

### Estilos en console.log

Puedes dar formato a tus mensajes con CSS:

```javascript
console.log('%cAtención!', 'color: red; font-size: 20px; font-weight: bold;');
console.log('%cTexto normal %cTexto destacado', 'color: black;', 'color: blue; font-weight: bold;');
```

### Tablas para datos estructurados

```javascript
let usuarios = [
  { nombre: "Ana", edad: 28, rol: "Diseñadora" },
  { nombre: "Luis", edad: 34, rol: "Desarrollador" },
  { nombre: "Elena", edad: 42, rol: "Manager" }
];

console.table(usuarios);  // Muestra una tabla ordenable
console.table(usuarios, ["nombre", "rol"]);  // Solo muestra columnas específicas
```

### Agrupar mensajes relacionados

```javascript
console.group("Proceso de inicio de sesión");
console.log("1. Verificando credenciales...");
console.log("2. Autenticación correcta");
console.log("3. Cargando preferencias de usuario...");
console.groupEnd();
```

## Depuración avanzada

### Puntos de interrupción desde la consola

```javascript
// Detiene la ejecución cuando se llama a la función login
debug(login);

// Registra cada vez que se llama a la función sin detener la ejecución
monitor(login);

// Observa cuando una propiedad cambia
monitorEvents(document.body, "click");  // Registra todos los clics en el body
```

### Rastreo de funciones

```javascript
// Ver la pila de llamadas completa cada vez que se ejecuta una función
console.trace();

// Dentro de una función específica
function buscarElemento() {
  console.trace("Rastreando búsqueda");
  // resto del código
}
```

## Interacciones con la página

### Simular eventos

```javascript
// Simular un clic en un elemento
$0.dispatchEvent(new MouseEvent('click', {
  bubbles: true,
  cancelable: true,
  view: window
}));

// Simular pulsación de tecla
document.dispatchEvent(new KeyboardEvent('keydown', {key: 'Escape'}));
```

### Inspeccionar datos almacenados

```javascript
// Ver cookies
console.log(document.cookie);

// Examinar localStorage
console.log(localStorage);

// Examinar sessionStorage
console.log(sessionStorage);
```

## Aumentar tu productividad

### Reutilización de código

Crea snippets para reutilizar código frecuente:

1. Ve a la pestaña "Sources"
2. Haz clic en "Snippets" en el panel izquierdo
3. Haz clic en "New snippet"
4. Escribe tu código y guárdalo
5. Ejecútalo haciendo clic derecho → Run

### Evaluar expresiones al vuelo

Selecciona cualquier expresión JavaScript en el panel Sources y presiona Ctrl+Shift+E (Cmd+Shift+E en Mac) para evaluar su valor.

### Evaluar en un contexto específico

Si estás inspeccionando un iframe o una página interna:

1. Selecciona el contexto de ejecución en el menú desplegable de la consola
2. Tus comandos se ejecutarán en ese contexto específico

## Ejercicios prácticos

1. **Personaliza mensajes**:
   - Crea un mensaje de advertencia con formato personalizado
   - Utiliza diferentes colores y tamaños para destacar información

2. **Analiza datos tabular**:
   - Encuentra una tabla en una página web
   - Extrae sus datos usando `$$` y `map`
   - Muestra los resultados en una tabla usando `console.table`

3. **Crea un snippet**:
   - Escribe un snippet que cuente cuántas imágenes hay en la página
   - Clasifícalas por tamaño (pequeñas, medianas, grandes)
   - Muestra el resultado en un formato atractivo

## Conclusión

La consola de DevTools es mucho más que un simple lugar para ver errores. Con estos consejos y trucos, puedes convertirla en una herramienta poderosa para explorar, analizar y modificar páginas web de manera rápida y eficiente. Experimentar con estos comandos te ayudará a desarrollar un flujo de trabajo más productivo.
