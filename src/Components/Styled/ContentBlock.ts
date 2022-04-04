import styled from '@emotion/styled';
import { Theme } from '@mui/material';

const ContentBlock = styled.div<{ theme?: Theme }>`
  display: flex;
  flex-wrap: wrap;

  ${(props) => props.theme.breakpoints.down('sm')} {
    display: block;
  }
`;

export default ContentBlock;
