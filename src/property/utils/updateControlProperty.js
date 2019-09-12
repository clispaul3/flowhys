/**
 * 设置当前控件的属性值
 */
import Pubsub from "@utils/eventTool/Pubsub"
import { UPDATEA_CONTROL } from "@utils/eventTool/eventName"
import { setPropertyValue } from "@utils/control"
import Store from "@store"
import { getCurrentControl } from "@store/getters"

export function updateControlProperty(attrName,value){
    let currentControl  = getCurrentControl()
    let { property,controlId,controlKey } = currentControl
    property = setPropertyValue(attrName,value,property)
    Object.assign(currentControl,{property})
    Store.dispatch({type:UPDATEA_CONTROL,currentControl})
    Pubsub.publish(UPDATEA_CONTROL,{controlId,controlKey,attrName})
}