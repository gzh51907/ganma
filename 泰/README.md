[top]
# 项目说明
    后台管理系统

## 演示
* 官网无，纯手写，纯想象

* 上线地址 > > http://106.53.2.52:5300
* 账号：lkr 密码：123456
* git仓库地址 >> git@github.com:gzh51907/ganma.git

* 团队与分工
    * 组长:林坤锐， 成员:罗剑锋，彭若鑫
    * 负责模块 
        1. 林坤锐负责:用户查询，订单查询模块
        2. 罗剑锋负责:登录,主页模块
        3. 彭若鑫负责：商品管理，商品添加模块
    * 项目演示
        ![avatar](/img/1.png)
          ![avatar](/img/2.png)
            ![avatar](/img/3.png)
              ![avatar](/img/4.png)
                ![avatar](/img/5.png)

目录结构

|-- houtai
    |-- .gitignore
    |-- babel.config.js
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- img                         (项目截图)
    |   |-- 1.png
    |   |-- 2.png
    |   |-- 3.png
    |   |-- 4.png
    |   |-- 5.png
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |-- src
        |-- App.vue
        |-- main.js                     (入口文件)
        |-- assets
        |   |-- logo.png
        |-- components
        |   |-- HelloWorld.vue
        |-- pages
        |   |-- GoodsAdd.vue            (添加商品)
        |   |-- GoodsSearch.vue         (商品管理模块)
        |   |-- Home.vue                (主页模块)
        |   |-- login.vue               (登录模块)
        |   |-- orderlist.vue           (订单模块)
        |   |-- selectUser.vue      (用户信息管理模块)
        |-- router
            |-- index.js            （路由配置）




## 技术栈

### 前端
* Vue
* Vue-Router
* Vue-Cli
* axios
* elementUI
* git

### 后端
* Nodejs
* Express
* MongoDB
