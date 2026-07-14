import cv2
import sys

img_path = r"C:\Users\Sujit singh\Downloads\WhatsApp Image 2026-07-14 at 15.47.27.jpeg"
try:
    img = cv2.imread(img_path)
    if img is None:
        print("Could not read image or image is empty.")
    else:
        h, w, c = img.shape
        print(f"Dimensions: {w}x{h}, channels: {c}")
except Exception as e:
    print(f"Error: {e}")
