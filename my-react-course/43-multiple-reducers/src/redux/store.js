import { combineReducers, createStore } from 'redux';
import rooms from './reducers/roomsReducer';
import account from './reducers/accountReducer';
import messages from './reducers/messagesReducer';
import timer from './reducers/timerReducer';

/*
function reducer(state, action) {
  return {
    rooms: roomsReducer(state.rooms, action),
    messages: messagesReducer(state.messages, action),
    account: accountReducer(state.account, action)
  }
}
*/

const reducer = combineReducers({rooms , account , messages ,timer});

const store = createStore(reducer);
window.store = store;
export default store;


