#OOPS:-it stand for object oriented programming system.
# OOPS is a method of structuring a program by bundling related properties and behaviors into individual objects.
#A Class is like an object constructor, or a "blueprint" for creating objects.
#To create a class, use the keyword class:
#Create a class named Person, use the __init__() function to assign values for name and age:


class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("Gyan", 25)

print(p1.name)
print(p1.age)
 
#Note: The __init__() function is called automatically every time the class is being used to create a new object. 
 #Object Methods
#Objects can also contain methods. Methods in objects are functions that belong to the object. 
#Insert a function that prints a greeting, and execute it on the p1 object:

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def greeting(self):
    print("Hello my name is " + self.name)

p1 = Person("Abi", 30)
p1.greeting()

#The self parameter is a reference to the current instance of the class, and is used to access variables that belong to the class.
#The pass Statement
# class definitions cannot be empty, but if you for some reason have a class definition with no content,
#  put in the pass statement to avoid getting an error
class Person:
  pass
# Example
# Create a class named Person, with firstname and lastname properties, and a printname method:
class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

x = Person("Gyanwati", "Kumari")
x.printname()

#example:-Add a method called welcome to the Student class:

class Student:
  def __init__(self, fname, lname, year):
    self.firstname = fname
    self.lastname = lname
    self.graduationyear = year

  def welcome(self):
    print("Welcome", self.firstname, self.lastname, "to the class of", self.graduationyear)

x = Student("Gyan", "Abi", 2020)
x.welcome()
    
#Example :- display employee details
class Employee:  
    def __init__(self, name, id):  
        self.id = id  
        self.name = name  
  
    def display(self):  
        print("ID:", self.id,"Name:", self.name)    
emp1 = Employee("Ram", 101)  
emp2 = Employee("Sita", 102)  
  
# accessing display() method to print employee 1 information    
emp1.display()    
# accessing display() method to print employee 2 information  
emp2.display() 


#Default Constructor
# When we do not include the constructor in the class or forget to declare it, 
# then that becomes the default constructor. It does not perform any task but initializes the objects
class Student:  
    roll_num = 101  
    name = "Ram"  
  
    def display(self):  
        print(self.roll_num,self.name)  

st = Student()  
st.display()  


#More than One Constructor in Single class
class Student:  
    def __init__(self):  
        print("The First Constructor")  
    def __init__(self):  
        print("The second contructor")  
  
st = Student()  

# note:- the object of the class will always call the last constructor if the class has multiple constructors.




# Looping Through an Iterator
# We can also use a for loop to iterate through an iterable object:
# Example
# Iterate the values of a tuple:
mytuple = ("apple", "banana", "cherry")

for x in mytuple:
  print(x)