import React,{Component} from 'react'
import {Card} from 'antd'
import axios from 'axios'
// import http from '../../config/axiosconfig' 尝试失败
import './index.less'
import {NavLink} from 'react-router-dom'
const {Meta}=Card;
class Content extends Component{ 
    constructor(props){
        super(props)
        this.state={
            content:[]
        }
    }
    componentDidMount() {
        this.getApiData(this.props.keyword)
    }
    
    componentWillReceiveProps(nextProps) {
        this.getApiData(nextProps.keyword)
    }
    //渲染内容
    renderContent=(data)=>{
        return data.map(item=>{
            return (
                <NavLink key={data.id} to={{
                    pathname:`/common/detail/${item.id}`,
                    state:item
                }}
                >
                    <Card
                        hoverable
                        size='small'
                        className="card"
                        cover={<img alt="example" src={item.pic} />}
                        onClick={this.openMenuDetail}
                        id={item.id}
                    >
                        <Meta
                        style={{ whiteSpace: 'nowrap' }}
                        title={item.name}
                        description={item.tag}
                        />
                    </Card>
                </NavLink>
            )
        })
    }
    //获取api数据  
    getApiData=(keyword)=>{
        const num=12 
        
        // const res=await http.get('/search',{
        //     params:{
        //         keyword,
        //         num,
        //         appkey:"8ef82e5bfc8cff93"    
        //         }
        // })
        axios.get(
            '/search',{
                params:{
                    keyword,
                    num,
                    appkey:'8ef82e5bfc8cff93'//只能用极客数据的appkey，不能用appsecret
                }
            }
        ).then(res=>{
            console.log(res)
            console.log(res.data.status)
            if(res.data.status===0){
                let content=this.renderContent(res.data.result.list)
                this.setState({
                    content:content
                })
            }
        },err=>{
            console.log(err)
        })
        
    }
    render(){
        return (
            <div className='content'>
                {/* 成为可复用组件 */}
                {this.state.content}
                {/* 
                <Card
                size='small'
                hoverable
                style={{ width: 180 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card> 
                */}
            </div>
        )
    }
}
export default Content