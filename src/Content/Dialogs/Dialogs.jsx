import React from "react";
import s from './Dialogs.module.css'
import Contacts from "./contacts/Contacts";
import Messages from "./messages/Messages";
import User from "./User/User"

const Dialogs = (props) => {



    let contactsArray = props.myDialogs.dialogsData.map(el => (<Contacts id={el.id} name={el.name} image={el.image}/>))
    let messageArray = props.myDialogs.messageData.map(elem => (<Messages message={elem.message}/>))
    let userArray = props.myDialogs.userData.map(element => (<User id={element.id} name={element.name} image={element.image}/>))

    let newMessage = React.createRef();



    let sendMessage = () => {
        props.sendMessage();
    }

    let changeMessage = () => {
        let textMessage = newMessage.current.value;
        props.changeMessage(textMessage);
    }



    return (
        <div className={s.wrapper} >

            <div>
                {userArray}
            </div>
            <div>
                {messageArray}
                <textarea ref={newMessage} onChange={changeMessage} value={props.myDialogs.newMessage}></textarea>
                <button onClick={sendMessage}>Send message</button>
            </div>
            <div>

            </div>
            <div>
                {contactsArray}
            </div>

        </div>
    )
}

export default Dialogs;