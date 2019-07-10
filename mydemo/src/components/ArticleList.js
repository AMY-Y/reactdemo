import React,{Component} from 'react'
import {connect} from 'react-redux'
//遍历文章列表
class ArticleList extends Component{
    render(){
        const {postarti}=this.props;
        console.log(postarti);
        return (
            <ul>
                {postarti.map(
                    (item)=>
                        <li key={item.id}>{item.titleValue}<br/>{item.messageValue}</li>
                )}
            </ul>
            
        )
    }
}
const mapStateToProps=(state)=>({
    postarti:state.postarti
})
export default connect(mapStateToProps)(ArticleList);