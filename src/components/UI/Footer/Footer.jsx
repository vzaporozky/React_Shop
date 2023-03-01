import React from 'react';
import cl from './Footer.module.css'

const Footer = () => {
    return(
        <div className={cl.footer_container}>
            <div className={cl.footer_blockTop}>
                <div className={cl.footer_column}>
                    <div className={cl.send_email}>
                        <h2>Будь в курсе</h2>
                        <form action="submit" className={cl.form}>
                            <input type="text" placeholder='не работает' className={cl.form_input}/>
                            <button className={cl.form_btn} disabled></button>
                        </form>
                    </div>
                    <div className={cl.social}>
                        <h2>Оставайся на связи</h2>
                        <ul className={cl.list}>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                </div>
                <div className={cl.contact}>
                    <h2>контакты</h2>
                    <p>@gmail.com</p>
                    <p>График работы:</p>
                    <p> пн-вс: 0:00-24:00</p>
                </div>
            </div>
            <div className={cl.footer_blockBottom}>
                работаем уже 100 лет
            </div>
        </div>
    )
}

export default Footer