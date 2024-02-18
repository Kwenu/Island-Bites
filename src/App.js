import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar.js';
import Home from './Pages/Homepage/home.js';
import Favorite from './Pages/Favoritepage/favorite.js';
import Profile from './Pages/Profilepage/profile.js';
import Recipe from './Pages/Recipepage/recipe.js';
import Upload from './Pages/Uploadpage/upload.js';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;