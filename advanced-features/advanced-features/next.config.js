/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para integración híbrida con Gatsby
  async rewrites() {
    return [
      // Redirige rutas específicas al sistema Next.js
      {
        source: '/app/:path*',
        destination: '/:path*',
      },
      // Proxy para Gatsby (cuando esté corriendo en desarrollo)
      {
        source: '/((?!api|_next|favicon.ico).*)',
        destination: 'http://localhost:8000/$1',
        has: [
          {
            type: 'header',
            key: 'x-gatsby-route',
            value: 'true',
          },
        ],
      },
    ];
  },

  // Headers CORS para desarrollo
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NODE_ENV === 'development' 
              ? '*' 
              : 'https://www.trabajosenalturaipsfigurascucuta.com',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization, X-Requested-With',
          },
          {
            key: 'Access-Control-Max-Age',
            value: '86400',
          },
        ],
      },
    ];
  },

  // Configuración de Webpack (SOLO SI NO USAS TURBOPACK)
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Configuración para shaders GLSL (Logo 3D)
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: [
        'raw-loader',
        {
          loader: 'glslify-loader',
          options: {
            transform: [
              ['glslify-hex', { 'option-1': true, 'option-2': 42 }]
            ]
          }
        }
      ],
    });

    // Configuración para archivos 3D (modelos, texturas)
    config.module.rules.push({
      test: /\.(gltf|glb|fbx|obj|mtl)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/3d/',
          outputPath: 'static/3d/',
        },
      },
    });

    // Configuración para archivos de audio/video
    config.module.rules.push({
      test: /\.(mp3|wav|ogg|mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/media/',
          outputPath: 'static/media/',
        },
      },
    });

    // Configuración para archivos de datos financieros
    config.module.rules.push({
      test: /\.(csv|json|xlsx)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/data/',
          outputPath: 'static/data/',
        },
      },
    });

    // Fallbacks para el cliente
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        url: require.resolve('url'),
        zlib: require.resolve('browserify-zlib'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        assert: require.resolve('assert'),
        os: require.resolve('os-browserify/browser'),
        path: require.resolve('path-browserify'),
        buffer: require.resolve('buffer'),
      };

      // Plugins adicionales para polyfills
      config.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser',
        })
      );
    }

    // Optimización para componentes específicos del proyecto
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            // Chunk para Three.js (Logo 3D)
            three: {
              test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
              name: 'three',
              chunks: 'all',
              priority: 20,
            },
            // Chunk para librerías de charts (Estados Financieros)
            charts: {
              test: /[\\/]node_modules[\\/](recharts|d3|plotly\.js|chart\.js)[\\/]/,
              name: 'charts',
              chunks: 'all',
              priority: 15,
            },
            // Chunk para AI/Chat
            ai: {
              test: /[\\/]node_modules[\\/](@anthropic-ai|openai|markdown-it|react-markdown)[\\/]/,
              name: 'ai-chat',
              chunks: 'all',
              priority: 10,
            },
          },
        },
      };
    }

    return config;
  },

  // Configuración de imágenes (UNIFICADA)
  images: {
    domains: [
      'localhost',
      'www.trabajosenalturaipsfigurascucuta.com',
      'images.unsplash.com',
      'cdn.example.com',
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Para static export descomenta la siguiente línea
    // unoptimized: true,
  },

  // Configuración CORRECTA para Next.js 15
  serverExternalPackages: [
    // 3D y visualización
    'three', 
    '@react-three/fiber',
    '@react-three/drei',
    // AI y procesamiento
    '@anthropic-ai/sdk',
    'openai',
    // Análisis de datos financieros
    'd3',
    'plotly.js'
  ],

  // Configuración para Turbopack (Next.js 15+)
  turbo: {
    rules: {
      // Configurar reglas específicas de Turbopack aquí si las necesitas
      '*.glsl': {
        loaders: ['raw-loader'],
      },
      '*.vs': {
        loaders: ['raw-loader'],
      },
      '*.fs': {
        loaders: ['raw-loader'],
      },
    }
  },

  // Configuraciones esenciales
  reactStrictMode: true,
  swcMinify: true,

  // Características experimentales ACTUALIZADAS
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    // Para mejor rendimiento con componentes pesados
    largePageDataBytes: 128 * 1000, // 128KB
  },

  // Configuración del compilador
  compiler: {
    // Eliminar console.log en producción
    removeConsole: process.env.NODE_ENV === 'production',
    // Eliminar React DevTools en producción
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  // Configuración de transpilación para el proyecto IPS
  transpilePackages: [
    // Three.js para logo 3D
    'three',
    '@react-three/fiber',
    '@react-three/drei',
    '@react-three/postprocessing',
    'leva',
    // Librerías para estados financieros
    'recharts',
    'd3',
    'plotly.js',
    // Librerías para chat AI
    '@anthropic-ai/sdk',
    'openai',
    'markdown-it',
    'react-markdown',
  ],

  // Headers de seguridad
  async generateBuildId() {
    return `ips-figuras-build-${Date.now()}`;
  },

  // Configuración de salida (descomenta para static export)
  // output: 'export',
  // trailingSlash: true,
  // skipTrailingSlashRedirect: true,

  // Configuración de desarrollo
  onDemandEntries: {
    // Período en ms después del cual se descargan las páginas
    maxInactiveAge: 25 * 1000,
    // Número de páginas que deben mantenerse simultáneamente sin descargar
    pagesBufferLength: 2,
  },

  // Configuración de rendimiento
  poweredByHeader: false,
  generateEtags: false,
  compress: true,

  // Variables de entorno para el proyecto IPS
  env: {
    // API Keys (asegúrate de definirlas en .env.local)
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    // URLs base
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3000/api',
    GATSBY_URL: process.env.GATSBY_URL || 'http://localhost:8000',
    // Configuración del chat
    CHAT_MODEL: process.env.CHAT_MODEL || 'claude-sonnet-4-20250514',
    MAX_TOKENS: process.env.MAX_TOKENS || '4000',
    // Configuración 3D
    ENABLE_3D_LOGO: process.env.ENABLE_3D_LOGO || 'true',
    LOGO_ANIMATION_SPEED: process.env.LOGO_ANIMATION_SPEED || '1',
  },

  // Configuración de redirecciones permanentes
  async redirects() {
    return [
      // Ejemplo de redirección
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;