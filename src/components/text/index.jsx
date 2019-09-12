import { autobind } from "core-decorators"
import Store from "@store"
import * as actionTypes from "@store/actionType"
import { DELETE_CONTROL } from "@utils/eventTool/eventName"
import Pubsub from "@utils/eventTool/Pubsub"
import { deleteControl } from "../common"
const { Input,Icon } = Antd
const { Component } = React

class TextController extends Component {
    constructor(props){
        super(props)
    }
    @autobind
    deleteControl(ev){
        const { controlId,controlKey } = this.props.config
        deleteControl(ev,controlId,controlKey)
    }
    render(){
        return <div className="text-control controller"
                data-id={this.props.config.controlId}
                onClick={this.deleteControl}
                data-key={this.props.config.controlKey}>
            <Icon type="close-circle" />
            <Input data-id={this.props.config.controlId}
                data-key={this.props.config.controlKey}>
            </Input>
        </div>
    }
}

export default TextController