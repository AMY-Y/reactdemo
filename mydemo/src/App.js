import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Content1 from './components/Content1'
import {Layout,Menu} from 'antd';
import './App.css';
import AddArticle from './components/AddArticle'
const {Header,Sider,Content}=Layout;
//展示组件：头部导航栏
function Header1(){
  return (
    <Header className="header">
      <div className="logo" >hello react</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
        className="navMenu"
      >
        <Menu.Item key="login">登录</Menu.Item>
        <Menu.Item key="register">注册</Menu.Item>
      </Menu>
    </Header>
  )
}
// 展示组件：侧边栏
function Sider1(){
  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 ,textAlign:'center'}}
      >        
          <Menu.Item key="content"><Link to='/content'>文章列表</Link></Menu.Item>
          {/* <Menu.Item key="addarticle"><Link to='/article'>添加文章</Link></Menu.Item>        */}
      </Menu>
    </Sider>
  )
}
function Basic() {
  return (
    <Layout>
      <Header1></Header1>
      <Layout>
        <Sider1></Sider1>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
              style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 500,
              }}
              >
              {/* 路由配置 */}
              <Route exact path='/' component={Content1}/>
              <Route path='/content' component={Content1}></Route>
              <Route path='/article' component={AddArticle}></Route>    
          </Content>        
        </Layout>
      </Layout>
    </Layout>
  );
}
const App=()=>{
  return (
    <Router>
      <Basic></Basic>         
    </Router>
  )
}


export default connect()(App);
