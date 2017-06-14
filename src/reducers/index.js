import {appHeaderReducer} from './appHeaderReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    appHeader: appHeaderReducer
});

export default rootReducer;
