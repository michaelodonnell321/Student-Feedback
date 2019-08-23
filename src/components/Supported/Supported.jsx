import React, { Component } from 'react';
import {connect} from 'react-redux';

class Supported extends Component {

    state={
        supported: ''
    }

    handleChange = (event) => {
        //take value of input and set to local state
        this.setState({
            //use Number to make logic in handle click work
            supported: Number(event.target.value)
        })
    }

    handleClick = () => {
        //dispatch on click to send to redux
        //only if user has inputted an intenger
        //that is between 1 and 5
        if (Number.isInteger(this.state.supported) && this.state.supported <= 5 && this.state.supported >= 1) {
            this.props.dispatch({
                type: 'ADD_SUPPORTED',
                payload: this.state.supported
            })
        } else {
            alert('Please enter a number between 1 and 5, 1 being bad and 5 being great!')
            return;
        }
        //move me to the next page (comments)
        this.props.history.push('/comments')
    }

    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <br/>
                <p>Support?</p>
                <input type="number" onChange ={this.handleChange} placeholder="1 is bad, 5 is great!" />
                <button onClick={this.handleClick}>Next</button>
            </div>
        );
    }
}

export default connect()(Supported);