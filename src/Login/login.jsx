import React from "react";
import {reduxForm} from "redux-form";
import {Field} from "redux-form";
import {setLogIn} from "../redux/authReducer";
import {connect} from "react-redux";

const LoginForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> Remember me
            </div>
            <div>
                <button placeholder={"login"}>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
const onSubmit = (values) => {
    debugger
    props.setLogIn(values.login, values.password, values.rememberMe)


}
        return <LoginReduxForm onSubmit={onSubmit}/>

}
let mapStateToProps = (state) => ({

});
export const LoginContainer = connect(mapStateToProps, {setLogIn})(Login);









