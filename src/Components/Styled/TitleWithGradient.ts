import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import { TypographyProps } from '@mui/material';

const TitleWithGradient = styled(Typography)<
  TypographyProps<any, { component?: string; lineWidth?: string }>
>`
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
  position: relative;
  margin-bottom: 1.5em;
  font-size: 1.5em;
  &:after {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    content: '';
    height: 3px;
    width: ${(props) => (props.lineWidth ? props.lineWidth : '150px')};

    background: linear-gradient(
      90deg,
      #c4c4c4 0%,
      rgba(107, 195, 181, 0.6) 100%
    );
    border-radius: 5px;
  }
`;
export default TitleWithGradient;
