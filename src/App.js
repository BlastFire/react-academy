import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Courses from './components/Courses'

class App extends Component {

  // submit(e) {
  //   console.log(e)
  // }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={Courses} />
      </div >
    );
  }
}

export default App;
