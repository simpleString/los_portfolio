import { createTheme } from '@mui/material';
import { Shadows } from '@mui/material/styles/shadows';

const baseTheme = createTheme({
  shadows: Array(25).fill('none') as Shadows,
  typography: {
    fontFamily: 'Space Grotesk',
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '80px',
        },
      },
    },
  },
});

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: '#202023',
    },
    background: {
      default: '#202023',
      paper: '#E9E9F2',
    },
    secondary: {
      main: '#636365',
    },
    text: {
      primary: '#E9E9F2',
      secondary: '#202023',
    },
  },
  shadows: Array(25).fill('none') as Shadows,
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#E9E9F2',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: { thumb: { color: '#E9E9F2' } },
    },
  },
  typography: {
    allVariants: {
      color: '#E9E9F2',
    },
  },

  // components: {
  //   MuiList: {
  //     styleOverrides: {
  //       root: { backgroundColor: '#202023' },
  //     },
  //   },
  // },
});

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: '#FFFEFC',
    },
    secondary: {
      main: '#F6F3F2',
    },
    background: {
      default: '#FFFEFC',
      paper: '#FFFEFC',
    },
    text: {
      primary: '#000',
      secondary: '#000',
    },
  },
  typography: {
    allVariants: {
      color: 'black',
    },
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: { backgroundColor: '#F6F3F2' },
      },
    },
  },
});

export { darkTheme, lightTheme, baseTheme };
