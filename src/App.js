  import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Loginpage/login.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Home from './pages/Homepage/home.js';
import Favorite from './pages/Favoritepage/favorite.js';
import Profile from './pages/Profilepage/profile.js';
import Recipe from './pages/Recipepage/recipe.js';
import Upload from './pages/Uploadpage/upload.js';
import Logout from './pages/Logoutpage/logout.js';
import Edit from './pages/Editprofilepage/edit.js';
import Add from './pages/Addrecipe/add.js';
import Forgot from './pages/ForgotPassword/Forgot.js';
import Verify from './pages/ForgotPassword/Verify.js';
import New from './pages/ForgotPassword/New.js'

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
          <Route path="/" element={<Home />} />
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