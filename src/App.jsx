import AttrConfig from "@modules/attr_config/AttrConfig"
import ControlStore from "@modules/control_store/ControlStore"
import PageDesign from "@modules/page_design/PageDesign"
import Store from "@store/index"
class FlowHYS extends React.Component {
    render(){
        return <div id="root-element">
            <ControlStore></ControlStore>
            <PageDesign></PageDesign>
            <AttrConfig></AttrConfig>
            <div id={"editor-container"}></div>
        </div>
    }
}

export default FlowHYS