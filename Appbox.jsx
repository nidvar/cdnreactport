class Appbox extends React.Component{
    render(){
        return(
            <div className='appbox'>
                {/* start here */}

                <img src={this.props.image}/>
                <br/>
                <p>{this.props.text}</p>

                {/* end here */}
            </div>
        )
    }
}