import { autobind } from "core-decorators"
import {
    ADD_CONTROL,UPDATEA_CONTROL,
    DELETE_CONTROL
} from "@utils/eventTool/eventName"
import Pubsub from "@utils/eventTool/Pubsub"
import { deleteControl,getValueFromProperty } from "../common"
const { Input,Icon,Tag } = Antd
const { Component } = React

class TextController extends Component {
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
    render(){
        const { controlId,controlKey } = this.props.config
        const keys = ["DEFAULT_VALUE","LABEL_NAME","LABEL_WIDTH",
            "CONTROL_HEIGHT","CONTROL_WIDTH"]
        const result = getValueFromProperty(controlId,controlKey,keys)
        const { DEFAULT_VALUE = "",LABEL_NAME = "",LABEL_WIDTH = "53px",
            CONTROL_HEIGHT,CONTROL_WIDTH } = result
        return <div className="text-control controller"
                style={{width:CONTROL_WIDTH,height:CONTROL_HEIGHT}}
                data-id={controlId}
                onClick={this.deleteControl}
                data-key={controlKey}>
            {LABEL_NAME ?
                <Tag color="purple" style={{width:LABEL_WIDTH}}>{LABEL_NAME}</Tag> 
                : null
            }
            <Icon type="close-circle" />
            <Input data-id={controlId}
                style={{width:"auto"}}
                value={DEFAULT_VALUE}
                data-key={controlKey}>
            </Input>
        </div>
    }
}

export default TextController