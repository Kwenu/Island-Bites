import React from 'react';
import '../Addrecipe/add.css';

function Add() {
  return (
    <div className="add">
      <div>
        <label className='Label' htmlFor="description">Description.</label>
        <textarea id="description"></textarea>
      </div>

      <div>
        <label className='Label' htmlFor="ingredients">Ingredients.</label>
        <textarea id="ingredients"></textarea>
      </div>

      <div>
        <label className='Label' htmlFor="instructions">Recipe Instructions.</label>
        <textarea id="instructions"></textarea>
      </div>

      <div>
        <label className='Label' htmlFor="time">Time.</label>
        <input type="text" id="time" />
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
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default Add;