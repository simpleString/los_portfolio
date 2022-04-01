import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Games from './Pages/Games';
import Main from './Pages/Main';
import Posts from './Pages/Posts';
import { darkTheme } from './theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
        <Routes>
          <Route path='/games' element={<Games />} />
        </Routes>
        <Routes>
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
