import { Link, useLocation } from 'react-router-dom';
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
import { useContext, useState } from 'react';
import { ThemeToggleContext } from '../App';

const toolbarStyles = (theme: Theme) => css`
  a {
    text-decoration: none;
    &:hover {
      color: #bbb;
    }
  }

  .opened {
    background-color: #6bc3b5;
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

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor:
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const Header = () => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useContext(ThemeToggleContext);
  const location = useLocation();

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
                <Typography
                  component={Link}
                  to='/games'
                  className={location.pathname == '/games' ? 'opened' : ''}
                >
                  Games
                </Typography>
              </li>
              <li>
                <Typography
                  component={Link}
                  to='/posts'
                  className={location.pathname == '/posts' ? 'opened' : ''}
                >
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
            <MaterialUISwitch
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
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
