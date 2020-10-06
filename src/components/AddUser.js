import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    button: {
        fontSize: "20px",
        width: "900px",
        margin: "20px auto",
        display: "flex",
    },
    formControl: {
        margin: "20px auto",
        minWidth: 120,
        width: 900,
        display: "flex",
    },
    textField: {
        margin: "20px auto",
        minWidth: 120,
        width: 900,
        display: "flex",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const AddUser = () => {
    const URL = window.location.origin + window.location.pathname;
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [nickname, setNickname] = useState("");

    const classes = useStyles();

    const postCreate = async () => {
        if (name && avatar && nickname) {
            axios.post("http://domer.tech:9999/users", {
                name: name,
                username: `@${nickname}`,
                avatar: avatar,
            });
            setName("");
            setAvatar("");
            setNickname("");
            window.location.assign(`${URL}`);
        } else alert("Please enter user info");
    };

    return (
        <div className="addUser__form">
            <TextField
                id="outlined-helperText"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                className={classes.textField}
            />
            <TextField
                id="outlined-helperText"
                label="Avatar"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                variant="outlined"
                className={classes.textField}
            />
            <TextField
                id="outlined-helperText"
                label="Nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                variant="outlined"
                className={classes.textField}
            />
            <Button
                variant="contained"
                className={classes.button}
                endIcon={<SendIcon />}
                onClick={postCreate}
            >
                Add user
            </Button>
        </div>
    );
};

const mapState = (state) => {
    return {
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
        dispatch,
    };
};

export default connect(mapState, mapDispatch)(AddUser);
