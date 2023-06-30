import {resolve} from 'path';
import {defineConfig} from 'vite';
// import handlebars from './vite-plugin-handlebars=precompile';
import handlebarsPrecompile from './src/utils/vite-plugin-handlebars-precompile';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        target: 'es2017',
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: true,
    },
    plugins: [handlebarsPrecompile()],
});
