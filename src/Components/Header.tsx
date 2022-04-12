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
  Link as MaterialLink,
  TypographyProps,
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
    font-size: 24px;
    font-weight: 500;
    &:hover {
      color: #bbb;
    }
  }

  li {
    text-decoration: none;
    list-style-type: none;
    margin-right: 1em;
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

const LinkTypography = styled(Typography)<TypographyProps<any>>`
  font-size: 24px;
  font-weight: 500;
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useContext(ThemeToggleContext);

  return (
    <>
      <AppBar position='sticky'>
        <Container>
          <CustomToolbar
            css={toolbarStyles as never}
            variant={'dense'}
            disableGutters={true}
          >
            <ul>
              <li>
                <LinkTypography component={Link} to='/'>
                  <Box
                    component='img'
                    src={logo}
                    sx={{
                      height: 53,
                      width: 53,
                    }}
                  />
                </LinkTypography>
              </li>
              {/*<li>*/}
              {/*  <LinkTypography component={Link} to='/'>*/}
              {/*    Lois*/}
              {/*  </LinkTypography>*/}
              {/*</li>*/}
              <li>
                <LinkTypography
                  component={Link}
                  to='/games'
                  // className={location.pathname == '/games' ? 'opened' : ''}
                >
                  Games
                </LinkTypography>
              </li>
              <li>
                <LinkTypography
                  component={Link}
                  to='/posts'
                  // className={location.pathname == '/posts' ? 'opened' : ''}
                >
                  Posts
                </LinkTypography>
              </li>
              <li>
                <LinkTypography component={Link} to='/games'>
                  Source
                </LinkTypography>
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
            <div css={{ display: 'flex', alignItems: 'center' }}>
              <GitHubIcon />
              <MaterialLink href={'https://pornhub.com'} marginLeft={1}>
                GitHub
              </MaterialLink>
              <Switch
                checked={checked}
                onChange={() => setChecked(!checked)}
                color={'secondary'}
              />
            </div>
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
