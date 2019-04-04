import { GET_REPOSITORIES, SELECTED_REPOSITORY } from '../actions/type';

const initialState = {
    "repositories": [{
        "id": 0,
        "name": "Não há repositórios"
    }]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_REPOSITORIES:
            return {
                ...state, 
                repositories: action.repositories
            };
        case SELECTED_REPOSITORY:
            return {
                ...state,
                repositories: action.repositories
            }
        default:
            return state;
    }
}