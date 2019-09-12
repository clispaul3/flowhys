const path = require("path")

module.exports = {
    contentBase: path.join(__dirname, "../../dist"),
    compress: true,
    hot:true,
    port: 8088,
    open:true
}

const watch = require('node-watch')
const callfile = require('child_process')
const options = {
    filter:/\.scss$/,
    recursive:true
}
const stylePath = path.resolve(__dirname,"../../src")
watch(stylePath,options,(event,filename)=>{
    callfile.exec("npm run sass",function (err, stdout, stderr) {
        if(err){
            console.log('\x1B[31m',"error:" + err)
        }
        console.log(stdout)
        console.log(stderr)
    })
})
