import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { BASE_URL } from '../config';
import TitleWithGradient from '../Components/Styled/TitleWithGradient';

const Post = () => {
  const { slug } = useParams();
  const post = useFetch(`/posts/${slug}/${slug}.md`, 'GET') as string;
  const postName = useFetch(`games/${slug}`, 'GET') as any;

  return (
    <Container maxWidth={'sm'}>
      <TitleWithGradient lineWidth={'420px'} marginTop={'1em'}>
        {postName?.data}
      </TitleWithGradient>
      <ReactMarkdown
        transformImageUri={(src) => {
          return BASE_URL + `posts/${slug}/${src}`;
        }}
      >
        {post}
      </ReactMarkdown>
    </Container>
  );
};

export default Post;
