import React from "react";


let Users = (props) => {

    if (props.Users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    name: 'Nikita',
                    image: 'https://static.ngs.ru/news/99/preview/d612b9e100f0a84692566d54e66aa5aa051eecb3_824.jpg',
                    info: 'бла бла бла бла',
                    status: 'Follow',
                    followed: false
                },
                {
                    id: 2,
                    name: 'Igor',
                    image: 'https://www.meme-arsenal.com/memes/082cf32e5a8846ae89628b2780595cf1.jpg',
                    info: 'бла бла бла бла',
                    status: 'Follow',
                    followed: false
                },
                {
                    id: 3,
                    name: 'Artur',
                    image: 'https://i.ytimg.com/vi/th1DNMJFXQ8/maxresdefault.jpg',
                    info: 'бла бла бла бла',
                    status: 'Follow',
                    followed: true
                }
            ]
        )
    }
    return (
        <div>
        {
            props.Users.map( el =>
            <div key={el.id}>
                <span>
                    <div>
                        <img src={el.image}/>
                    </div>
                    <div>
                        { el.followed
                            ? <button onClick={ () => {props.onUnFollow(el.id) } }>Unfollow</button>
                            : <button onClick={ () => {props.onFollow(el.id) } }>Follow</button>
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
    )
};

export default Users;