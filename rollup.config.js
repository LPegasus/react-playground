import cjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import ts from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve';
import replace from 'rollup-plugin-replace';
import { minify } from 'uglify-js-harmony';
import less from 'rollup-plugin-less';
import livereload from 'rollup-plugin-livereload'

const env = process.env.NODE_ENV;

const config = {
  entry: './src/entry/index.tsx',
  format: 'umd',
  dest: 'dist/index.js',
  sourceMap: true,
  plugins: [
    less({
      insert: false,   // insert css to <head/>
      output: './dist/styles.css'
    }),
    cjs(),
    ts({
      include: ["src/**/*.ts+(|x)"]
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    filesize()
  ]
}

const uglifyConfig = [
  {
    indent_level: 2
  }
];

if (env === 'dev') {
  config.plugins.push(serve({
    host: 'localhost',
    port: 8080,
    open: true,
    verbose: true,
    historyApiFallback: true
  }));
  config.plugins.push(livereload({
    watch: './dist',
    verbose: true
  }));
} else {
  config.plugins.push(uglify({}), minify);
}

export default config;
