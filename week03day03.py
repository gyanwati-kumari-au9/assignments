# Q1.
# Given the participants' score sheet for your University Sports Day, you are required to
# find the runner-up score. You are given scores. Store them in a list and find the score of
# the runner-up.
# Input Format
# The first line contains an integer n . The second line contains an array of integers each
# separated by a space.
# Output Format
# Print the runner-up score.
# Sample Input 6
# 5 2 3 6 6 5
# Sample Output 
# 5


def findRunnerUpScore(arr,n):
    maxval=max(lst)
    while (maxval==max(lst)):
        lst.remove(maxval)
    print(max(lst))
n=int(input("array size: "))
lst=[int(i)for i in input().split()][:n]
findRunnerUpScore(lst,n)