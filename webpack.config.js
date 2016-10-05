var path = require('path');
var webpack = require('webpack');

const srcDirectory = [
  path.join(process.cwd(), 'src'),
  path.join(process.cwd(), 'example')
];

module.exports = {
  entry: './example/index.js',

  output: {
    publicPath: 'http://localhost:7700/dist',
    path: path.join(__dirname),
    libraryTarget: 'umd',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  externals: {
    'react': 'React',
    "react-dom": "ReactDOM",
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [ 'react', 'es2015', 'stage-0' ]
        },
        include: srcDirectory
      }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    port: 7700,
    historyApiFallback: true
  }
};