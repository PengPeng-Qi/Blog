import React, { Component } from 'react'
import {NavLink} from 'react-router'

export default class Demo extends Component {
  render() {
    return (
      /* 方式一 */
      /* <NavLink activeClassName="activeClass" to={this.props.to}>{this.props.title}</NavLink> */

      /* 方式二：如果有多个值需要传递，可使用...来接收 */
      // <NavLink activeClassName="activeClass" {...this.props}>{this.props.title}</NavLink>

      /* 方式三 */
      // <NavLink activeClassName="activeClass" {...this.props}>{this.props.children}</NavLink>
      /* 两种写法都可以 */
      <NavLink activeClassName="activeClass" {...this.props} />
    )
  }
}
