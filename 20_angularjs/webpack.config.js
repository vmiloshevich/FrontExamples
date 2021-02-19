var path = require('path');
// clean-webpack-plugin для очистки dist. В этом примере он не особо нужен, 
// но если использовать [contenthash], то уже пригодится, пусть пока будет
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// для копирования html как есть
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }, 
  plugins: [
    new CleanWebpackPlugin(),
    // может есть другое решение, но пока делатеся так: 
    // копируем все файлы с расширением html сохраняя структуру папок из исходников (src)
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: "src", 
          filter: async (resourcePath) => {
            if (resourcePath.endsWith(".html"))
            {
              return true;
            }

             return false;
          },
        }
      ],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};