/**
 * 控件标签宽度配置
 * props {
 *   defaultValue  默认值
 * }
 */
import { autobind } from "core-decorators"
import Store from "@store/index"
import { getCurrentControl } from "@store/getters"
const { Input } = Antd
export class LabelWidth extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value:0,
            showTips:false
        }
    }
    @autobind
    validator(ev){
        let value = ev.target.value
        const res = /(^\d+%$)|(^[0-9]\d*$)/.test(value)
        if(res || value==""){
            console.log(value)
            const { id } = getCurrentControl()
            Store.dispatch({type:"UPDATE_LABEL_WIDTH",value,controlId:id})
            this.setState({value,showTips:false})
        }else{
            this.setState({value,showTips:true})
        }
    }
    componentDidMount(){
        const { value } = this.props
        this.setState({value})
    }
    render(){
        return <p className="form-ele">
            <Input value={this.state.value} 
              size="small"
              onChange={this.validator}/>
            {
                this.state.showTips ? 
                <span className="tips">只能输入自然数或百分比</span>
                : null
            }
        </p>
    }
}