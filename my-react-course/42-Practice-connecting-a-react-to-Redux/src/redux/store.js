import { combineReducers, createStore } from 'redux';

import messages from './reducers/messagesReducer';
import login from './reducers/loginReducer';

const reducer = combineReducers({messages , login});

const store = createStore(reducer);
window.store = store;
export default store;