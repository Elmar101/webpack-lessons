const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'), 
        filename: './js/bundle.js'
    },
    // watch: true,
    
   devServer: {
    static: {
      directory: path.join(__dirname, "./dist")
    },

    compress: true,
    port: 3010, // default 8000
  },
  plugins:[
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    })
  ]
   //  mode: 'development', // 'production' default  value if we dont write mode property now we skip package.json file look at there 
}