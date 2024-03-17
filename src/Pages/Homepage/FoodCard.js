import React, { useState, useEffect } from 'react';
import Heart from '../../images/heart.png';
import BlackHeart from '../../images/heart-filled.png'; // New black heart icon
import Comment from '../../images/comment.png';
import Star from '../../images/star.png';
import '../Homepage/home.css';

const FoodCard = ({ food }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.some(item => item.id === food.id));
    }, [food.id]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (isFavorite) {
            const updatedFavorites = favorites.filter(item => item.id !== food.id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setIsFavorite(false);
        } else {
            favorites.push(food);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };

    return (
        <div className="food-card">
            <img src={food.image} alt={food.name} className="food-card-image" />
            <div className="food-card-content">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="font-bold text-xl mb-2" id='Name'>{food.name}</div>
                    </div>
                    <div className="inline-flex items-center" id='Rating'>
                        <img src={Star} alt="Star" className="w-6 h-6 mr-1" />
                        <p className="text-gray-700 text-base inline" id='Rate'>{food.rating}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-700 text-base mr-2 text-red-600 font-bold" id='Time'>{food.time}</p>
                    <div className='food-card-buttons'>
                        <button className="mr-2" onClick={toggleFavorite}>
                            <img src={isFavorite ? BlackHeart : Heart} alt="Favorite" className="w-6 h-6" id='Favorite'/>
                        </button>
                        <button>
                            <img src={Comment} alt="Comment" className="w-6 h-6" id='Comment'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
