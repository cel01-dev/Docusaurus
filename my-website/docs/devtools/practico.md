# Ejercicios Prácticos con DevTools

Esta sección contiene ejercicios prácticos que te ayudarán a consolidar lo aprendido sobre las DevTools. Cada ejercicio está diseñado para principiantes y te guiará paso a paso en el uso de diferentes paneles y funcionalidades.

## Ejercicio 1: Inspeccionar y Modificar Elementos HTML

**Objetivo:** Familiarizarte con el panel Elements y aprender a modificar contenido HTML en tiempo real.

**Pasos:**
1. Abre cualquier sitio web (por ejemplo, [https://wikipedia.org](https://wikipedia.org))
2. Abre las DevTools (F12 o clic derecho → Inspeccionar)
3. En el panel Elements, busca el elemento `<h1>` principal de la página
4. Haz doble clic en el texto dentro del elemento para modificarlo
5. Cambia el texto por "Mi primera modificación con DevTools"
6. Observa cómo el cambio se refleja inmediatamente en la página

**Preguntas para reflexionar:**
- ¿Qué sucede cuando recargas la página?
- ¿Podrías cambiar otros elementos como imágenes o enlaces?

## Ejercicio 2: Experimentar con Estilos CSS

**Objetivo:** Aprender a modificar estilos CSS para ver cambios visuales inmediatos.

**Pasos:**
1. En el mismo sitio web, selecciona un elemento de texto en el panel Elements
2. En el panel Styles (a la derecha), observa los estilos aplicados al elemento
3. Modifica las siguientes propiedades:
   - Cambia el `color` a `red`
   - Aumenta el `font-size` a `24px`
   - Añade un `background-color` con valor `yellow`
4. Haz clic en el botón "+" para añadir una nueva propiedad
5. Agrega `text-transform: uppercase` para convertir el texto a mayúsculas

**Desafío adicional:**
- Intenta hacer que el elemento seleccionado tenga una animación simple usando la propiedad `transition`

## Ejercicio 3: Analizar el Rendimiento de Carga

**Objetivo:** Usar el panel Network para entender cómo se cargan los recursos de una página.

**Pasos:**
1. Abre las DevTools y selecciona la pestaña Network
2. Marca la casilla "Disable cache" para evitar que el caché afecte los resultados
3. Recarga la página (Ctrl+R o Cmd+R)
4. Observa la cascada de recursos que se cargan
5. Identifica:
   - El tiempo total de carga (en la parte inferior)
   - El archivo más grande (ordena por tamaño)
   - El archivo que tardó más en cargarse (ordena por tiempo)

**Preguntas para reflexionar:**
- ¿Hay recursos que podrían ser optimizados para mejorar el tiempo de carga?
- ¿Qué tipos de archivos (HTML, CSS, JS, imágenes) ocupan más tamaño?

## Ejercicio 4: Debug JavaScript con Console

**Objetivo:** Practicar el uso básico de la consola para depurar problemas.

**Pasos:**
1. Abre las DevTools y selecciona la pestaña Console
2. Escribe y ejecuta estos comandos básicos:
   ```javascript
   console.log("Hola Mundo");
   console.error("Este es un mensaje de error");
   console.warn("Esta es una advertencia");
   ```
3. Ahora intenta con algunos cálculos:
   ```javascript
   2 + 2
   Math.random() * 100
   document.title
   ```
4. Usa `document.querySelector` para seleccionar un elemento:
   ```javascript
   const miElemento = document.querySelector('h1');
   console.log(miElemento);
   miElemento.style.color = 'blue';
   ```

**Desafío adicional:**
- Ejecuta un bucle que cambie el color de varios elementos:
  ```javascript
  const parrafos = document.querySelectorAll('p');
  parrafos.forEach((p, index) => {
    p.style.backgroundColor = index % 2 === 0 ? '#f0f0f0' : '#e0e0e0';
  });
  ```

## Ejercicio 5: Emular Dispositivos Móviles

**Objetivo:** Aprender a probar tu sitio en diferentes tamaños de pantalla.

**Pasos:**
1. Abre las DevTools
2. Haz clic en el icono de dispositivo móvil o presiona Ctrl+Shift+M (Cmd+Shift+M en Mac)
3. En el menú desplegable, selecciona un dispositivo (ej: "iPhone X")
4. Observa cómo se ve la página en esa resolución
5. Prueba a cambiar la orientación (botón de rotación)
6. Selecciona otros dispositivos y observa los cambios

**Preguntas para reflexionar:**
- ¿La página se adapta correctamente a diferentes tamaños?
- ¿Hay elementos que se ven mal o desaparecen en pantallas pequeñas?

## Ejercicio 6: Auditoría con Lighthouse

**Objetivo:** Realizar una auditoría básica de rendimiento y accesibilidad.

**Pasos:**
1. Abre las DevTools y selecciona la pestaña Lighthouse
2. Marca las casillas de Performance, Accessibility y Best Practices
3. Haz clic en "Generate report"
4. Revisa la puntuación en cada categoría
5. Examina las recomendaciones proporcionadas

**Desafío adicional:**
- Selecciona una de las recomendaciones e intenta implementarla usando los conocimientos que has adquirido sobre DevTools

## Ejercicio 7: Experimentar con Application Storage

**Objetivo:** Entender cómo funcionan las cookies y el almacenamiento local.

**Pasos:**
1. Abre las DevTools y selecciona la pestaña Application
2. En el panel izquierdo, expande "Local Storage" y selecciona tu dominio actual
3. Haz clic en "Add" para crear un nuevo elemento
4. Agrega la clave "miPrimeraVariable" con el valor "Hola desde DevTools"
5. Ahora ve a la consola y escribe:
   ```javascript
   console.log(localStorage.getItem('miPrimeraVariable'));
   ```
6. Observa cómo puedes acceder al valor que has guardado

**Preguntas para reflexionar:**
- ¿Qué diferencia hay entre localStorage y sessionStorage?
- ¿Qué sucede con los datos almacenados cuando cierras el navegador?

## Ejercicio 8: Depurar Responsively con CSS Grid

**Objetivo:** Aprender a visualizar y modificar layouts basados en Grid.

**Pasos:**
1. Crea un archivo HTML simple con este código:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <style>
       .grid-container {
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         grid-gap: 10px;
       }
       .grid-item {
         background-color: #ddd;
         padding: 20px;
         text-align: center;
       }
     </style>
   </head>
   <body>
     <div class="grid-container">
       <div class="grid-item">1</div>
       <div class="grid-item">2</div>
       <div class="grid-item">3</div>
       <div class="grid-item">4</div>
       <div class="grid-item">5</div>
       <div class="grid-item">6</div>
     </div>
   </body>
   </html>
   ```
2. Abre este archivo en tu navegador
3. Abre DevTools y selecciona la pestaña Elements
4. Selecciona el elemento con clase "grid-container"
5. En el panel Styles, deberías ver un pequeño icono de grid junto a `display: grid;`
6. Haz clic en ese icono para activar la visualización de la cuadrícula
7. Modifica los valores de `grid-template-columns` en el panel Styles y observa los cambios

**Desafío adicional:**
- Intenta cambiar la disposición a una cuadrícula de 2x3 en lugar de 3x2

## Ejercicio 9: Análisis de Rendimiento Básico

**Objetivo:** Realizar un análisis simple de rendimiento de una página.

**Pasos:**
1. Abre las DevTools y selecciona la pestaña Performance
2. Haz clic en el botón de grabación (círculo)
3. Recarga la página
4. Después de que se cargue completamente, haz clic en "Stop"
5. Observa el gráfico de tiempo y las diferentes secciones (Network, Rendering, etc.)
6. Identifica los momentos en que la CPU estuvo más ocupada

**Preguntas para reflexionar:**
- ¿Qué actividades consumieron más tiempo durante la carga?
- ¿Hay scripts que bloquean la renderización?

## Ejercicio 10: Proyecto Final - Diagnóstico Completo

**Objetivo:** Integrar todos los conocimientos para analizar y mejorar un sitio web.

**Pasos:**
1. Selecciona un sitio web sencillo (puede ser uno propio o cualquier sitio público)
2. Realiza un análisis completo utilizando las siguientes herramientas:
   - Panel Network: Analiza el tiempo de carga y los recursos
   - Panel Elements: Revisa la estructura HTML y los estilos
   - Panel Lighthouse: Realiza una auditoría completa
   - Panel Console: Busca errores o advertencias
3. Documenta tus hallazgos:
   - 3 problemas principales que encontraste
   - 3 soluciones que recomendarías
   - 1 aspecto positivo que destacarías

**Sugerencias para problemas comunes:**
- Imágenes demasiado grandes
- JavaScript no optimizado
- Estilos CSS redundantes
- Problemas de accesibilidad
- Contenido no responsive

## Conclusión

Estos ejercicios prácticos te han ayudado a aplicar lo aprendido sobre las DevTools. Recuerda que la práctica constante es clave para dominar estas herramientas. A medida que trabajes en tus propios proyectos, tómate el tiempo para explorar las DevTools y continuar descubriendo nuevas funcionalidades.

La capacidad de inspeccionar, modificar y depurar páginas web en tiempo real es una habilidad invaluable para cualquier desarrollador web, ya sea principiante o experimentado. ¡Felicidades por dar este importante paso en tu formación!
