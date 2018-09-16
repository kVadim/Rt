import React, { Component } from 'react';
import './App.css';
import LoginForm  from './LoginForm.js'
import Doer  from './components/doer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Ti-app</h1>
          <button className="common-btn" onClick={()=> console.log('clicked')}>login</button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LoginForm/>
        <Doer/>
      </div>
    );
  }
}

export default App;
