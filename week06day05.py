# Question : Implement a stack using linked list
class Node:
    def __init__(self,val):
        self.val=val
        self.next=None

class LinkedList:
    def __init__(self): 
        self.head = None

    def insert(self, x): 
        x = Node(x) 
        if self.head is None: 
            self.head = x 
            return
        last = self.head 
        while (last.next): 
            last = last.next
        last.next =  x 

    def removeLastNode(self): 
        if self.head == None: 
            return None
        if self.head.next == None: 
            head = None
            return None
        second_last = self.head 
        while(second_last.next.next): 
            second_last = second_last.next
        second_last.next = None
        return self.head.val

class Stack:
    def __init__(self):
        self.__stack = LinkedList()
        self.head=None
        

    def push(self,x):
        self.head=x
        self.__stack.insert(x)

    def pop(self):
        self.head=self.__stack.removeLastNode()
        return self.head

    def peek(self):
        if self.is_empty(): 
            return None      
        else:
            return self.head
        
    def is_empty(self):
        if self.head == None:
            print(True)
            return True
        else: 
            print(False)
            return False

    def print(self):
        cur = self.__stack.head
        while cur != None:
            print(cur.val)
            cur = cur.next
        

if __name__=="__main__":
    s = Stack() 
    s.push(11)  
    s.push(22) 
    s.push(33) 
    s.push(44) 
    s.print()
    print("\nTop element is ",s.peek()) 
    s.pop()
    s.pop()
    s.pop()
    print("\nTop element is ",s.peek())
    s.pop()
    print("\nTop element is ",s.peek())
    s.is_empty()
