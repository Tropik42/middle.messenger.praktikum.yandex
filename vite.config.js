import {resolve} from 'path';
import {defineConfig} from 'vite';
import handlebars from './vite-plugin-handlebars=precompile';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        rollupOptions: {
            input: {
                register: resolve(
                    __dirname,
                    'src/pages/register/register.html'
                ),
                login: resolve(__dirname, 'src/pages/login/login.html'),
            },
        },
        outDir: resolve(__dirname, 'dist'),
    },
    plugins: [handlebars()],
});
