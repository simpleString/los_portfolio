import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '../images/Logo.png';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import {
  IconButton,
  List,
  ListItem,
  SwipeableDrawer,
  Theme,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { withTheme } from '@emotion/react';
import { useState } from 'react';

const toolbarStyles = (theme: Theme) => css`
  a {
    text-decoration: none;
    &:hover {
      color: #bbb;
    }
  }

  li {
    text-decoration: none;
    list-style-type: none;
    margin-right: 1em;
    display: flex;
  }

  ul {
    display: flex;
    align-items: center;
    ${theme.breakpoints.down('sm')} {
      display: none;
    }
  }

  .hamburger {
    display: none;
    ${theme.breakpoints.down('sm')} {
      display: flex;
    }
  }
`;

const Sidebar = styled(SwipeableDrawer)`
  .MuiDrawer-paper {
    height: auto;
    border-radius: 0 0 6px 0;
  }
`;

const CustomToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position='sticky' color='primary'>
        <Container>
          <CustomToolbar css={toolbarStyles as never}>
            <ul>
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
                <GitHubIcon />
                <Typography component={Link} to='/games'>
                  Source
                </Typography>
              </li>
            </ul>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              className={'hamburger'}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Switch />
          </CustomToolbar>
        </Container>
      </AppBar>
      <Sidebar
        anchor='left'
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <List>
          <ListItem>
            <Typography
              onClick={() => setOpen(false)}
              variant='button'
              component={Link}
              to='/'
            >
              Lois
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              onClick={() => setOpen(false)}
              component={Link}
              to='/games'
            >
              Games
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              onClick={() => setOpen(false)}
              component={Link}
              to='/posts'
            >
              Posts
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              onClick={() => setOpen(false)}
              component={Link}
              to='/games'
            >
              Source
            </Typography>
          </ListItem>
        </List>
      </Sidebar>
    </>
  );
};

export default withTheme(Header);
