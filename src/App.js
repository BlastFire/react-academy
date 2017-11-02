import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { withRouter } from 'react-router'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Courses from './components/Courses'
import Login from './components/Login'
import Logout from './components/Logout'

class App extends Component {

  // submit(e) {
  //   console.log(e)
  // }

  render() {

    return (
      <div className="App">
        <Header userIn={!isEmpty(this.props.auth)} />
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </div >
    );
  }
}

App = firebaseConnect([
])(App)
export default withRouter(connect(
  ({ firebase: { auth } }) => ({ auth })
)(App))