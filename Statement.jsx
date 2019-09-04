class Statement extends React.Component{
    render(){
        return(
            <div>
                {/* start here */}

                

                <div className='statement1'>
                    <h1>{this.props.bigheading}</h1>
                    <h1>{this.props.heading}</h1>
                    <h4>{this.props.blurb}</h4>
                </div>
                


                {/* end here */}
            </div>
        )
    }
}