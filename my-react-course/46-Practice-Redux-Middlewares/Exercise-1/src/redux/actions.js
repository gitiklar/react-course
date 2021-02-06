export function updateTick(tick , delay) {
    return { type: 'UPDATE_TICK' , payload: tick , meta: { delay: delay } };
}

export function showMessage(message , delay) {
    return { type: 'SHOW_MESSAGE', payload: message, meta: { delay: delay } };
}