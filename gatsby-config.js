// /workspaces/ips_fig-cucuta/gatsby-config.js

module.exports = {
  siteMetadata: {
    title: `IPS Figuras SST Cúcuta SAS`,
    siteUrl: `https://www.trabajosenalturascucuta.com`,
    description: `Expertos en salud ocupacional, medicina laboral y especialidades médicas en Cúcuta. Exámenes médicos, cursos y atención de calidad con un enfoque humano.`,
    author: `IPS FIGURAS SST CÚCUTA SAS`,
  },
  plugins: [
    // Plugins Esenciales
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        // Esta ruta es para imágenes que quieras procesar con GraphQL y gatsby-plugin-image
        // Si todas tus imágenes van a estar en 'static/images' y las llamas directamente,
        // esta fuente específica para 'src/images' podría no ser tan crítica,
        // excepto para el 'icon.png' del manifest.
        path: `${__dirname}/src/images`,
      },
    },
    // (Opcional) Si tienes contenido Markdown en otra carpeta (ej: src/content)
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `content`,
    //     path: `${__dirname}/src/content`,
    //   },
    // },
    // `gatsby-transformer-remark`,

    // Plugin de Netlify
    // Revisa los logs de Netlify. Si dice que usa el 'adapter', puedes quitar este.
    // Si no, déjalo, o considera usar gatsby-adapter-netlify.
    `gatsby-plugin-netlify`,

    // Configuración PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IPS Figuras SST Cúcuta SAS`,
        short_name: `IPS Figuras`,
        start_url: `/`,
        background_color: `#003366`, // Azul oscuro
        theme_color: `#0056b3`,    // Azul primario
        display: `standalone`,
        icon: `src/images/icon.png`, // Ruta al icono DENTRO de la carpeta src
      },
    },
    `gatsby-plugin-offline`, // Generalmente DESPUÉS de gatsby-plugin-manifest

    // (Opcional) Para SEO y metadatos en el <head>
    // `gatsby-plugin-react-helmet`,
  ],
}

