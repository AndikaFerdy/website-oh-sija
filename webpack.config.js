const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './lib/ts/index.ts',
    download: './lib/ts/download.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset.env'] },
        },
      },
      {
        test: /((.scss)|(.sass)|(.css))$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },

      {
        test: /.ts$/,
        use: 'ts-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js', '.jsx'],
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!manifest.json',
        '!service-worker.js',
        '!res/**',
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './lib/html/index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'download.html',
      template: './lib/html/download.html',
      chunks: ['download'],
    }),
  ],
};
