axios.get("http://localhost:3000/students").then(
  response => {
    console.log('成功了', response.data);
  },
  error => {
    console.log('失败了', error);
  }
)