import { autobind } from "core-decorators"
import { getValue,updateControlProperty } from "./utils"
const { Input } = Antd
const { Component } = React

export class ButtonName extends Component {
    constructor(props){
        super(props)
        this.state = {
            attrName:"BUTTON_NAME",
            value:"",
            isRender:false
        }
    }
    componentDidMount(){
        this.setState({value:getValue(this.state.attrName)})
    }
    @autobind
    updateValue(ev){
        const value = ev.nativeEvent.target.value
        this.setState({value})
        const { attrName } = this.state
        updateControlProperty(attrName,value)
    }
    render(){
        return <Input value={getValue(this.state.attrName)} size="small"
            onChange={this.updateValue}></Input>
    }
}