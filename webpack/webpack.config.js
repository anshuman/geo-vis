const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (options) => ({
  mode: options.mode,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  plugins: options.plugins.concat([
    new CopyPlugin({
      patterns: [
        { from: 'public/index.css', to: 'index.css' },
        { from: 'assets', to: 'assets' },
      ],
    }),
  ]),
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.ts(x)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
})
