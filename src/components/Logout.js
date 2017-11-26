import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
import { withRouter } from 'react-router'

class Logout extends Component {

    componentDidMount() {
        this.props.firebase.logout()
        this.props.history.push(`/`)
    }

    render() {
        return null
    }
}

export default compose(
    firebaseConnect(),
    withRouter,
    connect(
        ({ firebase: { auth } }) => ({ auth })
    )
)(Logout)