const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const appDirectory = __dirname;

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "js/babylonBundle.js",

    path: path.resolve(appDirectory, "./dist"),
  },
  resolve: {
    extensions: [".js"],

    fallback: {
      fs: false,

      path: false,
    },
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|env|glb|stl)$/i,

        use: [
          {
            loader: "url-loader",

            options: {
              limit: 8192,
            },
          },
        ],
        type: 'javascript/auto'
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: path.resolve("public/index.html"),

      inject: true,
    }),
  ],
};
