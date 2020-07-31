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
            exclude: path.resolve(__dirname, './src/fonts'),
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'images',
              esModule: false,
            },
          },
          {
            test: /\.(ttf|eot|woff|woff2|svg|otf)$/,
            include: path.resolve(__dirname, './src/fonts'),
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts',
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