
Array.prototype.myFilter = function (callback){
  const newArr=[];
  for(let i = 0 ; i< this.length; i++){
    const result = callback(this[i], i , this);
    if(result){
      newArr.push(this[i]);
    }
  }
  return newArr;
}

const arr = [4, 7, 9, 0, 4, 2, 34, 55, 75];
const myFilteredArr = arr.myFilter((el) => el < 7);

console.log(myFilteredArr);
