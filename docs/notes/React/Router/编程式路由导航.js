replaceShow = (id, Title) => {
  /* replace跳转+携带params参数 */
  // this.props.history.replace(`/home/messages/detail/${id}/${Title}`)

  /* replace跳转+携带search参数 */
  // this.props.history.replace(`/home/messages/detail/?id=${id}&title=${Title}`)

  /* replace跳转+携带state参数 */
  this.props.history.replace(`/home/messages/detail`, {
    id: id,
    title: Title
  })
}

pushShow = (id, Title) => {
  /* push跳转+携带params参数 */
  // this.props.history.push(`/home/messages/detail/${id}/${Title}`)

  /* push跳转+携带search参数 */
  // this.props.history.push(`/home/messages/detail/?id=${id}&title=${Title}`)

  /* push跳转+携带state参数 */
  this.props.history.push(`/home/messages/detail`, {
    id: id,
    title: Title
  })
}

back = () => {
  this.props.history.goBack()
}

forward = () => {
  this.props.history.goForward()
}

go = () => {
  this.props.history.go(2)
}