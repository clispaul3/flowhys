import { getHashCode } from "@utils/common"
import { getDefaultConfig,getConfigFromStore } from "./index"

export function createNewControl(type = "",controlKey){
    const newControl = {
        controlKey,
        controlId:getHashCode()
    }
    if(type=="STORE"){
        Object.assign(newControl,{
            property:getConfigFromStore(controlKey)
        })
    }else{
        Object.assign(newControl,{
            property:getDefaultConfig(controlKey)
        })
    }
    return newControl
}

