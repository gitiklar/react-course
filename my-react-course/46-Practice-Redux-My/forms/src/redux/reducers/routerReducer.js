import produce from 'immer';

const initialState = {
    currentFormIndex: 0,
};

export default produce((state , action)=>{
    switch (action.type) {
        case 'GET_PRE_FORM_INDEX':
            state.currentFormIndex--;
            break;
        case 'GET_NEXT_FORM_INDEX':
            state.currentFormIndex++;
            break;
        case 'UNDO': case 'REDO': case 'GET_STATE_FROM_LOCAL_STORAGE':
            return action.payload.router;
    }
}, initialState);