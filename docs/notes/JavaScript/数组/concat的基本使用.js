let arr = [1, 2, 3];

console.log(arr.concat(4, 5));   // [1, 2, 3, 4, 5]
console.log(arr.concat([4, 5])); // [1, 2, 3, 4, 5]

console.log(arr.concat([4, 5], [6, 7])); // [1, 2, 3, 4, 5, 6, 7]
console.log(arr.concat([4, 5], 6, 7));   // [1, 2, 3, 4, 5, 6, 7]

console.log(arr.concat(4, [5, [6, 7]])); // [1, 2, 3, 4, 5, [6, 7]]