import React,{Component} from 'react'
import {Menu} from 'antd'
import './index.less'

const {SubMenu,Item}=Menu
class AsideLeft extends Component{
    render(){
        return (
            <div className='aside-left'>
                <Menu mode='inline' className='aside-left-menu'>
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
                    <Item>素食</Item>
                </Menu> 
            </div>
        )
    }
}
export default AsideLeft