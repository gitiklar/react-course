export function updateInput(id , value) {
    return ({ type: 'UPDATE_INPUT' , payload: {id , value}});
}

export function undo() {
    return ({type: 'UNDO'});
}

export function redo() {
    return ({type: 'REDO'});
}