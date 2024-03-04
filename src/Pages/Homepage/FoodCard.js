import React from 'react';
import Heart from '../../images/heart.png';
import Comment from '../../images/comment.png';
import Star from '../../images/star.png';
import '../../pages/Homepage/home.css';

const FoodCard = ({ food }) => {
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
                        <button className="mr-2">
                            <img src={Heart} alt="Favorite" className="w-6 h-6" id='Favorite'/>
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
