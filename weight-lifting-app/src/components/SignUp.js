import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../actions/actions";

function Signup(props) {
  const intialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  };

  const [payload, setPayload] = useState(intialState);

  const handleChange = event => {
    setPayload({ ...payload, [event.target.name]: event.target.value });
    // console.log(handleChange)
  };

  const handleSubmit = event => {
    // event.preventDefault();
    props.register(payload);
    reset();
    // .then(() => {
    //   props.history.push("/a");
    // });

    console.log(handleSubmit);
  };

  const reset = () => {
    setPayload(intialState);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="username"
          value={payload.username}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          minLength={5}
          maxLength={10}
          value={payload.password}
          onChange={handleChange}
          required
        />
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={payload.firstName}
          onChange={handleChange}
          required
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={payload.lastName}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="email"
          value={payload.email}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return { reg_user: state.reg };
};

export default connect(
  mapStateToProps,
  { register }
)(Signup);
