import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { BASE_URL } from '../config';
import TitleWithGradient from '../Components/Styled/TitleWithGradient';

const Game = () => {
  const { slug, topic } = useParams();
  const post = useFetch(`/games/${topic}/${slug}/${slug}.md`, 'GET') as string;
  const postName = useFetch(`games/${topic}/${slug}`, 'GET') as any;
  return (
    <Container maxWidth={'sm'}>
      <TitleWithGradient>{postName?.data}</TitleWithGradient>
      <ReactMarkdown
        transformImageUri={(src) => {
          return BASE_URL + `games/${topic}/${slug}/${src}`;
        }}
      >
        {post}
      </ReactMarkdown>
    </Container>
  );
};

export default Game;
