# Cómo agregar nuevas propiedades CSS

El panel Styles no solo te permite ver y modificar propiedades CSS existentes, sino también agregar nuevas propiedades para experimentar con diferentes estilos. Esta capacidad es extremadamente útil para probar ideas de diseño sin modificar el código fuente.

## Modos de agregar propiedades CSS

### 1. Modificar reglas existentes

Para añadir una propiedad a una regla CSS que ya existe:

1. Haz clic en el espacio vacío al final de cualquier regla CSS en el panel Styles
2. Escribe el nombre de la propiedad, seguido de dos puntos (`:`)
3. Escribe el valor de la propiedad
4. Presiona Enter para confirmar

### 2. Crear nuevas reglas CSS

Para crear una regla CSS completamente nueva:

1. Haz clic en el botón `+` (nuevo selector de estilo) en la parte superior del panel Styles
2. Escribe un selector CSS (como `.clase`, `#id` o `elemento`)
3. Presiona Enter para crear la regla
4. Añade propiedades siguiendo el método anterior

### 3. Añadir estilos en línea

Para agregar estilos directamente al elemento HTML:

1. Haz clic en el espacio vacío dentro de la sección `element.style {}` (siempre aparece en la parte superior)
2. Escribe la propiedad y el valor
3. Estos estilos se aplicarán como atributo `style` directamente en el elemento HTML

## Autocompletado y sugerencias

DevTools incluye características inteligentes para ayudarte a agregar propiedades:

- **Autocompletado de nombres de propiedades**: Comienza a escribir y verás sugerencias
- **Sugerencias de valores**: Después de escribir una propiedad, verás valores comunes sugeridos
- **Selector de colores**: Para propiedades de color, se abrirá un selector de colores
- **Selector de sombras**: Para propiedades como `box-shadow` o `text-shadow`
- **Sugerencias de fuentes**: Lista de fuentes disponibles en la página
![Panel Style](/img/css1.png)

## Ejercicios prácticos

1. **Aplica un borde**: 
   - Selecciona un elemento (como una imagen o un div)
   - Añade `border: 2px solid red` a sus estilos
   - Experimenta cambiando el grosor, estilo y color

2. **Modifica el texto**:
   - Selecciona un párrafo o título
   - Añade propiedades como `font-size`, `font-weight`, `color` y `text-shadow`
   - Observa cómo cambia la apariencia del texto

3. **Crea una nueva clase**:
   - Crea una nueva regla con un selector como `.mi-estilo-personalizado`
   - Añade varias propiedades (colores, márgenes, etc.)
   - Aplica esta clase al elemento editando su HTML (añadiendo el atributo `class`)

## Consejos profesionales

### Copiar y aplicar estilos

Si quieres aplicar los mismos estilos que tiene otro elemento:

1. Inspecciona el elemento con los estilos que te gustan
2. En el panel Styles, copia las propiedades que deseas
3. Selecciona tu elemento objetivo
4. Pega las propiedades en la sección `element.style {}`

### Usar variables CSS

Si la página utiliza variables CSS (custom properties):

1. Busca variables definidas (normalmente en `:root` o `body`)
2. Utiliza estas variables en tus propiedades: `color: var(--color-primario)`
3. O modifica el valor de la variable para ver cómo afecta a múltiples elementos

### Guardar tus cambios

Recuerda que los cambios en DevTools son temporales. Para conservarlos:

1. Haz clic derecho en el panel Styles
2. Selecciona "Copy all declarations" para copiar todas las propiedades
3. Pégalas en tu archivo CSS real

### Aplicar estilos a estados específicos

Para probar estilos en estados como `:hover`, `:active` o `:focus`:

1. Haz clic en el botón `:hov` en la parte superior del panel Styles
2. Marca las casillas de los estados que quieres simular
3. Añade o modifica propiedades mientras el estado está activo

Con estas técnicas, podrás experimentar libremente con el diseño de cualquier página web, aprendiendo CSS de manera práctica y visual.
