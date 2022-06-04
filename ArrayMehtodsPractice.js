// const arrStrings = ["a", "b", "c", "d", "e"];
// const arrNumb = [1, 5, 58, 4, 6, 1, 22, 50];
// arrStrings.unshift(arrStrings.pop());
// arrNumb.sort((a, b) => b - a);
// console.log(arrStrings);
// console.log(arrNumb);

// REDUCE

// Grouping objects by a property

/* const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    let key = obj.age;
    if (!acc[key]) {
      acc[key]=[];
    }
    acc[key].push(obj.name);
    return acc
  }, {});
}

let groupedPeople = groupBy(people, "age");

console.log(groupedPeople);
 */

// Counting instances of a value in an object

/* const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countNames = (names) => {

  return names.reduce((acc, current) => {
    if (!acc[current]) {
      acc[current] = 1;
    } else {
      acc[current]++;
    }
    return acc;
  }, {});
};

console.log(countNames(names));

 */

// Bounding arrays from an array of object using the spread operator

const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];

const boundArrays = (arr) => {
  return arr.reduce((acc, current) => {
    return [...acc, ...current.books];
  }, []);
};

console.log(boundArrays(friends));
