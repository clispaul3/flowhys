// 从property中取值
import { getMultiProValue } from "@utils/control"
import Store from "@store/index"

export function getValueFromProperty(controlId,controlKey,attrNames = []){
    const { pageControls } = Store.getState()
    let property = null
    for(let item of pageControls){
        if(item.controlId==controlId){
            property = item.property
            break
        }
    }
    const result = getMultiProValue(attrNames,property)
    return {
        ...result,
        controlKey,
        controlId
    }
}