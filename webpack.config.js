module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      }
    ]
  }
};
