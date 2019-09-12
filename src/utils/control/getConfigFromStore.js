import Store from "@store"

export function getConfigFromStore(controlId){
    const { pageControls } = Store.getState()
    if(pageControls.length==0){
        return {}
    }else{
        const arr = pageControls.filter(control => {
            return control.controlId==controlId
        })
        return arr.length>0 ? arr[0] : {}
    }
}