import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  experimentalCodeSplitting: true,

  experimentalDynamicImport: true,

  input: 'src/main.js',

  output: {
    format: 'es',
    sourcemap: true,
    file: 'public/js/bundle.js',
  },

  plugins: [
    resolve({
      browser: true,
      jsnext: true,
      module: true,
    }),

    commonjs({
      namedExports: {
        'apollo-cache-persist': ['persistCache'],
        'graphql-anywhere/lib/async': ['graphql'],
      },
    }),
  ],
};
