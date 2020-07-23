# Questions 1: Implement recursive and iterative version of binary search and give explaination for its time complexity.

# Recursive binary search:-
def binarySearch(lst,n,L,R):    
    if (L>R):
        return False
    else:
        mid=(L+R)//2
        if (n==lst[mid]):
            return True
        elif (n<lst[mid]):
            return binarySearch(lst,n,L,mid-1)
        else: 
            return binarySearch(lst,n,mid+1,R)
if __name__=="__main__":
    lst=input("Enter list of element: ")
    n=int(input("Enter search element: "))
    lst=lst.split()
    lst.sort()
    L=0
    R=len(lst)-1
    for index in range(0,len(lst)):
        lst[index]=int(lst[index])
    res=binarySearch(lst,n,L,R)
    print(res)


# Iterative version:- 
def binarySearch(lst,n):
    L=0
    R=len(lst)-1
    while(L<=R):
        mid=(L+R)//2
        if lst[mid]==n:
            return True
        else:
            if lst[mid]<n:
                L=mid+1
            else:
                R=mid-1
    return False
if __name__=="__main__":
    lst=input("Enter list of element: ")
    n=int(input("Enter search number: "))
    lst=lst.split()
    lst.sort()
    for index in range(0,len(lst)):
        lst[index]=int(lst[index])
    res=binarySearch(lst,n)
    print(res)

# Time Complexity:-
# >> one loop is there 
#     mid=(L+R)//2 ----in this case iteration will be 
#     n=2^(log n)
#     ------
#     ------
#     4=2^2
#     2=2^1
#     2=2^0
#     iterates log n times
# >> if else statement , in this case constant like 1 times
# >> rule of time complexity :- drop lower order terms and 
#    drop all the constant multipliers. 
#    Therefore , Time complexity = O(log n)