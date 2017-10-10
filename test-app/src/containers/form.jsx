import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions';
import Form from '../components/form';

class FormContainer extends Component {
    render() {
        return (
            <div>
                <Form
                    signup={this.props.signup}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

FormContainer = connect(
    mapStateToProps,
    { signup }
)(FormContainer);

export default FormContainer;