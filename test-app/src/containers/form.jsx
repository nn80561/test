import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupRequest } from '../actions';
import Form from '../components/form';
import Message from '../components/message';

class FormContainer extends Component {
    render() {
        const props = this.props;
        return (
            <div>
                <Form
                    signup={(data)=> props.signupRequest(data)}
                    isApiLoading={props.isApiLoading}
                />
                <Message
                    fullName={props.fullName}
                    hasSucceeded={props.signupRequestState}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    fullName: state.fullName,
    signupRequestState: state.signupRequestState,
    isApiLoading: state.isApiLoading
});

FormContainer = connect(
    mapStateToProps,
    { signupRequest }
)(FormContainer);

export default FormContainer;