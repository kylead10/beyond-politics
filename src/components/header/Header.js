import React from 'react';
import first from '../../assets/first.jpg';
import './Header.css';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 80px;
  text-align: center;
  color: #bf4f74;
`;

const H1Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
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
  background-color: #007bff; /* Blue background color */
  color: #fff; /* White text color */
  padding: 10px 20px; /* Padding for better spacing */
  font-size: 16px; /* Font size */
  // border: none; /* Remove border */
  cursor: pointer; /* Add cursor pointer on hover */
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s ease; /* Smooth background color transition */

  /* Hover state */
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
        <div className='first-pic'>
          <img src={first} alt='home' />
          <CenteredContainer>
            <Register>Register</Register>
          </CenteredContainer>
        </div>
      </section>
    </>
  );
};

export default Header;
