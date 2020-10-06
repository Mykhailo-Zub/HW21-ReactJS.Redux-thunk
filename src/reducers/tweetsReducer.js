const initialStore = [];

const tweetsReducer = (store = initialStore, action) => {
    switch (action.type) {
        case "UPDATE_TWEETS": {
            const currentAuthor = store.find(
                (el) => el?.author?.name === action?.author
            );
            return [...action.tweets];
        }
        default:
            return initialStore;
    }
};

export default tweetsReducer;
