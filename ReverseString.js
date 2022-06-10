//Reverse a String

let str = "Hello my name is Peter";

const reverseString = (string) => {
  let tempStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    tempStr = tempStr + string[i];
  }
  return tempStr;
};

const reverseString2 = (string) => string.split("").reverse().join("");
const reverseString3 = (string) => [...string].reverse().join("");

const reverseStringRecursive = (str) => {
  if (str === "") return "";
  return reverseStringRecursive(str.substr(1)) + str.charAt(0);
};

console.log(reverseStringRecursive(str));
