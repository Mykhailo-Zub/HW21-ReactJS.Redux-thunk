import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import User from "./User";

const Users = ({ getUsers, users }) => {
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <div className="users__wrapper">
            <h2>Users</h2>
            <div className="users">
                {users?.map((el) => {
                    return (
                        <User
                            name={el.name}
                            username={el.username}
                            avatar={el.avatar}
                            key={el.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {
        users: state.users,
        tweets: state.tweets,
    };
};

const mapDispatch = (dispatch) => {
    return {
        async getUsers() {
            const users = await axios.get("http://domer.tech:9999/users");
            dispatch({
                type: "UPDATE_USERS",
                users: users.data.data,
            });
        },
        async getTweets() {
            const tweets = await axios.get("http://domer.tech:9999/tweets");
            dispatch({
                type: "UPDATE_TWEETS",
                tweets: tweets.data.data,
            });
        },
        dispatch,
    };
};

export default connect(mapState, mapDispatch)(Users);
