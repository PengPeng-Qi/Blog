---
sidebar: auto
---
## HTML
### 生成标签
输入标签名按tab键即可，例如`div` + `tab`键，生成
```html
<div></div>
```

### 生成多个标签
输入标签名再加上 `*`即可，例如 `div*3`键，生成

```html
<div></div>
<div></div>
<div></div>
```
### 父子级关系
使用 `>`,例如`ul>li`键，生成

```html
<ul>
  <li></li>
</ul>
```
### 兄弟关系
使用 `+`, 例如 `div+p`，生成

```html
<div></div>
<p></p>
```
### 类名或者id名
直接写 `.demo` 或者 `#two` `tab` 键就可以了

```html
<div class="demo"></div>

<div id="demo"></div>
```
### 表单类型
直接输入`input:search`, 生成

```html
<input type="search" name="" id="">
```
### 有顺序的标签
如果生成的`div` 类名是有顺序的， 可以用自增符号 `$`

```html
<!-- .demo$*5 -->
<div class="demo1"></div>
<div class="demo2"></div>
<div class="demo3"></div>
<div class="demo4"></div>
<div class="demo5"></div>
```
### 标签内容
如果想要在生成的标签内部写内容可以用 `{ }` 表示

```html
<!-- div{文本内容} -->
<div>文本内容</div>

<!-- div{$}*5 -->
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
```

## CSS
`w200`，生成
```css
width: 200px;
```
`lh26px`，生成
```css
line-height: 26px;
```

## 其他
在写网页时，有时候不知道输入什么文字：
- 可输入`lorem`，按下回车，得到一段文字
- 如果只想要三个单词，可输入`lorem3`得到三个单词
- 如果需要三段文字，可输入`lorem*3`得到三段文字。

```
lorem
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores! Fugiat, nobis dignissimos facilis accusantium et ut dolor aperiam, quisquam expedita unde fuga ipsum rem sequi iure consequuntur porro nisi.

lorem3
  Lorem, ipsum dolor.

lorem*3
  把第一段文字重复三遍
```