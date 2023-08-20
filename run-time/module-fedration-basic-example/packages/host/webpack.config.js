const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const mode = process.env.NODE_ENV || "production";

module.exports = {
  mode,
  entry: "./src/index",
  output: {
    publicPath: "http://localhost:3000/", // New
  },
  devtool: "source-map",
  optimization: {
    minimize: mode === "production",
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
    ],
  },

  plugins: [
    // New
    new ModuleFederationPlugin({
      name: "host",
      library: { type: "var", name: "host" },
      filename: "remoteEntry.js",
      remotes: {
        catalog: "catalog@http://localhost:3001/remoteEntry.js",
        cart: "cart@http://localhost:3002/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
