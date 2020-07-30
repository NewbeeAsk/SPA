import styles from "../UsersAPIComponent.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {usersAPI as userAPI} from "../../../API/API";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return (<span className={props.currentPage === p && styles.selectedPage} onClick={() => {
                    props.onPageChanged(p)
                }}>{p}</span>)
            })}
        </div>
        {
            props.Users.map(el =>
                <div key={el.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + el.id}>
                            <img
                                src={el.photos.small != null ? el.photos.small : "https://trymobile.ru/MobileSerial/Myltserials/Anime/Boginya_blagoslovlyaet_etot_prekrasnyj_mir/1/2.jpg"}/>
                        </NavLink>
                        </div>
                    <div>
                        {el.followed
                            ? <button disabled={props.followingInProgress.some(id=>id === el.id)} onClick={() => {
                                props.unfollowThunkCreator(el.id);
                            }}> Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id=>id === el.id)} onClick={() => {
                                props.followThunkCreator(el.id);
                            }}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                       <div>{el.name}</div>
                        <div></div>
                    </span>
                    <span>
                       <div></div>
                       <div></div>
                    </span>
                </span>
                </div>
            )
        }
    </div>

}
export default Users;