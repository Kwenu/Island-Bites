import React from 'react';
import '../../Pages/Uploadpage/upload.css';

function Upload() {
  return (
    <div className="upload-container">
      <div className='upload-content'>
        <h3 className='upload-heading'>Upload Image</h3>
        <div className="image-upload-container">
          <label htmlFor="image" className="upload-choose-file-button">
            Choose File
          </label>
          <input type="file" id="image" accept="image/*" />
        </div>
        <div className='description-section'>
          <label className='description-label' htmlFor="Description">Recipe Details</label>
          <textarea className='description-textarea' id="Description" ></textarea>
        </div>
        <hr className='separator' />
        <div>
          <h3 className='suggestions-heading'>Suggestions</h3>
          {/* Add your suggestions content here */}
        </div>
      </div>
    </div>
  )
}

export default Upload;
