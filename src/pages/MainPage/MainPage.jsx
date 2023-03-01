import React from "react";
import calsses from './MainPage.module.css'
import LinkToApp from '../../components/UI/LinkToApp/LinkToApp'
import arrayCandles from '../../items/Items'
import { useHistory } from "react-router-dom";

const MainPage = () => {
    const router = useHistory()

    return (
        <div className={calsses.main}>
            <div className={calsses.main_container}>

                <img src="./images/banner_candle.png" alt="" className={calsses.main_banner}/>
                <div className={calsses.home_container}>
                    {arrayCandles.map((el, index) =>{
                        return(
                            <LinkToApp 
                                name={el.name}
                                to="/ChatGPT"
                                src={el.img}
                                description={el.describe}
                                id={index}
                                onClick={() => router.push(`/candles/${el.id}`)}
                            />
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default MainPage