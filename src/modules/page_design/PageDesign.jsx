import Header from "./components/Header"
import Preview from "./components/Preview"
import Designer from "./components/Designer"
import { autobind } from "core-decorators"


const { Tabs } = Antd
const { TabPane } = Tabs

class PageDesign extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentPage:"1"
        }
    }
    @autobind
    renderPage(key){
        this.setState({currentPage:key})
    }
    render(){
        return <div className="page-design">
            <Header></Header>
            <Tabs defaultActiveKey="1" 
                onChange={this.renderPage}>
                <TabPane tab="设计器" key="1"></TabPane>
                <TabPane tab="预览" key="2"></TabPane>
            </Tabs>
            <Designer status={this.state.currentPage}/>
            <Preview status={this.state.currentPage}/>
        </div>
    }
}

export default PageDesign