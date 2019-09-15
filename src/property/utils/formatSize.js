export function formatSize(value){
    if(typeof value != "string"){
        throw new Error("参数类型有误")
    }
    if(value.indexOf("px")>=0){
        return {
            val:value.split("px")[0],
            unit:"px"
        }
    }
    if(value.indexOf("%")>=0){
        return {
            val:value.split("%")[0],
            unit:"%"
        }
    }
    return {
        val:100,
        unit:"px"
    }
}