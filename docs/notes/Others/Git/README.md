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
`git commit -am` -- 直接commit 不需要再add
## git reset -- files
`git reset -- files` 用来撤销最后一次 `git add files`，也可以使用`git reset` 撤销所有暂存区域的文件。
## git checkout
### git checkout -- files
`git checkout -- files`  把文件从暂存区复制到工作目录，用来丢弃本地修改。
### git checkout -b xxx
`git checkout -b xxx` -- 创建并切换到xxx分支
  
等同于：`git branch feature-A  &&  git checkout feature-A`  
  
不断对一个分支进行提交，我们进行这样的操作，我们称为**培育分支**。  
### git checkout -
`git checkout -` -- 切换回上一个分支
### git checkout xxx
`git checkout xxx` -- 切换到xxx分支
## git log
### git log
`git log` -- 查看提交日志(查看以往仓库中提交的日志，包括可以看什么人在什么时候进行了提交或合并，以及操作前后的差别)  
  
**只显示提交信息的第一行**，可以使用`git log --pretty=short`，这样开发人员就可以轻松把握多个提交。  
   
**只显示指定目录、文件的日志**：
  - 只需要在`git log` 命令后加上目录名，便会只显示改目录下的日志。
  - 如果加的是文件名，就会只显示该文件相关的日志 `git log README.md` 
  
**显示文件的改动**：  
  - 如果想查看提交所带来的的改动，可以加上`-p` 参数，文件的前后差别就会显示在提交信息之后  
  
`git log -p README.md` **只查看`README.md` 文件的提交日志以及提交前后的差别**  
### git log --graph 
`git log --graph` -- 以图标的形式查看分支
## git diff
### git diff
`git diff`  -- 查看工作树与暂存区的区别
### git diff HEAD
`git diff HEAD` -- 查看工作树与最新提交的区别
### git diff --cached
`git diff --cached` -- 最新提交与暂存区的区别
### git diff hash1 hash2
`git diff hash1 hash2` -- 查看两个文件之间的区别
## git branch
### git branch
`git branch` -- 命令可以将分支名列表显示，同时可以确认当前所在分支。  
### git branch xxx
`git branch xxx` -- 新建xxx分支
### git branch -a
`git branch -a` -- 查看当前分支的相关信息，添加 `-a` 可以同时显示本地仓库和远程仓库的分支信息
## git merge
### git merge
`git merge` -- 合并分支
### git merge --no-ff xxx
`git merge --no-ff xxx` 合并xxx 分支，为了在历史记录中明确记录下本次分支合并，我们需要创建合并提交。因此，在合并时加上 `--no-ff` 参数。随后保存合并信息。  

> 注意📢：合并分支需要先切换到主分支

## git reset --hard xxxx(哈希值)
`git reset --hard xxxx(哈希值)` -- 回溯到特性分支 xxx
## git reflog
`git reflog` -- 查看当前仓库的操作日志

> `git log` 只能查看以当前状态为终点的历史日志

## git remote add
`git remote add` -- 将链接地址设置为本地仓库的远程仓库  
  
在本地上创建的仓库的路径为`git@github.com: 用户名/git-tutorial.git`  
  
`git remote add origin git@github.com: 用户名/git-tutorial.git` Git会自动将远程仓库名称设置 为origin
## git push
推送至master 分支 `git push -u origin master`  
  
`-u` 参数可以在推送的同时，将origin 仓库的master分支设置为本地仓库当前分支的上游。  
  