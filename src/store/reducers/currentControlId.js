import {
    SET_CURRENT_CONTROL_ID,
    CLEAR_CURRENT_CONTROL 
} from "../actionType"

export function currentControlId(currentId = 0,action){
    const { type } = action
    switch(type){
        case SET_CURRENT_CONTROL_ID:
            return action.controlId
        case CLEAR_CURRENT_CONTROL:
            return 0
        default:
            return currentId
    }
}