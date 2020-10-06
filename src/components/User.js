import React from "react";

import style from "./Users.module.css";

const User = ({ name, avatar, username }) => {
    return (
        <div className={style.user__wrapper}>
            <div className={style.avatar}>
                <img src={avatar} alt="Avatar" />
            </div>
            <div className={style.name__wrapper}>
                <div className={style.name}>Name: {name}</div>
                <div className={style.username}>Nickname: {username}</div>
            </div>
        </div>
    );
};

export default User;
