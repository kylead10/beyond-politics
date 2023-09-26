import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  margin: 0;
  padding: 0;
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
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const SocialIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <>
      <section>
        <FooterContainer>
          <SocialMediaLinks>
            <SocialLink href='https://www.facebook.com/'>
              <SocialIcon src='/facebook-logo.png' alt='Facebook Logo' />
              Facebook
              <span>2023</span>
            </SocialLink>
            <SocialLink href='https://twitter.com/'>
              <SocialIcon src='/twitter-logo.png' alt='Twitter Logo' />
              Twitter
              <span>2023</span>
            </SocialLink>
            <SocialLink href='https://www.instagram.com/'>
              <SocialIcon src='/instagram-logo.png' alt='Instagram Logo' />
              Instagram
              <span>2023</span>
            </SocialLink>
            <SocialLink href='https://www.linkedin.com/'>
              <SocialIcon src='/linkedin-logo.png' alt='LinkedIn Logo' />
              LinkedIn
              <span>2023</span>
            </SocialLink>
          </SocialMediaLinks>
        </FooterContainer>
      </section>
    </>
  );
};

export default Footer;
