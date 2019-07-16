import React,{Component} from 'react'
import {Button,Input,Menu,Avatar} from 'antd'
import './index.less'
const {Search}=Input
const {SubMenu,Item}=Menu
class Header extends Component{
    render(){
        return (
            <div className='header'>
                <Button type='link' size='large' className='logo'>
                仿小帮厨
                </Button>
                <Search
                className='search'
                size='large'
                enterButton='搜索'
                >
                </Search>
                <Menu mode="horizontal" className='menu'>
                    <SubMenu title='菜单分类'>
                        <Item>常用主题</Item>
                        <Item>常见食材</Item>
                        <Item>时令食材</Item>
                    </SubMenu>                   
                    <Item>话题</Item>
                    <Item>菜单</Item>
                    <Item>我的主页</Item>
                </Menu>
                <Avatar  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></Avatar>

            </div>
            
        )
    }
}
export default Header
