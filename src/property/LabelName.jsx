import { autobind } from "core-decorators"
import { getValue,updateControlProperty } from "./utils"
const { Input } = Antd
const { Component } = React

export class LabelName extends Component {
    constructor(props){
        super(props)
        this.state = {
            attrName:"LABEL_NAME",
            value:""
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
        return <p className="form-ele">
            <Input value={getValue(this.state.attrName)} size="small"
            onChange={this.updateValue}></Input>
        </p>
    }
}