const partition = function(arr){
  if(arr.length < 2) return arr;
  let le = [];
  let gt = [];
  let init = arr[0]
  for (let i = 1; i < arr.length; i++){
    arr[i] > init ? gt.push(arr[i]) : le.push(arr[i])
  }
  return partition(le).concat([init], partition(gt))
}
console.log(partition([3, 6, 8, 1, 0, 2, 34, 1, 0]));