import React, { Component } from 'react';
import './App.css';
import firebase from './config/firebase';
import Home from './component/Home';
import Login from './component/Login';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
      else {
        this.setState({
          user: null
        })
      }
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {this.state.user ? (<Home />) : (<Login />)}
        </div>
      </div>
    )
  }
}

export default App;
