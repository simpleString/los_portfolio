import React from 'react';
import { Container } from '@mui/material';
import { withTheme } from '@emotion/react';
import ContentBlock from '../Components/Styled/ContentBlock';
import TitleStyled from '../Components/Styled/TitleStyled';
import { useFetch } from '../hooks/useFetch';
import CardItem from '../Components/CardItem';

interface IPostData {
  img: string;
  postUrl: string;
  title: string;
}

const Posts = () => {
  const posts = useFetch<IPostData[]>('posts', 'GET');
  console.log(posts);
  return (
    <Container maxWidth={'sm'}>
      <TitleStyled variant='h5' component='h1'>
        POSTS
      </TitleStyled>
      <ContentBlock>
        {posts?.map((post, index) => (
          <CardItem
            key={index}
            image={post?.img as string}
            text={post?.title as string}
            url={post?.postUrl as string}
            baseUrl={'posts'}
          />
        ))}
      </ContentBlock>
    </Container>
  );
};

export default withTheme(Posts);
