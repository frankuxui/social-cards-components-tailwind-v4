# Widgets y Componentes UI con Tailwind CSS 4

![Widgets y Componentes UI con Tailwind CSS 4](https://widgets-components-tailwind-v4.vercel.app/og.jpg)

En muchas ocasiones queremos implementar widgets, tarjetas o componentes, pero nos falta la inspiración o simplemente ese día la creatividad no está en su mejor momento. Con estos widgets puedes encontrar ideas, referencias y soluciones de diseño minimalista que te ayuden a crear interfaces modernas, accesibles y visualmente atractivas. La idea es inspirar y fomentar la creatividad en el diseño de widgets, tarjetas y componentes reutilizables.

Explora una colección de widgets, componentes y diseños minimalistas creados con Tailwind CSS 4 y Astro. Recursos modernos y personalizables para proyectos de finanzas, redes sociales, deportes, viajes y más.

## Características

- Widgets reutilizables
- Diseño minimalista
- Soporte para modo claro y oscuro
- Responsive design
- Ideal para desarrollo frontend moderno

## Tecnologías utilizadas

- Astro
- Tailwind CSS 4
- HTML
- CSS
- JavaScript

### Requisitos previos

- Tener instalado [Node.js](https://nodejs.org/) (recomendado versión 18 o superior)
- Tener instalado [npm](https://www.npmjs.com/)

### Instalación y ejecución

1. Clona el repositorio:

```bash
git https://github.com/frankuxui/widgets-components-tailwind-v4.git
```

2. Navega al directorio del proyecto:

```bash
cd widgets-components-tailwind-v4
```

3. Instala las dependencias:

```bash
npm install
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

## Configuración de Tailwind CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");
@import "tailwindcss";

@theme {
  --color-background: var(--color-white);
  --color-foreground: var(--color-gray-950);
  --color-border: var(--color-gray-200);

  --breakpoint-*: initial;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
  --breakpoint-3xl: 1920px;
  --breakpoint-4xl: 2560px;

  --family-roboto: "Roboto", sans-serif;

  --animate-rotate-infinite: rotate-infinite 15s linear infinite;

  @keyframes rotate-infinite {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

/* Tema dark */

.dark {
  --color-background: hsl(230 9.41% 6.14%);
  --color-foreground: var(--color-white);
  --color-border: var(--color-gray-800);
}

/* Material Symbols Rounded */

.material-symbols-rounded {
  font-family: "Material Symbols Rounded" !important;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  font-variation-settings:
    "FILL" 0,
    "wght" 400,
    "GRAD" 0,
    "opsz" 24;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
}

/* Relleno */

.material-symbols-fill {
  font-family: "Material Symbols Rounded" !important;
  font-variation-settings:
    "FILL" 1,
    "wght" 400,
    "GRAD" 0,
    "opsz" 24 !important;
}

/* Variaciones de peso */

.material-symbols-weight-100 {
  font-variation-settings: "wght" 100;
}
.material-symbols-weight-200 {
  font-variation-settings: "wght" 200;
}
.material-symbols-weight-300 {
  font-variation-settings: "wght" 300;
}
.material-symbols-weight-400 {
  font-variation-settings: "wght" 400;
}
.material-symbols-weight-500 {
  font-variation-settings: "wght" 500;
}

/* Tamaños */
.material-symbols-xs {
  font-size: 0.75rem;
}
.material-symbols-sm {
  font-size: 1rem;
}
.material-symbols-md {
  font-size: 1.25rem;
}
.material-symbols-lg {
  font-size: 1.5rem;
}
.material-symbols-xl {
  font-size: 2rem;
}
.material-symbols-2xl {
  font-size: 2.5rem;
}
```

## Palabras clave

- componentes
- astro
- tailwind
- galería de widgets
- ui
- widgets para dashboards
- plantillas tailwind css
- widgets adaptativos
- componentes para desarrolladores
- interfaz limpia
- widgets para aplicaciones web
- recursos tailwind css 4
- javascript
- css
- html
- ux
- ui

## Licencia

Este proyecto es de uso completamente gratuito para cualquier propósito, personal o comercial. Se agradece el crédito pero no es obligatorio.

## Autor

[**Frank Esteban (FrankUXUI)**](https://frankuxui.dev/)
