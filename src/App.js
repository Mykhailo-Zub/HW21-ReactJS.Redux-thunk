import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
    HashRouter as Router,
    NavLink,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import "./App.css";
import Tweets from "./components/Tweets";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import AddTweet from "./components/AddTweet";

const App = (props) => {
    const { users, tweets, getUsers, getTweets, dispatch } = props;

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    useEffect(() => {
        getTweets();
    }, [getTweets]);

    return (
        <Router>
            <div className="header-wrapper">
                <nav className="header">
                    <NavLink to="/users" exact activeClassName="selected">
                        Users
                    </NavLink>
                    <NavLink to="/adduser" exact activeClassName="selected">
                        Add User
                    </NavLink>
                    <NavLink to="/tweets" exact activeClassName="selected">
                        Tweets
                    </NavLink>
                    <NavLink to="/addtweet" exact activeClassName="selected">
                        Add tweet
                    </NavLink>
                </nav>
            </div>
            <div className="content-wrapper">
                <Switch>
                    <Route path="/users" exact component={Users}></Route>
                    <Route path="/adduser" exact component={AddUser} />
                    <Route path="/tweets" exact component={Tweets}></Route>
                    <Route path="/addtweet" exact component={AddTweet} />
                    <Route
                        path="/"
                        exact
                        render={() => <Redirect to="/users" />}
                    ></Route>
                </Switch>
            </div>
        </Router>
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

export default connect(mapState, mapDispatch)(App);
