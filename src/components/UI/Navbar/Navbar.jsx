import React, {useContext} from "react";
// import {Link} from "react-router-dom";
import cl from './Navbar.module.css';
import Linkto from "../Link/Link";
import { AuthContext } from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const exitButton = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return(
        <div className={cl.navbar}>
            <img src="./images/logo.png" alt="" className={cl.logo} />
            {isAuth
                ?
                    <div className={cl.container}>
                        <Linkto to="/">Home</Linkto>
                        <Linkto to="/about">About</Linkto>
                        <Linkto to="/contacts">Contacts</Linkto>
                        
                        <button onClick={exitButton} className={cl.button}>Log Out</button>
                    </div>
                :
                    ''
            }
        </div>
    )
}

export default Navbar;