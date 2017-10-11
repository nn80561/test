import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './input';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayAllErrors: false
        };
    }

    submit(e) {
        e.preventDefault();
        const form = e.target;

        if (!form.checkValidity()) {
            let state = Object.assign({}, this.state);
            state.displayAllErrors = true;
            this.setState(state);
        } else {
            let data = new FormData(form);
            let payload = {};

            for (let name of data.keys()) {
                payload[name] = data.get(name);
            }

            this.props.signup(payload);
        }

    }

    render() {
        return (
            <form className='form' onSubmit={this.submit.bind(this)} noValidate>
                <Input
                    type='email'
                    name='email'
                    placeholder='Email'
                    isRequired={true}
                    customErrMsg='Please enter a valid email'
                    hasError={true}
                    shouldShowError={this.state.displayAllErrors}
                />
                <Input
                    type='text'
                    name='fullName'
                    placeholder='Full name'
                    isRequired={false}
                />
                <Input
                    type='text'
                    name='company'
                    placeholder='Company'
                    isRequired={false}
                />
                <Input
                    type='password'
                    name='password'
                    placeholder='Password'
                    isRequired={true}
                    hasError={true}
                    shouldShowError={this.state.displayAllErrors}
                />
                <button
                    className="submit-btn"
                    type="submit"
                >
                    {this.props.isApiLoading ? 'Loading...' : 'Register'}
                </button>
            </form>
        );
    }
}

Form.propTypes = {
    signup: PropTypes.func,
    isApiLoading: PropTypes.bool
}

export default Form;