import { CHANGE_TAB } from '../actions/actionTypes.js';

const initState = {
    num: 0,
};

const changeTab = (state, action) => {
    return {...state};
}

const tabReducer = (state = initState, action) => {
    switch(action.type) {
        case CHANGE_TAB: return changeTab(state, action);
        default: return state;
    }
}

export default tabReducer;
