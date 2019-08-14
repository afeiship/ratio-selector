# get-started


## installation
```shell
# 默认情况下，nodejs 会自动安装
npx -v

# 如果需要手动安装(老版本 nodejs?)
npm install -g npx
```


## npx 想要解决的主要问题
1. 调用项目内部安装的模块
  ```shell
  npm install -D mocha
  node-modules/.bin/mocha --version

  # npx way:
  npx mocha --version
  ```
~~~
npx 的原理很简单，就是运行的时候，会到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在。
由于 npx 会检查环境变量$PATH，所以系统命令也可以调用。
~~~

2. 避免全局安装模块
  ```shell
  npx create-react-app my-react-app
  ```
~~~
注意，只要 npx 后面的模块无法在本地发现，就会下载同名模块。
比如，本地没有安装http-server模块，下面的命令会自动下载该模块，在当前目录启动一个 Web 服务。
~~~

3. 使用不同版本的 node
   ```shell
   npx node@0.12.8 -v
   # v0.12.8
   ```
4. 执行 GitHub 源码
~~~
用得不多，暂时不了解了
~~~

## params
1. --no-install 参数和--ignore-existing 参数
如果想让 npx 强制使用本地模块，不下载远程模块，可以使用--no-install参数。
如果本地不存在该模块，就会报错。

```shell
npx --no-install http-server
# force to use local package:
npx --ignore-existing create-react-app my-react-app
```

