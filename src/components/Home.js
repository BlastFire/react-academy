import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'

let Home = props => {

    console.log(props)

    return (
        <div className="Home">
            <h1>Home</h1>
        </div>
    )

}

Home = firebaseConnect([
    'courses'
])(Home)
export default connect(
    ({ firebase }) => ({ firebase })
)(Home)