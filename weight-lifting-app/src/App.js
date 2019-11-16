import React
// , {useState} 
from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Signup from "./components/SignUp";
import Login from "./components/Login";

const User = ({ match }) => {
  return <h1>Welcome User {match.params.username}</h1>;
};

function App() {

  // const [loggedIn, setLoggedIn] = useState();

  // loginHandle = () => {
  //   loggedIn: true
  // }

  return (
    <Router>
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
        {/* <h1>Weight Lifting App</h1> */}
        {/* <Signup /> */}
        {/* <Login/> */}
      </div>
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/user/:username" exact component={User} />
    </Router>
  );
}

export default App;
