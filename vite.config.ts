
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    open: true, // Automatically open the app in the browser
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger({
      // Enable latest Lovable features
      enableSelectionAPI: true,
      enableContextMenuAPI: true,
      // Optional: Add performance monitoring
      performanceMonitoring: true,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add build optimizations
  build: {
    sourcemap: mode === 'development', // Generate sourcemaps only in dev
    minify: 'terser', // Use terser for more efficient minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
      },
    },
  },
}));
