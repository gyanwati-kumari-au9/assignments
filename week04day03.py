# Q1. Using the recursive fibonacci number function, print first n fibonacci numbers.
# Fibonacci(n) ->. Will print the nth fibonacci number

def fibonacci(n):
    if n==1:
        return 1
    elif n==2:
        return 1
    elif n>2:
        return fibonacci(n-1)+fibonacci(n-2)

if __name__=="__main__":
    n=int(input("Enter any number: "))
    for i in range(1,n+1):
        print(i,":",fibonacci(i))