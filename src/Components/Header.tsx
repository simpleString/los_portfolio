import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '../images/Logo.png';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import { Theme, Typography } from '@mui/material';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { withTheme } from '@emotion/react';

const ulStyles = (theme: Theme) => css`
  a {
    text-decoration: none;
    &:hover {
      color: #bbb;
    }
  }

  li {
    text-decoration: none;
    list-style-type: none;
    display: inline-block;
    margin-right: 1em;
  }

  ul {
    display: flex;
  }
`;

const CustomToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <AppBar position='sticky' color='primary'>
      <Container>
        <CustomToolbar>
          <ul css={ulStyles}>
            <li>
              <Box
                component='img'
                src={logo}
                sx={{
                  height: 21,
                  width: 21,
                }}
              />
              <Typography component={Link} to='/'>
                Lois
              </Typography>
            </li>
            <li>
              <Typography component={Link} to='/games'>
                Games
              </Typography>
            </li>
            <li>
              <Typography component={Link} to='/posts'>
                Posts
              </Typography>
            </li>
            <li>
              <GitHubIcon width='21' height='21' />
              <Typography component={Link} to='/games'>
                Source
              </Typography>
            </li>
          </ul>
          {/* <IconButton edge='start' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton> */}
          <Switch />
        </CustomToolbar>
      </Container>
    </AppBar>
  );
};

export default withTheme(Header);
