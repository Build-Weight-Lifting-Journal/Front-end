import { api } from "../utils/api";
// import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// export const loginData = (credentials, history) => dispatch => {
//   // console.log(payload, "logged in")
//   dispatch({ type: LOGIN_START});

//   axios 
//     .post("https://get-hercules.herokuapp.com/api/auth/login",
//     credentials
//     )

//     .then(res => {
//       console.log("login res", res);

//       localStorage.setItem("token", res.data.token);
//       localStorage.set("userId", res.data.id)

//       dispatch({type: LOGIN_SUCCESS, payload: res.data.id})
//     })

//     .catch(err => {
//       console.log("failed", err.res);
//       dispatch({type: LOGIN_FAILURE, payload: err.res})
//     })
// }

export const loginData = payload => dispatch => {
  console.log(payload, "login");
  dispatch({ type: LOGIN_START });
  api()
    .post("/auth/login", payload)

    .then(res => {
      console.log(res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      window.localStorage.setItem("token", res.data.token);
    })
    .catch(err => {
      console.log(err, "login failed");
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

export const register = payload => dispatch => {
  console.log(payload, "register");
  dispatch({ type: SIGNUP_START });
  // axios
  api()
    .post("/auth/register", payload)
    // .post("https://get-hercules.herokuapp.com/api/auth/register", payload, {
    //   headers: { Authorization: localStorage.getItem("token") }
    // })

    .then(res => {
      console.log(res.data);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      window.localStorage.setItem("token", res.data.token);
    })
    .catch(err => {
      console.log(err, "Wouldn't it be nice if I worked?");
      dispatch({ type: SIGNUP_ERROR, payload: err });
    });
};
