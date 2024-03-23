import numpy as np
import tensorflow as tf
from keras.src.preprocessing.image import ImageDataGenerator
from keras.applications.resnet50 import ResNet50
from keras.layers import Dense, GlobalAveragePooling2D
from keras.models import Model
from sklearn.metrics import classification_report

train_data_dir = r'C:\Users\User\Desktop\Dataset 1\train' 
validation_data_dir = r'C:\Users\User\Desktop\Dataset 1\validation'
test_data_dir = r'C:\Users\User\Desktop\Dataset 1\test'

train_datagen = ImageDataGenerator(rescale=1./255)
validation_datagen = ImageDataGenerator(rescale=1./255)
test_datagen = ImageDataGenerator(rescale=1./255)

train_generator = train_datagen.flow_from_directory(
    train_data_dir,
    target_size=(224, 224),
    batch_size=32,
    class_mode='categorical')

validation_generator = validation_datagen.flow_from_directory(
    validation_data_dir,
    target_size=(224, 224),
    batch_size=32,
    class_mode='categorical')

# Loading pre-trained ResNet50 model
base_model = ResNet50(weights='imagenet', include_top=False)

# Adding custom classification layers
x = base_model.output
x = GlobalAveragePooling2D()(x)
x = Dense(1024, activation='relu')(x)
predictions = Dense(5, activation='softmax')(x)

model = Model(inputs=base_model.input, outputs=predictions)

# Freezing layers in base model
for layer in base_model.layers:
    layer.trainable = False

# Compiling the model
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Training the model
model.fit(train_generator, epochs=100, validation_data=validation_generator)

# Save the trained model for TensorFlow.js
converter = tf.saved_model.save(model, 'food_recognition_model')

# Evaluating on test data
test_generator = test_datagen.flow_from_directory(
    test_data_dir,
    target_size=(224, 224),
    batch_size=32,
    class_mode='categorical')

test_loss, test_acc = model.evaluate(test_generator)
print('Test accuracy:', test_acc)

# After training the model
test_generator_1 = test_datagen.flow_from_directory(
    test_data_dir,
    target_size=(224, 224),
    batch_size=32,
    class_mode='categorical')

# Get model predictions on test data
predictions = model.predict(test_generator_1)
predicted_classes = np.argmax(predictions, axis=-1)
true_classes = test_generator.classes  # Assuming class labels are available

# Calculate evaluation metrics
report = classification_report(true_classes, predicted_classes)
print("Classification Report:")
print(report)