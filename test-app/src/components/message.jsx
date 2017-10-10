import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    getClassName() {
        let name = 'message';
        return this.props.hasSucceeded !== null ? name + ' show' : name;
    }

    render() {
        return (
            <div className={this.getClassName()}>
                {
                    this.props.hasSucceeded ?
                        <div>Thanks for registering, {this.props.fullName}!</div>
                        : <div>I'm sorry. We were unable to process your request.</div>
                }
            </div>
        );
    }
}

Message.propTypes = {
    fullName: PropTypes.string,
    hasSucceeded: PropTypes.bool
}

export default Message;