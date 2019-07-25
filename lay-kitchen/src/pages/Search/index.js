import React,{Component} from 'react'
import {connect} from 'react-redux'
import Content from '../../components/Content'
class Search extends Component{
    render(){
        return (
            <div>
                <Content keyword={this.props.keyword}></Content>
            </div>
        )
    }
}

export default connect(state=>({keyword:state}))(Search)