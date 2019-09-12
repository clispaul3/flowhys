const externals = require("./config/externals")
// const devServer = require("./config/devServer")
const plugins = require("./config/plugins")
const modules = require("./config/module")
const resolve = require("./config/resolve")
const path = require("path")


module.exports = {
    entry:path.resolve(__dirname,"../index.js"),
    output:{
        filename:"main.build.js",
        path:path.resolve(__dirname,"../dist/js")
    },
    devtool:"source-map",
    module:modules,
    externals,
    // devServer,
    plugins,
    resolve
}