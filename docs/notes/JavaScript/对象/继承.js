let obj1 = {r: 1};
let obj2 = Object.create(obj1);
console.log(obj2.r);  // 1

obj2.r = 2;
console.log(obj1.r);  // 1
console.log(obj2.r);  // 2