import React from "react";
import Dialogs from "./Dialogs";
import {changeMessageActionCreator, sendMessageCreator} from "../../redux/messagesReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        myDialogs: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeMessage: (textMessage) => {
            let action = changeMessageActionCreator(textMessage);
            dispatch(action);
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;