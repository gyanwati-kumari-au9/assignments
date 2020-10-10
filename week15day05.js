// Implement a class Stack which emulates a LIFO data structure in JS. This class can internally use
// arrays or objects (linked nodes) to achieve the following Stack operations.
// - push(elem) => add and return element on top
// - pop() => remove and return element on top
// - top() => only return element on top

class Stack { 
  
    constructor() 
    { 
        this.items = []; 
    } 
  
    push(element) 
    { 
        this.items.push(element); 
       return this.items[0];
    } 

    pop() 
    { 
        if (this.items.length == 0) 
            return "Underflow"; 
        return this.items.pop(); 
    } 

    top() 
    {  
        return this.items[this.items.length - 1]; 
    } 

    printStack() 
    { 
        var str = ""; 
        for (var i = 0; i < this.items.length; i++) 
            str += this.items[i] + " "; 
        return str; 
    } 
}

var stack = new Stack();
stack.push(11); 
stack.push(22); 
stack.push(33);
console.log(stack.printStack());
console.log(stack.pop());
console.log(stack.top()); 
console.log(stack.printStack());