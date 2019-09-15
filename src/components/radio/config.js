/**
 * 文本框控件的默认配置属性
 */
import  { 
    LabelWidth,
    ControlWidth,
    LabelName,
    DefaultValue,
    CustomerStyle,
    ControlHeight
} from "@property/index"
const { Radio } = Antd
const radioConfig = [
    {
        label:"样式属性",
        attrName:"STYLE_CONFIG",
        children:[
            {
                label:"标签宽度",
                attrName:"LABEL_WIDTH",
                value:"53px",
                render(){
                    return <LabelWidth/>
                },
            },{
                label:"控件宽度",
                attrName:"CONTROL_WIDTH",
                value:"300px",
                render(){
                    return <ControlWidth/>
                }
            },{
                label:"控件高度",
                attrName:"CONTROL_HEIGHT",
                value:"40px",
                render(){
                    return <ControlHeight></ControlHeight>
                }
            },{
                label:"自定义样式",
                attrName:"CUSTOMER_STYLE",
                render(){
                    return <CustomerStyle></CustomerStyle>
                }
            }
        ]
    },{
        label:"基本属性",
        attrName:"BASIS_CONFIG",
        children:[
            {
                label:"标签名",
                attrName:"LABEL_NAME",
                value:"单选框",
                render(){
                    return <LabelName/>
                }
            },{
                label:"默认值",
                attrName:"DEFAULT_VALUE",
                value:"",
                render(){
                    return <DefaultValue></DefaultValue>
                }
            }
        ]
    }
]

export default radioConfig