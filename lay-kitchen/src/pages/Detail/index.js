import React,{Component} from 'react'
import { Table, Statistic, Icon, Tag, message } from 'antd'
import './index.less'
import Util from '../../util'

const {CheckableTag}=Tag
const columns=[
    {
        title:'用料',
        dataIndex:'mname'
    },{
        title:'用量',
        dataIndex:'amount'
    },{
        title:'类型',
        dataIndex:'type'
    }
]
class Detail extends Component{
    constructor(props){
        super(props)
        this.state={
            menu:this.props.location.state,
            islike:false,
            value:1163,
            starColor:'#e4393c',
            isCollect:false
        }
    }
    componentWillMount(){
        this.getCollection()
    }
    getCollection=()=>{
        let menuName=this.state.menu.name;
        let isCollect=this.state.isCollect;
        let starColor=this.state.starColor;
        if(localStorage.getItem(menuName)!=null){
            isCollect=true
            starColor='#e07599'
        }
        this.setState({
            isCollect,
            starColor
        })

    }
    //渲染菜谱步骤
    renderMenuStep=(data)=>{
        return (data.map((item,index)=>(
            <div key={index}>
                <img src={item.pic} alt=''/>
                {/* alt=''必须写，否则报错 */}
                <div>
                    <div>{index+1}</div>
                    <p dangerouslySetInnerHTML={{__html:item.pcontent}}></p>
                </div>
            </div>
        )))
    }
    getLike=()=>{
        let value=this.state.value
        let isLike=this.state.isLike
        if(!this.state.isLike){
            value++//为什么不能加逗号？
            isLike=true
        }else{
            value--
            isLike=false
        }
        this.setState=({
            value,
            isLike
        })
    }
    //点击收藏
    handleCollection=()=>{
        let starColor=this.state.starColor
        let isCollect=this.state.isCollect
        const menu=JSON.stringify(this.state.menu)
        const menuName=this.state.menu.name
        if(isCollect===false){
            starColor="#e07599"
            isCollect=!isCollect
            localStorage.setItem(menuName,menu)
        }else{
            starColor='#e4393c'
            isCollect=!isCollect
            localStorage.removeItem(menuName)
        }
        this.setState({
            starColor,
            isCollect
        })
        message.success(isCollect?'收藏成功':'取消收藏')
    }
    render(){
        const menu=this.state.menu
        const tags=Util.toArray(menu.tag).slice(0,6)
        const data=Util.getRealType(menu.material)
        const process=menu.process
        return (
            <div className='wrapper'>
                <div className='info'>
                    <img className='img' src={menu.pic} alt='' />
                    <div className='introduce'>
                        <h2 className='menu-name'>
                            <span>{menu.name}</span>
                        </h2>
                        <h4>准备时间:{menu.preparetime}</h4>
                        <h4>制作时间:{menu.cookingtime}</h4>
                        <h4>用餐人数:{menu.peoplenum}</h4>
                        <div className='tags'>
                            <h5 style={{marginRight:8,display:'inline'}}>所属标签:</h5>
                            {
                                tags.map(tag=>(
                                    <CheckableTag key={tag}>
                                        {tag}
                                    </CheckableTag>
                                ))
                            }
                        </div>
                        <div className='statistic'>
                            <Statistic title='尝试人数' value={112893} className='statistic-title' />
                            <Statistic 
                                className='statistic-item'
                                title='支持一下'
                                value={this.state.value}
                                prefix={<Icon type='like' className='like' onClick={this.getLike}></Icon>}
                            />
                            <Icon type='star'
                            theme='twoTone'
                            twoToneColor={this.state.starColor}
                            style={{fontSize:30}}
                            onClick={this.handleCollection}
                            ></Icon>
                        </div>
                    </div>                   
                </div>
                <div className='describe'>
                    <span className='marks'></span>
                    <span dangerouslySetInnerHTML={{__html:menu.content}}></span> 
                    <span className='marks'></span>
                </div>
                <div className='ingredients'>
                    <h3>
                        <Icon className='icon' type='shopping' theme='twoTone' twoToneColor='#e4393c'></Icon> 
                        食材准备
                    </h3>
                    <Table 
                    columns={columns} dataSource={data} size='small' pagination={false}
                    >
                    </Table>
                </div>
                <div className='process'>
                    <h3>
                        <Icon className='icon' type='shopping' theme='twoTone' twoToneColor='#e4393c' />
                        {menu.name}的做法
                    </h3>
                    {this.renderMenuStep(process)}
                </div>
            </div>
        )
    }
}
export default Detail