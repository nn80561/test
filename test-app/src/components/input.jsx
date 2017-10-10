import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showError: false,
            errMsg: 'This field is required'
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.shouldShowError) {
            this.toggleError();
        }
    }

    isValid() {
        return this.input.checkValidity();
    }

    onFocus() {
        let state = Object.assign({}, this.state);
        state.showError = false;
        this.setState(state);
    }

    onBlur(e) {
        this.toggleError();
    }

    toggleError() {
        let state = Object.assign({}, this.state);

        if (!this.isValid()) {
            let msg = this.input.value.trim() === '' ?
                this.state.errMsg : this.props.customErrMsg;

            state.showError = true;
            state.errMsg = msg;
        } else {
            state.showError = false;
        }

        this.setState(state);
    }

    getClassName() {
        let className = 'form-input';
        return this.state.showError ? className + ' error' : className;
    }

    render() {
        return (
            <div className={this.getClassName()}>
                <input
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    onBlur={this.onBlur.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                    required={this.props.isRequired}
                    ref={(input) => { this.input = input; }}
                />
                {
                    this.state.showError ?
                        <div className="err-msg">{this.state.errMsg}</div>
                        : ''
                }
            </div>
        );
    }
}

Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    isRequired: PropTypes.bool,
    customErrMsg: PropTypes.string,
    shouldShowError: PropTypes.bool
}

export default Input;