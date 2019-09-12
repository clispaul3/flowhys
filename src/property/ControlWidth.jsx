import { autobind } from "core-decorators"
const { Input } = Antd
/**
 * 控件宽度配置
 * props {
 *   defaultValue  默认值
 * }
 */
export class ControlWidth extends React.Component {
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
            this.setState({value,showTips:false})
        }else{
            this.setState({showTips:true})
        }
    }
    componentDidMount(){
        const { value } = this.props
        this.setState({value})
    }
    render(){
        return <p className="form-ele">
            <Input value={this.state.value} onChange={this.validator} size="small"/>
            {
                this.state.showTips ? 
                <span className="tips">只能输入自然数或百分比</span>
                : null
            }
        </p>
    }
}