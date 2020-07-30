import React from "react";
import {reduxForm} from "redux-form";
import {Field} from "redux-form";

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"} name={"message"} component={"textarea"}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}
const MessageReduxForm = reduxForm({form: "message"})(MessageForm)

const MessageReduxFormContainer = (props) => {
    const onSubmit = (value) => {
        props.sendMessage(value.message)
        console.log(value)
            }
    return <MessageReduxForm onSubmit={onSubmit}/>

}
export default MessageReduxFormContainer;











