import React, { Component } from 'react';

class Success extends Component {

    clickHandler = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Thank you!</h1>
                <button onClick={this.clickHandler}>Leave New Feedback</button>
            </div>
        );
    }
}

export default Success;