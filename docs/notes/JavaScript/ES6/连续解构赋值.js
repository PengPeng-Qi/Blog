let obj = {a: {b: {c: 1}}}
const {a: {b: {c}}} = obj
console.log(c); // 1