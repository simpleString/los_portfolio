import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Games from './Pages/Games';
import Main from './Pages/Main';
import Posts from './Pages/Posts';
import { darkTheme, lightTheme } from './theme';
import Post from './Pages/Post';
import Game from './Pages/Game';
import React, { useState } from 'react';

export const ThemeToggleContext = React.createContext<any>(null);

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <ThemeToggleContext.Provider value={[isDark, setIsDark]}>
          <Header />
        </ThemeToggleContext.Provider>

        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
        <Routes>
          <Route path='/games/:slug' element={<Game />} />
        </Routes>
        <Routes>
          <Route path='/games' element={<Games />} />
        </Routes>
        <Routes>
          <Route path='/posts/:slug' element={<Post />} />
        </Routes>
        <Routes>
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
