import React from 'react';
import FoodCard from './FoodCard';
import MilkRiceImage from '../../images/1.jpg'; 
import StringHoppers from '../../images/2.jpg';
import Hoppers from '../../images/3.jpg';
import Pittu from '../../images/4.jpg';
import Rotti from '../../images/5.jpg';
import LumpRice from '../../images/6.jpg';
import Koththu from '../../images/7.jpg';
import Kavum from '../../images/8.jpg';
import Kokis from '../../images/9.jpg';
import SearchIcon from '../../images/search-icon.png'; 
import ProfileImage from '../../images/profile.jpg'; 
import Banner from '../../images/Banner.png';
import Profile from '../../Pages/Profilepage/profile.js';
import '../../Pages/Homepage/home.css';

const App = () => {
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
      time: '20 min'
    },
    {
      id: 3,
      name: 'Hoppers',
      image: Hoppers, 
      rating: 4.5,
      time: '30 min'
    },
    {
      id: 4,
      name: 'Pittu',
      image: Pittu,
      rating: 4.2,
      time: '20 min'
    },
    {
      id: 5,
      name: 'Rotti',
      image: Rotti, 
      rating: 4.5,
      time: '30 min'
    },
    {
      id: 6,
      name: 'LumpRice',
      image: LumpRice,
      rating: 4.2,
      time: '20 min'
    },
    {
      id: 7,
      name: 'Koththu',
      image: Koththu, 
      rating: 4.5,
      time: '30 min'
    },
    {
      id: 8,
      name: 'Kavum',
      image: Kavum,
      rating: 4.2,
      time: '20 min'
    },{
      id: 9,
      name: 'Kokis',
      image: Kokis, 
      rating: 4.5,
      time: '30 min'
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
            <a href={Profile}>
            <img src={ProfileImage} alt="Profile" className="profile-image" /></a>  
          </button>   
        </div>
      </div>
      <div className='banner'>
        <img src={Banner} alt="banner" />
      </div>
      <div className='name'>
        Recommended Recipes
      </div>
      <div className="food-card-container">
        {foodItems.map(food => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
      <div>
        <button>Load More</button>
      </div>
      <div>
        <button>Add Recipes</button>
      </div>
    </div>
  );
};

export default App;