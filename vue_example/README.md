# vue_example

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

01：分析脚手架 1.脚手架文件结构
├── node_modules
├── public
│ ├── favicon.ico: 页签图标
│ └── index.html: 主页面
├── src
│ ├── assets: 存放静态资源
│ │ └── logo.png
│ │── component: 存放组件
│ │ └── HelloWorld.vue
│ │── App.vue: 汇总所有组件
│ │── main.js: 入口文件
├── .gitignore: git 版本管制忽略的配置
├── babel.config.js: babel 的配置文件
├── package.json: 应用包配置文件
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件 2.关于不同版本的 Vue 1. vue.js 与 vue.runtime.xxx.js 的区别： 1. vue.js 是完整版的 Vue，包含：核心功能 + 模板解析器。 2. vue.runtime.xxx.js 是运行版的 Vue，只包含：核心功能；没有模板解析器。 2. 因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 这个配置项，需要使用 render 函数接收到的 createElement 函数去指定具体内容。
3.vue.config.js 配置文件 1. 使用 vue inspect > output.js 可以查看到 Vue 脚手架的默认配置。 2. 使用 vue.config.js 可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh

02：ref 属性
ref 属性： 1.被用来给元素或子组件注册引用信息，即 id 的替代者 2.应用在 html 标签上获取的是真实 dom 元素，应用在组件标签上是组件实例对象 vc 3.使用方式： 1.打标识：<h1 ref='xxx'></h1> 或 <School ref='xxx'></School> 2.获取：this.$refs.xxx

03:props 配置项 1.功能：让组件接收外部传过来的数据 2.传递数据：<School name='xxx'> 3.接收数据：
（1）只接收：props:['name']
（2）限制类型：props:{name:String}
（3）限制类型+限制必要性+指定默认值：props:{type:name,required:true,default:'hh'}(required 和 default 只能二选一)

注意：props 是只读的，Vue 底层会监测你对 props 的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制 props 的内容到 data 中一份，然后去修改 data 中的数据。

04:maxin 混入
功能：可以把多个组件共用的配置提取成一个混入对象
使用方式：
（1）定义混合，例如：
{
data(){},
methods:{...}
...
}
（2）使用混入，例如：
全局混入：Vue.maxin(xxx)
局部混入：maxins:['xxx']
