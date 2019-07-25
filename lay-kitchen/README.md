## 仿小帮厨笔记

### 安装
```
npm install create-react-app lay-kitchen   //安装create-react-app 并创建文件夹lay-kitchen
cd lay-kitchen
npm install --save-dev antd  //安装antd
npm install --save-dev babel-plugin-import    //安装按需加载组件代码和样式
npm install --save-dev react-app-rewired customize-cra   //对antd进行自定义设置
```
修改package.json
```
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
```
根目录创建config-overrides.js,配置babel-plugin-import
    ```
        const { override, fixBabelImports } = require('customize-cra');
        module.exports = override(
            fixBabelImports('import', {//配置babel-plugin-import
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: 'css',
            }),
            );
    ```
自定义主题：
    安装less less-loader
    配置config-overrides.js
    ```
        - const { override, fixBabelImports } = require('customize-cra');
        + const { override, fixBabelImports, addLessLoader } = require('customize-cra');

        module.exports = override(
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
        -   style: 'css',
        +   style: true,
        }),
        + addLessLoader({
        +   javascriptEnabled: true,
        +   modifyVars: { '@primary-color': '#1DA57A' },
        + }),
        );
    ```

为了查看小帮厨的页面效果，下载了yarn
npm install -g yarn 
yarn install

### 问题
 #### className
    再次遇到这个问题：
        js：className='logo'
        less: .logo{}
#### antd => Input
    ```
        const {Search}=Input
        直接给Search加className,居中调整。无法达到预期效果。然后给.header加了align-item：center(在display:flex的基础上)
    ```
####  静态页面搭建完成。开始交互

##### 路由配置
    安装路由和axios
    ```
        npm install --save-dev react-router-dom axios
      
    ```
##### Header
    到此处有点乱(路由配置，redux,state结构,antion,reducer之类还没定)
    所以有切到Header里来
        npm install --save-dev prop-types

###### Link vs NavLink
    Link是react的使用，NavLink是Route的配置。
    导航链接用NavLink，因为NavLink多出了active、exact等属性
    NavLink  to={{pathname,state}}  pathname?state?
######  安装redux react-redux redux-thunk
    ```
    npm install --save-dev redux react-redux redux-thunk
    ```
##### 左侧菜单栏
    优化：直接用数据渲染。棒棒哒
    在config文件夹内放置数据menulist.js
##### Content
    要多次复用，
    数据请求错误。
    “network error（网络错误）”表示根本无法到达服务器(例如连接拒绝或名称未解析)或请求配置有错误(错误的请求地址)。
    network里显示 200状态码。但无响应数据。
    最终查找问题是   跨   域   ！  ！   ！因为页面地址是localhost:3001
    请求地址是   https://api.jisuapi.com/recipe/search   
    明显的  跨域！！！
    浏览器对xhr对象的跨域反应是：会发送请求和响应。但是浏览器不接受


​    ![1563549823777](C:\Users\jiliguagua\AppData\Roaming\Typora\typora-user-images\1563549823777.png)


    解决跨域：
    package.json里边配置'proxy':'baseurl'
    // "proxy": {
  //   "/app":{
  //     "target":"https://api.jisuapi.com/recipe",
  //     "changeOrigin":true
  //   }
  // }方案失败
    在config文件夹下建立axiosconfig.js
    其中：qs是一个序列化库
    尝试失败

    解决
    ```
        package.json
        "proxy":"http://api.jisuapi.com/recipe"
        content/index.js
        
    ```









This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
