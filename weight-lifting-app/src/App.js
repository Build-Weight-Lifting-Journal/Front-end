import React from 'react';
import './App.css';

import Signup from "./components/SignUp";
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>Weight Lifting App</h1>
      <Signup />
      <hr/>
      <Login/>
    </div>
  );
}

export default App;
