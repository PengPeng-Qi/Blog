---
sidebar: auto
---
# BFC
## FC
`Formatting context` (格式化上下文)，是W3C CSS2.1 规范中的一个概念。是**页面的一块渲染区域**，有一套渲染规则，决定了子元素如何定位，以及和其他元素的关系和相互作用。  
## BFC
BFC是`Block Formatting Context` (块级格式化上下文)，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。  
  
具有BFC特性的元素可以看作是**隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且BFC具有普通容器所没有的一些特性。**
## 触发BFC
只要满足一下条件任意一个便可以触发BFC：
- 根元素
- 设置为浮动元素（不推荐）
- 绝对定位元素
- 将元素设置为行内块元素（不推荐）
- `overflow` 计算值不为`visible` 的块元素（推荐）
- ...

## BFC特性及应用
1、开启BFC的元素外边距不会发生重叠  
> 如果想避免外边距折叠，可以将其放在不同的BFC容器中

- 1、[代码演示外边距折叠](https://codepen.io/pengpeng-qi/pen/yLoJoGz)
- 2、[解决方案](https://codepen.io/pengpeng-qi/pen/JjyKyxw)

2、开启BFC可以包含浮动的元素（清除元素）  
3、开启BFC的元素不会被浮动元素所覆盖    

具体详细例子参考 [🔗](https://zhuanlan.zhihu.com/p/25321647)