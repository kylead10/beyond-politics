import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons from 'react-icons/fa' for Font Awesome icons
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
  font-size: 1.7rem;
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #181818;
  }
`;

// const SocialIcon = styled.img`
//   width: 40px;
//   height: 40px;
//   margin-bottom: 10px;
// `;

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
              <FaTwitter size={30} />
              Twitters
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
