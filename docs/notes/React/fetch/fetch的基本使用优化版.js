fetch(url).then(
  response => {
    console.log('联系服务器成功了', response);
    return response.json();
  }
).then(
  response => {
    console.log('获取数据成功了', response);
  }
).catch(
  error => {
    console.log('请求失败了', error);
  }
)