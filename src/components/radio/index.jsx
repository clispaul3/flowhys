import { autobind } from "core-decorators"
import {
    ADD_CONTROL,UPDATEA_CONTROL,
    DELETE_CONTROL
} from "@utils/eventTool/eventName"
import Pubsub from "@utils/eventTool/Pubsub"
import { deleteControl,getValueFromProperty } from "../common"
const { Icon,Tag,Radio } = Antd
const { Component } = React

class RadioController extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:1,
            controlId:this.props.config.controlId,
            isRender:false
        }
    }
    @autobind
    deleteControl(ev){
        const { controlId,controlKey } = this.props.config
        deleteControl(ev,controlId,controlKey)
    }
    onChange = e => {
        this.setState({
          value: e.target.value,
        })
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
        return <div className="radio-control controller"
                style={{width:CONTROL_WIDTH,height:CONTROL_HEIGHT,lineHeight:"40px"}}
                data-id={controlId}
                onClick={this.deleteControl}
                data-key={controlKey}>
            {LABEL_NAME ?
                <Tag color="purple" style={{width:LABEL_WIDTH}}>{LABEL_NAME}</Tag> 
                : null
            }
            <Icon type="close-circle" />
            <Radio.Group value={this.state.value}
                onChange={this.onChange}
                data-id={controlId}
                data-key={controlKey}>
                <Radio value={1}>选项1</Radio>
                <Radio value={2}>选项2</Radio>
                <Radio value={3}>选项3</Radio>
            </Radio.Group>
        </div>
    }
}

export default RadioController