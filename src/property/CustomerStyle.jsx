/**
 * 自定义样式
 */
import { editorCode } from "./utils"
const { Input } = Antd
const { Component } = React

export class CustomerStyle extends Component {
    constructor(props){
        super(props)
        this.state = {
            attrName:"CUSTOMER_STYLE"
        }
    }
    editorStyle(){
        const value =
`.container{

}`
        editorCode(value,"css")
    }
    render(){
        return <p className="form-ele">
        <Input size="small" onFocus={this.editorStyle}></Input>
        </p> 
    }
}