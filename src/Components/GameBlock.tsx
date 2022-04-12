import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  min-height: 200px;
  background-color: aqua;
`;

const GameBlock = () => {
  return (
    <Container>
      <div>Hello</div>
    </Container>
  );
};

export default GameBlock;
