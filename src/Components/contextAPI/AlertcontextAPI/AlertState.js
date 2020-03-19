import React, { useReducer } from 'react';
import { SET_ALERT, REMOVE_ALERT } from '../types';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';

const AlertState = props => {
    const initialState = {
        alert: null
    };
    const [state, dispatch] = useReducer(AlertReducer, initialState);
    const setAlert = msg => {
        dispatch({ type: SET_ALERT, payload: { msg } });
    };
    const remAlert = () => {
        dispatch({ type: REMOVE_ALERT });
    };
    return (
        <AlertContext.Provider
            value={{
                alert: state.alert,
                setAlert,
                remAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    );
};

export default AlertState;
