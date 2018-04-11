import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'; 
// combineReducers can be used to, what else, combine multiple reducers, so that you can keep things distinct. applyMiddleware allows you to apply middleware, like Thunk, to add functionality to Redux
import reducers from '../../src/reducers/reducers.js';


// we're putting reducers into the store below as a single object, but if we wanted, we could use combineReducers() to include all our different ones
export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // include this line in your store
);