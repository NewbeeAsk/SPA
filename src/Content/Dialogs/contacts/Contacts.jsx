import React from "react";
import {NavLink} from "react-router-dom";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
    }
    path="/dialogs/" + this.props.id;
    render() {
        return(
            <div>
               <NavLink to={this.path}>
                   <img src = {this.props.image}/>
                   {this.props.name}
               </NavLink>
            </div>
         )
    }
}

export default Contacts;