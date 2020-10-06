import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import usersReducer from "../reducers/usersReducer";
import tweetsReducer from "../reducers/tweetsReducer";

const store = createStore(
    combineReducers({
        users: usersReducer,
        tweets: tweetsReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
