import React from 'react';
import p from './Profile.module.css'
import Myposts from './My posts/Myposts';

const Profile = () => {
    return (
        <div className={p.content}>
            <div>
                <img src='https://ic.pics.livejournal.com/andy_travelua/11986810/4077487/4077487_original.jpg' />
            </div>
            <Myposts />
        </div>
    );
}

export default Profile;