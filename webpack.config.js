var path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  plugins: [new CompressionPlugin()],
  entry: `${SRC_DIR}/index.jsx`,
  mode: "development",
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /.jsx?/,
        loader: "babel-loader",
        exclude: [path.resolve(__dirname, 'node_modules/'), path.resolve(__dirname, './config/')],
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    contentBase: [__dirname + '/public', __dirname + '/assets'],
  },
};