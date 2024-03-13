import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MilkRiceImage from '../../images/1.jpg'; 
import StringHoppers from '../../images/2.jpg';
import Hoppers from '../../images/3.jpg';
import SearchIcon from '../../images/search-icon.png'; 
import ProfileImage from '../../images/profile.jpg';
import FoodCard from '../Favoritepage/FavouriteCard.js';
import '../Homepage/home.css';

const Favorite = () => {
  const [displayedFoodItems] = useState(3); // State variable to track the number of displayed food items
  const foodItems = [
    {
      id: 1,
      name: 'Kiribath',
      image: MilkRiceImage, 
      rating: 4.5,
      time: '30 min'
    },
    {
      id: 2,
      name: 'StringHoppers',
      image: StringHoppers,
      rating: 4.2,
      time: '40 min'
    },
    {
      id: 3,
      name: 'Hoppers',
      image: Hoppers, 
      rating: 4.5,
      time: '20 min'
    },
  ];

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
            <Link to="/profile"><img src={ProfileImage} alt="Profile" className="profile-image" /></Link>
          </button>   
        </div>
      </div>
      <div className='name'>
        Favourite Recipes
      </div>
      <div className="food-card-container">
        {foodItems.slice(0, displayedFoodItems).map(food => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;