export function setPropertyValue(attrName,value,property){
    for(let group of property){
        for(let item of group.children){
            if(item.attrName==attrName){
                item.value = value
            }
        }
    }
    return property
}