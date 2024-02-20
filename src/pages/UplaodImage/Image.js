import React from 'react'
import './image.css'

function Image() {
  return (
    <div className="Image">
        <div>
        <h3>Upload Image.</h3>
        <div className="image-container">
            <label htmlFor="image" className="choose-file-button">
                Choose File
            </label>
            <input type="file" id="image" accept="image/*" />
       </div>
       <div className='label-container'>
        <label htmlFor="description">Recipe Details.</label>
        <textarea id="description"></textarea>
      </div>
      <hr />
      <div>
        <h3>Suggestions.</h3>
      </div>
     </div>
    </div>
  )
}

export default Image;