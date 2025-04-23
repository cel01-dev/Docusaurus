# Cómo editar en tiempo real

Una de las funcionalidades más útiles del panel Elements es la capacidad de editar el HTML de una página web en tiempo real. Esto te permite experimentar con cambios sin modificar el código fuente original.

## Importante: Cambios temporales

Lo primero que debes saber es que **cualquier cambio que hagas en el panel Elements es temporal**. Los cambios:

- Solo afectan a tu vista actual de la página
- Desaparecen cuando refrescas la página
- No modifican el código fuente original del sitio web
- No se guardan automáticamente en ningún lugar

## Formas de editar HTML

### 1. Edición directa de un elemento

1. Haz doble clic en una etiqueta HTML o en su contenido
2. Realiza los cambios que desees
3. Presiona Enter para confirmar o Esc para cancelar

### 2. Edición del HTML como texto

1. Haz clic derecho en un elemento
2. Selecciona "Edit as HTML" (Editar como HTML)
3. Se abrirá un campo de texto donde puedes editar todo el HTML del elemento
4. Haz clic fuera del campo o presiona Ctrl+Enter para confirmar

### 3. Manipulación de elementos

- **Mover elementos**: Haz clic y arrastra un elemento a otra posición en el árbol DOM
- **Eliminar elementos**: Selecciona un elemento y presiona la tecla Delete
- **Copiar elementos**: Haz clic derecho → Copy → Copy element o Copy outerHTML
- **Ocultar elementos**: Haz clic derecho → Hide element (esto añade `display: none`)

### 4. Añadir nuevos elementos

1. Haz clic derecho en el elemento padre donde quieres añadir contenido
2. Selecciona "Add attribute" para añadir un atributo
3. O edita el HTML directamente para añadir elementos hijos

## Ejercicios prácticos

1. **Cambia un título**: Encuentra un encabezado `<h1>` o `<h2>` en cualquier página web y edita su texto
2. **Añade un atributo**: Selecciona una imagen y añádele un atributo como `class="destacada"`
3. **Elimina un elemento**: Encuentra un anuncio o un elemento que no te interese y elimínalo
4. **Mueve un elemento**: Toma un párrafo y muévelo a otra sección de la página

## Casos de uso comunes

- **Prototipar cambios**: Prueba cómo se vería un nuevo texto o estructura antes de implementarlo
- **Eliminar distracciones**: Oculta elementos molestos para leer mejor un artículo
- **Aprender de otros sitios**: Examina cómo están estructurados los sitios web que admiras
- **Solucionar problemas**: Identifica elementos problemáticos modificándolos o eliminándolos temporalmente

## Consejos profesionales

- Utiliza Ctrl+Z (Cmd+Z en Mac) para deshacer cambios en el panel Elements
- Toma capturas de pantalla de tus cambios si quieres guardarlos como referencia
- Experimenta sin miedo, puedes refrescar la página en cualquier momento para volvera la versión original

Recuerda que editar HTML en DevTools es una excelente manera de aprender y experimentar sin consecuencias permanentes.
