export const initialState = JSON.parse(localStorage.getItem('state')) || {
    userName: '',
    password: '',
}

const states = [initialState];
let indexOfCurrentState = 0;

export const undoRedoMiddlaWare = ({dispatch , getState}) => next => action => {
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

export const saveToLocalStorage = ({dispatch , getState}) => next => action => {
    next(action);
    localStorage.setItem('state' , JSON.stringify(getState()));
}