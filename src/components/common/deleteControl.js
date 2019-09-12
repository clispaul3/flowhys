/**
 * 删除控件
 */
import Store from "@store/index"
import Pubsub from "@utils/eventTool/Pubsub"
import { DELETE_CONTROL } from "@utils/eventTool/eventName"

export function deleteControl(ev,controlId,controlKey){
    const tagName = ev.nativeEvent.target.tagName
    if(tagName=="path"||tagName=="svg"){
        ev.stopPropagation()
        ev.nativeEvent.stopImmediatePropagation()
        Store.dispatch({type:DELETE_CONTROL,controlId})
        console.log(controlId)
        Pubsub.publish(DELETE_CONTROL,{
            controlId,
            controlKey
        })
    }
}