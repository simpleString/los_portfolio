import styled from '@emotion/styled';
import { CardMedia, CardMediaProps } from '@mui/material';

const StyledCardMedia = styled(CardMedia)<
  CardMediaProps<
    any,
    { height?: string; width?: string; component: string; image: string }
  >
>`
  border-radius: 16px;
`;
export default StyledCardMedia;
