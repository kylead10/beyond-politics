import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import styled from 'styled-components';
const FooterContainer = styled.div`
  margin: 0;
  padding: 20px 0;
  font-size: 50px;
  text-align: center;
  background-color: grey;
`;

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  display: flex;
  flex-direction: grid;
  font-size: 1.7rem;
  margin: 0 20px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #181818;
  }
`;

const Footer = () => {
  return (
    <>
      <section>
        <FooterContainer>
          <SocialMediaLinks>
            <SocialLink href='https://www.facebook.com/'>
              <FaFacebook size={30} />
              Facebook
            </SocialLink>
            <SocialLink href='https://twitter.com/'>
              <RiTwitterXLine size={30} />
              Twitter
            </SocialLink>
            <SocialLink href='https://www.instagram.com/'>
              <FaInstagram size={30} />
              Instagram
            </SocialLink>
            <SocialLink href='https://www.linkedin.com/'>
              <FaLinkedin size={30} />
              LinkedIn
            </SocialLink>
          </SocialMediaLinks>
        </FooterContainer>
      </section>
    </>
  );
};

export default Footer;
