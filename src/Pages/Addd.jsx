import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Addd = () => {

  const [recipe,setRecipe] = useState({
    ingredients:"",
    description:"",
    instructions:"",
    img:null,
    userId:"",
    createdAt:null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRecipe((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/recipes", recipe);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(recipe)

  return (
    <div className="add">
      <div>
        <label className='Label' htmlFor="description">Description.</label>
        <textarea id="description"name='description' onChange={handleChange}></textarea>
      </div>

      <div>
        <label className='Label' htmlFor="ingredients">Ingredients.</label>
        <textarea id="ingredients" name='ingredients' onChange={handleChange}></textarea>
      </div>

      <div>
        <label className='Label' htmlFor="instructions">Recipe Instructions.</label>
        <textarea id="instructions" name='instructions' onChange={handleChange} ></textarea>
      </div>

      <div>
        <label className='Label' htmlFor="time">Time.</label>
        <input type="text" id="time" name='createdAt' onChange={handleChange}></input>
      </div>

      <div>
        <label className='Label' htmlFor="userId">userId</label>
        <input type="text" id="userId" name='userId' onChange={handleChange}></input>
      </div>

      <div>
        <h3>Upload Picture (Optional).</h3>
        <div className="image-container">
            <input type="file" id="image" accept="image/*" />
            <label htmlFor="image" className="choose-file-button">
                Choose File
            </label>
       </div>
     </div>
     <hr />
      
      
      <div>
        <button type="submit" onClick={handleClick}>Submit</button>
      </div>

    </div>
  )
}

export default Addd;