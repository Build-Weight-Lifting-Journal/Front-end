import React from "react"; // , {useState}
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Signup from "./components/SignUp";
import Login from "./components/Login";

import Dashboard from "./components/Dashboard";
import Exercise from "./components/ExerciseCard"
import AddExercise from "./components/AddExercise"

import PrivateRoute from "./components/PrivateRoute";

import NewExercise from "./components/ExerciseForm";


const User = ({ match }) => {
  return <h1>Welcome User {match.params.username}</h1>;
};

function App() {
  // const [loggedIn, setLoggedIn] = useState();

  // loginHandle = () => {
  //   loggedIn: true
  // }

  return (
    <div>
      <div className="App">
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={{ color: "green" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" exact activeStyle={{ color: "green" }}>
              Sign up
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" exact activeStyle={{ color: "green" }}>
              Login
            </NavLink>
          </li>
            <NavLink to="/dashboard" exact activeStyle={{ color: "green" }}>
              Dashboard
            </NavLink>
        </ul>

        <hr />

        {/* <input type="button" value="log in" onClick={}/> */}
        <Route
          path="/"
          exact
          render={() => {
            return <h1>Weight Lifting App</h1>;
          }}
        />
        <NewExercise />
        {/* <h1>Weight Lifting App</h1> */}
        {/* <Signup /> */}
        {/* <Login/> */}
      </div>
     <Route path="/dashboard" component={Dashboard} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      {/* <Route path="/user/:username" exact component={User} /> */}
      {/* <PrivateRoute exact path="/dashboard" component={Exercise} /> */}
<PrivateRoute exact path="/restricted/exercises" component={AddExercise} />
    </div>
  );
}

export default App;
