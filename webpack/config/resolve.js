const path = require("path")
const paths = [
    "components","modules",
    "store","property",
    "utils"
]
const alias = {
    "@":path.resolve(__dirname, "../../src")
}
paths.forEach(item => {
    alias["@" + item] = path.resolve(__dirname,"../../src/" + item)
})
module.exports = {
    alias,
    extensions:[".js", ".jsx"]
}