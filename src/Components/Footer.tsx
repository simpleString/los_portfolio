import React from 'react';
import Box from './Styled/Box';
import TitleWithGradient from './Styled/TitleWithGradient';
import styled from '@emotion/styled';

const List = styled.ul`
  margin-left: 2em;
  & li {
    color: #6bc3b5;
  }
`;

const Footer = () => {
  return (
    <Box>
      <TitleWithGradient>Links</TitleWithGradient>
      <List>
        <li>Github</li>
        <li>Youtube</li>
        <li>Instagram</li>
      </List>
    </Box>
  );
};

export default Footer;
