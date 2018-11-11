import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'; // bind react and redux
import mainReducer from './store/reducers/mainReducer'
import thunk from 'redux-thunk'
// firebase
import { reduxFirestore, getFirestore} from 'redux-firestore';
import { reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

const store = createStore(mainReducer, 
                          compose(
                            applyMiddleware(thunk.withExtreArgument{getFirebase, getFirestore})),
                            reduxFirestore(fbConfig),
                            reactReduxFirebase(fbConfig)
                        );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
