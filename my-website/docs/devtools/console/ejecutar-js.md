# Cómo ejecutar JavaScript en la consola

La consola de DevTools no es solo para ver mensajes y errores, también es un entorno interactivo donde puedes escribir y ejecutar código JavaScript en tiempo real. Esta capacidad es extremadamente poderosa para probar ideas, depurar problemas o interactuar con la página web.

## Conceptos básicos para ejecutar JavaScript

### Cómo ingresar código

1. Abre la consola de DevTools
2. Verás un cursor parpadeante junto a un símbolo `>` (prompt)
3. Escribe tu código JavaScript
4. Presiona Enter para ejecutarlo
![Panel Console](/img/console2.png)

### Sintaxis y ejecución

- **Instrucciones simples**: Escribe una línea de código y presiona Enter
  ```javascript
  document.title = "Nuevo título";
  ```

- **Múltiples líneas**: Usa Shift+Enter para añadir líneas adicionales
  ```javascript
  for (let i = 0; i < 3; i++) {
    console.log("Iteración " + i);
  }
  ```

- **Ver resultados**: La consola muestra automáticamente el valor retornado por la última expresión
  ```javascript
  2 + 2  // Muestra: 4
  ```

## Interacción con la página web

### Acceso a elementos del DOM

Puedes seleccionar y manipular elementos de la página:

```javascript
// Seleccionar un elemento por ID
let titulo = document.getElementById("titulo-principal");

// Cambiar su contenido
titulo.textContent = "¡Modificado desde la consola!";

// Cambiar su estilo
titulo.style.color = "red";
```

### Atajos útiles para seleccionar elementos

La consola proporciona funciones útiles para simplificar la selección de elementos:

```javascript
// Equivalente a document.querySelector()
let boton = $(".boton-enviar");

// Equivalente a document.querySelectorAll()
let enlaces = $$("a.enlace-externo");
```

### Interactuar con formularios

```javascript
// Obtener un campo de entrada
let campoEmail = document.querySelector("input[type='email']");

// Establecer un valor
campoEmail.value = "ejemplo@correo.com";

// Simular un clic en un botón
document.querySelector("button[type='submit']").click();
```

## Trabajando con variables y funciones

### Definir variables

Puedes declarar variables que permanecerán disponibles durante tu sesión de consola:

```javascript
let contador = 0;
const PI = 3.14159;
var nombre = "Usuario";
```

### Crear funciones

Define funciones para reutilizar código:

```javascript
function saludar(nombre) {
  return "¡Hola, " + nombre + "!";
}

// Luego puedes llamarla
saludar("Carlos");  // Muestra: "¡Hola, Carlos!"
```

### Usar funciones flecha

```javascript
const sumar = (a, b) => a + b;
sumar(5, 3);  // Muestra: 8
```

## Técnicas avanzadas

### Examinar objetos

La consola te permite explorar objetos complejos:

```javascript
// Ver todas las propiedades de un objeto
console.dir(document.body);

// Expandir un objeto para ver su estructura
console.log(window.location);
```

### Monitorear eventos

```javascript
// Ver todos los clics en la página
document.addEventListener("click", e => {
  console.log("Elemento clickeado:", e.target);
});
```

### Cronometrar operaciones

```javascript
// Iniciar un cronómetro
console.time("MiOperación");

// Código a medir
for (let i = 0; i < 1000000; i++) {
  // Operación intensiva
}

// Detener y mostrar tiempo
console.timeEnd("MiOperación");  // Muestra: "MiOperación: 15ms"
```

## Ejercicios prácticos

1. **Modifica un elemento**:
   - Usa la consola para cambiar el texto de un título en la página
   - Cambia su color de fondo y tamaño de fuente

2. **Crea una función útil**:
   - Define una función que cuente cuántos enlaces hay en la página
   - Haz que devuelva un objeto con la cantidad total y un array con todos los URLs

3. **Interactúa con una API**:
   ```javascript
   fetch("https://jsonplaceholder.typicode.com/posts/1")
     .then(response => response.json())
     .then(data => console.log(data));
   ```

## Consejos finales

- **Autocompletado**: Presiona Tab mientras escribes para completar propiedades y métodos
- **Historial**: Usa las flechas arriba/abajo para navegar por comandos anteriores
- **Limpiar consola**: Escribe `console.clear()` o presiona Ctrl+L para limpiar la consola
- **Persistencia**: Los objetos y variables definidos permanecen disponibles hasta que refresques la página

La consola es una herramienta increíblemente poderosa para experimentar, aprender y depurar. Con práctica, te volverás más ágil utilizándola para resolver problemas y probar ideas rápidamente.
