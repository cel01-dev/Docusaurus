# Cómo inspeccionar y modificar colores

El manejo de colores es una parte esencial del diseño web, y DevTools ofrece herramientas especializadas para inspeccionar, seleccionar y modificar colores en cualquier página web.

## El selector de colores en DevTools

Cuando encuentras una propiedad CSS relacionada con colores (como `color`, `background-color`, `border-color`, etc.), DevTools muestra un pequeño cuadrado con el color aplicado. Este cuadrado es en realidad un botón que abre el selector de colores.

### Cómo acceder al selector de colores

1. Selecciona un elemento en el panel Elements
2. En el panel Styles, encuentra una propiedad de color (aparecerá con un cuadrado de color)
3. Haz clic en el cuadrado de color para abrir el selector

## Características del selector de colores

### Diferentes formatos de color

El selector te permite ver y cambiar entre diferentes formatos:

- **HEX**: `#RRGGBB` o `#RGB` (ej: `#FF5733`)
- **RGB**: `rgb(red, green, blue)` (ej: `rgb(255, 87, 51)`)
- **RGBA**: `rgba(red, green, blue, alpha)` (ej: `rgba(255, 87, 51, 0.5)`)
- **HSL**: `hsl(hue, saturation, lightness)` (ej: `hsl(14, 100%, 60%)`)
- **HSLA**: `hsla(hue, saturation, lightness, alpha)` (ej: `hsla(14, 100%, 60%, 0.5)`)
- **Palabras clave**: Nombres de colores como `red`, `blue`, `transparent`

Puedes cambiar entre estos formatos haciendo clic en el valor del color mientras el selector está abierto.

### Partes del selector de colores

El selector incluye varias herramientas:

1. **Paleta de espectro**: Un campo de selección de color 2D con tono y saturación
2. **Deslizador de luminosidad**: Para ajustar el brillo del color
3. **Deslizador de opacidad**: Para ajustar la transparencia (valores alpha)
4. **Muestrario de colores**: Colores predefinidos y utilizados recientemente
5. **Cuentagotas**: Para seleccionar colores de cualquier parte de la página
6. **Vista previa**: Muestra el color original y el modificado para comparar

## Trabajando con paletas de colores

### Colores de la página

DevTools puede mostrarte todos los colores utilizados en la página:

1. Abre el panel Styles
2. Busca la pestaña "Colors" (en algunas versiones está dentro de los tres puntos "⋮")
3. Verás todos los colores agrupados por tonalidad

### Colores en variables CSS

Si la página utiliza variables CSS para colores:

1. Busca propiedades como `--color-primary: #3366ff;`
2. Modifica estas variables para ver cómo afectan a toda la página
3. Experimenta con diferentes valores para ver cómo cambia el esquema de colores

## Ejercicios prácticos

1. **Cambio de esquema de colores**:
   - Selecciona varios elementos importantes (encabezados, botones, fondos)
   - Utiliza el selector de colores para cambiar su color
   - Intenta crear un tema coherente con 2-3 colores principales

2. **Juega con la transparencia**:
   - Encuentra elementos con fondos de color
   - Añade transparencia usando el deslizador de opacidad
   - Observa cómo se combinan con los elementos debajo

3. **Utiliza el cuentagotas**:
   - Abre el selector de colores
   - Haz clic en el cuentagotas
   - Selecciona un color de cualquier parte de la página o incluso fuera del navegador

## Consejos para trabajar con colores

### Accesibilidad de colores

DevTools te ayuda a verificar la accesibilidad del contraste de colores:

1. En el selector de colores, busca la relación de contraste (aparece como "Contrast ratio: X:1")
2. Un círculo verde indica que el contraste es adecuado para accesibilidad
3. Un círculo amarillo indica que cumple con los estándares mínimos
4. Un círculo rojo indica que el contraste es insuficiente

### Paletas complementarias

Para crear diseños armoniosos:

1. Selecciona un color base
2. Utiliza el selector para encontrar variaciones más claras y oscuras
3. Usa el formato HSL para mantener el mismo tono pero variar la saturación y luminosidad

### Exportación de colores

Para guardar los colores que has encontrado o creado:

1. Anota el código de color en el formato que prefieras (HEX, RGB, HSL)
2. Utilízalo en tu propio CSS posteriormente

El dominio del selector de colores te permitirá experimentar con diferentes estilos visuales y entender mejor cómo los colores afectan la percepción y usabilidad de un sitio web.
