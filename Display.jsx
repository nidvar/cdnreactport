class Display extends React.Component{
    render(){
        return(
            <div className='display'>
                {/* start here */}

                <Header />
                {/* {body} */}

                    <Statement text='Major Projects'/>
                    <div className='body'>
                        <div className='appdiv major'><a href='#'><Appbox image='images/weather.png' text='E-Commerce' /></a></div>
                        <div className='appdiv major'><a href='https://nidvar.github.io/typingtest/'><Appbox image='images/typingtest.png' text='Color Project'/></a></div>
                    </div>

                    <Parallax style_prop='parallax1' />

                    <Statement text='Apps'/>
                    <div className='body'>
                        <div className='appdiv'><a href='https://nidvar.github.io/weather/'><Appbox image='images/weather.png' text='Weather App' /></a></div>
                        <div className='appdiv'><a href='https://nidvar.github.io/landing/'><Appbox image='images/todo_list.png' text='Todo List'/></a></div>
                        <div className='appdiv'><a href='https://nidvar.github.io/games/'><Appbox image='images/games.png' text='Mini Games' /></a></div>
                        <div className='appdiv'><a href='https://nidvar.github.io/typingtest/'><Appbox image='images/typingtest.png' text='Typing Test'/></a></div>
                    </div>

                    <Statement text='Live Websites'/>

                    <div className='bodyweb'>
                        <div className='appdiv'><a href='http://goldenfalafel.com.au/'><Appbox image='images/goldenfalafel.png' /></a></div>
                        <div className='appdiv'><a href='https://www.meadanhomes.com.au/'><Appbox image='images/meadanhomes.png' /></a></div>
                        <div className='blackback appdiv'><a href='http://u4cmartialarts.com.au/'><Appbox image='images/u4c.png' /></a></div>
                        <div className='appdiv'><a href='https://thetaxfactor.com.au/'><Appbox image='images/taxfactor.png' /></a></div>
                        <div className='appdiv'><a href='https://osga.com.au'><Appbox image='images/osga.png' /></a></div>
                        <div className='appdiv blackback'><a href='http://cube4security.com.au/'><Appbox image='images/cube.png' /></a></div>
                        <div className='appdiv'><a href='https://elcoconstructions.com.au/'><Appbox image='images/elco.jpg' /></a></div>
                        <div className='appdiv'><a href='http://intelligentss.com.au/'><Appbox image='images/intelligentss.png' /></a></div>
                    </div>

                {/* {body} */}
                <Footer />

                {/* end here */}
            </div>
        )
    }
}
