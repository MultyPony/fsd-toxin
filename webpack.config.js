const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
              pretty: true
            }
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          },
          {
            test: /\.(svg|png|jpg)$/i,
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'images',
              esModule: false,
            },
          }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(
          {
            filename: 'index.html',
            template: 'src/index.pug',
            inject: true,
            minify: false
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'hotels.html',
        //     template: 'src/hotels.pug',
        //     inject: true,
        //     minify: false
        // }),
        new MiniCssExtractPlugin({
          filename: 'main.css'
        })
    ]
  };