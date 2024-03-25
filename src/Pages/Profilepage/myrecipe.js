import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function Myrecipe() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');
        axios.get(`http://localhost:8800/myrecipes?email=${userEmail}`)
            .then(res => {
                setRecipes(res.data);
            })
            .catch(err => {
                console.error("Error fetching recipes:", err);
            });
    }, []);

    const handleDelete = (recipeId) => {
        axios.delete(`http://localhost:8800/recipes/${recipeId}`)
            .then(res => {
                if (res.data.status === "Success") {
                    // Remove the deleted recipe from the state
                    setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== recipeId));
                    // Show a success message, you can implement this as a toast or alert
                    alert("Recipe deleted successfully");
                }
            })
            .catch(err => {
                console.error("Error deleting recipe:", err);
                // Show an error message if deletion fails
                alert("Failed to delete recipe");
            });
    };

    return (
        <div className="food-card-container">
            {recipes.map(recipe => (
                <div className="food-card" key={recipe.id}>
                    <img src='' alt='' className="food-card-image" />
                    <div className="food-card-content">
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="font-bold text-xl mb-2" id='Name'>{recipe.description}</div>
                            </div>
                            <div className="inline-flex items-center" id='Rating'>
                                <img src='' alt="Star" className="w-6 h-6 mr-1" />
                                <p className="text-gray-700 text-base inline" id='Rate'>{recipe.rating}</p>
                            </div>

                            <div className="flex justify-between items-center mt-2">
                                <p className="text-gray-700 text-base mr-2 text-red-600 font-bold" id='Time'>20min</p>
                                <div className='food-card-buttons'>
                                    <button className="mr-2"><Link to={`/update/${recipe.id}`}>Update</Link></button> 
                                    <button className="mr-2" onClick={() => handleDelete(recipe.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Myrecipe;
