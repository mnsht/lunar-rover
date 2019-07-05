import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';

import pkg from './package.json';

const sharedOutput = {
  name: 'lunar-rover',
  exports: 'named',
  sourcemap: true
};

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      ...sharedOutput
    },
    {
      file: pkg.main,
      format: 'cjs',
      ...sharedOutput
    },
    {
      file: pkg.module,
      format: 'es',
      ...sharedOutput
    }
  ],
  plugins: [
    peerDepsExternal(),
    babel({ exclude: 'node_modules/**' }),
    resolve(),
    commonjs(),
    filesize()
  ]
};
