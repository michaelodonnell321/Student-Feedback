import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {

    state={
        feeling: ''
    }

    handleChange = (event) => {
        // take value of input, set to local state
        this.setState({
            //use number to make handle click logic work
            feeling: Number(event.target.value)
        })
    } //end handleChange

    handleClick = () => {
       //dispatch on click to send to redux
        //only if user has inputted an intenger
        //that is between 1 and 5
        if (Number.isInteger(this.state.feeling) && this.state.feeling <= 5 && this.state.feeling >= 1) {
            this.props.dispatch({
                type: 'ADD_FEELING',
                payload: this.state.feeling
            })
        } else {
            alert('Please enter a number between 1 and 5, 1 being bad and 5 being great!')
            return;
        }
       
        //move me to the next page (understand)
        this.props.history.push('/understand')
    } //end handleClick

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <br/>
                <p>Feeling?</p>
                <input type="number" onChange={this.handleChange} placeholder="1 is bad, 5 is great!"/>
                <button onClick={this.handleClick}>Next</button>
            </div>
        );
    }
}

export default connect()(Feeling);