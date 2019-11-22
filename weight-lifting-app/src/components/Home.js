import React from "react";
import { getToken } from "../utils/api";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import workout from "../Images/workout.jpeg";

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin: 20px auto;
  border: 1px solid black;
  width: 100%;
  max-width: 600px;
  height: 300px;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 100vh;
  border-radius: 10px;
  `;

const ImageDiv = styled.div``;

const InnerDiv = styled.div`
  /* border: 1px solid red; */
  margin: 20px;
  
`;

const Buttons = styled.button`
  max-width: 100%;
  width: 200px;
  height: 40px;
  margin: 20px;
  border-radius: 10px;
  opacity: .8;

`;

const NavLinks = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: red;
`;

function Home() {
  const signedIn = getToken();
  return (
    <div>
      <ButtonDiv background={workout}>
        <ImageDiv>
          <InnerDiv>
            {!signedIn && (
              <Buttons>
                <NavLinks to="/signup" exact activeStyle={{ color: "green" }}>
                  Sign up
                </NavLinks>
              </Buttons>
            )}
           
            {!signedIn && (
              <Buttons>
                <NavLinks to="/login" exact activeStyle={{ color: "green" }}>
                  Login
                </NavLinks>
              </Buttons>
            )}
          </InnerDiv>
        </ImageDiv>
      </ButtonDiv>
    </div>
  );
}

export default Home;
