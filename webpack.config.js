const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
htmlPlugin = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: './index.html'
});
module.exports = {
  entry: "./src/index.js",
  output: {
	  path: path.resolve("output"),
	  filename: "bundled.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
	  {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [htmlPlugin]
};