import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { withRouter } from 'react-router'

class Logout extends Component {

    componentDidMount() {
        this.props.firebase.logout()
        this.props.history.push(`/`)
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}
const LogoutWrapped = firebaseConnect([
])(Logout)
export default withRouter(connect(
    ({ firebase: { auth } }) => ({ auth })
)(LogoutWrapped))