let num = 1;
console.log(typeof num);     // number
console.log(num instanceof Number);     // false

let numObj1 = new Number('1');
console.log(numObj1);        // Number
console.log(typeof numObj1); // object
console.log(numObj1 instanceof Number); // true

/* Number(value) 显式地将这个 value 转换为 number 类型 */
let numObj2 = Number('1');
console.log(numObj2);        // 1
console.log(numObj2 == 1);   // ture
console.log(numObj2 === 1);  // true
console.log(numObj2 instanceof Number); // false

let numObj3 = new Number(1);
console.log(numObj3);        // Number{1}
console.log(numObj3 == 1);   // true
console.log(numObj3 === 1);  // false