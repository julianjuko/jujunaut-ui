import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'

const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    postcss({
      extract: true,
      minimize: true,
      modules: true,
      use: ['sass'],
      extensions: ['.scss', '.css']
    }),
    resolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ['**/__tests__', '**/*.test.ts'],
      },
    }),
    commonjs()
  ],
}
