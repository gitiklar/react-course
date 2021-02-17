import produce from 'immer';

export const getStateToLocalStorage = produce(state => {
    state.formsData.selectedHobbies = Array.from(state.formsData.selectedHobbies);
    state.undoRedo.historyData.forEach(dataObj => {
        dataObj.formsData.selectedHobbies = Array.from(dataObj.formsData.selectedHobbies);
    });
});

export const getStateFromLocalStorage = () => {
    const state = JSON.parse(localStorage.getItem('state'));
    if(!state) return false;
    state.formsData.selectedHobbies = new Set(state.formsData.selectedHobbies);
    state.undoRedo.historyData.forEach(dataObj => {
        dataObj.formsData.selectedHobbies = new Set(dataObj.formsData.selectedHobbies);
    });
    return state;
}