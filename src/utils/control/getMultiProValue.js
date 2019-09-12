// 获取多个属性值
import { getPropertyValue } from "./getPropertyValue"
export function getMultiProValue(attrNames = [], property){
    if(!property){
        throw new Error("property不能为空")
    }
    let result = {}
    for(let attr of attrNames){
        result[attr] = getPropertyValue(attr,property)
    }
    return result
}