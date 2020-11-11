//Q. Write a Javascript function that takes an array and a value and search that value in the array.
// 1. Function should take two arguments - an array and a value to search inside the array.
// 2. If the element is found, the function should return the position of the element in an array.
// 3. If the element is not found, the function should return "-1".

function search(arr,key){
    var i;
    for(i=0; i < arr.length; i++){
        if(arr[i] == key){
          return i  
        }
          
    }
    return -1
}
var array = [5 , 10 , 2 ,6];
var k = 6;
res=search(array,k);
console.log("Found : "+ res)