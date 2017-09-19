import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
//import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'

export default createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk))
)
