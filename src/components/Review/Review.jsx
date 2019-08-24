import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Review extends Component {

    clickHandler = () => {

        let reviewObject = {
            feeling: this.props.feedback[0],
            understanding: this.props.feedback[1],
            support: this.props.feedback[2],
            comments: this.props.feedback[3],
        }
        axios.post('api/review', reviewObject)
        .then(response => {
            console.log('POST response is ', response);
            this.props.dispatch({
                type: 'CLEAR_REVIEW'
            });
            this.props.history.push('/');
        })
        .catch(error => {
            console.log('error in PUT ', error);
        });
    };

    render() {
        return (
            <div>
                <h1>Review Your Feedback</h1>
                {/*pull data from reduxStore using key in mapstate to props and position in array in order*/}
                <h3>Feelings: {this.props.feedback[0]}</h3>
                <h3>Understanding: {this.props.feedback[1]} </h3>
                <h3>Support: {this.props.feedback[2]}</h3>
                <h3>Comments: {this.props.feedback[3]}</h3>
                <button onClick={this.clickHandler}>Submit</button>
            </div>
        );
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        feedback : reduxStore.formReducer
    }
}
export default connect(mapStateToProps)(Review);