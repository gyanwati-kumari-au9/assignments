#1) https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x/0

def firstOccurence(arr,n,x,low,high):
    mid=0
    if (high >= low):       
        mid=(low+high)//2
        if ((mid==0 or x > arr[mid-1]) and arr[mid]==x):
            return mid
        elif (x > arr[mid]):
            return firstOccurence(arr,n,x,mid+1,high)
        else:
            return firstOccurence(arr,n,x,low,mid-1)

def lastOccurence(arr,n,x,low,high):
    mid=0
    if (high >= low):           
        mid=(low+high)//2
        if ((mid == n-1 or x < arr[mid+1]) and arr[mid]==x):
            return mid
        elif (x<arr[mid]):
            return lastOccurence(arr,n,x,low,mid-1)
        else:
            return lastOccurence(arr,n,x,mid+1,high)

print("-----------------------------------")
print("--print first occurence and last occurence--")
print("-----------------------------------")

if __name__=="__main__":
    testcases=int(input())
    for tc in range(0,testcases):
        y=input()
        y=y.split()
        k=int(y[0])
        z=int(y[1])
        arr=input()
        arr=arr.split()
        for idx in range(0,len(arr)):
            arr[idx]=int(arr[idx])
        
        x=firstOccurence(arr,k,z,0,k-1)
        y=lastOccurence(arr,k,z,0,k-1)
        if x == None or y == None:
            print(-1)
        else:
            print(str(x) +" "+ str(y))
        
    
#Q2. Try to solve the peak element problem in O(logn) complexity 
   
def findPeakElement(A, left, right):
    mid = (left +(right-left) // 2)
    if ((mid == 0) or (A[mid - 1] <= A[mid])) and ((mid == len(A) - 1) or (A[mid + 1] <= A[mid])):
        return mid

    if (mid-1 >= 0 and A[mid - 1] > A[mid]):
        return findPeakElement(A, left, mid - 1)

    return findPeakElement(A, mid + 1, right)

print("-----------------------------------")
print("---------print peak element---------")
print("-----------------------------------")

if __name__ == '__main__':
    arr=input()
    arr=arr.split()
    for idx in range(0,len(arr)):
        arr[idx]=int(arr[idx])
    res = findPeakElement(arr,0,len(arr)-1)
    print(arr[res])