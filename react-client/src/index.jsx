import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import { store } from './store/index.js';
// Wrap your app in a provider component from react-redux, which is what gives everything access to the store

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('mount'));
