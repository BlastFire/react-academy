import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { getFirebase } from 'react-redux-firebase'
import { Observable } from 'rxjs'
import { loginFulfilledA, loginErrorA, LOGIN, REGISTER, regFulfilledA, regErrorA } from '../reducers/courseReducer'

const loginEpic = (action$, store, getFirebase) =>
  action$.ofType(LOGIN)
    .switchMap(({ payload }) => {
      return Observable.fromPromise(getFirebase().login(payload))
        .map(response => {
          return loginFulfilledA()
        })
        .catch(error => {
          //errors are fetched from firebase state
          return Observable.of(loginErrorA(error))
        })
    })

const registerEpic = (action$, store, getFirebase) =>
  action$.ofType(REGISTER)
    .switchMap(({ payload }) => {
      return Observable.fromPromise(getFirebase().createUser(payload))
        .map(response => {
          return regFulfilledA()
        })
        .catch(error => {
          return Observable.of(regErrorA(error))
        })
    })

export const rootEpic = (...args) => {
  return combineEpics(loginEpic, registerEpic)(...args, getFirebase)
}