/**
 * 属性配置的数据是从redux中读出来的
 */
import Pubsub from "@utils/eventTool/Pubsub"
import { ADD_CONTROL,DELETE_CONTROL,TOGGLE_CONTROL } from "@utils/eventTool/eventName"
import { getCurrentControl } from "@store/getters"
const { Tag,Menu,Icon } = Antd
const { SubMenu } = Menu

class AttrConfig extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentControlId:0
        }
    }
    componentDidMount(){
        Pubsub.subscribe(ADD_CONTROL, data => {
            const { controlId } = data
            this.setState({currentControlId:controlId})
        })
        Pubsub.subscribe(DELETE_CONTROL, data => {
            this.setState({currentControlId:0})
        })
        Pubsub.subscribe(TOGGLE_CONTROL, data => {
            const { controlId } = data
            this.setState({currentControlId:controlId})
        })
    }
    render(){
        let config = null
        if(this.state.currentControlId){
            config = getCurrentControl()
        }
        return <div className="attr-config">
            <Tag color="#f50">{"控件属性配置"}</Tag>
            {config && config.property ?
                <Menu mode="inline"
                    theme="light"
                    defaultOpenKeys={["STYLE_CONFIG","BASIS_CONFIG"]}
                    forceSubMenuRender={true}>
                    {config.property.map(item => {
                        return item.children.length==0 ?
                            <Menu.Item key={item.attrName}>
                            <Icon type="pie-chart" />
                                <span>{item.label}</span>
                        </Menu.Item>
                        : <SubMenu key={item.attrName}
                            title={<span>{item.label}</span>}>
                                {item.children.map(attr=>{
                                    return <Menu.Item key={attr.label}>
                                        <div>
                                            <p className="label">
                                                <Tag color="volcano">
                                                {attr.label}</Tag>
                                            </p>
                                            {attr.render()}
                                        </div>
                                    </Menu.Item>
                                })}
                        </SubMenu>
                    })}
                </Menu>
            : null} 
        </div>
    }
}
export default AttrConfig