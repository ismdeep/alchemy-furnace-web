# 1 快速开始

## 1.1 本地环境
Node版本推荐使用 Node v16

## 1.2 安装
```bash
make install
```

## 1.3 加载代理配置

### 1.3.1 加载本地配置（如果你本地已经有后端服务的话）
```bash
make load-local-config
```

### 1.3.2 加载开发环境配置
```bash
make load-dev-config
```

## 1.4 运行
```bash
make serve
```


## 1.5 请求链接

### 1.5.1 `make load-dev-config` 下请求链接

- [admin](http://localhost:4200?token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjb250ZW50IjoiYWRtaW4iLCJleHAiOjQ3OTMyMjIwMzB9._0oHRMNycimwpQqVDWmDVT8Ctb0DtYSLJDcdrRy_PPEzKmIJznX8Zbz9tcLcEvHnZpQclTmqwx2_IaTvlJxlZw)

- [yangming](http://localhost:4200?token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjb250ZW50IjoieWFuZ21pbmciLCJleHAiOjQ3OTMyMjIxMjZ9.A4DFwQ5hB53G7NOCB8D29I1dCM0XSMl_yM3wlitI1YLbFCWgXDZQ530mHmVjV-qPvrwNGivyew9RNNdGCOyAdg)

- [jianglinwei](http://localhost:4200?token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjb250ZW50IjoiamlhbmdsaW53ZWkiLCJleHAiOjQ3OTMyMjIxMzl9.h5hoD3JeJoHoq7AeuoB475lNts8szxDPZlUdkLBqf1F3wrMy-QYCK613UhptVvvvErYclUFJsMXbwZ2mrMB6lg)

### 1.5.2 `make load-local-config` 下请求链接
这说明你本地有后端服务，直接前往后端项目根目录执行  `make gentoken ENV=local USER=<username>` 吧。

6
