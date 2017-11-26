import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import { withRouter } from 'react-router'


class LoginOAuth extends Component {

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

export default compose(
  connect(
    ({ firebase: { auth } }) => ({ auth })
  ),
  withRouter,
  withFirebase
)(LoginOAuth)
