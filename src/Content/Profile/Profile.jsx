import React from 'react';
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";



const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;