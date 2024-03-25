// import React, { useState } from 'react'
// import axios from "axios";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import '../Profilepage/update.css';

// const Update = () => {

//   const [recipe,setRecipe] = useState({
//     ingredients:"",
//     description:"",
//     instructions:"",
//     img:"", // This will store the updated image data
//     createdAt:"",
//   });

//   const navigate = useNavigate();
//   const location = useLocation();

//   const recipeId = location.pathname.split("/")[2];

//   const handleChange = (e) => {
//     setRecipe((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleImageChange = (e) => {
//     // Handle image upload
//     const file = e.target.files[0];
//     setRecipe((prev) => ({ ...prev, img: file }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("ingredients", recipe.ingredients);
//       formData.append("description", recipe.description);
//       formData.append("instructions", recipe.instructions);
//       formData.append("createdAt", recipe.createdAt);
//       formData.append("file", recipe.img); // Append image file to FormData

//       await axios.put(`http://localhost:8800/recipes/${recipeId}`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data", // Set proper headers for form data
//         },
//       });
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   console.log(recipe);

//   return (
//     <div className="add">
//       <label className='Label' htmlFor="description">Update the recipe.</label>
//       <div>
//         <label className='Label' htmlFor="description">Description.</label>
//         <textarea id="description" name='description' onChange={handleChange}></textarea>
//       </div>

//       <div>
//         <label className='Label' htmlFor="ingredients">Ingredients.</label>
//         <textarea id="ingredients" name='ingredients' onChange={handleChange}></textarea>
//       </div>

//       <div>
//         <label className='Label' htmlFor="instructions">Recipe Instructions.</label>
//         <textarea id="instructions" name='instructions' onChange={handleChange}></textarea>
//       </div>

//       <div>
//         <label className='Label' htmlFor="time">Time.</label>
//         <input type="text" id="time" name='createdAt' onChange={handleChange}></input>
//       </div>

//       <div>
//         <h3>Upload Picture (Optional).</h3>
//         <div className="image-container">
//           <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
//           <label htmlFor="image" className="choose-file-button">
//             Choose File
//           </label>
//         </div>
//       </div>
//       <hr />
      
//       <div>
//         <button type="submit" onClick={handleClick}>Update</button>
//       </div>
//     </div>
//   )
// }

// export default Update;



import React, { useState } from 'react'
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../Profilepage/update.css'

const Update = () => {

  
  const [recipe,setRecipe] = useState({
    ingredients:"",
    description:"",
    instructions:"",
    img:"", // This will store the updated image data
    createdAt:"",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const recipeId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setRecipe((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    // Handle image upload
    const file = e.target.files[0];
    setRecipe((prev) => ({ ...prev, img: file }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("ingredients", recipe.ingredients);
      formData.append("description", recipe.description);
      formData.append("instructions", recipe.instructions);
      formData.append("createdAt", recipe.createdAt);
      formData.append("file", recipe.img); // Append image file to FormData

      await axios.put(`http://localhost:8800/recipes/${recipeId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set proper headers for form data
        },
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(recipe);

  
  return (
    <div className="update-container"> {/* Updated class name */}
      <h2 className='update-h2'>Update Your Recipe</h2> {/* Updated class name */}
      <form>
        <div className="form-group-update">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" onChange={handleChange}></textarea>
        </div>

        <div className="form-group-update">
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea id="ingredients" name="ingredients" onChange={handleChange}></textarea>
        </div>

        <div className="form-group-update">
          <label htmlFor="instructions">Instructions:</label>
          <textarea id="instructions" name="instructions" onChange={handleChange}></textarea>
        </div>

        <div className="form-group-update">
          <label htmlFor="time">Time:</label>
          <input type="text" id="time" name="createdAt" onChange={handleChange}></input>
        </div>

        <div className="form-group-update">
          <div className="update-image-container"> 
            <label htmlFor="image" >Upload Picture (Optional)</label>
            <input className="update-INPUT" type='file' id="image" onChange={handleImageChange}/> 
          </div>
        </div>

        <button className='update-button' type="submit" onClick={handleClick}>Update</button>
      </form>
    </div>
  );
}

export default Update;