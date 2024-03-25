import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Banner from '../images/Banner.png';
import SearchIcon from '../images/search-icon.png'; 
import ProfileImage from '../images/profile.jpg'; 
import '../Pages/Homepage/home.css';
import Heart from '../images/heart.png';
import Comment from '../images/comment.png';
import Star from '../images/star.png';

function Cards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchAllCards = async () => {
            try {
                const res = await axios.get("http://localhost:8800/cards");
                setCards(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllCards();
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
                        <Link to="/profile"><img src={ProfileImage} alt="Profile" className="profile-image" /></Link>
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
                {cards.map(card => (
                    <div className="food-card" key={card.id}>
                        <img src='' alt='' className="food-card-image" />
                        <div className="food-card-content">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-bold text-xl mb-2" id='Name'>{card.description}</div>
                                </div>
                                <div className="inline-flex items-center" id='Rating'>
                                    <img src={Star} alt="Star" className="w-6 h-6 mr-1" />
                                    <p className="text-gray-700 text-base inline" id='Rate'>{card.rating}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-gray-700 text-base mr-2 text-red-600 font-bold" id='Time'>{card.time}</p>
                                <div className='food-card-buttons'>
                                    <button className="mr-2">
                                        <img src={Heart} alt="Favorite" className="w-6 h-6" id='Favorite'/>
                                    </button>
                                    <button>
                                        <img src={Comment} alt="Comment" className="w-6 h-6" id='Comment'/>
                                    </button>

                                    <Link to={`/recipe/${card.id}`} className="btn btn-primary me-2">More</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='add-recipe'>
                <Link to="/addd"><button className='button-recipe'>Add Recipes</button></Link>
            </div>

            <div className="main-footer">
                <div className="footer-container">
                    <div className="footer-content-container">
                        <div className="footer-content">
                            <h3>Island Bites</h3>
                            <p>Explore endless recipes effortlessly with Island Bites.
                            Create, discover, and enjoy delicious meals at your fingertips. 
                            <br />Happy cooking with Island Bites!</p>
                        </div>
                        <div className="footer-content">
                            <h3>Quick Links</h3>
                            <ul className="list">
                                <a href="#!">Home</a>
                                <a href="#!">Recipes</a>
                                <a href="#!">Favorites</a>
                                <a href="#!">Upload</a>
                                <a href="#!">Profile</a>
                            </ul>
                        </div>
                        <div className="footer-content">
                            <h3>Follow Us</h3>
                            <ul className="social-icons">
                                <a href="https://www.facebook.com" role="button"><FaFacebookF /></a>
                                <a href="https://twitter.com" role="button"><FaTwitter /></a>
                                <a href="https://lk.linkedin.com" role="button"><FaLinkedinIn /></a>
                                <a href="https://www.instagram.com" role="button"><FaInstagram/></a>
                            </ul>
                        </div>
                    </div>
                    <div className="bottom-bar">
                        <p>&copy; 2024 Island Bites | All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Cards;
