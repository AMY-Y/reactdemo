import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {postAr} from '../actions/actionCreators'
import './AddArticle.css';

import {Button,Input} from 'antd';
import { connect } from 'react-redux';
const {TextArea}=Input;
//添加文章并提交
//Version1
/* let isComposition=false;
const isChrome = !!window.chrome && !!window.chrome.webstore
class AddArticle extends Component{
    constructor(props){
        super(props)
        this.state={
            titleValue:'',
            messageValue:''
        }
        this.handleCompositionMes=this.handleCompositionMes.bind(this)
        this.changeMes=this.changeMes.bind(this)
        this.handleCompositionTit=this.handleCompositionTit.bind(this)
        this.changeTit=this.changeTit.bind(this)   
    }
    
    handleCompositionTit(e){
        if(e.type==='compositionend'){
            console.log(e.target)
            isComposition=false
            if(!isComposition&&!isChrome){
                this.changeTit(e)
                
            }
        }else{
            isComposition=true
        }
    }
    changeTit(e){
        // console.log(e.type+':'+e.target.value+this.state.titleValue)
        if(!isComposition){
            this.setState({
                titleValue:e.target.value
            })   
        } 
        console.log(this.state.titleValue)
    }  
    handleCompositionMes(e){
        // console.log(e.type)
        if(e.type==='compositionend'){
            isComposition=false
            console.log(e.target)
            if(!isComposition&&!isChrome){
                this.changeMes(e)
                
            }
        }else{
            isComposition=true
            
        }   
    }
    changeMes(e){
        if(!isComposition){
            this.setState({
                messageValue:e.target.value
            })   
        } 
        console.log(this.state.messageValue)
    }
    
    shouldComponentUpdate(p,s){
        const titleVal=this.state.titleValue;
        const messageVal=this.state.messageValue;
        console.log(titleVal==='')
        console.log(messageVal==='')
        if(titleVal===''&messageVal===''){
            return false
        }
        return true
    }
    render(){
        const titleVal=this.state.titleValue;
        const messageVal=this.state.messageValue;
        return (
            <div className="article">
                <Input placeholder='请输入标题' 
                
                onCompositionStart={this.handleCompositionTit}
                onCompositionUpdate={this.handleCompositionTit}
                onCompositionEnd={this.handleCompositionTit}
                onChange={this.changeTit}></Input>
                {titleVal}{messageVal}
                <TextArea 
                
                onCompositionStart={this.handleCompositionMes}
                onCompositionUpdate={this.handleCompositionMes}
                onCompositionEnd={this.handleCompositionMes}
                onChange={this.changeMes} 
                autosize={{minRows:18}} 
                style={{margin:10}}></TextArea>
                <Link to='/'>
                    <Button onSubmit={this.props.post(titleVal,messageVal)}>提交</Button>
                </Link>               
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>({
    post:(titleValue,messageValue)=>{
        dispatch(postAr(titleValue,messageValue))
    }
})

export default connect(null,mapDispatchToProps)(AddArticle); */





//Version2
let isComposition=false;
const isChrome = !!window.chrome && !!window.chrome.webstore
class AddArticle extends Component{
    constructor(props){
        super(props)
        this.state={
            arr:[]//时刻保存文章内容。便于获取最后一次的数据
        }
        this.handleComposition=this.handleComposition.bind(this)
        this.handleChange=this.handleChange.bind(this) 
        this.handleClickButton=this.handleClickButton.bind(this)
    }
    handleChange(e){
        let name=e.target.name
        let value=e.target.value
        if(!isComposition){
            this.setState({
                [name]:value
            })
        }      
    }
    handleComposition(e){
        if(e.type==='compositionend'){
            isComposition=false
            if(!isComposition&!isChrome){
                this.handleChange(e)
            }
        }else{
            isComposition=true
        }
    }
    handleClickButton(e){
        const title=this.state.title
        const message=this.state.message
        if(title!==''&message!==''){
            this.setState({
                arr:[{title,message},...this.state.arr]
            }) 
        }               
    }
    shouldComponentUpdate(nextProps,nextState){//影响的是本页面的渲染？不，也影响文章列表的渲染
        if(nextState.arr.length===0){
            return false
        }
        return true
    }
    render(){
        const arr=this.state.arr
        const titleVal=arr.length===0?'':arr[arr.length-1].title
        const messageVal=arr.length===0?'':arr[arr.length-1].message
        console.log(this.state)//调试
        console.log(this.state.arr)//调试
        console.log('arrlength '+this.state.arr.length)//调试
        return (
            <div className="article">
                <Input placeholder='请输入标题' 
                name='title'
                onChange={this.handleChange}
                onCompositionStart={this.handleComposition}
                onCompositionUpdate={this.handleComposition}
                onCompositionEnd={this.handleComposition}
                ></Input>
                {this.state.title}{this.state.message}
                <TextArea 
                name='message'
                onChange={this.handleChange}
                onCompositionStart={this.handleComposition}
                onCompositionUpdate={this.handleComposition}
                onCompositionEnd={this.handleComposition}
                autosize={{minRows:5}} 
                style={{margin:10}}></TextArea>
                <Button onClick={this.handleClickButton}>保存</Button>
                <Link to='/'>                   
                    <Button  onClick={this.handleClickButton} onSubmit={this.props.post(titleVal,messageVal)}>提交</Button>
                </Link>               
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>({
    post:(titleValue,messageValue)=>{
        dispatch(postAr(titleValue,messageValue))
    }
})

export default connect(null,mapDispatchToProps)(AddArticle);