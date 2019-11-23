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
const Button = styled.button`
  box-shadow: 0px 10px 14px -7px #322f20;
  background: linear-gradient(to bottom, #ce4f00 5%, #322f20 100%);
  background-color: #ce4f00;
  border-radius: 8px;
  display: flex;
  justify-content: center;
   margin: 20px auto;
  cursor: pointer;
  color: #f5f5f5;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 20px;
  font-weight: bold;
  padding: 13px 32px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #fae9dc;
  transition: all 0.3s ease-in;
  &:hover {
    background: linear-gradient(to bottom, #322f20 5%, #ce4f00 100%);
    background-color: #322f20;
  }
`

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
    // reset();
    // .then(() => {
      props.history.push("/dashboard");
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

        <Button type="submit">Submit</Button>
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
