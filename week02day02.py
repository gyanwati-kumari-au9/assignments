# Q1. Write a user driven program which will will ask users to input two no and perform some calculation
# Eg
# Input no 1: 5
# Input no 2: 10
# Enter 1 to do addition Enter 2 to do subtraction Enter 3 to do multiplication Enter 4 to do division

a=int(input("enter any  numbers : "))
b=int(input("enter any numbers : "))
c=(input("chose any operator +,-,*,/"))
#c=input("chose any operator +,-,*,/")
output=0

if (c=='+') :
    output=a+b
    print("addition of entered number is: "+str(output))
    
elif (c=='-') :
    output=a-b
    print("substraction of entered number is: "+str(output))
    
elif (c=='*') :
    output=a*b
    print("multiplication of entered number is: "+str(output))
   
elif (c=='/') :
    output=a/b
    print("division of entered number is: "+str(output))
    
else :
    print("invalid")



# Q2. Input a no from the user and print if its even or odd. Eg :
# no: 5
# Output: it is odd
# No: 10
# Output: it is even

# x=input("enter any numbers: ")
# y=x%2

# if (y==0) :
#     print("entered value is even: ")
# elif (y!=0) :
#     print("entered value is odd: ")
# else :
#     print("Invalid")