import produce from 'immer';

const router = {
    currentFormName: 'login',
    currentIndexPage: 0,
};

export default produce((state , action)=>{
    switch (action.type) {
        case 'GO_TO_CURRENT_FORM_URL':
            state.currentFormName = action.payload.formName;
            state.currentIndexPage = action.payload.currentIndexPage;
            action.payload.history.push(`/forms/${action.payload.formName}`);
            break;
        case 'GET_STATE_FROM_LOCAL_STORAGE':
            return action.payload.router;
        case 'UNDO': case 'REDO':
            return action.payload.router;
    }
}, router);