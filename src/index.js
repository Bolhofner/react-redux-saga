import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import mySaga from './sagas/my-sagas';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import postReducer from './reducers/post-reducer';

const allReducers = combineReducers({
    post: postReducer
});

const allStoreEnhancers = compose(
    applyMiddleware(mySaga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(allReducers, 
    {
    posts: [{post: 'text'}]
    },
    allStoreEnhancers
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
