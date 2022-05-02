const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: 'production',
  entry: './styles/index.scss',
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [{
          loader: MiniCssExtractPlugin.loader
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
    }, ]
  },

  plugins: [new MiniCssExtractPlugin({
    filename: 'css/index.css',
  })],
}