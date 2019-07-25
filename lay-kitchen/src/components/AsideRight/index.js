import React,{Component} from 'react'
import {Icon,Tag} from 'antd'
import './index.less'
import util from '../../util'
import axios from 'axios'

class AsideRight extends Component{
    constructor(props){
        super(props)
        this.state={
            taglist:[]
        }
    }
    componentDidMount(){
        this.getTagsApi()
    }
    //渲染标签
    renderTags=(data)=>{
        return data.map((item,index)=>{
            return (
                <li key={index}>
                    <h5>{item.name}</h5>
                    <div>
                        {util.getRandomArrElement(item.list,8).map((tag,index)=>{
                            return (
                                <Tag color='orange' key={index}>{tag.name}</Tag>
                            )
                        })}
                        
                    </div>
                </li>
            )
        })
    }
    //获取tagapi
    getTagsApi=()=>{
        axios.get("/class?appkey=8ef82e5bfc8cff93").then((res)=>{
            console.log(res)
            console.log(res.data.status)
            if(res.data.status===0){
                let taglist=this.renderTags(res.data.result)
                this.setState({
                    taglist:taglist
                })              
            }
            
        })
    } 
    render(){
        return (
            <div className='asideright'>
                <span>热门标签</span>
                <span> 更多 <Icon type="double-right" /></span>
                <div>
                    <ul >
                        {this.state.taglist}
                    </ul>
                </div>
                {/* <div>
                    <h5>功效</h5>
                    <div>
                        <Tag color="magenta">magenta</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="volcano">volcano</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="gold">gold</Tag>
                        <Tag color="lime">lime</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="geekblue">geekblue</Tag>
                        <Tag color="purple">purple</Tag>
                    </div>
                    <h5>功效</h5>
                    <div>
                        <Tag color="magenta">magenta</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="volcano">volcano</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="gold">gold</Tag>
                        <Tag color="lime">lime</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="geekblue">geekblue</Tag>
                        <Tag color="purple">purple</Tag>
                    </div>
                    <h5>功效</h5>
                    <div>
                        <Tag color="magenta">magenta</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="volcano">volcano</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="gold">gold</Tag>
                        <Tag color="lime">lime</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="geekblue">geekblue</Tag>
                        <Tag color="purple">purple</Tag>
                    </div>
                    <h5>功效</h5>
                    <div>
                        <Tag color="magenta">magenta</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="volcano">volcano</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="gold">gold</Tag>
                        <Tag color="lime">lime</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="geekblue">geekblue</Tag>
                        <Tag color="purple">purple</Tag>
                    </div>
                </div>
                
 */}
            </div>
            

        )
    }
}
export default AsideRight