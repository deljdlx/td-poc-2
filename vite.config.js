import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    host: true, // expose to host network (needed for WSL/remote environments)
    port: 5173,
    open: '/',
  },
});
