/**
 * 打包node_modules下的模块
 */
const path = require('path')
module.exports = {
    mode:"production",
    entry: path.resolve(__dirname,"./config.js"),
    output: {
        path: path.resolve(__dirname,'../../dist/js'),
        filename: 'vendors.build.js',
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                loader:"babel-loader"
            }
        ]
    }
}