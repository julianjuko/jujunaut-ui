import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import copy from 'rollup-plugin-copy'

const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  external: [/@babel\/runtime/],
  plugins: [
    peerDepsExternal(),
    postcss({
      extract: true,
      minimize: true,
      modules: true,
      use: ['sass'],
      extensions: ['.scss', '.css']
    }),
    copy({
      targets: [{ src: ['./src/static'], dest: 'build' }],
    }),
    resolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ['**/__tests__', '**/*.test.ts']
      }
    }),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      exclude: '**/node_modules/**'
    })
  ]
}
