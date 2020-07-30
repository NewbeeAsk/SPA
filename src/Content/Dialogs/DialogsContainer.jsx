import React from "react";
import Dialogs from "./Dialogs";
import {changeMessageActionCreator, sendMessageCreator} from "../../redux/messagesReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/witAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        myDialogs: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => {
            dispatch(sendMessageCreator(message));
        }
    }
}
const DialogsContainer = compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs);
export default DialogsContainer;