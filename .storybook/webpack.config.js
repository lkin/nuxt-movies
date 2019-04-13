const path = require('path');

module.exports = {
  // // allow to use @ to reference components, i.e. import List from '@/components/list/List'
  // resolve: {
  //   alias: {
  //     '@': path.dirname(path.resolve(__dirname))
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        // include: path.resolve(__dirname, '../'),
      },
    ],
  },
};
