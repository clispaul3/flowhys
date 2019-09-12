import Store from "./index"

function getCurrentControl(){
    const { pageControls,currentControlId } = Store.getState()
    if(pageControls.length==0){
        return {}
    }
    return pageControls.filter(item => {
        return item.controlId==currentControlId
    })[0]
}

export {
    getCurrentControl
}