import { createStore, combineReducers, applyMiddleware } from 'redux';
import messages from './reducers/messages';
import rooms from './reducers/rooms';
import account from './reducers/account';

const firebaseMessages = ({dispatch , getState}) => next => action => {
  if(action.type === 'READ_FROM_FIREBASE') {
    firebase.firestore().collection('messages').orderBy('created_at').onSnapshot((querySnapshot)=>{
      const batch = [];
      querySnapshot.forEach((doc)=>{batch.push({id: doc.id , ...doc.data()});});
      dispatch({type: 'RESET_MESSAGES' , payload : batch});
    });
    return;
  }
  return next(action);
}

const reducer = combineReducers({ messages, rooms, account });

const store = createStore(reducer , applyMiddleware(firebaseMessages));
window.store = store;
store.dispatch({type : 'READ_FROM_FIREBASE'});
export default store;

