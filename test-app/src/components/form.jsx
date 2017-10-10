import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

	submit(e) {
		e.preventDefault();
	}


    render() {
        return (
            <form className="form">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button
                	className="submit-btn"
                	type="submit"
                	onClick={this.submit.bind(this)}
                >
                	Signup
                </button>
            </form>
        );
    }
}

Form.propTypes = {
	signup: PropTypes.func
}

export default Form;