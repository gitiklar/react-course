import produce from 'immer';

const state = {
    tick: 0,
};

export default produce((state , action) => {
    switch(action.type) {
        case 'SET_TICK':
          state.tick = action.payload;
          break;
      }
}, state);