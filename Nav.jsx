class Nav extends React.Component{
    state={
        one:'ulcontainer'
    }
    handleScroll=()=>{
        window.onscroll=()=>{
            if (window.scrollY==0) {
                this.setState({
                    one:'ulcontainer'
                })
              }else{
                this.setState({
                    one:'ulcontainer sticky'
                })
              }
        } 
    }
    render(){
        return(
            <div>
                {this.handleScroll()}
                <div className='nav'>
                    <ul className={this.state.one}>
                        <li><a href='#'>APPS</a></li>
                        <li><a href='#'>WEBSITES</a></li>
                        <li><a href='#'>ABOUT</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}