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
// import Add from './Pages/Addrecipe/add.js';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/Login" element={<Login />} />
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
          {/* <Route path="/add" element={<Add/>} /> */}
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;