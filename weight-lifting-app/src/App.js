import React from "react";
import { getToken } from "./utils/api";
import { Route, NavLink, withRouter } from "react-router-dom";
import "./App.css";

import Dashboard from "./components/Dashboard";
import ExerciseCard from "./components/ExerciseCard";
import Login from "./components/Login";
import Logout from "./components/Logout";
import NewExercise from "./components/ExerciseForm";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/SignUp";
import UpdateExercise from "./components/Update";


const User = ({ match }) => {
  return <h1>Welcome User {match.params.username}</h1>;
};

function App() {
  const signedIn = getToken();
  // const [loggedIn, setLoggedIn] = useState();

  // loginHandle = () => {
  //   loggedIn: true
  // }

  return (
    <div>
      <div className="App">
        <ul>
          <li>
            {!signedIn && (<NavLink to="/" exact activeStyle={{ color: "green" }}>
              Home
            </NavLink>)}
          </li>
          <li>
            {!signedIn && (<NavLink to="/signup" exact activeStyle={{ color: "green" }}>
              Sign up
            </NavLink>)}
          </li>
          <li>
            {!signedIn && (<NavLink to="/login" exact activeStyle={{ color: "green" }}>
              Login
            </NavLink>)}
          </li>
          {signedIn && (<NavLink to="/dashboard" exact activeStyle={{ color: "green" }}>
            Dashboard
            </NavLink>)}

          {signedIn && (<NavLink to="/logout" exact activeStyle={{ color: "green" }}>
            Logout
            </NavLink>)}
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

      </div>
      
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route exact path="/restricted/exercises/:id" component={UpdateExercise} />
      <Route path="/user/:username" exact component={User} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/add-exercise" component={NewExercise} />
      <PrivateRoute exact path="/exercises" component={ExerciseCard} />
      <PrivateRoute exact path="/logout" component={Logout} />

    </div>
  );
}

export default withRouter(App);
