import produce from 'immer';
import { applyMiddleware, createStore } from 'redux';
import { undoRedoMiddlaWare , saveToLocalStorage , initialState} from './middleWares';

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

const store = createStore(reducer ,applyMiddleware(undoRedoMiddlaWare , saveToLocalStorage));
export default store;
window.store = store;
