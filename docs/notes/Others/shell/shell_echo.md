---
sidebar: auto
---
## shell echo 命令
echo的基本用法：
```shell
echo string
```
### 显示普通的字符串
引号可以完全省略，效果与加上双引号一样
```shell
echo "Hello World!"
echo Hello World!
```
:::details 点击查看输出内容
```js
Hello World!
Hello World!
```
:::
### 显示转义的字符串
引号可以完全省略，效果与加上双引号一样
```shell
echo \"It is a test\"
echo "\"It is a test\""
```
:::details 点击查看输出内容
```shell
It is a test
It is a test
```
:::

### 显示变量
```shell
name = "OK"
echo "$name It is a test"
```
:::details 点击查看输出内容
```shell
OK It is a test
```
:::
### 显示转义字符
```shell
echo -e "OK! \n"
echo "It is a test!"

echo -e "OK! \c"
echo "It is a test!"
```
:::details 点击查看输出内容
```shell
# -e 开启转义 \n 表示换行 \c 表示不换行
OK! 

It is a test!

OK! 
It is a test!
```
:::
### 将结果定向显示到文件中
```shell
echo "It is a test" > myfile
```
:::details 点击查看输出内容
```shell
# myfile
It is a test
```
:::
### 将结果原样输出
原样输出字符串，不进行转义或取变量(用单引号)
```shell
echo '$name\"'
```
:::details 点击查看输出内容
```shell
$name\"
```
:::
### 显示命令执行结果
使用反引号
```shell
echo `date`
```
:::details 点击查看输出内容
```shell
2021年 9月24日 星期五 19时43分30秒 CST
```
:::