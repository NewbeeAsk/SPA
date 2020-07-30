import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, setProfileThunk, setStatusThunk} from "../../redux/postsReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/witAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 9382;
        }
        this.props.setProfileThunk(userId);
        this.props.getStatusThunk(userId);
    }

    render() {
        debugger
        return(
            <Profile {...this.props} isAuth={this.props.isAuth} status={this.props.status} setStatusThunk={this.props.setStatusThunk} profile={this.props.state.profilePage.profile}/>
        )
    }
}
let mapStateToProps = (state) => ({
    state,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
});


export default compose(connect(mapStateToProps,{setProfileThunk, getStatusThunk, setStatusThunk}), withRouter, withAuthRedirect)(ProfileContainer);