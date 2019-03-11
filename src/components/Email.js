import React, { Component } from 'react';

class Email extends Component {

    render() {
        return (
            <div className="Email form-group">
                Email:
                <input
                    type="text"
                    name="Email"
                    onChange={this.props.handleInput}
                    className="form-control"/>
                <label hidden={this.props.error.hideStatus}>{this.props.error.message}</label>
            </div>
        );
    }
}

export default Email;