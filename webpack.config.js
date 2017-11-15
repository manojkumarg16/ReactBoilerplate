// var webpack = require('webpack');
// var path = require('path');
// var APP_DIR = path.resolve(__dirname, 'public/app');
// var config = {
//    entry: APP_DIR+'/main.js',
//
//    output: {
//       path:path.resolve(__dirname, '/public'),
//       filename: 'dist/index.js',
//    },
//
//    devServer: {
//       inline: true,
//       port: 8080
//    },
//
//    module: {
//       loaders: [
//          {
//             test: /\.jsx?$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader',
//
//             query: {
//                presets: ['es2015', 'react']
//             }
//          }
//       ]
//    }
// }
//
// module.exports = config;
const path = require('path');

module.exports = {
   entry:"./public/app/main.jsx",
   output: {
    path: __dirname + "/public/dist",
      //  path:"./public/javascripts/",
       filename: "bundle.js"
   },
   module:{
       loaders:[
        {
          loader: 'babel-loader',
          test:/\.jsx$/, // 'babel-loader' is also a legal name to reference
          query: {
            presets: ["es2015","react","stage-1"]
         }
       },// for css
        { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
      },
       resolve:{
        extensions:['.','.js','.jsx','/index.js', '/index.jsx']
      }
}
