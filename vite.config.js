import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config as dotEnvConfig } from 'dotenv';

dotEnvConfig();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
});
