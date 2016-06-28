var path = require('path');
var webpack = require('webpack');

function getEntries(env) {
  var entries = [];

  if (env == 'development') {
    entries.push('webpack-dev-server/client?http://localhost:8080');
    entries.push('webpack/hot/only-dev-server');
  }
  entries.push(path.join(__dirname, './app') );

  return entries;
}

function getPlugins(env) {
  var plugins = [];
  var GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify(env),
    __DEV__: env == 'development'
  };

  if (env == 'development') {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }
  if (env == 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/));
  }
  plugins.push(new webpack.DefinePlugin(GLOBALS));

  return plugins;
}

module.exports = function(env) {
  var devtool = env == 'development' ? 'eval' : 'cheap-module-source-map';

  return {
    devtool: devtool,
    entry: getEntries(env),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins: getPlugins(env),
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['react-hot', 'babel'],
          include: path.join(__dirname),
          exclude: /node_modules/
        },
        {
          test: /(\.css|\.scss)$/,
          include: path.join(__dirname),
          loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
        }
      ]
    }
  }
};