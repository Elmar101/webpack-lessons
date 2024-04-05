const path = require('path');

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
   //  mode: 'development', // 'production' default  value if we dont write mode property now we skip package.json file look at there 
}