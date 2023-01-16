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
                                 @import "./src/affino-cc/abstracts"; 
                                  @import "./src/affino-cc/components/_buttons.scss"; 
                                  @import "./src/affino-cc/layout";
                                 `,
            },
        },
    },
})
