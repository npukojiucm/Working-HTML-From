const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//   entry: './index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: '[name].js',
//   },

//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './index.html',
//     }),
//     new MiniCssExtractPlugin({
//       filename: '[name].css',
//     }),
//   ],

//   module: {
//     rules: [
//       {
//         test: /\.png/,
//         type: 'asset/resource',
//       },
//       {
//         test: /\.css$/i,
//         use: [MiniCssExtractPlugin.loader, 'css-loader'],
//       },
//     ],
//   },
// };

const index = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.png/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};

const task1 = {
  entry: './src/task1/task1.js',
  output: {
    path: path.resolve(__dirname, 'dist', 'task1'),
    filename: 'task1.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/task1/task1.html',
      filename: 'task1.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'task1.css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.png/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};

module.exports = [index, task1];
