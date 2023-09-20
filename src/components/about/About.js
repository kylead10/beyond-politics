import React from 'react';
import './About.css';
import second from '../../assets/second.jpg';
import styled from 'styled-components';
import { Modal } from '../registerModal/Modal';
import Pop from '../registerModal/Pop';

const Register = styled.button`
  background: #575b1e;
  border: 30px solid #fff;
  color: #000;
  font-weight: bold;
  display: block;
  border-radius: 50px;
`;

const Info = styled.h3`
  font-size: 1em;
  text-align: center;
  color: #bf4f74;
`;

const Submit = styled.button``;

const About = () => {
  return (
    <>
      <section>
        <div className='first-pic'>
          <img src={second} alt='about' />
        </div>
        <div>
          <h1>About Speaker</h1>
          <Info>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia totam
            neque culpa autem debitis expedita ab doloremque deleniti
            praesentium mollitia nostrum maxime maiores dolor veniam, fugiat
            sapiente quae! Perferendis, eaque.
          </Info>
        </div>
      </section>
    </>
  );
};

export default About;
