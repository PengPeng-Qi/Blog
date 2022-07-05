---
sidebar: auto
---

## Git 配置 GitHub

当我们拿到一台新电脑时，都需要配置新电脑的 Git 连接 GitHub。

下载安装好 Git 之后，需要先生成 SSH Key。

```
ssh-keygen -t rsa -C"Your_GitHub_Email"
```

一直敲击回车即可，如果不确定是否生成 key，可使用

```
ls -al ~/.ssh
```

查看 SSH Key

```
cat /Users/电脑用户名/.ssh/id_rsa.pub
```

可将查看到的 key 复制下来，粘贴在`GitHub` - `setting` - `SSH and GPG keys` - `New SSH key`处，即可。

最后还需要配置一下用户信息：

```
git config --global user.name "username"

git config --global user.email "email"
```

这样，新电脑就配置好啦。

## 参考

- [Mac 系统下查看和生成 SSH Key](https://cloud.tencent.com/developer/article/1473489)
- [新电脑配置 git 和 github](https://zhuanlan.zhihu.com/p/92598182)
