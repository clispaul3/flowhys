/**
 * 从当前控件的属性配置中取值
 */
import { getCurrentControl } from "@store/getters"
import { getPropertyValue } from "@utils/control"
export function getValue(attrName){
    const currentControl  = getCurrentControl()
    if(!currentControl || !currentControl.property) return
    const value = getPropertyValue(attrName,currentControl.property)
    return value
}