import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {Button,Input,Menu,Avatar} from 'antd'
import {connect} from 'react-redux'
import {transmit} from '../../redux/actions'
import './index.less'
const {Search}=Input
const {SubMenu,Item}=Menu
class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            value:''
        }
        this.getInputValue=this.getInputValue.bind(this)
        this.menuSearch=this.menuSearch.bind(this)
    }
    static propTypes={
        transmit:PropTypes.func.isRequired
    }
    //获取Input框的value值
    getInputValue=e=>{
        let value=e.target.value
        this.setState({
            value
        })
    }
    //菜谱搜索
    menuSearch=()=>{
        let value=this.state.value
        this.props.transmit(value)
    }
    render(){
        console.log(this.props)
        return (
            
            <div className='header'>
                <NavLink to='/home'>
                    <Button type='link' size='large' className='logo'>                   
                        仿小帮厨               
                    </Button>
                </NavLink>
                <Search
                className='search'
                placeholder='搜索食材、菜谱'
                onChange={this.getInputValue}
                size='large'
                enterButton='搜索'
                >
                </Search>
                <NavLink to='/search'>
                    <Button
                    onClick={this.menuSearch}
                    >搜索</Button>
                </NavLink>
                <Menu mode="horizontal" className='menu'>
                    <SubMenu title='菜单分类'>
                        <Item>常用主题</Item>
                        <Item>常见食材</Item>
                        <Item>时令食材</Item>
                    </SubMenu>                   
                    <Item>
                        <NavLink to='/topic'>
                        话题
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink to='/menu'>
                        菜单
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink to='/collections'>
                        我的主页
                        </NavLink>
                    </Item>
                </Menu>
                <NavLink to='user'>
                    <Avatar  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></Avatar>
                </NavLink>
                <NavLink to='logout'>
                    <Button>退出</Button>
                </NavLink>

            </div>
            
        )
    }
}
export default connect(state=>({
    keyword:state
}),{transmit})(Header)
