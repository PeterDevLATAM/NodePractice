// Return true if 2 values sum x in the array
// the list contains integers
// 1rst case the lists are ordered
// 2nd case the lists are no longer ordered

const array1 = [1, 2, 3, 9]; // false
const array2 = [1, 2, 5, 7]; // true
const array3 = []; // true

//First solution
//brute force will be a nested loop i=0/j=i+1 --> Cuadratic O(n^2)

// for ordered list

const hasPairSumSorted = (arr, sum) => {
  let high = arr.length - 1;
  let low = 0;
  while (high > low) {
    if (arr[low] + arr[high] === sum) return true;
    if (arr[low] + arr[high] > sum) {
      --high;
    } else {
      ++low;
    }
  }
  return false;
};

const hasPairSumUnsorted = (arr, sum) => {
  let map = {};
  let answer = false;
  arr.forEach((element) => {
    const comp = sum - element;
    if (map[comp]) answer = true;
    map[comp] = true;
  });
  return answer;
};

const hasPairSumUnsorted2 = (nums, target) => {
  let map = {};
  for (i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      return [i, map[nums[i]]];
    } else {
      map[target - nums[i]] = i;
    }
  }
  return []
};


console.log(hasPairSumUnsorted2(array2, 8));

