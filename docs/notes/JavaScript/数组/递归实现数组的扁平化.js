var arr = [1, [2, [3, 4]]];

function flatten(arr) {
  let arrNew = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      arrNew = arrNew.concat(flatten(arr[i]))
    } else {
      arrNew.push(arr[i])
    }
  }
  return arrNew
}

console.log(flatten(arr))