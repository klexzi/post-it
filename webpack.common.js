const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  plugins: [new CleanWebpackPlugin(["dist"])],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public", "dist")
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        loader: "babel-loader",
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/
      }
    ]
  }
};
