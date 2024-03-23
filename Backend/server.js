const express = require('express');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());


app.use(express.json());

app.post('/upload', async (req, res) => {
  try {
    // Receiving image file from frontend
    const image = req.body.image;

    // Saving image to a temporary file (optional)
    fs.writeFileSync('temp.jpg', image, 'base64');

    // Forwarding image to Python server
    const formData = new FormData();
    formData.append('image', fs.createReadStream('temp.jpg'));
    const response = await axios.post('http://localhost:5000/predict', formData, {
      headers: formData.getHeaders(),
    });

     // Deleting the temporary image file
     fs.unlinkSync('temp.jpg');

    // Sending a prediction back to frontend
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
