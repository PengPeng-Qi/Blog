const path = require('path');

const fpath = './a/b/c/index.html'

const ext = path.extname(fpath);

console.log(ext); // .html