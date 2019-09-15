/**
 * 控件标签宽度配置
 */
import { autobind } from "core-decorators"
import { 
    getValue,
    updateControlProperty,
    formatSize 
} from "./utils"

const { InputNumber } = Antd
export class LabelWidth extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            attrName:"LABEL_WIDTH",
            value:0,
            unit:"px"
        }
    }
    @autobind
    validator(value){
        const res = /^[0-9]\d*$/.test(value)
        if(!res || this.state.value==value) return
        this.setState({value})
        const { attrName,unit } = this.state
        updateControlProperty(attrName,value + ""+unit)
    }
    @autobind
    toggleUnit(e){
        const ev = e.nativeEvent
        window.event? window.event.cancelBubble = true : ev.stopPropagation();
        const { unit,attrName,value } = this.state
        if(unit=="px"){
            this.setState({unit:"%"})
            updateControlProperty(attrName,value + "%")
        }
        if(unit=="%"){
            this.setState({unit:"px"})
            updateControlProperty(attrName,value + "px")
        }
    }
    componentDidMount(){
        const value = getValue(this.state.attrName)
        const { val = "",unit } = formatSize(value)
        this.setState({value:val,unit})
    }
    render(){
        const value = getValue(this.state.attrName)
        const { val = "",unit } = formatSize(value)
        return <p className="form-ele">
            <InputNumber value={val} 
                min={0}
                className="width-input"
                onChange={this.validator} size="small"/>
            <span className="width-unit" onClick={this.toggleUnit}>
                {unit}
            </span>
        </p>
    }
}