import React from 'react';
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";



const Profile = (props) => {

    return (
        <div>
            <ProfileInfo setStatusThunk={props.setStatusThunk} status={props.status} profile={props.profile} userId={props.state.auth.userId}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;