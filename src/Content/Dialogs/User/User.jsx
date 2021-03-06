import React from "react";
import {NavLink} from "react-router-dom";

const User = (props) => {
    let path="/dialogs/" + props.id;
    return(
        <div>
            <NavLink to={path}>
                <img src = {props.image}/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default User;