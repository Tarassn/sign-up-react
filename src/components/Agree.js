import React, { Component } from 'react';

class Agree extends Component {

    render() {
        return (
            <div className="Agree">
                <input
                    type="checkbox"
                    name="Agree"
                    onChange={this.props.handleInput}
                    className=""/> I agree to the terms
                <label hidden={this.props.error.hideStatus}>{this.props.error.message}</label>
            </div>
        );
    }
}

export default Agree;