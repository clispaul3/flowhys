import { autobind } from "core-decorators"
import {
    ADD_CONTROL,UPDATEA_CONTROL,
    DELETE_CONTROL
} from "@utils/eventTool/eventName"
import Pubsub from "@utils/eventTool/Pubsub"
import { deleteControl,getValueFromProperty } from "../common"
const { Icon,Tag,Checkbox } = Antd
const CheckboxGroup = Checkbox.Group;
const { Component } = React
const plainOptions = ["选项1", "选项2", "选项3"];
const defaultCheckedList = ["选项1", "选项2"];
class CheckboxController extends Component {
    constructor(props){
        super(props)
        this.state = {
            controlId:this.props.config.controlId,
            isRender:false,
            checkedList: defaultCheckedList,
            indeterminate: true,
            checkAll: false
        }
    }
    onChange = checkedList => {
        this.setState({
          checkedList,
          indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
          checkAll: checkedList.length === plainOptions.length,
        })
    }
    
    onCheckAllChange = e => {
        this.setState({
          checkedList: e.target.checked ? plainOptions : [],
          indeterminate: false,
          checkAll: e.target.checked,
        })
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
        return <div className="checkbox-control controller"
                style={{width:CONTROL_WIDTH,height:CONTROL_HEIGHT,lineHeight:"40px"}}
                data-id={controlId}
                onClick={this.deleteControl}
                data-key={controlKey}>
            {LABEL_NAME ?
                <Tag color="purple" style={{width:LABEL_WIDTH}}>{LABEL_NAME}</Tag> 
                : null
            }
            <Icon type="close-circle" />
            <Checkbox
                indeterminate={this.state.indeterminate}
                onChange={this.onCheckAllChange}
                checked={this.state.checkAll}>
                    全选
            </Checkbox>
            <CheckboxGroup
                options={plainOptions}
                value={this.state.checkedList}
                onChange={this.onChange}
            />
        </div>
    }
}

export default CheckboxController