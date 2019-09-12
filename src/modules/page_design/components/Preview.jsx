class Preview extends React.Component {
    render(){
        return <div id="page-preview"
            style={{display:this.props.status=="2" ? "block" : "none"}}>
            page-preview
        </div>
    }
}

export default Preview