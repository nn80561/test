import { combineReducers } from 'redux';

export const email = (state = '', action) => {
    switch (action.type) {
    case 'SIGNUP_SUCCESS':
        return action.response.email;
    default:
        return state;
    }
};

export const password = (state = '', action) => {
    switch (action.type) {
    case 'SIGNUP_SUCCESS':
        return action.response.password;
    default:
        return state;
    }
};

export default combineReducers({
    email,
    password
});