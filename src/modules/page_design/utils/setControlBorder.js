import Pubsub from "@utils/eventTool/Pubsub"
import { ADD_CONTROL,DELETE_CONTROL,TOGGLE_CONTROL } from "@utils/eventTool/eventName"

export function setControlBorder(){
    Pubsub.subscribe(ADD_CONTROL,data => {
        const { controlId } = data
        setStyle(controlId)
    })
    Pubsub.subscribe(TOGGLE_CONTROL,data => {
        const { controlId } = data
        setStyle(controlId)
    })
    Pubsub.subscribe(DELETE_CONTROL,data => {
        setStyle(0)
    })
}
function setStyle(controlId){
    const timer = setTimeout(() => {
        $(".controller").each(function(idx){
            if(this.dataset.id==controlId){
                this.style.border = "1px solid red"
            }else{
                this.style.border = "1px solid #fff"
            }
            clearTimeout(timer)
        })
    },100)
}