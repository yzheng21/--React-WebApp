import { combineReducers } from 'redux';
import tabReducer from './tabReducer.js';
import categoryReducer from './categoryReducer';

const reducers = combineReducers({
    tabReducer,
    categoryReducer
});

export default reducers;
