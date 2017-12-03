import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import 'rxjs'

const pingEpic = action$ =>
action$.ofType("PING")
  .delay(1000) // Asynchronously wait 1000ms then continue
  .mapTo({ type: "PONG" });

export const rootEpic = combineEpics(
    pingEpic
);