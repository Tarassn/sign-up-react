import React, { Component } from 'react';

class Username extends Component {

    render() {
        return (
            <div className="Username form-group">
                Username:
                <input
                    type="text"
                    name="Username"
                    onChange={this.props.handleInput}
                    className="form-control"
                />
                <label hidden={this.props.error.hideStatus}>{this.props.error.message}</label>
            </div>
        );
    }
}

export default Username;