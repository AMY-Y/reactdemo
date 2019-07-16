import React,{Component} from 'react';
import './App.less'
import {Row,Col} from 'antd'
import Header from './components/Header/index'
import AsideLeft from './components/AsideLeft/index'
import Content from './components/Content/index'
import AsideRight from './components/AsideRight/index'
import Footer from './components/Footer/index'


class App extends Component{
  render(){
    return (
      <div className='app'>
        <Header></Header>
        <div className='main'>
          <Row>
            <Col span={6}>
              <AsideLeft></AsideLeft>
            </Col>
            <Col span={12}>
              <Content></Content>
            </Col>
            <Col span={6}>
              <AsideRight></AsideRight>
            </Col>
          </Row>
        </div>
        <Footer></Footer>
      </div>
      
    )
  }
}

export default App;
