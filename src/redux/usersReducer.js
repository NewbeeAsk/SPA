import {usersAPI as userAPI, usersAPI} from "../API/API";

const SETUSERS = 'SETUSERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const IS_FETCHING ='IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS ='TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 2,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true,}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false,}
                    }
                    return u;
                })
            }
        case SETUSERS: {
            return {...state, usersData: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case IS_FETCHING: {
            debugger;
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            debugger;
            return {...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id != action.userId)]
            }
        }

        default:
            return state;

    }
}
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SETUSERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsers = (totalUsersCount) => ({type: TOTAL_USERS_COUNT, totalUsersCount})
export const setIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const getUsersThunkCreator = (currentPage, pageSize) => {

    return (dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsers(data.totalCount));
        })
        }
}

export const unfollowThunkCreator = (id) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        userAPI.unFollowUsers(id)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unfollow(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            });
    }
}
export const followThunkCreator = (id) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        userAPI.followUsers(id)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(follow(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            });
    }
}

export default usersReducer;

