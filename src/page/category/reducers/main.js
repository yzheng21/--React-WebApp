import scrollViewReducer from '../../../component/ScrollView/scrollViewReducer.js';
import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import contentListReducer from './contentListReducer';


const reducers = combineReducers({
    scrollViewReducer,
    headerReducer,
    contentListReducer
});


export default reducers;