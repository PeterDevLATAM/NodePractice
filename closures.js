// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

// for (var i = 0; i < 3; i++) {
//   (function(index) {
//     setTimeout(function log(){ console.log(`We’re at ${index}`)}, 1000);
//   })(i);
// }

// function createIncrement() {
//   let count = 0;
//   function increment() {
//     count++;
//   }
//   // let message = `Count is ${count}`;
//   function log() {
//     let message = `Count is ${count}`;
//     console.log(message);
//   }

//   return [increment, log];
// }
// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log(); // What is logged?

// function createStack() {
//   let items = [];

//   function push(item) {
//     items.push(item);
//     console.log(item)
//   }
//   function pop() {
//     items.pop();
//   }
//   function log(){
//     console.log(items)
//   }

//   return {
//     push: push,
//     pop: pop,
//     log: log,
//   };
// }
// const stack = createStack();
// stack.push(10);
// stack.push(5);
// stack.push(5);
// stack.push(5);
// stack.pop();





function multiply(num1, num2) {
  let store = num1;
  if (num2) {
    console.log(num1 * num2);
    return num1 * num2;
  } else {
    return function anotherFunc(num2) {
      console.log(store * num2);
      return store * num2;
    };
  }
}
multiply(4, 5); // => 20
multiply(3, 3); // => 9
const double = multiply(2);
double(5);  // => 10
double(11); // => 22