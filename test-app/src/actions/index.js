import api from '../api';

export const signupSuccess = (response) => ({
    type: 'SIGNUP_SUCCESS',
    response
});

export const signupFail = (err) => ({
    type: 'SIGNUP_FAIL',
    err
});

export const signupRequest = (data) => {
    return (dispatch) => {

        api(data)
            .then((response) => dispatch(signupSuccess(response)))
            .catch((err) => dispatch(signupFail(err)));
    };
};

