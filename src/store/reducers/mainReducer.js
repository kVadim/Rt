import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import AuthReducer from './authReducer';
import ProjectReducer from './projectReducer';

const mainReducer = combineReducers({
    auth: AuthReducer,
    proj: ProjectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default mainReducer;