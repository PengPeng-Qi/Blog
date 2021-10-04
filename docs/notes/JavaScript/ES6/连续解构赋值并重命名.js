let obj = {a: {b: {c: 1}}}
const {a: {b: {c: data}}} = obj
console.log(data); // 1
console.log(c);    // 报错