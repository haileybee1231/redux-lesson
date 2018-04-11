# redux-lesson
A sample react-redux app.

# to start
create webpack.config.js:

var path = require('path');
var SRC_DIR = path.join(__dirname, '/react-client/src');
var DIST_DIR = path.join(__dirname, '/react-client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
       }
      }
    ]
  }
};

create .babelrc:

{
    "presets": [
        "env",
        "react"
    ],
    "plugins": [
        "transform-object-rest-spread"
    ]
}

then npm install, then npm run react-dev, then npm run server-dev