import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FoodCard from '../Homepage/FoodCard';
import SearchIcon from '../../images/search-icon.png'; 
import ProfileImage from '../../images/profile.jpg';
import '../Favoritepage/favourite.css'; // Import the CSS file for favorites

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const [displayedFavorites, setDisplayedFavorites] = useState(3); // Initially show 3 items
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Optional for loading indicator

  useEffect(() => {
    const fetchFavorites = async () => {
      setIsLoading(true); // Show loading indicator (if implemented)
      try {
        const favoriteFoods = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(favoriteFoods);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      } finally {
        setIsLoading(false); // Hide loading indicator
      }
    };

    fetchFavorites();
  }, []);

  const filteredFavorites = searchTerm ? favorites.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase())) : favorites;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRemoveFavorite = (food) => {
    const updatedFavorites = favorites.filter(item => item.id !== food.id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const loadMoreFavorites = () => {
    // Increase displayedFavorites by a chosen number (e.g., 3)
    setDisplayedFavorites(displayedFavorites + 3);
  };


  return (
    <div className="app-container">
      <div className="search-profile-container">
        <div className="search-bar">
          <span className="search-text">All Recipes | </span>
          <input type="text" placeholder=" Search for favorites" className="search-input" value={searchTerm} onChange={handleSearchChange} />
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
      <div className="favorite-food-container">
        {isLoading ? (
          // Display loading indicator here (optional)
          <p>Loading favorites...</p>
        ) : filteredFavorites.length > 0 ? (
          filteredFavorites.slice(Math.max(0, Math.floor((filteredFavorites.length - 1) / 2) - displayedFavorites / 2), displayedFavorites).map((food, index) => (
            <FoodCard key={food.id} food={food} onRemoveFavorite={() => handleRemoveFavorite(food)} /> // Pass remove function to FoodCard
          ))
        ) : (
          <p>No favorites found.</p>
        )}
        {filteredFavorites.length > displayedFavorites && (
          <div className="load-more-container">
            <button onClick={loadMoreFavorites}>Load More</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
