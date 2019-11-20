import React from "react";
import { Redirect } from "react-router-dom";

function Logout(props) {
  // Nothing has to happen on the server to log out,
  // just delete the token
  console.log(props, "Logout")
  localStorage.removeItem("token");

  return <Redirect to="/login" />;
}

export default Logout;
