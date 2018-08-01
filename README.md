# wu-nyu-dictionary

基于apollo，graphQL，mdui，vue-router，webpack和express等等的吳語小詞典。

# 项目优势

- 集成了mdui，更贴近app原生设计，更多主题选择
- 因为集成了vue-apollo，更方便对接graphQL。

# 运行项目

需要先运行 [apollo-server](https://github.com/mowatermelon/wu_nyu_dictionary/tree/apollo-server).

``` bash
# install dependencies

  # Good network environment
    # install dependencies by cnpm or npm
    cnpm i

  # Bad network environment
    # global install yarn
    cnpm i yarn -g

    # install dependencies by yarn
    yarn install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# view after build effect at localhost:8089
npm run dist

```

# 项目结构图

```text
├── build                                       // 生产环境webpack配置文件和运行文件
│   │   ├── ...                              // webpack配置文件
│   │   ├── prod.dev.js                              // 生产环境运行文件
├── config                                      // 基本配置
│   │   ├── dev.env.js                              // 开发环境配置文件
│   │   ├── index.js                              // 总配置文件
│   │   ├── prod.env.js                              // 生产环境配置文件
│   │   ├── test.env.js                              // 测试环境配置文件
├── dist                                        // 上线项目文件，放在服务器即可正常访问
├── screenshots                                 // 项目截图
│   ├── login.png                              // 应用栏仅在顶部蓝色主题显示效果
│   ├── register.png                              // 应用栏仅在顶部紫色主题显示效果
│   ├── HeaderBottomToolbarFooterLayout                                            // 应用栏仅在顶部
│   │   ├── HeaderBottomToolbarFooterLayout-blue.png                              // 蓝色主题显示效果
│   │   ├── HeaderBottomToolbarFooterLayout-indigo.png                              // 紫色主题显示效果
│   │   ├── HeaderBottomToolbarFooterLayout-grey.png                              // 灰色主题显示效果
│   │   ├── HeaderBottomToolbarFooterLayout-blue-grey.png                              // 蓝灰色主题显示效果
│   ├── HeaderTopToolbarFooterLayout                                            // 应用栏仅在底部
│   │   ├── HeaderTopToolbarFooterLayout-blue.png                              // 蓝色主题显示效果
│   │   ├── HeaderTopToolbarFooterLayout-indigo.png                              // 紫色主题显示效果
│   │   ├── HeaderTopToolbarFooterLayout-grey.png                              // 灰色主题显示效果
│   │   ├── HeaderTopToolbarFooterLayout-blue-grey.png                              // 蓝灰色主题显示效果
├── src                                         // 源码目录
│   ├── asset                              // 项目相关设计资源
│   │   ├── css                              // 项目相关样式设计文件
│   │   │   ├── app.scss                              // 项目主要的样式文件，整合了其他样式文件板块，最后在app.vue进行引入
│   │   │   ├── framework.scss                              // 项目主要的框架样式文件
│   │   │   ├── reset.scss                              // 项目自定义的重置样式文件
│   │   │   ├── theme.scss                              // 项目主要的主题样式文件
│   │   │   ├── tool.scss                              // 项目主要的通用帮助样式文件
│   │   ├── js                              // 项目相关样式设计文件
│   │   │   ├── router
│   │   │   │   └── index.js                           // 路由配置
│   │   │   ├── vuex                                      // vuex的状态管理
│   │   │   │   ├── store.js                            // 引用vuex，创建store
│   ├── components                              // 组件
│   │   ├── Footer.vue                    // 底部公共组件
│   │   ├── Header.vue                     // 头部公共组件
│   │   ├── toolBar.vue                 // 应用栏组件
│   ├── layouts
│   │   ├── HeaderBottomToolbarFooterLayout                    // 头部应用栏仅在底部底部响应布局
│   │   │   ├── Layout.vue                     // 响应布局组件
│   │   ├── HeaderTopToolbarFooterLayout                    // 头部应用栏仅在顶部响应布局
│   │   │   ├── Layout.vue                     // 响应布局组件
│   ├── pages
│   │   ├── Login.vue                 // 登录页
│   │   ├── Dictionary.vue                     // 有查页面
│   │   ├── Voice.vue                     // 有音页面
│   │   ├── Rule.vue                     // 有则页面
│   │   ├── Address.vue                     // 有地页面
│   ├── service                                 // 数据交互统一调配
│   │   ├── loStorage.js                          // localstorage 统一处理文件
│   │   ├── getData.js                          // 获取数据的统一调配文件，对接口进行统一管理
│   │   ├── moAjax.js                          // 对于axios进行语法封装
│   │   ├── vueApollo.js                          // vue-apollo处理文件
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── static                                         // 源码目录
│   ├── img                              // 引用的静态图片
│   ├── plugins                              // 引用的插件
│   │   ├── css                              // 引用第三方的样式文件
│   │   ├── font                              // 引用第三方的字体文件
│   ├── mock                              // 数据模拟
│   │   ├── ToolBar.json                             // 项目中左侧面板的数据文件
├── index.html                                  // 入口html文件
.

```

# 项目效果图

 ![登陆页面显示效果](./screenshots/login.png)
 ![注册页面显示效果](./screenshots/register.png)
 ![应用栏仅在顶部蓝色主题显示效果](./screenshots/HeaderBottomToolbarFooterLayout/blue.png)
 ![应用栏仅在顶部紫色主题显示效果](./screenshots/HeaderBottomToolbarFooterLayout/indigo.png)
 ![应用栏仅在顶部灰色主题显示效果](./screenshots/HeaderBottomToolbarFooterLayout/grey.png)
 ![应用栏仅在顶部蓝灰色主题显示效果](./screenshots/HeaderBottomToolbarFooterLayout/blue-grey.png)
 ![应用栏仅在底部蓝色主题显示效果](./screenshots/HeaderTopToolbarFooterLayout/blue.png)
 ![应用栏仅在底部紫色主题显示效果](./screenshots/HeaderTopToolbarFooterLayout/indigo.png)
 ![应用栏仅在底部灰色主题显示效果](./screenshots/HeaderTopToolbarFooterLayout/grey.png)
 ![应用栏仅在底部蓝灰色主题显示效果](./screenshots/HeaderTopToolbarFooterLayout/blue-grey.png)
