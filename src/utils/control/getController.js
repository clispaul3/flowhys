import {
    IPController,
    ButtonController,
    TextController,
    SelectController,
    CustomController,
    RadioController,
    CheckboxController
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
        case "CONTROL_SELECT":
            return <SelectController config={config}></SelectController>
        case "LAYOUT_CUSTOM":
            return <CustomController config={config}></CustomController>
        case "CONTROL_RADIO":
            return <RadioController config={config}></RadioController>
        case "CONTROL_CHECKBOX":
            return <CheckboxController config={config}></CheckboxController>
        default:
            break
    }
}