import produce from 'immer';

import { nextId , deleteItemByID} from './utils';

const initialState = {
    messages:[
        {id :0 , from: 'SYSTEM', text: 'Hello world'},
    ],
    count: 1,
}

export default produce((state , action)=>{
    switch(action.type) {
        case 'RECEIVED_MESSAGE':
            state.messages.push({id: nextId(state.messages) , ...action.payload});
            state.count++;
            break;
        case 'DELETE_MESSAGE':
            state.messages = deleteItemByID(state.messages , action.payload);
            state.count--;
            break;
    }
}, initialState);