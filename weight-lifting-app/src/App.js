import React from 'react';
import './App.css';

import Signup from "./components/SignUp";
import Login from './components/Login';
import ExcerciseCard from './components/ExerciseCard';

function App() {
  return (
    <div className="App">
      <h1>Weight Lifting App</h1>
      <Signup />
      <hr/>
      <Login/>
      <ExcerciseCard />
    </div>
  );
}

export default App;
