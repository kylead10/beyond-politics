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

const Footer = () => {
  return (
    <>
      <section>
        <FooterContainer>
          <SocialMediaLinks>
            <SocialLink href='https://www.facebook.com/'>Facebook</SocialLink>
            <SocialLink href='https://twitter.com/'>Twitter</SocialLink>
            <SocialLink href='https://www.instagram.com/'>Instagram</SocialLink>
            <SocialLink href='https://www.linkedin.com/'>LinkedIn</SocialLink>
          </SocialMediaLinks>
        </FooterContainer>
      </section>
    </>
  );
};

export default Footer;
