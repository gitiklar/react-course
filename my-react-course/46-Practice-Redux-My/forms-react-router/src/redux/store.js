import { applyMiddleware, combineReducers, createStore } from 'redux';

import router from './reducers/routerReducer';
import formsData  from './reducers/formsDataReducer';
import undoRedo from './reducers/undoRedoReducer';
import { undoRedoMiddleware , saveStateToLocalStorageMiddleware , getStateFromLocalStorageMiddleware} from './middlewares';

const reducer = combineReducers({router , formsData , undoRedo});
const store = createStore(reducer , applyMiddleware(undoRedoMiddleware , saveStateToLocalStorageMiddleware , getStateFromLocalStorageMiddleware));
store.dispatch({type: 'GET_STATE_FROM_LOCAL_STORAGE'});
export default store;
window.store = store;