class Statement extends React.Component{
    render(){
        return(
            <div className='statement-global'>
                {/* start here */}

                

                <div className={this.props.style_prop}>
                    <h1>{this.props.text}</h1>
                    <p>{this.props.smalltext}</p>
                </div>
                


                {/* end here */}
            </div>
        )
    }
}