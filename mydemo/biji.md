# 添加文章 问题：

###     样式无效：

​        已解决：css文件里将 类选择器 写成 元素选择器 了 orz

###     按照提示npm start 后，再引入antd,终端无法输入：

​        已解决：终止终端。然后重新cd 所在项目。npm install --save-dev antd

###     antd实现按需加载：

​        已解决：
​        按官网提示，
​        安装 babel-plugin-import//按需加载插件
​        安装 react-app-rewired customize-cra//对create-react-app默认设置进行自定义
​        修改package.json
​            react-scripts变成react-app-rewired
​        根目录创建config-overrides.js，修改默认设置
​        自定义主题
​            安装less less-loader
​            配置config-overrides.js
​        

​	此时可以npm start

### 修改主题颜色无效：

​    已解决：
​    如果觉得此时主题颜色不喜欢，可以直接在config-overrides.js的
​        addLessLoader({
​            javascriptEnabled: true,
​            modifyVars: { '@primary-color': '#e4393c' },//此处修改
​        }),
​    但修改完后，要终止终端，然后重新npm start一下，才会看到结果

### logo文字居中：

​    垂直居中：line-height=height
​    水平居中：text-align无效。
​            因为使用了margin-right:28px;margint-right:0;
​            可以加padding-left:28px居中。
​            文字改变大小后，28px已经不合适。只能在终端手动调。

### 组件名称命名：首字母大写。

### 写添加文章功能：

​    需要跳转路由：
​        安装react router相关 4X版本后需安装react-router-dom
​        npm install --save react-router-dom
安装react-router-dom:
安装mock：
​    拦截Ajax请求，生产随机数据模拟服务器响应
​    node环境安装：
​        npm install mockjs
article提交请求数据展示到Content1里：
​    安装axios
​        npm install axios

### src>index.js

#####     create-react-app依赖项是react 和react-dom

​    安装react-redux redux redux-thunk

#####     redux 状态管理。

​        提供{
​            createStore,//创建store。接收combineReducers,applyMiddleware
​            applyMiddleware,
​            }

#####     react-redux 连接react和redux。

​        提供{
​            Provider,//放在最外层，接收store,便于之后的组件通过context接收 传递的数据。
​            connect,//connect(mapStateToProps,mapDispatchToProps,)(展示组件)。第一个参数向下文props传递store 中的state，第二个参数向下文组件props传递action
​        }
​        应用：
​            store.js
​            let store=creator(reducer,applyMiddle(thunk,logger));
​            index.js
​            <Provider store={store}>
​                <App/>
​            <Provider/>
​            App.js
​                方法1:
​                class App extends Component{
​                    render(){

                        <div>{this.props.}</div>
​                    }
​                }
​                let mapStateToProps=(state)=>({num:state.num})
​                let mapDispatchToProps=(dispatch)=>({
​                    
​                })
​                export default connect(mapStateToProps,mapDispatchToProps)(App)
​                方法2:

#####     redux-thunk 中间件。在dispatch发送action后，到达reducer之前。发送异步action。是对dispatch方法的增强。

​        应用：将creatStore(reducer,applyMiddle(thunk,logger))

​    导入的reducer为reducers里面的文件combinReducer之后的index.js文件？
​    导入actions里面的异步actionCreator?
新建reducers文件夹
新建actions文件夹

### 路由：如何在同一位置渲染不同组件？

​    switch可以只显示一个组件,然而并没解决问题。
​    将Route放到该位置渲染
​    一个不错的router网站：https://reacttraining.com/react-router/web/example/sidebar

### redux结合react react-redux 和 redux-thunk之后到底是如何运行起来的?

​	redux:

​		思考store中state的结构

​		创建actionType

​		创建actionCreator函数,接收actionType外的其他参数，返回action对象（描述做了什么）

​		reducer根据actionType处理state,返回新state（更新state）

​		createStore(reducer,applyMiddleware(thunk))

​	react-redux:

​		provider:向下文组件传递数据。实际是通过context传递，但使用context写起来较繁琐。组件可通过   						

​			this.props.访问数据

​		connect(mapStateToProps,mapDispatchToProps,)(展示组件)：第一个参数向下文props传递store 中	

​			的state，第二个参数向下文组件props传递action。展示组件可通过this.props.访问state和

​			dispatch。

​	redux-thunk:

​		对dispatch的增强。在发送action到达reducer之前发送异步请求

​	

​			    																								

### 获取input中的值？

​	数据随着用户输入改变，使用受控组件

### Cannot read property 'setState' of undefined？

​    ‘无法读取未定义的属性'setState',点击的时候，并没有读取到setState中的值,方法中的this与组件中的this不一致，不是同一个this。
​    已解决
​    this.handle=this.handle.bind(this)
​    写成了this.hanle.bind(this)

### 思路不清晰？

​    先大概罗列一下state树的结构
​    {
​        postarti:[
​            {title:'haha',message:'lala'}
​        ]
​    }
​    容器组件：结合了react-redux 的connect

### TypeError: Cannot read property 'map' of undefined

​    (this.props.todos || []).map(() => {})
​    这样可以避免 undefined 或者 null 不能map的问题

### 提交时，TypeError: dispatch is not a function

​    export default connect(null, mapDispatchToProps)(Nav) 第一个参数是必传的

### input和textarea输入汉字时，在react input框中调用onChange事件的时候，在还没有输入完成，输入的拼音就直接变成字母带入到input的value值中。

​    https://www.jianshu.com/p/3b7dc3a00b47
​    没有onChange事件不行
​    composition三个事件都得调用

### 处理多个输入：

​    参考官方文档 表单>处理多个输入

###  value & defaultvalue:

​        input有默认值，不需要用户手动修改=》defaultvalue
​        input需要用户手动修改=》value

### shouldcomponentupdate

​	性能优化：条件渲染

​	https://segmentfault.com/a/1190000016494335

​	为什么在articleList文件里运行如下代码无效，在addArticle里就有效？

​		因为articleList里的class没有state,只有props

```js
shouldComponentUpdate(){
    return false
}
```

![1562656205136](C:\Users\jiliguagua\AppData\Roaming\Typora\typora-user-images\1562656205136.png)



输入文字console.log有延迟

so,判断条件用and

![1562656349775](C:\Users\jiliguagua\AppData\Roaming\Typora\typora-user-images\1562656349775.png)

​    

但是获取到的值仍不是最终状态

![1562656447678](C:\Users\jiliguagua\AppData\Roaming\Typora\typora-user-images\1562656447678.png)

​	已解决：

​		用arr记录每次changevalue后的值

### version2

​	参考：https://www.jb51.net/article/108427.htm

​		获取多个表单值做了优化，参考官网 表单input相关说明

​		用arr记录changevalue的值，可以获取到最后一次更改的值展示。而不是值变化一次，展示一次

​	问题：

​		每回保存两次才可以将信息push到arr里（第一次为空）

​		列表展示会有空白值

​		![1562685780019](C:\Users\jiliguagua\AppData\Roaming\Typora\typora-user-images\1562685780019.png)

原因：addArticle里的state里还没有title属性（因为setState为异步，console.log(this.)存在延迟。见官网setState）

### setState

#### ​	setState异步延迟：

​		因为会合并更新。

​		参考：https://www.cnblogs.com/mengff/p/9611614.html

​		setState的调用会引起React的更新生命周期的4个函数执行。

​		shouldComponentUpdate
​		componentWillUpdate
​		render//render被调用时才会被更新
​		componentDidUpdate

​	setState的调用会引起render的重新执行。

​	可以用setState的回调函数解决。建议用生命周期解决

​	![1562692860276](C:\Users\jiliguagua\AppData\Roaming\Typora\typora-user-images\1562692860276.png)

![1562693056208](C:\Users\jiliguagua\AppData\Roaming\Typora\typora-user-images\1562693056208.png)

初始arr为空。输入title和message仍为空。点保存后length为1。所以展示列表时会

![1562693215889](C:\Users\jiliguagua\AppData\Roaming\Typora\typora-user-images\1562693215889.png)

setState重复渲染：

原因：state更新前后不变时，setState重复渲染

https://www.cnblogs.com/feiyu6/p/9202873.html

用shouldComponentUpdate进行优化，但条件选不对。



### 仍存在的问题：

#### ​	提交后，仍会重复渲染。

​		已解决：发现 addArticle里的arr.length始终为0或1，length为0时，shouldComponentUpdate返回

​		false

​		新问题：addArticle里的文字只有保存时才渲染。

#### ​	点击 提交 按钮，
        onClick事件会先于onSubmit事件发生

#### 	初始值问题。在reducer里添加判断条件，有效但会报错。

​		const titleVal=arr.length===0?'0':arr[arr.length-1].title

​       		const messageVal=arr.length===0?'9':arr[arr.length-1].message

​	





###   第一次渲染时的值

    用firstRending控制第一次渲染时是否发起action，控制展示列表的值
    问题：没保存一次，展示列表就会进值