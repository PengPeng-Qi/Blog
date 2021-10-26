const bubbleSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr;
}
console.log(bubbleSort([3, 66, 9, 1, 4, 2, 0, 9]));  
// [66, 9, 9, 4, 3, 2, 1, 0]