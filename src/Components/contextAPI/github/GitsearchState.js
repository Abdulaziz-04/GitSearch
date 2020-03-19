import React, { useReducer } from 'react';
import axios from 'axios';
import gitContext from './GitsearchContext';
import gitReducer from './GitsearchReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';
//HERE ALL THE BASE STRUCTURES ARE DEFINED I.E. THE FUNCTION AND STATE DEFINITIONS
//THIS IS WRAPPED IN APP.JS FILE AND THE CONTEXT IS CALLED IN THE COMPONENTS, FOR SPECIFIC FUNCTION CALLS
//Function name and file name must be SAME!!!!!!!!

const GitsearchState = props => {
    const initalState = {
        users: [],
        user: {},
        loading: false,
        repos: []
    };
    const [state, dispatch] = useReducer(gitReducer, initalState); //useReducer hook setup

    const searchUsers = async text => {
        setL(); //use function call for setup
        const res = await axios.get(
            `https://api.github.com/search/users?q=${text}`
        );
        dispatch({ type: SEARCH_USERS, payload: res.data.items }); //use dispatch to pass data to reducer file
    };

    const setL = () => {
        dispatch({ type: SET_LOADING });
    };

    const clearUsers = () => {
        dispatch({ type: CLEAR_USERS });
    };

    const getUser = async username => {
        setL();
        const res = await axios.get(`https://api.github.com/users/${username}`);
        dispatch({ type: GET_USER, payload: res.data });
    };
    const getRepos = async username => {
        setL();
        const res = await axios.get(
            `https://api.github.com/users/${username}/repos?per_page=7&sort=created:asc`
        );
        dispatch({ type: GET_REPOS, payload: res.data });
    };

    return (
        <gitContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUsers,
                clearUsers,
                getUser,
                getRepos
            }}
        >
            {props.children}
        </gitContext.Provider>
    );
};

export default GitsearchState;
