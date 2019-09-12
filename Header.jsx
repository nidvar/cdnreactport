class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                {/* start here */}

                <Nav />
                <div className='flex-container'>
                    <Statement text='Web Developement' smalltext='JavaScript | React | Node' style_prop='header-statement'  />
                </div>

                {/* end here */}
            </div>
        )
    }
}