import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../actions/actions";
import styled from "styled-components";

const SignupDiv = styled.div`
  border: 1px solid black;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin: 20px auto;
`;

const Inputs = styled.input`
  margin: 16px 0 16px 0;
  padding: 0.5rem;
  font-size: 16px;
  width: 100%;
  display: block;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

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
    <SignupDiv>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <Inputs
          name="username"
          type="text"
          placeholder="username"
          value={payload.username}
          onChange={handleChange}
          required
        />
        <Inputs
          name="password"
          type="password"
          placeholder="password"
          minLength={5}
          maxLength={10}
          value={payload.password}
          onChange={handleChange}
          required
        />
        <Inputs
          name="firstName"
          type="text"
          placeholder="First Name"
          value={payload.firstName}
          onChange={handleChange}
          required
        />
        <Inputs
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={payload.lastName}
          onChange={handleChange}
          required
        />
        <Inputs
          name="email"
          type="email"
          placeholder="email"
          value={payload.email}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </SignupDiv>
  );
}

const mapStateToProps = state => {
  return { reg_user: state.reg };
};

export default connect(
  mapStateToProps,
  { register }
)(Signup);
