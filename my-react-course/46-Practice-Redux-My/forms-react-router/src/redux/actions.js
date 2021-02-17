export function goToCurrentFormUrl(history , formName , currentIndexPage) {
    return { type: 'GO_TO_CURRENT_FORM_URL'  , payload : { history , formName , currentIndexPage}};
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

export function undo(history) {
    return { type: 'UNDO' , history: history};
}

export function redo(history) {
    return { type: 'REDO' , history: history};
}

export function saveStateToUndoRedo(state) {
    return { type:'SAVE_STATE_TO_UNDO_REDO' , payload: {formsData: state.formsData, router: state.router} }
}

export function getPagesNamesObjFromProps(props) {
    const pages = {};
    props.children.forEach((child , index)=> pages [index] = child.type.name ? child.type.name.toLowerCase() : child.type.WrappedComponent.name.toLowerCase());
    return pages;
}

export function getKeyByValue(obj , value) {
    return Number(Object.keys(obj).find(key =>obj[key] === value));
}