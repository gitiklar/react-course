import { createStore, combineReducers, applyMiddleware } from 'redux';
import produce from 'immer';
import messages from './reducers/messages';
import rooms from './reducers/rooms';
import account from './reducers/account';

const loggerMiddleware = store => next => action => {
    console.log(action);
    return next(action);
}

const angularToReact = store => next => action => {
    action.payload.text = action.payload.text.replace(/angular/g, 'react');
    return next(action);
}

const reducer = combineReducers({ messages, rooms, account });

const store = createStore(reducer , applyMiddleware(loggerMiddleware , angularToReact));
window.store = store;
export default store;

