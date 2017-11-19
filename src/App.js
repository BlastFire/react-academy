import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirebase, isEmpty } from 'react-redux-firebase'
import { withRouter } from 'react-router'
import './App.css';
import { fetchCourses } from './reducers/courseReducer'
import Header from './components/Header'
import Home from './components/Home'
import Courses from './components/Courses'
import Top5Courses from './components/Top5Courses'
import Login from './components/Login'
import Logout from './components/Logout'

class App extends Component {

  // submit(e) {
  //   console.log(e)
  // }

  componentDidMount() {
    this.props.fetchCourses(this.props.firebase)
  }

  render() {

    return (
      <div className="App">
        <Header userIn={!isEmpty(this.props.auth)} />
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/top5" component={Top5Courses} />
      </div >
    );
  }
}

export default compose(
  withFirebase,
  withRouter,
  connect(
    ({ firebase: { auth } }) => ({ auth }),   // eq. (state) => ({ auth: state.firebase.auth }),
    { fetchCourses }
  )
)(App)