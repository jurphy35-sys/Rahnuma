with open('codingal.txt','w')as file:
    file.write("hi i am penguin i am 1 year old")
    file.close()
with open('codingal.txt','r')as file:
    data=file.readlines()
    print("words with this file are......")
    for line in data:
        word =line.split()
        print(word)
        file.close()
