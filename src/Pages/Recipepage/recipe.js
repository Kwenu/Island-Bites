import React from 'react'
import SearchIcon from '../../images/search-icon.png'; 
import ProfileImage from '../../images/profile.jpg'; 
import Banner from '../../images/Banner.png';
import Profile from '../../Pages/Profilepage/profile.js';
import '../../Pages/Recipepage/recipe.css';

function recipe() {
  return (
    <div className="app-container">
      <div className="search-profile-container">
        <div className="search-bar">
          <span className="search-text">All recipes | </span>
          <input type="text" placeholder=" Search..." className="search-input" />
          <div className="search-icon-container">
            <img src={SearchIcon} alt="Search" className="search-icon" />
          </div>
        </div>
        <div className="profile-icon-container">
          <button>
            <a href={Profile}>
              <img src={ProfileImage} alt="Profile" className="profile-image" />
            </a>  
          </button>   
        </div>
      </div>
    </div>
  )
}

export default recipe