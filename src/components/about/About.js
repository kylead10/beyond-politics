import React from 'react';
import './About.css';
import second from '../../assets/second.jpg';
import styled from 'styled-components';

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
    background-color: #0056b3;
  }
`;

const Head = styled.h1`
  font-size: 2em;
  text-align: left;
  color: grey;
  display: block;
`;

const Info = styled.h3`
  font-size: 1em;
  text-align: left;
  color: grey;
`;

const About = () => {
  return (
    <>
      <section>
        <div className='first-pic'>
          <img src={second} alt='about' />
        </div>
        <div>
          <CenteredContainer>
            <Register>Register</Register>
          </CenteredContainer>
          <Head>About Speaker</Head>

          <Info>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            voluptas exercitationem eveniet quis impedit sunt cupiditate atque
            accusantium rem expedita dolore, aliquid autem vel! Ipsa minus quasi
            ut nemo corrupti!
          </Info>
          <CenteredContainer>
            <Register>Register</Register>
          </CenteredContainer>
        </div>
      </section>
    </>
  );
};

export default About;
