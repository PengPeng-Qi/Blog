/* 可以接受两个参数 */
shouldComponentUpdate(nextProps, nextState){
  console.log(this.props, this.state); // 现在的props、state
  console.log(nextProps, nextState);   // 更新后的props、state
  return Boolean;
}