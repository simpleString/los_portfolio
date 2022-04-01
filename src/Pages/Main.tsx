import { Button, Container, Theme, TypographyProps } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import profile from '../images/Profile_img.png';
import { css, withTheme } from '@emotion/react';
import bugImg from '../images/Bug.png';
import unityImg from '../images/Unity.png';
import noteImg from '../images/Note.png';
import Footer from '../Components/Footer';
import TitleWithGradient from '../Components/Styled/TitleWithGradient';
import Box from '../Components/Styled/Box';

const Flexbox = styled.div<{ theme?: Theme }>`
  margin-top: 1em;
  display: flex;
  width: 90%;
  & > img {
    padding-right: 2em;
  }
  // ${(props) => props.theme.breakpoints.down('sm')} {
  //   display: block;
  //   //margin: auto;
  // }
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: start;
  height: 100vh;

  .list-without-style {
    & li {
      list-style-type: none;
      text-align: left;
      display: flex;
      align-items: center;
      & * {
        margin-right: 1em;
        margin-top: 4px;
      }
    }
  }
`;

const ParagraphText = styled(Typography)<TypographyProps<never>>`
  text-indent: 2em;
  max-width: 100%;
  text-align: justify;
`;

const StyledButton = styled(Button)`
  background-color: #6bc3b5;
  height: 50px;
  width: 200px;
  border-radius: 15px;
  font-weight: 400;
  font-size: 18px;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  &:hover {
    background-color: #8abeb8;
  }
`;

const Main = () => {
  return (
    <StyledContainer maxWidth='sm'>
      <Flexbox>
        <img src={profile} height={110} alt={'something'} />
        <div>
          <TitleWithGradient
            variant='h5'
            component={'h1'}
            textAlign={'justify'}
          >
            Los Michail
          </TitleWithGradient>
          <ul className={'list-without-style'}>
            <li>
              <img src={unityImg} height='30px' alt={'something'} />
              Game development on UNITY
            </li>
            <li>
              <img src={noteImg} height='30px' alt={'something'} />
              Creation of the game concept
            </li>
            <li>
              <img src={bugImg} height='30px' alt={'something'} />
              Creating and fixing bugs{' '}
            </li>
          </ul>
        </div>
      </Flexbox>
      <Box>
        <TitleWithGradient variant='h5' component={'h1'}>
          My progress
        </TitleWithGradient>
        <ParagraphText>
          Hello! My name is Michael. I am 21 years old, studying at a technical
          university and developing games👾👾👾 2 years. The first year I was
          engaged in personal projects, while studying the Unity engine. For the
          second year, I was lucky to work with publishers, sell a few of my
          games, and also make a couple of games for bloggers!
        </ParagraphText>
      </Box>
      <StyledButton variant={'outlined'}>Games</StyledButton>
      <Box>
        <div
          css={css`
            display: flex;
            justify-content: right;
          `}
        >
          <TitleWithGradient variant='h5' component={'h1'}>
            Experience
          </TitleWithGradient>
        </div>
        <ParagraphText>
          Having a certain experience is an amazing property of human
          consciousness. With my games, I try to convey the experience to the
          players. And also I share the experience of creating games with other
          developers in my posts
        </ParagraphText>
      </Box>
      <StyledButton variant={'outlined'}>Posts</StyledButton>
      <Footer />
    </StyledContainer>
  );
};

export default withTheme(Main);
