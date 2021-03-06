// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function greet()
{
  let greeting="Hello there,";
  let msg="What's up?"

  function user()
  {
    let userName="JavascriptIsGroovy";
    console.log(`${greeting} ${userName}! ${msg}`);
  }
  user();
}
greet();

// ==== Challenge 2: Create a counter function ====
 // Return a function that when invoked increments and returns a counter variable.
 let count = 0;
const counter = () => {

  return function(){
    count++;
    return count;
  }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (() => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter=0;

  return {
    increment:function(){
      counter++;
      return counter;
    },

    decrement:function(){
      counter --;
      return counter;
    }
  }
})();

counterFactory.increment();
counterFactory.decrement();

console.log(counterFactory.increment());
console.log(counterFactory.increment());
console.log(counterFactory.increment());
console.log(counterFactory.decrement());