class Display extends React.Component{
    render(){
        return(
            <div className='display'>
                {/* start here */}

                <Header />
                {/* {body} */}


                        
                    <Statement text='App Portfolio'/>
                    <div className='body'>
                        <Appbox image='images/weather.png' text='Weather App' />
                        <Appbox image='images/todo_list.png' text='Todo List'/>
                        <Appbox image='images/games.png' text='Games App' />
                        <Appbox image='images/typingtest.png' text='Typing Test'/>
                    </div>
                    

                    <Parallax style_prop='parallax1' />



                {/* {body} */}
                <Footer />

                {/* end here */}
            </div>
        )
    }
}