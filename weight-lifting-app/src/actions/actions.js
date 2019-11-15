import { api } from "../utils/api";

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
