import React, { Component } from 'react';
import {connect} from 'react-redux';

class Supported extends Component {

    state={
        supported: ''
    }

    handleChange = (event) => {
        //take value of input and set to local state
        this.setState({
            supported: event.target.value
        })
    }

    handleClick = () => {
        //dispatch at click to redux
        this.props.dispatch({
            type: 'ADD_SUPPORTED',
            payload: this.state.supported
        })
        //move to next page (comments)
        this.props.history.push('/comments')
    } //end handleclick
    
    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <br/>
                <p>Support?</p>
                <input onChange ={this.handleChange} placeholder="1 is bad, 5 is great!" />
                <button onClick={this.handleClick}>Next</button>
            </div>
        );
    }
}

export default connect()(Supported);