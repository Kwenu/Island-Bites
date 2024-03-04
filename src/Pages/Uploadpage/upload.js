import React from 'react';
import '../../pages/Uploadpage/upload.css';

function Upload() {
  return (
    <div className="Img">
        <div>
        <h3>Upload Image.</h3>
        <div className="img-container">
            <label htmlFor="image" className="choose-file-button">
                Choose File
            </label>
            <input type="file" id="image" accept="image/*" />
       </div>
       <div className='Label'>
        <label htmlFor="Description">Recipe Details.</label>
        <textarea id="Description"></textarea>
      </div>
      <hr />
      <div>
        <h3>Suggestions.</h3>
      </div>
     </div>
    </div>
  )
}

export default Upload;