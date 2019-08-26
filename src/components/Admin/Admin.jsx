import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import AdminItem from './AdminItem';


class Admin extends Component {

    componentDidMount() {
        this.getFeedback()
    }


    getFeedback = () => {
        //gets all feedback, puts in redux for use
        axios.get('api/review')
            .then(response => {
                console.log('get from DB done', response.data);
                this.props.dispatch({
                    type: 'SET_ADMIN',
                    payload: response.data
                })
            })
                    .catch(error => {
                        console.log('error in GET', error);
                    })
        
    }

    render() {
        let tableRows = this.props.feedbackHistory.map(feedback => {
            return (
                <AdminItem key={feedback.id} feedback={feedback} />
            )
        })

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div >
        );
    }
}

const mapStateToProps = reduxStore => {
    return {
        feedbackHistory: reduxStore.feedbackReducer
    }
}

export default connect(mapStateToProps)(Admin);