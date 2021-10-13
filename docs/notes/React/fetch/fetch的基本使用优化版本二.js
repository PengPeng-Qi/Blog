async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log('请求成功', data);
  } catch (error) {
    console.log('请求出错', error);
  }
}