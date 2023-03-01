import React from "react";
import calsses from './MainPage.module.css'
import LinkToApp from '../../components/UI/LinkToApp/LinkToApp'

const MainPage = () => {
    return (
        <div className={calsses.main}>
            <div className={calsses.main_container}>

                <img src="./images/banner_candle.png" alt="" className={calsses.main_banner}/>
                <div className={calsses.home_container}>
                    <LinkToApp 
                        nameApp='Candle 1'
                        to="/ChatGPT"
                        table='2'
                        src='./images/ChatGPT_main.png'
                        description={['This is a simple chat that uses the OpenAI API.e OpenAI API.']}
                    />
                    <LinkToApp 
                        nameApp='Candle 1'
                        to="/ChatGPT"
                        table='2'
                        src='./images/ChatGPT_main.png'
                        description={['This is a simple chat that uses the OpenAI API.e OpenAI API.']}
                    />
                    <LinkToApp 
                        nameApp='Candle 1'
                        to="/ChatGPT"
                        table='2'
                        src='./images/ChatGPT_main.png'
                        description={['This is a simple chat that uses the OpenAI API.e OpenAI API.']}
                    />
                    <LinkToApp 
                        nameApp='Candle 1'
                        to="/ChatGPT"
                        table='2'
                        src='./images/ChatGPT_main.png'
                        description={['This is a simple chat that uses the OpenAI API.e OpenAI API.']}
                    />
                    <LinkToApp 
                        nameApp='Candle 1'
                        to="/ChatGPT"
                        table='2'
                        src='./images/ChatGPT_main.png'
                        description={['This is a simple chat that uses the OpenAI API.e OpenAI API.']}
                    />
                    <LinkToApp 
                        nameApp='Candle 1'
                        to="/ChatGPT"
                        table='2'
                        src='./images/ChatGPT_main.png'
                        description={['This is a simple chat that uses the OpenAI API.e OpenAI API.']}
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default MainPage