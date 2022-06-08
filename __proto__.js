var obj1 = {
  name: "John Doe",
  displayName: function () {
    console.log(`My name is ${this.name}`);
  },
};

obj1.displayName();

var obj2 = {
  name: "Steve Smith",
};

// obj2.__proto__  = obj1
// obj2.displayName()

// var boundedFn = obj1.displayName.bind(obj2)
// boundedFn()

// obj1.displayName.call(obj2);
// obj1.displayName.apply(obj2); // idk
