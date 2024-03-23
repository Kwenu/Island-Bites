from keras.applications.resnet50 import preprocess_input
from keras.preprocessing import image as keras_image
import numpy as np
from flask import Flask, request, jsonify
from keras.models import load_model
from PIL import Image
import io

app = Flask(__name__)

# Load your trained model here
model = load_model('food_recognition_model.h5')

# Dummy function to simulate image recognition
def predict_dish(image):
    img = keras_image.img_to_array(image)
    img = np.expand_dims(img, axis=0)
    img = preprocess_input(img)

    # Perform inference using your model
    prediction = model.predict(img)

    # Decode prediction (you may need to adjust this based on your model's output format)
    classes = ['beef_curry', 'Dhal_curry', 'FishCurry', 'Chicken_Fried_Rice', 'StringHoppers']  # Example classes
    predicted_class = classes[np.argmax(prediction)]
    return {'predicted_dish': predicted_class}

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'})

    # Receive image from request
    image = request.files['image'].read()
    
    # Convert image bytes to numpy array
    image = Image.open(io.BytesIO(image))
    image = np.array(image)

    # Dummy prediction for demonstration
    prediction = predict_dish(image)

    return jsonify(prediction)

if __name__ == '__main__':
    app.run(debug=True)
