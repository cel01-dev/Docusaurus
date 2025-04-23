# ¿Qué es el panel Styles?

El panel Styles (Estilos) es una poderosa herramienta dentro de DevTools que te permite ver y modificar los estilos CSS que dan formato visual a los elementos HTML de una página web.

## ¿Dónde encontrar el panel Styles?

El panel Styles se encuentra en la parte derecha del panel Elements. Para acceder a él:

1. Abre DevTools
2. Selecciona la pestaña "Elements"
3. Selecciona cualquier elemento HTML en el árbol DOM
4. Busca el panel "Styles" en la sección derecha (generalmente aparece por defecto)
![Panel Style](/img/style.png)

## ¿Qué muestra el panel Styles?

El panel Styles te proporciona una vista completa de los estilos CSS que afectan al elemento seleccionado:

- **Estilos en línea**: Definidos directamente en el atributo `style` del elemento HTML
- **Reglas CSS internas**: Definidas en etiquetas `<style>` dentro del documento
- **Reglas CSS externas**: Provenientes de archivos CSS vinculados
- **Estilos heredados**: Propiedades que el elemento hereda de sus elementos padres
- **Estilos del agente de usuario**: Estilos predeterminados aplicados por el navegador

## Características principales del panel Styles

### 1. Cascada de estilos

Los estilos se muestran en orden de especificidad y prioridad, con los estilos más específicos (que tienen prioridad) en la parte superior.

### 2. Propiedades tachadas

Las propiedades CSS que han sido sobrescritas por otras reglas más específicas aparecen tachadas, lo que te ayuda a entender por qué ciertos estilos no se aplican.

### 3. Información de archivos

Cada regla CSS muestra la fuente de donde proviene, como el nombre del archivo CSS y el número de línea. Puedes hacer clic en esta información para ir directamente al código fuente.

### 4. Filtros y búsqueda

Puedes filtrar propiedades escribiendo en el campo de filtro que aparece en la parte superior del panel Styles.

### 5. Modelo de caja (Box Model)

En la parte inferior del panel encontrarás una representación visual del modelo de caja del elemento seleccionado, que muestra el contenido, padding, bordes y márgenes.
![Panel Style](/img/style1.png)

## ¿Por qué es útil el panel Styles?

- **Depuración**: Identifica por qué un elemento no se ve como esperabas
- **Experimentación**: Prueba cambios de diseño en tiempo real sin modificar el código
- **Aprendizaje**: Estudia cómo otros sitios web implementan ciertos efectos visuales
- **Prototipado**: Crea maquetas rápidas de diseño antes de implementarlas en código

## Diferencia entre Styles y Computed

Junto al panel Styles, encontrarás el panel "Computed" (Calculado):

- **Styles**: Muestra todas las reglas CSS que afectan al elemento, incluyendo las sobrescritas
- **Computed**: Muestra solo los estilos finales aplicados después de resolver la cascada y herencia

En las siguientes secciones, aprenderás a utilizar el panel Styles para activar/desactivar propiedades, agregar nuevas reglas y realizar otras tareas útiles.
