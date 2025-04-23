# Cómo activar y desactivar propiedades CSS

Una de las funciones más útiles del panel Styles es la capacidad de activar y desactivar propiedades CSS sin eliminarlas. Esto te permite experimentar con diferentes estilos rápidamente y ver cómo afectan a la página.

## ¿Por qué activar/desactivar en lugar de eliminar?

- **Experimentación rápida**: Puedes probar el aspecto de un elemento con y sin una propiedad específica
- **Depuración**: Ayuda a identificar qué propiedad está causando un problema visual
- **Conservación**: No pierdes el valor original de la propiedad, puedes volver a activarla cuando quieras
- **Comparación**: Facilita comparar diferentes configuraciones de estilo

## Cómo activar/desactivar propiedades CSS

### Método 1: Usando la casilla de verificación

Cada propiedad CSS en el panel Styles tiene una pequeña casilla de verificación a su izquierda:

1. Haz clic en la casilla para desactivar la propiedad (aparecerá tachada)
2. Vuelve a hacer clic para activarla nuevamente

### Método 2: Usando atajos de teclado

1. Coloca el cursor en la línea de la propiedad que deseas activar/desactivar
2. Presiona `Ctrl + /` (o `Command + /` en Mac)
3. La propiedad se desactivará (aparecerá comentada con `/* */`)
4. Presiona nuevamente para volver a activarla

## Visualización de propiedades desactivadas

Las propiedades desactivadas se muestran de diferentes maneras:

- Con una línea tachada a través del texto
- En color gris o más claro que las propiedades activas
- A veces, con comentarios CSS (`/* */`) a su alrededor
![Panel Style](/img/css.png)

## Ejercicios prácticos

1. **Experimenta con el color**: 
   - Selecciona un encabezado o texto colorido
   - Desactiva la propiedad `color` y observa cómo cambia
   - Vuelve a activarla

2. **Juega con los márgenes y el relleno**:
   - Encuentra un elemento con márgenes (`margin`) y relleno (`padding`)
   - Desactiva estas propiedades una por una
   - Observa cómo afecta a la disposición de los elementos

3. **Prueba con propiedades de posicionamiento**:
   - Busca un elemento con `position: absolute` o `position: relative`
   - Desactiva esta propiedad
   - Observa cómo el elemento vuelve al flujo normal del documento

## Casos de uso comunes

### Depuración de diseños rotos

Si un elemento no se ve como debería, puedes desactivar propiedades sistemáticamente para encontrar la causa del problema:

1. Desactiva propiedades de posicionamiento (`position`, `top`, `left`, etc.)
2. Desactiva propiedades de tamaño (`width`, `height`, `max-width`, etc.)
3. Desactiva propiedades de visualización (`display`, `float`, `flex`, etc.)

### Mejora de rendimiento

Si sospechas que ciertas propiedades CSS están afectando el rendimiento:

1. Selecciona elementos con animaciones o transiciones
2. Desactiva propiedades costosas como `box-shadow`, `filter`, o `transform`
3. Comprueba si el rendimiento mejora

### Exploración de diseño responsivo

Para entender cómo funciona un diseño responsivo:

1. Desactiva media queries específicas
2. Desactiva propiedades como `max-width` o `flex-wrap`
3. Observa cómo afecta a la adaptabilidad del diseño

Recuerda que, al igual que con la edición de HTML, todos los cambios que realices al activar o desactivar propiedades son temporales y desaparecerán cuando refresques la página.
