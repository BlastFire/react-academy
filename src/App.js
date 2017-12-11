import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { isEmpty } from 'react-redux-firebase'
import { withRouter } from 'react-router'
import './App.css';
import { fetchCourses } from './reducers/courseReducer'
import Header from './components/Header'
import Home from './components/Home'
import Courses from './components/Courses'
import Top5Courses from './components/Top5Courses'
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register'
import NoMatch from './components/NoMatch'

const RemoveTrailingSlash = ({location}) => {
  const {pathname} = location;
	
  if (pathname.substr(-1) === '/') {
    return <Redirect to={pathname.substr(0, pathname.length - 1)} />;
  } else {
    return null;
  }
};

class App extends Component {

  componentDidMount() {
    this.props.fetchCourses()
  }

  render() {
    //console.log(React.version)

    return (
      <div className="App">
        <Header userIn={!isEmpty(this.props.auth)} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
          <Route path="/top5" component={Top5Courses} />
          <Route component={NoMatch} />
        </Switch>
      </div >
    );
  }
}

export default compose(
  withRouter,
  connect(
    ({ firebase: { auth } }) => ({ auth }),   // eq. (state) => ({auth: state.firebase.auth }),
    { fetchCourses }
  )
)(App)