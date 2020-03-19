import { REMOVE_ALERT, SET_ALERT } from '../types';

export default (state, action) => {
    switch (action.type) {
        default:
            return state;
        case SET_ALERT:
            return {
                alert: action.payload
            };
        case REMOVE_ALERT:
            return {
                alert: null
            };
    }
};
