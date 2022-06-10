const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(arr) { // Also cuadratic
  for (let i = 0; i < arr.length; i++) {
    let sm = {
      value: arr[i],
      position: i,
    };
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < sm.value) {
        sm.value = arr[j];
        sm.position = j;
      }
    }
    //swap
    let temp;
    temp = arr[i];
    arr[i] = sm.value;
    arr[sm.position] = temp;
  }
  return arr;
}

console.log(selectionSort(numbers))
