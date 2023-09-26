import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  margin: 0;
  padding: 0;
  font-size: 50px;
  text-align: center;
  background-color: grey;
`;

const StyledH1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 50px;
  text-align: center;
  background-color: grey;
`;

const Footer = () => {
  return (
    <>
      <section>
        <FooterContainer></FooterContainer>
        <StyledH1>footer</StyledH1>
      </section>
    </>
  );
};

export default Footer;
