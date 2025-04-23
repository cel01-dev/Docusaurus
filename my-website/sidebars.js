// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Guía DevTools',
      collapsed: false,
      items: [
        'intro',
        {
          type: 'category',
          label: 'Abrir DevTools',
          items: ['devtools/abrir/como-abrir'],
        },
        {
          type: 'category',
          label: 'Panel Elements',
          items: [
            'devtools/elements/que-es-elements',
            'devtools/elements/editar-html',
            'devtools/elements/resaltar-elementos',
          ],
        },
        {
          type: 'category',
          label: 'Panel Styles',
          items: [
            'devtools/styles/que-es-styles',
            'devtools/styles/activar-desactivar',
            'devtools/styles/agregar-propiedades',
            'devtools/styles/inspeccionar-colores',
          ],
        },
        {
          type: 'category',
          label: 'Panel Console',
          items: [
            'devtools/console/que-es-console',
            'devtools/console/errores-logs',
            'devtools/console/ejecutar-js',
            'devtools/console/consejos',
          ],
        },
        {
          type: 'category',
          label: 'Panel Network',
          items: [
            'devtools/network/que-es-network',
            'devtools/network/ver-archivos',
            'devtools/network/analizar-respuestas',
            'devtools/network/diagnostico',
          ],
        },
        'devtools/otros-paneles',
        'devtools/practico',
      ],
    },
  ],
};

export default sidebars;
