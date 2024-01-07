import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_X_API_KEY': JSON.stringify(
        env.REACT_APP_X_API_KEY
      ),
      'process.env.REACT_APP_API_BASE_URL': JSON.stringify(
        env.REACT_APP_API_BASE_URL
      ),
      'process.env.REACT_APP_API_GET_BREEDS_ENDPOINT': JSON.stringify(
        env.REACT_APP_API_GET_BREEDS_ENDPOINT
      ),
    },
    build: {
      outDir: 'build',
      assetsDir: 'static',
      minify: 'esbuild',
    },
    plugins: [react()],
  };
});
