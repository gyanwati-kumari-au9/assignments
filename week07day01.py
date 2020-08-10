#Q.1)Implement Queue using linkedlist.
''' In a Queue data structure, we maintain two pointers, front and rear. The front points the first element of queue and rear points to last element.

push() This operation adds a new node after rear and moves rear to the next node.

pop() This operation removes the front node and moves front to the next node.
'''
class Node:
    def __init__(self,val):
        self.val=val
        self.next=None

class Queue:
    def __init__(self):
        self.front = None
        self.rear = None
        self.size=0

    def push(self,x):
        if self.front is None:
            self.front = Node(x)
            self.rear = self.front
        else:
            self.rear.next=Node(x)
            self.rear=self.rear.next
        self.size += 1

    def pop(self):
        x=self.front.val
        self.front = self.front.next
        self.size -= 1
        return x

    def get_size(self):
        return self.size

    front = None
    rear = None

if __name__== '__main__': 
    q = Queue() 
    q.push(10) 
    q.push(20) 
    q.pop() 
    q.pop() 
    q.push(30) 
    q.push(40) 
    q.push(50)      
    print("Queue Front " + str(q.front.val)) 
    print("Queue Rear " + str(q.rear.val)) 

    