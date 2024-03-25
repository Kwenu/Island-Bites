import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Addrecipe/add.css";

const Add = () => {


  const navigate = useNavigate();

  const [description,setDescription] = useState("");
  const [ingredients,setIngredients] = useState("");
  const [instructions,setInstructions] = useState("");
  const [time,setTime] = useState("");
  const [userId,setUserId] = useState("");
  const[file,setFile] = useState("");

  const upload = () =>{
    const formData = new FormData()
    formData.append("description", description);
    formData.append("ingredients", ingredients);
    formData.append("instructions", instructions);
    formData.append("time", time);
    formData.append("userId", userId);
    formData.append("file", file)

    axios.post('http://localhost:8800/recipes',formData)
    .then((response) => {
      console.log(response);
      navigate("/");
    })
    .catch(er => console.log(er))
  }

  return (
    <div className="add-container">
      <h2 className='add-h2'>Add Your Recipe</h2>
      <h3 className="add-h3">  &nbsp;  &nbsp;"Share your culinary creations with the world! Your recipe will inspire others to cook delicious meals and create lasting memories.<br/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Let's build a vibrant community cookbook together!"</h3>

      <div className="form-group">
        <label htmlFor="description">Recipe Title : </label>
        <textarea id="description"name='description' 
        onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="ingredients">Recipe Ingredients : </label>
        <textarea id="ingredients" name='ingredients' 
        onChange={(e) => setIngredients(e.target.value)}></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="instructions">Recipe Instructions : </label>
        <textarea id="instructions" name='instructions' 
        onChange={(e) => setInstructions(e.target.value)} ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="time">Cooking Duration (In min) : </label>
        <input type="text" id="time" name='time' 
        onChange={(e) => setTime(e.target.value)}></input>
      </div>

      <div className="form-group">
        <label htmlFor="userId">User ID :</label>
        <input type="text" id="userId" name='userId' 
        onChange={(e) => setUserId(e.target.value)}></input>
      </div>

      <div className="form-group">
        <div className="Add-image-container">
        <label className='form-label'>Upload Picture (Optional)</label>
        <input className="form-control form-control-lg" type='file' onChange={(e) => setFile (e.target.files[0])}/>
        </div>
      </div>

      <button type='button' className='add-button' onClick={upload}>Submit</button>

    </div>
  )
}

export default Add;