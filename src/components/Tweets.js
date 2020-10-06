import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Tweet from "./Tweet";

const Tweets = ({ tweets, users, getUsers, getTweets }) => {
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    useEffect(() => {
        getTweets();
    }, [getTweets]);

    return (
        <>
            {tweets?.map((el, i) => {
                return (
                    <Tweet
                        key={el?.id}
                        userId={el?.userId}
                        users={users}
                        date={`${new Date(2020, 8, i).toLocaleDateString()}`}
                        content={el?.content}
                        image={el?.image}
                    />
                );
            })}
        </>
    );
};

const mapState = (state) => {
    return {
        tweets: state.tweets,
        users: state.users,
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

export default connect(mapState, mapDispatch)(Tweets);
