import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'

export default defineConfig({
	plugins: [react(), dts({ outDir: 'dist/types' })],

	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.tsx'),
			name: 'LocalComponents',
			formats: ['es'],
			fileName: 'local-components',
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
				},
			},
		},
	},
})
