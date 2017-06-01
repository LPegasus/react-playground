const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production';
const commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  filename: 'common.js',
  name: 'common'
});

// const uglifyJSPlugin = new webpack.optimize.UglifyJsPlugin({
//   compress: {
//     warnings: false,
//     drop_console: false,
//   }
// });

module.exports = {
  entry: {
    index: './src/entry/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist_w'),
    filename: 'index.js',
    crossOriginLoading: 'anonymous',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              transpileOnly: true,
              useBabel: true,
              useCache: true
            }
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-0'],
              plugins: [
                'add-module-exports',
                [
                  'transform-runtime', {
                    "helpers": true,
                    "polyfill": true,
                    "regenerator": true,
                    "moduleName": "babel-runtime"
                  }], [
                  'babel-plugin-import', {
                    "libraryName": "antd",
                    "style": true
                  }
                ]]
            }
          }
        ],
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },
  target: 'web',
  performance: {
    hints: 'warning'
  },
  devtool: "source-map",
  devServer: {
    compress: true, // enable gzip compression
    historyApiFallback: false, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000
    },
    port: 8080
  },

  watch: true,

  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    commonsChunkPlugin,
    new webpack.HotModuleReplacementPlugin()
    // uglifyJSPlugin
  ]
};
