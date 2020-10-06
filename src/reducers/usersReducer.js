const initialStore = [];

export default (store = initialStore, action) => {
    switch (action.type) {
        case "UPDATE_USERS": {
            return [...action.users];
        }
        default:
            return store;
    }
};
