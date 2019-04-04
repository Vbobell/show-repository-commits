import { GET_COMMITS } from '../actions/type';

const initialState = {
    "commits": [{
        "commit": {
            "author": {
                "name": ""
            },
            "message": ""
        },
        "sha": 0
    }]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COMMITS:
            return {
                ...state,
                commits: action.commits
            };
        default:
            return state;
    }
}