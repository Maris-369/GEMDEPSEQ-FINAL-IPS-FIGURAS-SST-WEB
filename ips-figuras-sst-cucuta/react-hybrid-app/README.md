# React Hybrid App

Este proyecto es una aplicación híbrida construida con React, CSS y HTML. A continuación se presentan las instrucciones para instalar, ejecutar y desplegar la aplicación.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu máquina:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

## Instalación

1. Clona el repositorio en tu máquina local:

   ```
   git clone https://github.com/tu-usuario/react-hybrid-app.git
   ```

2. Navega al directorio del proyecto:

   ```
   cd react-hybrid-app
   ```

3. Instala las dependencias:

   ```
   npm install
   ```

## Ejecución

Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```
npm start
```

Esto abrirá la aplicación en tu navegador en `http://localhost:3000`.

## Construcción

Para crear una versión optimizada de la aplicación para producción, ejecuta:

```
npm run build
```

Esto generará una carpeta `build` con los archivos listos para ser desplegados.

## Despliegue en Netlify

1. Crea una cuenta en [Netlify](https://www.netlify.com/) si no tienes una.
2. Conecta tu repositorio de GitHub a Netlify.
3. Configura el comando de construcción como `npm run build` y la carpeta de publicación como `build`.
4. Despliega tu aplicación.

## Estructura del Proyecto

- `public/index.html`: Plantilla HTML principal.
- `src/App.jsx`: Componente principal de la aplicación.
- `src/index.jsx`: Punto de entrada de la aplicación.
- `src/components/ExampleComponent.jsx`: Componente de ejemplo.
- `src/styles/main.css`: Estilos CSS globales.
- `src/types/index.d.ts`: Definiciones de tipos TypeScript.
- `.gitignore`: Archivos y directorios ignorados por Git.
- `netlify.toml`: Configuración para desplegar en Netlify.
- `package.json`: Configuración de npm.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.