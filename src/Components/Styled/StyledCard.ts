import styled from '@emotion/styled';
import { Card, Theme } from '@mui/material';

const StyledCard = styled(Card)<{ theme?: Theme }>`
  max-width: calc(40% - 19px);
  //display: inline-block;
  //background-color: #313134;
  margin: 7px;
  ${(props) => props.theme.breakpoints.down('sm')} {
    max-width: 100%;
  }
`;

export default StyledCard;
