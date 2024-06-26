import React from 'react'
import { Link } from 'react-router-dom';
import MilkRice from '../../images/1.jpg'; 
// import StringHoppers from '../../images/2.jpg';
// import Hoppers from '../../images/3.jpg';
// import Pittu from '../../images/4.jpg';
// import Rotti from '../../images/5.jpg';
// import LumpRice from '../../images/6.jpg';
// import Koththu from '../../images/7.jpg';
// import Kavum from '../../images/8.jpg';
// import Kokis from '../../images/9.jpg';
import SearchIcon from '../../images/search-icon.png'; 
import SearchProfile from '../../images/profile.jpg';
import ProfileImage from '../../images/profile2.jpg';
import '../../Pages/Recipepage/recipe.css';

function recipe() {
  return (
    <div className="app-container">
      <div className="search-profile-container">
        <div className="search-bar">
          <span className="search-text">All recipes | </span>
          <input type="text" placeholder=" Search for recipes" className="search-input" />
          <div className="search-icon-container">
            <img src={SearchIcon} alt="Search" className="search-icon" />
          </div>
        </div>
        <div className="profile-icon-container">
          <button>
            <Link to="/profile"><img src={SearchProfile} alt="Profile" className="profile-image" /></Link>
          </button>  
        </div>
      </div>
      <div className="recipe-card-container">
        <div className="recipe-card">
          <p className="name">Milk Rice</p>
          <img src={MilkRice} alt="milkrice" />
          <div className='profile-container'>
            <div className='profile-image'>
              <img src={ProfileImage} alt="profileImage" />
              <div className='creator-details'>
                <p className='creator'>Creator</p>
                <p className='Name'>Name</p>
              </div>
            </div>
          </div>
          <div className='recipe-details'>
            <p className='recipe'>Recipe</p>
            <p className='methods'>
              <li>Rinse 1 cup of rice and cook it with 2 cups of water, a cinnamon stick, a few cardamom pods, and a pinch of salt until the rice is done.</li>
              <li>Add 2 cups of coconut milk and 1 cup of regular milk to the cooked rice. </li>
              <li>Simmer the mixture until it thickens (about 15-20 minutes), stirring occasionally.</li>
              <li>Sweeten with sugar if desired.</li>
              <li>Remove from heat, discard the cinnamon stick and cardamom pods.</li>
              <li>Shape the milk rice into cakes or squares if desired.</li>
              <li>Serve warm or at room temperature. Enjoy!</li>
            </p>
            <p className='ingredients'>Ingredients</p>
            <p className='methods'>
              <li>1 cup white rice</li>
              <li>2 cups water</li>
              <li>2 cups coconut milk</li>
              <li>1 cup regular milk</li>
              <li>Cinnamon stick</li>
              <li>Cardamom pods</li>
              <li>Pinch of salt</li>
              <li>Sugar (optional)</li>
              <li>Grated coconut for garnish (optional)</li>
            </p>
          </div>
        </div>
        <div className='add-recipe'>
        <Link to="/add"><button className='button-recipe'>Add Recipes</button></Link>
      </div>
      </div>
    </div>
  )
}

export default recipe