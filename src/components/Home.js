import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

class Home extends Component {

    componentDidMount() {
    }


    render() {


        //const listbaby = isLoaded(this.props.firebase.data.courses)
        console.log(this.props.crown.firebase.data)

        return (
            <div className="Home">
                <h1>Home</h1>
            </div>
        )
    }

}

Home = firebaseConnect([
    'courses'
])(Home)
export default connect(
    state => ({ crown: state })
)(Home)