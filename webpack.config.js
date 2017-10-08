var StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var path = require("path");

module.exports = {
  devServer: {
    contentBase: `${__dirname}`,
    compress: true,
    port: 9000
  },

  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.yml' ],
  },
  
  entry: "./src/index.tsx",
  
  output: {
    filename: "bundle.js",
    path: `${__dirname}`
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.ya?ml$/, include: path.resolve('data'), loader: 'yaml', }
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