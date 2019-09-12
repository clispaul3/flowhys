const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports =  [
    new HtmlWebpackPlugin({
        title: "FlowHYS",
        template: path.resolve(__dirname,"../../index.html"), 
        filename: path.resolve(__dirname,"../../dist/index.html") ,
        showErrors:true,
        minify:{
            removeComments:true, 
            collapseWhitespace: true 
        }
    })
]

