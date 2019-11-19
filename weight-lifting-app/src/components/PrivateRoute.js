import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props
  return (
    <Route
      {...rest}
<<<<<<< HEAD
      render={renderProps => {
        if (localStorage.getItem("token")) {
          return <Component {...renderProps}/>;
=======
      render={(renderProps) => {
        if (localStorage.getItem("token")) {
          return <Component  {...renderProps} />;
>>>>>>> 78d50a0475a8e40af973e785c1ed57ddba10cc28
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;