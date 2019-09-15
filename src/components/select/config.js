/**
 * 按钮控件的默认配置属性
 */
import  { 
    LabelWidth,
    ControlWidth,
    LabelName,
    CustomerStyle,
    ControlHeight
} from "@property/index"
const selectConfig = [
    {
        label:"样式属性",
        attrName:"STYLE_CONFIG",
        children:[
            {
                label:"标签宽度",
                attrName:"LABEL_WIDTH",
                value:"50px",
                render(){
                    return <LabelWidth/>
                },
            },{
                label:"控件宽度",
                attrName:"CONTROL_WIDTH",
                value:"145px",
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
                value:"下拉框",
                render(){
                    return <LabelName/>
                }
            }
        ]
    }
]

export default selectConfig