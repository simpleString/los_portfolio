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
  type: 'topical' | 'old' | 'completed';
}

const Games = () => {
  const games = useFetch<IGameData[]>('games/', 'GET');

  return (
    <Container maxWidth={'sm'}>
      <TitleStyled variant='h5' component='h1'>
        TOPICAL GAMES
      </TitleStyled>
      <ContentBlock>
        {games?.map(
          (game, index) =>
            game.type == 'topical' && (
              <CardItem
                key={index}
                image={game?.img as string}
                text={game?.title as string}
                url={game?.postUrl as string}
                baseUrl={'games'}
              />
            )
        )}
      </ContentBlock>
      <TitleStyled variant='h5' component='h1'>
        COMPLETED GAMES
      </TitleStyled>
      <ContentBlock>
        {games?.map(
          (game, index) =>
            game.type == 'completed' && (
              <CardItem
                key={index}
                image={game?.img as string}
                text={game?.title as string}
                url={game?.postUrl as string}
                baseUrl={'games'}
              />
            )
        )}
      </ContentBlock>
      <TitleStyled variant='h5' component='h1'>
        OLD GAMES
      </TitleStyled>
      <ContentBlock>
        {games?.map(
          (game, index) =>
            game.type == 'old' && (
              <CardItem
                key={index}
                image={game?.img as string}
                text={game?.title as string}
                url={game?.postUrl as string}
                baseUrl={'games'}
              />
            )
        )}
      </ContentBlock>
    </Container>
  );
};

export default withTheme(Games);
