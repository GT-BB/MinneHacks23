import cv2 as cv
import numpy as np
import arrays
import pickle
import cvzone
import time

frameCount = 0
colorred = (0, 0, 255)
colorgreen = (0, 255, 0)
thickness = 2

upper = np.array([360, 255, 255]) 
lower = np.array([200, 200, 200])

cap = cv.VideoCapture("Busy Parking Lot Time Lapse [LQ5OqIgJy2c].webm")
cv.startWindowThread()

posList = arrays.getPositions()
plswork = []
anothercounter = 0

class PS:
    def __init__(self, numSpace, isFilled, newCount = 0, oldCount = 0):
        self.numSpace = numSpace
        self.isFilled = isFilled   
        self.newCount = 0
        self.oldCount = 0
        self.cycles = []
        self.changes = []

        def getCount():
            return self.newCount

        def setOldCount(self, count):
            self.oldCount = count
        
PSpace = [PS(0, False), PS(1, False), PS(2, False), PS(3, False), PS(4, False), PS(5, False), PS(6, False),
          PS(7, False), PS(8, False), PS(9, False), PS(10, True), PS(11, False), PS(12, False), PS(13, False),  
          PS(14, False), PS(15, False), PS(16, False), PS(17, False), PS(18, False), PS(19, False), PS(20, False)]

def checkParkingSpace(imgPro): 
    for i in range(20):
        pos = posList[i]
        topright = pos[1]

        imgCrop = imgPro[pos[1, 1]:pos[3, 1],pos[0, 0]:pos[2, 0]] 
        cv.imshow("imgCropped" + str(topright), imgCrop)

        count = cv.countNonZero(imgCrop)

        if (frameCount == 0):
            PSpace[i].newCount == count
        if (frameCount == 1):
            PSpace[i].oldCount = PSpace[i].newCount
            PSpace[i].newCount = count
        elif ((frameCount % 10) == 0):
            PSpace[i].oldCount = PSpace[i].newCount
            PSpace[i].newCount = count

            difference = PSpace[i].newCount - PSpace[i].oldCount
            if (1 <= PSpace[i].numSpace) & (PSpace[i].numSpace <= 5) & (difference >= 500):
                PSpace[i].isFilled = True
                PSpace[i].cycles.append(frameCount)
                PSpace[i].changes.append("GtR")
            elif (1 <= PSpace[i].numSpace) & (PSpace[i].numSpace <= 5) & (difference <= -500):
                PSpace[i].isFilled = False
                PSpace[i].cycles.append(frameCount)
                PSpace[i].changes.append("RtG")

            if (6 <= PSpace[i].numSpace) & (PSpace[i].numSpace <= 16) & (difference >= 200):
                PSpace[i].isFilled = True
                PSpace[i].cycles.append(frameCount)
                PSpace[i].changes.append("GtR")

            elif (6 <= PSpace[i].numSpace) & (PSpace[i].numSpace <= 16) & (difference <= -200):
                PSpace[i].isFilled = False
                PSpace[i].cycles.append(frameCount)
                PSpace[i].changes.append("RtG")

        #differencearr = PSpace[i].cycles
        #diffper = np.array(differencearr)
        #values = np.diff(diffper)
        #median = np.percentile(values, 50)
         

            stats(i)

        cvzone.putTextRect(resize, str(PSpace[i].newCount), (topright[0],topright[1]+45), scale=1.5, thickness=2, offset=0)

def stats(num):
    differencearr = PSpace[num].cycles
    diffper = np.array(differencearr)
    values = np.diff(diffper)
    median = np.median(values)
    #print (median)

    if (np.isnan(median) == False) & (median < 120):
        print (median)
        

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
    
    for i in range(len(posList)):
        pos = posList[i]
        if (PSpace[i].isFilled == True):
            cv.polylines(resize, [pos], isClosed = True, color = colorgreen, thickness = thickness)
        else:
            cv.polylines(resize, [pos], isClosed = True, color = colorred, thickness = thickness)

    cv.imshow("Image", resize)
    cv.imshow("ImageBlur", imgBlur)
    cv.imshow("ImgThresh", imgMedian)
    cv.waitKey(1)
    frameCount += 1

   
