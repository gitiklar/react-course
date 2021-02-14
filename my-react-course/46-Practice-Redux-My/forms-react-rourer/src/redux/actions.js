export function previousBtnClick() {
    return { type: 'GET_PRE_FORM_INDEX' };
}

export function nextBtnClick() {
    return { type: 'GET_NEXT_FORM_INDEX' };
}

export function updateDataByID(e) {
    return { type: 'UPDATE_DATA_BY_ID' , payload : {id : e.target.id , data : e.target.value} };
}

export function updateHobby(e , hobby) {
    return { type: 'ADD_OR_REMOVE_HOBBY' , payload: {add: e.target.checked , hobby:hobby} };
}

export function resetSelectedHobies() {
    return { type: 'RESET_SELECTED_HOBBIES'};
}

export function undo() {
    return { type: 'UNDO' };
}

export function redo() {
    return { type: 'REDO'};
}

export function saveStateToUndoRedo(state) {
    return { type:'SAVE_STATE_TO_UNDO_REDO' , payload: {formsData: state.formsData, router: state.router} }
}