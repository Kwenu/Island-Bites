import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FoodCard from '../Homepage/FoodCard';
import SearchIcon from '../../images/search-icon.png'; 
import ProfileImage from '../../images/profile.jpg';
import '../Homepage/home.css';
import '../Favoritepage/favourite.css'; // Import the CSS file for favorites

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteFoods = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favoriteFoods);
  }, []);

  return (
    <div className="app-container">
      <div className="search-profile-container">
        <div className="search-bar">
          <span className="search-text">All Recipes | </span>
          <input type="text" placeholder=" Search for favorites" className="search-input" />
          <div className="search-icon-container">
            <img src={SearchIcon} alt="Search" className="search-icon" />
          </div>
        </div>
        <div className="profile-icon-container">
          <button>
            <Link to="/profile"><img src={ProfileImage} alt="Profile" className="profile-image" /></Link>
          </button>   
        </div>
      </div>
      <div className='name'>
        Favourite Recipes
      </div>
      <div className="favorite-food-container"> {/* Wrap the favorite food cards in a container */}
        {favorites.map((food, index) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
