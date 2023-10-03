import React from 'react';
import first from '../../assets/first.jpg';
import styled from 'styled-components';
import RegistrationForm from '../RegistrationForm';
import { useState } from 'react';

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
  margin: 0.8rem;
`;

const Info = styled.h3`
  font-size: 1em;
  text-align: left;
  color: grey;
  margin: 1rem;
`;

const About = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const toggleRegistration = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <>
      <section>
        <div className='first-pic'>
          <img src={first} alt='about' />
        </div>
        <div>
          <CenteredContainer>
            <Register onClick={toggleRegistration}>Register</Register>
          </CenteredContainer>
          {isRegistered && <RegistrationForm />}
          <Head>About the Program</Head>
          <Info>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            voluptas exercitationem eveniet quis impedit sunt cupiditate atque
            accusantium rem expedita dolore, aliquid autem vel! Ipsa minus quasi
            ut nemo corrupts hfte56 ygd!
          </Info>

          <CenteredContainer>
            <Register onClick={toggleRegistration}>Register</Register>
          </CenteredContainer>

          <Head>Our Speakers</Head>
          <Info>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            dolorum possimus eum nulla fuga totam veritatis molestiae maxime
            sapiente esse Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Odit ipsum distinctio nesciunt?
          </Info>
        </div>
        {isRegistered && <RegistrationForm />}
      </section>
    </>
  );
};

export default About;
