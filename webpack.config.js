var StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  devServer: {
    contentBase: `${__dirname}/dist`,
    compress: true,
    port: 9000
  },
  
  entry: "./src/index.tsx",
  
  output: {
    filename: "bundle.js",
    path: `${__dirname}/dist`
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.json$/, loader: "json-loader" },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: "body"
    }),
    new CopyWebpackPlugin([{ 
      from: `${__dirname}/public/robots.txt` 
    }]),
  ],

  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    modules: ["node_modules"]
  },
};