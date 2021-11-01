const selectSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
  }
  return arr;
}
console.log(selectSort([1, 4, 6, 9, 23, 12, 90, 33]));
// [1, 4, 6, 9, 12, 23, 33, 90]