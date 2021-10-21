const fs = require('fs');

fs.readFile('./test1.txt', 'utf8', (err, date) => {
  if (err){
    return console.log('文件读取出错', err.message);
  }  
  console.log('文件读取成功', date);
})