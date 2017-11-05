import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty, withFirebase, pathToJS } from 'react-redux-firebase'
import { withRouter } from 'react-router'


class Login extends Component {

  //redirect to home after successful submit
  componentWillReceiveProps({ history }) {
    history.push(`/`)
  }

  render() {
    return (
      <div>
        {/* <GoogleButton/> button can be used instead */}
        <Button
          onClick={() => this.props.firebase.login({ provider: 'google', type: 'popup' })}
        >Login With Google</Button>
      </div>
    )
  }
}
const LoginWrapped = firebaseConnect([
])(Login)
export default withRouter(connect(
  ({ firebase: { auth } }) => ({ auth })
)(LoginWrapped))