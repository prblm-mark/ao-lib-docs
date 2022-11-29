import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/affino-cc/index.scss"; 
                                  @import "./src/affino-cc/components/_buttons.scss"; 
                                  @import "./src/affino-cc/abstracts/_colors.scss";
                                  @import "./src/affino-cc/abstracts/_spacing.scss";
                                  @import "./src/affino-cc/abstracts/_display.scss";
                                  @import "./src/affino-cc/abstracts/_type.scss";
                                  @import "./src/affino-cc/abstracts/_breakpoints.scss";
                                  
                                 `,
            },
        },
    },
})
