# Q.1)https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1
class Node:
    def __init__(self, val):   # data -> value stored in node
        self.val = val
        self.next = None
class LinkedList: 
    def __init__(self): 
        self.head = None

    def getNthfromEnd(self,head,n):
    #code here
        temp = head 
        length = 0
        while temp is not None: 
            temp = temp.next
            length = length + 1
    
        if  n>length:
            return -1
        temp = head 
        for i in range(0, length - n): 
            temp = temp.next
        return temp.val

def addElementToEndOfTheLL(head, x):
    if head is None:
        return Node(x)

    cur = head
    while cur.next != None:
        cur = cur.next
    cur.next = Node(x)
    return head

print("-----------------------------------")
print("-print nth node from end of linked list-")
print("-----------------------------------")

if __name__=="__main__":
    lst=input()
    lst=lst.split()
    x=int(lst[0])
    y=int(lst[1])
    z=input()
    z=z.split()
    lNode=None
    for idx in range(0,len(z)):
        lNode=addElementToEndOfTheLL(lNode, int(z[idx]))
    ll=LinkedList()
    val=ll.getNthfromEnd(lNode,y)
    print(val)


# Q.2)https://practice.geeksforgeeks.org/problems/count-nodes-of-linked-list/1
class Node:
    def __init__(self,val):
        self.val=val
        self.next=None

class LinkedList:
    def __init__(self): 
        self.head_node = None

    def getCount(self,head_node):
        temp = head_node 
        count = 0 
        while (temp): 
            count += 1
            temp = temp.next
        return count

def addElementToEndOfTheLL(head, x):
    if head is None:
        return Node(x)

    cur = head
    while cur.next != None:
        cur = cur.next
    cur.next = Node(x)
    return head

print("-----------------------------------")
print("---------Count node----------------")
print("-----------------------------------")

if __name__=="__main__":
    N=int(input())
    lst=input()
    lst=lst.split()
    head=None
    for idx in range(0,len(lst)):
        head=addElementToEndOfTheLL(head,int(lst[idx]))
    ll=LinkedList()
    val=ll.getCount(head)
    print(val)

# Q.3)https://practice.geeksforgeeks.org/problems/reverse-a-linked-list/1
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class LinkedList:
    def __init__(self): 
        self.head = None

    def reverseList(self,head):
        curr=head
        prev=None
        while curr != None:
            next = curr.next
            curr.next=prev
            prev=curr
            curr=next
        return prev

def addElementToEndOfTheLL(head, x):
    if head is None:
        return Node(x)

    cur = head
    while cur.next != None:
        cur = cur.next
    cur.next = Node(x)
    return head
def printLinkedList(head):
    cur = head
    while cur != None:
        print(cur.val, end=' ')
        cur = cur.next

print("-----------------------------------")
print("---------Reverse linked list-------")
print("-----------------------------------")

if __name__=="__main__":
    N=int(input())
    lst=input()
    lst=lst.split()
    head=None
    for idx in range(0,len(lst)):
        head=addElementToEndOfTheLL(head,int(lst[idx]))
    ll=LinkedList()
    val=ll.reverseList(head)
    printLinkedList(val)