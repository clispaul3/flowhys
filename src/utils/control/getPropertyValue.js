export function getPropertyValue(attrName,property){
    if(!property){
        throw new Error("property不能为空")
    }
    let value = ""
    for(let group of property){
        for(let item of group.children){
            if(item.attrName==attrName){
                value = item.value
            }
        }
    }
    return value
}