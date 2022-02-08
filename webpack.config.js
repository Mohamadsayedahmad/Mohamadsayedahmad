const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: {
    app: './src/index.js',
  },

  output: {
    path: path.join(__dirname, './dist'),
    filename: "main.js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            }
          },
         
        ],
      },
      {
        test: /\.css$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader',
          ],
      },
      {
        test: /\.(jpe?g|png|gif|PNG)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]'
        }
      },
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
      
    ],
  },
  mode: "development",
  devServer: {
    static: './dist',
    hot: true,
    open: true,
  },
  plugins: [ new HtmlWebpackPlugin({
    filename: "index.html",
    template: "./src/index.html",
  }),
    new MiniCssExtractPlugin({
    filename: "./src/style.css"
  }),
 ],
}





