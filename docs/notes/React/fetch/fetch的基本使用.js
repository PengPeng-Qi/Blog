fetch(url).then(
  response => {
    console.log('联系服务器成功了', response);
    /* 
      response.json()是一个promise实例
      如果获取数据也成功了就返回promise成功的状态，里面保存成功的数据
      如果获取数据失败了就返回promise失败的状态，里面保存失败的原因
    */
    return response.json();
  },
  /* 只有没网的时候会出现联系服务器失败的情况 */
  error => {
    console.log('联系服务器失败了', error);
    /* 中断Promise链 */
    return new Promise();
  }
).then(
  response => {
    console.log('获取数据成功了', response);
  },
  error => {
    console.log('获取数据失败了', error);
  }
)