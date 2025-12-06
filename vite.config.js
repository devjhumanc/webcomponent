import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/input-display-component.js',
      name: 'InputDisplayComponent',
      fileName: 'input-display-component',
      formats: ['es']
    },
    rollupOptions: {
      output: {
        // Bundle all dependencies into the output file
        inlineDynamicImports: true,
        // Ensure the output is a single file
        format: 'es'
      }
    },
    // Output to root directory for CDN compatibility
    outDir: '.',
    emptyOutDir: false
  },
  server: {
    port: 3000,
    open: true
  }
});

