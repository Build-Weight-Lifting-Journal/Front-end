import React from "react"; // , {useState}
import "./App.css";
import "./App.scss";

import { Route, NavLink, withRouter } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { getToken } from "./utils/api";
// import Exercise from "./components/ExerciseCard"
// import AddExercise from "./components/AddExercise"
import JournalCard from "./components/JournalCard";
import Logout from "./components/Logout";

// import PrivateRoute from "./components/PrivateRoute";
import NewExercise from "./components/ExerciseForm";
import ExerciseCard from "./components/ExerciseCard";
import CreateJournal from "./components/CreateJournal";

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
      <CreateJournal />
      <div className="App">
        <ul>
          <li>
            {!signedIn && (
              <NavLink to="/" exact activeStyle={{ color: "green" }}>
                Home
              </NavLink>
            )}
          </li>
          <li>
            {!signedIn && (
              <NavLink to="/signup" exact activeStyle={{ color: "green" }}>
                Sign up
              </NavLink>
            )}
          </li>
          <li>
            {!signedIn && (
              <NavLink to="/login" exact activeStyle={{ color: "green" }}>
                Login
              </NavLink>
            )}
          </li>
          {signedIn && (
            <NavLink to="/dashboard" exact activeStyle={{ color: "green" }}>
              Dashboard
            </NavLink>
          )}

          {signedIn && (
            <NavLink to="/logout" exact activeStyle={{ color: "green" }}>
              Logout
            </NavLink>
          )}
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
        {/* <NewExercise />
        <JournalCard /> */}
        {/* <ExerciseCard /> */}
      </div>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/add-exercise" component={NewExercise} />
      <PrivateRoute exact path="/exercises" component={ExerciseCard} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />

      <PrivateRoute exact path="/logout" component={Logout} />

      <Route path="/user/:username" exact component={User} />

      {/* <PrivateRoute exact path="/dashboard" component={Exercise} /> */}
      {/* <PrivateRoute exact path="/restricted/exercises" component={AddExercise} /> */}
    </div>
  );
}

export default withRouter(App);
