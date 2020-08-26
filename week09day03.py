#Q.1https://leetcode.com/problems/minimum-path-sum/

class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        dp=[[]]
        dp = [[int for x in range(1000)] for x in range(1000)]
        row = len(grid)
        col = len(grid[0])
        for i in range(row):
            for j in range(col):
                dp[i][j]=grid[i][j]+self.minVal(dp,i,j)
        return dp[row-1][col-1]
    
    def minVal(self,dp,i,j):
        if ((i-1 < 0) and (j-1 < 0)):
            return 0
        elif (i-1 < 0):
            return dp[i][j-1]
        elif (j-1 < 0):
            return dp[i-1][j]
        else:
            return min(dp[i-1][j],dp[i][j-1])

#Q.2.https://leetcode.com/problems/decode-ways/
class Solution:
    def numDecodings(self, s: str) -> int:
        n = len(s)
        dp = [0 for i in range(n)]
        if s[0]!='0':
             dp[0]=1
        for i in range(1,n):
            x = int(s[i])
            y = int(s[i-1:i+1])
            if x>=1 and x<=9:
                dp[i]+=dp[i-1]
            if y>=10 and y<=26:
                if i-2>=0:
                    dp[i]+=dp[i-2]
                else:
                    dp[i]+=1
        return dp[-1]

# for study: https://www.geeksforgeeks.org/dynamic-programming/