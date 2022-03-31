import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

interface IGameBox {
  name: string;
  discription: string;
  img: string;
}

const GameBox = ({ name, discription, img }: IGameBox) => {
  return (
    <Box>
      <h3>{name}</h3>
      <p>{discription}</p>
    </Box>
  );
};

export default GameBox;
