const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        // main: './src/index.js',
        uiKit: './src/ui-kit.js'
    },
    output: {
    //   filename: 'main.js',
      filename: '[name].[contentHash].bundle.js',
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
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
          },
          // {
          //   test: /\.css$/,
          //   use: [MiniCssExtractPlugin.loader, 'css-loader']
          // },
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
            chunks: ['main'],
            inject: true,
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'ui-kit.html',
            template: 'src/ui-kit.pug',
            chunks: ['uiKit'],
            inject: true,
            minify: false
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css'
        })
    ]
  };