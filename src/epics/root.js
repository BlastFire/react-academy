import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { getFirebase } from 'react-redux-firebase'
import 'rxjs'

const pingEpic = (action$, store, getFirebase) =>
action$.ofType("PING")
  .delay(1000) // Asynchronously wait 1000ms then continue
  .mapTo({ type: "PONG" });

export const rootEpic = (...args) => {
  return combineEpics(pingEpic)(...args, getFirebase)
}

// export const rootEpic = combineEpics(
//     pingEpic
// );