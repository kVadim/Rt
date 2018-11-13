import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import AuthReducer from './authReducer';
import ProjectReducer from './projectReducer';

const mainReducer = combineReducers({
    auth: AuthReducer,
    proj: ProjectReducer,
    firestore: firestoreReducer
});

export default mainReducer;