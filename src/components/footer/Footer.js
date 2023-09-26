import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  margin: 0;
  padding: 0;
  font-size: 50px;
  text-align: center;
  background-color: grey;
`;

const SocialMediaLinks = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 15px;
  text-align: center;
  color: #fff;
`;

const SocialLink = styled.div``;

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
