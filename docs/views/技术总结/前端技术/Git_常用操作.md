---
title: Git_常用操作
date: 2021-08-20 11:51:00
sidebar: 'auto'                     # 是否开启侧边栏。
categories:
  - 技术总结                         # FrontMatter专属数组写法
tags:
  - Git                           # 普通数组写法
publish: true                      # 文章是否发布（出版、发布、发表），  这里不是 public
# keys:                             # 文章加密密码
#  - '123456'
sticky: 985                       # 文章置顶，值为number类型，降序排序
---


# Git 配置相关操作：

``` shell
# 查看 git 当前正在使用的配置
git config --list
# 查看 git 全局配置文件（文件位置：用户目录/.gitconfig）
git config --global --list  
# 查看 git 系统配置文件
git config --system --list  
# 查看 git 仓库配置文件
git config --local --list     
# 操作 git 全局配置文件
# -- 添加配置: --add name value
git config --global --add credential.helper store
# -- 删除配置: --unset name
git config --global --unset credential.helper
# -- 替换配置: --replace-all name value
git config --global --replace-all credential.helper store
# 不保存账户和密码，且不再使用之前保存的密码            操作说明：系统配置（文件）中删除中的 credential.helper 配置项。         
git config --system --unset credential.helper
# 保存账户和密码                                        操作说明：全局配置（文件）中设置保存用户的账号、密码。作用：删除 credential.helper 配置后 git 将不再保存用户账户密码，以便用户可以重新输入账号密码。
git config --global --add credential.helper store
```


# Git 仓库相关操作：

``` shell
# 查看远程仓库地址（如 origin 的地址）
git remote -v
 # 查看分支的详细信息
git branch -vv
# 删除缓存
git rm -r -f --cached ./
# push 到指定的远程仓库
git push -u origin master
# 通过查看日志来查看已提交的版本 1：概要信息
git log
# 通过查看日志来查看已提交的版本 2：带提交状态(status)信息
git log --stat
# 通过查看日志来查看已提交的版本 3：查看每一次命令的记录，例如 reset 命令切换版本
git reflog
	Ref：https://blog.csdn.net/cxu123321/article/details/92063708
# 恢复到指定版本（恢复的版本作为新版本继续往前）（推荐）
git revert --hard <版本id，如 ab5625e040c535d1f4c5946fb432cb02c7a74267>
# 重置到某个版本（重新从之前某个版本开始，后面的不要了） ！！！谨慎使用
git reset --hard <版本id，如 ab5625e040c535d1f4c5946fb432cb02c7a74267>
# 强制 push。	reset 重置版本之后，可能需要强制 push，加个参数 -f 即可
git push -f
	Ref：
		reset 与 revert 的区别
		https://blog.csdn.net/yxlshk/article/details/79944535
		
```
        

        
        
		
# 常用操作
``` shell
# 克隆一份代码到本地仓库
$ git clone http://192.168.10.6:81/hc-frontend/test.git
# 把远程库的代码更新到工作台
$ git pull ??
# 把远程库的代码更新到当前分支上面
$ git pull orgin master ??
# 把本地的修改加到暂存区中
$ git add . ??
# 把暂存区中的修改提交到本地库
$ git commit -m "comments" ??
# 把本地库的修改提交到远程库中
$ git push ??
# 查看全部分支
$ git branch
# 查看远程分支
$ git branch -a
# 切换到某个分支
$ git checkout master ??
# 新建test分支
$ git checkout -b test
# 删除本地test分支
$ git branch -D test
# 把未完成的修改放到暂存区中
$ git stash ??
# 恢复本地分支到暂存状态
$ git stash pop ??
# 查看当前分支有哪些修改
$ git status
# 更新远程分支列表
$ git remote update origin -p

# 需要了解的命令
$ git rebase xxx
$ git fetch xxx
```




# 初次提交的过程
``` shell
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:xxxx.git
git push -u origin master
	Ref：
		初次提交的过程
		https://www.cnblogs.com/beimingbingpo/p/9821126.html
```









# git 知识
``` shell

# git 用命令创建远程分支（网页创建略）
1、clone 远程分支，默认 master 分支。
git clone http://58.247.122.126:8010/hc-frontend/test.git -b master  （git仓库网址 + 点git 即是）
2、进入远程分支目录（如 test），新建本地分支
cd test
git checkout -b branch/kai
3、将本地分支 push 到远程仓库并关联
git push --set-upstream origin branch/kai
如果想要分开来做的话：
关联：
git branch --set-upstream origin branch/kai
或	git branch --set-upstream-to=origin/branch/kai 
push：
git push origin branch/kai


git clone -b feature/ycTeam http://42.159.123.242:8929/hc-modules/dailychemicals.git  //克隆分支
//如果上一步有问题就 git init 初始化仓库一下
cd ./feature/ycTeam		//进入本地同名分支，已自动关联远程分支， pull 时 直接 git pull 即可
//代码复制到该目录以覆盖代码文件
git add -A		//添加所有
git reset -- ./node_modules		//移除指定，需要加 “--”，让 git 知道这是个路径
git commit -m "feat: 增加批次追溯页面"
git pull


# 操作步骤总结：
git stash
git pull origin dev
解决冲突、找 git 树 save changes
git stash pop
git add .
git commit -m "xxx"
```




