import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import ProjectReducer from './projectReducer';

const mainReducer = combineReducers({
    auth: AuthReducer,
    proj: ProjectReducer,
});

export default mainReducer;