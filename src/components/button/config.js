/**
 * 按钮控件的默认配置属性
 */
import  { 
    LabelWidth,
    ControlWidth,
    LabelName,
    ButtonName,
    CustomerStyle
} from "@property/index"
const buttonConfig = [
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
                value:"按钮",
                render(){
                    return <LabelName/>
                }
            },{
                label:"按钮名称",
                attrName:"BUTTON_NAME",
                value:"按钮",
                render(){
                    return <ButtonName/>
                }
            }
        ]
    }
]

export default buttonConfig