import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS
} from '../types';
//HERE ALL THE INTERMEDIATE PROCESSES OF ALL THE FUCTIONS TAKE PLACE AND THEIR VALUES ARE REDEFINED

const gitReducer = (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true //here the spread operator create a copy which allows to change the value of state
            };
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            };
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default gitReducer;
