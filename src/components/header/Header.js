import React from 'react';
import second from '../../assets/second.jpg';
import './Header.css';
import styled from 'styled-components';
import { useState } from 'react';

const StyledH1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 50px;
  text-align: center;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const H1Container = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  height: 8vh;
  background-color: grey;
`;

const ImageContainer = styled.div`
  margin: 0;
  padding: 0;
  background-color: #fff;
`;

const FirstPic = styled.img`
  margin: 0;
  padding: 0;
  max-width: 100%;
  height: auto;
  border: 2px solid #333;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const CenteredContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const Register = styled.button`
  font-weight: bold;
  display: block;
  border-radius: 50px;
  background-color: grey;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  // border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

const Header = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const handleRegistration = () => {};
  return (
    <>
      <section>
        <H1Container>
          <StyledH1>Beyond Politics </StyledH1>
        </H1Container>
        <ImageContainer>
          <FirstPic src={second} alt='home' />
        </ImageContainer>
        <CenteredContainer>
          <Register>Register</Register>
        </CenteredContainer>
      </section>
    </>
  );
};

export default Header;
