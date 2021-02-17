import produce from 'immer';

const undoRedo = {
    currentIndexData: 0,
    historyData: [  {  formsData: { username: '', password: '', country: '', city: '',  selectedHobbies: new Set(), } ,
                        router: { currentFormName: 'login' , currentIndexPage: 0} } ],
};

export default produce((state , action) => {
    switch(action.type) {
        case 'SAVE_STATE_TO_UNDO_REDO':
            state.historyData.push(action.payload);
            state.currentIndexData = state.historyData.length - 1;
            break;
        case 'UNDO':
            state.currentIndexData--;
            break;
        case 'REDO':
            state.currentIndexData++ 
            break;
        case 'GET_STATE_FROM_LOCAL_STORAGE':
            return action.payload.undoRedo;
    }
}, undoRedo);