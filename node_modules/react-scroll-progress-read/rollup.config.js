import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import {terser} from 'rollup-plugin-terser';

// delete old typings to avoid issues
require('fs').unlink('dist/index.d.ts', err => {});

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'es',
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    terser(),
  ],
};
