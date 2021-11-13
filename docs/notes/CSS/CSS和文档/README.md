---
sidebar: auto
---
# CSS和文档
## 元素
### 置换元素
置换元素内容的部分不由文档内容直接表示。例如：`<img>`
### 非置换元素
HTML中大部分都是非置换元素，即元素的内容由用户代理在元素自身生成的框中显示
```html
<span>hi there!</span>
```
### 元素的显示方式
行内元素可以放在块级元素中，反之则不行。  
  
在不修改标记的前提下，可以将块级元素用`display: inline`变为行内元素，行内元素也如此，这会导致行内框中出现一个块级框，这完全是有效的。  
  
如果把标签置换位置，就不是有效地HTML，例如：
```html
<em><p>hi there!</p></em>  
<!-- 错误❌ 写法 -->
```
### link 与 @import标签
`@import` 声明加载一个外部样式，必须放在所在样式表的开头。
```html
<link rel="stylesheet" href="./style1.css" media="screen">
<style>
  /* @import 必须放在开头，也可以指定显示媒体以及导入多个样式表 */
  @import url(./style2.css) screen;
  @import url(./style3.css) screen;
  h1 {
    color: #bfa;
  }
</style>
```
> `@import` 的优势：**外部样式表可以使用**  
> 注意：`@import` 不能在行内样式中使用

## 媒体查询
媒体查询定义浏览器在何种媒体环境中使用指定的样式表。
```css
/* 在所有媒体中，h1元素的颜色都是红褐色，但是，在屏幕媒体上body的颜色会有一个黄色背景 */
h1 {color: maroon;}

@media screen {
  body {
    background-color: yellow;
  }
}
```
> 一个样式表中可以有任意多个`@media` 块，每一个都有自己的一套媒体描述符。

### 媒体类型
- `all`: 用于所有展示媒体
- `print`: 为有视力的用户打印文档时使用
- `screen`: 在屏幕媒体上展示文档时使用

多个媒体使用逗号隔开：
```html
<link rel="stylesheet" href="style1.css" media="screen, print">
<style>
  @import url(./style2.css) screen, print;

  @media screen, print {
    body {
      background-color: #bfa;
    }
  }
</style>
```