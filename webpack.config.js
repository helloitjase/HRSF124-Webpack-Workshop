const path = require('path');

module.exports= {
  entry: './client/index.jsx',
  output: {
    filename: 'hrsf124.js',
    path: path.resolve(__dirname, 'public'),
  },
  module : {
    rules: [
      {
        test: /\.m?js$|\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  }
}