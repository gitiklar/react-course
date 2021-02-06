import produce from 'immer';
import { applyMiddleware, createStore } from 'redux';

const initialState = {
    tick: 0,
    message: '',
}

const awaitAction = store => next => action => {
    if (!action.meta || !action.meta.delay) return next(action);
         setTimeout(()=>{
            return next(action);
         }, action.meta.delay);
}

const reducer = produce ((state , action)=>{
    switch(action.type) {
        case 'UPDATE_TICK':
            state.tick = action.payload;
            break;
        case 'SHOW_MESSAGE':
            state.message = action.payload;
            break;
    }
}, initialState);

const store = createStore(reducer , applyMiddleware(awaitAction));
export default store;
window.store = store;