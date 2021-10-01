let arr =[1, 2, [3], [4, [5, 6]]]

function flatten(arr){
  return arr.toString().split(',').map((item) => {
    return item*1
  })
}

console.log(flatten(arr));