import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd'
import ArticleList from './ArticleList'
// import {addAr,postAr} from '../actions/actionCreators'
// import { connect } from 'react-redux'

//展示文章列表+添加文章按钮
class Content1 extends Component{
    shouldComponentUpdate(){
        return false
    }
    render(){
        return (
            <div>
                <Link to='article'>
                <Button
                type='link'
                size='large'
                style={{
                    fontSize:24,
                    fontWeight:700,
                }}
                >
                +
                </Button>
                </Link>

                <hr></hr>
                <h3>文章列表</h3>
                

                    <ArticleList></ArticleList>
                
            </div>
            
            )
    }
}

export default Content1