import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpack from 'webpack';
import * as path from "path";

const config: webpack.Configuration = {
  mode: "production",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
  ],
};

module.exports = config;
