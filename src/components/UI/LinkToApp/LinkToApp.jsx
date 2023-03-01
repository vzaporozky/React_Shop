import React, {useState} from "react";
import {Link} from 'react-router-dom';
import classes from './LinkToApp.module.css';

const LinkToApp = (props) => {
    const [items, setItems] = useState(false);
    const handleMouseEnter = () => {
        setItems(true)
    };

    const handleMouseLeave = () => {
        setItems(false);
    };

    return(
        <Link to={props.to} className={classes.app} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div><img src={props.src} alt="" /></div>
            <div className={classes.text}>
                <h3>{props.nameApp}</h3>
            </div>

        </Link>
    )
}

export default LinkToApp;