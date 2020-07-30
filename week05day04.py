#https://leetcode.com/problems/generate-parentheses/

def generateParenthesis(n):
    lst=[]
    brackets(lst,"",0,0,n)
    return lst
        
def brackets(lst,string,openB,closeB,n):
    if(len(string)==n*2):
        lst.append(string)
        return
    if(openB<n):
        brackets(lst,string+"(",openB+1,closeB,n)
    if(closeB<openB):
        brackets(lst,string+")",openB,closeB+1,n)
    

if __name__=="__main__":
    n=int(input())
    res=generateParenthesis(n)
    print("[")
    for i in range(0,len(res)):
        print("\""+res[i]+"\",")
    print("]")