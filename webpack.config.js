const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/App.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },

  devServer: {
    static: "./dist",
    port: 9000,
    open: true
  },
  module: {
    rules: [{
        test: /\.(js|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: "css-loader",
            options: {
              modules: false
            }
          },
          {
            loader: 'postcss-loader'
          }, {
            loader: 'sass-loader',
            options: {}
          },
        ],
      },

      {
        test: /\.css$/i,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: "css-loader",
            options: {
              modules: false
            }
          },
          {
            loader: 'postcss-loader'
          }
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};