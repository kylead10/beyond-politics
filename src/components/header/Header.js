import React from 'react';
import first from '../../assets/first.jpg';
import './Header.css';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  // font-size: 80px;
  text-align: center;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 3rem; /* Reduce font size for screens up to 768px width */
  }

  @media (max-width: 576px) {
    font-size: 1.2rem; /* Further reduce font size for screens up to 576px width */
  }
`;

const H1Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: grey;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const FirstPic = styled.img`
  max-width: 100%;
  height: auto;
  border: 2px solid #333;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
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
  return (
    <>
      <section>
        <H1Container>
          <StyledH1>Beyond Politics </StyledH1>
        </H1Container>

        <FirstPic src={first} alt='home' />
        <CenteredContainer>
          <Register>Register</Register>
        </CenteredContainer>
      </section>
    </>
  );
};

export default Header;
