1- npm init --yes , npm install webpack -D , npm install webpack-cli -D , webpack.config.js "fayli yaradiriq ana dizinde"

2-webpack.config.js dosyasinda 1- dənə module.exports = {} objecti geriye göndərəcəyik

3- ci bu objectin içində bəzi xassələri olacaq(properties)

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