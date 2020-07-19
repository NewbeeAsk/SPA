import React from "react";

let SETUSERS = 'SETUSERS';
let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';

let initialState = {
        usersData:[]

};

const usersReducer = (state = initialState, action) => {

    switch(action.type){
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
        case SETUSERS:{
            return { ...state, usersData: [...action.users]}
        }
        default:
            return state;

    }
}
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SETUSERS, users})
export default usersReducer;

