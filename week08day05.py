# Try to make recursive functions for these two questions
#Q.1 https://leetcode.com/problems/house-robber/
class Solution:
    def rob(self, nums: List[int]) -> int:
            n = len(nums)
            if n==0:
                return 0;
            if n == 1:
                return nums[0]
            s = [0]*(n+1)
            s[1] = nums[0]
            s[2] = nums[1]

            for i in range(3,n+1):
                s[i] = (max(s[i-2],s[i-3]) + nums[i-1])
            return max(s[n],s[n-1])

#Q.2 https://leetcode.com/problems/coin-change/
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        coins.sort()
        return self.countCoins(coins,amount,len(coins)-1,0)
        
    def countCoins(self,coins,amount,idx,count):
        if idx < 0:
            return -1
        c = amount//coins[idx]
        rem = amount % coins[idx]
        if rem == 0:
            return count+c
        else:
            return self.countCoins(coins,rem,idx-1,count+c)