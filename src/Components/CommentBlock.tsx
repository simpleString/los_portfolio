import React from 'react';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { Theme, TypographyProps } from '@mui/material';
import { withTheme } from '@emotion/react';

const CommentBlockStyled = styled.div<{ theme?: Theme }>`
  border-radius: 20px;
  margin-top: ${(props) => props.theme.spacing(2)};
  margin-left: ${(props) => props.theme.spacing(6)};
  background-color: ${(props) => props.theme.typography.overline.color};
`;

const StyledTypography = styled(Typography)<
  TypographyProps<any, { theme?: Theme }>
>`
  color: ${(props) => props.theme.palette.primary.main};
  padding: ${(props) => props.theme.spacing(3)}
    ${(props) => props.theme.spacing(5)};
`;

const CommentBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <CommentBlockStyled>
      <StyledTypography>{children}</StyledTypography>
    </CommentBlockStyled>
  );
};

export default withTheme(CommentBlock);
