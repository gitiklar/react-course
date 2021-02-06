import produce from 'immer';
import { createStore } from 'redux';

const initialState = {
    username:'guest',
    messages:[
        {id: 0 , from: 'System' , text:'Hello world'},
    ],
}

function getNextId(items) {
   return Math.max(...items.map(item=> item.id)) + 1;
}

const reducer = produce((state, action)=>{
    switch (action.type) {
        case 'SET_USERNAME':
            state.username = action.payload;
            break;

        case 'RECEIVED_MESSAGE':      
            state.messages.push({id: getNextId(state.messages), ...action.payload});
            break;

        case 'CREATE_ROOM':
            state.rooms.push({ id: getNextId(state.rooms), name: action.payload });
            break;

        case 'SET_ACTIVE_ROOM':
            state.activeRoomId = action.payload;
            break;

        case 'RECEIVED_ROOMS':
            state.rooms = action.payload;
            break;
    }
}, initialState);

const store = createStore(reducer);
window.store = store;
export default store;