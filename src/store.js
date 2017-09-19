import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
//import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'
import testReducer from './reducers/testreducer'


const reducer = combineReducers({
    testReducer,
    form: formReducer
})

export default createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk))
)
