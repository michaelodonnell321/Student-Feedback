import React, { Component } from 'react';
import {connect} from 'react-redux';

class Comments extends Component {
    state={
        comments: ''
    }

    handleChange = (event) => {
        //take value and send to state
        this.setState({
            comments: event.target.value
        })
    }

    handleClick = () => {
        //dispatch to redux
        this.props.dispatch({
            type: 'ADD_COMMENTS',
            payload: this.state.comments
        })
        //move to the next page (review)
        this.props.history.push('/review')
    }
    
    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <br />
                <p>Comments</p>
                <input onChange={this.handleChange} placeholder="comments" />
                <button onClick={this.handleClick}>Next</button>
            </div>
        );
    }
}

export default connect()(Comments);