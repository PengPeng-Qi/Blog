/* 将UI组件和容器组件整合在一个文件 src/containers/Xxx/index.jsx */
import { connent } from 'react-redux'
import { createXxxAction } from './xxx_action'

import React, { Component } from 'react'

class XxxUI extends Component {
  add = ()=>{
    this.props.Increament(1)
  }
  render() {
    return (
      <div>
        <h2>number的值为：{this.props.number}</h2>
        <button onClick={this.add}>点我加一</button>
      </div>
    )
  }
}


export default connent(
  (state) => ({ number: state }), 
  { Increament: createXxxAction }
)(XxxUI)