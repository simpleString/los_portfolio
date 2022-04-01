import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#202023',
    },
    background: {
      default: '#202023',
    },
    secondary: {
      main: '#EAEAEA',
    },
    text: {
      primary: '#fff',
      secondary: '#fff',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    allVariants: {
      color: 'white',
    },
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: { backgroundColor: '#202023' },
      },
    },
  },
});

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#FFFEFC',
    },
    secondary: {
      main: '#F6F3F2',
    },
    background: {
      default: '#FFFEFC',
    },
  },
});

export { darkTheme, lightTheme };
