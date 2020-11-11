#Q.1)https://leetcode.com/problems/binary-tree-inorder-traversal/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def solve (self, root: TreeNode,res:List[int]):
        if root is None:
            return
      
        self.solve(root.left,res)
        res.append(root.val)
        self.solve(root.right,res)
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        res=list()
        self.solve(root,res)
        return res


#Q.2)https://leetcode.com/problems/binary-tree-postorder-traversal/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def solve (self, root: TreeNode,res:List[int]):
        if root is None:
            return
      
        self.solve(root.left,res)
        self.solve(root.right,res)
        res.append(root.val)
    def postorderTraversal(self, root: TreeNode) -> List[int]:
        res=list()
        self.solve(root,res)
        return res

#Q.3)https://leetcode.com/problems/binary-tree-preorder-traversal/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def solve (self, root: TreeNode,res:List[int]):
        if root is None:
            return
        res.append(root.val)
        self.solve(root.left,res)
        self.solve(root.right,res)
     
        
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        res=list()
        self.solve(root,res)
        return res


#Q.4)file:///C:/Users/t/Downloads/Assign-5b56bf0e-7221-412b-8112-21638f74b0c1.pdf
#refer pdf question pic 4
preorder:- 2,7,2,6,5,11,5,9,4
postorder:- 2,5,11,6,7,4,9,5,2
inorder:- 2,7,5,6,11,2,5,4,9


