import React from 'react';
import {
  AppBar,
  Container,
  Box,
  Toolbar,
  IconButton,
  useMediaQuery,
  useTheme,
  Switch,
} from '@mui/material';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/Logo.png';
import './Header.css';

const navigationLinks = [
  {
    name: 'Lois',
    href: '/',
    icon: (
      <Box
        component='img'
        src={logo}
        sx={{
          height: 21,
          width: 21,
        }}
      />
    ),
  },
  {
    name: 'Games',
    href: '/games',
  },
  {
    name: 'Posts',
    href: '/posts',
  },
  {
    name: 'Source',
    href: '/source',
    icon: <GitHubIcon width='21' height='21' />,
  },
];

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <AppBar position='sticky' className='header' color='primary'>
      <Container maxWidth='sm'>
        <Toolbar className='header__toolbar'>
          <div className='header__toolbar-nav'>
            {!matches ? (
              <IconButton edge='start' color='inherit' aria-label='menu'>
                <MenuIcon />
              </IconButton>
            ) : (
              navigationLinks.map((link, i) => (
                <Link key={i} to={link.href}>
                  {link?.icon}
                  {link.name}
                </Link>
              ))
            )}
          </div>
          <div className='header__toolbar-switch'>
            <Switch />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
