import React, { useState } from 'react';
import axios from 'axios';

function Upload() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) {
      alert('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPrediction(response.data.predicted_dish);
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while processing image.');
    }
  };

  return (
    <div className="Img">
      <div>
        <h3>Upload Image.</h3>
        <div className="img-container">
          <label htmlFor="image" className="choose-file-button">
            Choose File
          </label>
          <input type="file" id="image" accept="image/*" onChange={handleFileChange} />
        </div>
        <hr />
        <div>
          <button onClick={handleUpload}>Upload</button>
        </div>
        <hr />
        <div>
          <h3>Suggestions:</h3>
          {prediction && <p>Predicted Dish: {prediction}</p>}
        </div>
      </div>
    </div>
  );
}

export default Upload;
