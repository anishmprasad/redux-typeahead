var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: __dirname + '/index.js',
  target: 'web',
  output: {
    path: __dirname,
    filename: 'index.js',
    library: 'Reduxtypeahead',
    libraryTarget: 'umd'
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      'node_modules'
    ]
  },
    module: {
      rules: [
        {
          include: [
            path.resolve(__dirname, './index.js'),
            path.resolve(__dirname, './node_modules/redux-typeahead'),
          ],
          test: /\.(js|jsx)$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        }
        ]},
  plugins: [
    new ExtractTextPlugin("style.css")
  ],
  externals: {
    'react': {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    }
  }
}