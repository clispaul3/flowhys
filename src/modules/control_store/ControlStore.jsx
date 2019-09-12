import allControls from "./config"
import Pubsub from "@utils/eventTool/Pubsub"
import * as actionTypes from "@store/actionType"
import { ADD_CONTROL } from "@utils/eventTool/eventName"
import { createNewControl } from "@utils/control"
import Store from "@store"
const { Icon,Menu } = Antd
const { SubMenu } = Menu
class ControlStore extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
        }
    }
    componentDidMount(){
        document.querySelector(".control-store").oncontextmenu = function(){
            return false
        }
        const targetArea = document.getElementById("page-designer")
        const controls = document.querySelectorAll(".control-store li.ant-menu-item")
        controls.forEach(control=>{
            control.draggable = true
            control.onselectstart = () => false
             dragula([control, targetArea],{copy:true})
                .on('drop', function () {
                    $("#page-designer>span.label").remove()
                    $("#page-designer>i.anticon").remove()
                    const newControl = createNewControl("DEFAULT",control.id)
                    const { controlId,controlKey } = newControl
                    Store.dispatch({type:actionTypes.ADD_CONTROL,newControl})
                    Store.dispatch({type:actionTypes.SET_CURRENT_CONTROL_ID,controlId})
                    Pubsub.publish(ADD_CONTROL,{
                        controlId,
                        controlKey
                    })
            })
        })
    }
    render(){
        return (
            <div className="control-store">
                <h4>控件类型</h4>
                <Menu
                    mode="inline"
                    theme="light"
                    forceSubMenuRender={true}
                    inlineCollapsed={this.state.collapsed}>
                    {allControls.map(group=>{
                        if(group.children.length==0){
                            return <Menu.Item key={group.label}>
                            <Icon type="pie-chart" />
                                <span>{group.label}</span>
                            </Menu.Item>
                        }else{
                            return <SubMenu key={group.label}
                                title={
                                    <span>
                                    <Icon type="mail" />
                                    <span>{group.label}</span>
                                    </span>
                                }>
                                    {group.children.map(control=>{
                                    return <Menu.Item key={control.label} 
                                    ref="currentControl"
                                    id={control.id}>
                                    <Icon type={control.icon}/>
                                        <span className="label">{control.label}</span>
                                    <p className="modal-control" data-id={control.id}></p>
                                    </Menu.Item>
                                })}
                            </SubMenu>
                        }
                    })}
                </Menu>
            </div>
        )
    }
}

export default ControlStore