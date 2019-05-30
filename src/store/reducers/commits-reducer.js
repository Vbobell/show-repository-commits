import { GET_COMMITS } from '../actions/type';

const initialState = {
    "repoName": "",
    "commits": [{
        "commit": {
            "author": {
                "name": ""
            },
            "message": ""
        },
        "sha": 0
    }],
    "commitsOfPage": 30
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COMMITS:
            return {
                ...state,
                repoName: action.repoName,
                commits: action.commits,
                commitsOfPage: action.commitsOfPage
            };
        default:
            return state;
    }
}