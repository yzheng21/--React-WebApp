import { combineReducers } from 'redux';
import tabReducer from './tabReducer.js';
import categoryReducer from './categoryReducer';
import contentListReducer from './contentListReducer';
import scrollViewReducer from '../../../component/ScrollView/scrollViewReducer';

const reducers = combineReducers({
    scrollViewReducer,
    tabReducer,
    categoryReducer,
    contentListReducer
});

export default reducers;
