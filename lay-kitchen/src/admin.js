import React,{Component} from 'react'
import './common.less'
import {Row,Col} from 'antd'
import Header from './components/Header/index'
import AsideLeft from './components/AsideLeft/index'
import AsideRight from './components/AsideRight/index'
import Footer from './components/Footer/index'
class Admin extends Component{
    render(){
      return (
        <div className='app'>
          <Header></Header>
          <div className='main'>
            <Row>
              <Col span={5}>
                <AsideLeft></AsideLeft>
              </Col>
              <Col span={14}>
                {this.props.children}
              </Col>
              <Col span={5}>
                <AsideRight></AsideRight>
              </Col>
            </Row>
          </div>
          <Footer></Footer>
        </div>
        
      )
    }
  }
  
  export default Admin;
  