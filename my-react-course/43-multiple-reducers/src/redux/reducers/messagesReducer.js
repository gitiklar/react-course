import produce from 'immer';

const state = {
    messages: [
        { id: 0, from: 'ynon', text: 'Hello Everyone' },
    ],
};

export default produce((state , action) => {
    switch(action.type) {
        case 'RECEIVED_MESSAGE':      
            state.messages.push(action.payload);
            break;
    }
}, state);
