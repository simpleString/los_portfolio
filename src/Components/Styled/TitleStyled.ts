import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import { TypographyProps } from '@mui/material';

const TitleStyled = styled(Typography)<TypographyProps<any>>`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-top: 2em;
`;
export default TitleStyled;
