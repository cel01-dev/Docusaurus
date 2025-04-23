import React, { useEffect } from 'react';
import DocSidebar from '@theme-original/DocSidebar';

import {
  BookOpenText,
  Code,
  PanelLeftOpen,
  FilePenLine,
  SquareDashedMousePointer,
  Star,
  Palette,
  Folder,
  MonitorX,
  Settings,
  Terminal,
  FolderCode,
  ServerCog,
  Network,
  Boxes
} from 'lucide-react';

function getIconForItem(item) {
  if (item.label && typeof item.label === 'string') {
    if (item.label.includes('Intro')) return <BookOpenText size={18} />;
    if (item.label.includes('Cómo abrir')) return <Code size={18} />;
    if (item.label.includes('Qué es el panel')) return <PanelLeftOpen size={18} />;
    if (item.label.includes('Cómo editar')) return <FilePenLine size={18} />;
    if (item.label.includes('Cómo resaltar')) return <SquareDashedMousePointer size={18} />;
    if (item.label.includes('Cómo activar')) return <Code size={18} />;
    if (item.label.includes('Cómo agregar')) return <Star size={18} />;
    if (item.label.includes('Cómo inspeccionar')) return <Palette size={18} />;
    if (item.label.includes('Qué es la consola')) return <Folder size={18} />;
    if (item.label.includes('Cómo interpretar')) return <MonitorX size={18} />;
    if (item.label.includes('Cómo ejecutar')) return <Settings size={18} />;
    if (item.label.includes('Consejos')) return <Terminal size={18} />;
    if (item.label.includes('Cómo ver')) return <FolderCode size={18} />;
    if (item.label.includes('Cómo analizar')) return <ServerCog size={18} />;
    if (item.label.includes('Diagnóstico')) return <Network size={18} />;
    if (item.label.includes('Otros Paneles')) return <PanelLeftOpen size={18} />;
    if (item.label.includes('Ejercicios')) return <Boxes size={18} />;
  }
  return null;
}

function modifyItems(items) {
  if (!items) return items;

  return items.map(item => {
    const newItem = { ...item };

    if (newItem.items) {
      newItem.items = modifyItems(newItem.items);
    }

    if (newItem.label && typeof newItem.label === 'string') {
      const icon = getIconForItem(newItem);
      if (icon) {
        newItem.label = (
          <div className="sidebar-item-with-icon">
            <span className="sidebar-icon">{icon}</span>
            <span>{newItem.label}</span>
          </div>
        );
      }
    }

    return newItem;
  });
}

function DocSidebarWrapper(props) {
  const newProps = { ...props };
  if (newProps.sidebar) {
    newProps.sidebar = modifyItems(newProps.sidebar);
  }

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .sidebar-item-with-icon {
        display: flex !important;
        align-items: center;
        gap: 10px;
      }
      .sidebar-icon {
        color: var(--ifm-color-primary);
        min-width: 20px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <DocSidebar {...newProps} />;
}

export default DocSidebarWrapper;
