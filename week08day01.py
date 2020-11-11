#Q.https://leetcode.com/problems/kth-smallest-element-in-a-bst/submissions/
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: TreeNode, k: int) -> int:
        lst = []
        while root or lst:
            while root:
                lst.append(root)
                root = root.left
            root = lst.pop()
            k -= 1
            if k == 0:
                break
            root = root.right
        return root.val


#or
class Solution:
    def kthSmallest(self, root: TreeNode, k: int) -> int:
        if root is None:
            return
        self.res=[]
        self.inorder(root)
        return self.res[k-1] 
    def inorder(self,root):
        if root: 
            self.inorder(root.left) 
            #print(root.val) 
            self.res.append(root.val)
            self.inorder(root.right)