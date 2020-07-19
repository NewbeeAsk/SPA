import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";



const mapStateToProps = (state) => {

    return {
        Users: state.usersPage.usersData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userId) => {

            dispatch(followAC(userId));
        },
        onUnFollow: (userId) => {

            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;