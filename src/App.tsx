import { ThemeProvider } from '@emotion/react';
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Games from './Pages/Games';
import Main from './Pages/Main';
import Posts from './Pages/Posts';
import { darkTheme, lightTheme } from './theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Container maxWidth='sm'>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
          <Routes>
            <Route path='/games' element={<Games />} />
          </Routes>
          <Routes>
            <Route path='/posts' element={<Posts />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
