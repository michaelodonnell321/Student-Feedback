import React, { Component } from 'react';

class AdminItem extends Component {
    render() {

        return (
            <tr>
                <td>{this.props.feedback.feeling}</td>
                <td>{this.props.feedback.understanding}</td>
                <td>{this.props.feedback.support}</td>
                <td>{this.props.feedback.comments}</td>
            </tr>
        );
    }
}

export default AdminItem;
