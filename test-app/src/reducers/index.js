import { combineReducers } from 'redux';

export const email = (state = '', action) => {
    switch (action.type) {
    case 'SIGNUP_SUCCESS':
        return action.response.email;
    default:
        return state;
    }
};

export const fullName = (state = '', action) => {
    switch (action.type) {
    case 'SIGNUP_SUCCESS':
        return action.response.fullName;
    default:
        return state;
    }
};

export const company = (state = '', action) => {
    switch (action.type) {
    case 'SIGNUP_SUCCESS':
        return action.response.company;
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

export const signupRequestState = (state = null, action) => {
    switch (action.type) {
    case 'SIGNUP_SUCCESS':
        return true;
    case 'SIGNUP_FAIL':
        return false;
    default:
        return state;
    }
};

export default combineReducers({
    email,
    fullName,
    company,
    password,
    signupRequestState
});