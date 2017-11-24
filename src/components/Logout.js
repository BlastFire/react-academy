import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
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
    withFirebase,
    withRouter,
    connect(
        ({ firebase: { auth } }) => ({ auth })
    )
)(Logout)