---
sidebar: auto
---

# Git

## git init

`git init` -- 初始化仓库

## git status

`git status` -- 查看仓库的状态

## git add files

`git add files` -- 向暂存区中添加文件(暂存区是提交之前的一个临时区域)

## git commit

`git commit` -- 保存仓库的历史记录(将当前暂存区中的文件实际保存到仓库的历史记录中)

- `-m 'message'`: -m 后的参数称作提交信息，是对这个提交的概述。

**如果记述得更加详细**，请不要添加 `-m`， 直接`git commit` 命令，执行后编辑器就会启动

- 第一行：用一行文字简述提交的更改内容。
- 第二行：空行
- 第三行以后：记述更改的原因和详细内容。

**中止提交**：

- 如果在编辑器打开后先中止提交，请将提交信息留空直接关闭编辑器，随后提交就会被中止。

### git commit --amend

`git commit --amend` -- 修改提交信息

### git commit -am

`git commit -a -m 'xxx'` -- 自动把所有已经跟踪过的文件暂存起来**一并提交**，从而跳过`git add` 步骤

## git blame

`git blame <file>` -- 查看谁改变了文件

## git checkout

### git checkout -- files

`git checkout -- files` 把文件从暂存区复制到工作目录，用来丢弃本地修改。

### git checkout -b xxx

`git checkout -b xxx` -- 创建并切换到 xxx 分支

等同于：`git branch feature-A && git checkout feature-A`

不断对一个分支进行提交，我们进行这样的操作，我们称为**培育分支**。

### git checkout -

`git checkout -` -- 切换回上一个分支

### git checkout xxx

`git checkout xxx` -- 切换到 xxx 分支

## git log

### git log

`git log` -- 查看提交日志(查看以往仓库中提交的日志，包括可以看什么人在什么时候进行了提交或合并，以及操作前后的差别)、只能查看以当前状态为终点的历史日志。

### git log xxx

**只显示指定目录、文件的日志**：

- 只需要在`git log` 命令后加上目录名，便会只显示改目录下的日志。
- 如果加的是文件名，就会只显示该文件相关的日志 `git log README.md`

### git log --pretty

**只显示提交信息的第一行**，可以使用`git log --pretty=short`，这样开发人员就可以轻松把握多个提交。

### git log -p xxx

**显示文件每次提交的内容差异**：

- 如果想查看提交所带来的的改动，可以加上`-p` 参数，文件的前后差别就会显示在提交信息之后

`git log -p README.md` **只查看`README.md` 文件的提交日志以及提交前后的差别**

### git log --stat

看**每次提交的简略的统计信息**，你可以使用 `--stat` 选项：在每次提交的下面列出额所有被修改过的文件、有多少文件被修改了以及被修改过的文件的哪些行被移除或是添加了。 在每次提交的最后还有一个总结。

### git log --graph

`git log --graph` -- 以图标的形式查看分支

## git diff

### git diff

`git diff` -- 查看尚未暂存的改动

### git diff HEAD

`git diff HEAD` -- 查看工作树与最新提交的区别

### git diff --cached

`git diff --cached(staged)` -- 查看已经暂存起来的改动

### git diff hash1 hash2

`git diff hash1 hash2` -- 查看两个文件之间的区别

## git rm

要从 Git 中移除某个文件，就必须要从已跟踪文件清单中移除（确切地说，是从暂存区域移除），然后提交。

`git rm` -- 连带从工作目录中删除指定的文件，这样以后就不会出现在未跟踪文件清单中了。

### git rm -f

`git rm -f` -- 如果删除之前修改过并且已经放到暂存区域的话，则必须要用强制删除选项`-f`

### git rm --cached README

`git rm --cached README` -- 从 Git 仓库（暂存区域）删除，但是仍保留在本地工作目录

## git mv

`git mv file_from file_to` -- 在 Git 中对文件改名，相当于运行了下面三段命令

```shell
$ mv README.md README
$ git rm README.md
$ git add README
```

## git branch

### git branch

`git branch` -- 显示本地所有分支

### git branch -av

`git branch -av` -- 显示所有分支，包括远程分支

### git branch xxx

`git branch xxx` -- 新建 xxx 分支

### git branch -a

`git branch -a` -- 查看当前分支的相关信息，添加 `-a` 可以同时显示本地仓库和远程仓库的分支信息

### git branch -d xxx

`git branch -d xxx` -- 删除**本地**`xxx` 分支，注意，删除分支前，需要切换到其他分支

### git push origin --delete xxx

`git push origin --delete xxx` -- 删除**远程**`xxx` 分支，注意，删除分支前，需要切换到其他分支

## git merge

### git merge

`git merge` -- 合并分支

### git merge --no-ff xxx

`git merge --no-ff xxx` 合并 xxx 分支，为了在历史记录中明确记录下本次分支合并，我们需要创建合并提交。因此，在合并时加上 `--no-ff` 参数。随后保存合并信息。

> 注意 📢：合并分支需要先切换到主分支(main)、这样 xxx 分支的内容就合并到了 main 分支上

## git reset

### git reset -- files

`git reset -- files` 用来撤销最后一次 `git add files`，也可以使用`git reset` 撤销所有暂存区域的文件。

### git reset --hard xxxx(哈希值)

`git reset --hard xxxx(哈希值)` -- 回溯到特性分支 xxx

### git reset --hard HEAD

`git reset --hard HEAD` -- 回退所有改动到当前版本

## git reflog

`git reflog` -- **查看当前仓库的操作日志**

> `git log` 只能查看以当前状态为终点的历史日志

## git rebase

### git rebase branch

`git rebase branch` `Rebase`当前的`HEAD` 到`branch` 后面

### git rebase -i HEAD~2

`git rebase -i HEAD~2` 合并最近两次的`commit` 为一次`commit`

执行完后，将`pick` 后的提交信息保存为`commit`，需要删除的`commit` 信息前修改为`fixup`

## git remote add

`git remote add` -- 将链接地址设置为本地仓库的远程仓库

在本地上创建的仓库的路径为`git@github.com: 用户名/git-tutorial.git`

`git remote add origin git@github.com: 用户名/git-tutorial.git` Git 会自动将远程仓库名称设置 为 origin

## git push

推送至 master 分支 `git push -u origin master`

`-u` 参数可以在推送的同时，将 origin 仓库的 master 分支设置为本地仓库当前分支的上游。

## 参考文献

- [merge 和 rebase 的理解](https://zhuanlan.zhihu.com/p/340043244)
