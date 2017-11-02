import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty, withFirebase, pathToJS } from 'react-redux-firebase'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import LoadingScreen from '../components/LoadingScreen'

const locationHelper = locationHelperBuilder({});
console.log(typeof(locationHelper))

export const UserIsNotAuthenticated = UserAuthWrapper({
    wrapperDisplayName: 'UserIsNotAuthenticated',
    allowRedirectBack: false,
    AuthenticatingComponent: LoadingScreen,
    redirectPath: (state, ownProps) =>
      locationHelper.getRedirectQueryParam(ownProps) || '/',
    authenticatedSelector: ({ firebase }) => pathToJS(firebase, 'auth') === null,
    authenticatingSelector: ({ firebase }) =>
      pathToJS(firebase, 'isInitializing') === true ||
      pathToJS(firebase, 'auth') === undefined
  })

  const Login = ({ firebase }) => (
            <div>
                {/* <GoogleButton/> button can be used instead */}
                <Button 
                    onClick={() => this.props.firebase.login({ provider: 'google', type: 'popup' })}
                >Login With Google</Button>
            </div>
  )

  export default compose(
    UserIsNotAuthenticated, // redirects to '/' if user is logged in
    withFirebase // adds this.props.firebase
  )

//     //redirect to home after successful submit
//     componentWillReceiveProps({history}) {
//         history.push(`/`)
//     }

//     render() {
//         return (
//             <div>
//                 {/* <GoogleButton/> button can be used instead */}
//                 <Button 
//                     onClick={() => this.props.firebase.login({ provider: 'google', type: 'popup' })}
//                 >Login With Google</Button>
//             </div>
//         )
//     }
// }
// const LoginWrapped = firebaseConnect([
// ])(Login)
// export default withRouter(connect(
//     ({ firebase: { auth } }) => ({ auth })
// )(LoginWrapped))