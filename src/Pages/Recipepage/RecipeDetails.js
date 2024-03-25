import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../Pages/Recipepage/recipe.css';
import SearchIcon from '../../images/search-icon.png'; 
import SearchProfile from '../../images/profile.jpg';
import ProfileImage from '../../images/profile2.jpg';
import MilkRice from '../../images/1.jpg'; 


function RecipeDetails() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/recipes/${id}`);
                setRecipe(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchRecipe();
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (

      <div className="app-container">
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
        <div className="recipe-card">
          <p className="name">{recipe.description}</p>
          <img src="" alt="" />
          <div className='profile-container'>
            <div className='profile-image'>
              <img src="" alt="profileImage" />
              <div className='creator-details'>
                <p className='creator'>Creator</p>
                <p className='Name'>Name</p>
              </div>
            </div>
          </div>
          <div className='recipe-details'>
            <p className='recipe'>Recipe</p>
            <p className='methods'>
            <li>{recipe.instructions}</li>
            </p>
            <p className='ingredients'>Ingredients</p>
            <p className='methods'>
              <li>{recipe.ingredients}</li>
            </p>
          </div>
        </div>
        <div className='add-recipe'>
        <Link to="/add"><button className='button-recipe'>Add Recipes</button></Link>
      </div>
      </div>
    </div>








      
  </div>





    );
}

export default RecipeDetails;
