import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { createEpicMiddleware } from 'redux-observable'
import { reactReduxFirebase, firebaseStateReducer, getFirebase } from 'react-redux-firebase'
import firebase from 'firebase'
import testReducer from './reducers/testreducer'
import courseReducer from './reducers/courseReducer'
import { rootEpic } from './epics/root';

const firebaseConfig = {
    apiKey: "AIzaSyBqzVnkfm3XDKx_9qwm_usuOgtqAmQXMjU",
    authDomain: "racademy-f5953.firebaseapp.com",
    databaseURL: "https://racademy-f5953.firebaseio.com",
    projectId: "racademy-f5953",
    storageBucket: "racademy-f5953.appspot.com",
    messagingSenderId: "119022017805"
}


const reduxFirebaseConfig = {
    userProfile: 'users',
    enableLoggin: false
}

firebase.initializeApp(firebaseConfig)

const epicMiddleware = createEpicMiddleware(rootEpic)

// Add reactReduxFirebase store enhancer
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, reduxFirebaseConfig)
)(createStore)


const reducer = combineReducers({
    test: testReducer,
    crs: courseReducer,
    form: formReducer,
    firebase: firebaseStateReducer
})

export default createStoreWithFirebase(reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(getFirebase), epicMiddleware))
)

//const store = createStore(rootReducer, compose(reactReduxFirebase(firebaseConfig, reduxFirebase)));