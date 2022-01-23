---
sidebar: auto
---
# 动画
## 计算机动画原理  
空白的补全方式有以下两种：
1. **补间动画**：主画师绘制关键帧，清稿部门绘制补间动画（浏览器担任补间动画师，如:`keyframe`、`transition`）
2. **逐帧动画**：每一帧都是纯手绘（如css 的steps实现精灵动画）

## 前端动画分类
### CSS动画
`animation` 是常见的CSS 动画实现方式  
  
- `animation-name` 属性指定应用的一系列动画，每个名称代表一个由`@keyframes` 定义的动画序列
- `animation-duration` 属性指定了一个动画周期时长，默认值为0s
- `animation-timing-function` 属性定义了CSS动画在每一个动画周期中执行的节奏
- `animation-delay` 属性定义动画于何时开始
- `animation-iteration-count` 定义了动画循环次数
- `animation-direction` 属性指示动画是否反向播放
- `animation-fill-mode` 指定动画在执行之前和之后如何将样式应用于其目标
- `animation-play-state` 定义一个动画是否运行暂停或播放

推荐库：`animation.css` `shake.css` 等
### SVG动画
库：`Snap.svg` `anime.js` 等  
  
`filter CSS` 属性将**模糊或颜色偏移**等图形效果应用于元素  
### JS动画
JS可以实现复杂的动画，也可以操作canvas动画API进行绘制。  
  
JS动画应该通过`requestAnimationFrame`，该内置方法允许设置回调函数在浏览器准备**重绘的时候运行**  
## 动画资源
SVG：
- Snap.svg
- Svg.js

JS:
- GSAP
- TweenJS
- Velocity

CSS:
- Animate.css