const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
      'app': './src/app/app.js'
    },

    output: {
        path: helpers.root('docs','dist'),
        publicPath: 'dist/',
        filename: '[name].js',
    },

    resolve: {
      extensions: ['.js']
    },

    module: {
      rules: [
        {
          test: /\.(sass|scss)$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer]
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            })
        },
          {
              test: /\.(css)$/,
              use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: [
                      {
                          loader: 'css-loader'
                      },
                      {
                          loader: 'postcss-loader',
                          options: {
                              plugins: () => [autoprefixer]
                          }
                      },
                  ]
              })
        },
        {
          test: /\.js$/,
          use: 'babel-loader'
        }
      ]
    },

    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html', filename: '../index.html'})
    ]
};

