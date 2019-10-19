# 项目：赶马商城


### 项目类型：电商

#### 链接

    1. 官网 ：http://mobile.wzq998.com/#/

    2. 上线地址：http://106.53.2.52:5000

    3. git仓库地址：git@github.com:gzh51907/ganma.git

### 团队     
* 组长：林坤锐    成员：彭若鑫      罗剑锋


### 分工
* 林坤锐 
    * 首页(Home)
        1. 利用elementUI搭建好页面整体框架
        2. 运用axios请求数据并结合vue-lazyload懒加载渲染数据
    * 退出登录(Logot)
        1. 利用elementUI搭建好页面整体框架
        2. 点击退出登录的时候，清空本地存储，并跳转到首页
    * 详情页(Details)
        1. 拿到分类页传过来的id去发送请求数据库的商品
        2. 点击购物车登录状态下才可以加入并且判断购物车内是否有重复商品，有则无法再加入
        3. 右上角购物车可以拿到加入购物车有多少商品
    * 分类(classify)
        1. 通过axios发送请求获取侧边栏的分类数据
        2. 通过分类数据对应的id 获取店铺的数据泫然
        3. 点击对应的分类块，显示对应的店铺模块

* 彭若鑫
    * 注册(Reg)
        1. 用户点击注册后，发送sxios判断用户表是否存在，不存在允许注册，反之，不允许注册
        2. 用户注册成功后跳转到登录页面
    * 登录(Login)
        1. 发送axios请求数据库判断输入的用户名和密码是否正确，正确就允许登录，返回上一级页面，并把用户名和token存入本地
    * 我的(Mine)
        1. 利用elementUI搭建好页面整体框架
        2. 点击登录注册，跳转到登录页面
        3. 点击退出的小图标，先判断用户是否登录，登录允许跳转到退出页面，反之，不可以
    * 列表(lists)
        1. 拿到分类传过来的brand_id,通过brand_id发送axios请求到对应的数据渲染到页面
        2. 点击销量，最新，价格，通过对应的条件发送axios进行到对应的排序
        3. 点击某个商品跳转到对应的详情页

* 罗剑锋
    * 购物车(Cart)
        1. 利用elementUI搭建好页面整体框架
        2. 创建阶段，通过用户名发送请求拿到用户订单表的商品id并通过商品id拿到对应商品并渲染
        3. 全选，控制商品复选框，
        4. 判断商品复选框是否被勾选拿到价格，并把拿到的价格累加显示到总价
        5. 数量的加减，可以控制数据库的数量与总价
        6. 点击提交传参并跳转到订单页
    * 订单表(order)
        1. 拿到用户名渲染收货人，拿到总价渲染总价
    * 结算页(last)
        1. 拿到数据渲染

        
目录结构。

    |-- gan'ma
    |-- .gitignore
    |-- 111.txt
    |-- babel.config.js
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- dist
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- css
    |   |   |-- app.06c8dd8f.css
    |   |   |-- chunk-vendors.728eb7d9.css
    |   |-- fonts
    |   |   |-- element-icons.535877f5.woff
    |   |   |-- element-icons.732389de.ttf
    |   |-- img
    |   |   |-- timg.30740276.png
    |   |-- js
    |       |-- app.51c0dc54.js
    |       |-- app.51c0dc54.js.map
    |       |-- chunk-vendors.c747b3bc.js
    |       |-- chunk-vendors.c747b3bc.js.map
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |-- src
        |-- App.vue
        |-- main.js
        |-- assets
        |   |-- logo.png
        |-- components
        |   |-- HelloWorld.vue
        |-- img
        |   |-- 1.jpg
        |   |-- timg.png
        |-- pages
        |   |-- Cart.vue                （购物车页）
        |   |-- classify.vue            (分类页)
        |   |-- Details.vue             (详情页)
        |   |-- Home.vue                (主页)
        |   |-- Housing.vue             (小区页)
        |   |-- last.vue                (结算页)
        |   |-- lists.vue               (列表页)
        |   |-- Login.vue               (登录页)
        |   |-- Logout.vue              (登出页)
        |   |-- Mine.vue                (我的)
        |   |-- Order.vue               (订单页)
        |   |-- Reg.vue                 (注册页)
        |-- router  
        |   |-- index.js                (路由配置)
        |-- store
            |-- app.js                 (底部导航) 
            |-- cart.js                 (购物车功能)
            |-- common.js               (公共用户数据)
            |-- index.js                (模块主文件)
            |-- lists.js                (列表功能)




项目截图:
         ![avatar](/img/1.jpg)
         ![avatar](/img/2.jpg)
         ![avatar](/img/3.jpg)
         ![avatar](/img/4.png)
         







## 技术栈

### 前端
* Vue
* Vue-Router
* Vuex
* Vue-Cli
* axios
* elementUI
* git
* vue-lazyload

### 后端
* Nodejs
* Express
* MongoDB


