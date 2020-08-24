
# Q1. Try to solve this with dp
#  https://leetcode.com/problems/coin-change/
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        MAX = amount + 1
        coins.sort(reverse=True)
        dp = [MAX]*(MAX)
        dp[0] = 0
        for i in range(1, MAX):
            dp[i] = min([dp[i-c] if i>=c else (MAX) for c in coins]) ### List Comprehension is faster
            dp[i] = dp[i] + 1 if dp[i] != MAX else dp[i]
        return -1 if (dp[-1] == MAX) else dp[-1]

#Q2. https://leetcode.com/problems/fibonacci-number/
class Solution:
    def fib(self, N: int) -> int:
        dp = [0, 1]  
      
        while len(dp) < N + 1:  
            dp.append(0)  

        if N <= 1:  
            return N  
        else:  
            if dp[N - 1] == 0:  
                dp[N - 1] = self.fib(N - 1)  

            if dp[N - 2] == 0:  
                dp[N- 2] = self.fib(N - 2)  

        dp[N] = dp[N - 2] + dp[N - 1]  
        return dp[N] 
#Bonus Question :)
#Q3. https://leetcode.com/problems/next-greater-element-i/
class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        arr=[]
        for i in range(len(nums1)):
            res=-1
            found=False
            for j in range(len(nums2)):
                if nums1[i] == nums2[j]:
                    found=True
                if found and nums1[i]<nums2[j]:
                    res=nums2[j]
                    break  
            arr.append(res)       
        return arr
        

 