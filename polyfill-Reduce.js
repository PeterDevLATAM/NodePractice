Array.prototype.myReduce = function (callback, initialValue) {
  let acc;
  if (initialValue !== undefined) {
    acc = initialValue;
    for (let i = 0; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }
  } else {
    acc = this[0];
    for (let i = 1; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }
  }
  return acc;
};

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