import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
        <h2>And maybe a CI/CD</h2>
        <h6>Changed text to prokoke rebuild</h6>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
