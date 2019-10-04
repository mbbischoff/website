const path = require("path");

module.exports = {
  mode: "development",
  entry: "./_javascript/index.js",
  output: {
    path: path.resolve(__dirname, "./public/javascript"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "./node_modules"),
        loader: "babel-loader"
      }
    ]
  },
  devtool: "source-map"
}