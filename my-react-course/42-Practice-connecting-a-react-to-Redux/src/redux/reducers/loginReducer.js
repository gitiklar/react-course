import produce from 'immer';

const initialState = {
    userName: "guest",
    password: '123456',
}

export default produce((state , action)=>{
    switch(action.type) {
        case 'SET_USERNAME':
            state.userName = action.payload;
            break;
        case 'SET_PASSWORD':
            state.password = action.payload;
            break;
    }
}, initialState);