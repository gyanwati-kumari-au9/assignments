# Q1. https://practice.geeksforgeeks.org/problems/sum-of-binary-tree/1
def sumBT(root):
    #code
    if (root == None): 
        return 0
    return (root.data + sumBT(root.left) + sumBT(root.right)) 


#Q2. https://practice.geeksforgeeks.org/problems/delete-keys-in-a-linked-list/1
'''
class node:
    def __init__(self):
        self.data = None
        self.next = None
'''

def deleteAllOccurances(head, k):
    # Code here
    cur = head 
    while cur.next != None:
        if(cur.next.data == k):
            cur.next = cur.next.next
        else:
            cur = cur.next
    if (head.data == k):
        head = head.next
    return head


