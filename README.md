Öncelikle Webpack Nedir?

Webpack bir bundling tools olarak sözlüklerimizde geçmektedir. Peki bu bundling nedir? 
Bundle kelimesini kendimce tanımlayacak olursam birden fazla şeyi alıp bunları birleştirerek tek bir şey ortaya çıkarmaktır. 
Webpack sitesinden yardım alacak olursam modülleri birleştirerek ortaya statik dosyalar çıkaran bir tool diyebilirim.

--------------------------------------------------------------------------------------------------------------------------------------------------------
1- npm init --yes , npm install webpack -D , npm install webpack-cli -D , webpack.config.js "fayli yaradiriq ana dizinde"

2-webpack.config.js dosyasinda 1- dənə module.exports = {} objecti geriye göndərəcəyik

3- ci bu objectin içində bəzi xassələri olacaq(properties)
 
__dirname - yazilan fayilin harda yerlesdiyini gorsedir ex- console.log(__dirname) => Desktop/JS-HOOD/Modern-Js
__filename- Bu ise faylin adini verir ex- console.log(__filename) => webpack.config.js

module.exports = {
    entry: './index.js', // kodlarimizi yazdiqimiz dosya

    output: {
        path: __dirname, // Bu dosya harda yaransin __dirname - webpack.config.js ile eyni pathde eyni alanda
        filename: 'bundle.js' // olusacaq olan dosyanin adi yeni hansi fayil ile bundle olsun yaransin
    } ,// webpack ise bizim üçün yeni bir dosya oluşduracağ
    
    mode: 'development', // development aşamasinda çalişsin bu webpack
};

4- package.json fayilina bir script elave edirik "dev-webpack": "webpack"
5- index.html fayli yardib script taqinda src fayil bundle.js wepack de output olaraq fayili verilir "pathi doqru verilmelidir"
----------------------------------------------------------------------------------------------------------------------------------
Lessons 2

create src folder => create js folder in src folder
created dist folder => create "js, css, img" folder and index.html fayle in dist

sonra gedib webpack.config.js faylinda path leri duzeldek
const path = require('path'); - node js moduludur dosyalarin yolunu vermek ichin yada teyin etmek ichin
----***************************---------------------
webpack.config.js  fayli asaqidaki kimi yaziriq
-----------------------------------------------------
const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'), 
        filename: './js/bundle.js'
    },
    mode: 'development',
}
------------------------------------------------------
mode: 'development' yaxud  'production' bunlari package.json faylina kecirde bilerik
---------npm i webpack-dev-server -D---------------------------------------------------------------------------
npm i webpack-dev-server -D -> Herdefe fayillarda deyisiklik edende "Fayli Bundle edib browseri reflesh etsin yenilesin"  dev serveri ishe salsin
sonra webpack.config.js faylina 
devServer: {
    static: {
      directory: path.join(__dirname, "./dist")
    },
}  Bunu Elave Edirik ve 
package.json faylinada Bir script yaziriq  " "webpack:start": "webpack-dev-server --mode development --open" "
"webpack:start": "webpack-dev-server --mode development --open" Bu scripti "npm run webpack:start" etdikde bizim yazacaqimiz code compile edilib ve seyfede reload olacaq

const path = require('path');
module.exports = {
    entry: './src/js/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'), 
        filename: './js/bundle.js'
    },
   devServer: {
    static: {
      directory: path.join(__dirname, "./dist")
    },

    compress: true,
    port: 3010, // default 8000
  },
}
---------------------------------------------------------PLUGIN-----------------------------------------------------------------------------------------------
PLUGIN => Koddlari sixisdirip dishariya gonderir ve ya ts ile yazilan koddu js chevirip dishariya gonderir ve ya 
babel araciliqi ile es6 yada es7 ile yazilan koddu es5 standartlarina chevirib gonderir

1 ci html pluginnini install edek "npm install  html-webpack-plugin -D" => html plugin html seyfelerini dinamik özi yaradacaq ve dişariya açacaq
dist folderini sil , npm run webpack:start komutunu çalışdırdıqda özi yaradacaq və 
plugins:[
    new HtmlWebpackPlugin({
        
    })
] Bu koddu webpack.config.js faylina elave et

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
        
    })
  ]
   //  mode: 'development', // 'production' default  value if we dont write mode property now we skip package.json file look at there 
}
---------------------------------------------------------------------------------------------------------------------------------------------------------------
 plugins:[
  new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
  })
]

Bir eded src altinda index.html seyfesi yaradaq sonra biz bu seyfenin bundle olduqu zaman dist -in altindaki index.html le yuklenmesini temin edek usdeki kodla 

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'), 
        filename: './js/bundle.js'
    },
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
}
----------------------------------------------------------------------------------------------------------------------------------------------------------