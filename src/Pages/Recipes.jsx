import axios from "axios";
import React, { useState, useEffect } from 'react';

// import StringHoppers from '../../images/2.jpg';
// import Hoppers from '../../images/3.jpg';
// import Pittu from '../../images/4.jpg';
// import Rotti from '../../images/5.jpg';
// import LumpRice from '../../images/6.jpg';
// import Koththu from '../../images/7.jpg';
// import Kavum from '../../images/8.jpg';
// import Kokis from '../../images/9.jpg';
import { Link } from 'react-router-dom';
import MilkRice from '../images/1.jpg'; 
// Import statements for other images
import SearchIcon from '../images/search-icon.png'; 
import SearchProfile from '../images/profile.jpg';
import ProfileImage from '../images/profile2.jpg';
import recipe from "./Recipepage/recipe";



const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchAllRecipes = async () => {
          try {
            const res = await axios.get("http://localhost:8800/recipes");
            setRecipes(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchAllRecipes();
      }, []);


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
            <Link to="/profile"><img src={SearchProfile} alt="Profile" className="profile-image" /></Link>
          </button>  
        </div>
      </div>

      <div className="recipe-card-container">
        {recipes.map(recipe=>(

          <div className="recipe-card" key={recipe.id}>
            <p className="name">{recipe.description}</p>
            <img src={recipe.img} alt="img" />
            
            <div className='recipe-details'>
            <p className='recipe'>Recipe</p>
            <p className='methods'>{recipe.instructions}</p>
            <p className='ingredients'>Ingredients</p>
            <p className='methods'>{recipe.ingredients}</p>
          </div>
        </div>
        
        ))}

      </div>
      <div>
        <button><Link to="/addd">Add recipe</Link></button>
      </div>
        
    </div>
  )
}

export default Recipes