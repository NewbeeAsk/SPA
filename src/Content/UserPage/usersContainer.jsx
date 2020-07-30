import React from "react";
import {connect} from "react-redux";
import {
    follow, followThunkCreator, getUsersThunkCreator, onPageChangedThunkCreator,
    setCurrentPage,
    setIsFetching,
    setTotalUsers,
    setUsers, toggleFollowingProgress,
    unfollow, unfollowThunkCreator
} from "../../redux/usersReducer";
import Users from "./userComponents/Users";
import Loader from "./userComponents/Loader";

class UsersAPIComponent extends React.Component {

    componentDidMount = () => {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
            }

    onPageChanged = (pageNumber, pageSize) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Loader/>: <Users totalUsersCount={this.props.totalUsersCount}
                                                            onPageChanged={this.onPageChanged}
                                                            pageSize={this.props.pageSize}
                                                            currentPage={this.props.currentPage}
                                                            Users={this.props.Users}
                                                           follow={this.props.follow}
                                                           unfollow={this.props.unfollow}
                                                           toggleFollowingProgress={this.props.toggleFollowingProgress}
                                                           followingInProgress={this.props.followingInProgress}
                                                           unfollowThunkCreator={this.props.unfollowThunkCreator}
                                                           followThunkCreator={this.props.followThunkCreator}
                />}

            </>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        Users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const UsersContainer = connect(mapStateToProps,
    {
        follow, unfollow, setUsers, setTotalUsers, setCurrentPage, setIsFetching, toggleFollowingProgress, getUsersThunkCreator, followThunkCreator,
        unfollowThunkCreator
    })(UsersAPIComponent);

export default UsersContainer;