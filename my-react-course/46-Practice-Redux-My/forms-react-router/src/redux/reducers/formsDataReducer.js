import produce, { enableMapSet } from 'immer';
enableMapSet();

const formsData = {
    username: '',
    password: '',
    country: '',
    city: '',
    selectedHobbies: new Set(),
};

export default produce((state , action)=>{
    switch(action.type) {
        case 'UPDATE_DATA_BY_ID':
            state[action.payload.id] = action.payload.data;
            action.payload.id === 'country' && (state['city'] = '');
            break;
        case 'ADD_OR_REMOVE_HOBBY':
            action.payload.add ? state.selectedHobbies.add(action.payload.hobby) : state.selectedHobbies.delete(action.payload.hobby);
            break;
        case 'RESET_SELECTED_HOBBIES':
            state.selectedHobbies = new Set();
            break;
        case 'UNDO': case 'REDO': case 'GET_STATE_FROM_LOCAL_STORAGE':
            return action.payload.formsData;
    }
},formsData);