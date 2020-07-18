# Q1. What is the time complexity of the following code :
# a = 0, i = N
# while i > 0:
# a += i
# i /= 2  

#Note:- when i>0 in this conditions loop is going in infinite loop since 
#there is some problem in the question.
#Explanation:- suppose i>1 then
# i
# N
# N/2
# N/2^2
# N/2^3
# -------
# -------
# N/2^n
# Assume, it will be terminate when i<1
# N/2^n=1
# N=2^n
# n=log2N       (here log base 2 N)

# The loop iterates O(logN) times
# so, Time complexity=O(logN)





# Q2 What is the time complexity of the following code
# i = n / 2
#  while i < n:
#  j = 2
#  while j < n:
#  j *= 2    


# Explanation:-The two loops are here this is called nested loop,
# but the number of iterations of inner loop runs is independent of the 
# outer loop. Therefore outer loop iterates n/2 times.
# now, inner loop :-
# j=2*2=2^2
#  =2^2*2=2^3
#  =2^3*2=2^4
#  -----------
#  ------------
#  2^n
#  suppose, Terminate
#  when,  j>=n
#  since, j=2^n
#  2^n>n
#  n=log2n        (here log base 2 n)
#   =o(logn)
#   Therefore, Time complexity=nlogn




# Q3.
#  count = 0;
#  i = N
#  while i > 0:
#  While j < i:
#  count+=1
#  i /= 2            


# Explationation:-The two loops are here this is called nested loop 
# N, outer                           inner iterations
#      N                                  N 
#      N/2                                N/2 
#      N/4                                N/4 
#      ----                              -----  
#      -----                            -------
#      4                                   4 
#      2                                   2 
#      1                                   1 

#      The inner loop dependent on the control variable of the outer loop.
#      Therefore, The geometric series= 1+2+4+-----+N/4+N/2+N = 2N-1 
#      since, rule of time complexity is drop lower order terms and drop all 
#      the constant multipliers.
     
#      Time complexity = O(n)