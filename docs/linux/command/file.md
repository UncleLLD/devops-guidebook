---
nav:
  title: Linux
  order: 1
group:
  title: 命令分类
  order: 1
title: 文件管理
order: 3
---

# 文件管理

- 文件传输
  - `ftp` 用来设置文件系统相关功能
  - `scp` 加密的方式在本地主机和远程主机之间复制文件
- 文件处理
  - `touch` 创建新的空文件
  - `rename` 用字符串替换的方式批量改变文件名
  - `dirname` 去除文件名中的非目录部分
  - `ln` 用来为文件创建连接
  - `cat` 连接文件并打印到标准输出设备上
- 文件查找和比较
  - `diff` 比较给定的两个文件的不同
  - `which` 查找并显示给定命令的绝对路径
  - `find` 在指定目录下查找文件
  - `whereis` 查找二进制程序、代码等相关文件路径
- 文件内容查看
  - `tail` 在屏幕上显示指定文件的末尾若干行
  - `head` 在屏幕上显示指定文件的开头若干行
  - `less` 分屏上下范爷浏览文件内容
  - `more` 显示文件内容，每次显示一屏
- 文件编辑
  - `vi` 功能强大的纯文本编辑器
- 文件权限属性设置
  - `chmod` 用来变更文件或目录的权限
  - `chown` 用来变更文件或目录的拥有者或所属群组
  - `stat` 用于显示文件的状态信息
  - `file` 用来探测给定文件的类型
- 文件过滤分隔与合并
  - `grep` 强大的文本搜索工具
  - `look` 显示文件中以指定字符串开头的任意行
  - `tac` 将文件已行为单位的反序输出
  - `sort` 将文件进行排序并输出
- 文件压缩与解压
  - `tar` Linux 下的归档使用工具，用于打包和备份
  - `gzip` 用于压缩文件
  - `gunzip` 用于解压缩文件
  - `zip` 可以用来解压缩文件
  - `unzip` 用于解压缩由 zip 命令压缩的压缩包
- 文件备份和恢复

## 文件传输

### scp

scp（secure copy）用来进行文件传输。也可以用来传输目录。也有更高级的 sftp 命令。

```bash
# 本地复制远程文件
scp username@hostname:/usr/test/test.tar.gz /temp/test.tar.gz

# 远程复制本地文件
scp /temp/test.tar.gz username@hostname:/usr/test/test.tar.gz

# 本地复制远程目录
scp -r username@hostname:/usr/test/test.tar.gz /temp/test.tar.gz

# 远程目录复制至本地目录
scp -r /temp/test.tar.gz username@hostname:/usr/test/test.tar.gz

# 本地复制远程文件到指定目录
scp username@hostname:/usr/test/test.tar.gz /temp/test/

# 远程复制到本地文件到指定目录
scp /temp/test.tar.gz username@hostname:/usr/test/test/tar.gz
```

## 文件处理

### cat

最常用，注意，如果文件很大的话，`cat` 命令的输出结果会疯狂在终端上输出，可以多按几次 `ctrl + c` 终止

```bash
# 查看文件大小
du -h file

# 查看文件内容
cat file
```

## 文件查找和比较

### diff

diff 命令用来比较两个文件是否的差异。当然，在 ide 中都提供了这个功能，diff 只是命令行下的原始折衷。对了，diff 和 patch 还是一些平台源码的打补丁方式，你要是不用，就 pass 吧。

### which

which 寻找可执行文件

```bash
which ifconfig
```

### find

```bash
# 查找用户遗留的文件和目录
find / -name ftpusername
```

## 文件查看

### tail

大多数做服务端开发的同学，都了解这么命令。比如，查看 Nginx 的滚动日志。

```bash
tail -f access.log
```

`tail` 命令可以静态的查看某个文件的最后 n 行，与之对应的，`head` 命令查看文件头 n 行。但 head 没有滚动功能，就像尾巴是往外长的，不会反着往里长。

```bash
tail -n100 access.log

head -n100 access.log
```

### less

既然 cat 有这个问题，针对比较大的文件，我们就可以使用 less 命令打开某个文件。
类似 vim，less 可以在输入/后进入查找模式，然后按 n(N)向下(上)查找。
有许多操作，都和 vim 类似，你可以类比看下。

## 文件编辑

### vi

## 文件权限

### chmod

### chown

chown 用来改变文件的所属用户和所属组
chmod 用来改变文件的访问权限

这两个命令，都和 Linux 的文件权限 777 有关。

示例：

```bash
# 毁灭性命令
chmod 000 -R /

# 修改 a 目录的用户和组为 xjj
chown -R xjj:xjj a

# 给 a.bash 文件增加执行权限（常用）
chmod a+x a.bash
```

- `install` 安装或升级软件或备份数据
- `tree` 树状图列出目录的内容
- `popd` 用于删除目录栈中的记录
- `pushd` 将目录加入命令堆叠中
- `dirs` 显示目录记录
- `rmdir` 删除空目录
- `mkdir`(make dir) 创建目录
- `rm`(remove) 删除文件和目录
- `pwd` 绝对路径方式显示用户当前工作目录
- `ls` 显示目录内容列表
- `mv`(move) 对文件或目录重命名
- `cp`(copy) 将源文件或目录拷贝到目标文件或目录中
- `cd` 切换用户当前工作目录

关于可执行文件路径的变量：`$PATH`

先通过 root 的身份列出搜寻的路径为何？

```bash
[root@linux ~]# echo $PATH
/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin
```

如果想要让 root 在任何目录均可执行 `/root` 下面的 `ls`，那么就将 `/root` 加入 PATH 当中即可。加入的方法很简单，就像下面这样：

```bash
[root@linux ~]# PATH="${PATH}:/root"
```

### stat

### file

## 文件过滤分割与合并

### grep

grep 用来对内容进行过滤，带上 `--color` 参数，可以在支持的终端打印彩色，参数 n 则输出具体的行数，用来快速定位。

比如：查看 nginx 日志中的 POST 请求。

```bash
grep -rn --color POST access.log
```

推荐每次都是用这样的参数。

如果我想要看某个异常前后相关的内容，就可以使用 ABC 参数。它们是几个单词的缩写，经常被使用。
A after 内容后 n 行
B before 内容前 n 行
C count? 内容前后 n 行

```bash
grep -rn --color Exception -A10 -B2 error.log
```

### sort

sort 和 uniq 经常配对使用
sort 可以是哟功能 `-t` 指定分隔符，使用 `-k` 指定要排序的列。

下面这个命令输出 nginx 日志的 ip 和每个 ip 的 pv，pv 最高的前 10。

```bash
#2019-06-26T10:01:57+08:00|nginx001.server.ops.pro.dc|100.116.222.80|10.31.150.232:41021|0.014|0.011|0.000|200|200|273|-|/visit|sign=91CD1988CE8B313B8A0454A4BBE930DF|-|-|http|POST|112.4.238.213

awk -F"|" '{print $3}' access.log | sort | uniq -c | sort -nk1 -r | head -n10
```

## 文件压缩与解压

为了减小传输文件的大小，一般都开启压缩。Linux 下常见的压缩文件有 tar、bzip2、zip、rar 等，7z 这种用的相对较少。

- `.tar` 使用 tar 命令压缩或解压
- `.bz2` 使用 bzip2 命令操作
- `.gz` 使用 gzip 命令操作
- `.zip` 使用 unzip 命令解压
- `.rar` 使用 unrar 命令解压

压缩率：

tar.bz2 > tar.gz > zip > tar

压缩率越高，压缩以及解压的时间也就越长

### tar

可为 Linux 的文件和目录创建档案。利用 `tar`，可以为某一特定文件创建档案（备份文件），也可以在档案中改变文件，或者向档案中加入新的文件。

- 打包：将一大堆文件或目录变成一个总的文件
- 压缩：将一个大的文件通过一些压缩算法变成一个小文件

参数：

- `-c`：打包
- `-v`：显示过程
- `-f`：指定打包后的文件名
- `-t`：列出备份文件的内容
- `-x`：从备份文件中还原文件
- `-z`：通过 gzip 指令处理文件

```bash
# 打包
tar -czvf filename.tar filename

# 查阅包内文件
tar -ztvf filename.tar.gz

# 解包
tar -zxvf /opt/soft/test/filename.tar.gz
```

### gzip & gunzip

压缩

```bash
# 压缩为 .gz 格式的压缩文件，源文件会消失
gzip filename.txt

# 压缩为 .gz 格式的压缩文件，源文件不会消失
gzip -c filename.txt > filename.txt.gz

# 压缩目录下的所有子文件，但是不压缩目录
gzip -r /directory/
```

解压

```bash
# 解压缩文件，不保留压缩包
gzip -d filename.txt.gz

# 解压缩文件
gunzip filename.gz
```

### zip & unzip

用来解压缩文件，或者对文件进行打包操作。

- `-k` 保留源文件
- `-d` 解开压缩文件
- `-r` 表示递归处理，将指定目录下的所有文件及子目录一并处理
- `-q` 不显示指令执行过程
- `-v` 显示指令执行过程
- `<压缩效率>` 压缩效率是一个介于 1-9 的数值。

压缩

```bash
# 将 /usr/html 目录下所有文件和文件夹打包为当前目录下的 html.zip
zip -q -r filename.zip /usr/filename

# 指定压缩率打包文件
zip -r8 filename.zip test/*

# 向压缩包增加文件（test.txt）
zip -u filename.zip test.txt

# 压缩时加密（密码为666666）
zip -r filename.zip test1 test -P 666666

# 删除压缩包的特定文件（删除 test 文件）
zip -d filename.zip test
```

解压

```bash
# 查看压缩包文件信息
unzip -l filename.zip

# 解压压缩包
unzip filename.zip

# 解压压缩包中指定文件
unzip -o filename.zip "test.txt"

# 解压压缩包至指定文件夹
unzip filename.zip -d dir/
```