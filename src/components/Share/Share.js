import React from 'react';
import { FaShare } from "react-icons/fa";

const ShareButton = ({ recipe }) => {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: recipe.title,
        text: recipe.description,
        url: window.location.href
      });
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  return (
    <button onClick={handleShare}>
       <FaShare /> Share
    </button>
  );
};

export default ShareButton;
