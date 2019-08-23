import React, { Component } from 'react';
import {connect} from 'react-redux';

class Understand extends Component {

    state={
        understanding: ''
    }

    handleChange = (event) => {
        //take value of input, set to local state
        this.setState({
            understanding: event.target.value
        })
    } //end handleChange

    handleClick = () => {
        //dispatch on click to send to redux
        this.props.dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: this.state.understanding
        })
        //move me to the next page (supported)
        this.props.history.push('/supported')
    } //end handleClick

    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <br/>
                <p>Understanding?</p>
                <input onChange ={this.handleChange} placeholder="1 is bad, 5 is great!" />
                <button onClick={this.handleClick}>Next</button>
            </div>
        );
    }
}

export default connect()(Understand);