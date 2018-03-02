const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssOutputLocation = process.env.NODE_ENV === 'production' ?
'public/stylesheets/style-prod.css' : 'stylesheets/style.css';

const jsProdoOutput = {
  filename: 'public/javascripts/build-prod.js',
  path: resolve(__dirname),
  publicPath: '/',
};

const jsDevOutput = {
  filename: 'javascripts/build.js',
  path: '/',
  publicPath: '/',
};

const jsOuputLocation = process.env.NODE_ENV === 'production' ? jsProdoOutput : jsDevOutput;

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [    
    './index.js',
  ],
  output: jsOuputLocation,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        })
        // loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      // {
      //   test: /\.obj$/,
      //   loader: [ 'webpack-obj-loader']
      // },
      {
        test: /\.(png)$/,
        loader:['url-loader']
      },
      
    ],
  },
  plugins: [    
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),    
    new ExtractTextPlugin(cssOutputLocation),
  ],
};

if(process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin());
}


if(process.env.NODE_ENV !== 'production') {
  module.exports.entry.unshift(
    'react-hot-loader/patch',
    'react-hot-loader/babel',
    'webpack-hot-middleware/client',
  );
  module.exports.plugins.unshift(new webpack.HotModuleReplacementPlugin());
}