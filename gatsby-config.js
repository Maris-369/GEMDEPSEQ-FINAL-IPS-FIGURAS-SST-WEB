// /workspaces/ips_fig-cucuta/gatsby-config.js

module.exports = {
  siteMetadata: {
    title: `IPS Figuras SST Cúcuta SAS`,
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
    
    // Source Filesystem - Imágenes
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
    // Source Filesystem - Documentos
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documents`,
        path: `${__dirname}/src/assets/documents/`,
      },
    },
    
    // Source Filesystem - Estados Financieros
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `financial-reports`,
        path: `${__dirname}/src/assets/financial-reports/`,
      },
    },
    
    // Source Filesystem - Modelos 3D
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `models3d`,
        path: `${__dirname}/src/assets/models3d/`,
      },
    },
    
    // Plugin de Netlify
    `gatsby-plugin-netlify`,
    
    // Configuración PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IPS Figuras SST Cúcuta SAS`,
        short_name: `IPS Figuras`,
        start_url: `/`,
        background_color: `#003366`,
        theme_color: `#0056b3`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `src/images/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`, // Después de gatsby-plugin-manifest
    
    // SEO y metadatos
    `gatsby-plugin-react-helmet`,
    
    // Google Analytics
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["TU_GOOGLE_ANALYTICS_ID"], // Reemplaza con tu ID real
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    
    // SEO - Sitemap
    `gatsby-plugin-sitemap`,
    
    // Styled Components (para mejor CSS-in-JS)
    `gatsby-plugin-styled-components`,
    
    // PostCSS para procesamiento CSS avanzado
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("autoprefixer"),
        ],
      },
    },
    
    // Plugin para manejar archivos CSV/Excel (Estados Financieros)
    `gatsby-transformer-csv`,
    `gatsby-transformer-excel`,
    
    // Plugin para archivos JSON (configuraciones del chat AI)
    `gatsby-transformer-json`,
    
    // Plugin para optimización de fuentes
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `inter:300,400,500,600,700`,
          `roboto:300,400,500,700`,
        ],
        display: 'swap'
      },
    },
    
    // Plugin para variables de entorno
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["CLAUDE_API_KEY", "CLAUDE_API_URL", "FINANCIAL_API_KEY"]
      },
    },
    
    // Plugin para manejo de CORS y proxies (para API calls)
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`, `/dashboard/*`, `/chat/*`] },
    },
    
    // Plugin para optimización de bundle
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        devMode: false,
      },
    },
    
    // Plugin para cache mejorado
    `gatsby-plugin-advanced-cache`,
    
    // Plugin para lazy loading mejorado
    `gatsby-plugin-lazy-images`,
    
    // Plugin para compresión
    `gatsby-plugin-brotli`,
    
    // Plugin para robots.txt
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.trabajosenalturascucuta.com',
        sitemap: 'https://www.trabajosenalturascucuta.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    
    // Plugin para Schema.org (SEO estructurado)
    `gatsby-plugin-schema-snapshot`,
    
    // Plugin para AMP (páginas móviles aceleradas) - opcional
    // `gatsby-plugin-amp`,
    
    // Plugin para análisis de rendimiento - solo en desarrollo
    process.env.NODE_ENV === 'development' && {
      resolve: `gatsby-plugin-perf-budgets`,
      options: {
        budgets: [
          {
            resourceType: 'script',
            budget: 300000 // 300kb
          },
          {
            resourceType: 'total',
            budget: 500000 // 500kb
          }
        ]
      }
    },
  ].filter(Boolean), // Filtra plugins condicionales
  
  flags: {
    DEV_SSR: false, // Disable server-side rendering in development
    FAST_DEV: true, // Enable fast development builds
    PRESERVE_WEBPACK_CACHE: true, // Preserve webpack cache between builds
    PARALLEL_SOURCING: true, // Enable parallel data sourcing
  },
  
  // Configuración de desarrollo
  developMiddleware: app => {
    // Middleware personalizado para desarrollo
    app.use('/api/claude', (req, res, next) => {
      // Proxy para llamadas a Claude API en desarrollo
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      next();
    });
  },
  
  // Configuración de GraphQL
  graphqlTypegen: {
    typesOutputPath: `src/gatsby-types.d.ts`,
    generateOnBuild: true,
  },
  
  // Configuración experimental
  experimental: {
    PARTIAL_HYDRATION: true,
  },
};    siteUrl: `https://www.trabajosenalturascucuta.com`,
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
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documents`,
        path: `${__dirname}/src/assets/documents/`,
      },
    },
    // Opcional: Para contenido Markdown
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `content`,
    //     path: `${__dirname}/src/content`,
    //   },
    // },
    // `gatsby-transformer-remark`,

    // Plugin de Netlify
    `gatsby-plugin-netlify`,

    // Configuración PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IPS Figuras SST Cúcuta SAS`,
        short_name: `IPS Figuras`,
        start_url: `/`,
        background_color: `#003366`, // Azul oscuro
        theme_color: `#0056b3`,      // Azul primario
        display: `standalone`,
        icon: `src/images/icon.png`, // Asegúrate de que este archivo exista
      },
    },
    `gatsby-plugin-offline`, // Después de gatsby-plugin-manifest

    // Plugins adicionales recomendados
    // `gatsby-plugin-react-helmet`, // Para SEO y metadatos en el <head>
    
    // Aquí puedes agregar plugins personalizados
    // require.resolve(`./plugins/gatsby-plugin-chat-ai-claude`),
    // require.resolve(`./plugins/gatsby-plugin-logo-3d`),
  ],
  flags: {
    DEV_SSR: false // Disable server-side rendering in development
  }
}