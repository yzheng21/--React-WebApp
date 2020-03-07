import { combineReducers } from 'redux';
import tabReducer from './tabReducer.js';
import categoryReducer from './categoryReducer';
import contentListReducer from './contentListReducer';
import scrollViewReducer from '../../../component/ScrollView/scrollViewReducer';
import orderReducer from './orderReducer';
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
    scrollViewReducer,
    tabReducer,
    categoryReducer,
    orderReducer,
    contentListReducer,
    router: routerReducer
});

export default reducers;
