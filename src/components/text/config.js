/**
 * 文本框控件的默认配置属性
 */
import  { 
    LabelWidth,
    ControlWidth,
    LabelName
} from "@property/index"
const { Input } = Antd
const textConfig = [
    {
        label:"样式属性",
        attrName:"STYLE_CONFIG",
        children:[
            {
                label:"标签宽度",
                attrName:"LABEL_WIDTH",
                render(){
                    return <LabelWidth/>
                },
                value:110
            },{
                label:"控件宽度",
                attrName:"CONTROL_WIDTH",
                render(){
                    return <ControlWidth/>
                },
                value:200
            }
        ]
    },{
        label:"基本属性",
        attrName:"BASIS_CONFIG",
        children:[
            {
                label:"标签名",
                attrName:"LABEL_NAME",
                value:"按钮",
                render(){
                    return <LabelName/>
                }
            },{
                label:"默认值",
                attrName:"DEFAULT_VALUE",
                value:"",
                render(){
                    return <Input size="small"></Input>
                }
            }
        ]
    }
]

export default textConfig