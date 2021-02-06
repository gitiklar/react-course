import produce from 'immer';

const state = {
    username: "guest",
};

export default produce((state , action) => {
    switch(action.type) {
        case 'SET_USERNAME':
            state.username = action.payload;
            break;
    }
}, state);


