import React from 'react';
import first from '../../assets/first.jpg';
import './Header.css';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const Register = styled.button`
  background: #575b1e;
  border: 30px solid #fff;
  color: #000;
  font-weight: bold;
  display: block;
  border-radius: 50px;
`;

const Header = () => {
  return (
    <>
      <section>
        <div className='first-pic'>
          <img src={first} alt='home' />
          <Register>Register</Register>
        </div>
        <StyledH1>Beyond Politics </StyledH1>
      </section>
    </>
  );
};

export default Header;
