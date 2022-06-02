
//Reverse a String

let str = "Hello my name is Peter";

const reverseString = (string) => {
  let tempStr = "";
  for (let i = string.length-1; i >= 0; i--) {
    tempStr = tempStr + string[i];
  }
  return tempStr;
};

const reverseString2=(string)=> string.split('').reverse().join('')
const reverseString3=(string)=> [...string].reverse().join('')
console.log(reverseString2(str));