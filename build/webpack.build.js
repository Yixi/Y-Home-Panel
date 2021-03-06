const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: "[name]-[hash:7].js",
    chunkFilename: "[chunkhash].js",
    path: path.join(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'global',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
              importLoaders: 2,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ogg|mp3)$/,
        use: ['url-loader'],
      },
      {
        test: /\.(svg?)(\?[a-z0-9]+)?$/,
        use: ['url-loader'],
      },
    ]
  },
  optimization: {
    splitChunks: {
      maxSize: 300000
    }
  },
  stats: {
    cached: true,
    chunks: false,
    chunkModules: false,
    colors: true,
    modules: false,
  },
  resolve: {
    alias: {
      '@root': path.resolve(__dirname, '../src'),
    },
    fallback: {
      'buffer': require.resolve('buffer/'),
      'stream': require.resolve('stream-browserify'),
      'crypto': require.resolve('crypto-browserify')
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:7].css",
      chunkFilename: "[id].[hash:7].css"
    }),
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      favicon: './src/assets/favicon.jpeg'
    })
  ]
}
