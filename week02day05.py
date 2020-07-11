# Write a program that outputs the string representation of numbers from 1 to n.

# But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. 
# For numbers which are multiples of both three and five output “FizzBuzz”.

# Example:

# n = 15,

# Return:
# [
#     "1",
#     "2",
#     "Fizz",
#     "4",
#     "Buzz",
#     "Fizz",
#     "7",
#     "8",
#     "Fizz",
#     "Buzz",
#     "11",
#     "Fizz",
#     "13",
#     "14",
#     "FizzBuzz"
# ]

def string_representation(n) :
    for FizzBuzz in range (1,n+1) :
        if (FizzBuzz%3==0 and FizzBuzz%5==0):
            print("FizzBuzz")
            continue
        elif (FizzBuzz%5==0) :
            print("Buzz")
            continue
        elif (FizzBuzz%3==0) :
            print("Fizz")
        else:
            print(FizzBuzz)
if __name__ == "__main__" :
    n=int(input('Input integer number'))
string_representation(n)   



#Q2. Given a string apple banana sum check for space present in it


def check_space (str1) :
    space=False
    x=len(str1)
    for i in range (x):
        if(str1[i]==' ') :
            space=True
            break
    if space:
        print('Yes')
    else:
        print('No')
        
y=input("enter string : ")
space=check_space(y)
    





# Given a 32-bit signed integer, reverse digits of an integer.
# Example 1:
# Input: 123
# Output: 321
# Example 2:

# Input: -123
# Output: -321
# Example 3:

# Input: 120
# Output: 21
# Note:
# Assume we are dealing with an environment which could only store integers within the 32-bit 
# signed integer range: [−231,  231 − 1]. 
# For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
        

def reverse (n) :
    remainder=0
    rev=0
    origVal = n
    if(n<0):
        n =n * -1

    while(n>0):
        remainder=n%10
        n=int(n/10)
        rev=(rev*10)+remainder
    if(origVal<0) :
        rev=rev*-1
    return rev
x=int(input("enter the number: "))
r=reverse(x)
print("number : ",x)
print("reverse: ",r)



#Q4. Given a string print all the vovels present in it

def print_vowels (string) :

    for i in string :
        if (i=='a' or i=='e' or i=='i' or i=='o' or i=='u') :
          print(i)

x=input("Enter string : ")
vowels=print_vowels(x)




#05. Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

# Note:

# The length of both num1 and num2 is < 5100.
# Both num1 and num2 contains only digits 0-9.
# Both num1 and num2 does not contain any leading zero.
# You must not use any built-in BigInteger library or convert the inputs to integer directly.

def strToList(strVal):
    lst = []
    x=len(strVal)
    for l1 in range (0,x):
        lst.append(int(strVal[l1]))
    return lst

def sumString(num1,num2):
    x=strToList(num1)
    # print('=======X>',x)
    y=strToList(num2)
    # print('=======Y>',y)

    k=max(len(x), len(y))+1
    # print('====K===>',k)
    z=0
    a=len(x)
    b=len(y)
    sum=[]
    for i in range(0,k):
        index=k-i
        # print('index',index, a, b,k, i)
        if (i < a):
            z=z+x[a-i-1]
        if(i<b):
            z=z+y[b-i-1]
        sum.append(z%10)
        z=int(z/10)
        # print('Sum/Z',sum, z)
    retVal=""
    for dig in sum[::-1]:
        retVal+=str(dig)
    return retVal


num1=input("Enter number of first string: ")
num2=input("Enter number of second string: ")
z=sumString(num1,num2)

print(z)


                


