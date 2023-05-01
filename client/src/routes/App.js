import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from '../containers/Home';
import '../assets/styles/App.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route exact path = '/' element={<Home />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
  }

export default App