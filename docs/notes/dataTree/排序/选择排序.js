const selectSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr;
}
console.log(selectSort([1, 4, 6, 9, 23, 12, 90, 33]));
// [1, 4, 6, 9, 12, 23, 33, 90]