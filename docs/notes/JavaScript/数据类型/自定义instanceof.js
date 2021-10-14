function myInstanceof(obj, fun) {
  if (typeof obj !== 'object' || obj === null) {
    return false
  }

  /* Object.getPrototypeOf() 方法返回指定对象的原型，只获取一层 */
  let proto = Object.getPrototypeOf(obj);

  /* 循环向下开始找，直到找到原型对象 */
  while (true) {
    if (proto === null) {
      return false
    } else if (proto === fun.prototype) {
      return true
    } else {
      proto = Object.getPrototypeOf(proto)
    }
  }
}
console.log(myInstanceof(new Number('1'), Number)); // true
console.log(myInstanceof(Number(1), Number)); // false