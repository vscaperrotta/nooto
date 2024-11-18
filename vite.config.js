import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import paths from './config/paths';

const APP_DIR = paths.appSrc;

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      Api: `${APP_DIR}/api`,
      Assets: `${APP_DIR}/assets`,
      Components: `${APP_DIR}/components`,
      Containers: `${APP_DIR}/containers`,
      Database: `${APP_DIR}/database`,
      Routes: `${APP_DIR}/routes`,
      Store: `${APP_DIR}/store`,
      Style: `${APP_DIR}/styles`,
      Utils: `${APP_DIR}/utils`,
    },
  },
  optimizeDeps: {
    include: ['**/*.scss'], // Include all .scss files
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]__[hash:base64:5]',
      auto: (resourcePath) => resourcePath.endsWith('.scss'),
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/variables.scss";
          @import "./src/styles/mixins.scss";
          @import "./src/styles/main.scss";
          @import "./src/styles/typography.scss";
        `,
      },
    },
  },
  lint: {
    enabled: true,
    lintFiles: ['**/*.js', '**/*.jsx'],
  },
  build: {
    minify: "terser",
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'fonts/Ubuntu/[name].[hash][extname]',
      },
    },
  },
});
