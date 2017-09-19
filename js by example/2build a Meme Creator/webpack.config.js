const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        general: './src/js/general.js',
        memes:   './src/js/memes.js',
    },
    output: {
        path: __dirname + "/dist",
        filename: '[name].js',
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'es2015'],
            }
          }
        },
        {
            test: /\.css$/,
            use:['style-loader', 'css-loader']
        }
      ],
    }
}

