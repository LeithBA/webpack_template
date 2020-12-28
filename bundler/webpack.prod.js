const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackMerge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const commonConfiguration = require('./webpack.common.js')
const path = require('path')

module.exports = webpackMerge.merge(
  commonConfiguration,
  {
    mode: 'production',
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin()
    ],
    module:
    {
      rules: [
        {
          test: /\.(styl|css)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { publicPath: './'},
            },
            'css-loader',
            'stylus-loader'
          ]
        }
      ]
    }
  }
)
