const { Input } = Antd
class IP extends React.Component {
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        const { property } = this.props
        if(!property){
            return null
        }
        return <div>
            <Input></Input>
        </div>
    }
}

export default IP