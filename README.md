#  CNode-mp

这是我用`mpvue`进行开发的 **cnode** 社区微信小程序

还有一个使用原生开发的 **cnode** 社区小程序，地址：<https://github.com/tingzhong666/cnode-origin>



##  演示

![](.\cnode-mp.gif)



##  项目结构

```
├─build 构建配置
├─config	配置
├─dist	完成目录
├─src	源代码
│  ├─components
│  ├─fonticon 字体图标
│  ├─pages
│  │  ├─about 关于
│  │  ├─api 开放 api
│  │  ├─index 首页
│  │  ├─intro 新手入门
│  │  ├─login 登录
│  │  ├─msg 消息
│  │  ├─my 我的
│  │  ├─topic 主题详情
│  │  ├─topics 创建/参与/收藏的主题
│  │  └─user 用户详情
│  ├─stylus 全局导入的 styl
│  └─utils
└─static 静态资源
    ├─images
    └─towxml 使用 md 转 wxml 的原生组件
        ├─render
        └─style
            └─theme
```



##  使用

1. 克隆下载此仓库
2. 将仓库目录，导入到小程序项目