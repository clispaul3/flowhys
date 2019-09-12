import {
    IPController,
    ButtonController,
    TextController
} from "@components/index"

export function getController(controlKey,config){
    if(!controlKey){
        return 
    }
    switch(controlKey){
        case "CONTROL_IP":
            return <IPController config={config}></IPController>
        case "CONTROL_BUTTON":
            return <ButtonController config={config}></ButtonController>
        case "CONTROL_TEXT":
            return <TextController config={config}></TextController>
        default:
            break
    }
}