#Question 1: Take input from a user and tell if the particular no is a prime no or not.

x=int(input("enter any number: "))
i=2
prime=True

while (i<x-1) :
    r=x%i
    if (r==0) :
      prime=False
      break
    i=i+1
if(prime) :
   print("entered number is a prime number: ")
else :
    print("entered number is not a prime number: ")




# Question 2: Write a program which takes an input n(no of rows) and will print the pattern like
# below
# Eg n = 4
# 1
# 1 2
# 1 2 3
# 1 2 3 4
# Eg n = 2
# 1
# 1 2
# Eg n = 5
# 1
# 1 2
# 1 2 3
# 1 2 3 4
# 1 2 3 4 5


n=int(input("enter any number: "))
row=1

while (row<=n) :
    column=1
    while (column<=row) :
        print(str(column)+" " ,end='')
        column =column+1 
    print()       
    row=row+1



