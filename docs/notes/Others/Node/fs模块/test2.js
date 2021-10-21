const fs = require('fs');

fs.writeFile('./test2.txt', 'Hello Node.js', 'utf8', (err, data) => {
  if (err){
    return console.log('文件写入出错', err);
  }  
  console.log('文件写入成功', data);
})