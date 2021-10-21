const path = require('path');

const myPath1 = path.basename('./a/b/c/text.html')
console.log(myPath1);  // text.html

const myPath2 = path.basename('./a/b/c/text.html', '.html')
console.log(myPath2);  // text