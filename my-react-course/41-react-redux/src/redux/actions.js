
export function setUserName(username) {
    return {type: 'SET_USERNAME' , payload: username};
}

export function receivedMessage(message) {
    return {type: 'RECEIVED_MESSAGE' , payload : message};
}