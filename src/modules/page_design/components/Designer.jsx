/**
 * @description 设计器中的控件都是从redux中读出来的
 */
import Store from "@store/index"
import { autobind } from "core-decorators"
import Pubsub from "@utils/eventTool/Pubsub"
import { ADD_CONTROL,TOGGLE_CONTROL,DELETE_CONTROL } from "@utils/eventTool/eventName"
import { getController } from "@utils/control"
import * as actionTypes from "@store/actionType"
import { setControlBorder } from "../utils"

class Designer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            controlCount:0
        }
    }
    @autobind
    renderAllControls(){
        const { pageControls } = Store.getState()
        if(pageControls.length==0){
            return null
        }
        return <div className="control-container">
            {pageControls.map(config => {
                const { controlKey } = config
                const Controller = getController(controlKey,config)
                return  Controller
            })}
        </div>
    }
    toggleControl(ev){
        const target = ev.nativeEvent.target
        const { id,key } = target.dataset
        if(id && key){
            Store.dispatch({type:actionTypes.SET_CURRENT_CONTROL_ID,controlId:id})
            Pubsub.publish(TOGGLE_CONTROL,{
                controlKey:key,
                controlId:id
            })
        }
        if(target.className.indexOf("control-container")>=0){
            Store.dispatch({type:actionTypes.SET_CURRENT_CONTROL_ID,controlId:0})
            Pubsub.publish(TOGGLE_CONTROL,{
                controlKey:key,
                controlId:0
            })
        }
    }
    componentDidMount(){
        setControlBorder()
        Pubsub.subscribe(ADD_CONTROL,data => {
            this.setState({controlCount:this.state.controlCount++})
        })
        Pubsub.subscribe(DELETE_CONTROL,data => {
            this.setState({controlCount:this.state.controlCount--})
        })
    }
    render(){
        return <div id="page-designer" 
            style={{display:this.props.status=="1" ? "block" : "none"}}
            onClick={this.toggleControl}>
            {this.renderAllControls()}
        </div>
    }
}

export default Designer