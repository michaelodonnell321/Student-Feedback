import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {

    state={
        feeling: ''
    }

    handleChange = (event) => {
        // take value of input, set to local state
        this.setState({
            feeling: event.target.value
        })
    } //end handleChange

    handleClick = () => {
        //dispatch on click to send to redux
        this.props.dispatch({
            type: 'ADD_FEELING',
            payload: this.state.feeling
        })
        //move me to the next page (understand)
        this.props.history.push('/understand')
    } //end handleClick

    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <br/>
                <p>Feeling?</p>
                <input onChange={this.handleChange} placeholder="1 is bad, 5 is great!"/>
                <button onClick={this.handleClick}>Next</button>
            </div>
        );
    }
}

export default connect()(Feeling);