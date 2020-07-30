import React from 'react';
import s from './Profilnfo.module.css';
import Loader from "../../../UserPage/userComponents/Loader";
import ProfileStatus from "../../PorfileStatus";


const ProfileInfo = (props) => {

        if(!props.profile){
            return <Loader/>
        }
        return (
        <div>
            <div className={s.avatar}>
                <img src='https://avatarko.ru/img/kartinka/2/cherep_ogon_1676.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} setStatusThunk={props.setStatusThunk} userId={props.userId}/>
            </div>
        </div>
    )
}

export default ProfileInfo;