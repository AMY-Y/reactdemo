import React,{Component} from 'react'
import {Menu} from 'antd'
import './index.less'
import menulist from '../../config/menulist'
import {NavLink} from 'react-router-dom'
const {SubMenu,Item}=Menu
class AsideLeft extends Component{
    constructor(props){
        super(props)
        const RenderTree=this.renderMenu(menulist)
        this.state={
            rendertree:RenderTree
        }
    }
    renderMenu=(data)=>{
        return data.map(item=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Item title={item.title} key={item.key}>
                    <NavLink to={item.key}>{item.title}</NavLink>
                </Item>
            )
        })
        
    }
    render(){
        return (
            <div className='aside-left'>
                <Menu mode='inline' className='aside-left-menu'>
                    {this.state.rendertree}
                    {/* 用数据渲染
                    <Item>首页</Item>
                    <SubMenu title='家常菜'>
                        <Item>快手菜</Item>
                        <Item>硬菜</Item>                 
                    </SubMenu>
                    <Item>早餐</Item>
                    <SubMenu title='肉'>
                        <Item>猪肉</Item>
                        <Item>鸡肉</Item>
                        <Item>鸭肉</Item>
                        <Item>羊肉</Item>
                    </SubMenu>
                    <Item>鱼</Item>
                    <Item>汤羹</Item>
                    <Item>烘培</Item>
                    <Item>主食</Item>
                    <SubMenu title='蔬菜'>
                        <Item>果实类</Item>
                        <Item>根茎类</Item>
                        <Item>叶类</Item>
                        <Item>菌菇类</Item>
                    </SubMenu>
                    <Item>面</Item>
                    <Item>素食</Item> */}
                </Menu> 
            </div>
        )
    }
}
export default AsideLeft