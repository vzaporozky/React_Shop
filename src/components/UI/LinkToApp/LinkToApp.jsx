import React, {useState} from "react";
import classes from './LinkToApp.module.css';

const LinkToApp = (props) => {

    return(
        <div className={classes.app} onClick={props.onClick}>
            <div className={classes.block_img}><img src={props.src} alt="" /></div>
            <div className={classes.text}>
                <h3>{props.name}</h3>
            </div>

        </div>
    )
}

export default LinkToApp;