import cv2 as cv
import numpy as np
import arrays
import pickle

color = (0, 0, 255)
thickness = 2

cap = cv.VideoCapture("Busy Parking Lot Time Lapse [LQ5OqIgJy2c].webm")
cv.startWindowThread()

posList = arrays.getPositions()

def checkParkingSpace(imgPro):
    
    for pos in posList:

        x = pos[1, 1]
        imgCrop = imgPro[pos[1, 1]:pos[3, 1],pos[0, 0]:pos[2, 0]] 
        cv.imshow("imgCropped" + str(x), imgCrop)


    
while True:
    success, img = cap.read()
    dim = (1392, 816)
    resize = cv.resize(img, dim)

    imgGray = cv.cvtColor(resize, cv.COLOR_BGR2GRAY)
    imgBlur = cv.GaussianBlur(imgGray, (3, 3), 1)
    imgThreshold = cv.adaptiveThreshold(imgBlur, 255,cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY_INV, 25, 16)
    imgMedian = cv.medianBlur(imgThreshold, 5)
    kernel = np.ones((3, 3), np.uint8)
    imDilate = cv.dilate(imgMedian, kernel, iterations=1)

    checkParkingSpace(imDilate)
    
    for pos in posList:
        cv.polylines(resize, [pos], isClosed = True, color = color, thickness = thickness)

    cv.imshow("Image", resize)
    cv.imshow("ImageBlur", imgBlur)
    cv.imshow("ImgThresh", imgThreshold)
    cv.waitKey(1)
