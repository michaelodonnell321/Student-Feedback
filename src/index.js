import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

const formReducer = (state = [], action) => {
    //store info from all different questions, use spread to put them all in state
    //to send to review page
    if (action.type === 'ADD_FEELING') {
        return [action.payload]
    }
    if (action.type === 'ADD_UNDERSTANDING') {
        return [...state, action.payload]
    }
    if (action.type === 'ADD_SUPPORTED') {
        return [...state, action.payload]
    }
    if (action.type === 'ADD_COMMENTS') {
        return [...state, action.payload]
    }

    return state;
}

const store = createStore(
    combineReducers({
        formReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
