class Display extends React.Component{
    render(){
        return(
            <div className='display'>
                {/* start here */}

                <Header />
                {/* {body} */}


                        
                    <Statement text='App Portfolio'/>
                    <div className='body'>
                        <div className='appdiv'><a href='https://nidvar.github.io/weather/'><Appbox image='images/weather.png' text='Weather App' /></a></div>
                        <div className='appdiv'><a href='https://nidvar.github.io/landing/'><Appbox image='images/todo_list.png' text='Todo List'/></a></div>
                        <div className='appdiv'><Appbox image='images/games.png' text='Games App' /></div>
                        <div className='appdiv'><a href='https://nidvar.github.io/typingtest/'><Appbox image='images/typingtest.png' text='Typing Test'/></a></div>
                    </div>
                    

                    <Parallax style_prop='parallax1' />



                {/* {body} */}
                <Footer />

                {/* end here */}
            </div>
        )
    }
}