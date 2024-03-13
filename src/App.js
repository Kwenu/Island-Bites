  import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Loginpage/login.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Home from './Pages/Homepage/home.js';
import Favorite from './Pages/Favoritepage/favorite.js';
import Profile from './Pages/Profilepage/profile.js';
import Recipe from './Pages/Recipepage/recipe.js';
import Upload from './Pages/Uploadpage/upload.js';
import Logout from './Pages/Logoutpage/logout.js';
import Edit from './Pages/Editprofilepage/edit.js';
import Add from './Pages/Addrecipe/add.js';
import Forgot from './Pages/ForgotPassword/Forgot.js';
import Verify from './Pages/ForgotPassword/Verify.js';
import New from './Pages/ForgotPassword/New.js';

import Recipes from './Pages/Recipes.jsx';
import Addd from './Pages/Addd.jsx';
import Update from './Pages/Update.jsx';
import Cards from './Pages/Cards.jsx';


const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/forgot" element={<Forgot/>} />
        <Route path="/verify" element={<Verify/>} />
        <Route path="/new" element={<New/>} />
      </Routes>
    </div>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/addd" element={<Addd />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/update" element={<Update />} />
          <Route path="/cards" element={<Cards />} />

          <Route path="/Home" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/edit" element={<Edit/>} />
          <Route path="/add" element={<Add/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;