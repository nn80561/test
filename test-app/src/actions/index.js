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
    	dispatch({ type: 'SIGNUP_REQUEST' });

        api(data)
            .then(
            	response => dispatch(signupSuccess(response)),
            	err => dispatch(signupFail(err))
            )

    };
};

