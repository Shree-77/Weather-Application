const path = require('path');

module.exports = {
  mode: 'development',
  entry: './Weather/index.js', 
  output: {
    filename: 'bundle.js',  
    path: path.resolve(__dirname, 'dist'),  
  },
  module: {  // This section should be inside the main configuration object
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
