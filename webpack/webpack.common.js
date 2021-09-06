const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.join(__dirname, '../src/index'),
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    alias: {
      '@Components': path.resolve('src/components/'),
      '@Containers': path.resolve('src/containers/'),
      '@Utilities': path.resolve('src/utils/'),
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(mp4|svg|png|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
};

module.exports = config;
