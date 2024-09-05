from PIL import Image
import os

# Open an image file
img = Image.open('input/enemy-spaceship.png')  # Use PNG if it has transparency

# Specify the output folder path
output_folder = 'output'

# Create the folder if it doesn't exist
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Loop to create 36 images with 360° rotation (10 degrees each step)
for i in range(36):
    # Rotate the image by i * 10 degrees
    rotated_img = img.rotate(i * 10, expand=True)

    # Define the path to save the rotated image in the output folder
    output_path = os.path.join(output_folder, f'enemy-spaceship-{i*10}.png')

    # Save the rotated image as PNG (which supports transparency)
    rotated_img.save(output_path, 'PNG')

print(f"36 rotated images have been saved in the folder: {output_folder}")
