// Make a JavaScript function and use it as a class and perform the below action:
// 1. It must have a sum function for adding.
// 2. It must have a function for getting squares.
// 3. Function must have the capability to do the chained actions.
// Ex.
// const operation = new Operations();
// console.log(operation.sum(1,2))
// output: 3
// console.log(operation.square(2))
// output: 4
// console.log(operation.sum(2,3).square())
// output: 25

class Solution{
    constructor(num,num1){
      this.num = num;
      this.num1 = num1;
    }

    add(num,num1){
      return (num + num1);
    }
    square(num){
      return (num*num);
    }

}

var s = new Solution();
sum = s.add(1,2);
console.log(sum);
sq = s.square(2);
console.log(sq);


var Obj = {
  result: 0,
  addNumber: function(a, b) {
    this.result = a + b; 
    return this;
  },

  sq: function(a) {
    this.result = a*a;
    return this;
  } 
};

Obj.addNumber(2,3).sq(5)
console.log(Obj.result)

