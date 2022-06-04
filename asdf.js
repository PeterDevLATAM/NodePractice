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

obj2._proto_  

// var boundedFn = obj1.displayName.bind(obj2)
// boundedFn()

// obj1.displayName.call(obj2)
// obj1.displayName.apply(obj2)