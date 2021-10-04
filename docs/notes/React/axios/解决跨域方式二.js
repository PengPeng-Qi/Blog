/* axios.get("http://localhost:3000/api1/students").then( */
axios.get("http://localhost:3000/api2/cars").then(
  response => {
    console.log('成功了', response.data);
  },
  error => {
    console.log('失败了', error);
  }
)