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

const Info = styled.h3`
  font-size: 1em;
  text-align: center;
  color: #bf4f74;
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
          <h1>About Speaker</h1>

          <Info>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia totam
            neque culpa autem debitis expedita ab doloremque deleniti
            praesentium mollitia nostrum maxime maiores dolor veniam, fugiat
            sapiente quae! Perferendis, eaque.
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
