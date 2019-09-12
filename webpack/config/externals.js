const vendors = require("../vendors/vendors")

const externals = (function(vendors){
    let obj = {}
    vendors.forEach(vendor=>{
        obj = Object.assign(obj,{
            [vendor.path]:"window.['"+vendor.name+"']"
        })
    })
    return obj
})(vendors)

module.exports = externals