const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PORT = 1234
const _HOST = '0.0.0.0'
const HOST = `http://${_HOST}`
const URL = `${HOST}:${PORT}`

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'app.js',
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
          'style-loader',
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
          'postcss-loader',
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
  devServer: {
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    },
    hot: true,
    // enable HMR on the server
    compress: true,
    contentBase: path.resolve(__dirname, '../src'),
    // match the output path
    port: PORT,
    host: _HOST,
    publicPath: URL,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      favicon: './src/assets/favicon.jpeg'
    })
  ]
}
