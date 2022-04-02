import React from 'react';
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
} from '@mui/material';
import { withTheme } from '@emotion/react';
import aspidistra from '../images/aspidistra.jpeg';
import StyledCard from '../Components/Styled/StyledCard';
import ContentBlock from '../Components/Styled/ContentBlock';
import CardText from '../Components/Styled/CardText';
import StyledCardMedia from '../Components/Styled/StyledCardMedia';
import TitleStyled from '../Components/Styled/TitleStyled';

const Games = () => {
  return (
    <Container maxWidth={'sm'}>
      <TitleStyled variant='h5' component='h1'>
        TOPICAL GAMES
      </TitleStyled>
      <ContentBlock>
        <StyledCard variant={'outlined'}>
          <CardActionArea>
            <StyledCardMedia component={'img'} image={aspidistra} />
            <CardContent>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </CardText>
            </CardContent>
            <CardMedia />
          </CardActionArea>
        </StyledCard>
        <StyledCard variant={'outlined'}>
          <CardActionArea>
            <StyledCardMedia component={'img'} image={aspidistra} />
            <CardContent>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </CardText>
            </CardContent>
            <CardMedia />
          </CardActionArea>
        </StyledCard>
        <StyledCard variant={'outlined'}>
          <CardActionArea>
            <StyledCardMedia component={'img'} image={aspidistra} />
            <CardContent>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </CardText>
            </CardContent>
            <CardMedia />
          </CardActionArea>
        </StyledCard>
      </ContentBlock>
      <TitleStyled variant='h5' component='h1'>
        COMPLETED GAMES
      </TitleStyled>
      <ContentBlock>
        <StyledCard variant={'outlined'}>
          <CardActionArea>
            <StyledCardMedia component={'img'} image={aspidistra} />
            <CardContent>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </CardText>
            </CardContent>
            <CardMedia />
          </CardActionArea>
        </StyledCard>
        <StyledCard variant={'outlined'}>
          <CardActionArea>
            <StyledCardMedia component={'img'} image={aspidistra} />
            <CardContent>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </CardText>
            </CardContent>
            <CardMedia />
          </CardActionArea>
        </StyledCard>
        <StyledCard variant={'outlined'}>
          <CardActionArea>
            <StyledCardMedia component={'img'} image={aspidistra} />
            <CardContent>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </CardText>
            </CardContent>
            <CardMedia />
          </CardActionArea>
        </StyledCard>
      </ContentBlock>
      <TitleStyled variant='h5' component='h1'>
        OLD GAMES
      </TitleStyled>
      <ContentBlock>
        <StyledCard variant={'outlined'}>
          <CardActionArea>
            <StyledCardMedia component={'img'} image={aspidistra} />
            <CardContent>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </CardText>
            </CardContent>
            <CardMedia />
          </CardActionArea>
        </StyledCard>
        <StyledCard variant={'outlined'}>
          <CardActionArea>
            <StyledCardMedia component={'img'} image={aspidistra} />
            <CardContent>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </CardText>
            </CardContent>
            <CardMedia />
          </CardActionArea>
        </StyledCard>
        <StyledCard variant={'outlined'}>
          <CardActionArea>
            <StyledCardMedia component={'img'} image={aspidistra} />
            <CardContent>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </CardText>
            </CardContent>
            <CardMedia />
          </CardActionArea>
        </StyledCard>
      </ContentBlock>
    </Container>
  );
};

export default withTheme(Games);
