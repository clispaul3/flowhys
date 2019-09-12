const { Button } = Antd
class Header extends React.Component {
    render(){
        return <div className="design-header">
            <Button type="primary">页面设置</Button>
            <Button type="primary">保存</Button>
        </div>
    }
}

export default Header