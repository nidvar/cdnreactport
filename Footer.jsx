class Footer extends React.Component{
    render(){
        return(
            <div className='footer'>
                {/* start here */}

                <div id='footer-container'>
                    <div className='iconbox'><a href='https://www.facebook.com/'><img src='images/fbicon.png'/></a></div>
                    <div className='iconbox'><a href='https://www.instagram.com/'><img src='images/ticon.png'/></a></div>
                    <div className='iconbox'><a href='https://twitter.com/?lang=en'><img src='images/igicon.png'/></a></div>
                </div>       
                <br/>
                <p className='copyright'>© Copyright 2019 | <a href='https://nidvar.github.io/'>By Nidvar</a></p>

                {/* end here */}
            </div>
        )
    }
}