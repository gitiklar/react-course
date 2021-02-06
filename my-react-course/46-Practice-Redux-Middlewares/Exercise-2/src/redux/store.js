import produce from 'immer';
import { applyMiddleware, createStore } from 'redux';

const initialState = {
    userName: '',
    password: '',
}

const states = [initialState];
let indexOfCurrentState = 0;

const undoRedoMiddlaWare = ({dispatch , getState}) => next => action =>{
    const nextAction = next(action);
    switch(action.type) {
        case 'UNDO':
            states[indexOfCurrentState-1] && dispatch({type: 'GET_PRE_STATE' , payload:states[--indexOfCurrentState]});
            break;
        case 'REDO':
            states[indexOfCurrentState+1] && dispatch({type: 'GET_POST_STATE' , payload:states[++indexOfCurrentState]});
            break;            
    }
    !(/PRE|POST|UNDO|REDO/g).test(action.type) && states.push(getState()) && ++indexOfCurrentState;
    return nextAction;
}


const reducer = produce ((state , action)=>{
   switch(action.type) {
       case 'UPDATE_INPUT':
            state[action.payload.id] = action.payload.value;
            break;
       case 'GET_PRE_STATE':
            return action.payload;
       case 'GET_POST_STATE':
            return action.payload;
   }
}, initialState);

const store = createStore(reducer ,applyMiddleware(undoRedoMiddlaWare));
export default store;
window.store = store;