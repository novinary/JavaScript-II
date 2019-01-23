// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
//print the result in the Console
getLength(items, function(length){
  console.log(length);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}
//print the result in the Console
last(items,function(length){
  console.log(length);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}
//print the result in the Console
sumNums(10,4,function(add)
{
  console.log(add);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}
//print the result in the Console
multiplyNums(9,9,function(multiply)
{
  console.log(multiply);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}
//print the result in the Console
//check if Pencil is presented in the give array
contains('Pencil',items,function(check){
  console.log(check);
})

//check if Eraser is presented in the give array
contains('Eraser',items,function(check){
  console.log(check);
})


/* STRETCH PROBLEM */

let array=[9,9,9,1,2,3,6,6,6]

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
    let newArray = array.filter(cb);

    return newArray;
}
function filterCb(Element,index,array)
{
  return index === array.indexOf(Element);
}
console.log(removeDuplicates(array, filterCb));