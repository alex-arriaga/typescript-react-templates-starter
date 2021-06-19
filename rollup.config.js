import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
// import nodePolyfills from 'rollup-plugin-node-polyfills'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'

const isProd = process.env.NODE_ENV === 'production'
const outputDir = 'bundle'
const outputFileName = 'b'
const outputFileESM = isProd ? `${outputDir}/${outputFileName}.esm.min.js` : `${outputDir}/${outputFileName}.esm.js`
const outputFileIIFE = isProd ? `${outputDir}/${outputFileName}.iife.min.js` : `${outputDir}/${outputFileName}.iife.js`

const plugins = [
  replace({
    preventAssignment: true,
    'process.env.NODE_ENV': JSON.stringify('production'), // JSON.stringify('development'),
  }),
  nodeResolve(),
  commonjs(),
]

if (isProd) {
  plugins.push(terser())
}

export default {
  input: 'dist/esm/lib/index.js',
  output: [
    // {
    //   file: `${outputDir}/b.cjs.js`,
    //   format: 'cjs',
    // },
    {
      file: outputFileESM,
      format: 'esm',
      sourcemap: true,
    },
    {
      file: outputFileIIFE,
      format: 'iife',
      sourcemap: true
    },
    // {
    //   name: 'ReactTemplates',
    //   file: `${outputDir}/b.umd.js`,
    //   format: 'umd',
    // },
  ],
  plugins,
}
