class student:
    
    grade=10
    name="penguin"
    def introduction(self):
        print("hi am a student")  
    def details(self):
        print("my name is ",self.name)
        print("my grade is ",self.grade)
ob=student()
ob.introduction()
ob.details()