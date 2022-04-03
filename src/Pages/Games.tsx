import React from 'react';
import { Container } from '@mui/material';
import { withTheme } from '@emotion/react';
import ContentBlock from '../Components/Styled/ContentBlock';
import TitleStyled from '../Components/Styled/TitleStyled';
import { useFetch } from '../hooks/useFetch';
import CardItem from '../Components/CardItem';

interface IGameData {
  img: string;
  postUrl: string;
  title: string;
}

const Games = () => {
  const games = useFetch<IGameData[]>('games', 'GET');

  return (
    <Container maxWidth={'sm'}>
      <TitleStyled variant='h5' component='h1'>
        TOPICAL GAMES
      </TitleStyled>
      {games?.map((game, index) => (
        <ContentBlock key={index}>
          <CardItem
            image={game?.img as string}
            text={game?.title as string}
            url={game?.postUrl as string}
            baseUrl={'games'}
          />
        </ContentBlock>
      ))}
    </Container>
  );
};

export default withTheme(Games);
