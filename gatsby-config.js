const path = require('path');

module.exports = {
  siteMetadata: {
    title: "IPS FIGURAS SST CUCUTA SAS",
    description: "IPS especializada en medicina laboral e integral en Cúcuta. Ofrecemos cardiología, neurología, radiología, psicología, laboratorio clínico, odontología y más.",
    author: "@ipsfiguressst",
    siteUrl: "https://www.trabajosenalturaipsfigurascucuta.com",
    contact: {
      address: "Calle 21A #0B-122, Barrio Blanco Cúcuta, Norte de Santander",
      phone: ["+57 3138914384", "+57 3158525385"],
      email: "admin@trabajosenalturaipsfigurascucuta.com"
    },
    medicalSpecialties: [  // Nuevo: Estructura semántica
      "Cardiología",
      "Neurología",
      "Radiología",
      "Psicología",
      "laboratorio clinico",
      "oftapmologia",
      "optometria",
      "fonoaudiologia",
      "medicina laboral",
      "medicina integral",
      "audiometria",
      "odontologia estetica e integral",
      "cursos manipulacion de alimentos"
    ]
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        cssLoaderOptions: {
          modules: {
            exportLocalsConvention: "camelCaseOnly"
          }
        }
      }
    },
    {
      resolve: "gatsby-plugin-image",
      options: {
        defaults: {
          formats: ["webp"],
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: "transparent",
          quality: 80
        }
      }
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          quality: 90,
          placeholder: "dominantColor"
        }
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "medical-images",
        path: `${__dirname}/src/images/medical`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "IPS FIGURAS SST CUCUTA SAS",
        short_name: "IPS FIGURAS SST",
        start_url: "/?utm_source=pwa",
        background_color: "#ffffff",
        theme_color: "#0056b3",
        display: "standalone",  // Cambiado a standalone para mejor experiencia PWA
        icon: "src/images/logo-icon.png",
        icon_options: {
          purpose: "maskable any"
        }
      }
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          runtimeCaching: [
            {
              urlPattern: /\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff2)/,
              handler: "StaleWhileRevalidate"
            }
          ]
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-XXXXXXXXXX"],  // Reemplazar con tu ID de GTAG
        pluginConfig: {
          head: true,
          respectDNT: true
        }
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/privacidad", "/admin/*"],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.trabajosenalturaipsfigurascucuta.com",
        sitemap: "https://www.trabajosenalturaipsfigurascucuta.com/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/admin", "/privacidad"]
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: 'static',
        openAnalyzer: false,
        defaultSizes: 'gzip'
      }
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://embed.tawk.to/6782005649e2fd8dfe05e884/d4f6d6394e1ae9fc6f9e92ea0cf47b2c7d575c05',
        async: true,
        defer: true,
        crossorigin: 'anonymous',
        onLoad: `window.Tawk_API = window.Tawk_API || {};`
      }
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        generateMatchPathRewrites: true
      }
    },
    // Nuevo plugin para imágenes médicas
    {
      resolve: "gatsby-plugin-image-presets",
      options: {
        defaults: {
          formats: ["webp"],
          quality: 90,
          breakpoints: [600, 1200, 1920],
          backgroundColor: "transparent"
        }
      }
    }
  ],
  onCreateWebpackConfig: ({ actions, stage }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'three-examples': path.resolve(__dirname, 'node_modules/three/examples/jsm'),
          'three$': path.resolve(__dirname, 'node_modules/three/build/three.min.js'),
          '@medical': path.resolve(__dirname, 'src/images/medical')
        },
        fallback: {
          "fs": false,
          "path": false
        }
      },
      module: {
        rules: [
          {
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: ['raw-loader', 'glslify-loader'],
            exclude: /node_modules/
          },
          // Nueva regla para DICOM (si manejan radiología digital)
          {
            test: /\.dcm$/,
            use: ['file-loader']
          }
        ]
      },
      // Optimización para dispositivos médicos
      performance: {
        maxAssetSize: 500000,
        maxEntrypointSize: 500000
      }
    });

    if (stage === 'build-javascript') {
      actions.setWebpackConfig({
        optimization: {
          minimize: true,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              three: {
                test: /[\\/]node_modules[\\/]three[\\/]/,
                name: 'three',
                priority: 30
              },
              medical: {
                test: /[\\/]src[\\/]images[\\/]medical[\\/]/,
                name: 'medical-assets',
                priority: 20
              }
            }
          }
        }
      });
    }
  }
};

// Add the elasticsearch plugin to the plugins array
module.exports.plugins.push({
  resolve: `gatsby-plugin-elasticsearch`,
  options: {
    nodeType: 'FhirPatient',
    connection: {
      host: process.env.ELASTICSEARCH_ENDPOINT,
      auth: {
        username: process.env.ELASTICSEARCH_USER,
        password: process.env.ELASTICSEARCH_PASS
      }
    }
  }
});
// En tu gatsby-config.js existente
plugins: [
  // ... tus plugins existentes
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
]