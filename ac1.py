import cv2
import matplotlib.pyplot as plt
image= cv2.imread('example.jfif')
image=cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

height,width,_=image.shape
cv2.rectangle(image,(20,20),(170,170),(225,225,0),3)
cv2.rectangle(image,(width-220,height-170),
(width-20,height-20),(225,0,225),3)
cv2.circle(image,(95,95),15,(0,255,0),-1)
cv2.circle(image,(width-120,height-95),15,(0,255,0),-1)
plt.imshow(image)
plt.title("RGB Image")
plt.show()