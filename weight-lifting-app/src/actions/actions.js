import { api } from "../utils/api";
import { history } from "../index";

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
      history.push("/dashboard");
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
      history.push("/dashboard");
    })
    .catch(err => {
      console.log(err, "Wouldn't it be nice if I worked?");
      dispatch({ type: SIGNUP_ERROR, payload: err });
    });
};

export const NEW_TASK_START = "NEW_TASK_START";
export const NEW_TASK_SUCCESS = "NEW_TASK_SUCCESS";
export const NEW_TASK_ERROR = "NEW_TASK_ERROR";

export const addTask = formValues => dispatch => {
  const makeTask = {
    name: formValues.name,
    sets: formValues.sets,
    reps: formValues.reps,
    weight: formValues.weight
  };
  dispatch({ type: NEW_TASK_START });
  api()
    .post("/restricted/exercises", makeTask)
    .then(response => {
      history.push("/dashboard");
      console.log(response);
      dispatch({ type: NEW_TASK_SUCCESS });

    })
    .catch(error => {
      console.log(error);
      dispatch({ type: NEW_TASK_ERROR });
    });
};

export const EDIT_START = "EDIT_START";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAILURE = "EDIT_FAILURE";

export const editEvent = (updateEvent, id, history) => dispatch => {
  dispatch({ type: EDIT_START });
  api()
    .put(`/restricted/exercises/:${id}`, updateEvent)
    .then(response => {
      console.log(response);
      dispatch({ type: EDIT_SUCCESS });
      // history.push("/dashboard");
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: EDIT_FAILURE });
    });
};

// * DELETE EVENT ACTION CREATOR
export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";

export const deleteEvent = (id, history) => dispatch => {
  dispatch({ type: DELETE_START });
  api()
    .delete(`/restricted/exercises/${id}`)
    .then(response => {
      console.log(response);
      dispatch({ type: DELETE_SUCCESS });
      // history.push("/dashboard");
    })
    .catch(error => {
      console.log(error);
    });
};

export const deleteJounarl = (id) => dispatch => {
  dispatch({ type: DELETE_START });
  api()
    .delete(`/restricted/journals/${id}`)
    .then(response => {
      console.log(response);
      dispatch({ type: DELETE_SUCCESS });
      // history.push("/dashboard");
    })
    .catch(error => {
      console.log(error);
    });
};

// * GET EVENT BY EVENT ID ACTION CREATOR
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchData = () => dispatch => {
  dispatch({ type: FETCH_START });
  //  let id = parseInt(localStorage.getItem('id'))
  api()
    .get("/restricted/exercises")
    .then(response => {
      console.log(response);
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: FETCH_FAILURE });
    });
};
