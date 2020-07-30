import React from "react";
import s from './Dialogs.module.css'
import Contacts from "./contacts/Contacts";
import User from "./User/User";
import Messages from "./messages/Messages";
import MessageReduxFromContainer from "./messages/messageForm";

class Dialogs extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <div>
                    {this.props.myDialogs.userData.map(element => (
                        <User id={element.id} name={element.name} image={element.image}/>))}
                </div>
                <div>
                    {this.props.myDialogs.messageData.map(elem => (<Messages message={elem.message}/>))}
                </div>
                <div>
                    <MessageReduxFromContainer sendMessage={this.props.sendMessage}/>
                </div>
                <div>
                    {this.props.myDialogs.dialogsData.map(el => (<Contacts id={el.id} name={el.name} image={el.image}/>))}
                </div>

            </div>
        )
    }

}

export default Dialogs;