function mergeSort(arr) {
  if (arr.length < 2) return arr
  const mid = Math.floor(arr.length / 2)
  let pre = arr.slice(0, mid);
  let next = arr.slice(mid);
  return merge(mergeSort(pre), mergeSort(next))
}

function merge(front, end) {
  const temp = [];
  while (front.length && end.length) {
    if (front[0] > end[0]) {
      temp.push(end[0]);
      end.shift();
    } else {
      temp.push(front[0]);
      front.shift();
    }
  }
  while (front.length || end.length) {
    if (front.length) {
      temp.push(...front);
      front = [];
    } else {
      temp.push(...end);
      end = [];
    }
  }
  console.log('#', temp);
  return temp;
}

console.log(mergeSort([3, 2, 1]));
console.log(mergeSort([1, 2, 5, 8, 6, 3, 5, 9]));