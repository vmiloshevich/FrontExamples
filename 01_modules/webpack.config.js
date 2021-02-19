var path = require('path');
// npm i -D html-webpack-plugin@next
// по умолчанию webpack умеет работать только с js, потому 
// ставим плагин html-webpack-plugin для копирования html 
// + ещё некоторые фичи умеет делать, но не в этом примере
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', 
  // сборка начинается с entry
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin()
  ],
  // результат сборки пишется в main.js
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }
};