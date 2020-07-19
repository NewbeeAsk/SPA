import React from 'react';
import s from './Profilnfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.avatar}>
                <img src='https://avatarko.ru/img/kartinka/2/cherep_ogon_1676.jpg'></img>
            </div>

            <div className={s.descriptionBlock}>
                ava+desription
            </div>
        </div>
    );
}

export default ProfileInfo;