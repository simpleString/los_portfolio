import { Container } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Games from './Pages/Games';
import Main from './Pages/Main';
import Posts from './Pages/Posts';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
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
      </div>
    </BrowserRouter>
  );
}

export default App;
