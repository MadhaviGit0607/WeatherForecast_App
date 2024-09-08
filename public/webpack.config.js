import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = './src/index.js';
export const output = {
  filename: 'bundle.js',
  path: __dirname + '/dist',
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
];
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // other configuration settings
};
// webpack.config.js
module.exports = {
  // other configurations
  devServer: {
    contentBase: __dirname + '/dist',
    publicPath: '/',
    port: 3000
  }
};

