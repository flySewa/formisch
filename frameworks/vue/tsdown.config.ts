import { defineConfig } from 'tsdown';
import Vue from 'unplugin-vue/rolldown';

export default defineConfig({
  entry: ['./src/index.ts'],
  outDir: 'dist',
  platform: 'neutral',
  outExtensions: () => ({
    js: '.js',
    dts: '.d.ts',
  }),
  plugins: [Vue({ isProduction: true })],
  dts: {
    vue: true,
    resolve: ['@formisch/core/vue', '@formisch/methods/vue'],
  },
});
