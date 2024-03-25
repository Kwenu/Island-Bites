import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Loginpage/login.js';
import Signup from './Pages/Signuppage/signup.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Favorite from './Pages/Favoritepage/favorite.js';
import Profile from './Pages/Profilepage/profile.js';
import ForgotPassword from './Pages/ForgotPasswordPage/ForgotPassword.js';
import ResetPassword from './Pages/ForgotPasswordPage/ResetPassword.js';
import RecipeDetails from './Pages/Recipepage/RecipeDetails.js';
import Upload from './Pages/Uploadpage/upload.js';
import Logout from './Pages/Logoutpage/logout.js';
import Edit from './Pages/Editprofilepage/edit.js';
import Add from './Pages/Addrecipe/Add.jsx';
import Cards from './Pages/RecipeCardspage/Cards.jsx';
import Recipes from './Pages/Recipepage/Recipes.jsx';

import Myrecipe from './Pages/Profilepage/myrecipe.js';
import Update from './Pages/Profilepage/update.js';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forgot" element={<ForgotPassword/>} />
        <Route path="/reset" element={<ResetPassword/>} />
      </Routes>


    </div>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/add" element={<Add />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/edit/:id" element={<Edit/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/myrecipe" element={<Myrecipe/>} />
          <Route path="/update/:id" element={<Update/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
