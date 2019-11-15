import React, {useState} from 'react'
import { connect } from "react-redux";
import { loginData } from "../actions/actions";
import styled from "styled-components";

function Login(props) {

  const userLogin = {
    username: "",
    password: "",
  }
  // dummy user accounts I can use
  // username: sammy
  // password: password

  // username: tina
  // password: password

  // username: billy
  // password: password

  // username: admin
  // password: password

  const [login, setLogin] = useState(userLogin);

  const handleChange = e => {
    console.log(handleChange)
    setLogin({ ...login, [e.target.name]: e.target.value});
  }

  const handleSubmit = e => {
    console.log(handleSubmit)
    e.preventDefault();
    props.loginData(login);
  }

  return (
    <LoginForm>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input 
          type="text"
          name="username"
          value={login.username}
          placeholder="Username"
          onChange={handleChange}
          required
          />
          <br/>
        <input
          type="password"
          name="password"
          value={login.password}
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <br/>
        <Button 
        type="submit"
        value="submit"
        bgcolor="black" //temp color scheme
        txtcolor="white" //temp color scheme
        // onClick={_=> alert("Enjoy your workout!")}
        >
        Login</Button>
      </form>
    </LoginForm>
  )
}

// const mapStateToProps = state => {
//   return {
//     loginLoading: state.login.loginLoading,
//     loggedIn: state.login.loggedIn,
//     userId: state.login.userId
//   };
// };

const mapStateToProps = state => {
  return { login_user: state.user};
};

export default connect(
  mapStateToProps,
  {loginData}
)(Login)

const Button = styled.button`
  /* border: 1px solid red; */
  padding: 5px 20px;
  margin: 1em;
  border-radius: 25px;
  color: ${props => [props.txtcolor]}; 
  background-color: ${props => [props.bgcolor]};
  cursor: pointer;
  transition: .5s;

  &:hover {
    color: black;
    background-color: white;
  }
`;

const LoginForm = styled.button`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin: auto;
  padding: 0.5rem 2rem;
  
  input{
    /* border: 1px solid red; */
    padding: 1em .5em;
    border: 1px black solid;
    margin: 1.5em;
    caret-color: green;
    /* text-align: left; */
  }
`;