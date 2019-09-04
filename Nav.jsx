const styles={
    textDecoration: 'none',
    color:'white'
}
class Nav extends React.Component{
    render(){
        return(
            <div>
                <div className='nav1'>
                    <ul>
                        <li><a href='#' style={styles}>APPS</a></li>
                        <li><a href='#' style={styles}>SAMPLE</a></li>
                        <li><a href='#' style={styles}>RESUME</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}