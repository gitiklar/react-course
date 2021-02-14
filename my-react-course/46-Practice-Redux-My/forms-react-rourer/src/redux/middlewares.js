import { saveStateToUndoRedo } from './actions';
import { getStateFromLocalStorage, getStateToLocalStorage } from './utils';

export const undoRedoMiddleware = ({dispatch , getState}) => next => action => {
    switch (action.type) {
        case 'SAVE_STATE_TO_UNDO_REDO': case 'GET_STATE_FROM_LOCAL_STORAGE':
            return next(action);
        case 'UNDO': case 'REDO':
            const historyData = getState().undoRedo.historyData;
            const undoOrRedoDataIndex = getState().undoRedo.currentIndexData + (action.type === 'UNDO'? -1 : 1);
            action.payload = historyData[undoOrRedoDataIndex] ? {...historyData[undoOrRedoDataIndex]} : false;
            if(action.payload) return next(action); return;
        default:
            const nextAction = next(action);
            dispatch(saveStateToUndoRedo(getState()));
            return nextAction;
    }
};

export const saveStateToLocalStorageMiddleware = ({getState}) => next => action => {
    const nextAction = next(action);
    if(action.type === 'GET_STATE_FROM_LOCAL_STORAGE') return nextAction;
    localStorage.setItem('state' , JSON.stringify(getStateToLocalStorage(getState())));
    return nextAction;
};

//action.type === 'GET_STATE_FROM_LOCAL_STORAGE' Once on page load
export const getStateFromLocalStorageMiddleware = store => next => action => {
    if(action.type !== 'GET_STATE_FROM_LOCAL_STORAGE') return next(action);
    action.payload = getStateFromLocalStorage();
    if(!action.payload) return;
    return next(action);
};