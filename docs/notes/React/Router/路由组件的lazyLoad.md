---
sidebar: auto
---
# 路由组件的lazyLoad
@[code jsx{1,3,8-10,31-35}](./路由组件的lazyLoad.jsx)
## 命名导出
`React.lazy` 只支持默认导出，如果想被引入的模块使用命名导出（named exports），你可以创建一个中间模块，来重新导出为默认模块。

```js
// ManyComponents.js
export const MyComponent = /* ... */;
export const MyUnusedComponent = /* ... */;
```
```js
// MyComponent.js
export { MyComponent as default } from "./ManyComponents.js";
```
```js
// MyApp.js
import React, { lazy } from 'react';
const MyComponent = lazy(() => import("./MyComponent.js"));
```