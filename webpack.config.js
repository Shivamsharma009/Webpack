// const path = require("path");
// const HTMLWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   mode: "development",
//   entry: ["babel-polyfill", "./src/index.js"],
//   output: {
//     //to avoid this we import absolute pacakage
//     //path: '/user/dev/desktop/webpack'
//     path: path.resolve(__dirname, "dist"),
//     filename: "js/bundle.js",
//   },
//   devServer: {
// //     contentBase: "./dist",
// //   },
// //   plugins: [
// //     new HTMLWebpackPlugin({
// //       filename: "index.html",
// //       template: "./src/index.html",
// //     }),
// //   ],
// //   module: {
// //     rules: [
// //       {
// //         test: /\.js$/,
// //         exclude: /node_modules/,
// //         use: {
// //           loader: "babel-loader",
// //        },
// //       },
// //     ],
// //   },
// // };
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: ["babel-polyfill", "./src/index.js"],

  ////to avoid this we import absolute pacakage
  //path: '/user/dev/desktop/webpack'
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
  module: {
    //rules receive an array of loaders that we want to use
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
