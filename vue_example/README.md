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





# 总结

### 01：分析脚手架 

##### 1.脚手架文件结构

```
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
├── package-lock.json：包版本控制文件
```

#####  2.关于不同版本的 Vue 

```
1.vue.js 与 vue.runtime.xxx.js 的区别：
  1. vue.js 是完整版的 Vue，包含：核心功能 + 模板解析器。
  2. vue.runtime.xxx.js 是运行版的 Vue，只包含：核心功能；没有模板解析器。
2. 因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 这个配置项，需要使用 render 函数接收到的 createElement 函数去指定具体内容。
```

##### 3.vue.config.js 配置文件 

```
1.使用 vue inspect > output.js 可以查看到 Vue 脚手架的默认配置。
2. 使用 vue.config.js 可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh
```

### 02：ref 属性

```
ref 属性： 
	1.被用来给元素或子组件注册引用信息，即 id 的替代者
    2.应用在 html 标签上获取的是真实 dom 元素，应用在组件标签上是组件实例对象 vc
    3.使用方式： 
    	1.打标识：<h1 ref='xxx'></h1> 或 <School ref='xxx'></School>
        2.获取：this.$refs.xxx
```

### 03:props 配置项 

```
1.功能：
	让组件接收外部传过来的数据 
2.传递数据：
	<School name='xxx'> 
3.接收数据：
    （1）只接收：props:['name']
    （2）限制类型：props:{name:String}
    （3）限制类型+限制必要性+指定默认值：props:{type:name,required:true,default:'hh'}(required 和 default 只能二选一)

注意：props 是只读的，Vue 底层会监测你对 props 的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制 props 的内容到 data 中一份，然后去修改 data 中的数据。
```

### 04:maxin 混入

```
1.功能：
	可以把多个组件共用的配置提取成一个混入对象
2.使用方式：
    （1）定义混合，例如：
        {
        data(){},
        methods:{...}
        ...
        }
    （2）使用混入，例如：
        全局混入：Vue.maxin(xxx)
        局部混入：maxins:['xxx']
```

### 05:插件

```
1.功能：
	用于增强Vue
2.本质：
	包含install方法的一个对象，install的第一个参数是vue，第二个及以后的参数是插件使用者传递的数据
3.定义插件：
	对象.install=function(Vue,options){
		....
	}
4.使用插件：
	Vue.use()
```

### 06:样式

```
scoped样式
	作用：让样式在局部生效，防止冲突
	写法：<style scoped>
```

### 07:TodoList案例

```
1.组件化编码流程：
	（1）拆分静态组件：组件按照功能点拆分，命名不要和html元素冲突
	（2）实现动态组件：考虑好数据的存放位置，数据是一个组件在用还是一些组件在用：
		一个组件在用：放在组件自身即可
		一些组件在用：放在他们共用的父组件上
	（3）实现交互：绑定事件开始
2.props适用于：
	（1）父组件==>子组件 的通信
	（2）子组件==>父组件 的通信（要求父先给子一个函数）
3.使用v-model时切记：v-model绑定的值不能是props传过来的值，因为props属性是不可修改的
4.props传过来的若是对象类型的值，修改对象中的属性时vue不会报错，但是不建议这样做
```

### 08:webStorage

```
1.存储内容大小一般支持5MB左右，不同浏览器可能不同
2.浏览器端跳过Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制
3.相关API
    xxxxxStorage.setItem('key', 'value'):该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。
    xxxxxStorage.getItem('person'):该方法接受一个键名作为参数，返回键名对应的值。
    xxxxxStorage.removeItem('key'):该方法接受一个键名作为参数，并把该键名从存储中删除。
    xxxxxStorage.clear():该方法会清空存储中的所有数据。
4.注意：
    SessionStorage存储的内容会随着浏览器窗口关闭而消失。
    LocalStorage存储的内容，需要手动清除才会消失。
    xxxxxStorage.getItem(xxx)如果xxx对应的value获取不到，那么getItem的返回值是null。
    JSON.parse(null)的结果依然是null。
```

### 10：组件的自定义事件

```
1.一种组件间的通信方式，适用于：子组件 ===> 父组件
2.使用场景：A是父组件，B是子组件，B给A传递数据，就要在A中给B绑定自定义事件（回调在A中）
3.绑定自定义事件：
	1.第一种方式：在父组件中：
		<Student v-on:atguigu="getStudentName" /> 或
		<Student @atguigu="getStudentName" />
	2.第二种方式：在父组件中：
		<Student ref="student" @click.native="show" />
		mounted() {
            // 绑定自定义事件
            this.$refs.student.$on("atguigu", this.getStudentName);
        }
```

