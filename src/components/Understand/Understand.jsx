import React, { Component } from 'react';
import {connect} from 'react-redux';

class Understand extends Component {

    state={
        understanding: ''
    }

    handleChange = (event) => {
        //take value of input, set to local state
        this.setState({
            //use number to make handle click logic work
            understanding: Number(event.target.value)
        })
    } //end handleChange

    handleClick = () => {
        //dispatch on click to send to redux
        //only if user has inputted an intenger
        //that is between 1 and 5
        if (Number.isInteger(this.state.understanding) && this.state.understanding <= 5 && this.state.understanding >= 1) {
            this.props.dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: this.state.understanding
            })
        } else {
            alert('Please enter a number between 1 and 5, 1 being bad and 5 being great!')
            return;
        }
        //move me to the next page (supported)
        this.props.history.push('/supported')
    }

    render() {
        console.log(this.state.understanding);
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <br/>
                <p>Understanding?</p>
                <input type="number" onChange ={this.handleChange} placeholder="1 is bad, 5 is great!" />
                <button onClick={this.handleClick}>Next</button>
            </div>
        );
    }
}

export default connect()(Understand);