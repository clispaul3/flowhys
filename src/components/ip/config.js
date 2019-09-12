const { Input,Select } = Antd
import  { LabelWidth } from "@property/index"
const config = [
    {
        label:"样式属性",
        children:[
            {
                label:"标签宽度",
                render:()=>{
                    return <LabelWidth
                        defaulVal={100}>
                    </LabelWidth>
                },
                validator:[],
                default:"100"
            },
            {
                label:"控件宽度",
                render:()=>{
                    return <Input></Input>
                },
                validator:[]
            },{
                label:"边框设置",
                render:()=>{
                    return <Select defaultValue="hasBorder" style={{ width: "100%" }}>
                        <Option value="hasBorder">是</Option>
                        <Option value="noBorder">否</Option>
                    </Select>
                },
                validator:[]
            },{
                label:"标签颜色",
                render:()=>{
                    return <Input></Input>
                },
            },{
                label:"备注颜色",
                render:()=>{
                    return <Input></Input>
                },
            }
        ]
    },{
        label:"基本属性",
        children:[
            {
                label:"标签名",
                render:()=>{
                    return <Input></Input>
                },
                validator:[]
            },
            {
                label:"列名",
                render:()=>{
                    return <Input></Input>
                },
                validator:[]
            },{
                label:"默认值",
                render:()=>{
                    return <Input></Input>
                },
                validator:[]
            },{
                label:"文本备注",
                render:()=>{
                    return <Input></Input>
                },
                validator:[]
            },{
                label:"是否显示",
                render:()=>{
                    return <Select defaultValue="0" style={{ width: "100%" }}>
                        <Option value="0">是</Option>
                        <Option value="1">否</Option>
                        <Option value="2">关联显示</Option>
                        <Option value="3">按页面模式显示</Option>
                    </Select>
                },
                validator:[]
            },{
                label:"是否只读",
                render:()=>{
                    return <Select defaultValue="0" style={{ width: "100%" }}>
                        <Option value="0">是</Option>
                        <Option value="1">否</Option>
                        <Option value="2">关联只读</Option>
                    </Select>
                },
                validator:[]
            },{
                label:"是否必填",
                render:()=>{
                    return <Select defaultValue="0" style={{ width: "100%" }}>
                        <Option value="0">是</Option>
                        <Option value="1">否</Option>
                        <Option value="2">关联必填</Option>
                    </Select>
                },
                validator:[]
            },{
                label:"地址类型",
                render:()=>{
                    return <Select defaultValue="0" style={{ width: "100%" }}>
                        <Option value="0">IP地址</Option>
                        <Option value="1">子网掩码</Option>
                    </Select>
                }
            },{
                label:"提示信息",
                render:()=>{
                    return <Input></Input>
                },
            }
        ]
    },{
        label:"IP分组",
        children:[
            {
                label:"分组名称",
                render:()=>{
                    return <Input></Input>
                },
            },{
                label:"标记类型",
                render:()=>{
                    return <Select defaultValue="0" style={{ width: "100%" }}>
                        <Option value="0">开始IP</Option>
                        <Option value="1">结束IP</Option>
                    </Select>
                },
            }
        ]
    },{
        label:"系统变量",
        children:[
            {
                label:"变量",
                render:()=>{
                    return <Select defaultValue="0" style={{ width: "100%" }}>
                        <Option value="0">获取客户端ip地址</Option>
                    </Select>
                }
            },{
                label:"变量状态",
                render:()=>{
                    return <Select defaultValue="0" style={{ width: "100%" }}>
                        <Option value="0">新增</Option>
                        <Option value="1">修改</Option>
                        <Option value="2">删除</Option>
                        <Option value="3">详情</Option>
                    </Select>
                }
            },{
                label:"重新获取系统变量",
                render:()=>{
                    return <Select defaultValue="0" style={{ width: "100%" }}>
                        <Option value="0">是</Option>
                        <Option value="1">否</Option>
                    </Select>
                }
            },{
                label:"后台取最新保存",
                render:()=>{
                    return <Select defaultValue="0" style={{ width: "100%" }}>
                        <Option value="0">是</Option>
                        <Option value="1">否</Option>
                    </Select>
                }
            }
        ]
    },{
        label:"联动配置",
        children:[
            {
                label:"数据类型",
                render:()=>{
                    return <Select defaultValue="0" style={{ width: "100%" }}>
                        <Option value="0">数据源</Option>
                        <Option value="1">搜索规则</Option>
                    </Select>
                }
            },{
                label:"关联表名",
                render:()=>{
                    return <Input></Input>
                }
            },{
                label:"查询字段",
                render:()=>{
                    return <Input></Input>
                }
            },{
                label:"显示字段",
                render:()=>{
                    return <Input></Input>
                }
            }
        ]
    },{
        label:"高级校验",
        children:[]
    }
]

export default config