export function setMessage(message) {
    return {type: 'RECEIVED_MESSAGE' , payload: message};
}

export function deleteMessage(id) {
    return {type: 'DELETE_MESSAGE' , payload: id};
}