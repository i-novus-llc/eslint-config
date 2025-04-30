import { defineConfig } from 'tsup'

export default defineConfig({
    entry: {
        'index': 'src/index.ts',
        'styles': 'src/styles.ts',
    },
    outDir: 'dist',
    tsconfig: 'tsconfig.json',
    format: 'esm',
})
