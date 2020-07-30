import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setMyProfile, unSetLogIn} from "../redux/authReducer";



class HeaderContainer extends React.Component{

    componentDidMount(props){

        this.props.setMyProfile();
        }
    render() {
        return(
        <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})



export default connect(mapStateToProps,{setMyProfile, unSetLogIn})(HeaderContainer);


