import {
    ADD_CONTROL,DELETE_CONTROL,
    UPDATEA_CONTROL
} from "../actionType"

export function pageControls(pageControls = [], action){
    const { type } = action
    switch(type){
        case ADD_CONTROL:
            var { newControl } = action
            return [...pageControls,newControl]
        case DELETE_CONTROL:
            const { controlId } = action
            return pageControls.filter(item => {
                return item.controlId!=controlId
            })
        case UPDATEA_CONTROL:
            var { currentControl } = action
            let nextPageControls = pageControls.map(control => {
                if(control.controlId!=currentControl.controlId){
                    return control
                }else{
                    return currentControl
                }
            })
            return nextPageControls
        default:
            return pageControls
    }
}