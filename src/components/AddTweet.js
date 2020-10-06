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

const AddTweet = ({ users }) => {
    const URL = window.location.origin + window.location.pathname;
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");

    const classes = useStyles();

    const postCreate = async () => {
        if (author && image && content) {
            axios.post("http://domer.tech:9999/tweets", {
                userId: author,
                content: content,
                image: image,
            });
            setAuthor("");
            setImage("");
            setContent("");
            window.location.assign(`${URL}#/tweets`);
        } else alert("Please enter post info");
    };

    return (
        <div className="addUser__form">
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                    Select user
                </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    label="Select user"
                >
                    {users?.map((el) => {
                        return <MenuItem value={el?.id}>{el.name}</MenuItem>;
                    })}
                </Select>
            </FormControl>
            <TextField
                id="outlined-helperText"
                label="Post image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                variant="outlined"
                className={classes.textField}
            />
            <TextField
                id="outlined-helperText"
                label="Post text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                variant="outlined"
                className={classes.textField}
            />
            <Button
                variant="contained"
                className={classes.button}
                endIcon={<SendIcon />}
                onClick={postCreate}
            >
                Add Post
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

export default connect(mapState, mapDispatch)(AddTweet);
