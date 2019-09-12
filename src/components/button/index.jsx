import Pubsub from "@utils/eventTool/Pubsub"
import {
    ADD_CONTROL,UPDATEA_CONTROL,
    DELETE_CONTROL
} from "@utils/eventTool/eventName"
import { autobind } from "core-decorators"
import { deleteControl } from "../common"
import { getValueFromProperty } from "../common"
const { Button,Icon } = Antd

class ButtonController extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            controlId:this.props.config.controlId,
            isRender:false
        }
    }
    @autobind
    deleteControl(ev){
        const { controlId,controlKey } = this.props.config
        deleteControl(ev,controlId,controlKey)
    }
    componentDidMount(){
        this.setState({controlId:this.props.config.controlId})
        Pubsub.subscribe(UPDATEA_CONTROL, data => {
            const { controlId } = data
            if(controlId!==this.state.controlId){
                this.setState({isRender:false})
            }else{
                this.setState({isRender:true})
            }
        })
        Pubsub.subscribe(DELETE_CONTROL, data => {
            this.setState({isRender:true})
        })
        Pubsub.subscribe(ADD_CONTROL, data => {
            this.setState({isRender:true})
        })
    }
    shouldComponentUpdate(props,nextState){
        if(!nextState.isRender) return false
        return true
    }
    render(){
        const { controlId,controlKey } = this.props.config
        const result = getValueFromProperty(controlId,controlKey,["BUTTON_NAME"])
        const { BUTTON_NAME = "按钮" } = result
        return <div className="button-control controller"
                onClick={this.deleteControl}
                data-id={controlId}
                data-key={controlKey}>
            <Icon type="close-circle" />
            <Button data-id={controlId}
                data-key={controlKey}>
                {BUTTON_NAME}
            </Button>
        </div>
    }
} 

export default ButtonController